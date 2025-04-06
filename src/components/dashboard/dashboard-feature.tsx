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
    "ggxjtLHPYPdV7H2sb3EMTr1iT8SMJvY1RmxQHnbXg6VrLC5md9kH23RLwvoN2hKru5C3AzxSKUhee1LZ3HSfpuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NVVH6ChpcthULjwyoACwM4PsPm9hhxFDxgr38oksnp5CkQ1svEdyGneA9MyrUqE14TfVMQYJM4PHxqDwh7jLm",
  "key1": "8UyttNiyKU55SdnkHgnVrxHKArJ7qDFEsJP6qMtcyj7jftSNQbBgqnC2RHgGSfoBgBz2QdfW3PYFbVRFccrcjTG",
  "key2": "3iCu9ZgY2K2q2Af31LK97YoJJ3CHtrP8PkPANbfoKuzLxtRCoDUnxUXvvrhMNtxSZjNDtSRSck2u3BcmyAV6ZLrG",
  "key3": "2GVUhr9UsgNDb6wYjbqBsMWuiFqrq5Z2o7DhtzRJdjgHDB1dKefw13FQC683nHgagHFUEVZy9YtF833eHJSxQf4E",
  "key4": "5TNRgiy3XNciC3hHQekkegcojkJfhAEn17own3R3Y4nQWmunpnyyB6wty6Tbfk2wrPwza6FtVABF5heMo3wqmbfq",
  "key5": "4TqU8gwrRyHnsSFQysrkkadwNauf7BdiJvBcSBYq8FtkSW4ggx4YmtErUrTHCfWy6GkcSJ7x8MWNrBkGthU7XueE",
  "key6": "2KF1dmRyFtmg87AoQm9vxszN6n9U2gmYtB42bGzvfQ82Ut5NJ6HcYfja9Yigj8wHJeLgU9eGGiQ3trZ9v5HFt7YM",
  "key7": "3SAo5FrnkgQRpRHoBaUM2pLT3FUqNDaUjcz2kRHkhPcCK1kVMYBjjarFjDNFoEVEQeM4gSfP9jtZADvBQYA36kBc",
  "key8": "3aUPCXXyyNJsfTuBxE2FaNSM3e9r734NFiha2CQZrEjo68kFBbL3WXtBhgLAiFAUEKvQvk2QELz1Ha8hAdgJXB7V",
  "key9": "2n1DruSiQ2PVpcon7nQVU88PdLYNt2bvsf86WxyvBYZuAK82b4KymF9fCZHmsZSmSWK4nVbr3gAvsjHGNStcgXUc",
  "key10": "q9mKuf1v2hjt7JVSMKqeYvKmpkSFstmxckbUyZPUCAF4CXMWiR3LJAX1N9juAkjC5PnAVtkgtsg3smdbQybq6MD",
  "key11": "4AYBmWabvhpA9qprXj6UeWbCn8UokceHWv17riDiWme3yRgUsMBAtd7NZPcW1SyHEX4gcD7bQSMVLrsPaC3ucxc4",
  "key12": "3JqdXESi1D4mGu6M36CHNsJ1zXMBAfAy1w3jwudKy9t4Ym1EXoksn6TouEsUL9u7FHuyHnqYn59e9phEU2LjRSui",
  "key13": "57iBjPTQsdvzQYHjByNdULDzjCcr9crFZncpDdwuUta85f6H6W7j3bRYnYLoDT1mQvMnMmPZy7XtZ2UYDaXujSkv",
  "key14": "AJkJffi8hGoM8BAQQtEoBXtPnLGSRXHdSnyM26KY7pjPKkkTPkhcRo1vz8WLXwdjTj2NNBUhuXzGeyVJZHTWZqm",
  "key15": "DFipMVcBhnH8iTD31sDvQvddXjxop1MJnyLr14cYXtsh5SoBz3xhwLFGBVZqyJq2F2oC3ZkVCvYu2t4dXKfxJe4",
  "key16": "Cf42o3fouW8pjc5Wekp8bk9HAeqWK9ZLVpgWLezpVcptEgW8dUAnbggcByEq6Yxyqws6wrMcXscCK3qJbURuCXe",
  "key17": "vPq9k2Zyotn5bydxmLhPLa2ScSJR934XpwEDZf2y5JApgMKuX4yfrL7KcBqGizuxYGyjHAeKAfe7Xqno9c97u7s",
  "key18": "5TBv4ZBJ3NHM1zXLwfYCyxwxyaLasotW5xEbjkgZCtSGBHmtnpnuH98YxMwxbPJ5DoCiyDv1bd6MgM1LpCHQGsk4",
  "key19": "2gguovzMaoKQmcd3bJxxVkKYsSu9ngtsNQfcre363yxRrbvj8zGBFvH2Xq98rkUvUrzUMz9BHpiJTjy6m8hdXTbX",
  "key20": "N2E76bqP6dRUTVAYcjZastAjw2JXcwr9in2owRVGD7Gh2kK8dtwDxyUpF8AbC6Lm3HaF1aqmQ5iCntWLgRrfz2F",
  "key21": "41sPXxysa6A534iP4SwUAagpWimmWAFQKASQenbBbyz32khVFxZFCBx2Hc6BmWb4RqE2z9RdQbmvm1xzpx8ceaZx",
  "key22": "4QT3tvVhAj5kUeCgX24mVEkuY7yH5iCthxoXMGRXwJEjb6JpUHAcbQESWcB8CnWzgdzA83fGqHKX95MjsyZLXTRE",
  "key23": "RKJdMrm9TeGig52xDNdpPCDWVCYbovpqogG1mJ98Uqd4t8yZ4eemaqXHRc4CMozZJBhW9ADKcJcfLzWndXmY5Te",
  "key24": "5xrTbSJ3qW572LpprkaNK2V6QYhWYmLvwykW72tTMZtUENdLvZPJMHq6jisKEZDwimFEJ16EbWBshAFA77Aqy92W",
  "key25": "JStSucPouK6TVdyMgur8C8TyhE9JMvvstV1ozFtJcdiFzdbnFp3CVHM4YP1EJqgooACd1utbCjmDTvZHPjZDtL2"
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
