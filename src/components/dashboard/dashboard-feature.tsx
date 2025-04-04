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
    "5kBuijSWxEQhbSHC5RWgTgoEAxGQ6Smb4sgh3rKKC2PTk8Rozr2ZH1u25Pj9XEB7FPaNXaq3ksnK4J53MFrauTnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3qrNJYigoHNijFJjXRYsaNhfTWw2yYRztBnmDU2XxSn5DpPr981AXJoPbkUfAqTt8mP28Upbd67GPXNEZvSixC",
  "key1": "4QXMWR1Hqs4RNNdJShmgFYVrcvVpYNeGYZ8TcJwcx44JfKmQoeFQ75tnG8qf73HA6PqFEby3svAycmaZBZbaDai3",
  "key2": "51pZmrFdEGp8PCmYDzou98zZfykcW3u2o3iW7CJjiS9DWEAhE462jcuY7KgPnMjjHxe1Pci7hJPpZCBsbGtJqJ61",
  "key3": "5mMQRfTkhcqMU2av93SesWkMwY5Levm3yBXxxKauzvJHmFdHVoVse6KVKCjarfeEH5MEijmY1kwHthSPv2MfYDWV",
  "key4": "2wFcRmaUj9pPBFnrFyCv8p88eRf5uQHwG3r6xesbs72aERNU6Ve9pvGqCqJQ1Zj1snjbwUXRHZ2ypwgyy2m1HDKf",
  "key5": "4RF6dYharcjSqWkveh9VrbNi2gb59xTNVYQX265Saq5ku2wRgtVcyfvbPnUP5hRXWxkGRzwicv23LafbY95PmQ2U",
  "key6": "5djcV8CNtL8K86bgMzrANospvep6NEbNmU2Tx3uLafan2g2dpvzZthLRg2s23imxJn5wCHB8VcG9DCNsApwE42nc",
  "key7": "5UtBAToBmziMxBVEpzHMG9za8cAdhGyn3rC3WygbjDLD5DzN2KnhAe7pdaFoxMHCXW7rsW8xxDw757kZ575TsZYE",
  "key8": "3Ufq5xsnQj1ZVUHobJXG9XyS98qaJBWfcLT55k9h7CLEDjxpSQhBRkDN7i5G2M79cJjcunAp9tBb3u1Vjc3DCkJB",
  "key9": "41cVqxVzAzWs83Jsd9TcTZPN8zwU5L5X7zqTnWfSsDyKNMcrRV9W8qzYWuF33CseXz2YRFVu8LK1FWNnLwMu3Gah",
  "key10": "5mJV6NY72iQB91bLpLGJb3a4deCNdC2HVct9s6rX7RgEvPNAa6HrJnCeLMC64kNfPRT88TDZ4UKyXkXoaEhgANQA",
  "key11": "dptXYJuFgniqZkPSSBpT5qz7a7D4KEMzwWDQihjTwc7VfK8z4kHHa1qMgbgBD4pwFpxSHBEKqADVJnbfBCpzRh3",
  "key12": "2yND1m9yVuVSv8N4Lu5wmENybn2hofWKed78DYF6eoPgMhcMLrBkHqobbu9ZV6csj4YB2v2qHC5WxRoQgZbfypm4",
  "key13": "WFjqjScf7YHXzj9SJKq7i5wf2SyiT9LyC2ygeW52WmLYPwPDaarADfY9nSwfc7M82RyWJBGBarX7LWVNhYsMiC3",
  "key14": "4Grra2fkMavqnbCCn229VSauqzXm5uvjP6V9CXK1pTKyyTQeZFy3KRAuoMcdB18u6dQp5UtvJM8cAQHFnoxeg37N",
  "key15": "2tSCGhvauQPWGJHwdbYCh4bMv7zbz1vE6GwuotUda2TiFNzxmSvmNkeCDw7p3wFA9sMEuhy7DgB5oRQqc7sEJJtn",
  "key16": "2cWyG7mGLQCc1Jv376ceVcZEcDomFFYiPkeC95R1nQBYUxLZ2YBYa8mwg3CSvRNdWGmutYa6frKMvGTS4dGoio6F",
  "key17": "54UyFrT11dgrh6XzHNjUPGG48x6DnYJnf6tgtDL7mj8YNbUmJR577s8TCNyBo8WucAsg3UV5n3Lqk6FZrb5Hin9q",
  "key18": "2ciP6LXrgkF4kkWsGn8fbmtkTj9YxnNsJQp2ykKpAktKkrSeSkF1WmGgPLvg5jzVk2SmeEFaoiRdWHDXnHRUmi1G",
  "key19": "5RKr8VDjiJ4NJ6gEkNV26ahZAQUiF8vSzDu3Ub1MqUfVCXNLY1HiegGbwa1MsE723E8eUUxdN6YTsuSPnTqhGUc9",
  "key20": "2B9qkYT5ofZ4sJXH1FZXvnF8nK7ZNgkcFzSPH7gZfg51Hk2NWLg1emiSc8P8eAimEuq9C548BoCqY4RkxCuBi4Rp",
  "key21": "7SjT33V9zib1mwESLQgq9h83HWAgi1ZRwNT3wuHt3wUBQQwu6EiZLvJsqz8czmLWPkPAGeKm56cTrbDBuD6THpL",
  "key22": "n7m3Z58B4oYM55SC49ErS9Mwk44MpPiR3KVk4RZ5AvAgKnTyxMyaD5dqUBX5XXUSfrgG7zpcdF7gtBF5vCysvRZ",
  "key23": "43ZKGrBnZJ7xQ2RDx1YnTXRpouTHmgSa9Fm84FeAeDXasFXp1DeEXJDaxu8FywbQyCZtjuje9bG8isbFEW72jqsy",
  "key24": "21HBcVGERoRAKwJj8gfA3fDRrCEkooaEXRJBBdNugZxWPK4oXjAepwpWaWkb9KYa5wYvrpR9KXNaqhNCrhxzyh4F",
  "key25": "4odaCpf2B6ReEV4Jy7d4Tr196A2JJ7CieEqkoK2a1ep6orhU3yKDrb8w8p19vHsP6RZYpFsmetEo1jTZCyzcXFZ7",
  "key26": "yqKyi8CsvqMHqJe1Q65wQx8tUTg3XxYgE661wW8DgXDUyz6Qt8KkEnuZXsv6sATA17jBPVGTnJNBbfU68Q7Sg4i",
  "key27": "5ymJnpp2E3FMZw8MtCTm7mkEcrK7YXEgoh9CdZUPYQCAGi1h8511XJpemSePec6Z3KHRmzgZ5gAkPVQL1e3sVUc9",
  "key28": "5r69dFPtawya82mcq1Naau2F1Qb9ivBnpSBazENnEpGqcNHuVajMzVabs4979qKRuen9mp2HeZ5p23YctcnbYH67",
  "key29": "Gij7tUsJ99cAUayfzzTRH1Gv1NT2F7ZCyyv2yzXzowVa3cS9hgWp1BmuyaPeEHS1GEYreycswiidVdtJf1ProHx",
  "key30": "3UN1S9RyNmNfLQAv97iRwcihoGq31i8uXqqLDmQG787Fjzfc4bgLC263x6a4RaZd5TByJ5pWQCnJYyyWRck5FW3D",
  "key31": "yMs1oB6ALF7Ei4Nj5si3AR7kpiudfPH6bvHTN8MG6iRh6iiEipMvznb3knNF22gBw8DYBU2EBrowM3Rj6TVg7kj",
  "key32": "vQmgGHH5vvL1qq1FdnMqeyqvbv6UnW3GWiV46Ab91GvGdwjJUAJu3zxLAvHyvGGnrfoRweLPN9LYrmZqVk7UAoL",
  "key33": "4fgG6cXRceqdNagViF2jZcEqz2rdDuSMdtybv56ajwFTdZscMm1AojnECp7GQnzVgjvsc5cJVxya49mrKyXhVWYZ"
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
