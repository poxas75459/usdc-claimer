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
    "4hKoHKmbsaZj2XGoowXNVfonwJxaSFPUQBxCP5rKAAM2p55FGtAEG6G7dLpddKiKp39gLuDpde13Hx5YSJgcR4nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z46UGVZr7L2j62g4vB1UW6Xa7TWuFWvD7ep484LUpSUs6NP8rHAYwmRdRjwu6h3nhEonuibTbU66DXK5a5Xpf6U",
  "key1": "3jqfUr62K5VQ7dHUNfCcmBwcSHsLajxFTv4VwNcBLKin11MuLsDntLtDvYbi5wKkTck9tPXvjqAh8i66Pmmh6PcW",
  "key2": "4XN9TqdwmnEEkKwEFG958XLncUNXfp9masrqGhkpM4KoeZYj23YAY4ZoApWRpD3wd9zdgBEqtvfSEQJnPFkkPexE",
  "key3": "3aigu6dBKqYeebNBchqVCJHGFBxKYEZYU4u3f1dB7oBemJsu6Yc4sVSoBTXk3YPpEBRFTej8v6GdCaXCayNmRNSk",
  "key4": "3EyjC5qUiALPAB5WoYSTJXK9qVVVBhiYmfYgAdFQW7eSkWrWMcGrWbBAuj9ToCuku7SqSdR1H6wPZwBJvwtLVeWR",
  "key5": "iapjUTdjpgHZhRdYhdCAQDzcDtCuhp5Tx9NxHodt8SPU1VTTXiAdfgjoRjHA6FPh7EePa8rXmbcaPnZhdyn6S3b",
  "key6": "vrKbCRq8ofCHqeo5AYVvhDkNHUuvuKP1nBE8FuQsyS5Bo4hCV18UY7Keg9q3m4PVLWknGsFnf8xdEeDvP2sdU8T",
  "key7": "ooWYq9RYQVj8j4L9j9BQnsK2ByeiGzvQNZeWPeMYtNeokNWTi9ModCYLiZDLNSuDNALYZrn6Dp9qnGFke9z9g89",
  "key8": "39J5UByKdWAzrSBvpuvbQYJHqFHdwy8Ru7D6f7cF47WvVgtU7wapYLCXKeftTgwnSqTg4MJgTFRjdq3QVkWp7jjW",
  "key9": "4mN9niwcHAZGMTF88TnaeQwzSPSeQA7GL1Z9Hu3ir18gexWbssd67cfbfuEkMbakfymcgMwtHa96WkA5XPCKpMLm",
  "key10": "3x5A69n1eCPXBSmzPCPcjsE8GogPqeDiwTwpdVUPn5YnCMXAHAKNx83nVWEJ87pzUMH16kjK8aGT4KD4VqzVjWH5",
  "key11": "4C9JaBSZe8MpaimcN1hbWH7fsP7TknBQgkiQxkq86DhjEPETi3wS6GzkbhpwtEn2NPzj2WMbrg57PyVQRJgnPi4m",
  "key12": "4jJ4yyvAsoTkbXPq4M1E1qC2sTvFpYs8NQ4pcHZZy9qMnw1yh6GfA67jQg14j2yRk2TFhRqSFP21f1YStHVoxhWA",
  "key13": "jeWrNBCzNx2ady5qsGRYz1dwZB2i7HRM32DXANNDKFTsrRVaGM46g9X2PdqV5rkfR54sqKzceiGLCji94tQPiPQ",
  "key14": "4yTEm5ciRCUZMvaMDA1KyWknSb1WgPgVgkGRCqtW7ChcExkyPou2Hf5evfsa83oC58QNRv8KD58Y1Z1QUhgcyfKk",
  "key15": "Vvc16ZCujWsMsY4LHNCFruZQ6v4hSwB4JT59de1U8Q5iYP6YfFGGpzWphQ5v7BV3jSw2Rj5wRx3S5e1KxyELbbk",
  "key16": "3G3E7VVt1HjrBaWq7BRfvVBS5qmniLTuw42wYgkHpjx9cAWimKzUqdCYcJcv9TkZbTug5oXnfpKrMgLbsCzm3KQQ",
  "key17": "4nFZN2kmN2KA5CMqT1rjt2uZDsvfEQST8AfS2VoREpmnoDvnLLKE1RR3dS73dyThzZmCp7otfu5FCuqHnmtP3UWm",
  "key18": "TaqJm1bJVFWCNhpD48vdFLVHKSwp6WqwcLVrux2csQXZYXJAv9uxddQhBsWhqeide1x6YbfYpsWNdvJ5YspXbbt",
  "key19": "ZfZabU2mfRPCn7E5n3gHvPrmomubFpAdEoSynbviN1KUjf7dzwGWr7zZsnHsYsLBDxD9KGZQ4mFGbWKDg85Frxw",
  "key20": "7pL68PrDY8rQ8zpE2Xjdxk9pBnuffg6zkCB2h4PuTzo5oJHtNdJduF1Xi6oYYwRwQ1ucvr4SUqAiSKPYbpaqeen",
  "key21": "2RhNDYVyQHkcqufpz2yP1TERLDhi9JX5PXyU5ZCDBDz2DftHhTbMcHS1E4DzUZrJbSMNWmgkTF8btmyxPC8ooiCT",
  "key22": "MFP8rdf8z7rsVkpM2qDT6PjzDjuwjBo7PdsAopTRwKQiyUpkfq7m9QJfJq1b7vR7f95GqZ2KB5SKHg96e1VVpyP",
  "key23": "3jKXexbWFyrUDK9s1eGD22TeqnTtSSdze7AmXNW7EMRLVWBHbNHzaNhRJno3krQ2abN5kpYFtZXJRv3DSygfLsgH",
  "key24": "5EQzUFCpUE1ZbtCBVyxnU94QyfvaJKi2Ves3CeheJoAt6fQnH7ssJaPiwqhpycnzeqTGQceXFHvhUbmE7u9R6L51",
  "key25": "34VvBm2b3FwsDKZnvidWM48Rbg6M7D2z9GUDQyf2SRsYWn7pxdE9kdLqhsWCNYLL22LzNTfC2sPsJ3rH4z7TNMjf",
  "key26": "vsx5dkmmrgNKqyYhD6bR2wx35LvvfqrwZBSWPgFHQTwsREMndr4fvrEGUkG2pGpB7Ft4zPntnNaUkkuTWrHR7pf",
  "key27": "3YTshdX97CcqFox1WcGA32T5PicUxowudFHSszvJH1vMGrRkW5g1obNxPHfrSpLvRdvgNudqSVYojCyb6JzXsMXm",
  "key28": "4hhjhGLqWxY6pT9rXFy1pgBzCEnHNPRY1HzqXgCABdKw1TSfAkEhDKEMoTnJv2Q6jVnxNf86H7sMwh6HD9krwc44",
  "key29": "4CiJ8Aj6ExUkW1YdGgrHnVVTqP8in1AFk9vJMZWkEpRwcAkNykGatnTePMutJrt7YaAnp9sFnHXx6XzegYz4f1FB",
  "key30": "3Ns1G2AUDXpYsWfYGuhsGWzQmLh8LRbz9ErwMZknh8XZhEP2aTT8cuRgSATREAu4eiN1Z4oUhpaKcgXdXiZ6mtgP",
  "key31": "498oBHC5qPgjaF4LHJdBPLDR9y1x27RAfHk9vkCvtT5CjmB6SqaYEg9Srw4x9saNnW6pB99jHVfCunHu61sFFn29",
  "key32": "5u1WuAa59LkNGCh5myUzJvT1aukBvJfi4iEE4217tya8JYLJsoa9oURMqWFq5dt3Z6tEkgPk1Lik67FLGwgah7sw",
  "key33": "477sWGk9FArZae8UbKZTo3dbKqYp2xW1kSri8f4eX6NE8hTERHGoFBYnig55cvyqLELnENJZscdt3RgRbivN6ZNj",
  "key34": "LR6PGLeWf9LrfxPxTaDXEnHoEdivTgkMkPv79y6uYWceY1k4pucrLXuS7g3cAx462VtQaYV9zGyQ5J1Evqa6PWX",
  "key35": "59r48sBQSB3YHKJTWdYZjvAQgG7AFxmuTy9KDXcNarqxiFXZyLp2Zj3fQcx5e3PSutWz2LaQf8TUWLNthrAZtEfs",
  "key36": "PZa6YpnnCUTBR9h53fX5gRqXKdz1Sr6swnee6gyyFUCe6scTsQPCT7jkzvTLNhMd6aXaSM5fWHvabYKbND3S4DA",
  "key37": "4HH1HmTCiA1nv1xGDsEeGMwydoLo9nheaMbjRkL3QqWsF7X47rxsbGSQVHN4mgWsVvPEDY9hFCgtNfa7ok7ZiW8f"
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
