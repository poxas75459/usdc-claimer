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
    "26AMxf4yFBvHRrVSFzufCGKqmCYWNsFFF1Qca5NUFoa7t6BHLFnqv9PdiTD7tQtYeFX7b5aybs1sHNx5kFHmQNcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J3DaTUfNCQ5PnNL5NFGG2dGDQg29cpc6tZubaZsfZdXxXscPZdkZC1qYWZbBV5WCr2cfC9a6cfAcABrFhou2HNQ",
  "key1": "WcEp7BDUB9pDnBSfRiqXzMWvdpvb1ymPc6wZ4PjLmwRqboQRTQZKB9DLb2mYqWSzi7AkKqzYWtU4FKYo2LvT29c",
  "key2": "2rAZPJhxq1oT3WmrNSNS2D18BRS3dSghsyuDzo6zR3GCvaXtQyzXDVugAHSrv68kB7LgvfRnKMC172MrYKegiEdX",
  "key3": "29m6iHe2Na6y7KMKZCJxeRFnjSKtpKSZCc42coF8qZYjKpNymQBrXyLTiBwNuPMii98EReTRXu16fLdp8nYyYRya",
  "key4": "5Kf1WeojTH5pKsCszAXCRh93y9TWyokd3wTpcRk5NjsQqKsTgcPBnQ2X6QsPmjd72RbVMmE7w9JH7fChK4WYjehV",
  "key5": "2XxwgkdbK4Wvu981erTtBpcRMfeomupj6V5snNmWp1JfAtnkT2dxfjMs1SDSXgfK24DD3i99sVbfepjT9EHX3tRw",
  "key6": "2AjKR1Rk4rRsjbTruxHFj8NaWgdTprTHVCdYyKEP4frpgN13M2HVcGhuZwbf1shLwZ6pUNhEjq2uxfsJ8tn3a8ZW",
  "key7": "3H1A8kunUnaWZuAVESyquZ8bEEjgcMFu8s1SG6a2VcpC88pAxJSqeMw7HghfAbM9Qz84q7XnTGgVqJn9C1j4wr9D",
  "key8": "29faH5Qbp8QngeHDyqSPimsdu6tCm4Wuw5ntM12JpEj4WP8gtSMcL1LCfRm3rq6WhstezXFBtkx4SQUQU88Rzkvp",
  "key9": "j1smrabRhGCpDhRJC7BGAaDHoGoisspi8LBh11DfFQhpF8TV99yUgiz3GamVvA3SJ8mHumdJWw8xDmPNfSTShJ5",
  "key10": "2jCkqFhhwRNFvDD4LKNjwHh4LJJ7RGnFs9khq6aJBfQYM688i4SdaR7yCpZBdvQHSZUM1Kqs336jwLprVgvRvcf5",
  "key11": "2sc3LqSjDdJALDgMcbn4Z3ytjf2GJ8XYVaTwSSGBzUY1nXbNFBpmbU8kzebNCYCumaySvRb5KJG3YSLT4XXhV6ce",
  "key12": "5dYa3UF2VZrYDyrFPAUujPPYs76RQ48iEMYfRQUiVXK75xkcwAUjq3GqNNkcoLA51mVYpwYwoHh95VQufjRrNshf",
  "key13": "45Lszc3sCkTpqGEi4NKe8NQ1p5ASKYoTBScpiYQVE3XJiGjHd6xsiDtYogXVUSx7PJmDgoF9G2uPP29nPaVLaUDd",
  "key14": "5zgJwvbG8r8MC5LQs1vHRbY7Kdu7FcsdejpiTTba1ANMKhUiHpkEqnS6P3ZXgimJ8xdgLf82ULV5Tt1ED1wRahP1",
  "key15": "3p58bMu1egUhhaMiVrXd65jeK2Vuj7Gp9hgU5ggNs1ajihuTAKxV3B5qZMiuJiNMa1cZWMmTY1YJXLdtnKtH7cPx",
  "key16": "5FAzM7eZHyqwojeB7mqdXsE1QZLZQfv8sBBhXms7sSN1xVfW7LiQ6JKdyVFQrJxEuAvUovPYpWKg7Bu8NYrPdUjM",
  "key17": "3nh6uyq8Lmvjy1WAdnX12CWYnT1FRwdFHrsUhFn9Q6LP2iNJJeMgnNygHWrFtxQTXiX452mimDqW3fQUobMpKfEC",
  "key18": "29NNns49Bq9KWycS5tmYYA2DgiBfvwuV7gF7sjp5Y6M8WjHYhtFz19Ds8fqm99kSgzPZReb7CkCpoaevgxAgzofm",
  "key19": "459i7sahsT5CVoScNypAcUb6xLcNWFS18x5AYkwmYUEU3GKQK5MkKPnenoLmTnT2DxEsoUj1tXbb9FF14gtu7oRr",
  "key20": "4gY14BPnSLzxhvHgf6Z7Qghp5baxPZssKiR6mTDGh7pZmPGEEbgMmaTUDxXVSf2bHEaeXZttjWAQVMxsAk5UZVcr",
  "key21": "2k8DQvoWDztD5sTbXnvS9LriyYzTsgSmF3MfT2BKXjA5Vc42VGr7DPCUHZSbynwAXChrGdL5Vktab7vauv29DxHJ",
  "key22": "2htkyPJitBsy2kzDfy9VSJZBuxfUrVrXHen1z6sDcnuC2MnxaXCaCR1km2D5JPSh3DMGzkvS2Kdc6bYC65HVXfVi",
  "key23": "4tcs4gwjjN9HRi3gudh3fnN6FVMqqfKiNCWCQgfyfibJZrapT9qVJtRvKnDPkiRt362MEm778meMa29x4VQ7ukM9",
  "key24": "2gHz3JyRBNh8p5SsP2HFMCwG9dN9A1m55CqzQ4WJfnnAtAQmuuEZTXCBauM2QNd292LNnqpqNcJM5qwmXoQNKGQg",
  "key25": "5jz5uQvz4mjD8f4xHKQyasM1NyjBX4ZKYUJfF54GY5u13gT3YeQwdSuibUcwTdq8bcrophx1xiJRjicoA4gVh4xw",
  "key26": "28VeePWb5MrnZe3aL3cMyn1wZp47wGxQNPExwfVAA5wqLqz45efNeT2Nfz2yRyRvCskFjCyf25NCh2KK6eBGSVwA",
  "key27": "5RLXigARoX8W2xQBmVFKcSdQ25CcxD78u9TcZzqQs4MpadEN3s8gTLiqpD59Ug9x6c7ephC5Ndp1JGsFuBgBTsGY",
  "key28": "4F9tL8QkcN4ghzLrweDGdffiimgFtsR7gsFVKcj4uuNyGZbUqVSqWjpjgCxCn8uXvUKsNo8RPQXdDxj4BmU814Kj",
  "key29": "3MSMce8NDqYR29Mtse2bS4jNnAM3do6ZrpWyd6qMYXS245osNBpiej3udKgGbzUR6PdX41rUChUQDRXdF7yxZahg",
  "key30": "4odbKHwRj6TmQmyZ14S9VbHFvY3tQJzqFJUq8KydPoy9kDYq4gUsccA2zfJarVDLUU6oL24Uj5YNtJYws7M6e8dx",
  "key31": "4eeDzbThoTqYsCYBA7qqeQd7BVgTiuR7M9kq5j494yvw4JCjK8tpfK36PEE2KUxxGWGyAwp5FD9fhetGvbxhY2mh",
  "key32": "2FoHiZE9CD52MYTKnNjp27Pff8zHU8tnZ4aCYAA2DkhaUaPUS2q3bh5G353bzgmihhuAWeJiWKJ9pwv9a4GLv5bR",
  "key33": "3DiVoW3ew7Fon6zoDU5Y82Lr9m8MYD1kVthue4Y9GyfSDoY2NPwdrKMB3QpDbqi9CRwdp2EnJKoGq8zvjURNFGM8",
  "key34": "5QyCsrsXef8dTRXpaccsUaUDTXdp7etgY9RB8gWXgVtQ3ooX6eLcerbEuKswbrgWNNehBFyog1fNTJKxUsjA1Py4",
  "key35": "Zf47Rh7GRNZgk3XE4dzHDnQSwRCuNu5VeDW1G4Mu4F3zYWmSjV4YuKCdxfXXczsikh8kQ8ZMdhbmtRtdC3RocD3",
  "key36": "RVsmEckDFs2jgPodtNzBKzZ4VuD98jfr46EktBybmuEqFF7acFpEzu2jV9kjtUxwBessHSpBxZEMvbCLWzPLt9R",
  "key37": "5c6sCZNYK18dy5CF71zz8FmBFsWCf87fYJJmGTJ8T2Tkszvaz2PcFyfrhexpF9UkimaSTKj1zkj8dBgtbC7gSb61",
  "key38": "3svwgVRsvLjiKS3NWjoZRm1JVdXbhFJb8w7gMtme8vm5xRMvYffW7H5fAnLAPVGbZ9LpBBPnuGz7xfK2WijArMLg",
  "key39": "2aAqAnDNfpBakNLCZmjRHV4E4zhGe5iKXyf2VN5274f8HJifyhSHUk4G9kiMrW86etWKJvYgAne85C1JhBeZakbp",
  "key40": "3e34a7WTK62FvSF9XejzCgsjBuez8qSmRKUpFPMN4gcf1NfL5ZNFQyCijaUaarH4dEYGzFGwU1sRtoV6yZr2bmPc",
  "key41": "Xho9ZegQMSECRzmSDDjhh1kUsJxCqxXvkWuGRcFZxek2xQHenSWEBapkK34ZYnjfMdHLrvCMCZTidT4ryMxZMWA",
  "key42": "4QNc6ZBKhuFV2CbF31B7TeB37QnmvVcet85ZeWtndmefQrdghUWL82hH4eCJmM4Whyz3JA4irUiZYexzv6o9WfHc",
  "key43": "53r7sXqtdkktneg9MAB11d5F8q4RjWbDSNfed7qp94uu1Y3BJvn5hPqbtD8yWCwqMAnJGYVP6sQtV4NYXphp88ww",
  "key44": "4c7AKWiN4B71YEKB8YshYgXU2euzstQ3QcyQjotR9h9XK3D6w2JLZqM3zMj8F4xsYYishbNABnPw5J49vfT3GDX1"
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
