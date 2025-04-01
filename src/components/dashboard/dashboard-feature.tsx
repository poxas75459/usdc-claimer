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
    "51GCrSyhYPGh6hmMYXDYDDNsch7CGhX63Y4LMz8UBRZtbJfQPjV6wrV5PkrtQqwCS48WfZXVo9f7CvtqVu6UTXmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBNCD8P1HXLPb4HZHCVEAk39ZbjMjQF7UZNjQ3CG3aojaiJjoGLFc9PG5Rzo8ovyySdzHAcWfDn7mxoqEBuZNcB",
  "key1": "2hRj6RoafMFPxgT75Sy19etSxbKWTsxk82nCDayBVVqMVcFysSm81oi7N37noJxozNQSSPyX9ioD3RypDYD6r1ww",
  "key2": "4fKEjJKHMkovGMNKsJPWgkCNgF3WEN2L4hZ4vjg7Ei5JnKewxbDRfxeuWjTnCZix6F6LfDHZb4FHt4RNZiBwei5P",
  "key3": "4e58fEdxtUcreAFeCDp5ziSXqJrpQtPJo3eys6YX8W6HoyTSHK5JxGgxHiN15xMVbmANMHLQzxAweaLouF8HR6pK",
  "key4": "3NHT7XStLCjMNNCAWPGAcSEcN972F51kbqFS4ELkyyE5iDZbhLNi1C7VH6NC5UnDJ52CPb4cLMwWos4Pi22uE4Mp",
  "key5": "4QDc36bxHiqP2znNMt9S8ML5CDuMoYfLTp5Vq98mm6d2SHCek84UtFsWJxK2PZJ9yaYCKVuZ2d1xCAzVcH1UnrN4",
  "key6": "h1dnc9ck4L2GTwduKhAwz8wGdtR4Lo1FStTdPaV3araa2VGQ8NNdP9oWxU1QgMqW9j2Lcoi6WjpmWxq1W413UVN",
  "key7": "5cfdCWBQBajcwB9YPaQuhumTiRGnQWmofzvC6DTxpAuoAbFVEYug4dCo684AghmCgd8ENhvHrbqsMx4H5NsJbFDz",
  "key8": "3iNmTApTs8kJV53V6pg7QhstKm4XzrWRqJRf533aTdfvctHVqBkePwJDZgTB3ybx5R2Jb21y844sCoyw8miFoQTt",
  "key9": "24jHP8hvH9YNHEsmSitxLqTHgUZ3fi831SAA3hG8ZNfyDmNKT15H8FR5cQYdmuvjHDHM5j3Ng4uvna98JrCdBrBt",
  "key10": "4yn3zeqGuQ9GF3LZsuxpk4U7xqwRXckiScuqACbCr1W4QWYsFLpsxqxAbpFEXq5MZZGrVGsHjeb5XCS9HPY47hDf",
  "key11": "4zq4kkNCT5bpj9VMi3nDkYHZ4ZvZM1AwnnT6WjatRJAvvzBsQfiB7Q6b9FXjUHp2wRHPi5E2Kuu8vxpcojJjQvBc",
  "key12": "3X46kCXqGH1ncWgwNr6U6H48huyHJWSogVe8QAVji1Gpsi5cfF2go8QmwCiMoBxD8626w51JEyKZXRkb8fLHWKw7",
  "key13": "E8ThAKdTp4FEc71wJhVUtq5bB3JhSPBcd8fHBKp3YtYDMTXeUnpQ1sGZpQDU4qWvPsRfgjotAtmA3zTfiyyzshV",
  "key14": "mGnmz9ffMZKd6DbVq2RUfEVcSR54TNPd7znQD6aw4Qtuj46d1kfX49uPnutYHwDNDJTsQsz3aVwdKpzbDNjNjHn",
  "key15": "88AUJdtpfoRSxdm5MVyyreWPj2U6D3zbVYYmLU8zxTwaNorpwxPKdgpP7dFNpxJCT7BJQayGvKHVJc74C3vyWRj",
  "key16": "2zQ8XkkKMdBZTAnaBy9MpNkVoRqpKLQCeSwUnpmwYXqi8yU8ycodJadHFMDvqz1rtarn8yt3REjxwn1V7fkPgfS",
  "key17": "3MyrNAduNBnYzxhwFJEFfFNqYDiF8tFUDszZAB9LTMmED1L8emRdwibhJf7wFywEfvpiB9XYr9fTru1m3QhmMXk7",
  "key18": "2mEaxt5tZmXk8NxSBviUXPCHphtsrdoXop354Usycj61LpzkQ3iJLiagigYsKsQJKUMrjzAMdExxrGRujkZpi8AP",
  "key19": "5UUVaqyUL2KQDez6qGGGBvQqtahSgXcHpawPbNcRmRThVnF4b1krLLptWvGgxWWSAV8Hxv1d7fsAkYfL1WuccN6",
  "key20": "2YnJFhAtFYRbQUJaVivRQcV5buEpW8hGGUr55tmQs1Zgqc1XRbyoRpF4xQySEfE5fGFnJWz362gZkxsz4RFbZ8gq",
  "key21": "25xLRcjsesKUFmvG6vTbCbt3rJLDPhqUJg241V1H84HbVBtttTFi2BTJARXSeBheFdNmT4jHKZRCPNikkKbzF24N",
  "key22": "5RU763EZuAUqY2jiYLk4NSZqGk8XvWMHpSvu8xKVQAj39GpHinKzt5jEXnyFGUW19dsRKpffs6a8mkYoVD2WQFrR",
  "key23": "32LY7XCS4t4Vkj3SKAsvxnJm3GXkyG5CauPbaJ4kick34B4RUUwKwpCvk9TcDszaZepcUFLqSmoYCQV8bwx3A16U",
  "key24": "5oXy29Wune8X11BwJJbwjWcSpWEMinskNzYjtuuguMdjz1tLMxTtWMYzjDu8B8M7dd4JrTSygQkATixGDPAdmnEr",
  "key25": "UYPXcc694BNFbin8y6yNPXBrQLCNaQ2cr6SnWFZ8tQdyaimu7bEM1pKoLbuFbAAM66gnud5TtbBareMpMUVpwBW",
  "key26": "3xiGmBX9ZevYarjnNn2SJ4s5xsvvyEXFnpb7T9nTJpquJ3kApzpxqAeoaLFxxo63gpsadPHSVq4Q3JTRLwFnMD2r",
  "key27": "3iZr5Em7Y4R4pLJPXM2KMGy43LXaErMVpQwQZPPcaSij3PfxLxE3fTmnPv6mofhSUm1FcNghUfwxuvkVZ79Ga2yp",
  "key28": "4StnAyL9B5hi49tkumC3DLmVMekqPx6SKoK1JbRR67uWYudf8kWbBRWvwNTPpCpM7HrwT3Cuf6w2urNPgv1b9oba",
  "key29": "3oan4a9DSGWYsWVypaujyzqAaaSnMmJEQVKgff7AFFU8LwFja49Qe85p6yspQRf6VLt7hdpXPhRfSERPZsUnYQr9",
  "key30": "4zEmuYHjgB36Xo9at3tWBLg4UNfXzqg1F2QJXZ8QqJ6jiG7c5RPGgXguq9frcXPhjUmrSd1qAP8wEuC9aPzC65iM",
  "key31": "5i7MZsDn6ruNCxy9NH8mAjdJ24g4dKDtr6NTcPyZatQc9meif2GvfFuDpbanMmxKBzcimqRk4XzdmGfc7PiAK9Jm"
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
