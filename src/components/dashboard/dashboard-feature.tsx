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
    "38BHuceRXYzjYpLMWDfpgjUQikpiMaS6dcrZHjT3Pkum84zPzBhkiaaMXNEg98PqTZLXnqrcNYSPPEXfYMGtWcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qfWAkSc1UHSCx12RdXxT74eL5txTjNtdmBWW9UfVvezJX6153DSfEn2d8EJtA2sSs3LWTea1QAYfLPAYQnWC1ZR",
  "key1": "3dfTNmcSPUBh4eUcS9ARV95X1uTXJJ9sQWNjdnGBV7mqkEpfGjVQZdhEh41EaZ2488DCHrAytkVgNyZ2nXuzDjzp",
  "key2": "jMYzN6jpu2hExLMF4movg1VnD48pddWvWQYkVE4byUXQNmP1XPQUdW1pBnpWGL4wgDer4W3JdQ4xPRKxL9AWtg5",
  "key3": "2u6g1sHwFR8Gp1u1vFu15ypg4w1VeJaQvysnHSivCEJhQgfkwVBsxqrvxfW1vhuYyzovx7BNefa19D141ZpnNMQo",
  "key4": "28rMFXvDaMLdtx6rLJZZ5DU5CCFaLEKEY5w8fr4Zym5bNArWtTyMg6H1QiTGQy1WhV48dTY1cj2bBkpB5gSG8eWR",
  "key5": "44JFzQhRPZz1Rr1utuoxxC8m91axbwL9YuehREXx2Ydh9jcn2scRbBCuqrhcRgmgTTy8H9BvZXZmabSq1oXWunx",
  "key6": "22qVBaLZ8GU1jVghZSHF7WK6mE5GpYiQLLdX1xjtBwRW2vUdgTdwgcVnhUvSUQNcrYekMbS4MCE4wPZPKZEPQjog",
  "key7": "2zc8dn271ujNY55j4r1CezNpdE8w74KNhvERWQAKXeAB1SQur3EUGdsiuUmgDz9V8oCRyxZzgHwQXyi6cGSHrE1g",
  "key8": "2BmFrsenb9Po7CJo7TfcPRrswZQk3L9CCf25Z8QFSoXkgCmVeRpGhMXZCaaZJ1iNATn1BdxZ9m3AV5qSseyX3xWZ",
  "key9": "4N8XBHVNWjhsHZuVpkQsZkcPk7azhZbbgvhPyPe2icujiiQh57sovJGTYNRAa5yZhdksBWUgD7K6aPyz2pRSdsC",
  "key10": "363azBy25Fadku2pQkmvQ8ADh4Yim8opB2vxQCcdEaa3bGvsfsPGexV61detdFh35QLe2ahdChwBGjNp5iYkLtMq",
  "key11": "3WMHifPr5tRbPWpYhaGMU5ecXc9TwRaCPJoEdmp3QeFqGo77Gr8mMhk2xT3S16wtX7TfYCiinWGPq7EhCYALdNbE",
  "key12": "LGfghPbEjevryaxnPCzoaUJN4V36McB8Q7TbyW7xFT359mDGEm25Z8wMNFmHrGr2BvkEtBufMWn3woDkUraskoA",
  "key13": "4a2LqmCHXere1kvQCTMWgESdF8XL5CUiUnawRAh3h8BigPnmFk3A2RqCgiWLXrqsRbEKJ9cbCcxbHceNV8RVNaet",
  "key14": "5vvMHKPn9BL9pPx2KFSiAnmnHfX9PiTUeh1HafzCSdUtmHUvvyrY9nvdW9jHu6N2idGMLv4kZcWS38AHspFdVRiJ",
  "key15": "2wYEHMeYfSHyM734p5mSFBdGjfxB2kXVm4CtxdqhmniVpFcqvB8iSsZrX1WcxkTc2CJadeKFDse2BUitANdwow18",
  "key16": "3p1YSm62kxyuAa8dLR5KVE8ohtBSNDPSfi11CyTwKArW4md1WhdPUct9vYFvciC4pzrRGrrMbQj4cT4RFRCu1ue4",
  "key17": "5UPhkC7T9ngCyn4mqaYGzzBW9ZwTBYebXvQrGvMru9ZxjcNfij8n3vvzv6yhVswNgWkSzhzUc2YxjXsDCadSF1p4",
  "key18": "2jXAu4nCLh7rw1TzLhpMidPnQrs7xPesHy2MNiSizM7Gf28G1X9yPc16gzuCjbso2ND4DBvgBmBQJ3G2XmNEmzVi",
  "key19": "cNTscvDkW5htPx5iD3EK4DUvW9b4Y7LwwKRCvfDK1bZdNcbEkrdWgPAL5DmtKyvSfB6mEbVRE4WLsCPbjqsghek",
  "key20": "49aPDdoC1n5LNTzPkmkAzwvWqYWEnzgj1stKUcpzc8EzJmEyvxSLq31cz834yAaFFXx6SEsCXSJuQ9PCyudPASzo",
  "key21": "3L5hckSGNx1zLdmmUAsAG32swNWpq59N6EGkt1cNJ55csFwMc7oEWzPm9x5U5pkX8i7d1WsuL3KwSLQ15t6LCPSP",
  "key22": "5VXRKsgtvkdDEdkbReKg5i6SdA1dsewjdrTYgbFHuZh4PpXECpd2tu8KCb1UnUEsLLX7Mpo8MBTMkWPn5ZLH77Db",
  "key23": "5DYN4XwEzGyfPasLqXTQDtnWTWGSeC29YCCaUL8FDEvFWJxShgV2y1CjvF8zy8X5Wye1EMBrE9JjbHoSsCZjC4jn",
  "key24": "5r7C1KEMGv7mqTaBiCkwXfm41LNrDA8ZKxmG9saJGnJuXG3667BcyLroeLHH14jDGNh52jNVcH15L1XgrGuahe8B"
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
