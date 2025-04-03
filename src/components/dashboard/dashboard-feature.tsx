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
    "5inNedTb1puSt8xvsktjanEX4oG2jHvWvTXhpECGtBtzmjkxZrWdMnUsQD3FxkSC8A7duddG4HFhEFAQkxbB1m5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pb2w1k5S7eTRpaMwgE27PmR8LnM2j8AB7WtqKKoU7akmiAenVmj1rbSZ2MJb9EPsi5qXkWHjpVoA2qCz1JZq9SF",
  "key1": "CLjU3JSpM6ntjPA6HCou7e5ZfYjwjWeWLsoGkqFR7mVNs1HF8BgYUS437P8ixvYe984VMZB7o4dBm1MQs8xY4Gu",
  "key2": "UnNMugekE2q9vZqcLz9f8ThYQRWeNKbBdZi3qKFyYYiQEKvqXXJkU78CfTkwv8CQ3f1PZvzNm4EUPg2Li1fcG38",
  "key3": "rdy7EtASvks8mdQVZBBhD93seQL8ZxBM8zwgvLkhmSTLsDGLKrmpP82Kya2RJmnHiaM83NKDSNnmq7WLjTshnE4",
  "key4": "4KzPyATQJxMcJBvh3CEvJSVFA2Lfo3jtXFQiaAZdUPDFfxCrMEyG6vNutCZ3i48rDfcJ9E5m2peLBd5DKNXC734c",
  "key5": "5tr7dsL1rm7M5XhqTFbMo5fseWYWGzjLwcfNNLJBhaZdypK9qDxVkTUpCxcu9Dc8iPEKWyU8xrxhHfuGqkqw7hNe",
  "key6": "64Lsxw9p4Lpv6bbWQNjpTAvAyycRjYYdgaANxBWozt8cKvbkxwocEK6gTEymzvH6YML3pzRkvX628iXFR2d2AxUy",
  "key7": "45qY6NnVesvVcRNS1KrmFdkpefYg8DPgqDzTY12zLTj8Vc5Hqbn9yURX7nfGJN1HMEjQbgyaFqMzervyNQhcVNSA",
  "key8": "2yLvDZEfnoEhMkaSGqjVy6rwvWdaFuYF9dMb8HBMzZNjH2xW4qT2qWHVcd3MAN4CTaSHGZQACb7szJNTzppjhwJy",
  "key9": "XAXdo6dPrKdpftdwx1aX3zJYFJPUckADqsDs2JGiUvjUgW28CDvV9UK2W7Go8xM79FcHTw47825Kw3C7DjWkA4q",
  "key10": "UwDRubdj6VKi3Athho5soBjqvVDBmm34WPWdXGts4rmJpUdfn88aerXu6KxM7yfvhbQQcWDPnSYCUveMUpLereo",
  "key11": "2Saujw56VJQ7wytsu68rwdYa5MTvxZwsHYYZcj29JeAeofrdfvtfKFTh94A7a1DtHhp1jxY9R2nQC4sBEGHMFrYx",
  "key12": "25BDzKEqiQgCfgM1WAib4ZP7HApUNiLtcVVf9NpHVauWQqJkPDdYAPEPMmpTHowjCoLzV21jG2cHvaUCZxUzojPo",
  "key13": "4bGqEf8WELFLFY5mJ83w8aaZ3PVdEhsr6sxLBWahZ3JCXsEQfRMahiomimJsriuj68PY5vGCmCjU1N5pnvZ5ubCD",
  "key14": "4NNqhMRZpQegLF5jGvPRjfFx2MSFU73WU9L7UoWiJq3Ssjuswkv2Qr4sp46zK85e4vQtRRDhJfwrMFZcc1dGE18D",
  "key15": "3SpJPvwJ5KnkLftpYTTPbsHx6caKcbG4Wutru7UhRH7eoqXECzFdsG2K9ueMYHZ6AmXENWp5yNhPTWtCYgbR8woT",
  "key16": "5hHKu8X4b3nBpRqGk1Jny12myhEk5N5BtJPEpoQdTbezp2ktFDW8ayfSVm7rXQRZHMLAhfxrd7YLqb6s2gcPJ3cc",
  "key17": "5R6mLqJ7FcZZbDpUEMPPKbB6D5XYkUDeiK1PM4jFA3wYyQoZXJVdgggEMGBybeFWQmPaznUxBGkVnV5aDZ5PL25P",
  "key18": "29wsSa3dPLw44kLVr5MP9jq14mg6EovuEkuB1ef4GRpaju4DR8ahdNCE7NgrsN7i3BrLHhpYYSj31M2t2RftQLmw",
  "key19": "4SeR1cy8ShvA4XKTp4nd5A3oR1MHKhvaJVfre8zsFtA8YGpkUsUijADaPMQGAvSWyTxvUtSs6riSEyE5WiYAADkU",
  "key20": "4Sb2q9QUjwP2tEe6N7gnnxVqNacrvG66PaJRzQcGBMrVQsV1pjXAcL74fSQDx4YK2twSg25pJ6Ta5HtFTUiJnGnj",
  "key21": "5r4Ctn9zHGCYewxv9Cw2nUtmWfNoibskqMHyD5MonMiKDHoZmdkvmrdKg8SjtLpVhJHn5qmLaVLD54JA9hgsUzhe",
  "key22": "4kRyK1Z6KCURAtNdtmvmLmgWaZEVcmxRHXY5275bt3TA3mavLMNW8DhTswiSdqB2Mkd9BUPHfxJ4KkfLUEDQdxAh",
  "key23": "2e1Z37gdbyRAmpFEyTfrgGYi9t6jxPR7Mj5v29NhEhHGPJizBC4c5aDPoA77rVyktT3uGciyfF7TxjymR1ohXhDi",
  "key24": "4fEGGmxgjbzEsPpjpKbS8S9UCTYSWn7wBUfBhgtuD6N2rfZ238s11iJgNB9bjEpU2tB8Htw2FzM5BRVgznocm7Ey",
  "key25": "2KF27BTDwSFXg52KUidyQXj27Gpa1xpnpdWfBSGGNWPuEiDvkx9kTSpK5LjbxeCpFjwypFU3aXLob1FpbzTrEho9",
  "key26": "3VgBPy595h4znvAVyF9cw5zTX2mKt42EXo5VBWy6VAogCSU9FV3Y2AqCVdKUNTxEftgUBrSsszHek2tVCFm8bPGZ",
  "key27": "3reKsuzaj7VzykA9tFxh9V3i8iCMMfgCZmmX6qf8gdPVzAQ9Cb9Abv1nurSneGqew7r9prqam3Urm7bwSXqoy9Ji",
  "key28": "iqoh8Uveg4YEHTms2BgRwXu2LS2AZ4RcXp4iGrr77doyHBjnVSgnz3gbfbRJqu5mo2vA6Uz1ZGnbC68Zgus3rZy",
  "key29": "5fBBPfuWniHf5zYbyoxfSEaEZSXyRtRXNSJUmvg5eukAJYxv6wz8Lzwvfuznu2S26fWCeHCyJxkecYX8vikzskm9",
  "key30": "4ELEkJ84N5MtrbAvUP95Qe42iWv49otBnXGCkftF1RHE3sD2gysr38DNGaWKSmT2V9ru8jc6JrRwd7viufvDpnfP",
  "key31": "3fLUGw8NvNYru2Dx1avRGFswMAjRat8MzY5CwYUYLHejTN6o6Lb4joz6UQCBxNDAWbwHF7Qem4KZEN4qacu5eV2K",
  "key32": "2i1Sf3wrDRRZrcb38jmFZchriqPTqYe5MeeNrYbEVKWCUqR8KmP9694Uy2h3NuSGGfcDh7Cr8m8KaVSZANQoMBgp",
  "key33": "3yhNGcUsYdbk5z3GPhWFvWxJ8xGtfBF7FY6spHpSQ7mXCHf9edG2B3qqUzoiX9Xgv5YruKaZYMhNLTPv2q6D1uoQ"
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
