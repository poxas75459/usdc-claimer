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
    "jDMmfJeN8o1Y89y7CEmz7vriDso2zyAQq9CYQcwgoJKX3kNXzxnxebCRH1xHDnKcscFQyEBcrwKXJJyifGuiE4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEZw6QJLbUp69B4zCTJFV4Bu2edupZTBhEeusxzMrBJL5qbEksZeSzBi4sp5w5br6UFM5R4tMzQwvufCb6DoV4P",
  "key1": "3WiNfccVgeg1HsAYiqt6APXqy1DaP7VQdVibwNYnnxt2H8tgdvVauAJrNcgtiq8L9nefaTS12fqkb8MZe6pB1Six",
  "key2": "2pB9fZuWGtThdmDYje9tA5r64Xf7f6FpEoxZAZ8xmz7oxqU1SJs5MEkX5KGC38Z7xAJxbn5ZmpQ3cHvbzap2qqMB",
  "key3": "4RZHGZj3pgwpoor4rpmRnd7TJYmMaJKMWgSNtmchVR2i9sTFyoUTZ8VCaWA6eHqCqJTSw3Pi79gMnRTqEo8Xrioo",
  "key4": "32XxBv5GekdPpgK7dxLJ6FK62yaqxonvvpgC1xk3opGAXahkYzc9sr3SCmrf3yG1JCsjd8uxJdMNvvXvJNvuUNag",
  "key5": "2h55c3z7K6ha5FWvMvgHPwxF6miHQrn8D1oQAy3AGsuRs72zEkaGZQxyvkNRC2kpzxwtHh24uQEbEW4CeSBMK7Rs",
  "key6": "5cUb5UkWh4C5TEfFMqXM4iCLQivuLBioHUCVpwyvzr7LDvG1kVnDALfbnv6j7ytG6ZZxLdpcpiJ5GwzDAt3RnwFc",
  "key7": "Ad2Gc7PvMu5m23UGn9sQx4F57EtLWGc52iAb1wFCUbB9eyyRW5K2SAmuYxFok4R9vFiwnwGwwPGFwyGfUFB6i8C",
  "key8": "4upuz7aFEAJkgmN9CK6RVHyjn7ANjevGiSJ5xMCnTP7ofhACJX2E7Tdr1ECMHFGddcDbEyE5YNk1FgdE9iQQ8CWy",
  "key9": "56PEvwMqoLGE88mS27pPbiYiuQENevY6XiYrGkFJzxZFEnAoM9wAPNfMt4oUz9WZHLRhiQFSuoguea1ud4W24kKE",
  "key10": "3iLGQZybChFxRgwTHsYxxhxHFueSPr3XTaoB51192kLnxJriswuRrxrb2z8atkNMx31E9P3ubLJS6wTaeSfMW4U4",
  "key11": "65PgRDACvuedZL2vqRSTm8DqGaVjMokxuhNxmAvewVgBeC63XyL9Y5phFXhqevEDDpMSgSWSkRDi7CGeN6nxCqUp",
  "key12": "55YRSbCGzfsAPqdKmJYS4TA4wQ95E9aL8BwFCbbWAkJgXiD49EFiion4gKHbQwiEv12AGBu8oNdthzoLKcijmgR2",
  "key13": "5WMioAWUB6TBCwYsvU8p85pHAo4JJHxmGnmsmeSaLvdH799CUJmg2yHz4RRbvGvFh6DvdgFC33uwikktMqwKGhPL",
  "key14": "5jYbkogxo4MqppgxiH8CUH64KAMxTDPTPCXgdhnUebrEumH5HF8dzhuN4GWqxiN1L9imuPk5WhwqLwTfyJ2qV64q",
  "key15": "Dy8UhF93e8FmuAMyMBuNYpPY13smf75eZ3BobVpk18nKNjCa3mgcvk1kkFfXLqQzKA7JcbF1fJzK3p1hQ3StMwg",
  "key16": "4tyTiff1MXsisxjjqXCRmgAUPJzdSHWLCHsZNsNSGYAUEDLy19wzUmomqXAfdv938CU8LsSkx1y9gK7p7Wzk2cNv",
  "key17": "28y1zBbeFTCt3u8U7BStpt8eB57Y9PtbffELstgUTA6zHqm7hkTQhX1rCHAZAfb9V8Xq6CsK6FDnBbkZhSdemRkL",
  "key18": "BkPqBMV9Nz5sfVF9fsS1e4VbYi3F6oeVEAm9CjY2j2HbxH4PVpbpfptp9HRASSTyy9zX7xMk3j8SqadJzigR9tY",
  "key19": "5tLxeB34AimDtp2M4VasefS4LfqvAKBfsCYyepJNb2SK8iNfS25MNcib4FCeyLTcKpMFfjb6WY5rike139xewiS2",
  "key20": "2V36o2R7bK2YzA9D5o9aPguqmbdZqHXzNW5nmt1zWKMqRmtTLtpdFUVk97PpsimmqWmm1mLPQQLDzGUhic72hnGv",
  "key21": "3rLL4YQuvQuEsNgvFPoDG869qwPhZx5BPPDXFhakbq4TTtf4aFPLR9urTznseqcZbCkuevBPaHDTosQUanNR21cR",
  "key22": "56rvRH9JiJJTSvr8rUYsPBd8SYK7vUKqvNZbqP1LpxbFNXSyNpqXu8W6mvRurx99F3tR3sZJcaCFM316fTfMXVR1",
  "key23": "3VbrDM3WhGV2Fjq8Sb3HA4ASJxcrafrLC5aGuFaJXUC4ki7XneDQCAqsrQGrtrRZrRNaDiHyHNAfH297Gnybecik",
  "key24": "2S5DgeSfLmFqaUwQiYcZCx4FSsMoJaKjc9v8LuGHatcnhFV35ypTJmLne8dFGfVHydD3Lcn5KZXCbwVSK37r6d3W",
  "key25": "rJdCPoDgVAWthtT1o4dr1yNEi1qDThvnHuQCYJofzuAJpgEbyoUd3T2MrPkahUNdtTiPKS3a9Mh3N5G2BdNwJW4",
  "key26": "5RB4WknqBGnSwqfu7UUdqx3DEVFUtfgXsPijqS7F22iKiiSaAYWec4UcCaZJ2SaK2hfKh5mfC5SmiPZPLCDWbeyC",
  "key27": "5GPe8qJKFhXVGmsFqWTJg5eGWb4z7hQkr7hwMosZovjtsSTzbpfntMjnPcJ6nzT8XTeY6F2qZMEFL4SziKE7UgXq",
  "key28": "3JW6xt1sQf36dUUo32qYUue72BGzg6ExEuKx3gC3KpwmcRYdARsX8fJdhwCFgSJMZKSm8tAA29t97Y9rXPqLuQVJ",
  "key29": "3zr8soEfNvX2yBraXjiQuh9EM1pQqSE4fNgyESeLQpiomW3BpVtxzJTydKCh5qRX492mPaKt32bLumQ9RfyQ32Ch",
  "key30": "4pYFrK4Sv1norQBCnckEaZVvLyaKD4wuyZv6jnj8usi8jpmQQgaM7NpzzX3gbqpU4HQv5Tmh17ZWYhtYowd8kPfm",
  "key31": "3ob9mo4PYdLygaLpbnpWjVxWp4ykeiVwYY2mGZTxe9ZxJRPGfUEnnV4jozH5g8HXF8XkTkU8AeNaRFYGkKw9icwo",
  "key32": "2KmRJ2oPpJyw34mcuEyuZVFLJvTCqxPYRgHExvaKwB2TivXyreZV9v2DAs9Nor5NHi6zf2f2HULLCGMk8TD9BojD",
  "key33": "4vvuZUjkRjARK8C43x3eVxnTeU2YtWXBQD6zCgwmrmbNR4Nu2AxgViHsuSJ2AKWUpn9AChYeYFA2az7EM4V587Nz",
  "key34": "2SuivzaTUk8Tpw6wShHfhQXUnqwFmbYBaRZum9yoHicK6kCyZfZGSzZogpsREJB7wRmenynpH5f2PsQBpn3rzirZ",
  "key35": "3nPc1rJESBuw52P4LrbZVGAU8tXnzrgU2My4fYqfcj3siLRQciaAWMXYo28iWZFnXpbqnkeSHBuXLMF9ydKk1wNb",
  "key36": "2uNdtHa1fz2GgZkTnRYBb5k5v1MfCPQJMQAymin2UB8Jr1b5FCAY66iMsRgox8SUiiQGvs5xU1wQL2mksqTHYvDe",
  "key37": "4moR8NJKwmgcfcPUKHt5ac9TW4wg2nDi2tfhEUFibSBatLV883XmsAC4Zu361Tg5t8D7msGwpFmr182Z8KocLYsj",
  "key38": "NDtup4RMdBi2sV6FoLEqcCCJ7vmUsfy7EXL3Vcp3z2BEWfLZYB7zz6hJ38xEG5UzznT5raTVBipRVqDNPsLWehc"
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
