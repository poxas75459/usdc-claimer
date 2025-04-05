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
    "ZJLGY2H6pZpUNrwGCbpJAQp2U6APHYPKyMaBckP7QeZzNo2isiCDAnMeZFekuMEGZHsXoN1rDuWoLaR3P17N39L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTKVz4TEHXsF98zzA8NukedPFnxnQ9hZfQAaNgbfVaiYoUUD7XAk3pCUhQNFFSdJcoNeiMDHqr9B5xxp4H21SgK",
  "key1": "5aRGAf14NMBon7XowTm1LtFJcHBGJCMUtB52VfHmrRrEe54tma61DPU85WbUtruMNwi6yztn5QvBUz3nhVLJS4t2",
  "key2": "4pi6PFRfxrvZymS7wQPDjwYMFFdqPPDUdP3rfiWzXqEZPk53CFefQpsUKC3J5EygCbcEcSFapYt62pp4UPfQ2eQ3",
  "key3": "2VrgAay9Fb3ReC32ipkkC9BVDR4xNKQyCvnkLNYuWnnKfY8359tu2jArsh4vxY3w4RxGqqvZuPgJiUfnrzyJ6xg6",
  "key4": "5hHPrCjN1p8hnRvfHDkyBszC3K95xZrrtTMBjDCx2ZC9q6CKzfLxSnMF2WNkdXW2wGtScsA1EJpY5zud6ouphu1F",
  "key5": "nDSTccW53badFCt2bXpQhCY6BJap58ASV1zrLyb9ZLNy4oc19TvD7BxsWVQmnK95W41Nuy3Qh7SitnosbYmWDWA",
  "key6": "4k718ng3VjX1uNAvDgyNiBhvsmi6k6L335AetRGMrXJdfFCPhky3dnukUrEz6XoZu8kCHVtGGmv4M6pkgJbjDfkj",
  "key7": "5aPJV3dZr3GtEzs5U94nFwpgJzg1mcuwaK2SdtLw7UTvcEmhQZ9JSYTNKny9pyzyLoNaNxWfVkMRpNLkTaFcgXcq",
  "key8": "U7VBSfjfAUaK8GnJAYeakGJfvqsvp4CJfWpvxGtkx7aeBpfXpUMHLMY2VGDmXNaDAxU2G9AtHAGF4d1z5qqH8Em",
  "key9": "3FJz7XthU5Ef7TXaBnP3pPeXkDNxvNK6geu1sqvuJKT2qTfKHZa71Ncb1terKanGTgFAY8ZYkUy3fRMuyNtPm2Kf",
  "key10": "4rD1KHfAveSXbH7ufWUTfKTMixinHzunDz53uhLRcGgdaP29mt1DVNfMqvbuwGJgGvQPoyDSVBUoi6fcWRKMbJZd",
  "key11": "5yv1H36QeC45UBBEFEUQqKKDzdxMGGvdo6sN99x9mV79b4HjNACEQPbvBh16hytfgPrSai65GcxoW96apyDBzwdx",
  "key12": "5iY4Aq1FPD6rkcXcJ4B6JZm9YXFYtRxCoo6kjTT4MALSsDCMD2SzXfm88bJZr68x9EJL3G7FWxYTStikdeLEucar",
  "key13": "3YrtZZkHp4hKD2e2a5yJ8xmHtgxSKRKU5RzGK8eL1DRGrVCSGJRrHDtLMUqmerogEBinBGcsgw1n1y6SdpMAkFuT",
  "key14": "Ceq8Bdz1AwRRrE6AF1nuUC45P9AX1M9uUQ2TLb5cvehRtMQbNurbVKxxuoVN83Fdim4Uutr24RXw4ZnNHgPaAjB",
  "key15": "2CfX1oPgqK1UCwgyGxPVCDT8GEz1PotgUHPosnTN7Lh3p3L6ANksQfSXxJERjP1f9a5dCHbZz7WtBeqg3MG2AJr4",
  "key16": "ERsKTd5jRZvociWShkLRHAALbPEJDYcosG3ywJzUqXQ3DTMcGprgNBeKxzxbhqKTBDodF23J4gvT9vobcTM47KT",
  "key17": "26kWNmfd29VxSKy1e7pTLByy1B38BksphJKkscu5CzQEFYNALkfPPHzbRwsdkLZ2bTEaRjfP3GbHxs9FD7R3bB1S",
  "key18": "4ScuiBcU8BpDehaNMFpJqieXj7Ck8q1sJuD7suojqbEzbCEXtmbiiNgWfCcARuusukqS585EzGWfEQDFbF1KbYRZ",
  "key19": "3AtBHU81GBx9UxP5wZCd5DVPCZwLEjRh9H2brSz366LVEL85uDB3Ws7CUaTrs5SdvH2mikfnmsUJCBGc4EubeU3R",
  "key20": "62rqPEUNTLuEapHbxQJkNRPLTkDqvbk4x49LamPa2XJs4J1jJQQxWqWqGX9xwdy8tD6WX32Z3xGrzDLzZ7BfACBn",
  "key21": "3rNBgm5T8E1ufMmfBezvxJUTwPKwKaNLi1pDKdUp2qom8kSp3HWaFdU73SXkBgr6Y4NrTUMuviMvSQA7NDPEpg3h",
  "key22": "31asDKBW9bx2Be38q8mn8wRDU3cUveEKWbcyLYJvjyagGBWTXKjbt4fhS5E6iTVKCciXUQbU775VyponSKtDduTZ",
  "key23": "5n78K9prbn4LQA6FVDaAfR7PxmeqGfYug5JKeq57eUc8Jbs2tT8Hk7DkqE3LafgPvHfMJ9df4Xpa7byTNUsmzBuG",
  "key24": "664s48ZtzjBpfq1C9Qduuu9cptQAUYksKSPKCfNUEDhfLjvCq23duRecRGGG4ngDfST8BSYbQ43GwRRkuteAeikY",
  "key25": "5MWhK3D8RPQ8aJMZg99XKVQhrtBcp41qwZRMfujUdeDce9Pv1H6GY14MWQESFCdAHixehGhAYMRDwfsLvWqNZiLx",
  "key26": "max76bRGn2r6WE9WAnRcVh9rBR4tfU4f3FBvVQKjUD1m7RK2MKaqDiLhgHi3Jovq2PVUqxesx5AXbjwDJRm9BjH"
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
