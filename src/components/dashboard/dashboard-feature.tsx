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
    "34Szc8mZMh3LumNEMr82kyGY65LMAH9bCUYAkL5WRpUZyqGKeF698LwweuK8EJiq9MNgKx6XvYXh2XyEFmXSmbsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vw9spXaoowQsGQ7Vx9PwcwLiTKaQuz9Vni4iJGwq1KJ1aA4dw3hFJEPKirXWdjWhE6AUbhMoNVuLJMW5GetfCth",
  "key1": "41xbKztDnzif2hVHNges6gEKHgL5b3Z9Ajhc5qHnuWHTXZGwZx1Sqm3bCbNkKUSHkmrcJGDepB64vyy6Ra83Dqne",
  "key2": "3oWp7JXiDJRurBL1gXXsRqUe1SVjyXcyA4qWGqgNeEgYy3ys4dxGW6yj9p7iyycgtfcUtGa9bBMvoQRcnNh1qENG",
  "key3": "2Ks52Xhi6yEVNssoJ44py9Zrdxiz354xtXuiPmZjqi2WKnywWoRduwN7L7Zu6nowS9QK1vUQ4ujmGtMidwyqAEbx",
  "key4": "3PF54zBy59KyLm56Qp2UkYDtqS598Ek8MxWAUZJ9wigiXnF46z1ubZXLJmHRkjRDXcDuc3YvCpp64nFkcCkDewnR",
  "key5": "rxhLB84q1CviMpghsHdsyk39ejoZk5YMPYScGGB5tNpgPRXEn61idg3w6sbsAbvgcdArnwsoK894V7tbikkvpLo",
  "key6": "4YUfk6XypGqzJV1iv9n9LHXJwVAQm1fGfsDHXEPgjq87mLbwCJ2g7dB2utUWWrjoe8QMKgJRD6pRJehYgyREDPMq",
  "key7": "5J7UjzmEmawtyiJVvXFrmaoAdppChALdAAZcU4UjzQSoAVdEUtj5DCJwQnyN4Rzwr1hEiHshqDkQUFXrn2FDZXVp",
  "key8": "FGAtXzhJFrZiWEQ2JrZb3UrxJES8ppVpKq29xvPwJCi79oeWYwb5gH2T9nxb7xDEynXhDeXjLPwPsJVjdU2P2rn",
  "key9": "2SaRbXNdHSLfVUvoj1LBpd2YQybu9ruxfG1wpjL8MBoviACngyCWodK1TkV93VF6PtiFA1o9ZkecJuR8Nh98bm5Z",
  "key10": "2sGABptejCruqaLX6FF4bXQUsDAF7tuzGjZq5AqWN852oVAkbvf4TGwfHMTjkyUcnCBQBAKPvAjTgScQSwHqA6LY",
  "key11": "5aP72YUuKQdPbDZJzAD4fgy3nwTXUyEineyZupucFzptukVbuoG9fXfYqTTHUcdQt8BCZmrSXrTpJu9Az2xCjxis",
  "key12": "5Hhfp8ByHXSH4fig3H15qBAf55fa5TUYGotjxHEXymrhKnwQiukKhonfkRAnoyyMwXxLXcg22DEiSM6kks6LYnNd",
  "key13": "5NBMMR596hHt5FNpLyyyMUw3RyEbAiHk1Abz3FV9787ACyd3FDwMcvXe5EkQuXgrSdiQHkXFtYQN4Qj1knZ2MPZY",
  "key14": "5ZfUQKZDd2N6gCmbz3Q2GGBmVdygNGdwDjd4bVWfy84daVof2di95VdBRtWVzxAb555N7ucX6eAZ1fZwiPDGssWZ",
  "key15": "2KdRRSMt95C18pBM2pK2fjdPMWS3iQ9xd67n3k861ToYBsGWMxuquGFvQRsF2aFxqzZWjgjFxeTkXWy61nUi4VwL",
  "key16": "3XER487R1BVXR1ziJd7GBkCqh3kwjM1u9bBvh5kxfZC3BHXBd5KXTwCkiDZxSCsrL17288Wn5jEYgLqiYd1o6diu",
  "key17": "Y2nDS5StPHiFuLaucb5SyvLQgjz4MfixkeACpWwh1UVC2V232FEtBTgTk1zdRYwR44t2WELe5VfubzsZTn4osUe",
  "key18": "3RBxzaFb8XUjbaCa7K7yAAwQ2bNN31PJNbE7p8LriUZveTdRKeHYJPZBzeUSAP6cbYb4sr2R7JgPnm7cjhe5r9r5",
  "key19": "YcUuvupMaQLPzHYpKFBPesoVHd5Mxa6SkrGDrTBK4T5Mict27LxJTicEBxDegBq9QwWCJpmyU3DXvPArY9gPmAq",
  "key20": "3yM98n2PyynUqiK81X4gUjTsB2rRNtkSNeNeaTUh9rVQsox655uEocmBThqrmXujTH4QAM6AGH7Bk8Bpk5YcFDc3",
  "key21": "57T4nHQSTFubvwN1WJjEGDmYYXoTS5wgXJc8Gsd7pcbqL4vz3mjyGSfogcVSSwq1kr4BZrwPAMKUxCchK3W2qrfh",
  "key22": "3dAuvo3FDRG5toNZJGY6K4rbd7mi2nPERKWRYgq4EGZ5KXa5zc4h46s1qHRgoCTXCCoKkyboa47DD2ER9WwkHDN2",
  "key23": "4JwuYsNhRA1oUKs8jsE2FWD5e1eFDdohhWuH73dgWbPHo14h9TXBsn2MnVKR9cQFFNCwnkPYSrjujxmTab81kyQU",
  "key24": "tT1HbHzVGHzizHvCiTSNKf1JwyxgZXc2CCRHbt1JbaTcJt1kPNKYK6c1QSo9Vu1x8ne1A8Axa5jn9anAts5eJbz",
  "key25": "51zUbAVFwGcm8toGs7MhTqH81o974pbpZRP8HxcbVq7kEoqffRCtUMpVSSLwAdoiS2rZ1xAAkU7CNsTjG17TjnG",
  "key26": "2vW5qMWaHhSLQLy2WS2dorEew3YNo59eD1eMLGkviG4tnhKy3zQ5WS74p4pAm5gJJhfPBdDELBUMrLAR7Fehsqif",
  "key27": "2JNWpeCgcq8QmMhusoHUADrFcTFfd5NLPBjoT7jzqKtzcnCLEMhdkGtrc7w9kCR7opkgG7NiwLo2QDwJQhF6rVek",
  "key28": "5udgkLhiqMDELkt6yu6gwCAxDoqeNif7SnFSH9BvCsQ8qh83JBtRhdkFo3WMCtr3UsJWD9r53MMXVbZRq9biNSXN",
  "key29": "65qxH5abFzrCdZsiF9CL9koZRrL3QhaBz6twfBkbUeWmsQ5gSPq5tKCvSw8Z2qtRqdaQh83hAHBdN6QhRz12AqDr",
  "key30": "zVz28gdbgihAwCCEXVCjemTpnQA3Rq9yeNEh59emVXgnFfkGmgAHBHmmNDepeB2ci6q69C3JbFDdShWwAAVhSPk"
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
