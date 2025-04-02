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
    "5fX2HjA34jwKwwiu8Mq7ZdDWDCrvNGgun8Nvgp6GLKJsPgnfpTjdBcvYmB8RBC6qmrBQDQtvfBy2gwvQLwbzS2NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24y3v8rDvtpjiQZsG7DxF3ECQK63Zw9BnnP2XHz4RG3GQzH5KcF8VkviYmyBw6EGpNV3TxKApcgE27UetGmC8w9q",
  "key1": "inqnTU1nMLNxRBBhS5Hod9s78JxivFxTeTZLjaGBixL9x8T4wA99gptxFzTrHAJsVxz5H5QqnKTNGn7dKsPNB8G",
  "key2": "4AK6BtJJsja6Z3MibNcivc2nrh6AM1avFQGdgAYxjuiooox3kj4WVuasUW1fBGNCbciGvqD1LkX2q4ULM5AyGLvp",
  "key3": "5U3UHphPwunCrCfbUdwNEW6JkgSuxU8c5HKGqXLmGFjD46iiEeSjpdjc1FydHa8p7pxJrLJgtuozjAeAp3Ko8Vok",
  "key4": "2VtnXZrtNrDfTrAmbPXmppeeeS43p6gQc7a5817gdxnn2Uakj5t1u8Q5VXiBUKzcFzEaXwiiNJEi1SaQDnHL7g6M",
  "key5": "5s8jkzFBipbnYLJNzbPsvJZzBURn7HzLp22DVsSKJVQLRBKt3fyNxCEcd4B1rzWiVBjBup6fEjaJzdr5X5tZZMZb",
  "key6": "2GgmDDSPn61bJMUT9vurY1GrGrW7FckxPXch47F6n6dLXoUPdsrtgkQNJNeuUbiZ1ir4ruuTnYKGKVmQuDAKMEdx",
  "key7": "4y9FnmfyXMqrgsz1GkfkcYdXELiVJHBeusb8LsSDTZPBFfzpLKs9FXLkJBDLecsrqQW1Ragsa1MeQ4g6iwhwe83P",
  "key8": "3bjmFNSzYGE43xQECwvmK8tqdHNaVez8hfXDF8TA2RU2TkHRhk3gSTabWTVDddLg9kngEm3pSdpks57fShPNZu9L",
  "key9": "451CF8hptsLQawwTbEJcpFDapZEFQG5By7JsgdzRTTrfEmnrvejZwyNvn86a3GCUzFN6LBuutShthNtgnjoWUFH4",
  "key10": "5Vz9tZ2PQQ4KWUva81VKPVP3PNoFg17rECLzmpvKyBySords7K7enr7ptSYt6MJ1TsLsarU7SsJJ2xq4X3PzS78U",
  "key11": "5Mi6UGxicqUjRvDHNofmGiWeYH7umE2Y3jHhWbTHrdfSU8KR8bCxjfWnVWfhrXqsFP2LcFuV1Agd9Mqqv7fk6RL4",
  "key12": "jWCJwkFkCV52H14kHh1LHJskNQ2qhKf8oc18PMZew8qFoinT3m3ftoqWAGstrah6ZaJ44zB1G9L61j8U1Go62Ct",
  "key13": "d3qpCtfz13ALW6PbKECNoch8mVXjBqt5pNBxEiV78cgGVvXcmbzEGti9VsxiCQnUCwsztUYdovWGfksdVMJFPb9",
  "key14": "37jXGSEhP8YuRP9yws2MoJg7WB27tLSMZNLcLf37y7Pf1foJ5FwCreRXUWt9ncC8bPuBwubmD7L43xLzGrA5U8bT",
  "key15": "58V5nkvGqDaakVioWF8hkhfk7d25Ga7P1CA5Zo1TGZaqqymZMEDiwx4c9osWiq1cfhsiMjeoRYUENwYzJMSK1F4F",
  "key16": "4TLTkgDpmKdDnLVhuSWPjRYtc8PmewANUkzyqc1z8YYyLCiD9dVSWdGiCZjdDA69q8JeFF7EJNgJerdeaFUp6eik",
  "key17": "58NRBzFVEAdUqjQsXLdCXhMVdjC9b98amJhnsb97nN56QQ5ebjwEAQFQ8EAsiZ8md5SxmUMq7SXGd1z9YP5pgYmh",
  "key18": "3hkoqjHWmwKWzNAjDvHTRg8Xp3sQgRDyu3hj7uQrEaeqswEb1HTc7cFGixAKcKnvqXz9uQTKchgiLuhqJVJUeu6D",
  "key19": "3VVY5USVfCHm5PYR8ZXK3vNfwHfqm4f1AsqQe9pW1UoimGickgQUNy4poNP34Zq86p1eb76KBQanSynWRYe4h2wZ",
  "key20": "2uEsEtmJC7oCE97t8WKYt7YDLP2iU8qyBMyY2jXPqUAGcGZSbmvYsjBmqEVuPVK46oY6T96oogKuwdajTodzTWsH",
  "key21": "pFj2znPZJH2L7naHx1xAani7FCkj3hobi23pGrazijtXqXk5qmfHSpopvZUF7VRVBKSMYkTs31682E2ZveTabmm",
  "key22": "EJbNRNLpdaUKXJv8QT1UZAYZ76Vf3QQh7xqeEftjhJkoNFebMwymyMNsW8s44BkpDU9qc2CaUyV6CSUKP6xY34V",
  "key23": "374MFtrq3KvSz6sawX6cFc1b73AsrtrpEvyHf3JBatted9Rk87joe4ziLr6BwmcNAAajBgHm5zKPicrRF1bVTHpz",
  "key24": "29skWE6ZCzSXgEaGMMcu734ndqF4HmQfKJzGSDSdb8pAzjArHB7m4B1FC8j3LNTkg57zL8am4JMuhUfTS5G68BeL",
  "key25": "3AMVAhQssh67gnnACA5pddgvay7SpAS2d4ifwfzde9uRHutVq4t9XJirBahtkMS2APigx6aNSuvJ9ujavoTvKbmW",
  "key26": "4VTLU6Thqvc8jcnXYnDqCahGJmogM7HFPEsJtguP7yHr2YNhdMas4LLo2BmmeEB6wuAhcfHCiz732sBDYUdYX27x",
  "key27": "5DmqjiHcfqpMVvmDoJeT57Acv3UdgYChUvoztE39P6ZDeNypEgxa4RJq3L8aLdN7QNrBrrQ9roXbCWcF3LKXh6Kg",
  "key28": "23c5qgS116qq6Ss7JdNWeg77AHZ5QewpBwFfyZ9PK31KgkP3qG4e6vACmzA25JtrjrESQxtRf45tnvbCQEo5UTJC",
  "key29": "5CsiuWooPYWxZutdesePMPB8vfWk8TTCpTMQAiyrw7j9CKaZrLjMJAJL3T4k7CUFRSz3d695vqrEx2sLjGHEH6L4",
  "key30": "4QPDcn1iNkf95k7UfFDfCu6a4eM7U9Riv1sJQGVBmfPz3vUkqHJS3qGCTNQuurP6jobaDTaRTq1WBgUHkkT79fyE",
  "key31": "5vb8GcZ7kLwgm5RYK7iaShp5FzwYzB2NMd4opqa2nQ3nYmhXSRvYaMpPBkULRQx3Ja6EX4rSneCGcXfJ6Z5uTPrj",
  "key32": "3gtP28thWot8cyi4yxrCVyPVJTvJnHKFYtzrRzJuYUYDEJMDUcifeDQPFtWjSwEALf8UrfPUeSHCzfr1MiNCt2tU",
  "key33": "5BgPnq3WNTbt6ZMEyXUSdCbjjt18Qaam2j6EWySVQXThU7DTrKb3C5HQwKdwrrj8i6e64TTAtd6e7HdfS73jgaxx",
  "key34": "2hy7ixwiBVsNpodUvEgWe5gAtFvKqRj7qwrrLEbcWUkfJrWFLukY2ZWPKwpiY1CZBpLEBfXZKoRibBdu3pMT21mP",
  "key35": "3ueocNpwkJuD8yitw3d5382jw4U6hAQqQyXgzh1y1CsTLx5e3D6FT2h3PyC4y8tu1ojBsyfknTZ2XxykVCjQG9r",
  "key36": "3JsfCgZgYRKgDtiPwCMRfg2hrYsDvQ4kbVtiqW8nnqWVnzNj5R8hWzTm1PM7e8fk1SVbdomzSf4kZm4i9S32mtVU",
  "key37": "5bPgpQ5MH5jJ1gQQryiu7c2gFFXu4D4UF6WGgB69GdkFyddiV7D5o2A12TrC8omKCwkZy6JXaLFw3KNQvNpPTf21",
  "key38": "XZ6XPSgc121TfF5MmjgX2yUgq3SzbzTzs2epp4RaMi37RXR84tY4kNT2XDHEAXg631M5sHRgEzXtgDF4D1ZEdJs",
  "key39": "5Q6Bity1Z3QdQxZ6bVVwtEfHnPccNyV2h7U1zYj42qUSoTzU2uRxCMojPq2Bkba7KLK9ynRksoZDkLEmXJom5CA8",
  "key40": "5uoG5xKRnbGCvatvVFLStLjzS5gQTNdSyGJoVvKJqg1E46BPZcfDUEETjaz6UFTBZhoqvgxVx6WcgpZ9okFeUmaR",
  "key41": "4T5HjNDEGPByjwTsGBCp7hvjTmXAG2B27jVoQ99HANf2ogxzcqW81HGsZ3hwr4xck56MAvitwVcB5KCfhfw4wNkW",
  "key42": "3W6HatM8kGP4dyji3AaEbnR46eoaPwMNRCf3h6tTqwme8WgnNSvxAKwFrTdbBvB4qZzk1zkg36WjTXssiZDEw7FE",
  "key43": "MQ56KYDj4o85FPkCQpmhrcoqEmwamb9D1bVjJ2pTy5A25zx6Zisukt5d7sZAwKTwJNRNFCy6h8NVAMnkHp2PTvH",
  "key44": "4VyML4cmfQDa7uSoXP2DS4jSBnfW11sBxPpio3yikYWmiASFEfFdpJnMqBz4xk63TSYgAht94yVjwaD13YVi7CM7",
  "key45": "zeTcGApimFnjy11XjbGVDgB2N4uzZ9u5fu2fL96AJdCDRSZ6tKEzzc6tLZNg6mNJetHz4kmWNAZaF6zja2hVydL"
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
