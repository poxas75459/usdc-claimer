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
    "FBKyujsBJ75CjZENqy1uFTyM9FDQsjfARGGWyLTrZ3sTtXixSZwKKeTUm9F2BuwnW4VdsGTdD8x9X5W82Sg5wCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sC2FgVafyoyw2HCj4iaK1TL58ya9Zc93ptzJkSa7oFeNUh2Qw93VTUtYwzeJAH6s4JgCDWTUWei3BciD5wmcFd9",
  "key1": "5ctXHUifz3JoVYo8AwRbZcFhrBgYuTovi8GRDU89A8TVwTvJSXcpFEWChLH4Vmzt8NrcAvPodR4uXd5prgMbzhSu",
  "key2": "65iCT5CzF5bhq7zsCUFwMw6GwS9uHKeL6o1kVaSQ3LPAek1dSCsyPnJB1FRMFX9gcRG1jQnr4nUCUx4Pfvjxsv8c",
  "key3": "2jNGfkCrpHC47PcZsonjvP7dQ9tLNXUMScaQKbHoV9Xgb6wC31p1Px8dhwPtEywNgrNCCLcjzWSrDLq2eRArBnnc",
  "key4": "43eZs7Um5CDjikaThca1YgaAqdTQLVUkD5cpCLCWwb1z5LKWHkjFsSqAtZUCuLycwXBZMP5viN3icW1WdVzTpXmP",
  "key5": "4MMg2PdeQqG7MAKBRQBowgdcRHDFXLGc8wn8kX2uskP4j5Ck2Q9c1sduDh2WJ8wKdU9wrSfqyE75N1oUMoVtCVu7",
  "key6": "3nF6drkmeQXh3B12HzFtz6ehHFUVhjqb71jABsyMzjpuX6s7fGRWWswNngQUtRBE5Y5FirX4CDR6BqpiGf59iWVS",
  "key7": "4qgthsi7PUKZRpjESS8gCH9sewLkcQR92pJR6W2XLUqnMaz9NCFemXoYosc1KLSbdnNjabmUP528EjLL2zFutq6r",
  "key8": "5NwsGJKPVYDi8tJgt85FYzUULFmMbzQagxo1DJDzA1vLBnfp29otGYMCvw5Pk5jysvSFbjEhHHa2H3iFt2qGeSwd",
  "key9": "2JDhxtQ9Tb8VNRUSNsg6MfudcPAXon52ywDq2JMNk7ruUbF3oJLFVvqsYdZdbsbK5HUMWpFGDRwg8Lajq8e2Mbp5",
  "key10": "5pcCm3qkdHK6fgCknXfkruz91oxAhZYMtnkB1rxbvt8XDX7hymSM2kDVdLAbx4qjHBbktXw353cheMsgHuZBHEE9",
  "key11": "pd7fokYtLssCV3TB8yS1iCUVzgYA6CfdCSn6FC6eZ8XWZSAF7c5i3Na19ZZ7ty3a4gFGaGWSVVGHaXU2AYmER6u",
  "key12": "LeDh1VNHgnKmHmHAE6M5ggL7b3gfr7FaKRmqESWQmeJhK3uEMZPiJL9jZD6c9kRmwkoqv8UniPvzQ4ngeSWdg5b",
  "key13": "44B6W4DAaEKCJx9EPRJrhNmfbvi88zE7U8V9cmbX7V3mnQSFZZ6QvzLrf6CBwsSb9aH1B9nif9ftTEk9R4xQhaDX",
  "key14": "3HVdMpWRCBhLrbtpcfdPfAPBFNLaV1TScmCPSfZ7SfrJb4vL7t22YaoCZLQTQFsPeM3dmSrf5X5srCH5F5kCQ8f5",
  "key15": "4FViBTMMUCEyGMvajoXCzPLEecqyS2KSEDLBFLzNVrHBZqvnVN3XLKNNDR2NYuYwzPcFH5WAv8Vgv1XwRzUsAZCX",
  "key16": "XifRPwxnNK6Cvg4dG9FuSHz2U4KQ3qKNP5L9mJswia8RyxVCrjxRM51RvVpVrM7xkWy1FANgQL4m4SCypvLv7SY",
  "key17": "3rpqnEwRTei4JotoRTzxBaTfKM6PBPytHJmKhfyd92LDLjSM1jWfiuSLDf9nRzDviir7pj9aDyd1HqWUJ2LVz1sj",
  "key18": "65u6Y3HXEcwKH3XGq7CPYBnbpNynr9QoCVLwrHzzgjjbBiBRpTVDUzmHU7RboyKZS7uxdG95g9nhTV9UmxeuDqSK",
  "key19": "4aFoxoYUkzT5gG4C2WuX892EftaPeASFADckvPcorQ9HCjRs1izkahV6io2Lhz2xBo853uynzqSqxM7LssmnSXXT",
  "key20": "2ptxsLYru5SjicjgMcJHimCgPYViRyDd5AgnvBZ9ccKwRqdJmPJQbKyQDapSv6egkURiF9WGu54UNgrptqiZ8Ndb",
  "key21": "2t6chBwdE9bwhCr3ugHDAeZBuRApGN41CCzBayxZZGFAU6gA25KRm7x4BL4rUgdEcADysMpEaJcQ3BYgjz6rEiV1",
  "key22": "4aqVNsjQGaVdtCWzuKEM3yRX7kZTFaVDH6q7fRvYsbtuE4uxBTifUuP2PPC3k6a6m8mjHtRP2ydeatSSAAAb9Wk4",
  "key23": "3svivMYzwBkASoQrZzXPLf22sQ1eLbAwa2t3nBj5qhT4BWMGKhcqX7jCXN4niUbXTErfaTo9gZWXbKtQiLaVFcXx",
  "key24": "3howZBtbZqf5Q1RKcpVQNS8vMsN6V4e8MordWHVAVVADSBwdEZLYA2bX4juxdMqQXHPki8sbdSjUuqRdcUYC5RC7",
  "key25": "innySGeW7renjLtxvUQrTo3RqcpvspzjnY3CQA7zAQfJXrvfk8qMbEHkMKYk9RHv8motFuyL2zFXgcwopn7i5HV",
  "key26": "5HufKyqYxMmsV2fFxWT1SF9cXhLobv48oXLxe77ZwsNNmSdRhevnRKZt4xQcVd6ozmRDw6y86MGHf6Dq9iKB7JqK",
  "key27": "4EoyoLciNgVTZLKVLuw8MishM1jt3WpL5nF5daghP8DAz1w5HbK6Cmhfhez3ukMLwEcidaLxGDR47afCxWc8Q85S",
  "key28": "3DLXMRv5TAgZK2uPrCyJ9SwHz7DEt1DgRbdGaX2Z18ZN1NXX93zxiHkKXKkKZxR3pyWdHPPbfLSxau726w1Rz6Ja",
  "key29": "3oy8N3TWZiQg45L8MwsvqyzzvodB2QKDCbTg7LVcd5CfhenSzVhfYfZm9j8qCkvo5BDXRaufxVbEn2DsmW5U7tLc",
  "key30": "3uZopqZRzoQnDFJ59fPxJNtgT8DF8yuFL9XfxozKCEy4SqFHZ3eyLSbZ2PgRGsamULs7rsA3r2RXTxHdMMTrx5Lv",
  "key31": "2TQfDJHGs56ELZJYgGN7RAfRLrWv3cXkQmDriV5ButVVyov5UYxpyfmLoudMqqJGPtMqTy3GCkruZaTz21VdSBGi",
  "key32": "4cbrw1dEz9sezkrcckKxMZwu8qncoGpt2KuHRFBW2MfWWJwvyrCZjDHMYQkWk2DYa1iR6uVLMPrynPYBWmr173hs",
  "key33": "59XkrDTNb9XRqGSo29RqCrYtedgRk5KXZKfz76vFjTgBFGHtjuTG7pi7B6UWVb989os2q9ComG6XCgcBQzKEBJxm",
  "key34": "42aCwSUhTeBKuTcvgD2ChgXns2GnWwEyKsmfSeVH8i93uHmkS4NyXDtB7pgkZGojqbHWuR8L4obnNFKkUA8rYbeT",
  "key35": "22kTd9wj4ut184aeLuiL9MiXSENoHyQaYXAg6YUE25GDBv3xNFbCroCqhDze3i29T3RiddP7WG9hUAJ3UaTZwgEU"
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
