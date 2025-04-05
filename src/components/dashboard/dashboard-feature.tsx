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
    "4PNcKssM7pCgYzohescrzjggZ6qBQqDe7Pg5NSiF3cZwrWTw1yiomSfBwp4z1A2bN4k8ADsQLt4A6oQDrbMyKNXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nbcrgd3j9s3fuQwaZQGSY8Lqw2cpj1Bruq1A36oCV9GXVEUuiMuTF8jNRb5h2AFynYX5woiWCVGkCh3nbDB8bpd",
  "key1": "bi6ewXi89pPdk8Seor96KRB6bx3KV6omM1vEMQ6jbjVmrZ9g4ecYzoaprdA4WaoiSJzPCTfhTFmJVeZG975Muzy",
  "key2": "2oJiaUytoyCoAmD26xrSe5PLfDsTmc3PncKjMf7vtS2TmJ8MNeR1PgDwMeVU2xyx9Q2s4hV8rAWUF1QwtfDkcg7Z",
  "key3": "2fNcieDWgVDnU5KyhML8wXVDiEgtwwidW1PxW1fb2nHJwX1FoZtfpRLKH8N5rRbsZW2dAdkF78LoVQLtiq2rrVwG",
  "key4": "22r4Wihh6XwUQkhYjphfteENzUCT9xrivyScYthK22VfHTmdUitsh5Zs4xdN66A6Ywg5fcxxR44hoVPSeAvK43cc",
  "key5": "2Kj5HVLdTH6yS7LYeRZXaTWs1B38P4ypTRdMhkj76UMuP1kZUi9vaoLjoxsEaK2FFkfgRtGLw7159sp6TksRK5cN",
  "key6": "3eL5gBV3EpPgTQNejCZfSxeP3Rqrge82x3mLPESszYY7Rfz8Un3aZYpCGRi9kZhG4VoFKaoWYcc2A7vPmpuL5b2o",
  "key7": "5Mcjf1PVf4kRfn7SvMtz2xSizL2xzeBGnSbELE44sx4LkHs177JoetfNGtL1Kk7xe4rTLMscHLndXhknc8pFfkqj",
  "key8": "2MCbxpj2EDMWGmi2RWSh2djs79PG8G27ytkMVZrH9nhLexFjRS8TWd4GrxKiFV5GCPEQmDCUA7jSTbkPKjpoTqmF",
  "key9": "4tztKM7EBJf5s94zTJyd3C352Tu5wQemgaYzjgsfZSQ1iERbjpKRpv9g64E1PKqF552XFiHRhnyWf32bbtWxtFQJ",
  "key10": "5ZQhWefTMqzfXDhm1GtGepMoRcjQv88tfAN6spD8FjkrtPcrDdamusWBoHbGweyPw3cygm2FHzvGFKqkMtnjutrP",
  "key11": "2jCZTfs7qh9EFeVZpfc9Q1yqCsfJr6M8sBxEHojU3Sub49HcPKUFeX3MXygE9if7yprcZwFVfEYHTN3N5ZGX4uxe",
  "key12": "5gaZHtHDMfPoXEbFpgBVCJM6eSBpW5pGv7CAbPFdaQwm9mJTnzTh2r955za3MxMquyGbi4QX8sKv1AzwvUxY8DD",
  "key13": "42iFefTGZ6pbDBHEMmgkEQ6VZCUEyTgZdaJ3i15mKFvpSyN9e4WDFenhRhH1bw7y3mGJRz69B8iFCyF7N8UUwPW2",
  "key14": "2DHgmEyN8A65QZaxwF7rW2p9UJVxToZrTd9H1Fz4iAqnRxxGHT6LEpFjFe14PUK1qhXDDy8fKnaNYAwbjVasaic3",
  "key15": "4f1uVD5M2NBWsxdjQmy6V1GbDfm4taSjPs7LpNVy8EHqY9rZu212h5nE6z6VVt1ExPn9S5yCDWrs59GQwRkBKitg",
  "key16": "2PAcU9322zLugKPpuhoZY2kPNjcA846j1izi18hwfEWQSnhArAGpMqnwvJuBL5fH21PjyR3G85v3VRkcBPwX2ud9",
  "key17": "4cCon7rB3hR4Jy6t5ttUsT4FaatuZtSYBhehiWA4Q2mdAYgZAYMXPPmkmCCwDBxP2i14oymgX548VTQ1au3hJx8f",
  "key18": "43hLjcYdFoTdEN2ZBQfHZqWijtG3ie5cKyNfmBWNhm3SXwYaGAkrNCGT4NBkTmfGaeYoEh6biSi7vFqm1zP5hhLM",
  "key19": "3hWfHEFhLKxW6UYP7vYc3JhhToA7Y8P3YBtpw4AxbLQAiE1GcGMUSfUNed51j5jsmqyHK15G7DQgoWgnEHgWZFRs",
  "key20": "4kCKr8MAh9hZVBudemVkZv6ntubegJxSoGfNoxXbPUMC9HobLQiyh1J6ArpmhGrps838tTcWPqEH7kDJAMX8YFiq",
  "key21": "QzXZCc1KBx3VWKdenLEzdo39Xq4a2ds3Si5ZvDrMsLuHXs4inGmKqGmq26EfeRG1QWSAvXJwkrsNWcWiEwj1R5c",
  "key22": "53cpFw9nXPZTwRCjyeGepLiHQzBpqqRF17fCyebem4ftTjFA8c2Tf2RdiPudnzFALbxvLophKeNSAXv3BHj1JNmT",
  "key23": "2f2YBBew25S8kQEfpaaqtwWh8S8nybc9kDCRF4moeGAQRBUJ18zSkwXJMNieJ5WSZ8UwizZ1kYr4kmtrQ6SEMLG8",
  "key24": "35gw36AZ6yrdootsfeg7RvbeZtf8waKV5VPXej6rrRq5HaVx7viiT897YX8Yf8umVtWfQiXXKtweuewW3MHqb1UP",
  "key25": "5m1WjAyTPYnoDNtB16rPxoz3QZYDya51U6AqCqTDhs5Fsp9Yf5wnJsYLJ6KuFC1GqrCcZFMKxHsmwrseTookDYjY",
  "key26": "46GHmJj7buB7jjP6GjSP7oRhSDfEw5iWotDfvkwwZEb978FWLamkeHa5dWeWyL5pA4EiGAcoCKpvcqVrN4dh8Ba9",
  "key27": "3JSj8zefHxa8MFtGENXbh2vUfHVKVGfaUPKntPUT46sUw68ieiqhqdtg8Ptqgnkk3dn8db7pyvGhkeANdG7auwrH",
  "key28": "z9c2xgwRBPW1tUWhy32vDPiQxqg6LoZVS5gnaxmXFCfb6rQohABS1MHRrAxhEu9qJgxJ1JrLGEuiYEfeRxyK4Nk",
  "key29": "4GWEE5owqsfSoj7Q5UffiDC5Pb66v6wEzivKgo8pvqL7ETG1bv4nmp1ygjhZHFzwFzMBc9baJgB3pLatKBHfYdQB",
  "key30": "d3PU5qZDsGDP6W9fXLSnwy7nwpPbWPTF2FapQYgYL3iVpkjvfQNEzewwXyphndLB88GXzsFK79tpJ2jyZP5G7yf",
  "key31": "4f7asn6sW4B1uKKjA72QFWRXcnnwDFUwLXoZ5WLzbmTdrjtKb7PZidWuDo6zbtN1GaYeaqYcKZkmkZJmh6qLJjUL",
  "key32": "3JVjdMZJALzXMgjZcubrzacogzpe7kQXngkz8B2y64Vmn6G1JDStgfmC3Wprtz7BFWmRvtpsPT2s2hY6fgcERApW",
  "key33": "HFQZVvXpsJGfZt2PbYzKPVLuUxRTMdR6tqWkQRzuk2jtUvDxWXu55xn1wi6xgVPmLsSD1zoaud44UtJW1K83jZU",
  "key34": "QxbfkpDvKLJgGuJTE31g4j4Z9nv7VJz8Y5MC8kDgjSSZpRQwxRzF1u5sT3m8sPSHXUo6kmLmAkwSaPgopYLpnvm",
  "key35": "3tvboM8urfFv1j6VEY34ATUE6Srm5mzY394kPVj8YZKukUW5ycYEv6TbvSGPZVhGXX5ucJ52NuPazGcFC42UmrLB"
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
