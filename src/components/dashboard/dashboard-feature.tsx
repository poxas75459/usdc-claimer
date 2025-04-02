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
    "46YLRQ8vUdN89RX6v8ji5oYpcyQz3qsaESnooUZvxuxkehzfLdyrpBWKVZhwD4iKHeaoBXEmsPeQV2EQiBXBRKYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdM3WUQiBA1w8rvVE8hviVx4D3PGVtN6ytYByLsnHSmo9wWzzDy4VyKVhaNgpwZFAnFXo1TMj8ziBFNPZprdf5x",
  "key1": "4xqujbdA36FkDew7qCeUKExFitBg5J7J2BGoZVwmDL667Rvq8SqdU9TenoZ3FvMDdynoSrkvc3To8LwxAhQqA5HM",
  "key2": "EnB1u78WDmTa2AupCW6Rq9odLvsyZkSMQ7PyHQpa7sEkMFjDWWHMH9bDHKNRuS4snAV3reCGCr25Da2mXGFdPAq",
  "key3": "irref97ncHtJzziw9QtwZotmrcgKCezsFZvqPZLryw5PfZTzbw87ms151GahcDAYJbNqX2MpiFwBkpdZh1mmvpC",
  "key4": "3EdNVK5VjbVe5e4NULXrxxZcWn49bf8PTwoNGjbeALtC48L5AQRaqCChR7jjfj6FrFNveiWHUx6kPGAJNxG2D9L7",
  "key5": "4kQgpWmGgZPbe4fHKgoAkxNFV8jeHk63C63nVXC8PtR7zrSrsC9yTqRs2jpzuSwuWQBKFjgtM1g6HEmxmsmvHpLu",
  "key6": "4g2NX3qFy2M85P3JkmLaG6erRQCFwEHi2RTAUmNGY9VgsXai4reKmaN48TqNa3tm6wZkvaTc8Yr2chkcFfgZDMRr",
  "key7": "3H8Z2odiLuK5pnve16HRm6Gqy5BZMBPHinttybJfybRR8b8ez2Z48NSJgdYdQL5T3uH8U3oyvPo5gu2k9JiaWaK2",
  "key8": "4WVhCqHFAUQQ2Phtqx6SoBJXx1DgiXJzYwoqd3KsKzpEUVH25PYgRhZ1dEZ1N6rMdqGVssbP1jdGyCNKtQmEchDw",
  "key9": "25SyP5HpBxkH5ULwQLWxAHXSXPtv32pDudirSBG6YgPiMSoYVtVrYJmcoNCptDynspopQACkvgMWMNkmVSv96Dr1",
  "key10": "PXPSk25eEEzDTwwCkM3MAKyosX27tcTx1hmESSgS2jQgwwb7PA4UnZV6GaXgyMFNG9G2kj4FZnw2wTb1c4ECt8x",
  "key11": "3ioM2t3TBqg1jXq1iPuv58sG42GdsczqVn3U2MAn8HfDAzDtXzU47iUyC83PK9XzhjBSUrBVNYxfRWtcbqtrJVB8",
  "key12": "58R6oJNLANpVwoXChAaU3jSkgdLhvcoVJBvJBMFLUw2kwhg9SFvTntqe7x6cvKhjpXqLbeHroGcUEYFoLafcnTy7",
  "key13": "3EbpLbiB1SDJFdaSGqd8dRYNfpEm53tmkzUsHv8jPmSALBZucWJPi4cynEmzFqYEtEPSZ5L8cPpZCUTAC9Mow33n",
  "key14": "3MFioTwcNNeGaix4pEhfmuvvigonA74KifUHHggcE2FPa6SiccrSaVmg47AzYMaRNMaK5nsgNSpJdpQUKUvwpsKS",
  "key15": "5qeDfW7mGQXAjL75cXce39GGqC8t9Nh8g1QZku2JBnPC4eekeYfqw5PPBV7XvX6dMcscRfKSoDGw63NsEqjJbqAQ",
  "key16": "3UjmELKyR9nrSmpQc8RDnam3dweyThr3pDsTEPRjWqHvudBC2FfBAeLNB8fdm5cLPSsmrf1wPQrEiAwVMTN1DBBX",
  "key17": "1G313N4SPrjHdaVFhGaARrFmWzpDJH6kUWWHPWFyu2BBj8u3xzY6X6iw8Wi8nhMYJ9oZ3vDhx9UdgNZxCdXWr2H",
  "key18": "2MgctBKGcrgWV5B4Cs9q7WRXcGNLGa8rzFDeTapWeizBgbWSp6t8a2QJrvxaW4kCDSe4hmUc1GBeLP81cJwJdi9F",
  "key19": "3M4BugbJ6haryVs1fH8drCqALyqRMPvruKFfTX2GWF6qgKypVmZAJCgVZcUGy8ggEmmbfetYmZREofFDV2UXcUSb",
  "key20": "21n2m3FFrtLgBSoARNeqeAq3VmSFbojQaJkMzBvLNUokLAmGX8VRbyFsBoN6kGXByjZNBiHKddWCFDfxXjdBPoKV",
  "key21": "298WsmUphxSj5EKDYa2w63W1RFRUwiK8L4pftqMTrQiCyFuRyAjpc8STCeB2WEp9gZkCS12vuhwurxDs1Be1fDge",
  "key22": "5BcN12zF7bZicvfCNUJ4s9C57cjh7jvhDLXCFnPMSRDKz4K8CufJYPbT1mGefWuoZiHjWWBfbMbXFBgFvyLEUMgr",
  "key23": "2in8nydNegZoodPKNCLGiLCUruwVJfGbVfTe31gri6P2ieznfjm8zVdp2T9NoNKo3R1YZkdN9oozu62LEGd1aim8",
  "key24": "5AzfarSXmYs9r31bwwNYQy57ehjxr12GvYz8TWFEADVpAgMGaiDMcjosG9nytW6MadWbYMh2aVg9nkaVihjVb14i",
  "key25": "5iyTHTWAC7vFhwmAwytwdxE4RHS6zjDuCzbxQhKGb94WVUXxidCvtG2GMyWD3LkhExmJpYY115bDNpvPAxoWq8D8"
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
