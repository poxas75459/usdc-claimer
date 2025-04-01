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
    "2H1ynmLxsZf3GSfrp9jfiECf3TDoiNiw1PkHWj3y9RKyNCfH5wmhyLiji6n4atd7uLpGMtPPA2bJoAR6FdG4HX8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtb8a3Fabpe9gH4YZEhvaXrkzpNVDcsQsEdLF9C7fPtXuE4Me6U9KYH2vsfBbm7ExU9aKB2mC8KSf7tUDjQX3Wb",
  "key1": "5MHqiDHGrXMLmmtXpqXM5mN18SbaLJws8n2vqYKnEx1AzyXEYsk1oBfiWZuwDMVkVdkvYw3wJt3RdawyDJHLBDZd",
  "key2": "5KrSae23k8WLtaK5VSTdS3ZpBMEWugwhZ1f7S8bN16qrx8kqTL4CwMxpWPGNMQcHMSSvUdSaz77oX8SneGV9z3Cf",
  "key3": "QutRBpVVSUVdmkhJ2ALqcy6QtbdApCKGNn1PxdKMXb9CVEwcJLmjsNEwxVjtXjcPNRy88wpggvJE8BkLihg71N6",
  "key4": "3NBCFmYCdK6quRmTmNU3E9fxnHF412uoMZcKB41upYJ56LaAaby1qLuGDpmoWBF6GaKPDT8J1Jo5zMEEDsmqa5KG",
  "key5": "5fkQD5tydqZAJmFfsQAnCAoUiT1nk3K1AjMMEPcMWjgeyV7mpHdGqHZsRv3WyKjKiFdP6i2hnnCr5WEWExNvJyED",
  "key6": "4j9tfyFUdeFh2ThEsJbkYj2qdAKsCLDMH3yBRD17ygn3qqYMAKpqiPdUtEk16aEtGCRRz58SqRtn3n146jgMCqRV",
  "key7": "2fwUaJtPRdAnoHBeXihyVq2rYjSjHx5NeNZqguBk2wo5TDHCVuSkWCrm8jikrbDudKrXuEdaFM2fsZ2S9MQx4nm5",
  "key8": "4EqbQN1DWfnRpW1rtnGDu6gCasjnsLcCddJsvP5SxWXmqocmbFBT9Ef2uUVdKvNXoPaVvoqdj99RKoghGz1DqeGH",
  "key9": "3akz19UTBFdpVBMwizKs2iBx8Yu5tUuJwCyPh6pYeqvLZYzbNYQTh9RsQfysQLQ1ipdJ9GdRX2d4v9SpkMpf84vE",
  "key10": "63v8VnUF3UR6xwMT66WMWZtaimmoCn9LCSA7winoYiJCbdQ2xdvowvLJ2237noPFJm98S27E6BMMeuwE7meosMX5",
  "key11": "4M3oAusGauho8GHMUVPh3tCqQhotbrr27M1AKgrX2Q9boeJhxibv3Us8rFrNxMTBTLMuic8Td8qnhhTJkkv7fbtv",
  "key12": "3LMJbytLHFa81MxfUCkhJpGq4vYQBY19CosPFyvsd9oeS6qELqLpQ9LqgN3DULfZdS8Fz1ZEnmrs5oFTGX3ugAQz",
  "key13": "438Y61DtQSsLxN9hLDRWGXwFPD2fiqeA1AyWh7rQ4wZXX9gEnCwkjTLHDmpWfXDr84gsCpEfhN5YFUGXpLZwQCG",
  "key14": "2CFmFCXMYcwXNmmjroBDHTjH9moEmkVpB8wCoWnzdSTxhvBUCrPM3pCffxaURXVVaFsUBoDydXSa64AXTk12MSSs",
  "key15": "5ZhBVZBFttL5yS52i7aSFcYsH18QzuViKhkKQxe6sDxq9FpLo6DEvJxCmmBiDbxnjE1bYjmEdBwEqe4Gpbc4Gd2N",
  "key16": "2o6zAZtSzq4iQeCZ2V3SH5ERmL4bXfmypR7LyBi2yFN9U8CHcKoxvrDhRiBC3RswpzhGDJjRT9eNtZT7ahgtpXpE",
  "key17": "4ZTTh9Pd7HXoUVfU7QLBn6H68AHBatNx9wk57NkSRv1dCAtXcr1QqYL46qd1PmTk5wcY9XWSvqkBZ9A1PyBwfVMv",
  "key18": "5MkcjFZt44VFBu1LQTvzWAg2LayKtLZ57iTaBxgRKuMXakrqkycr9ecdx8NVKAnf1H7fUR6skV7Dsp3NP6yH4EwD",
  "key19": "64UH15SqkGu2evSTfj8ZqB4SQ5eh66HDWKXqiFbowGHJKwRGTeNn7LxPgHMYspEaYEirYobxMWxZVa3z6pv1fKEE",
  "key20": "3hVcxShGsw2bARfxWszvLkMzBXKsFUQ8KVCXuvqTTzVyJw8f9evgbW55yLXHgn5g2GJFzqYHo5CU37phMraMMSA2",
  "key21": "FybD62k1WcLtFxRK5e7tqjYEanvx6GoEoDDCqzzSbm3hqVGxKEwGyFFjQWwAyWuJ6Lg2LkaqdAgKSjnpzdofZUH",
  "key22": "2TD7uzjtQGJmapionEoBhJugF3grogqbQpzDs3kG9up63ZHGLraPVEXD1UsAqPYVUhCW3B74yfign65oyeFaw2fF",
  "key23": "2k8syUNEcLg3juKpswzN1gokn4RshRnDbknPXUHXii4idJstvhfY4ogge8idbAQwzv4yXKYhLPzQDZPDBtpdhVHB",
  "key24": "5yMcj5NpGvDKYSiX76P4SLhgapuVbxkE7Y7iHCY4DVfhrpYsRcvUFJuvt9hUuyiw2GZSpT87MHoJChTTcWnk5xgn",
  "key25": "4MgJh9Y7T3QCP1zsWRuw4fWdrXBRfQeVGX7mk9xCFNtV9GoiBQCYYC6bWeqU2QuXpPfjusvydMNwHJB2LJDXqgEt",
  "key26": "3yoVwkrTGzTSyMXTWceeXELFMu3EjCYQnxS17HLF87JTsa2WmHDjwJbEkMGP11RyeVoZhggVHarN9FbRsMtWUexm",
  "key27": "JvCtW2zgcdr1p4tiNRrzw9vc6JVLNza2qqEfrob9SWT5zqpvgm6j2wJw8t9Lgh7rCASFRyibySmoNyxR7ZgaRtE",
  "key28": "4hBjbWV5DtSd2y5Y73a3wnuEFGNHVjRA6bZYx8pk5tH69fTJEvQ5YGEbwVEdnU9mSNJqKabPdL2i36AoiHTRA6NK",
  "key29": "2P5YNFhgQT4VZW1zGjsKqurkPhedam6SzV2z8A6FP6aor3RuxK44QJuifMDUSqLzG1yBQFQr4zoTasSCfr5MHqkX",
  "key30": "5YzeAMJKewSRL8k37VGyAuxQGPhtu6pXfk5PT87hcreiKmegNjJ2tZCH7HGKg3ytNrygwHjKVfv29vWZQ4ks6CvR",
  "key31": "6536dumj35NZtPAwEMpt3qLKH3hxBFgT3mJUGnnHoN8fDqSP3Zj1ijmMmuhcv7SbN3BK33s6EXryHnee19jfDiCa",
  "key32": "iFQDpKcg83EgMXGCZZySPM5JPePjuX53kvbbAWB6MqLiFkBcVcJN1cGyYRir5bVqAm3B2b9ZZ8gojsdbukXQSjF",
  "key33": "2BtvxhnFrU2foEBv7jqh6f24yEaspaxY65RaSwjYjwNr7j76aDYw5FkrY4b1Gy94siVe7GsQFvEVANB9oaenzhHk",
  "key34": "2Mwg134xhqYtgCbtwsyoRMmc4jYevW681M1nxcci6xrYuhQCMZCHUjEVg8STyXtWkfoCNYyiqtCKPBSezP8RiTjw",
  "key35": "5gmyPpccWajjfjKWA8Cu7KXhLtCSG9rsxX7MauRyPtLMxnkosBD5ajnXAwrrnUJej8h4uAW8LMmyRZPghNNHTEFV",
  "key36": "4YnerDBoyv5oZUJX3aMkKd8n6AGPZDioXu1GK6Rtstj9KrVc7NNfLkHu1bvCG67ENSnckAxngiWPmdDV7Lg2gBPh",
  "key37": "2iY3oNCn5Us4HskpnVEnosSVsZ4U5vCXLLxSiKikRNTvcu6JfC5ig6u3psaXtMEAq4aXTSwwbtEhrtp3SYAwaNA2",
  "key38": "3DZg1YJjL15aM1viKwMGfzGqcRRLY7H4boWMin7XEJwMVwvdexjbpskkNcVqawrsTyLk6d6VaVQS4kgBtHpaCHip",
  "key39": "5X1kc23GEpEtEGYdroa6wuWPdqdmCN7JJiTpnK3dDGaBrsRC6UFFRJEwr1AkjZBycVsWkt82mZmvuwmKc6pMpRZr"
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
