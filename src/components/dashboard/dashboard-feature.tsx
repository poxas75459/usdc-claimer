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
    "4wmdfr8WBYbhe5ENwSu7VSeJLJ3W7KzPSbyzRT4haN8cpcRzPbVBxMoDaJbeFbZBXWXEejus6wEZDtj7CMgKH8wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgkkzAbFau7j64JaxL8ZhCqnnUmTzpJoUt2E4aajNVFkYLcpUwBqyJn5jdmJgfhWMBfZpBHCbTsqGXbZjYXLqzo",
  "key1": "eu91DprQTTZNyxCa26kuhafxjp1qHHcFCQmdaVGaYJriYMUw3xG1X2x4KH6AxP68YWqYVUgkzVcJ4sG12ijSxgP",
  "key2": "4t7mViQ9nAnwMpYRcn9XCBFxKunjNErVoMsygUjo11KLG8WxyddZdymV3UHYZvTYwh1XsoFnW8tW85GpvWLfh8Q9",
  "key3": "5J6omjaP8XvJGz1ZtVhy38eznEbtQ2NABx6zX2qYdVZdvd53HrbuRo5SRgpYwGAzYZMhVoXtXjZh6fqtEsPVhbUm",
  "key4": "5LJ9BcQbSYq65vkUSTPaQRZ5M8rvtsecV4ikMDFzT9QrX8hVCT2T5UhD9uqkr7bCZK9WbDotjqUWD4uYxQuXHkii",
  "key5": "2vdetx3dXgiGTBqsBfssNU7LRTzLD876WQEXD6ugQhab9kjZjKEk8z5n2DW3EuWYc8fm977yGMuG8vVFezLzYXr9",
  "key6": "3g8AyayZ1Wny6re3S3qKErPt8qRwhFigFBP5rh4BMaFyTmwwmidzx3n6f816NDDUAumWCiXywgrghUFNmZ9ZxtND",
  "key7": "3FYvTa49wQf9Bz7aCGgQximE3WWysc1fgzWUnq14KhMmB7QgzvgFG3ofBPBp1bURwqXa11HQRNwyQUTMgMHd7Y1f",
  "key8": "4J87r5ve4NEMzKreBu5RGQEpmmjTEwqq2GZMp11yhVNA56YZCeugwsFpKdahWvF9JiQGyZSkMxVDRE61SpAaU2gr",
  "key9": "4mFNU9Hj5NBriPACHG9FaibjVathxk6EHPhujdgStoPLHdmjt6QfmeP8bTNpNbnEePYXXZnRRjnn5KAY7uYDzowr",
  "key10": "2eehswdUGnA91ndLAuZ4JWzRNDY43RXU6UYqBqdRySMJv3jWZia5fXTDYVLbGrhc6JRyLeqiYFi1FrYr6k5FBiUj",
  "key11": "2SGRh9nfX6hSsTHpZrk7CHAdVz8PK7Ro4cwxgUofVkKNMd4hCx5BnwviPATTBmiSbPGxWfRgGmmR5TTnjrsh8t7A",
  "key12": "3fuXgGVVmY7mUhbAhsznQ4Ccoqk5QCNWMnhZQEuXHxuppQuQT5QARDtcLhBV6uT7zxk4uf7Ph5Sfk5aUkwL8jMGF",
  "key13": "89VUW5UvZFKhnWgrqe6SnPxMg1cBwtD1pnMFG1NwAp6kApYccoK3fVWfgrcyCJtKKSCaqrVB3wuZeCtJqNF6x4x",
  "key14": "5sggVPUto5NiTHSRghMe1yjdj2Mgyuh8kGyeGJNyS4WQKzv3sqA7G2TSNuQnPLZWRxVcC7fdCbWguKDq6PwQWNR9",
  "key15": "35w9whSVYhTq4NNH6pZEysXpoQ3LCWRbpbjPFQyeFa3n57ybLVXTdiAaD1oyRLa3N4XXnAuoUCfw1dzeLqsX3MEE",
  "key16": "4xFQ1xHBo1niPf15Sg6wTNABNgg933HtE2kDtUyWw6m5MnEhQ9BYxH5urrNKwX9VLRn91zkPsCQRubeQWxW3b4NA",
  "key17": "4sS4t47o7RHnJnLbMNxrCcnzJHGwMZHCqUhMPuJG5NXVnxM763e7fZHmYzsiKhJMbbcQDDvFgdJaDnV2NhP1VApw",
  "key18": "24Q7i93x16Ywv7tLXQR4tUkYW8rq9RdsnGgwrEZnXwZLrJKC3evNM74BEfv6Kn619JC88PdPEPXoeEmzSWRrESeq",
  "key19": "2M3aMqoxTXQrN663GTKAAVpmgEbt3sZkcj8NWsD9n242zRLLT4PYJADTp5X2sU2iT3LdJmxscEjEGQsktamkafXF",
  "key20": "2UFuoVQUrcMrLfkYqzJiWQrqRWyLwauStmPsb3kHBif6d3B6HdSobYH3Ca9jQkiAHQcYdxrJCG51LfPBtnxhdZxK",
  "key21": "5Zywk7ojRYdYZ4XBeq238RhtQ3ncQBrABEvvS77ySexG5rnhoj3zP6Uk5hUceiuQTuwuSKuQrHgS6dQWZjNWRSmN",
  "key22": "3MN6a7LXjLdfj3TFfGfszas7fhNVSdaZwonxpsqkr4QLZgXhJWALvQdUg79eJdxfEBxGyLqE9b3t4diUSVw4NfDN",
  "key23": "5WbmpTfKJ7wUkUis8AoY7hz3MWXgzpymSJ4Lc1jWohLGNwz6zsgRLKqaoUj85vNwPjo6ifhZpfiRnDWmkdPKtoAr",
  "key24": "py5sUrCpfBfLVq28nGqFiSMuukXbwfCWTwWTV4p86rnkfNKW9ZDuar2pWWiFpV3DFZ1wB46pddFZYXMkXDbEom3",
  "key25": "3iAiRmgcL2C8Pt4ynLTsxY9EeZwuvh45MdyPZ1qb5gbeSr88jtmAbwFW4GDNEqC5DCRoquptXD5KaJ5u3d5Gt2c9",
  "key26": "QfCbftkHESxVA19LsYSD15VqL6uvLfnB3QbcgpCzT8C5HcDKi2seXYVqJg22pz8cJHQAFW5a6VqVgSE3iubjCoB",
  "key27": "4ttfTBgeS5VaHQNDr2UoQ1Mz8RfWYgQ4pwXa2DM7NrULFs95Kah57ZmhQmz1TNpJ5KD9tWtUzEywbK3WMKeUpE7Z",
  "key28": "5t7iQBba7G9wrdCKRAV3Fhr2hngnVWQuEBXbTZkSsCVnk2gVSqUx1kFFSzetajPAaQwuXJ1XUCcpECRaXupwxnrG",
  "key29": "56YuXkCjuNcAcyiGfzgGcZj9nqHUNwBEkYHYngqkngkWUvCfNTEUsizqG34xHpboHGiKfRSgPeCihD9MDrA7jGzm",
  "key30": "57mNvrPaKFNVEggRRwaXitaFd17z4sLyateBo6c3UpNpkSdiFW7CBdUbAusC3YxAtsf56TupFhm5Gvfhr27GN5h6",
  "key31": "5rxCaityLdZweum9f2H8XA3s5Gp8QnGXpWgtwQAb3DcRc1M4PxzXJm2Tb9JPxL1evy1FVDntVXB9FLvgLe96iVMv"
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
