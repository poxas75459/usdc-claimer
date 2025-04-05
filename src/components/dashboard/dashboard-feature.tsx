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
    "u31PWTA4YkibbW7hd7jTobyp9415AXtYN6KcoxsZ47TLCXb567TZ5vScHuRViSBjcsBN8RXceNYTTBhu1h3wv9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BJZgaPS5mjH8jQ7r8McwAENjpYeVGMyGkAb3tuJPagorVCs3Q6kiNA6HNJGNEtMUPaz9HHvVyox9WzuvuYnSRu",
  "key1": "2wxxrNxJMR9SzZPTLzVFo2tUJSo4DRbADk5KHHiqtS3s5riPpK8iTDAmxY5YcqkY25A9JnRDsB5kP8BJmdcTDDyY",
  "key2": "4y6p9W5jYPeXhfRknKAsWWBcUGwQLup9KSvGeNpsS8T3pwKHnyFRVtkz9yiQEVDckdTkDybQNSVkCsDXWH87wB36",
  "key3": "5poeUoWrYMxyRtJWWeKJNjRc3rbDYZaHQxvcZ5pkBpgAYt4soAsHryYbtshPA6dMPcf6vjBGhduhVsA36pUtg5uT",
  "key4": "2nqiDTCghURh2m5yPboBqtuJq3UmYxoXMS8q88BYVDK7LwBmYqWmSMJyys8oesexDWv3HNXx8P1GTraTLHWGFHxU",
  "key5": "2QYScyFDVbtfyab4fQk3aBzq9fPNBtzTvJcSHuxx6CfZpnBMVLAT3sRrMDkoN4WpvPSTmo57FWZfwXcgstSjYSq2",
  "key6": "3gnJdqyoAQ7APNgtb9W1NcKoSv3F6yeP4xZpbpb67DGzyyxSs3dhWFsJDpTzKPGmUivCEAsbLLiW554DW2wQpFcP",
  "key7": "4MkQqfJre1Xjwwdm87nHkragxtaj8A7XY6dU7HxRppt1gHZFrxN1ipt1rXX6kNPbhEjiT5Axpu7GQe49TxpcufD3",
  "key8": "5S1SKGRdt2BN9Z7yjkQh5fD8pmJYkaF2d6dWMxXKx27hdpE4S45j6ZHq2m3bXdvtRe68vQkP6BqbKjEdFVxvuKGS",
  "key9": "3oPxJKawDKSFKS1wjwQ1rej8SYhEwvQPK6krzZ4Md93LUDMuy2Vwk1AJs2kjFjQLRTpVQGg2tPhXFhWga6YqWuSe",
  "key10": "TBt7S7ENbDq9Ju86dQGBfLCu31LzRrg4vNaQ4R9MMLJsmJa4ibnj8XVnc3gWSr5ozBAT7Nv5D8PiN1KipFmRBYq",
  "key11": "pzdA9C1j7etLn7hmHsgSdiiugj66PpTZNG7pweM7DVmGQTAcKUZ9DZriLaXNXsWC9yWe2kDAPvuJbhz5mMtCr8y",
  "key12": "ggpbAviuPdqWZWQGwkRuzmi8685ULtGc8FbBVxhputYrkdrXJ9bsNCdBEsCL3BhTBsHBiKCoTTcoKCR56ZhpRn6",
  "key13": "2C9tBBLz9xm33bup85YeqEKfx9W6QxSGY6k1MF7fJXk88DvBmHxGM8fhNA1svgWbwKtznGPHLDUK7H1dDowR4MGc",
  "key14": "5RSG9RiwJTty1poKtvSenVi1UYRGdHCekgm7dnCGtNdLvpcLkAzAtUDnn24LxmqnhMDrVzf9SaCdx85xVRC21Mhp",
  "key15": "U74bsLV6A9UZHym1fNpzYv9n47zf95bKJAYP1XsfY1p8yT9oEuEsVQHZZtCqAX3KbVWWoseGeg4D9vBS4zWpBSk",
  "key16": "5eiS88Rw2nxk3ZsqDwSxqwDwjALfJmzCC6ypB792rEB61GTKSTbC9vwFMu8wSe6SW52oakkcVPtnwvjWXRyPcyyV",
  "key17": "2vsddW11tvFdFfuojQ5Hq7Ju2WEBfHzHA5Jvm973713tFWcXHRLWNttYdQeBP3LyUD2XfayuHiVG6L4TnQ7jXkX8",
  "key18": "4yAU7hY1n1BmJPenT71xVpptfyYpzFB6tFkwVQPiosPRDd8nLbmGDSpJzKBUS39KJrwWoPKSNUwQL33oqPiaqU3Q",
  "key19": "5ZBricgQbwFiQRjbdPWEFSfYEuNDoxE3mPTE79ExoxndXTf5b6cTa4RfKbpw7cZyzijRq7K1zsRHxUUiA7uxcbf7",
  "key20": "MxJ9sFnXfxx5WTaxKgA6xi2Nu7A7rE1HpxygccNgNxmB9g9R87JRCsKtr2CTA7o3fRMeUgVgLYd5bvSJ52wwLVr",
  "key21": "2XFoVLWUfBx1appBJKueWQ3XAmFGhm3UQKKQ1SrR5s7N5gFtGiM68LBPXxwhEeY1Mv1jGm7iH9VB9RKUyDZreJHj",
  "key22": "vr76LeLV7wMsWRz58Ybwqa8af5ngmEk61dEyuE869ukQBN1Uk3eSyDWpApfVJkLUKj4EqNyD4CZADAxiYbiFDR1",
  "key23": "58PezCnx6eGFHix2EEXqqSTEtfy3NWiTF3FdEWzCqdecL41qPdZ9UQvVT1bAJdzN7aHv4ehj9b9fLBNbn9VCixLY",
  "key24": "4AwS1u2iauhu8HoxaBLqLf3EdDMFZs1gDjgBhoSJu1Scm6d5GWkUz6wEeoA9r4UaYp4eqRLrrjowDdiGjgQqiSsW",
  "key25": "CQZo6LS9CLHchFDttQkZ2MwRYemDBBPT4XRPAsY1YiCadv2XhKy24djRgvxJ8KXkeZk5FAVnBQnvy1QrutZuNj6",
  "key26": "9GChYGtkghFZAy4daa2wq88NkE39sd7HxaXLBKSQf5VfsGMMxRiHfqdDn53rbuQZ7qGrX8PMChG7rN7tvBTowrs",
  "key27": "4ZypmJkz1ym6S526W8U1JawV2MBsFKXtpPVRzfmnxGdp9kAtEDunoKnhmasb1sN2SfNW3izKGwNgbMCzd9oHu7Fs",
  "key28": "2HgUhoBM19bfZnC3SJkymfDJn3Jfb5Mjs5ZUsFxTULywJaKUaykTdSNgi4FpqdyBRKPhBspofmiZnb3GwifM8bJd",
  "key29": "5TDXusMVzH8Y5ZHaTZ1zbz9kM8moKC6QsUD7o7M7VbvSZYe73Gptndg1kg8bg8ZMqKpwDpqcLWczS9dyAhjV4WdE",
  "key30": "2B8tRHEKQA7EiA4DgvdEKLZPGqF5gTcbbBYd5VW9ofd97FUhNwhcd788EsTiQBsL5QqFMavkNQn2f4NrtaQJwCh",
  "key31": "tfyNaNJys2nxnPXNRx8r9SN3DqevZD7ZZdii9myZJ81ZkQDV6zkZfMwuBCrTnst6Hx9QcS8iNv5M83syPPuyQYM",
  "key32": "SsFFN41o9CbD3Pxw5gysNqXUYLF7zTCEiE2mjxcdYadAYhmLC73eSMdg7noYX4jXoFKqmLLNXJEAPtq81WaDsZB",
  "key33": "66oLBvwqGTC3xZGSeMzQizWe8zrrF8rz52J4RjM3t7pkxJEuAp58sU9rHv8tmxDhopF2SZkSP2kXmy19rMXf6AU4",
  "key34": "2BJh7DKqnNkgSHQJbDvL1nNVCLYhKYWeqnzHAYxsG2ak7NM7UxkXAq7ugKGymxkWsJV75CnvmDLNLNZTos91nsoL",
  "key35": "5NtNPKpPT6Hjq2TXDeo2PZGrQD2t63y3vB1LS5pptDnbcxLFDxnmYaD6ZL4GhjTwet7CAutJV8JdwcpGCtSUkU76"
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
