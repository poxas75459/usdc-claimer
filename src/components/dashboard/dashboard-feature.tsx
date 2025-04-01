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
    "54fExC7d5E2bDcQ7P1rJKUyvx8axYzMVmQogmW7JYQvmbRxgAU21XM4aeEbX9S4JnkH6aGbUoahzA2EUjrH4Y3iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjjRYgayB41HuDwQ7NgLVtj2quRJKs98KrJoFRNw1bRoLZCUrow9zxTwZ6y5Khfmy5xRfqkR42e3jqVscjeAn1a",
  "key1": "2q8zry8D7SHkmtRnT12yUCdTR7cwgMiNZsaoTCAdN62KpRcYZvk5k9g596sqGsoLzNW1Y119aXDVki992pyyhFPb",
  "key2": "3D37WWjg3CLzJYi4pF5nuHv5GpvReawqH7RcMKiX5UdqUYY43uRL8LcTtGJJwgrUp8pcENGgABEpsJ9oUHPzi683",
  "key3": "WYaQ6ECTgxXkBxmNa5s9TPh7rXRGqQW9Q571zH6UVmfHNZrT9Kng2F8KyDJMf3nutvh6e81C8A1mwjB6SReLJAh",
  "key4": "Kkb4XuoUAYwK4kxo8BsB9HS6WFAMVNiZz3b8X1fUQirEDkCVcKGAabNL6tyxA7d7VDcNw8A4yEZ7FtdyVYAsJzq",
  "key5": "4auwcQid2AcpnwM7Vv3WH2nyVyDzYDfHK2i61WqnznUP12kV1g4qmR2dCx4i93pzVJczRM8HMbiKHUjs9XPn28zk",
  "key6": "o5hVseedStTJbL2eF8Bx7ouQgCCJksvjyaPpks5riSUo2pxNQGQiE9s9T5x2oJyjQRNub2bzKbq4PZefoxLYirw",
  "key7": "37pCduofuvrt9F7pqzmhoMCS2BZ6gLJgwVkjoUjcA6MotF7H2MXaAkN7fjTbe6zcgFWidRVuCYMuUVvDpE5EkD5C",
  "key8": "2TpbzAec4EC3ZvqFiL2eJvN7cYRg4ja52qEHyGxy6vjtz6rdBdqTGHG8rnfPqmuSLgg98USr5TzbXTHy6oPBcZtK",
  "key9": "2t24otE2wgV9X31gs47QquAonNxgaxJhyXBZy8cHvi6CsNr7FQbMQGtpEi9NtYF35QuH9RPSyyCLxeuS76ybNwPL",
  "key10": "5UnVsgPdJ6qMH31f5tmu7gY95HGwuWbnJL6DrPdx8kMRFwZoeAyPMQugQhmrH4c53qwFdahcAq6aBL5F4UVFFLGU",
  "key11": "5fYTba9W7pYZRG8CFzMoQP49BuAiTcWug97wsUcENn6FMCkZ9b6bQeiEa2Cqrdy2uAaF9ZySRMzHPTcVwLLySKnK",
  "key12": "3Kdj1rD4pmWgk37K6zToeXsapN6kKWb9DQktZLRFs2ipd8aGRfX8axrdcJhhdPMfMuiJZJuXF7VN1AyFNRq3HTBS",
  "key13": "3k7nXbLvWm3k1XhsJfedk9m2KhQZhaxJYQjDrwVzVgHLtXCSgLVa325LtavHScqaLRRM6nVAGLXEk5iUD7PoVNyA",
  "key14": "4i5aUQoKb8zR7tfH5UTeJBYBHegLsQ1MbZuYhtsPj9wsXduJq3nC2LNHziABT1ydp1Mkg3Z3FzGP2Ez4UzrFFXza",
  "key15": "4DYx5bffVcp8T6wFcQgvE6A9gZvEkNSA66nHu2q9Y5TdzeqwFJGPxA42vddB6cRHhs1X2RMBkPoNfxDGu3igMf4j",
  "key16": "5d7Q4JKPK277HzjUPiuVDheZWvZ45RXvEZBJwccScVQuXEe1fjGEc6gfoWqNtbYVSTpNS9Be9DmCnchYUoHJM3pG",
  "key17": "2bQBewRwSNE4kR2pnULtb35Tu75gA71StZ5S3RyEPjrvJfymgZfXqkXSqDLufSw5Vd5Wwnfo5zUMuXa9mEEfvpxx",
  "key18": "HMPJuuoasHeri5ibBiSEc7riQzmtfzsoauGcniJ8s5MkHrMgQHFVtMvhFMu6G26qR8UMyg9znSrb12jEiwiYWqG",
  "key19": "3cVwpttfh3L1YcKe7CoMXqg9G9L82P7RtXfqAZM5HNZehJgeFUwkrRjhKVswHbGCY3Y5dTR8vqfAEQk8yPpYSRGJ",
  "key20": "3DqrGNZpMpuRZoPbT2gtrssz8o3KeqjPJSK8RTtHK91UWhn4XzQ4bzJpK5BRc6vqQ1dGXsTZNuvSC2GMyJQUoW45",
  "key21": "5woMzDZ7uPiuDqGboYXULbSuxV1ewBnV53mNJQwf4zvVjnKkHz9AWe18725xS6w9KhUiKqiQ6ECetVS7qVVoYrus",
  "key22": "4LA1rLQtrLN2KUhS4FGreaeh2nMLDyKiFTFRTCgS55rE2bJArs5Np8C5MBFwrw4ph5QKQcgT46cCw2aKvx8v2CS7",
  "key23": "5MG9K5UHDd4odMc5Km4WkWj2QoXqE7SM5AD9Lz8Min4rbscWrbkzNzkjBguUK5bXhRfZpxVaLtpsSvFPrZNCNBWu",
  "key24": "5kj9dGCZfRrMW3K6uncF8XExpm1tJZCyXp7ZqVnjDVv5GLZTLAnhLz8Y2dQpBCk3EFemucpXG31x9FyDoggN71Fe",
  "key25": "51XmQrMktZUHaaGEsRcFUUXgUDwR7S3jvjzHkGHHBBb6azrnbxNU6DA62jCqGyu6pb7uDjwLTbmKhuEDL2uctC5A",
  "key26": "4mMbef6PgsGSWWFX2bGtaBCJeEw5AWBQYriYj7b3Wr288bsmnrnCdjBAwKNwzQm1mFLifHwWqdGZijjpzf8Avq6r",
  "key27": "43K7gpX1x4vTgTyAfxVyzz6JRYYkBV1DwLo2iuqu7PvbHYaTf3ZK9yXDffCfvbqXuTunBMHveRpQ3PjGQ5j9BhaV",
  "key28": "3g8hafacocpZ19VMLckyamEtwfcadH8EVje2AthQSaJoBiomPEaxtRwds7FH8YWsVpSfL22MSYFPmrZiMPXNFz1",
  "key29": "B9ydbjF1bs6ymNjHtgZQWuiERwN9fQVY3xKUqHAtEKpTv9SGF1ZYuq7yB6eVreYrspZHM8YvQ5JVkTCJqAVccVg",
  "key30": "5MMak6agGxCAwRL4mdrJ7FHhuCP5ebCfjX2WGag6sMS7qLdanEsWK2w9r4U6dmv5fjmwKH1TUv9jwCammHWrYvnW",
  "key31": "2Sii6P6rcZtngXGHNRFNZqUhNCrwmbyNuXGazCLFpptmvAiH1UEZrQVZqoPWCifZsLtmBDJjxrpUzMDhTKyiFTwH",
  "key32": "4oRmBGVMatap4hoAWbRdG3XSH9pemBoToGkYBdgDD5zfPKXZCbGdsHfhvkHN9UtG4XD6VTnBuygtHpbwAryHBkzd",
  "key33": "4FrLdqhL5daGj6YHZQozTyPcwx5NH5UDLNT1H4t1QbmzYZdCCifN4TYknmP7qDyCEaiWJAkTkbEQeJK8m5zGfDPi",
  "key34": "5zxGY532UNsZuCVHPBnvpyAZX1cqaMdVNqAttHibxjhuhFRqdCzfta1mAWQMsxneBH2cnTPuT2LoHvLA8mJXRvTX",
  "key35": "YvR1CyfXQikYfAqALpD6FTCAwiuKSA6Ab1SRifrM2NEwi6weXfGLbrJ7Gkf3wU4ZRPryPDmhpiH7bZGGdyPuDkS",
  "key36": "Xp9vgVktifzSSdTbRFWBvdTerYbFU63bCfpQW5FPap6vmWrXPyNF4s1aXC8w3s8cmPwDjpE16GGCPxfHxBCpwTG",
  "key37": "5d6Yq1BHaHoTpWJibUeiDGjCke3apVFPh8GP4vcbZJHF5fY7gL2KAp2D2k9NAffUhWm2Qf6mrgjXfscNC4RhPq9r",
  "key38": "4hr6VxDEbjPBcgTK5dC3BvXGZBR4xkLNLdi6ffiTVYYjrWaj1NaNnjucCaCnaLMJnASZkF1nPKg2NiBwRP7zdsDH",
  "key39": "5ZEjLyKMaLEbiq2BdxQkXpLv2YqW4BmKDZDg1sVzuFmkA6enVzeMKMptL2oPY6BErNhpJo6exH9R7aYd84ncx2Gr",
  "key40": "rSS2rjfhswYGEaRaTYqMwWmCc6fhc8mru3py3yZnxhCTWFzL8WUuqo7V7T4vjPP7yYVgceyb6MewPGEMaybixGy",
  "key41": "3i159pUqZkgcLXoLgjHBagHbRViSDNcjjZXjowxmjP5Ph5nST8Ts1hQGrtnDDZJN7fzztbk7vxYBgeKA9jtx8Q7B",
  "key42": "2earSnEbiSCsZvY7NKfXV216nS68xVBuyVdPK1s3rjzqE2RVTDXDQTn1iaznEvdHsbRNDLU6L5gw6kJsAK8KaniX",
  "key43": "3w7x2vBxQosNXPmMcGNiurRaCbb1uXy7ehMzdynjzxSbSsvYGMfvNcauCnurcGtrvSygVakonxetqkSX5o1t2bCb",
  "key44": "2UobBSVgup7o3ZLrAviVoufpTmagNYYoHSz9HAzNyj8hkGf7ApZtTyd5CqRmcCNDH99Ln4ZzE3Cb9z96575mF3Ju"
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
