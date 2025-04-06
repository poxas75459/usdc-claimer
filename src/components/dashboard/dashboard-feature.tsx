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
    "4E1XMha9zrW1MpBzj9wtK8YLx9PjWTxVeWaKrZ1Ab7ivm4UznqNbHE74gMHC2TatGdFQoV7eotfi4Jey51oKZbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ai72eStsHBK7FK98ZwYgf1h3ffKXiarkvyQd2J5Fv6kDUq71ZTP4y7TG2bPj6HqYov8zsjBzntCJ1wFMfmNYqEF",
  "key1": "2KzD2Tj9jygF5T1bd3P3DfLqVKDbbxHJJ8ZXxqGaiWuTCP7N7FJn59jBjR21TLBBAuc3RVhuWQ7e1ZXNyCFQgjbs",
  "key2": "2YLk6PK3PYTfB2pwescMKtPgwXZskK3Zy12YxKwmr1RhXQyD9roDexnugpR9mQaWCKcXCJ4RPtvPsNQhijDQ8Yq1",
  "key3": "5vbQke2b94KSNAQoEmawPHYtmrwNcmQzY3jwnd7hfXq3S2CntQ3VPV27nyg1ap7wCYaak7gFXmX3U2eBUZTEXuwZ",
  "key4": "3DtKtZJ3tS2AK4GDQTmJtSWcG95P7YjhXFoV6aG33CDXHeVqs3u11JNdCZw7sqwFmZ11wgwpxgCoTfSSEpYdLHqY",
  "key5": "Q582KQYFnKJXyrj1Zh4Ur6kQUb4r6oGsQBGZAyNVWnnEKPk3Nmasg3ch12aEpeHeEbj3tgwB5Eh6cYWzfGmPRWB",
  "key6": "2ZPmeu21L36f1WcznqDjhfWKokhggXQJYRUc7LG5R7UazY2eN2mriFEZCB1ZabUghjmfhrY7z6ctewFjwFBY2wZw",
  "key7": "33boFMu3urBNimm3GGFNfQUXLPoo6gipLG9xQ2cG7Ck7kAKhan6K74mdtUbiG4GarPYixVLskng9RnVpMXTUAMPg",
  "key8": "3KEbYj94qm7MUxwSB8U7JmWhWrDxd4mGkzudCAGBscTnzXUwKmJTMKKb9fz7GEMcRrkGbsmFr2LUmhQaNRQVPrZ1",
  "key9": "35niNXr1FRg3UzLSYLq8uPAavnyQF7UCxi5XQKjECVKqmD6rLwghSsBhJkZGcAZ5sJ5nqHu8ppUpoSWNCtbrQZdD",
  "key10": "3y1ogjjeFZNcj1e9dYBBECvnMecFcgM4aiqfQY7LYBVN1b5fR3iwHQzb8YGk4855njL7HZvXumxstHgdMp6FCtCe",
  "key11": "5hhZLWB8t1fnCVAEbY6e3kuLfz5Xw6j1jXg1a3hATryjyycFkjaSXtjjmvj7N9sTQzzS8f2HRnedZoYffWAEaiCE",
  "key12": "4MvYyCdWBLeBmAK67A5i1jj7iGgztv2hmwE8EPGzCiudofnDSfR1nJSpYq3EPBWB7ZFetvWmeXH7vi6KZpYDUJi6",
  "key13": "3hg7ayTA29iWi8EcySLHdK5hCNS5xCzr9n3GcCHjDkvjC1sBFsgUyN5BwaGRUJv7dfv8iLyg53wvfLyBMSvEdskp",
  "key14": "2PzyiVWiLvZ3ue3WFyLvEivSX3WnicS6UmwYwLR7HAMjq99SmLw1vozDZ87cNNERpwM3NQoGGq7VUoss6kCM1bMs",
  "key15": "4wvahfmnXpMHLvPUoM1iyqh9N68SvSjSxarYnk3BaY9fP1ptiZCFjxVM9Usydx74SFeVv8A6Q3YRsxBPwSJMyBxh",
  "key16": "52ipwHXWisi1xpSjuzyyZQyFYCBJVfRJkfwJVuxCq2RpmJf99gxWHhSNYdNVTLQRyvTfwoYJuf6GyYZTeXL4JpGV",
  "key17": "3bte5HMxjebLexojzTvDryMJgCBbQMLHcai1Nbkf2EPwkTwyygKZuQQks3mXKkhxeH9KUVAoJkA16JyeUpYsHAu1",
  "key18": "3X5h91Wu61tzxRrc2uzXmDsbAgzqTfcKk4oHXsXdjJ24ASyBGYiTvSGoZP2RFQtoD1dz3zPxd5FFhbvEGL5TbSwe",
  "key19": "65XohitnNxweh6rHbwCdANgieb6pDtwU9HB6s2ymZGAG7dwB3zir9druguDuyYmUyg3REsGGsu9LHy7id5DBdxVx",
  "key20": "Fv6gLrDjC6Mba7RAHYhNcezG6jxz25Nvnzio4oFZuEVnaEXunjNGQD46CEBp24QywixmkyX18HDEiFuc9Y5ay71",
  "key21": "5LrjbKcPZckX2zNfK9Ft98BzM5FwKXKeTXJseD3f2nznydjBW2xuaNEYrewZSweSRm28Eg4A3Rx3YfVTgmjXZKGn",
  "key22": "39bCene7EHnaPxzomdyZ5e8aDjJ2DngUSJ8k3jsGNoSzVtrix6nRFHQUMhyfrfuVN8feXekskf4FGs5GdyVfAv5x",
  "key23": "3bsbwYtRHGcyErj1qhtp5NEfTL7b7GRdp7BXrMDo8R2LVRV7D3Y5enyyugWNEJsZNFY1UGZ2EAk2KeV2jCk4GH8R",
  "key24": "4vv977eqhxnf59SPxojUi4fVSao3PYpmA723rHqWGxgij2J3Tq6Ex6a4HhPRQZ4VPRcRTyaiHPo1WApPfncLjcWr",
  "key25": "5tmZxhfoGp7PmuxTUGWNiCz4b2joh7CK1zxENBd6EKDJeqYcuFGxga4FxFwt7nvpYrDD4UfT12rzdAFmF6tW7dYj",
  "key26": "4RpcgeWyeZooX4pBXxA6zXzY8WVApKYhjZGoRdpLraskbRNYnnyosAWGt24nVYwbQ3PkEattAHAgmubFt7wKq75u",
  "key27": "4P2aJxZ7QggLAH1fWiykKSu9y9JBFFxxoHfCe7BR198G8WXFEysSKR61Asxxrc6Zdai5yYX6crbydBd6NmGMyzym",
  "key28": "44qJVfJC78QBKQvbVAg9kA5ymW4ui1EG58RgbHsyvAkzeCVg6mafHoszfSq79HE3fsGve5KTpDrj1YPxsgeohUwH",
  "key29": "44QnDanGMNXbFM65nmPix6Z961TDd38whinc63rdEcVd4DjvsPR3ztvN1Gc9oruB6HkQVwNpDJ5ynDYqzNK4eh7E",
  "key30": "33koyYr7NYfSYHT1Pv66WChExr3bRo8k6aFjMZ3p3TZTK2tSkuj58To8D3aPcWX1HhN3B3bnfhH2zUZAsVyZUBE6",
  "key31": "4CQNStaByPvQxjUFvAoTGGKSJAU8jnos5kZgp9Vdfzfsoi28ZTdm8EvgRD39c7qpAvr7PyH68PfWX8rN4SXRpsre",
  "key32": "39CVoy7SRmNfLCtV7kByz4w29ukTm64Vq9MHtp4v2Z5tHo7eivVMH7AEn3Dzq3MLefU1Tz3zafKpceyiGFz621CG"
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
