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
    "67a3JYAzhA2GBSrFoMtk1MucfsvhBGcZJqCxcfJynRTjcKmFvyRByPFRgFR16z8ZRqs2bsviaMkWQJnNP2sbaihf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WcDW5M34gstuqgNq3TJTA5UYBDvrH2MMbvAjRNR8X4Gswd6WBE5R8v8zMHgRB5V96JAHh9RFfuP3v3w6fDmymFU",
  "key1": "3opFi9nxjrZmN2tdkib7HLqey6MMz714ijHsc7ouBeuCC1YVvRLG4iwCiPH6pNPkLZ4k9DW24pFPYw4p1V3tQJRq",
  "key2": "52AmeDBNwk5cavnf3ryX7HupwuxrT8F333TgpvfkJpJKvnZjW99o3JnUSJKSdmmmEpXrdmPktPSsYVf8RCXbMXwG",
  "key3": "3Ri6GbuSwWeT2h4SbjM5Q1wWiroxW2d1wf5pJwqirDvAgwJbpnNxkdNZF8C91jdjT5LvWe2uAnd9aiWSa9qoQWcC",
  "key4": "5ZJWtKT2jyRYhuQEXyuNqXfb2PVji3bXctk5vQ8a2vcDSout4zWR3HD8drxSW8D4AqjfGmjCa1HkgnEVuQreFfyF",
  "key5": "5wA8f18cLSczsifm43FQWwJ18WihBMbdkzuUoCnB7DLoxxaQG6k3R8i5kawKVci9vSBLywssqicjy6nxkvKgf3Za",
  "key6": "5hs2cYpGpek6KRSYGLi664d9XMmbJHq7KhczQYufuHiVRBwADe2NtnCCnNhBWZ3i7QMCfBfB1akyrWGMDF6B7hqB",
  "key7": "3QvgWVcccnzehG7GeY2pwPunDBfTDVtbvNEc3ibt1SYwgkxTVwLfgqynLdGkQdZGoSiU6mXnV9JgfTZ6hp1Y8b8y",
  "key8": "3Ls7DqxJ9kQJtmQigVXfacdyC2tUu4fgpg3UehbvQMFLzPfL53xFUFDyUmCrYtzxXHqoMqZDTNGHZRQaReXuqu2T",
  "key9": "61ruDbEuCxQb2NC2etRAJVWjH5C6otuQLyMrgYXga4RwB7dhwQC7wMBXNZuc12BK3bpsGnx3oUvN1XRj35r2mNFX",
  "key10": "5Q5F96TMSZ3huFDEzXyzM2h4ywWBucT6ei61DENn3cS6rvNKG2XUx2Pc1gnpQXET42bB3ghdqBVVTxUgf6bxM7wG",
  "key11": "cc2tVfdtzsNvbxNPgPBKVhkmtg6CHREUhQhA9PJPmXywSaADD9SKjH1aYGFA9i8xbPC54vavQJ45pAcLYggNyai",
  "key12": "AdaUTYTPC6ZUgG26oYXdyrUV4cCttQiDqtrKU8iUtDkZXbtDsmhd9dNhUgdeEcDjmnBbVu1KsbQfuS1rhRvRGJZ",
  "key13": "5xoSmuqAi4xYaPV3gZ5gazyPQrrEkHo7TGdHvqZrdsBVC8f5rw3wExBBKttvq2wcJKXZix8DGuc7CtizJWhyr4jd",
  "key14": "eYhQxCtb5C11ySNwjPzeEp4gRikyqenfmpdszvWdspLu9EeNASjzBd9zAJr7iCp5NNsmTSjsco9kfbbnmQ3Z5us",
  "key15": "64R4197qdRzLaKHzQ4txFhMdaKzj5bNWkz2Yq2bSaKCDheR6GBPRVmTfX8QjMffJvZfgxhuCBczJLNmKDAkaJck2",
  "key16": "4W2939PKAUHXjRxmsyE6F4cBWrFreVy5YpHdJZLXaVq21AM7qGuYUjYnvWNdyDM8Y9jR3JyEarojbDp9nqep2U4x",
  "key17": "5gifKpMMW3aXDuVGGKDEV7ZtAnkrX8VZz1WbnM6s4RDbz4AR2F12eQyjGMckBVepSFPFmGLoiyXsThS45Ym7ofPv",
  "key18": "5x5odiBkhegta5QdntWw8KWSsrZikmxXSbDPBpReL6XjAt96Kur9v8DD9yevzq1N7uQVELa24hrD8uWE9ZH3QZ2q",
  "key19": "45P6Q7rg2GbLnKbKaqn8L3wsDUXm8MVFgZYSG1YrvE8FKGBCN9kivTsmo7mfipNJZDHF2VSNDQ11CRcBG9Xmarg5",
  "key20": "Nk4rhiTdEomksvAdLnZRQxeKjfvCYTbtvW3Sv67kbPc89G1tycKsvcN9P19WS9BoMnp5C9YtUgMDetn9Ty6zZ5E",
  "key21": "5fCouqhTgDEDgzXo87T3QreUQuwhuAdXoJ2KvZBr5yc8KskNuyNfYQckHa6FDHML9k152hk3GoMYjthzkPYmnh1V",
  "key22": "2dfaYvGXTX327UDsxVZSeKRXWAFimEqwi5wgniSWs6axeh85yyeFqCDhGe2fJwJdLG4qdSNKykSKsMEVJnWM1DsK",
  "key23": "iuncD47MhQCv3iecYT2fFuherRk6WoAgw8U7NV2AfCYw3kRWoxrsQ3WskQ3enEe7TD8WDE7L9SAXzKY7pZ9HnEs",
  "key24": "4pMUau69hkUYUZhUJzxoTPZGwjCLkD2HjQQEG2h56AkNtLQuS853qE55tvS1YEQGw7t9cXagw4PtxhKpXwxPnuTb",
  "key25": "35zBg7WYxd8zd1SenuU4SrBSrHDcB95iWo43e6pegyaDzdiRLdUh5buz97yrdKBopPmsm4HGRCC7S3cPyTQt9VSK",
  "key26": "NodRwmHSsMkHKHo6GD3CMRzQNRraVas6AaTzBx5T3weHopWdqLC62p9Mrg1WgUfEYh3z9CDJRzhk4arXcM6Rugq",
  "key27": "sgAZ6grNAxAGe38xgrs5izq3bsc5mjm6nNu4xvnsqCQ5eJub4ou5qrXF1oJyzcXHy1we85Q2GNWyDE1QR4G5997",
  "key28": "5QKnXcCr4P8Wtw535dmCe8gNTyYAawjeSqy98JiiDJS362RdUCuF7H4LqiorzxykN5ZiiKb2Nre8ydzCDBbXi4Ko",
  "key29": "2tX4g4mk6XY9iFSCYEP4rDA2fxSGcStAmaVXkfCzdEjf3FFJA1Lun4oBdJcrwbPigf46wT56hFazLjvwkxPX67eP",
  "key30": "3eEsQ9BhvSrYj4LYoZK1XG8RnuEmqZZGMhwwqe2Boiu3TwCrPepnKEuu79bzznoXcKXiURHNuX7UDaQHjw5HbSxM",
  "key31": "5QQqPRFYuDppHkWP7mvjj4DVcZb744Sw532wZgDaCv4DkZU4hruLNvgwNeHdAfyJaeikBvzbDXnbzWCGc65Q1bzh",
  "key32": "5TR8RDSGVkW6fqadCjm4Jm5CiUmYiR2XRnrXDNgHW2HwVtAgteYoFZxRw7wbk1ESLuZPkD8BpbhNNii8aZgvC41v",
  "key33": "4gS6M7wndGgKCociJ5ykdU9vPVE2NBvtdcNMbD9jVGQGH7W6MqZgtoTbAVsb4yvnLQmYQ9HcL9x1bo8VE5PTqA68",
  "key34": "5sdxzKVepYcrGuHTQahc5a5zFgcHJ3tcZviYXWxsgMnSzAMfaec4WHZ4eLKWHc21GFH6tcRzKpnoipEq4zCfhio3",
  "key35": "bVqC7ocaTosvi3thNNDUQ7kwSMD2axgsDGdfKF1k6ffrQxshDdNonsW9ybjunfvPvbdSyDRgK8ezn2kxrb4pVMD",
  "key36": "3LJni73PQzoko6jXvnrfkXHRx394c3yX6XcnVyQEVyfXzgL8gkaWCrj9N7rbGaz8b4yBvSrsf9xV1TTmrc46ZajB",
  "key37": "25Qtimq9f5AhJGoH9o25op3b5QJV7waS1rWYxsuRAkkBnRvcR2toq9k4tsUb1NgdsqMNSE4bGYx48bTeBJs9NWha",
  "key38": "231ebnVvRTnNRFXSpFgUXUaWwBiDVJBtCyWNTYgriXdbrK5XUE9ciwFiUBSwV8sSWMFcKuCnp2Jec585VHuhaLBC",
  "key39": "3zb5Q4fNXNfCU8qZbzaSaPjoTWpGcQyP6nZP6ou3SS2pqGQA98wWq6Ws9jEVe1YNqKzJFboaKuBVXGLuf3xxXeEG",
  "key40": "2o9Fd8xcrpFJ7nJHNBjKv56nQ8pN3qfYGTayEcWgfEWp9cTSdEzFbjAc3SZbmUHuB9nqDubzBs4bDrt5c1GVSjGM"
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
