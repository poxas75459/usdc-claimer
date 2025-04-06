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
    "2DV9XDnReLQvXWWJSmSNp7EkPFyKShwHVtWkH7cFcewCt9M5TtSbPjEwwseYhUKsKaoHUyf8fnKLuwHtwCmJDXtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9b4uwuuGLYxvKvx1C9hMjE9EoX6Xg9L5FQfrm6oacQ8Xc3DYd7cGUuPbkfa8e5LqD1u2MZMxurQN232D7169cZ",
  "key1": "tAXaTdRf27Uxeg8CRgBNArL1JK5wGkx2v44gJK5RN8KN4QVdNiwB31Q2vNgap61GUNMKhz2crcbcegsryL4bxNU",
  "key2": "3EmUh34G7WdUCLEsBMBxeNJF6AaG16yDUgXvWNkB4ddjd9eiysxWeRkrV5cmsdBbUAASNdGv1v36e3Q6LhEKt6oa",
  "key3": "521XTr7dheetdzByXism7ikTGbwyZ12ge24JqVjWaaZt4EURLCmiYfeBYoa8VEV9NqhmkAsFXy345PvbqjV5mief",
  "key4": "4gLUv1krUrNy8M4ad2nipR2Rc1o5vgYw9Bs7D3zRBRKs6nEAAqGuFf1CVfGVxosjH4aCjdUgyDvXZq9oS256w3k3",
  "key5": "3NF3WXi3MiNWuok3LtjAMo3QbqhNLFg6M9aZF9zxefVWYmBotNwZZKiqLvjuwAYozDnJkpcFy2eb6EEssGNWFGPX",
  "key6": "5fVavtTpxLyjPrDDSVbSdLadGtJ3rFZ9e6bgLSXQcabeoxM1cAeuTzUTUYrbGMnAzTRqxRMzU5sjPkr9TShAW6Ay",
  "key7": "2BrFCVKAGc29TsuSP3UFWJQQ74m8A7xg3mx42gNNxdpiaHnrsqm9XE6WeCNXT3grMLYrw5Gm8fN2JyuiXSACLox3",
  "key8": "3sm29z2Ddn3SWFBgneFw5ngzYgaqpHfpL65muSjkx8rLjzEjdJiqNtKpeFziyACwiiyjuSYhkSrUoZL3Doy5hgf3",
  "key9": "2wXt3ZK556PeVutsGrtMXx6HsynMrDSZLQoeakfAkaXbTqbbNMJcZRoi9RvLLZagQYe11syGAE37BKrbxWvksAmB",
  "key10": "E3k2nKR3zdQnicnirAayAzKMCuAAyaQ3oCrUL1bC2i7CBmq8fjyJA7vFo9pYmXi3ViEtJ5Kd2vJhPQDqkPMaVXZ",
  "key11": "W8RWjJijhxzHidwFTG79rKEvKFPVHk13sbkzECcKjgmQon6wZ1qET5A9wcpfBCeTuriotWTFRD6LdMvc9jCeJM4",
  "key12": "5DnWqLhZMcCuE3g3SAMfN9vx3uSPSDWYEMseLLuXzreRWZKDVpcFKhoYWaRfjdy1WmogG6c2VgL7ztvdYF1PKTB1",
  "key13": "4hXPMXyfcDbHNtBYUeTjCeCqAVdC8G9zaRNjFhXN3CsRTyfqoBRneB9fzVXK83C2g6Z3n2e8q1nkxpgNgEgPmwXc",
  "key14": "4kByngDkDaw4C7zvdnEuTPgbpSBGJLZe6Xn9b65E8bmKYH3YJ8a61pjRoqL2ENTeNUL9ELJutyp5kgJXoka8cASH",
  "key15": "2ynF3T7iAXW2utT8mW38cVdYVndWDtXqSEwZiaBemLWCh3kqkFW75Ut2uAsnXiDLn7kWL2eLZ3LiRni1jSSU5xvH",
  "key16": "5A15hbGBM4wdV7XLN5apkhgVm58DhovyS2C8DrPUb8XwTaH4p2cwoDGFHkUzzMtY3iTEiUXKPHzd2BEYxQftCFFR",
  "key17": "33Gevjn7Br4oLDW7ubN8NDKncFtPvWR87k8VBJMSuZpA8EA9gUKVte8m9FGvE6cs11gDKYuUWzdxgJER2pKgeXyV",
  "key18": "5dtJdPCPDqn4CyVD6pSG9dzJJ7fLL5q6ugbbVWKerFKiLtkEPb1djsoZ1sn8Aqr5XEu8qbLzACHeEgaLuSGcPzxZ",
  "key19": "2uuTiqwPBBbDTFbYQR9FHHkwqYRWpEz4u7YNLF7iKTAvN6C58uZy3b52ibm2YH79qXpikWqJCDdUbCytdB3gH1b7",
  "key20": "2PK1sMZfkQ4gFjCPi2Kg3ahMUWvgzhZnYVKvnUHXkjebem9bWmWdy4V47PL9pbKp8PnyFtecD5urdP2H3oTLaExf",
  "key21": "9eznn8L4vnPN4myLn7WQ96AwyRQ44AnbT4Jnre4HoJ3M3kG3EhwhYy3NkezaYahCE38uMW69zdv1EdhaXPf4MS8",
  "key22": "2ZsvperCdibY5SZgU34gNfJtCcVFGhoFYHDKTnTxKjdiLsAYGUVKdH7V4Zh8wo3e4ydArwUiJbfnutTfDvyX5SLh",
  "key23": "5duCDdhhs8CczbuPaQ3ALd3MFpEEFuJDQAKxj5gLAz3jRkhWtsEJwmPg2jSHHj8M6vj515H7S4AjBQjRZ8YUtkPu",
  "key24": "3W8QDoVDG4fX8bhTFcWASRrrnmumTayAqhv7F1JUgc2uQXhc3UNQWwH1FLoBWyzKYhooYRew2K5JZXgWd2KsPqx8",
  "key25": "4eeirn4diB5xjnjkDEcpDnhUQBvCcvut7R7SU8gF9AhEE3PNAFb7k7QrwjG1nGGU8FYCDkBhmh1CYjVP9kncLy4m",
  "key26": "3rnUUQ3oAf5kWVqVFr5EejrAmUHwXNLEeyMr9xRQwLL2YgTQubEvD1tE8i6AMRk8VzMUpfHVbruymUpvw3rRt5kf",
  "key27": "3Vrm5b2YsTiND2XpBe68BXgsgRCu9drDegB6jJmUSKEzMSDydvjsbZnf97HqbvZGtXaKnwUBmdefSopkA22iq3xM",
  "key28": "v4qnySixMQgMQEnr4SP7rptrfFwHf1yTyzxPmBcRFBe2j8pjEinSSVYoaJXyQvA8Z3G3HfRXmHRRAY6cNLghSgM",
  "key29": "5hDhacx7Yia9Rmjvbv16fpeSgMTwwHzw671Kgf7RALbTpg1eFkAPQab7SqudHAb3j6x1i6d2DwN2QMVYnBJzJDWL",
  "key30": "3nJVPrsGZkHWu6Z93XSLaZDqyB5Xy1FoUo1xvxVBsngzgYZynZVcoCat8f9LaHTd7sLgRL9Rp6cjrXzoG9EaeYwC",
  "key31": "663v3xfTUKGSrpYJQoiScWnf1X9UzPvgTXxDY5KTnxuUUxcyEDVYsD6rRToYddgNAC5NUCWzpD5DdCHwuDLvseMN",
  "key32": "4dztkduDmKcoaq8vEefz9PQPWTCB2gWAujVBvci6T57mM77jQmakDwjwpuDH4YM3xkMXQiMFfZankAg8zSwzLaSY",
  "key33": "k8D91Ri82W9ASr833eDsNoRYT8KvuxxHmkLFxRdNyDhxcgQceG23MYYYV32JzuypqLxkBMCLdqHoQPutgAErmJR",
  "key34": "2tS2xkSBYKz4VSPmX2tBKu3mXaYbpfjYf4Mef1PBfSPZ8TRMyATFLB9GnAN8rWi5WE98RBbK4zb8mqMRaERYJK69",
  "key35": "yZXVHcfWCgkbWZmht83TMXsMz3JqFoKnVb5TqMtc7GgnFGXRHTuuhVcERq6yPCm5ax29AqvEcEsydxZ3SHHakVY",
  "key36": "JiqDSMAvstW6e9B6qZTxZy8UTZThRVCqN8RGqhEAAuk7KQnynaNPWXm7tFbD1KfdqBmABh46K6pqsab1zrBXtUk",
  "key37": "fmgKDppzjKaM54BuezShiLxcqpsf3fkUQ7n7nfH4jSWVFJ3WFCGZti7pnCRYGj5en8f6N8MVdbZNg8H3E2hwEEm",
  "key38": "p3jRkhqaiqbjnWXBPz4AZ8a78yQhq7GCuzXYigoGzStDrHg9vtmwu65PBtLmpqtJ5SAh5iWPeWgB2qcgBWmD8aX",
  "key39": "3RFPpKDhF6V6YnSrQ5GGmA53XcoXMXwMxcfvqU1GsUYhzhf5ddho5cQkDwi5yT2nDDWeu1Rhe4PE3Yf4vvQguUZ8",
  "key40": "2M2cF3Mbgmb3D7sFAMxXK5NSiCSWFe4Vg9Y6UdkEM7fqYqWKXzCEh7hqRcT3Q2iqKcBg7E9wCFddtV6atbB57WZ",
  "key41": "BEXpjMk17E5fuU8AXUjWh6WCZK7Zz8cLHPtCLJ5f4gBDkWgjwyHkNVJEcNbaNxXRuqYHnwGGBNAbC9t8Szyxmhh",
  "key42": "5x8bzykHePbJLPuXVVgP5iiZZzyzBj5SKBybjeuWaTLQcjD2he9vKBZDriD1TRun9GCC4F9yL6GnsUtDNULHg6mS",
  "key43": "4WHhMtPkkq14f3F8hBj14ArDivBbdfdms95om3YK2vUdzMPpyP51z2N1j9kicthsW6qqmYaXsN1ibHjGsusGf8bb",
  "key44": "2oh9RdXyssEDMdmZ2YAtm1t3PtkGpn3TBZA6D4eDHDh6wCNyaQeftYy1HAvBPiKgK3tiwy2AFthVfLKAq2Z2Xx8R",
  "key45": "3t9ucdNPLwhJXrL1YsQLpq6puWg3qSLnNi1GMNMswbgLzASt1rNsmsL6bB5WDDyzNTWBcyhggJCJV92yS5sKpkz4"
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
