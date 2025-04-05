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
    "3uErgoH2RdvtmNz58bv52HzaJUe5dcaYGRyYKNWzwn7TsgQpBwrngGZLuBa2VGR7WWhXfT5h6rsbxt2oxB5mnATh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsVYJSYuDM1BXbJx3dGVXdEMGvUvnUNgnKz3RABLciF1RgmL5PodnPaMyMV5B1G61cYCuj5goWxq1u6J67E2RaP",
  "key1": "2aizqiKJfuHpLG2Mwgc9kT4Tgh2bmyjzggTzwDqKM5PucCYEWbg331mY5XegmSpQ693nkuWgokGnF5Yq53h2WQhY",
  "key2": "8h9bedZHeGgGLUNgEgebYr7RA8n3YbBetCkiLE8sFon24PsStnBA7E4hEvydpMc1Cvzg9VCV47k6CDfQmtXquPL",
  "key3": "2s4uTsgZvGkWzyy6PUnB4Dt9ooqFhgEBSegFRSkQpwJ9Z897AUKgGDL34iDZVjNiSmswNmWBFsP1Hwwuf6LVGhMw",
  "key4": "36dAWjGAp2oZqUNC8nuMcSpRMf5r7KmHNGPUfu37958o1gF2yeo3S35agfL14ZoCLMwQaXGrxp3hm9sXmdvREf9",
  "key5": "5y3Hzg7bxQKeixQMwEv2CFHwUSTeF5bqRP6Zu7fqT2hcy16YgHfsUViuXLuSaxD1nS2QVwCF9t5QsZ9Yop7TPERY",
  "key6": "3dFdo2Ch3FzATCUYsEumsfALF7JmoJLMmmTx5WeqWxKFpLwsLVbywwR8hPV1AEyvU5Raw6LJiRwKZEYYrGMWf1Dc",
  "key7": "2NFQxnEzHGp2Py32Y8PXJt4ruUtAkMDafMvEKkym6ScUvnqCCgJUwjwdNsNZZvpccyNZFdcEGnV4UXM9B79s5ZQf",
  "key8": "33HaD5djSEgkzmF7nc6mW6UeaaD2gJxSu8QZFupAVMZ9PhetZgaKPEwb2Ls3yBLzwp7M5TFywYc9Twdd9LYpDeg9",
  "key9": "3fDXZJhhpPAmmSFiofXuwc6MaGpsBYaXKrynouAZvX3hbMPb2igF5T43HJW4jkHqPscZHdgtAr6mjd18epNCgKmy",
  "key10": "6E9PoTUaTSyEDNK5H74BFWV776YrebcsuLBWkb32K4CiGxM8nGvYQahXtokS3cgko5cPF7aShYVP5hqLJVeVF75",
  "key11": "4iLjAEqGARpUEaZk8u6on7pVsf6U5FbSiHYagwmTZRwh3cQny8mToPHGeQnhTcoPEpTdCUYpKpZWMKiPyvrLkqK5",
  "key12": "66bMcx2xtpPurX2xXELyBDyHkmme5c2gGQwv6Et3LxVv17nfYJoQ1W3beFtSPfSPwFoMCFtQA8fSfA1Yy3Mdzmfa",
  "key13": "5W4tF2S2sBcoqbBXNP1BviLCWddKzjnmVCFnqr2mZyMUJukEkR8Nwts55bwgyLuJgG632SMxfPJHMdA4waW6Qcff",
  "key14": "3jHp7c3JwLAxPkj5TuDfgzUSotUBFpuEVVaWkkpcKN4jkPVLjKxywn3rVjKHhhpJr4HkY3dDVpQCfMMkXU6G57yr",
  "key15": "5TqU76qpM1UhsrmwZ6ALkFwxxcwTjmX8EGpaRu9SUSnw7MNvbjEMri5UijDhjYj7YgSML2Ux8K8KfHamvK7Gjsai",
  "key16": "YDfkQspmWtfFxKwWY8fCcjtB6jh6FEB4tzwwSFbVhiiCURWXxwguFSEJknSzMus2FuSukky7Kkw9ex9uUhTjefF",
  "key17": "3m5aw5D9jVY55nmnnVpQtWTVwdXhcDwEShS276hPRwAbabysAMZxEZ4amFTkZg8gjQMHZjeic3SPLx3NkpbxZdAi",
  "key18": "5Pa9Mjv85WXMMUfbpTpZksVgz6JDj13YPZ8svZncRofXWhoBzRJaSEtemcW3DHYQv95V9j1LYVoXcfZRm5coczip",
  "key19": "4NACTMuZ3F2YWvi11wkTGezChFxUcp56CgbYauUHKRDqo6gS83AnoE5VMxfasJwcNYxDKk1SzCe6g7U2dZRwiLdb",
  "key20": "53YVk67A3gYgvvVSVMM4d6ztyBJEQLie4R92GDXfJRRH4LX1AvjJ7DZBqQHSaBXZRbYS4WPYoao6xnJ9cgPXKFC6",
  "key21": "58WArKwtYcaqEK5v3mDjpSNqYBsGjp3drZSrBD3FjqbpPkXuTsMJRshNdXegq12niTnrmcRsCRDYDThTLMyFnzNR",
  "key22": "5fcCGqPfT5pzwj6kdkG7QXsG2nU3sbjPRBaLAfAmRhsVdWyNo8jGbu6CSdn81JrqaJoDzAsp3BwBW9PyMfibKJsK",
  "key23": "3ZF9nBKKUmbM49d1dgz8dMRf9hA4G64yN4QNBBaCbtRLo7nemkhUi314eb1d941NPQ69aWsEHLWti554B93Mynk7",
  "key24": "4dGPSVs6kBhfdfiLznRKdwQfz9iDQJcABkTPsttcyStGYuY3yy16FVXTbbpUXvZL5K4rorXWDQ9qyci1Fc7sCb4h",
  "key25": "x1ztTH3oELVC1CX2Ys5JMj2fHKAwEVHwyhMvUEQN2Qgv2v5tYpaj8wdsGML9CUc9CSGzSAFtwscP4v1vCpiwVA6",
  "key26": "5mTe34NgANBJHn1hcjBGBJo4e4QVnZ1XLDeSfjE868AqPwrwi6MUTcgDMUvytxK75XHSsX52XD5Yhk72A8Th4xkt",
  "key27": "4WCc94gP1KNFGmqACi9fNpQEKUQzA5Ctj3NKZp4jS3FdvxeVPhAMzysNfwtnnemVBdDSZRvyh5VTwSyG8mdv5xc",
  "key28": "5vCt8s7439XGM17Y5sZJbMNddpZACUzbcqb1TbyuWsgpWuEnAidz3CmxheKMg6Ykv2ABRyirXt8Hb97YZMSr5D3F",
  "key29": "4JTpDTcYNpnyW5v4r6SVpEEVxsb3JZErfGGcgy9sHr727LhrRSBux1T7S2j3GJZrLpXEmJV3Afpa1RJXXXgNL4VH",
  "key30": "3C3r2XogcfyT8e7DhCsJMxJtGGNAirGewbp7sXBo3Ee8fQmrUabXv2YG6kLCWfXJwsJAMC9gRPDpxqBS39CXd57Z",
  "key31": "4TodwYBffHGCrdoRWNgSAeLo1Whwww1bfrmmdhppvSRm6SPJnRpjv5npgqEsJK5udmwkyZnDfRANUMXrWzDNGLa6",
  "key32": "3sVSp6pNum3Yw2bvsS9T9Jv8wUuH9sSKzvZRpWoNe2Xd1tMuQVb18EJCPTMK2rBaAezHCAY94NYqn13NpX4Na6qw",
  "key33": "4FXMVuKHewc5esCZUoxfhCVvR2nL9iBLX9tWS65tgpQn9GdVPNabe6pvi4hRZNDSrFfQBeJbtpybEcoEzLX95nva",
  "key34": "3RobfWVsQdYdtaaJ8ekSkyuMnhvzF7p7QHqiRrFPUCuJZbWidMijqKZCvjLFSPDiKodGzuDi1nErkZRLkmz6NG7r",
  "key35": "2wXeeJdaX4VTXHKymWVDpTR66zSXXhsGF3atpBFEdyPNBDWHm8vQPfrw5ffprtGJeiPN1dLKhAyQ11h32GScH1L",
  "key36": "5LqutKDwecP217PS4HEHdYd1dwAHPqYAvcHMpnujDFutCaJCaoQqjmLSWfRuhB71hjzWRgtYKYci669Z4b7jTFza",
  "key37": "Q8Wk4UDsDkBZ6i1Wa1tBfHp6c1nvzvTH97GTGpvVWsGx78CVDp9wia2hCAqmsrGLuT1Qs4DMhUJnB7v1BhGfLUE",
  "key38": "5kfUN1eBmsPHbCm7mPTNufewVmZh5cxpAwR8MEhyj9DLXydk8QbFyvh9EE5EGS2rKBsMg2UBFoqzSKhujY7wuLnx",
  "key39": "61kEYogovER1xj5VsA5c4GTbGGEK4KwY8BAmPZR8g7kFyiDn8jNDgrY6ikqxzKLBuGmmgTBv5LKyEuWznz6tXbnf",
  "key40": "Re3kvxLYbPnTzKKA3PJYrfnR5zB4bZREQjomRk1EtiUKKHvhmdPEc7tmUEW2QjeyAYX2BK4oebPiSaor7YvMiPK",
  "key41": "2JTPBTgTz3at6M2KWwRiNVZNpkBcQXhSVhkDhTnXgg3CNsMrpLVwGdSAWT2MhJsVfWFrvASGVpMNo75gdKAcCoha",
  "key42": "5sX2QEoAFpnzVHjNsDqDuR3aoczU35RoMTnkL3YmPMj3cjtu4aLG3YHVD7K6iLwo1rAy6etK483LfjPKRLS3URtr",
  "key43": "456BGyby9f9bPPv27ceL59ZQ8gKtcfzYPQVdMbe8e6e2Lp7r7rshkuAv3WvRhNcMWPghbci8SYXiTWqXasG73LU",
  "key44": "2GW3XkfCTcpwbg1NWpQougwjwMJCf3p61BejbkgZcWDS5AZPUuaCc2tv1jowsri8puZbeRVZ57ATktaQfNacLKSL"
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
