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
    "4reL7gRuPS7DqiAQJsnGBGjJy3aK4pBjpuxxnBWmtG564q1UcogntKozPX2h7evHtJ7whrNXAX7gKvFcNL6oqBNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEari3LnaQanyJu6mGjDkLdMJWyroiKW3n4kv3xpSso9cg1DRTbzEjsZcAR9kADRZTrH827LaL5GFUc1wVCgQnh",
  "key1": "5dXM1Zep8C724yG1khhyXcyDr8V7qcRqZkPFFJgU1ifznGn91GGxAaeQWGkmdAfhfU3rBcZS1wZbcHjETRig2M9o",
  "key2": "5eeUdwd77AZkN755H1BWJgy5Yz7vDumGJS8ham9LprrT6Pe6WV1vKT7dtYJMzWVGsnqKgc1ZkC3e6caPVZNphwFV",
  "key3": "61Md48ANawWhvU8C6NDQNexDE2VnAxp6GcWHzUjoyrKxqmWvMUJUkzrGEqMc221ZxMoKdmoKmyyCtNzd8TbECbwQ",
  "key4": "3bL1xaASFVpu7HzS6bRaPpHVcPpcV5cpW5wZrHiDqKqYn4fprFXFez7YHucY2Wuv3FrZFRan5zcZx6PiV1Fy6J5L",
  "key5": "a3k9xmYessexo1zW1HDpRCHiTKSekGa5ToaZqGu7ABpv7jwEi6JSB2C8NzX5GaPwvFAL9GMRTSVaSNxCxi185Gq",
  "key6": "2SHLgX2MxHLqmfZBajRYKrB2eSKfE7At4BRMnmd9uba8PLE9bjcxcZxhr6JPBKsgnqC3XgK6PiAJMxPtaCYADzAd",
  "key7": "2UqG2SBEJ9A3WJ7mg1GvQAL8krieUns673QuiAkHq64euD4vgeevoQfTiewWtTSGp8FPu57n8Q8U64RQ6swvAKuV",
  "key8": "3mi4YuUVGwzC4Gt4vCEcqYiyD11yV6jSUyMatXxHrGVyi4z69HQs4djqPtjQfVtYvBfUnCGP5YwcHzB5pAjJNekF",
  "key9": "4UavagG2JLTVXCt4TX9VySVkDK5ETBV7BBtvASXTHa712V62SYMxiM4gfvZwdGUMvKZ5g49yoLhMcJu2P2DyXruC",
  "key10": "48Yc41FQ4Kui1X4GdYJg3Zk3huB7qCa1iD3fNtVz8tbFRgmxSsbgK1txLZKCXYTMMHsxSubxqm9CrYrCTQFDaiKp",
  "key11": "2Krv7dNMHxqC7WsAEQ1yzFWgfX1GJqkjgQP4ZZq7KTtyTsGGjptoNRq5JDBXfGDZYn9pvWjbhzEX25BTUBKq8xgQ",
  "key12": "pDqJMZgXjd2VbHqtajVRgWu6fPX3LsVJjvzCHBoVSbRQj5jx54FGu7FD7mKEM5CT55VTY7Lh88zNALuhaXwCNP7",
  "key13": "63ezY1TZqmYGGQeTuvjum5CjwHCdpPwGcGbhqemXQsFRtsjBHtnekcMhwXRHU3tmhV9Nnf7EfWz3QPyLy5XShDAU",
  "key14": "2YpBYtcsUKDGBykWKS1bwbLnTF4EZYzSHhbT3iAPV6Q8DfDd48NwcuxaofkmnNZ4MAnUi1Pzfzg5zd8aFop1vkpM",
  "key15": "3RCRaXnEMb5LYkw53JwDUkwYRKYzxRYDELQ6ZuiLoJZYyfH7drhd7aGymWsVKatFdd4KbhWPrxvHaM45cKZUJ8SJ",
  "key16": "4mKwnn6HGouRRNFHDjtjBmdK9enTwMmFoZuSrRxpNE67K2F1BPWZWdDTWa4AacNgz3A6LuUWhfDW9TM82Bk9pLrP",
  "key17": "GKRn63pedRAjRfFrWZCWySvN96d7yexdg9eQ2sndC8vYNEaTQKpzVSBnf4Mk5zJFtUs5QntXzXwcQQK7WtTovE2",
  "key18": "42Hb631v4Dmr7Pggd4V8g5JdNK88zzTfmqU386eAJd1K7tAAe2rAj1yB1hmM8nGE2X6ZMwyZkWyp5QNDWg55nJaW",
  "key19": "5NPibAX348DQq8xFCARXDTu6XHDsrugBxe5fGLWRQvbYAUn6H4fCMrmdErrmCPUYYLnn3bN44TDyGCsuvcE73b6m",
  "key20": "3sA1TS4H4WZVGnMNGj6EoJZku87MJPBn8BWL8dUYnTuPhoNkSeHtc8G1GZZLHSDYbDDmdUvwrpE2CQoCxWKtKJMa",
  "key21": "3kB6Ds8Si2i5RDhKjcz4BCx9orCMKLLHc636RV21Pe8ZyqPHm7SKBeX41egjCRFSR9ci5PLVYJiPzJG9STUXVMrx",
  "key22": "4U9cSjPPdw6Bz6KtwdNJAAJAK3ybhQVx6BRq8nBpPs2sPuDUy9yYxfwppim2aVozBDx1hqXPLx45VdzW3KowA4LV",
  "key23": "3ZLMmk5YEstMjJzKv36gAKu7dJG5JMR2gAc2pPDhgTbjFqKXxh2iVmBRiCp9SCG2oXiEA2WiCkwBTxLL1PtycPze",
  "key24": "53dks7ZdyXorsMYV65t9rtzE7Hyoopdo3Ba2V35tgSThM85aodTV8ew5yjVCBe2ecVVX8dmxnXFRe2fJ9DJAkvsA",
  "key25": "2ejWt8eZ9PqR42jR8sjn4KAzJjwAYt2sWgywhFCRQs1Uh79YgrcrMGgmj1KTpRnfEFyi57Rxib5Xoo7pX2TaMsTq"
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
