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
    "23BfW2DdAcxqG3MYhnTWyoLrzf1TXVcT5B7BWogRUJSQ5bVn8U3zASkM8AwAxD2n7bM19oWGBmnmL22fyDxePpXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3XqfX5mVBjfdN9fM51tqgMxLwPJ9JXxr5QciseByFEi51Sp7kAM3fdJd6LvkofWStCgsUc8nRYM7RWaBa6dSHK",
  "key1": "3iW1mFSVwAtra8YJbiE2m7FqnBPvHm6gTadvc85cxxeKXxHFaSXe7pXD8FeMRoGQsC6yARGs9KpWVi4tPY8DgC3D",
  "key2": "4uerDUxMrrJPxVA44X3XABbY4mpThWUo8sKzn3pbDNJfthRpfVZyDmPCjfhYzwqZmprCcbBhmzd1XMASqvUMfx7d",
  "key3": "2fJgnDAMzWgoH16mW5NQUTen12j2aDp1bAgqnWxb1vFjLy2NpXDhEiPb1cXbgAsV5UCdDAF5CViDWWDJhPVVyKWN",
  "key4": "2xGffSWTWKyYysc9VTBBuAZxYuvN3SkhB5LAL3v3yQ5qws1QUSgt37s5z5Ye9bbTNkGkY6hnyHLCe3mopwk8Mdpo",
  "key5": "55AWAtCsw7tPPt6qJ3Mv9aUHUYjsaHjbxah5TojREaPJrWqht954f5XtX1ZdXj94eP7akinTsyPjE8Nj8KtUeKDP",
  "key6": "26aBLwG8Lyt7dyn9LbjyWMpg4tAbgTnSYQCCrABzSWozerW48djAan1fMk2yhCbobBELYFfjsc9Ch38XC5QVmwpr",
  "key7": "49WRupwYqEFk8rjegCf57edVRsNyUpHwUL3WqzCFCTnrJpCpkgox68JpZf49E93xVCo6ULbCN8Cw8DXeh8UTJceN",
  "key8": "5Lt2wtR46YweAPVW28hogVMzrsjPXaewyrH1xaREGt1jzkQJbmN6ibvGHYhspq8LNaiEyynKBHgkhjyZay8u4Pxw",
  "key9": "YG73Stm2JSx6ppxxrewaExCkNeG99YAfrSQJ8J2Qif7DLG1rf54UAfo31JsQ3YUvEnLw7TqmezEPNWHcVoJo8yx",
  "key10": "4fG4NYZbcEVXyeARVuRXC86Vsbt4EAmT45Gggj2Mq5LRACBBKF6APWQ4RiWA11aa1EkEDyR972LtjEwmFEoa6H3j",
  "key11": "5j4C7XyY9bdTYduhVeaP3Sx7fwGXHKVYQ4qZxT8GTiqQhRTtv9jZ8ka2CDr3b11oyc8KzkDiGqbsYWG2z9hrkNWX",
  "key12": "Ptohy179g1vTmpN78V64n3NRm89DfNon8d24jT75mJBnvnHjwjR3BmyTnsZ8m5zQ8SnQFDYtm8giPbQiJ42TvdA",
  "key13": "4rEosJjza67chUuquAeEiBve5WX5KAFzJQEui7urHYpUAyUcfcC2jGMhikzeuuhEECxuGWsuGWdAZxfWubbWS3iH",
  "key14": "654nNik6w7yoootHhZMVxBog9urogsYPV6bLzn6VVWJFUpQP8m67j4ptRX6jCbD1NK9yfpMqS5CB99xQLEtyuSqL",
  "key15": "3aVGWCxdaYTGjaq4vFQTuT9M8RMMVAh9nMBw5s76VKdrtY3y4gTHJnYsvAJvdSjiqkyo9aphAbb9Q9DUw8S8fUvK",
  "key16": "5C6TLiXJVrGdpguhMz3zfs9pK7JBsRbJgYXrwLEBouEQJjEp86wTJfAXBahSrXi4fgmuBEGwjiJkugRZVFUg8Wxc",
  "key17": "2utbTe3QWsgiBuVaee4XhEWXbjnuMLoqBhnE2BZdmtLWZFX1GofqWrEkg6jvqYF8pqQoz1QvAgWU7dKWReXQm1Kh",
  "key18": "dAhgR99kxKphitGb7DFiHotw46j8wNszhxf2W1EF6bZT9qrusdEJL26Szf4rBaeCb1zZnyH2jR97Dx7J6rajDYA",
  "key19": "s4aVfhh33bb1XMUy8Go36FCvXEFrnj23oNzW3MGjr6Wh9g2xWeLbMfd8HJQh9H4G75916cy1nxKFdLbRhifDn6z",
  "key20": "5UvaQQreaEfEz3LkcpbwFP5TqtvsYsZ1g3qNoN5onjjVQfTdNraty6H3R7Vk7YKCVzPY6oEHX6DjUNrq9b8JuKUP",
  "key21": "2rpXaiS1MbDSLF8SCSgSFCsv7Cx2mZjtMBi3fdGjHhQCBrJMdx5MghVpxTmJ1KTUqBPcAhtm9hpKKRYaYTeNGzZy",
  "key22": "3mpMejNaEWYi2Pff2LjVmGupxnBPbK39R7UKGMbNbEFq1PMQ4Fcmw2niMq9gtrqZNgqH7TeW6ZaEpFmpGmRuLAMj",
  "key23": "2jWNwgu4nEA22Weeveya8sRYgZxQEsn61QCZRRAxb6wmW4Lz3U1vVudsDWYxCMBd2zRHs7HTyL6mc2xnQjq2SCS",
  "key24": "E6iRgmfoXbu8cPCqhkhA7yqNBegxeeUSzp3u5tfe7n6MZmagUa1JQysDvRaBvBiWU2RkNpbh5kyc61Dw4GnChaM",
  "key25": "5D7rdsxVAAMovfaqmvu8pjmhfteaJyMxMLLaUcvTGiV4at6S66aTAfass51tzjsgNAorwGzkLiJZjWQFkigk2J4c",
  "key26": "2t3WcXJG7RugSxfNpA6Vwszh3vigiA6VsFaaYkWcL3grbYH94NeR2kBWK3uSZmhosjkz5ttEdGpcgnCNc2mKPK9d",
  "key27": "jttaup5v11KuqYUydTXMrCANPTXcWKC6AwtNYSCGTTYXnphyD7mxk2TxyeAvu3JvXuyn5jEyeLAoG5qWCrLjVH3",
  "key28": "46YrPkuHk5so872KgyGY4eKMX99AcWwic9Qk1g4d6Au8kJnDK1NpZZ6V7Sn2MjXLFVf7wNHKYhgRPnmk98uikPJn",
  "key29": "5twQQtoj8Qf7JVzsoXvxviYfUwMhyQwudZ7FqokzapFhJNJx2hrZMWceDHiNuyR8aQPrY4HgDrt8MHwGYZHXNTZN",
  "key30": "3WLkY46YFfLMgHJj7tbwVDhsHYqCVaDTgsucNJvTtLZKjjj4561ru3jnTocnj5L3AFMir6nmsUfLew2bHZbo7Woy",
  "key31": "4YWr17ykkP1Rp5LnQGEA1DuYs8aJf153RhDMgzAvp9avq4vRkNDAjqdvYpxDb46PuRxmyweZgSiavM2um8zpTGCn"
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
