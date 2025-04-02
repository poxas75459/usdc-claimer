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
    "36Zfa5VAVUscPkF6s1ewCdfkiQ9dueVLMuyshW9kZVZD4sGnsXyVr7n8B7cihsMWWSFPeqKZ3baRSb1n7r6RtqCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34VARqC9oMt5yXpC7wgHoMbgi8bMPoJxELg1mXqfVTEL5Ja9RZTk6eCdfBsyYpVgAEPFvo5BP1sgivWK2zu37wN4",
  "key1": "5bRfpRETMJptmMkHb8uiwignLiaBmKHXKhzqF1A2h8kmx7T55C4QLAP6gpuHNR2fYEHcWaokKf3zpX25akE3mrSd",
  "key2": "3zQyufpZzDAUKPxeU2fMsg1gFAYDM5aLKUxJpRmKtxfSF5VpAjBhz2pcRP849BAwGk6d8PWE5HKNLPoKWinRSNWT",
  "key3": "jputoJxVwN5zcuZoThnXx2GdJMaJXZm7UHFQN8D2na3mp4HE5FswJFR6sHTKgJiH4qA7RU1Z8SRHDPxxhfKkLrU",
  "key4": "37Np4ScbYWCKvUTE99c4cxJ2nu5gNCuEZ5hGzDmTUNFJLgpsSCPhtWLrEcNByNhsjDix97L5CyCjjYMCgjAGmhDb",
  "key5": "5BM5PapbfX2N4oHb8WXfuEpQnYZXjqywrG5rHtEmRANMZ5C7a1iSRSDLBBw2PVBFS4TGjBvxXyCWzrLNgbtZNx4f",
  "key6": "5oXjTRU1P85M2fr4WvcQGLH5dS8p47LKegGjLEqNzPGAxrywBK3jsPq4zqksn3yLhTtk3k4gZpaKmBkcrbnfcAs5",
  "key7": "4Gw7YXBQRYWU4KN3Lfhe9hXAgJXks2FJUZBxWu7hdxXXb2s5YGFZgeALQjwPfPkfQ37beNiYTCU4nYcXuwQ1djFa",
  "key8": "4QKU32TZfdcyRidEBkKpF1UTvZSK1GKER5RG8bndHoAugT9ibwWVvuGmsr1YZnHVnXVUtQvafj9nuPvtwqja4tys",
  "key9": "9EJU5TeYzipjbMb5uDW1s1W5wtByyTqcLYs3AcgNmZ5jMSBcir5vbUyKYynwPMe5naFLDDfUqaR41x9CKGBHer1",
  "key10": "4eHUTeGb7YLm4z48HKhSovXoPtqYifveJFeeoAu8V2cLnbgo7r6iHhoK9ZvnHwc2VxSsax1NMj7hD9NijyLfMBw5",
  "key11": "4uyRjjx3m4DcAxUpVHjBHdFMuZP5DFZTY3jKzFDPiHRqMSsDQzcsznMkjJdgA36t7ywcZxhwu4g9gzhwSkzNsbuw",
  "key12": "4ZqN4cyd2gLHUsxxyruyA1VgGY5pZYEoB5gmGCMuyHrtwyQuhSeqUeFWd7Zs8eq7EFACRxVtamoGHuvK6ZYy5su4",
  "key13": "34K4Pny7PLXEgQKd6sNCyVqev76pZsfvngWjEuXkMenGjnvC3cTZHQMJUxevuEXnpwwxWMWXzhZQFgAcPDpPYyKa",
  "key14": "3z6V1khFjWcNYbGB6cMCFPHXvUoyFa61LoeJWS98k7jNngGSUWxPPiBwwAVeFS458xnYGcEMWxCNitTCgTaNkSc8",
  "key15": "46XrcS4j3s8kuLv57tAbLHycRz61WKR3TsAJX85ohXMvXnAY3Bc5qCNB643XAmLN3DfsHJUskCiBCsFnsSPYUUdE",
  "key16": "Xr5gYguAZCMLU16cs2m98gNrh4jBiFdEDJm1AvbRJGZam6uCsXXQVPnRUyaiuzLvC1MMcBmrq7nY261QgWwksu4",
  "key17": "EimDpXxdhQU3WKTdRech4e41jxi68A2SknATkiE91ZnQxooQSCkQ9jSyThANKU6FFmkfXgu6uBGw8pCn5x4hfJX",
  "key18": "uUXg7ceDZhfir5Ay1nJiLKREpuYyUmH5Vy9nCpnbeFpWM4Tfri7pgFqWLw8TiwwB3HsBfALAK4DHHNSwEYAfJmX",
  "key19": "tafxhNvGJdkAQUcKam2CG4q419Dk2sp4pxpDFd5Z3WygUFHVde2WJTeGKcn7Cg23Q5JtKXnmJgZJwrFvb1SkHje",
  "key20": "3SUKzzMyjLyDkGgYD1JokahhYkiL1gXzKg7oyXMgzLjZvNBAqjys1D27Vf2gEcxZ9iWNGUhECWQzzbppzFxHz1jp",
  "key21": "5n45oSLxoeirEy1gmkE9ZJofZt2ubwsUSxsbNDTjuKBc5m2P5ApHRS3vY1rUCaknz1QNsbG2DnaqYcKbizjDy65K",
  "key22": "3CRQKFg7qiLzkLXHriiGupJZZssZmr7EiBjyJVCuB84RmXzEWYU53GdfyRxLPMUtQFCXYoFMoqPeGAnaQUR6AWC3",
  "key23": "2uF2CESKdTwkd4w8WpMGQ3hbkuByfC3JV9WnD1HQnhyQipnHvgfzkVrHvHW745dhraaMqHxiQpQhArnZPoCd8vPA",
  "key24": "4hu9gjqLk199fY8AhbzfCerSnh9K6Cv2TGcZbo9XvcKButxPD6w5hgT3emoeArc4tSuyJr41q3zyD6tXa44G1sdG",
  "key25": "5463mbxi89URHc5KFoPE2ARAqMcShE9DDX4Y8ZffR4TJDEw87qvtwgjYbBQxp6ev41nPYA4yFiTArLguLi3m2UgV",
  "key26": "5GbGeaY8tGLXgh38qB4UVMPyzizc6epUdzEawBd3QfvpYQUVMYSbfWnRFgHMCpoh59YVxbAhZmyRsYZ1ysnTBzpW",
  "key27": "9kWNUXgwjsLQ9FffA35kD75CPUnaq94L6r3YY2Sx2hdgZdzb9acEGB3QkPcZFY62DJenSRxNQfhnLmiXJPQfXsq",
  "key28": "5ck7CCYEGqF7R3wp8mKMHQCBL2Qu43ej5CcfsgwLXDU8jQ8FKigLQNznreaGUUHFhBPGVgYxqrnorgBg71YQg9AB",
  "key29": "2eg8agZmfao2GJcWZFcWykAydEN4FcNDhr2UdV2wvqpg3z1KJKTWXuhbFv6CJVFYRh7xdcdmufPqFBHSfNUkMhdE",
  "key30": "3emzAcRTYWDmeB5XQR6yvY1N3gP5DppAw5jnE6fAgZHqzyKNVysVNQq69A6SnPTZ3ZqVrBndqRCAvi1um4AQioMW",
  "key31": "4tA3PQFPz79bfAr4ABWPD2bi8ioXMed5zfyKEQ58y2KhkCYFT8vELNLHeze74nA95vUPxybNEUnkxdeDnFjty78r",
  "key32": "4SDF4qVF1ycEsgBhQDqbSokVoVjW7po7iPta5R9efhDRUXcYNZKnGWPBnDfdBkUFoQdzhhD7NdNowHGppdhQ8L7T"
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
