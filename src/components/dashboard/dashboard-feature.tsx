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
    "5B3XnKEcmrfjwhxZ5qe8zV9ruQq8Ch54bvPiBZZfuawCQforMEoMwdSEV7Bje8JDfNiw1VpLr29PVe5kxJgt3Y2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usoSKYhbQ1FiVra52S4tNSAtBbN39vZJWHT8ZfGvzVL9ep5Y1FtkK5zBZFLkjJ8xfD1aE9x4hnnoTd7C26c2PWS",
  "key1": "29bpWpPMA6buJ9Vph14qiqmWfLvvUCgxE6gd4f1UrbgDy9yFp7JXQkoyMyyUyJqtRJa6VUaBA8Da4D1isvpT44Js",
  "key2": "2dsBnfcb3hGE82EJXjXaXSBs3sHVQRCxmdQ4YoajBMJBEYNPQGjqu6AjfYLt3LztrdfWJnuX9QyKbQ6zMACP4tmW",
  "key3": "2D4uTzu8HAVRirKzRFe2pgtrHq32dbQRPUdDDxpFgt6iqqkWzccws9pnyHTkEBFWyK2Nw3eG59943JRMZjBQEiVa",
  "key4": "5PybKjEqiVCRHkM8irmH8AvQKZDgeTCdqWsXtfptzka6hdQjAaVuWZrZGvKCXCoi2eMnhUJa1PpTQqJM5MSoLBmJ",
  "key5": "4vTgFjgYR5TFSevr3EjcL1V3F4WZHWgx9WLvzYwrcgqe3cMSEXNbck6demcfiVrzKsUeVCo74pGReyLjpbMTH1Bd",
  "key6": "8ehvTLTNQRHGts1sLWq5r2HefXjvB7pyHacuhqcfatVS1VhqwvcKRL8W2JWJR3JPusccxiLMbdpzPEwMqyhuEBq",
  "key7": "2UhrZd8CvuHNbsP2ix6JK9nnNq6unGVpyVBhe3SVknvftwj1cswTm9ngB17CkivNSfcTtKDYQ181trC2QyvLSTz4",
  "key8": "9khAJuy3wJF9bAxvRvTVBYxJgZ64gec3eQ4SSapsBvSXCqU1zfWKTQoF7HNG8Cfrh34U53jUPBksdCreQ9JckjC",
  "key9": "2fNdP5AMQwEfRFLFNHM47JY4yuQop6MGij25whtYcq4sw7a1d8NMTmWfqgYeJZbgs2j3w3cZrQy9x7inFV9xNEP5",
  "key10": "9iSgFjrv1VFXXaZYgie7Hx3PyKVGzaSHfZR1BD6i7QeGfaTNRSTpRcR6fRsqGoYaT8avjGyEKn9bbGLMPtCTQz1",
  "key11": "3YvVMtHTvSJn38iSzojWQ8osmYSh98p735KzBvNyuqg3wYXmA44ZUdJAhFBSiDdn5b1SM7324gyaLqPwMp6muCRH",
  "key12": "54YjM82ZPpxunTyyW2ybfjhh7byES5r8wZPYGxcDmcKFtSsaQXtLTWC5sFB1gpjq8qP9K7iSmrcxLA1B47mwVZjw",
  "key13": "2L5M6e2a2AXC51prbCPQtxEkXaaBz7pjDDhri1tfn7Em5Cphr3skiZNJzvmYd9QPcSA1RdYpnCrhA3dtAfAnHPup",
  "key14": "3dky3SxwYem39YCJUcbV3zKnmt9pecKHYhprf3irsYW3eBKZMV12pf5tAkQ24EaqmdQE8m7umWdXT8rpWVPTunaQ",
  "key15": "3kaoA38othag3vxe6RB7ihJR45swFuN6MSwC3a1CacqoK2sasX1m3H2TVJXMijYhSCYVf7ZGVurD1TjrnV6EsZJf",
  "key16": "5f4v98T1wdsTwm9E3srq3KC6md7UDMLNL7UGBB12iaYHZZojnNJC2HhcLttmVTBvvbRLMaXLkM343YbWpiAJjY5s",
  "key17": "4VTyCYKmW5yFWBfMkCSk5GqsrPmXp6tBkkYGUeRYbPqCiacDWmewJhy2PQ12VNqQEGB3FntdHhjpHhyQCa9nuzwy",
  "key18": "53pSFJdbR53ocSGfQYKi2SB3EPa9ABKNLWkQbLmTSLTVEvDW756V1U5URhABgda1wU7c9JZZQU8EfdwGieUfwRL3",
  "key19": "5FWgKve7RWt1xTqhYZkuowrTYMMePeFchJRKZ37ssMySwmXFnxARPSZFXmkh3LJNGUBo4csbnfuXTtaxHpqvPrLT",
  "key20": "5LBYL85NVGMWZWedK2Ri9nCFpcPxngMpPK4bvw2a4u54XfcJNCP6HoVrgkKoEr8zVuiDLDyvxGYa7SXbwSz7yzTh",
  "key21": "5hm92eVbEiXyxig55N8vYZ7UJLABYdjSnm8ksFXRppR9hzcvujdQhUuQb1qxJH877AFTHXBmf4xXHkUUf4KmfkRf",
  "key22": "5KEPJWaycuq4f3SSd6iLKXu2bCSXwWVfJcPNUTAFGD8NBM5TYk1KarVECYZUTuo2WfqapNTFoJVWC6YGsrS4W5PU",
  "key23": "3h4ajw2yy9tyLTNE2gvrjkxAuqkWSKeFe2YvedA9poFUN92bSNXrqZZZteN2xW61PQmguiHLZy7kbpQboAqi7UHL",
  "key24": "4Q9vmtBM35u4WjzEgDEqN9PcCDC8D3yjE4Zfsc5Kbup2JX8Aq3hnW84y95edTocjwQyDqbn2E2CycnjwDTJ6mT7c",
  "key25": "4SjAxX7JfJxk9Vg1XJ6ZoZKTV9GY3ksN7bw6zzjkbsvaxGq5x9Bo46yr29quVoyezqoPvceEAn5Qp38Kw5oCukvZ",
  "key26": "5K5Be6Qbx5UHu1HBgGeqsUmf238aASmJbSPqW6UxYXoy2Gt5GsS85KA12V9kdJV7ZE3X9cKefiVEmKCaBbtZmz7h",
  "key27": "5ZmNeNkMykyVf9oBeJPzN99Njo16CVLQKjcoJ3xjzkVgNJ4TpJ6f5VBbYjRd1jv6zgnDkdrE3ujqwBX79Hq4YEGB"
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
