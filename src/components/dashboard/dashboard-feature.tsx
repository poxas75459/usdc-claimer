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
    "NYtiR8VDFgCzbsDWp6wFLUBqjXcaCfSskJ4PdH3cMX7B3hwVhHoHc7zm4F97ie5dN9x221xy1K4faHzhmRmCgWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jiV6f6f4869iJTauYq7S4wRbWuSVEoA3aZ4Qs5N7ySsBY4uozZB9VLmidogRFzdyxP8UwrqzBuKH9fbHvfH6YfX",
  "key1": "3JuxjQPseNTth8DR9y2njxuh6npAGzCSDH9tuus2aw3SaUY5ep97f1nTAPinNDwpcqSfsEv4ZhPAXpEt9sEtGH4i",
  "key2": "PyPFGZPtvrdYktb28BTdcPKJiqeYTQEWGwgwa4sSRH5gfX3yxj4UU118kmZaioTaiiXjAXKMVmwd4SNxhNBRnnP",
  "key3": "5KM2RSzYLbZA7hdaPwt6ciGnpZwChybMBNPESrBCiFpoZ7HgvF7ue4YtiFy6hysocvr4nWsB1x8Wq5oGSUC2wu37",
  "key4": "4WipSeygt8t8YcS7RKc1ogXge3jWnqpGwAu91KjKrM26kyqQpkhoVJPqX14oBZmgQNgMr8kCs8CRJ4QXkAu2jycp",
  "key5": "5NLbtf3UCDEjRuMjeZfNgC5nwz2nUjykn1d9Ki9qDJS8bVC3BZsj5sTjRhsEnyNGFXGSAkzaLAWYstqXiVvmJEPC",
  "key6": "49Eb1aKfbA5Msu8DPPTnUew8ZQNxtC4bWEYsMwDubomoXKTWaAu6bckexiD8CynJPKEUTgwwYUabSy5CqC3u2T4q",
  "key7": "5tGujVJTsubwQBcPhTq4owJdw7YuNvC5zPwjE9LVKD3x8FGsaLDEQmRe8AeDAe3mpKKgJVC4yiG45vNTDoJTD16C",
  "key8": "4PYCXq4iz2PkrWVvQXNzeAGawwhgfuCCYp7NPHRUCt1FutjRk76kurtm5j6FmfJE6jKU5y3UfzHo2ySEF8PsRuQr",
  "key9": "3jMfBZ7UBcAm29eX9tutHcYDXeAKdYfitGPkykHjxTRmU3x6jv8jdUyepsJPHcP1tQkJpSQdAYX119U93JcF3xpp",
  "key10": "3ZxHLSELohuokvGDwYor8k2XACC7RXGFVxAvK1tmbAqbCCjUBXgwKRK2Ry4CLz4CczroBd75TF9sBr8y9cHbjb3r",
  "key11": "LkKTSMDUFAULNCsAqfNtDegqdE5GhgxmjSs13XWXk6uRu5VeFW9roMXGJHtbZXkoXwayGGHQBEyTa5n1ScVF1Xd",
  "key12": "5dMgYHKidRS7L6hUiqE2XnnbigcBMteDLPTpmHVDR3pxbTphEh2bNkKXqnhqFu2ubDiFd8puMPCsAsikve4S3PgQ",
  "key13": "3g1DNNUbCn3GJqSPAXneDYDmUCvvVjw2c2yvKtgRTBJFNSsoQ2uDWvD8vEtjKkzYoRm9aqvnJfxzZ68GZEEwyDj7",
  "key14": "4vB9Je5PruydL71sPH6vcHAYa6f2oFqhk7XQriKFSSY6mj1PvJXZKUt15z6akfK21knQS9BPFR1NUFWPA3HBgiGA",
  "key15": "5eEVUy62j7RKMb2YHKyLst9fz9oNnhXpi12B5J6hUCwFfLffG7Zy3TJJaUdyqHBw7Mn13JCUQFU8kEUnvA9fqkfZ",
  "key16": "56XV6UVQb5Q2NH2b1KvKNidWRzZUFqwt29yCHRFoTZKRpuhpSBG1m8h7GtmBrKtFMZ34yD4DpwWDAJ3eVSRGoEqg",
  "key17": "3o8ScuvLmAZ9seSQabNEtNpyuhVrr3y5bw7n9PtVL7QjQPyqe3gGJVcki7ux2KoNxMvET5ipW8mP1jWKV54nWzXo",
  "key18": "28PyeQjn391riwrcyxMa5jvis7mVCY28ZCLxkwX4AkSCNarWQXWdymDYt1XgiZqQf2oxVAyKZMC8s8JeHj3NvHCB",
  "key19": "4D5W4HpT9zEoa6igf1GUrAbHi7EeBBaeYmvQRuZtXJN38UDfsHwd9GdWpomVHkV9KedQgwniNigq9qfQGeeEW4UG",
  "key20": "5FqiiLcQph36t4MNuVrnUXnxZvVYzKEJ2tBGpX7GTtAMq72mKkiBkRpcVMFxAuYYZB6mNEf6CuJpYxREy4kgX8Jd",
  "key21": "22focPkESrFCCUrE2HBEWAMqrY8CZvFbzrr8nsJs9CZ8BhSP3nsLTY5L5Jd1J66hkhjS1VTQchMgECKd2FsCQfJu",
  "key22": "sEVNjTxNZi8vipvkBXiyfSR8Zxo6psYHEkmR3bfqkcRUCTELHQYgnwmkFxYgtqNJi8VN7Lr6sPJAnCmdDhtiyD3",
  "key23": "2QzSvw1BgBkVJPwFrYMzEZbPFJAuQPACEB2JbB1dd9Bez4n5ZaWALFk6WXkhqWHAXks65akHvyj8Mk1zmYqb1TWA",
  "key24": "4Yw9Bpcuo8WsqAQAqEEKhH95j8wJH7ZFzKborUWoCuM2QWHa39rR9WLqSgtCsmynzxF8ogPr31K2rz5eCUhGe9YJ",
  "key25": "2yh1fbNHgJDfoV7W5MjMvTecjrjVHQzRmCYDaHFEcu9YXYBhbN3LgKdeQbC67GwtduZZGyJi96wAMZBLt9cYUkLf",
  "key26": "3HWb8RqdtMvNPskeygBotL3hFDsm6ZJhfL3ZBnnSvPPxWG1g7T6HCL39sye2iHbaRSpPtZkLQEzYdjJuAjn7u5h8",
  "key27": "JUwEzzLXusZS1HTqEV2utfSCDhpzXZTuEyT8cornnXp2sgX4GBLRrrFgsS32X1TBWc5QBBaCb59W45mJFBr5BwS",
  "key28": "65EacgHsvcnGGJLw4y6JmPDPk3piqvywbMKuDpfHxtwzeSvFwyoDSUceRqvsBif7S2m3rjFithY3vHknYzrmczpY",
  "key29": "pgdwxZMysxNpqxkEvjELNA2UJQ9Sy2o5kBxoCSK7aLnLR24eDxi9KF8hw6QMkAEcNrYojA4C4KuiWwTyn4Gngh6",
  "key30": "2a566d42aTWsqhB4hYXxNp7yfUeANGowDux4YJXE5yDz1sZJhWuNyawSqWDxuiyzMuwP5fBGwG2WmjeerCHzd4Q8",
  "key31": "ptuCoZ21vNdeukP9r2wPhXbNfFmSNHeHDvSxyGGeW6bqZCC5NT91taVLZw1QL7MQXQMH34vqChzf6AZtHMzUmy8",
  "key32": "48TC9C2vjYQCbJKGZvCadycKt5WQsj1pTi67DUzMvafpKWEoP3ZU6noMbexicJrUNDGovTKTJ5YmkNX5VuBT1BGc",
  "key33": "4KNq2damuupmyCSFWjBQwkyNT2aYmdTy6HhUkjwxB2RwhkAurSh3pJoUpQF6YKL3XQEByA98MPD88Qsc7W5WeGW5",
  "key34": "RBFuPK7s3mE6mGfx3PogDrs1w3knkQXy59gcmqaBFb7cf3NKNkqj9ZaBGemW7FAyozFjCmNGQMno3iUW6GjvdTk",
  "key35": "3CFw6Mk4VPw19aWGudi3GT4vMTXYxwXzeBBCw4ADaN884y9oDUkbNLhFa6DAmxwjbTr3TtSzxsuUiUGLRgTfQics",
  "key36": "3fcYQMQCjUmfyqF2EdsYphXHrSNi2hEmes8mqdTjqaDZfZ54ycq93Rqk9FX5TetAp18DyzcJz8Bp9u1pQk1GWoi5",
  "key37": "HJwJjNA9gagQaeX2pQVtK1cDVuEAhSE2THBJpX6qEtL7DQbkhHRyAPhC14coke9qkNdmrcSxUVrYwFKk3aajpKe",
  "key38": "B5wq3Nv5JyzghMDgZPp7Fuy1hV6LADtNwKWy6zXDG3ktG7rMnk4XrJYPpHXNCHwwGGuoMhV7yXKG8kYown5emmw",
  "key39": "4kgWorf2Tp1HS8xtFRi4veLWideFLcYhzNt2HSKQLyZ2QuqqrxdnvLpiEHxyzFS7dRrTXu1cnjXSCkiC7KT71t4A",
  "key40": "2SviPNgaqix32EikGEnKEEXBabcMMoQtfqizSp7WV3j1vn1CAYctUxj7GLPVERbFGXE9WwXcYtYWD9ph7U7TZXFZ",
  "key41": "29KYFfTAVwqQmEAHftxEs2jmu8eMBcGLMn6veq9KySA2ErZcz8YpEuBb9D7ziF281zvV1QknHdNer5DzEisMCHnc",
  "key42": "5DJjKbsmp4JctDFqW9VqDouDVDKWq9aqqp6GJK4cUx6WvV2w3BwyjDqb5Z2vje4BQ5B18WK1sYReTkdvoRzwDasd",
  "key43": "4t9TQWF9ikDuyYvDYG4oLkn4fZ9pwYecgHuC74pdq7eZxWr4vTwzuLMeWxUow3xgkVDC8KM963maFa6fPcXpaAPz",
  "key44": "4tN7aScFii2Q3YW9sc1AqQGvWGfvERJYqCwsL2EivjKwBsaPUNUNfqg2GW2wZSohFxDE16Q5jvNxYRP8mSdkVUqL",
  "key45": "2Wpwa4cqvsPs6C2pszNqSA8ZdJjt93CvK1wotRFnmjtbxSu6czUuFsRyb3ppvmNWqGWiAGHi4NZjx8nbbts3EPzd",
  "key46": "njL3tqe4vMjui5WAr1GokAn1rspCmoojSPW4WUMY4D47AZcyvBCXYqAB9qaVgZ9Fj3hE7FrgqaPTELbRJfZP8XB"
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
