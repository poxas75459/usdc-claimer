/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2RH6s8Goh6bFmC4WeRvX5PDVnZefC5K6ZGSZpbuH9ACW32kcVEwyJvvEJggNtrJmhpsEaT3tHcdazqfn4QWZ96HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4VoTT2ufhEWbHh4bAcWV7ozo9bT9j76gBBVHJH3TyvFphLjFCU1M4xyndhFCsipadk9cauYgMn588dbsoYxdmD",
  "key1": "4SGvu4wgGF9Fh7pEg581Bcsu2wbQgNSsBiDxJcNNioseQLJYFVQ4EEL7CTnB6Jr1qzo3AALBU3Y6DYyGxeg9DGyS",
  "key2": "3LdBjzSK9kzPjegZKBgBbzutAft1NmUDfcyhxRPbHR8FMLeN8rmQrbEoS8TAf6tpgkTV2pKWFce7wVH8ZGSPxcS5",
  "key3": "2T3Kq2pspd2aPLe1tQ68rbHasofKzySLuWaiLDab9Mp16UmcB5ETzCXnm8ZbaiZ3VxGYFvKPzVbkFPwHcnXrucRp",
  "key4": "3XS3PXqHZtXxPyw9V8LAKXphZuE4jkqpoXUDKw6soXGCw97fnk1LcoGW4n4BLUBUynzm7fHyETpaR3h1pn5hpZpX",
  "key5": "4NYQ3oymZPJp9V1Zd7c6XPRFRZoyF5SDeoqP42TMqxqfjDFnC7H4VYK9CYnLVs3V2uAqrHxUbbjmNEza7YJ9nWRW",
  "key6": "3sMY6D5eomMyZbH6HrMoMNeQdgtbBNMmEmn5hM82M81ZJmU5DpUpm188ieQAqM8v7923VLQ9NFwgTUV6hchR6an8",
  "key7": "4SaPASiAaXt1o6Ch34PfFoaw4Ru81Ad3cgqvk5zTqMFkA1ZWaA7a3rcRD4fYkPiHdJv1KkrpiMSSEPtGWAzqm152",
  "key8": "56RGGDwGkRbRpyP5Dd6r8Zqftmw9BpZNpGjm8bzqdUzDa8MPhZDfbLyMi8J9E4zwLn5Yc9cRvaYFtUfi8Zrp5Tix",
  "key9": "3ffhQwZpHgYk3QZscTYrp4MQDWssABQuViS15UoHykigpp6xFoiyX9sEvvqx9XhgN8okmDoxJxfJrURBpZGsqabJ",
  "key10": "AFNAtD6gAgwJf4sobfN6NBTKfTJv64RofwwP8PP5BYfUwTpYkxSMZMoCaoJQ5AVGzU8oZyvgqkurLR6uzBgB1uk",
  "key11": "4ytZx3cAGoswgWC7VnyXYo8enjHRWvXd1iqDkGqu6LZFhuZWcPXPXGU3fzCyNyokVNLCW86wZF6d7N3tvCQtDDcE",
  "key12": "5KuYzuwKVVbATXH1QivAYpFyEWaH1Y4DDU6f2ueVGL6cxaYdB1XsTgtgdc9t5DFspVfCVWwrU8buvtkVN1vjVxX9",
  "key13": "3c7YUjXnZEc7aNNrLFZNxGqbmgBH6U38buEBkjHwKrftQRa36uXuyTua94JiowmQD58f1Q6Sv5o4iXtE7Pjk6YGk",
  "key14": "4F24f3f5WgeaWJhNdHFzBePsCZVvBMyz7QXfNaxWLL9vcC9k4MrPDsRNNoouN3dzgVYSndg5SATTeEvm47RJDMnr",
  "key15": "3cFgX7rzQVHXQ271yEpk9ryjaAKAp2dimWBWK4tfKRGkZjbqKLVjHWHMWCpDiNph3z12mHkKmKjoZCTCTsDxB5zf",
  "key16": "37zhVkbtfm2kaWnwkCyaZAW8XHu8Y3GmSJBh6h6XBrdNGm2umZiAuRVR1NEHguEW7Gv9dsgvpLv9nTdnj8pZRDK7",
  "key17": "3KWZtty8m4ZPYjrfCW5UW5tNuGXnmHtLeTXaK4yZvvfmmFAGWdRi6QmEG1rtkRFGtywFXyNArg9cJeKuddoNaRsH",
  "key18": "5jTF2eYAXThgbWH15oRVcAW5btv1K6gCXMu4wNwAqBgCPkF3USkrFESGCrQ3xPuWr1Q9oiuoeYbfKkunA6kUvypM",
  "key19": "5zdW8DxDWPJfLwAfprbkW2VrPUckH1rEfs9EawjFHX4okwVnP5vqLJXFQN2F3jJyyA6YVpX6eMsbUMoAHQZebWj4",
  "key20": "4e6JJuSSGasBWQUxi4wfv5nCVe2X118RSx2jiuiKXvkc7SSzuHTHXJ6CfD1NnFTn8zeXs1SHnDgqew9UBBxWRq47",
  "key21": "5wUd1t59H6UyGpQzP7in8GNm9Z2CzgHwCr6FA514GuZ9VFiHR6YQw54nLh9jAQfAf5rwd5oFCfmAto2wQDmr4VfX",
  "key22": "5CnKqi4U4sMv3hq79fACVh6rLzYH1zZ2cjcU4inJjhaeS4rooFEqBSKNQvPZDDQfqcuGbP93xRCk8RYFWLx3pjWu",
  "key23": "5deejMDxGh5ZSs4WzM3dZ4EutpRqP4m5yPTaRgCo1W4RR7e5f6Gw6D56VF4zicVgSMvCjs3m35tp8rkR8Mu9X3DG",
  "key24": "2wP9XLXbJB9NKbQrm1twDvG2bdpGZpvn1YnLoTtjYvUTf495XBBSR2CKkbSim9CnJeSy9gwpo3qDB9GWmjgsr1Zd",
  "key25": "CsEvuCqcesURcMKPdUxDQBYjW6uin2n8GnyifiQFHp3zHD3M28LWkEqazzAFs5QPHyRhru9JuVwCq3pdoNLHo25",
  "key26": "2F2TME13Qdj9jdQ5aWpsrBA61b8RcBTL1apiBdBkUwLDT1Cx1Ej5ALdM6H9dMVwSMGGc3SVnGWWn4jrajqUokS4c",
  "key27": "LfsXkyQkv4FVJhAnubK2gy1EuF9DWUZr5A1HzyziURzucKDAQgC7u2dkLVrm5KvqkF1R6g4XjTVx1jVYPjY4e17",
  "key28": "4bYwvyvWJkJaCm17FKGqpzZRPd5rfmfGs35YSzqEGxKLvqVqXcckbT8dhBBm22emKKxq24iadPXT3CitiUCQRrap"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
