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
    "4wc9Amw3JKJHF2CqZ5se3CNLf1Dr9gt6PGosWMoZDAi3rUvwcd74CtEY6wiYvd51qX4v2dzNsm5zVN54cqZWCev3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bQzwk9tZhJEmCzbH46VLNM2rJHXPyfVxDCs2Yh2YdfNxqWLvnCjBi6wDKu12YnDVTkGaiCHF1Dy9sa7AQvzcbr",
  "key1": "VdsrYfW5hRdRAT9bZGACt8Un5xTh9GDmCipmkm2FhpYPqbQ9UYjqkJVA8hSTrSxYa6E42Pknnrr7n8htWasdALD",
  "key2": "5pJ34q7QPGqB4HyPqdiGgQNWaeczYX9SBNV4Ya3P2267FzuukvVjJr1GRsFYgDig65FuYWP6JpAzmNn2VjeGsQ9g",
  "key3": "2Ct6foskbZHrSPM21Fcu3K36nezAQfswXMqd1xu8SQMaWR98dnHwJ7awWG6pjHB9bTCmaYiKVaitHFkfrQBqkpKG",
  "key4": "RFTqyAAJmJV2KN4JBjUq9UiUatLHp1WwKAGVocXb33xbxGnt8tWdTG1usfzBfpTJ9tcNGtpAFXRndujM6xt9CP9",
  "key5": "24yU3aekMdwiW87vjoZWL1HytNT5oqAT7ZYzNmpoMHDrbz9s9cvnV2MXm8NLxdvj253mJNtd81gkVeTRcMwKrgbR",
  "key6": "6dsbFSeFpwXt8vaoE1Wu4u3tZ7GvEyyF7YnS8BSRaRQ8ckxU2qmVSXhMyt32Ek6ab1sdWZteh6MMhe2d3d2eDWN",
  "key7": "2eyug76YuNEKxk2MoFwdSvsKEveCwHsMwPhKh9WzGd78xs585GkQrmo5fhkDCa7MNqrEZRrne8KgFeFNrf5ZTKmX",
  "key8": "3gUfgWjYrXa1rkxpXTFTQAsJDy7XLezbrn8588gD9DabuCumvx7uaodoM2DNXCF1tFbpd3iJGHqTEVbssAoNJDZ2",
  "key9": "29qoPrc1MD3UBvgN3hrsS1DNGKGxawb4XgqdSKjmUw1rn1sSPeg56sev2E68fytJMJbU3h8RoFQrFixk252n1L4c",
  "key10": "JJj5Pa3uRfm81sgEfg8roMgvkrf1bQkNoZzX3n1Mk9Hpnw8m754S5sMzTdyxYZqfqkYfr7ardbNwPKAC49wfYTg",
  "key11": "27uCDuiRM6HdnVBvx1UpvoDDbthYwk4Dya3zXupbpL4R3eHgpj5uuphy2S1XENpgGvLYny7J77tubPMa8pXVX8YH",
  "key12": "JtMDDULx9WJzhZyLgN3GmjtYaxDfBz2qTd6fzZSQQt328b3k9xZNnHqbH2YTFzpUYS6gq5L49KhBx4tb3gunSmd",
  "key13": "3uGALKoy543K1z3UkPijrvrwTk6DKeCBWRx9muFu7YutNKmSdR7D6PwSJxppXN3EQAbm3ARtyPGXLMoRwG7B6aBe",
  "key14": "zCK15KB9cvwahPSUT1VEAJacprNTexxzJK7sM4iSokAyHfZrgDQHDjKyxFrWeouqecxArQd4Rh1YYZGENEiUWQZ",
  "key15": "2MFpuek4zp7evEMrkCGqsfA8Yh8WXffmeVvGAiVaXKmeWZvQyFEDywAMYYzwK6T92pbBMfeTS6N28iqfDjZUj4m1",
  "key16": "5w3c7G4s57JimpwgxxTezC8PW41dtiJui1iPqRf5RAo99gPvj8xNiKoXAtczvdqgJxxVyahFFikJXadgJBeEtvDN",
  "key17": "XdZvoGfEUfSQAJRezKsxhWNQXDN2QPJSa4yAyLrdp84cC2xNTPsqP8iS6gnGTCXgz4tefPiTJjZjMcQWaUCjosy",
  "key18": "2T3yGNyoFHy2eTzZFkxLxGQnYxjLy56J1m7u3YyaRMr1WLQGy2g4SJZ3p9s6GWTrHKQPzdcVSSfeLFvrhzoc153M",
  "key19": "14ryNty6wJmi6uFvoXhYEZDT6Tvs1eCrSFeD8LQyqbnreiU852Yqi3qVLU9eVihc5rzpvxuX8vwTLwppA9edhg2",
  "key20": "3rEyFbeDSEwVVUNBNYTVABVuc15Ph1WeVPBHu9FeAxsH6JvU5mPrUHNjBwUPGW6mmBACXAWCn8LkRBdZxhvxBMde",
  "key21": "QbxGoAgPG5rRLV9VdvwZH1aEbWGMYy3VpPDo8twiD9mKS53PP1YiNdMVo1fFRFKzhuZgrU7XVUCxrMdmxp6YqvY",
  "key22": "63n24y7AwzvmSikgH1871WxBN2AuSm76qjzPinNsUoMeGdEgrcmypKddz9HHHv7z4dn2na4ZdMb12WVwvtdhY9nm",
  "key23": "4iKtHorgpynWx84FbVYXe4T2K6r1wRsUyNVoSZGQSXW5cr7uF8hawNxFxqryDG1Na8HXupGfQ31VuTeAsh3C1xEP",
  "key24": "2ciCR8X7LdheySr6zXAn9ejJTP1yQYJjgLE4aaM3CwW3BiX4hD7GEyqe6xx13YBDijM5v4hKvXr5isNm8tKNJq6W",
  "key25": "3LMefYRBuXNrsHLQbENsfRPH1TSuQw2UvfMG9vSFADo8kpPkDPTvV6EZ5GcxBWHmpdgp7DcCKMqLpbUyZ2S24YFs",
  "key26": "2ghqYwgd5WTkkdZdorkZq3quCcwdDt7nd1byR6o57DnifGmzVRWyo5W5CzZVrCebmm7UtpRKP9EMTLuPbaiVFnfN",
  "key27": "pPLxd9khQDvYsedquDDQbLqnMKkXwDmbWwmpAGFaUArTJoH9D9apELq9DoNdrF9YLKz2pVekuN54opuHENQ1VCW",
  "key28": "NphrwCEdxkMk2eA2bVsTsoVcGVaETYgsayXP3Rn34MEFhJBSWWiGSGgEUrgft5Z4bsyt5eu44T1gWVtYL6eSG31"
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
