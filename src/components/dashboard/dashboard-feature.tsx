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
    "3Tu9KuP1dMidD6jRyCEspbRkwXWehRHR7WvGkUZavykaK2QoioeYFEuudUJKgPGE4r1CaoiZ69izYJuFeWidqodZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uazg4xmgC4kH3wquM7ge7nJY9Aic7HjHgqzYU4VuhCHwzZ4RwrpTFWJeuz45ncGujUvv6JMgQgFoYbeoKbgipKP",
  "key1": "2DNGi2vCgATzcWqsteLExJL3T2y5JZMebxmxWDxZpaSvXnLfyPSuLDzKtDLwyQgNXWzaFtZLLRnpPpYB3tu7juAG",
  "key2": "3G3v4krufe9Xt6kEnEtXhQrpgCRmiMHrbH7VvxBoLUT7zYHRDshtZQkGP6VSiWvTJw9Hvmp9TNj6Y1uDoBKzxZ2d",
  "key3": "2ybKdHWmAFJ5P5TWk11D8pGV1k1GUMkeuZRXM2fDUsD9Su6CjoM7V4w6fQ2kn7KRgSgUuQshLZc4aR2iWiKFWt5Z",
  "key4": "58qWcEKpwc1BDkqyAomchywwfY7svuaHwBmmpNLHmKUPoMt1RpfVvBdcMJ1Gnwe5TF5BfSPiW7xNriPgyitDnw9u",
  "key5": "5yBmTN6GLKBMyvotYsFUoJmNqVsmnWrDTyoN4sUmQEdaR2wZ212Lx1MAjHB3Uoau7uQwqK6C3rDdRtcdGUcq5cuj",
  "key6": "5Vc7pSNftu3dqdB8UuQNBGWunSQCDm7LcSNh8Ad8fQTKpmpuktDdd22Dmg3n4MGqX6cZPXhjP1NUpPVmduuydjAv",
  "key7": "2Wvad4KJpf9rAhJQCPWrdHafsxBAhoQ6zmj75yJZe1T3BcuRFrirXFdTpq6BZi5NDNkrUyE4yDVHmvHtySmwZhnZ",
  "key8": "3etwV28XnmY3sxsuEXMLDiJtm5Wr69CCkiAYMSUAEiMNbiHHG1rHuUDPNBoGwCdbeq1YQZdyPcJuHvihFavG3Y8v",
  "key9": "YSGJgRmx5scvmg15p39ZKoVPo8gTHsuFEUj6EVcNFWBqkEPmo4f2BQH24bvt5pMSZ5YFHFJoHphGqvVepS5hS7p",
  "key10": "4wP2yXzskg3xJTDEwHQfywhve9hpTyndpq6iG7jaS7zHGMohKwzQvsBmzbLEFqqTBWXgZfghyed3wvN6UN1UVbP8",
  "key11": "4j1qH115aRmcJCG9MXAR2wK7KXTESWCTXWPvvzEXS8xscUBTUotHMGQ16Vh5a9c1FMegQsuuFZ3qEmxrqSn53oWm",
  "key12": "T8QwstsG61hfmRvLRRmGAo4mWfVse639GYC49A4zv4AbrDkaBJq9fRhivm7AvjJPD6GgqHed7pkHM9VnWW6x45A",
  "key13": "3U9be8XyF43QKTfLqfNrBc1Hw1Phn1ZEdTdsAa8g5hGg7exrkMHCY3PGR8hR8AT71xZQRbdXFAvqF5ajRsvPj6Vn",
  "key14": "5oG2jYAWUfD3GTXstbB6qh6qKdsGaKZWP49vAmTEdEdLXiW84hTNmpAQo9KRpUmTGJYc8uVQNAskrJLDWNqRUcn6",
  "key15": "3Q2ag6vKqMDdHWWaG7jfKh6bAkXUD62fp8FHqPV1eus1AZoXw98FYeRz82tG6qveuWBXtF7iXCBd35prY7wPuBCh",
  "key16": "3SGDQUcHvx5a5GMzhF6bB2R2R8aT9S8ZZXbhMVgL4dzDN5h8zLp3b1VePtEE6xbHLDpSH8z6EFmJTnaDVaUeE8gZ",
  "key17": "45k191mrrzDCWyuhbKd1oJNQ54DVLRtXCb2cBeRFiZqiqHJUcSBaV7kzWTCGvwor5wKqvSgZjeJEi5SYuFczPzwL",
  "key18": "3rLNtUb6nGM17buKUyTsb6QtqqbmN6C3YnHWtZfTnmavaHLxsEsPdD1gPtYJawHU7c8wFJgjpvQdt9Bg5dGTnCXP",
  "key19": "61xC8YmkthrNCYnoo9f1bUidkYLjpJXDRbVhu8GSSm5YeqmMDMZgyNNkuaBxo8fjiUjK3uMPfqviLWVXYBiRapFY",
  "key20": "2LJSoou7UFDLDyF19ZipDH49S9V2PzdQw5Zzc1pi63GUuGXH1BfYEhPyuUGnUUfMPrL5nieNS35W1vu8xB5qGUHU",
  "key21": "3LnzgLvg1huAPiPZSBuLadM84NYf8BeE5T4YWiHDPQBuxXG9xTzTtuaPcj9rpGBypJ1dmNiDoZ7rhxPSkDcpSBnt",
  "key22": "2QtyH9KTMUYoFG25eGK6f6fYXV9Z1PH1cP8hqs3nbr8kCGut5TGLmAvASWWsEP4Bx5k8r96M7UQYiaRgKVtpr5JC",
  "key23": "3gdZHHoEcuvfiuWVS7tjUXFrckGYoDDGyAfXkGuZqvMtKSfi5HMy1KVXLhwUT6GWKz5eGK3pQL55HPQQhL71KDr6",
  "key24": "2vAjQEyRyyd6bysfNnXWYMoN3Nmxp7MAmweuVLvi2fCCdFtnZkWtMft6i7xhZKhHR88rvqJ756o6TMvb3opGN4d3",
  "key25": "5k6mWLhCpz1AxLqmof2SbB9C9rfPmcPCCrpDZJrDhn7XpYiFgWdr8H5UVx7pZmm7MGa4ALgNsKWXPHdd8Ut4fHw9",
  "key26": "4qcpZHPMFSeipfyPauFfDDGHNhvaEM7S6GRqCbMgpZmz28EsrkkmtZpjnm7xeUf1A2fdR8KZ1gyfts2Wrn6WuzZo",
  "key27": "4k27Twa9Mz9x1oVmJhoUw9TWynNCAB5c9wao6S2v6LAJbkvfb91Csb3CAK7Zf7HbMjjPx7fyhxz1s5Vvo8AT8wPe",
  "key28": "53wmYnJCDEinVppFJEmXTFT85vrUDTg634q8bqztatW8L5ToFwbNC9ZewssYrFfxXejj6SkGTfFCdWA66xoYZazm",
  "key29": "NnrtDCL3vojvPEpTJdKV19Q38rMVvdeB97LZkqdS48332XuxjTusQwGQBjvz2Ap97F91UC3yTaZydUZoNhvpQ5d",
  "key30": "12177sz1DRekuTiZmARdQbGpzxp7c8kvad5GzeJwpmHbESZHApZ1eMzPFMwwQGjfZR6o8VWvJaHUdecoY1vxsLeB",
  "key31": "45KRcu9thLDxWUcpKcfMFFdP5KT8YT4x3nfBczFGeaHYNv9JcditL2WpN1Wcm2Bad3B2fb8B4WV2i98p3NBebRp4",
  "key32": "5CuxtVQupwSzeGxXa91a3vh2LAh17cHmFKDHMJt9y1wpp8jVNbdxbJyfvmciTc8YaLCRm5fdRvRgAdjaCSqjN9wF",
  "key33": "4eHYPvSZfJToPqPdA6rhiGEFV9KheLfoQtYBZC7J7E7oxdbFFiwPedZBYuxYLrT5jfYfaKmRiwHME57128byNZGn",
  "key34": "2xNUM9dgqqHnw5DWxLN9DXrr9oXyY9dHoivjRv6TB8Mxqq1urnX8bKwERXkm9nrv8Wbtt5u3MnuZZfZ8tFCREnxj",
  "key35": "ki9Vzdx7vL4mPCQbW1CqsxvDjawm1tWvYTXp3CFKcVyKvLJfBfwHLCJrfP8paMEGRT811B6bmwfBGMQKC3XMPmA",
  "key36": "4HdtRN3syS4g56kDGgQbK4C6aUW5HvBYpQP1DAgUdcjfp3SbatDeiYHTMzufzmvcSGTKwEVh4wF5bygYi1ikuPSe",
  "key37": "3tE8r7z2znh9XKwuwr6AJuBWDxsyJitSAAqFhWXXzyERgzzcorKD5ZDQyVGGCwHsgKVwfhv5xNkMgFooTLFVy2j6",
  "key38": "4tpEY2MBhYsND1JoioPEvR868ULpVawP391DcPk1JSNZMKXmGN5EGqEGyBYeY5uU484qXRSLNtr81A2knWM4K9eU",
  "key39": "3XbjSquEGdazJPwPXyAmP3VZy4DUTdxUDGmuxAGCZUEido4jQmPR93NM8tFMErUAtjfHHmVvcwTtq2YVLBsDDPKi",
  "key40": "255Casf7pc1shJRy6fUw3BEhwJyDZVYWbhqYXNkF4figXZ3RiWySdh1s3bY9a9gKAANFKp1DbJXFNEmzmMqz2S7e",
  "key41": "e1Ngvq9U18o6thANzMRhBWDr7y9Dgbu6chajndP4KvusBiRkrjuhdZb56nb7KLLFQkYBA912y1WK2AL9LrHsnra",
  "key42": "2wuqZ13YQscgnc8ESWd8FDarjpGifh473TizBZEkmCGMzb4EEqzrHsCpVhQGNiRdJhAWcDpXoVdhE6zawo5pNWvz"
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
