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
    "cTMZyMoY9gRtxMngWeFJggq3ES8iym7VoFpTpHup7XeY3rqzcz2F4b7hTCNs4PECiPe6KyVDHpC1cyc9VvmmkxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NsJ6ogT7Br4DztvNPJkRt8t43uioj4QPvVGa1Xsa8TUV1fWsu6NqtJSqMsPhaeabfBaLstZq4SxrCcSc6xoC1Zg",
  "key1": "Wghcx5PtNMeWPFGVuSbPwmDPdh3rNXHiNWgKnGNBGruoAME3ThJHuBz7sMSYVnLLzjMWFhJtA5St1YiMKBqUuuB",
  "key2": "4oArnMuRPFFzPKNMQEnt9j96iKu1Za9TyAsQyKtm5cpnoUJGLTHYqkH4UsqzU3TgqGygGGPbECRAFWqUozFB9NdJ",
  "key3": "5hbCfs9td9m9EJebCLjx7v22mLKUarqzYoTnZeTUTEFBvVL3qSLZjkZRuLwuZ1Q6zGhCq8PHm34m3kx3je3RHEQ1",
  "key4": "3ghPhawxGyzK8fb6K9WxcapTEL7vERYfWBoziz5ghkUFBzXvi7V7gGEQbQtahNoNHhkkGDqXPRXYFhpc9qc7ztaQ",
  "key5": "5PigJd3G9GZLJXNtLhdBPcjoVmjKSNHqCcqVX6Z5kEc27SPoXeKxqzhoSCAfEfYXiByQ6TSwTrbqoxJmMfy78HEW",
  "key6": "63fLt3d3oQtAesQDJHEmW5ZarpXRzgCDxXjb4CUA6uNhQYn2xRVS1yins3bvV9xwNps6VSuUqxGUBoYJR4NF2KXx",
  "key7": "57pQofovaaaUPmDSZKVhgGm6fNjLF2cEGjvdoAc3TAYnKiXDiUVo4Ti21kidGG7Neu2sGyi61saZyPDiNyLkWEap",
  "key8": "5rm4MJ5B8b4YnVT4rLc365cfn4NxwWLEtv4ZAA3tng5zDKaHs5d2ztZevtjLnVjermnpx5KDCm2RX3r98fhEGjQq",
  "key9": "4eAoCvh6NRLfrhoisGhkmMNgzA4K5T6nKdmq3TGNnCABkbXupRg7c3VknccjnrdQxbDnWAgPZcMpa7bN6kj2Kf8B",
  "key10": "557TNvcEZuhkx82gDokD12sNQddevjZzE1n3HV19EbRRYdq4dqvxk27MdnoqvYmjBYj1i8yy4ouXuMnYxsLHXMo6",
  "key11": "48nsGhTCj1iCcQ92UkgN7dHuv3Q5vhh1CMisS5wrYsT4L3X2SFS2dmfjjrxbWeZVDx1VFUfQ4bABZFC6qh1gAZMy",
  "key12": "2asGanB7MTpbzyUTErJ5wwNAdYXoJ8GVxrFgacj43MZgtHUHQvRqnWRypmX9qNov3GxRFujCvtJtpg9MmNWzZPgJ",
  "key13": "3vTh5RfVfFmut1rdCXjhpJudQATbMbs2viJAQxNGNcMYtorq8sRAvHMi7Zui9Rr7eihX3enKLc6rjXn5zVsKL1PQ",
  "key14": "WkWuXqRig8y3FYn7RQNRgkEb29zr27B78JdMfmfwrwvMfTADcj3iWQtkxW4Q4uEJSNdysgdNQmHzS4nZJ2BWqUH",
  "key15": "37of5dd7di1PeG9dF9nxVsygdwMB8tbxwWcAL3LRMmnMDnMTbSvrfEUz5UgAF6q5hdsQuHZWtQkTym1zEMHEbGvh",
  "key16": "5x3DekXMAEB8k2456hQDqKGFJD9oTysJVyAoZk24DXr2qvb13TmafuLimWhTTVMcosw3iti31T3xTFUwzZmHwb6S",
  "key17": "4DJzhwFnBUBmszTRp2z78XBDfW3yzg2jMUTKUKh2syvazdEphn59rGyCzQEXQw9fSUMEABM5w8FkaqDLCiKk8JW3",
  "key18": "4VXD9vEYnscWFuGwyjdnECRLVfYxBjB1k6gALV6NpW1PWm4zTiRQDAfwG4J851wJMAt7eK2RUKZr4D1xj4xHZzRM",
  "key19": "5EBbLU8x8PAfGYodTCtmW3KDwL7dsXv3MiDRWSbdLyhaUuA4QWnA63JjpvPk4FJedeAbicFq3UtEU8TsHVdopibs",
  "key20": "4uHvvshLd7DTbQxFxb7tVzxRx9EHY5WyiJfiivtum3bB8a88Qg8EESEkfzLYKbNAmHpCJ8JqD6zSEFT1oxxTkZs2",
  "key21": "Uu2CgEg2qQjDTeaESVR79fmgmWWKxWriNHvY9cjkqNcr4BVqESAbQkrr8A4o3HVDmuTja7SSrFMnZsX89WoFbWx",
  "key22": "5i5c2L7dj1RsGejGB89iE1x6WRREb4fnfY42vjZdzC3c9HMqTaPbzb5fveRHCgEvpjXnXR2BSAUDeKSVf2EYMfAS",
  "key23": "35XkgLRPrqFxGMy4Nns7Hbve1M9bmDQ6dLmsZ5RLUmYftdY7g7L6LoDpZBi9R1rPU4wQFTY3efzWMc6XmtFuvrgg",
  "key24": "5xuFK4wDtURE9XuaaMTQU6ctDZY8tnmdqQNWAsdvV3Y3RLJ4Z38QuB3U5Dr4wDVmtxHipEPnjdyV68zyi2dPu7aq",
  "key25": "4VwmfiFj6x6Kbk2ehEAYFdAZn67vME7wcWf3HLYskYotdnpbK6W5WTn7Sp9HYHABaN1bMmt2sqMWw269DJUaFdMK",
  "key26": "4iLSwm5czdWF4X63tpRZMn1CgQDW3AaenJsFvoMrPdMuBG5dBgRBCxQZFT3N1zM9WPGAQQoYeredHmLqPREJXdWw",
  "key27": "5j5P65EcBw5FkL691EfETbF2DDNX7Y6KiJ3gLMv18p2B8Yz9MtoAR7JE532fmNUDi9ouMy8T8vxipwNiXfZj97jD",
  "key28": "31mTE9JxeBCGSoUXJJVybFPoHU279XXXqEoFdAGPUYJk8URD5ruNwMeKJtaXqCcXid5sJn6KrkFAVuGs7Z8WRACv"
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
