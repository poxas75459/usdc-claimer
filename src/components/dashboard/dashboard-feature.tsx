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
    "37j4RD7BC812Vy251YT3kKTfh4gKrJNBMQ6YB6pRv2H9ntumthKKqoJWwrhmrwifEcYzMmde7KzgLLv5RHjHjrco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctJ4DEmoVGzZzo2GiWTh8SK774XBPu7ATcFzQXGkZrbEemDc5ceL5KEW7M3Xe2aGawJAAaPBwF4hEjiFUjJ56vT",
  "key1": "5QB9JzCb4nuKnnboqqXp7XQKozWDH64Ut6pHK6U82HEDWzoKV2K8qmknJiUGdsGnfWLdH8uR8FpXkdw6VRNCeFHb",
  "key2": "42J3Dbkb9coJqxWzGH6rRc36dhsk9ggmUyf1M7rrvUgEb6zfGT3NMA1S3deNVVLfQySN65ZvVCSpaYaBjNjMcMti",
  "key3": "4knupMPR3kZmrC9YFzyoTBZLGJw9d39QuYDvUi1UWeHNZkL15SKDA13fmLMtYamrjrsLQFbedPThUyoND594PVxX",
  "key4": "39tACfTNmr6NDj2zXYzm19vq1RL5YEoBHXZezE759AriXQkRFE85Jj4wEr5wdKXVdEiVyxWhx7r3NtpWfSJ4kEAn",
  "key5": "FBrnLzrW8oFp97v9Zq4EE6w2s5B5tHhmRsDz56Cd73Fh7fMF6rrvAwhrT3fhpbsTN55HyHyZjkxuUMCn3udaYa1",
  "key6": "oQMc5hZhpXgATSjEYQt1bobX5fgu1ZKrAd6ss4sEpj5E4r3VBpfvUesBdE2jQZB3FuyxpqdDbVXRrkjdvNBYhV1",
  "key7": "2PTXwVrkEDdczNkrZfNFTMQ6cVJZxEYB4BjJjDwGMF8ZNvaZMdk5ghjp4tgmeeBaRyGbBzASawdJ7fcxUmmTZrLR",
  "key8": "4sTVNSVVsrfTm8FNCKZ3jC3zfFXMpRyVCDA1TLZB6p8HuTyeEpUXhQnGdtS8crYwvXVttR3YrYM3ZdZui2wJ6RGv",
  "key9": "4o9SxwNnccMNNKz18Guoo1TF3rGng2GKUojmDqcYQmhbhSP4fDs1EoAPaVnxncpvA3aZUKDpKqgwkk98gQws2f35",
  "key10": "3oXdxcMxRXWFo6WjYGScpD75HmmHKNS2FyiG5KJJtaSx71ersJwyexW7WRYViDXZaKdBbNF7AVdiyH1eTU7udzpn",
  "key11": "PPYeNDcnJuFdKDF3cXTCWVMfMBEprdD1Bxrg4VXjAe1rn6syGMPjhMpGbcQJFrpUx1vRuGT4GkypPBN1KGKv6EM",
  "key12": "457KufQCrLFKayxuZ3MmcRn4D8iejcQPagkKmnd9tcCGzVbM3cLb8ei8dSELLMS8L13Ksu1i9ArfW5Vu5N3zvkBk",
  "key13": "378Gty6DwgzXocS7PspHUPikbjd4f7t2pJb28qF5vSKJqKS5wym1vcS8R2HdavW8BzJ6SyvxVxRy2sozCjKtZF9E",
  "key14": "3ydrGXeumiptLUf9ZPaybu81i9yXas3o6f7pJKuHiDsMKWwBfM62UpoNWuZBQUDXuPbDD67sRBEdWLNuVaeCLUys",
  "key15": "3qPZwu6HB8cQLoTaVixaZ5WPXjnZ2bXHRRTUsrteFtC2xrJQqsLoo4qxkW2pk2BnPXiZiLArWHdwsJA86vmzod9c",
  "key16": "2fH2SRSt24QbX2gxfP122FvbFx4kSFMtoJQUcjRUSo5TaewWxqDCyPCGXBGUSTELDdLNxrBNTZGUcvegT8tMZQZU",
  "key17": "2119saZL3fsWSFTrxHSry9HE8j8DETMUTz6TBbaJWPgznCmMzUbXygaSozXPoyKwKpKhJTY6oTuViQ9H4WdnqEWG",
  "key18": "2PFoCx6qyNWoVNxmMycLByz8FCQrF5EVfz9xwCjLRB4xitToRCtSgRTruFdV2nKLd4CYks7Bg5Hj72kc5qPyX97h",
  "key19": "5ZgfsNC4As1ZWrZNK5r5ZeEQm7FtMiLo2EQg41NGEQnmxGb4ipD9uXEVbphSfVZp6ta9DWKV1Nj8mG5r3Qf43EXf",
  "key20": "3XqSBGeqdY8bbivUp2TJqySSfzcBTUg4v4rfqrEFpN51KjfxgbEGC59dvR6qXE79UceySEBjqj2Lf1J1uDMVCbcb",
  "key21": "2rxiGRJRKuc4CQzReFxL7e4t3q2QGWBZecxVebc9bnkswLBa3F2qUgj4ozwiQAwhYMeSjMCqoKArZY8mieRSnjqh",
  "key22": "5kVQ4b7NUQphV9NwAUHQiRbzKmSTWWRWJ8LvmdJNok2EzXeqk7oPH8BLRvVBHRQxDCccx5842HAHSgMRGANNqS2Z",
  "key23": "4zKhVyCW6kvgMCqb7cJ2SMZhoL3HJKtF6i4KxFtrkoBT7rCTHSCM2ZSvkcFb7buYHc9VGpwWYcEtWSP9smDqt15g",
  "key24": "M3fdEaM5kUuQYrfBCZbyHTRvSYNJGka1k6tDKafo5mNth4ofEKSQ4dqLDeesAcu11jRPp2Y7AEag7ePxzuNg2Vw",
  "key25": "39HT6QjjRGrC4qhfexeb1k9FfpvZnqAHY7N7tWL3iRSZPkpEjFQJvuwoksCiQ6KjqxtvNMrjCfCRYH53zq1g4asn",
  "key26": "2m9xL4qeA44XF1sYJRxMuMCDPjv3iSET4DUwD17mALdCDqUQ67MD1wNjjSaSxEHjCFMAtUBhpUACmN4UeW6ddmzX",
  "key27": "5kgxBoCMCLVDzNc59FP2816gBhvEMjgV9FEboN8JHkWosJbiRgfAJJBC41R2shuVVqsVt69nSKjh9cphdnvk7ACf",
  "key28": "ACsFypDxXy5Qk25DADTbLkUL9t6RMdVaFd399Sxa9pnM3wp5xENdjk5CgQniG4KtNBWWW8YrHkDqMViZLbGed8L",
  "key29": "5e3hwqyFitSn9GChz6WHEuqeZn5ebwhhF31QMcHcYR7VxwDwhFqJstVugVjZ3yuE3DazXSn9EFpZPYaDBbN5cAA5"
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
