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
    "4hNTX6xSSDSMaDnQpoMH4aQbahugHUUiLtQH3cHLoiSEoYqGFNmDadndq5ptfFYjcx9LhzFkEwZzStcVmaTjdEmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCtmMGnHh958yn6MdAq6ya6FSbhFiTFNEAeFxDUUaBLJgUTynJLWjZ8ujbts8sKWa9CPH1jyj76rkQ5A9niAb2z",
  "key1": "3NJniQtr5G12paBJBUqtPvu1fJT9CbYz8ZVbAE1ixtFMXtEa3QyWkgKKzjb9MFZfu5jkB63u1AHhfuafWoZpiQ27",
  "key2": "Qn5vpyTnRqq7ntM1X4a5afNbkjNfHNa7v6Qb2j6nh9V8JGVLyGExvfV2AXsc6Jo842rvSZGEfTMUyeW222AUgdb",
  "key3": "5WGEwToVuLpgWoni1fp3tcpnxAFVPz1ueWfaSh26envqmviNbddmnDhef4vor3jRQa7xhvaP7BNWvvJDXrMoyRNE",
  "key4": "iXZ77dYBWSJG9eY3kNsybeEg6MPn5gFsgGCC1qicbjcGN5T6tPtmW2SSp8ZsTQ355nkASXSYyiN7UAASc4tp3A9",
  "key5": "2ywfGxramXSn8d9f6XtxqqBuf9pUJyPgKvzFP8hd4LVNSd6hfucmv6xe9wx1kGuUasrovNEd6dLoz4YBuiYypKUC",
  "key6": "5FNHtPc5mqiZXU6xSyZYkmN47KypVqFjevKpZjLScdXHcTp5hUNedmkzCCYqxGwWJe9p7EtpBHS4WAp3vhAyEGgC",
  "key7": "458a3GzjopReoxvLSmAtF5csLLRJNy5j5mMwGVGmTRy7w3URSmEbdJkKdHMfvFiK8JWu7EJLDQjeLMkhDfTUzm3f",
  "key8": "2Hgga1MQLe6E1eru8smR96aE28wc6hevS66QE5QjJLyoSyGL5EVxfz8wtngY1rSJet1FNkFyMQPD2hE2oJStVDqz",
  "key9": "UDjanNHGnWTxT6fwzAja66EVJWJxedV1XwJRAy5xhE9QQeLfNnCTRwrf1fNoVawKZBLzzErzf4VijtH3rdF9J2A",
  "key10": "3vsFVhT7zfXrFNSVfY69J97bXECbXcuipmD3qYgjsLokU7wVBywyNjU7m78Z6Xo79GWhpZU4K7MrB1XmifLKJZri",
  "key11": "5HVU5k6Lfs3h5k4zdMJ2PSch1MPp3A8smHTfNPr8HCgsYPBRyxbkUBEhTY74uRrv4JxGUHkGrPEMjdeGcgxtLuFg",
  "key12": "5J7qHBMR98BiThXHAcBeG7LCKYvu5eZr2AmcbVF3Dbo6RAp8xKan2WBK5ZWJ1HtyufFEBVBegEXMmjUkhAxtgdEh",
  "key13": "2JBJXprEpr6XDeGePCuMusn7MqRGcYDfX1bbXiLP3WXPddhyHEV3GGvVvDEzM41JJB4uFuku66K4zqbJ5ekmCzQb",
  "key14": "pceF3MvhhmzFvYFuo9o7bbWpjekcaLVQPEP9KHbUxTDRHWZLkAc4VBwBQ4AH7rakHsYVSpY2UD3JocteQCKpXwb",
  "key15": "XUyUBhR6WJNDhrPyc8hPLAPKqTcDWYa2JYrRv9jok4yTTUGkwT21XvcYBb4fzDkAaXQX9JtQNDafh7vCzs9o2Fm",
  "key16": "3YbhJx9RqXxzS9UGqmKiM51oRndXJnoaZkaiYsdMaJuZEVQJdyA93A4z7KQMYa3eTYxFmPZwPqn9TZo1KTBMkqVa",
  "key17": "3xncxrpkUFPqwKeiZPFDaw2Y7516cpFykqbbqt83GjYjMdXxeJ8q6U7xNBDdpVZhVYo37ms4FUjEGjAywanB1szv",
  "key18": "2eC3mwkmbLscNmctxMbXCWzMQ4TiSGKShV2WbA4vgsneycJuyK1NVNVUV7udEneViMhi2NvhfWpgEpipU5uFBa3Y",
  "key19": "2immrCVRucp8yVi6XFbiKg82pjfQEDuPGUQYVfELszXyeDzTPC5Ljhns1ucBsTwz6LBmLxk5bjpz6zKU9nL1EmFv",
  "key20": "qMWTdpHRRopuA3vsgyGhxar97zg3GSXCpyHJewY8SgoYiv1tsD1RGT7CCMTwMiQgYgiW7yNF5AtwqfyVdt7dRLN",
  "key21": "4Ph3YBTp69ACAtoZoRihdYVe8YQhJJ4MNdymsZFgeZwPDpVyZyw33h6Nh5qzJoUtdJPCxyamkmgsQuRfU6BZh5M5",
  "key22": "5sLihTAjvCcsyhvb2ZdDQkHHLcvyB4N8UKPDWhAiCEeykNdvFMGgSy4wVtwMZu26GYYixSbt5iC5YXp8bWXpx55J",
  "key23": "216Axtdn8kPjjgY9o1V9LM8FYpKr3KUGMDkSbacwHpbRnoApsTrAPmhdP4iA8vAJFHWGN5UQHagstmn9T7sH9q1J",
  "key24": "65Xufy4Ym4gNn2LvZSYHwvde5rUKY66aRGpu3bDzrqEcXTx9nJbbBE2xYMwhangdoHcRuLb8nUDN3wsNqznt4KWL",
  "key25": "Hcro2ZPXTRbt7eWu1d4vuSPqydjgUxbQMmA5wgTrFGUxnaqvtWCxKPrmUn8Fh8BYfLge4e1N2DotBYMLTCqM9NL",
  "key26": "4L6rVq91HseSkh2H7N15ZfTFxcv5GpbY1huxHn4VUzFb8scWDu4dLyN2nUfTSmL7zCBRYfamuX3gueB9pH2erK9W",
  "key27": "51xxfgsCJ2VhbM8yUwVdMR8faZo23Wcp6JrLULuh1uU4qZ1WvNu78JXn6cK4ohYJ5RCQvcMHsYXQnEqE1tW5WW9Q",
  "key28": "5oUDafoMTAztVe4DazQmgMN1duVYr9gYpjziJuqXZEatg2sqXvb8R2dTP1zLs7ccNJGM2NmDFjCb2ztT9KFjesas",
  "key29": "4amBkAdnwwpwn4e7f5FTkKrVVFHaYzdxwk2RpfLttyX95T6cc73JepJQkmiB8FnWhN2yJvZmNsYi8jsp3dZZUUSY",
  "key30": "5Bo5w4mMSBJmESpULGynnjCNerxeUrexU6e5wojd6DtUojNfBLvDCTa6GGEtFo2fZ4oetfaCCv4BPhrLnBeKSYQL",
  "key31": "H9bGLKK5TUTtPkTj6Sc4QFGzCq9v8csuhs11FbfiYuRVFaM6jHb4qkbc4dB1UQwFBid7DrmakEPktSm79H3y93S",
  "key32": "2QizPLK1iWqXhEeUZiPzymf5fneRbcqx5CS5Z3eM2Lq9sNGXjtZavJTnuyCCg7yiKM8iYFLKrXyYJS4SMt1k6Z45",
  "key33": "3vuwMhYCxKGuZAKuTKQDcZmGtkMdbb8DJUUt2XfeLuygSYKi2TCmoVxSBR61hF3wuJqU8mFRrbek54ohj4y5Z3vH",
  "key34": "4ApQEq65PsL5VQx6gEeGtdoTbvuCSh31E7z3KCa3e9gpdSLxntsuoy8wJfnem5LeDByRmpYEnqGyKoZX31BdbweV",
  "key35": "25pap9btFrFbKNJDNMrtXVhnQw2eL9dhBVNEpKNWiUrn3uNpzp2Fcj3HkuGo8dFjtDfZywkPG1mTX23VKULgSz82",
  "key36": "389wCY44jKKaND1RUkdvRyKk1djT3rELkV9ZhxJhB6PVrJzXbVmFGGDgyCLJGphyT17A9HVRHyhDd4V7aZ9uQ3d5",
  "key37": "2xvT1xtQwaiRX5kMaPe9vjucEk9AqDSQx3dvFDKohQG2W92xusK78UhgErFjtyw8nJmLSKPw2uciUpM9mbsmSJ5o"
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
