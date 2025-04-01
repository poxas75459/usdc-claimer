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
    "2UvkDb7woYXN5qorERrDLAgR9htL3xPNFbANfWpsKDUZS5oF1J7v2f7Wm3aFYTkgxc8jmubvbcBUuL1oKmmVhT8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oM5rpXs7WBE7bALjocMJ8eYebJmT6XXvN77StRkWrSKGKr36feavetHG9cjLBFqDk5baRm2RjdDoeS3NExA52Md",
  "key1": "4bUDNE3kxr9WPWCXgcb9aRETJ1F2nGQknY3oXR3qoKg74c5zdJqY1wdqUoUwgxbs5VK8pW3qWvN4NQUsfCL5qMtL",
  "key2": "3YxYQ4Scsp8XjhQP8SXFGX8vK9QXUfT8fZM4ogPhr3R3mhaGtQjGNvBG8P3aF6BrDHjRfZtCUqeW1v9zN6mmiQm1",
  "key3": "2iQMnGsseurdEWtsw7xVZmSC1nbNTYFSzSbVqqX5SmpbYtqaYU3no1xBSEsDLkgWEYNg5SGB2wDVpx7vejz6VauM",
  "key4": "672KfhMRJycHtbtcQuk4nzbD9yo4e391dvVhvJXPviYghynNVUm7ebzDfeJAVvt1V2uTxhK1JiKUAN4QH7J7Z93J",
  "key5": "62ai1rdT5Wr9LwK2BDbLJqckJmh7kx1iKMnroiR4JgvVH1uEZxr6kMemGu7vMHzg8exLCJSrC5zVGzK5ufZqwuGg",
  "key6": "5sUzTmV7mCi2jxqgF1Fno61otx8vJshWpC8anJQTEXeUXzR1boAAQn6Z9AssSYZtZTJU4Jd1ZVhuGQGGvJwcxBt4",
  "key7": "5KTB9t4atLhUbL9m6K836wcXYEy18W5L7p5B3yNo3TtsAqQH9NE4qSPtSKt6k2pmgNgxeA5vMcoSLHR4EwQqB123",
  "key8": "9uLSGmDMuRMJtaCB2bbh9f8DCoPAeekanDGQKSb62UuartmTm35F5tQye7GXfsnHDad1i6my2Jd65ZDEZGj8nhW",
  "key9": "3yahgCjHoMLbWPTpxxHHys7PPxEGig4kmNYGKBLogqPhwejtowZfw9zh4fDUXexK5R9X8WZaE1HptqUdBVDubTpy",
  "key10": "58ZgvWzDZxB7dvB3UmUuN7jvFQbpeWqeYPWGPVTrPFQ3htiYNKKbwaV3nxWXd7LrEoNhrJCJXjWUjopF6ABJr5QK",
  "key11": "5C9Vf9V8RjYsDFWQNDSWLs25eA3Gvpjzbxk6LosADEAsohesBuihXvjXNUhFQA4JUTN8BWr6uAQbd1Yyx66MpRHe",
  "key12": "5iyaR5JkiGp8WTscAE9oAkYy8MwLKDKL5xyTAuhwDSeDosxZELbeXcX93Y6jtaJCPx4pa5HsDrPRZzQhviLmVxVJ",
  "key13": "n6oH9xAm8HBjSzAR8dtUh7HcQE77DkMp7KGs7Yi6xXEmeoBgsZZkE75Md68hUGBTc1ndfqS9Yra3vhkyrQW2mSR",
  "key14": "aLFdHvYipwVEzWuMrRneTJvREqkqDRExxnQVFwSQSWnQTgaLXmhkkGZpYWCxUQs7b3kBvs5ER9pHV7udLxqwuLU",
  "key15": "5d6YecQavE9CjPw9uwQGCp5gizoCPDxpY6psT46p3uw7FZWX3RoxNtHdzr3FbT9djNxXhDP56UqD1VqXYQKrW4gt",
  "key16": "5swJuuJJCV7S3Rtex6w3HMjMpwmPjR7MFP4ifcEiw4T6tzoHhLq7FMLxpZETv5qP6ApXDiDJJ5meYaq28LYKQvur",
  "key17": "3VV5BfAmptMSaiH824RytZDL7HxtdR2mwaBfRzsAJp1NCRGT7vEQWd7tecYkvjpNKj5gbDL1ebU9yeMEAvVCpv1b",
  "key18": "37u3aSvFq5hZT18MLucuuxQMeCqAbguKQKYgswmy8qBDwBAkGhhx4rKW9BZczTezayrtBUi99AEJYL5WNdEamcLZ",
  "key19": "3WfPNqkkn4nJa7Fa9EqTVyMScYYTycEhriDmQwAFbw5MFyoo4SgWkD6V7H6TLP1uLe5iSSCfGcqj5NfVHEiSHYbU",
  "key20": "4NRXKUbbzuZzvDXExznVNv9VdLLYHGH7zCWeeEAvzBi2vzJyJaDYnWB2hzRmZi2sJDZV3JFJ3yj8htUoZaPsthtq",
  "key21": "5U7Q5WkmZnBVG3M7GaByRsVPVvxju17v3aWaGzVp16G1RBxc1tdQ1MiXHV2QXZfd3WjiPUpP7Z5BnngzXjiEvugo",
  "key22": "5x35ZMNRnFjd1S2Dk8J7Qo5wEaGEcDCJLKjYTYHkHaW6Bci3uqkK4ojiSfsqy3mNh5b7cx8UyMSkqqz84NSMxcb6",
  "key23": "4d88dmwYTdUp8VNWJyH8HkVWQL5eXmUzUoZGNiciWenPb1n2bEDW6m22y85aaptirwtjQSy1KsuuiDQPaRf6D8mv",
  "key24": "42jwXjdg4XCXpSSFs7QFdcFVcHMR1RdDqqxDch5neekYD7GCKWu95pBodMf1FvK3DUv5ohHC4QUg6UvyBFpWAX8h",
  "key25": "3iY9Ab4aVk2DW4SpEQ2ooubDMndRMe2FCLGqUQcdPbbSp5mX8TuNrjVGLrKyTDK8UkcSq2xEcfTBKUswx7dVsMfb",
  "key26": "2V1xtfHMtXMvrwgjt9uBoxKL3aDwPZMENQksqU7EqdG9KMm2Zvp1dvQb4imopgdVU29CVgV7i1VAsohZyENHaVB1",
  "key27": "4SPHvfvgVxiNbab93vLkjz77LMPArNg97aD6jpW3vUt2mXyjYguCXygBdkhMGiCF4mgAvr8rxsrUkyWoLsF1HKwH",
  "key28": "2awUTobQ1y4S4HqfWRxbG7HW7d26K64eVdD14P8vK8GrGYBHfbt65tron6Qzw1EMBhqG3PZzYXp7MpQX39Z2HfNf",
  "key29": "24NM1nkQNL43Jddg1pN2v2ivQmtjFZfqriA9qjKNgr2c7bbgQRFughqAKQ4ewcVAc4HRoUfBgfkQkL6iwq8nJXqQ",
  "key30": "4C94ZUU9nXoT7e7T8yYsq4TRkh76RKwTd2suYzw3LvSzDHdfho5jRLGxLj5gpVFTARCyCNH8buBGsaaxLhEYDNgM",
  "key31": "4df3xSz1DFMf9kvKeTpvYcFi8riVxiHxi4yTSNgUebLjR34edaUVZvucAMcbhj2E66k2PEU8iQdLLFfR6zHzSZaj",
  "key32": "4pysSMn9qeySVdCqG6UsRuavxyJwHSQw7S6TkLMRi7D1RZf4mHAHd4KcPc8mvXajvzgDNKNJmZyybL8hGkkUzkhG",
  "key33": "2iJABFf9ie6kDpXAyNhzk7NfdWgu3v6CsuVPCnKhDmoZAzrhwdMjV18vAz2HfirDKoTW8uvkAoCoRkpj1T2spMuz",
  "key34": "5o8cfQWbv2yMo95rf1CFNjFXy6aJBqnVKu6zkpRsVxbVaAWce28YJNVMn7HsihyYw3nBtu1ytLxcLhtc6CxDCneq",
  "key35": "4P8JXCsFZiSZ5JwRDwok64U3vTSS4HYoPq51tGxiFuHuGmLngsDohuAtjNNfqXvKmncG1YMYp1cbb6i1DAzcci9U",
  "key36": "4k2D1P9f8zSQVU3ZsFp6g8gvdKcQ92UEZUZAmBKFk1ZEoR1arrhuZ6X1RRz2veQEAjirg4hgCR5tFyAP8HQ4vtER",
  "key37": "2nU5y9to1QJD6zWX9JoumG1Qq1KnzuixeivAaE9LwQrdVysEeZ2rZutmS6oPyWfHrLB6T8UQKXFTDXjYPSDBLknu",
  "key38": "2D4azosiHowmTZuwDjCyggMunC8KgCCaFy89AUJdu89KnUQCyk2ojL27F3TPCRPyVmX4gR1vdfUxYzAGgSYVPoYn",
  "key39": "R8FZAxs7EDs9bzDxCobybGodCxd5iw9ZFQGj47MkztgCPJcSrAjGxTCUJMujwpY9TELKdPzX7amMRvHfF8WtFFX",
  "key40": "CxgsQ4B9zsPytGPARxwuEBSB9hHMST51eaKczSP3wRb32FLwpHLtsYALN8wRVEbehDrcNtiynQdfgFiA6Ghcudr",
  "key41": "3EdbC6xvyedV1PwAMfgQ6C8ifFry5Q7PAMJ1nQiBTsXmJPh9BYUFx6zKduv3AUD4Doc3Ba17djyVpf6voorFHvke",
  "key42": "2DSeGob1pbrLTU6zxzECJV8H7eUcZ9uVWMqKTbV2G2pnpjSoFepmdYKcFxTGvADQW6oQcAtZYoxaRHgxXp58kJ7z",
  "key43": "39gvaa6DBx2sK17SnR5u1ZJwrpWbCFhdEGAaSbuS4NCboceqWxVGnPXzf9ECJMhZQwRqP1aNgUZpXXVByAavjyJb",
  "key44": "2H8k1PJveWHpvVHKNCsqgJvwhHVCJBLsmT3qdRs4uARy3JoHtWTVjmjaREfZWznhiGTuqiaa72Mq3ZLMCw3Frj3B",
  "key45": "3VDPuSAhwTWDYcZrAqrAQcorgkqv6Y6XY9LyPvUBNoYvKbpqPFon6pRUVNnfUxJQFvZRNZYroPA18J1TsWK1KYNS",
  "key46": "2FRQXjJWSzTyKxoAZnmhxLNVoAY4M1GMtpFL67oiTgGKTqh4KA8XSoVxjc3iskvtxnnhg2tRUq8EVN3VB3WZouqa",
  "key47": "61oUTsJewXnnqdGAqN4yhHG6aBUDCnuN9gL13qVCX8xUztMkqSH9jRve3dNN2LTGTQasVtkUQ2JEZY3FaFiqCjAz"
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
