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
    "3vtiEqcHpn11Qw3PP3FS87C9u7hXnZvTQTcXwKAcoNY7Cbx3EmcdmACeMKx874NeEPKA95YKjCArwRmWt3FzW3Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxQaTNVwmrsWeDKoQvTEAV5Uk3RY1egQ7YaRU2mZkv8PhBWDg5qBJsKV2K3yeetgZxMZoUxrWHyGUKBjXVZ9eju",
  "key1": "axqAdswDfoBdByTjmhDcqoKP2fVtSW4CAruyKJ9M3tBDDKs4iPEMyQp1RCxRSngxn3xUDtesXa292s8NgfUbgJf",
  "key2": "5ssRDVZXcvPVNevRzbrpCa3EBe1x2N7zPcmBYVt34kKbWUBhUKt9F1epcqGuVj7WmEYaABbbdz5zg6gZimbwhPXF",
  "key3": "4uzsuZY95KVFzjSpf7Z1BobsqmNJCePDETa1HsagV9anfSA5PLRpHxmqXjLeZJEnVB9zwX1BSVgSJjyjUjaDBxCD",
  "key4": "3sGhYAyTtHPPVGaQE272Ydka8TNjwW4c8XB8q4CmV7Z8ZQtT9xSNBhu62gbJXZjnBLQ9MTTMx21wQS7YHLeRa1g",
  "key5": "2UyubV8zAo2nJg7THRLf57cxWr4qyWPtep5VxrstBky1ZgAgjQCw2Ryswhdrk8FEPzSutLhFHrhvbN8yjc1G5jPT",
  "key6": "4KQexLRr9QbPsbDvXkgbcu6w2eXXF5ZgQiwEJDU13F5nbhMomTDTVJY1SaMZGLUdeHcQKrKFbAucpWRYvvrjd9yK",
  "key7": "4pufGpj33WLswsLRqqDRmWmUq5VkkoVYUko2uYZwWxyjJ4iPgHdQmFTHvqKX9g1BruoLJrNZ2r7EAP388vw8DPbD",
  "key8": "5t3dWpwGzxnV52UysZKuekmKgqJVLRiWZ4hYrdcMhzeLmTqKHwvJn8e1xUN8Ji2hS3EJ3HZuEzuS849dwEnntdWn",
  "key9": "3CAWbgVp29KRyv64ZEomkL5ph82ECoreAuUVcjFoexCzy5kAQy6fwmF4fZXhubfBaJTaRJZ1uL7LwJenfoUtiPgj",
  "key10": "27DeKDJ9CUHSg88TmSjNrrCKAMaf9iwV7Y5W5kZAq2UewVfNeSSLLNZb5W69Tf8Umsa2oF3K2ufqoqaDyCtDJTTV",
  "key11": "4fEVN5uJqUB9sLxHN1K5RHNK1Gs8HQKaC4gEWe4SUsQUCn46gein1oPnc6fk6UyxyR5336cQYHBxbxM5tnmTfUx8",
  "key12": "4EQu5jvZTkzicmTfd2hL6HP16hUwfmEpQCXFKspBJeJCeshEAP8qnKDNWF8KLWUjukQLi5M7ALcSTWgzownrtuZ1",
  "key13": "31ssoXm6Tf3ajkbAmrZDMBgwcvBJrF7F1NZZ5oaU26KLworjWz15vUN8G2BbDJ37jj258uQTAdyC6ZzD7vb8VRQr",
  "key14": "2HTDojj7e567SLLBQt8jsXvHjx6QmGc8TxeGijQC1wCuZJeBd55CLGv4NiH3opr3LYqain8thCrSodiUQ8ShZBGp",
  "key15": "58pjKzwgEsqHh8RgeFGBMoSN9wUbvw4r9fUJAjmmKkLiG137gDbE4HPBrazzzFQeHB2uEX7yjMTdMAcCMRT8nE4G",
  "key16": "hevmLrDbtCdcbaVD1onqNyRm1QpTGfEx5CCAziSYne9w2WvxT8PAa1AmJWT14AxdE4pk5iiTASpDdUHUKxUMqCc",
  "key17": "5dQueBxpm9iMovxtpxS7VtAG7MBENVa3Pn7xUKUy8vg1nZ5gmhRHfKUCGUt16cayGLMRciQTMXt24c8Jajxvoxgw",
  "key18": "5eYDKaW5WKgECBpkoN4qBm5S2SuRuLNXcRRERbGB32sqfNoX68H2qXJCt9XuionWWkrtadfz6xY5tvQJGGfvq2YK",
  "key19": "YK5WATTq9WsEJJ2NAiKo5mCsu6GoFf5F2goAYJWnZi3WnYN4fuptybvLzCdYVvav64DKGmpDDQ8vzfsg3tYaB5V",
  "key20": "5A6zv8P9XKEq2Rfy81S35cBD1HfSenahvCD9xkPXc6soJy1kQobNwfcBGnts7nMxYTqCea7hBNAsckAV78xEjqoq",
  "key21": "5UsLGPZfADAAeMZPgfqF7mX4syr9eSm4wtN6wYqpL15e5NGkcnBEkH4sXmJZN9VFghK7vfnxLrqdaWYnG3Ubmcex",
  "key22": "5nhRTsEQM5LBSmPAHstMDfRzRXJuJDu7kQWkyXC75uwXyHLU1YJQGxcuMde9moK26Ro9jFYVcUh5WLyArkVGYkAe",
  "key23": "3hkrX986wxf3JLfzr4H19QGDStaE4BfssoMSFKNtWKt1k3krM4XsfYQHeu9PVYEn3Aa4ZcAkM73B2myFvXcdXfqx",
  "key24": "4ejyJf4ouRt9tC12tNEtKZo9US38JZMMXecz81mXEusTA6AfE1KGeroVeRJrd5e7cY7VgFHaXeRayNsKw2uQzzvW",
  "key25": "2gcvX9vRuzUPwLMPspaHp3itRcdbgdbgKBY2oxdtUCJ8pyYi2gXfXXMMfS5L8JnTRNKTMvJ7K5yf3mJuEvJRYuwp",
  "key26": "5nvynoW9ymksDDwtiwHhvMBu6o1qdb8pK8qptT3eUSySMZq8dE22dhJTvuwsDLfQmcz7wnUW8ngVoYWR2Mf2R2nn",
  "key27": "V7krvhGXbCD3sVoboS37ueT3BBpWTfRBjihNU5dur4TyknbKun5JUFtw1j6u4NH62ch1mwfNRCjdSXPf3fQ4mc7",
  "key28": "2VgZyFJNNttqogGNgbkUZQwMZZfV8CqzQ2Z8i2ameZrxKNQrtacEuLBmyQRYkddVojf54aF2uiNUHEaPyVqovKvh",
  "key29": "4y9vhsBpNBx5duhQhCTQgWLurjtPvWZJzV9qnoRLiR3EyaMiGBTSqFwrwSbctRWfgb9upjfUyPbmXrnF7kxekpwb",
  "key30": "4YggwLg8z4Tz8x4AuhyMxsnRf3tMp6SxoTFMHDUgnzNhY1Hz9TdDALqn1KR6aWL3QUFf8ocFaoPM2QPV5aTnCRrp",
  "key31": "5wucEtzKUxRELFst4Rm84LHDn24gDbYVJowM2e7xg2HBdef7wXph3znBdVbC7CLGAwe9hR25if2tDJAhJ3mic4Nw",
  "key32": "3H3po6L8WTsz1P7VJ4GzK86ekQPkKDiZZfH2jAeJqkdkFFv61Ho1X6rRmNtPtCYEcYq4kQaBN2jWvzuXv3UMSooV",
  "key33": "4FAdu2YYJesbNMSuwQBkAYv9QVcX4S1oHAwLDNVy52xxXjdLFWTs5ZGchDPYqqsVoPY2RpCuw5TmiV7nJ4ypynaU",
  "key34": "4goK2Kb8EL8eJ1GMYdowVQcy7y9WXbxz7HPNEJRbZr3NV3rvHHt65AqvhkMJU89GRSA6TfB5Lfx5mgnB8Ag39fYk",
  "key35": "2V851niND6UhtDv5PSPHsQcr51qfdFLCQapaZoNsjo6w3J9zQXAEkvD13T7b8GfWMoa5FbzGnZt1RRuNpoJQCAjN",
  "key36": "5v9sHFYkc9kop8fveL19dy1XsD3nvVcYDEwbihwHLvr1nT5XzYY8xYsPWCzZSDTCNgbECip48zK5pwppBEeuYmsP",
  "key37": "5ZTVsSLBxNQ9Yr2iNN9yNehoHJG4C7BzbYwWRnEQMd8tEoDMYWrG5C2XAugXPuStSYkw5vxGVsJvpLWVW7YJFEPp",
  "key38": "jWmkp8Dx4WcuV54EVySGMnkynganmprAja9zAPeEtv6Brasjm4dhudZA9pMPctsVyrFbypbAwxnaoxYSMAvqisM",
  "key39": "3ztAqEs1KKBN16KUp7q9XxrgR1r2jGxgUJrKbBouZSVNiY46EBuTMvPsrY5cYT1k4XfCu1e1CR4a3uXpon2PJ7pr",
  "key40": "4sFEDmzrFBFVY5Z7JfkpYM8Urgrg5mHnZiTbHHLgTNb6ZTGVVZJxhi7JfYnFsMwzoXTkD2rnrHUE1Rw9gzbTYbQg",
  "key41": "26rGdfZX6MPqCyjSF2FFHjQxbxFqRdafJ3vDG1Wpj69ChkKgzCEMz51RDxGxMXfUnFhJNuoLJAsguNwviCoxr6Dg",
  "key42": "2xHSLbLSbXUcnMWAZ9MUj2hekeWXouZFvDLdiR5d19idZUZvMCKwBx37WEFRULvy6L6z75KwgQeHAcphN2mjouk5",
  "key43": "2XfYeX6CqxxpBdTdTaYvacEP9WFr4j33YmFEv6zzUJaPFwqW7gJJuZzy1gw2uzS4j6bmSXZmssUBp1gE1QAGFJqc",
  "key44": "5FWpFFd6JEsgafAD7RUHUBFZHKz8xHeCFbjfLBswRnRCueoN54A9KqhYEduUFfGFcwQ1BHBgAQsdZotMbuqvszSU",
  "key45": "5gnRyKULZAs7jEvCbnCgwMBBm24QMLEj4hLBBDKg5hNRLDQmkV9KnQbj6v648STNVWTQ2vGttR6Xi5UNKb2JEtND",
  "key46": "4xPsDxBBWCvHFL79LLg3dUmwu8qBNfKbh514im8kitfFukFD7WsetZuYTBXTdtGe6x1ENNN4wbYZAEFDMi73FjtQ"
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
