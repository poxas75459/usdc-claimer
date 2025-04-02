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
    "2dmtM66MdcRv4NeW6vEDQbxMHKH9M4ZYFAHh6ajgg35uxrsmZk4KJgQuitBktqknf977bH26nixsNCWuLdoeE9kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5aWbysPmBu1Rc2NbFDntHd9j8i1TKnTDb8xyyqkUcbTYxAydLUfVVT329woJ2ovBfybWBP18R4WExPwUTp6EJa",
  "key1": "4MY5cvXyBbdTVsNvJnuCixeCupRQbe4qY49eRBGPb8MGJ8w2E42deSYxpqj5FxnNgKxqfbqRfKuJYLfNr6xgf7s1",
  "key2": "3p75SRs2WQor1TehtGxcn14PmbWgBVVntfW62FWEjkLsuYwTNk6ogUiz7aEiEbK27rEaP3CWHqBAwPNpq5hVhZcn",
  "key3": "7sALuL2G1oFAEmyF8G89t2DsWHmTrHE7P7J2B1FvHt6Lr2dHnGkPqX7tSd7fcHH6cSGb5aGqizoTn8PyVHjD2Uw",
  "key4": "4rdUtp86Gud7mZ37rMtrXoyDTT1DuDM31MHduePmyavDszSBSpbbQWF9hzJwAqiEYv8MabXXgWgft2N5QkFcw2as",
  "key5": "jW7jbtof9HyC5x2cQnqcFJ8LhyRdkLBQFurnRbmfkcGzUjm37GXQyoHNS6pBkDUBPdqPHgusg8XX5yvvrdoZidq",
  "key6": "3keKQmHvEgT7qJoKK8KdkUKmxaesPaaoEqvuLyzyLiPFPocctBYsT47CYwo1cPbfWRcTKvV3dbQW9qZtbFEWtyya",
  "key7": "5bh7kurkupnNYUzMy2xxpTmjdwCQ6E4ZBUJwp4PWaa7XBDg8pjRVWU8oX72bzYEGfe2wZ4ud4srqJLr4X3CFSG3Z",
  "key8": "FvKwdE3WxNUbU5xkJmhDFnHJU2eAUkwDcSNNsKTVhsCXvJCW2xRwAjN8YEZQkuGyysDtjXrg8KbYVxg2yLD6o5H",
  "key9": "37tgmtyv2Tj1CsdokKkJg5gXKpzoTGCe12fALXXYaQ2eNc7krFYwfJc9yXuWZjrewtb2JiPp4gct8a35bMEtMzP1",
  "key10": "3mpDL4gnMSppKk6q8JN6yVYr1vP6giJwjhwUnXYpYwjmMcZMn4G1vRfU3uGaE2rThXzXEix4QtK8RdmqFgygCsuY",
  "key11": "5QnKvdfdSGp4mAFV85CUavru2pDXtGPuKp7YZSAqWCCNnWpeK4zxnaBCV47xudXmQv6m4EDHckArCHXDW3aSoHZd",
  "key12": "4jMvoWMPMnVWZTq1MfmrR1bgtLTywBTByhd8cn32wPb1so6yeWZhBEw98xJ6Qk1nT6qFYZVUmAeaiHm3jyHQDgbA",
  "key13": "YuZerm9vHWMF4w18NJPnmh8ygJfyAvZNMvaSuv3pXMSAbymfcw8ZDZDkwBEqE7JpA28S4xpn3eZ6R1eWtp67xom",
  "key14": "2k22ZY83hFAjRqUHQutgYhDNoZYugxq5eLM7HQuPZvZE7XYpwjQjAXZJWCBEXXxFdxp7LhZr9xtavqKZpRGTWxP2",
  "key15": "44BGSUzQ2HTzLkYY6454bDBabQkvgCWevAfdh4GAL597ipRjh8oyr6GN3QaD5X7cmyLHfZe3VLWAYjhpycoty67d",
  "key16": "2YzhrAhzsBjxKLMx1TtLMeksrSRREWw4wq4PTwVrEJi9zGodaREAqkMKyUW1pQC61qRvgAGNc88K5UbgYmfBdz7Z",
  "key17": "2PmD2nxFw5jyBGP2wLbErkksCDvnWSnwWNhNJwHPBjyqyBrH2DpCsWASHCakJ4kSJTG419s8ZgGH473njZEi4dDy",
  "key18": "unGR5mvGjbNgvduA9P4r2TDqzAccshYQzQ6DKHXTkDcMQV2eTEF4CRLyQ6C8LnrCR6sSymqSwG7nwrsDYY5dS2L",
  "key19": "4DEkVu2HGrojF7DCphscQjuw6Zas4tDWTw6WheN4XK8Bz8d9rwkSeECSL55SAc6eiDy7xoRDrUSUa8fL7qEH1Kdz",
  "key20": "4zuTpqhSiZFP3UFxKxseC7yTfALSZhoM7rR2DpXkG8aX5QMs7HavEGHgU9bGd3jKG1BEQeHQWm9yHfUSSvJASPNv",
  "key21": "24CgiiLiAvPCCCdQZSpMdHK7cM6jaEKwb53mHPFX4MZvoPHANVFFBB4EyoyVwnP82savPsx1C9qcfP4dXmsZaBZY",
  "key22": "5ZnpKV4grwCdPwG2758t2GD3gECUEQ6yxceqjU8tGVXfbRyzEi9tNX8Qh24oWgipTSBa1NUKUhArMHRVBZ4fkEfk",
  "key23": "4tuPzrN8m62QSnePFmgzu1fE4aWPchQWbFB6v8iSG1EMxFPnawca7At3aRhLqhw67ciQFXsGwUxVW1fTN52zsvpB",
  "key24": "3a8fRHZdDZ7upMEPmM4vAUSsL9fnfjWaMBQjPhXwEevd4mfkeQm2FveR5cV1dJGcr35xFoPEtJwDHuoSiK99BFmC",
  "key25": "4b3zpomwj2PkuVhNVHgYzKBLMSoKiSGvnKrgRmecnu5BMkQGAPE62ZZtwmb2GQWPuM56myEgWsxwDEH1uhWrASM1"
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
