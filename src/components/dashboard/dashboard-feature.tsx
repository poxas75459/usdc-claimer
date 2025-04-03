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
    "66UoaTbjPtz3ZDFQxNHytPa17YBKkM4t9dh1GSUm8kAJnZnCQrKxmYgedhfC9Jpdu3t3HYGKBd89G1M2dGuZqtoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upUp2bvS1GUaC6KRGqtbRCREkiX2Y8a7acnYGugMBMXVdR7Sj2Tadjc76Khnz1owXSdV5me1MVa8voKg7M6HZQW",
  "key1": "4z4vKGrhxkKoqUh9BFnJ5MiAXzGDhSia4xTckd61aNqrk6XahS7knFnWydTxX5U2DG4xrpx2kjPfwfunRzi7vp1c",
  "key2": "5Mem3FxZt95f8rd58sczsimNWPuZ2nESNLVNLvCBe2pC4ibaLmtVGwSEyNtGtb7DSwqQhfdCu1P9VcjS1Y5vYewZ",
  "key3": "5prpvq9UgBkdXuzkXzrS3Wq8JHSF37skVvUy1naip1kBGPh5VLCkP5Fh1fmjVFJ3912mF3gHQH3RSC2Y8kDKRmuK",
  "key4": "3XKkuaS8A57VnvJXT7KBW2ND1nj3JJMofmG5Ais7qyVBXjHBWhdFbd7H8BaeSHBpKyMPg9R3CaN9kLJtntGiBxxQ",
  "key5": "4g6EBFKqkYLNq21q4Ta1qPubFrgVvt7hWHL9Sm6dBVhS8AkxJKdXnYGj1mfiMeqoMzwBj8bZAL5YTGGJP2UawxQF",
  "key6": "3GieUBHvPEa1GHeXNrWBdHJRShysafgkoXNkdkKjYPx7caHi7mXQRWtFiQfLrRySvoA4cFxcf7tEsfap1wtijyun",
  "key7": "3J21VwfyVPpKwLUr6KKfsqEV499JjyKypsgCE3WxJwUhs6XeGhTxdGFonwE6uE5V45iKswaqKsbihZBsKN78ZHjT",
  "key8": "fTNSkWAvxaX5UKkqCZt3PJYZyagUFMVHu3zZDKS3RAae2QSi5RTuvNQmz2VQuKp11o1xr4Nys1dDMt9b8WHbWq5",
  "key9": "4HcpNpLc9R9pmJFHLFFxTXhMQbeuAZazeW25CJKHM6Nsg35yJNAJj7Z7tkSubJf5v5GVPbFUHjG33nxQX3iCWnRE",
  "key10": "5MdmSoyDPd6nCgUy2Ki9ppn7KjHuHizPWaFUReEvMjKxUjXadxjwiaaVFguaAi9NmTdRv7uoQndgi1CscBJi1cki",
  "key11": "4rXUsftmLLw9yBdH8LnBYBHzK6ASyiQiLEvzDazaiMePUYYrPU8z2cXSKQ6uYbKgL89P8NW7bRn99YYtvYgyMwJX",
  "key12": "5RZHspjFYaaNxjdK14XRohXsgjpyYMDN1ztAukgogkqQwN1Jdd7QZaapYXMsgwE7WYa1YGDSU4UNRnf5sRJ9Gnwf",
  "key13": "4cacc8UqSjG3FkUkBhcxjDNuYmuYibWhEHt62d8J14WJKi3eyVFLCGuYz7ULVXGJd696HfPJ1C4w6pPFKABrBuG6",
  "key14": "5ZLgbjk5TWbZyp11VbSHD6Hak2JCSYogLLV22A8jMKrU68S8xFZb1XtHUrxzrsHeNf7KHDCW7pNM7cPbjhnzCtgr",
  "key15": "2tjeQ55stJ1At4cnqZEGpm7rpyKLiLpappTLzQydTjCzyasFKVX4TynccS3gQeHDsEPFceoQCND97tNEB6tYiNNM",
  "key16": "rKvRMoYH1ST9Cwd8VcxEqGbmZ6UJRhMA5xwHKtiNdCog3i34Rd39yYnUudXNJj7Lu1GdqokLa1CNN76UKRXfJqg",
  "key17": "33bVD1H7XKkeVhAqQ9HCaP9ns1DoCeCfrzHx1xAKpkgDjBYAvMCcByepQJxt6MMs9VhbbNk8p6Qc8TT3E6Z3VPRH",
  "key18": "Qrpk8UWQJcxeawf3sVQ149p7fyycHjQSV9fc8jVXA2v5McC7PMqPP6rTAPzbFsap5AYvLUirnq4V1DJ4839M2T6",
  "key19": "sTdWb7LAEVBTzeAU2Za4ijuFqqJxtNVVXzrKqT2z88GhHTt3F34kbkfPiefRVvAe2DbqggFiCSdtrpJCmafAL6f",
  "key20": "53CnveRh1MzR8HzR7VXP35hdFPE8tWJ27qND5VAz2DHzansYHJiCzSK7y83JpcdKFqNiXbxe9Jv6hZ2VDWTMdxZs",
  "key21": "5nrdgEfv5mWUeARcmq491x2qrFkQcpnVV82wG1Vtt8Vcz2RhvRx1ooQS6CFecEN1pW8CdQvKGWSwRqmXzz6VRbM8",
  "key22": "3nphbUvTNRpxA9aY5NPCRyEk8jaFwHkMc46yRnjjsoEb73fJTFepWu4hLTgJ2XepdU6afctiLjW1okEek5cWUSav",
  "key23": "4DG4FY6YXEAxjZ7XN9nxoSY1Fn39j4q7CJjZXcBFuUrHzfojn4WYwx2s2s2cMc9AmwLGZvSGDtHyY7uY75uNHyhZ",
  "key24": "4yzyA81sWYpC6vjy5EDkemohfLffUF72GMJWcP6gcGtCpxVASn55pt77zA8b2CtJb7PVBv99mVsUbWzXN4WDyKKN",
  "key25": "3R1krSiqwDBtHDcTNh2Rs2mdGPi1KAkDCeDvXgV1wUzfvgeBKRsYb38McfsTmxePubfHdRzNjEXWstvQpPsq4Mbg",
  "key26": "2SbjR4vUeGBReEM8RHTtCG5JFJcjbRykRS6NS9p19V4LJkvy56dmk9migNK5Q2RkSFRNuFUaT47fsDYWXGEg8xTc"
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
