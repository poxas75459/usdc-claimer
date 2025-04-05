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
    "2c6RUATrVXLh7UzvVpZpZNP7FYS25VqLB1DNKtgoFZcutQZiB3AiyPe4cRNXqhvFAEbwssz1Zn4kUBNH52Sd8679"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26sCSqD6J52E24CJsi7VJHWwXSEa4Cc1wguzXTUUArgwGMYZRzvu6o5NmdUAEMxGjErgoWSC2aUJF4KkMfe71Zvr",
  "key1": "3SbykcyxgKqMYuKzGHAwenH7VgeG7tiL81tZNYHBV8MS2Uk26CBu6oPym6P8DaNu6X28veqn5rZv7ZQNPxpZcVE1",
  "key2": "45dtLkPHGDwY2Ac3NdkdnwB1UckXfrLvrFVr3Km55HMWZGmJdPwMi4cZxbrHPq2vZmP11YAwZjYi67HqxZozkti3",
  "key3": "4dfqRxNuB2F1rd3yaveydBMFKkizqBxuKvmHHzForKrXFrXGbaRrGmGYyURrhmrjCqsjSvNr8xg2aJcTKcuQvuxu",
  "key4": "45MpnUP2gLkM17ACSwVqahqRq3UeY9KUBYXDXgVgsyHZHUUNwDWHNa466PrAexQFapdnCqX4hK8RoSFmLMFJQFgP",
  "key5": "54nCHCxFHVH31aLkEeJpuCpB6hr6ib5DQiuCcdnHgyD3NzppT3k8n42EkJ2fR54y2eNW8vqiTZDSM6YBtHSv26qs",
  "key6": "4eyu4R8n4QSWRojEJNHvFK7RbUPf38DWo8or7GqSUDxVFqtxb6SjTREmF65kK1DAm4bZVKq1xk3sYhVt7J2LCDcY",
  "key7": "31R9p3Cq9JpdCvu6AuypAbrY9Hxy658KzWn7UVuYYDiHtPHNTVvgMBHQfU9CBp3x39AaSbqhF85YGtofDGmfDnUJ",
  "key8": "mR15SAWZS8kH3cLSJBykzBAcGxNEx3wMVAioyHYyZuF1MEdPHdwkvbSWDQ5F7pizHWzGAQnvTXkP9e7foG5nVBU",
  "key9": "4c5me9fH2svgdTf5KhedLMSa59VdGT6bCbsUyBDPLKa8LzC8KymJ3CprvRvey7zmZpuJLVpAs1ALqfHKAYgKDSVi",
  "key10": "DN1ohNEF4w4b12n2gAhXPFunaXKXNNfANCUobYcCEQTuhY1CEMjCsemWMfmVA1zLH2W2zFuB4xFxUrdCCKpsWsb",
  "key11": "2HMknXDTh4j7UrP14MYKuWfm9eEJW2N6FDjCmbzZiJJ4yzhhG61VmieZ1NScApkNLKkutboZc6fgdJi7m7R9pxrU",
  "key12": "2K6cZFTvw64EhpuxycGscKHvGcxhzTTE4XSB7Lko5YBRjnKBTnafn6UrB91z2JZ6udmfYsg25qeSQN4hk7prCKgm",
  "key13": "2ydwcLKHTjbgGo1SzwzQYmFZixayrHwDoaggNytNjigSKKACAm2MsTYyvkfyfMoxT6N6hgkBLcJ4VTFVmAH4vpDv",
  "key14": "2EZAnmyvWdNBRj4VHx7qFD9zavm8xxQbj3a3z6eAYv82fDzrjeLVaGz82RzBQ3UmvRGz9BJdva26hdVKqceCCRfT",
  "key15": "44ha7XVwR1AR5igD5o7SXyxpiLdCz1CMWryFEWxzgANqBRZMToFBaBYcfW4QB5FzJomGB6U8feHjEGECCwks3Q4B",
  "key16": "2uUmSboDYAauvdbHxDzdKAYHaHPDctRq859Qr2tHY2mrERt5KmBAY1P3LxBttZ7sJB5U2kqSBm9xv2SbsLMcPWJd",
  "key17": "2Abi87KbLLGkU4PTYFy97zzDQqp6x9j6HgE5QuDqyPBniWTjzuDwpajFCoREk6FBqsLf4tfMbbTDD2PBiupEvyYy",
  "key18": "3jtQ7KWKK7X71TkY6nbpDAnofKdk7SHnJhe6j2zjnzT5QNQBrJuuynP7HntaTyL1hpBC25HUtGWDbJCdxhS6PdB5",
  "key19": "43R2yGut1DKsv6xJkntaKJevUN4mizPKWqco1uf6Vm4YjNe93Kb1p6q7uyW2oSDR87FXyT1epJWbANCCpj5neAht",
  "key20": "5XA4qNnyeHCUn7nRtKUsBHycmDrRgWLe61MSQrjip2DprcjrB3ZxWCaQ7mioPjCzFEJG9c8vj5JnymVhRq8jB57L",
  "key21": "5Myd4UVN5pQ71AEamG56VgcUJfHZTvUZxLKDKZxZ8JXXb5cnhneD2NcfELhbN5qUF81BCsxEeVwYRoAiQC9g78jn",
  "key22": "H8UtVjFCwcLuhzD84ViGRsTa3yfVsxL1HdpvD9qUNEPF1yp6HDTDubu7ibhNLHFxf3oeBGZBJ8MYSyTKYFzRG7L",
  "key23": "qLmLxRcSppqGYF3uqiL2aWadW5wttxnisWgqhWqaspgsv7KNfr4DE4Cry3NY3EKgidLzSFs5xCqeSpBGf5ZXxya",
  "key24": "3PBpmP579eH3Lhryiamfqgbc4Lb3rEgkdxB8ibsxiRgtD1nPncoGzVfBw5o98dfcjL6trjs76an4QhgyudfikAPW",
  "key25": "27bKermaroLGRPf2YGzZsUtXbEeAgDFQMS9ckLtz4snCS4ae3AfQ4gXuz5j75EHZAMFs8RK4Kzc1JVJWrj2eGTeV"
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
