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
    "4w3kNBedivFMxgtDXbBNQCfMegTB4L6SP7R59srUNfHpwnnmReBHwX3gB5fJsgG18e4qQKRTYMvE5NzbQ95nR9WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1S4moJSTpPxztQfinkrvhUi3Sp16ALfj48nnA7AK6cdpqXXHKq1axiH8ARMgCLc82iAafQKqVyqumZNLYAQr5wd",
  "key1": "2SkD5kKnykc5kiqQc44ja7piSVkdWynRtUxPMGBfBfZ9dFmP5ReUMf6jTggeMsToxHcMKmSGZ7jzx9fXyqtTrSVn",
  "key2": "2LXwXDoscwbA5PnekC9knWj3AgbxrFM1wmk8Wk4ApvaWeK6712BUpTP2NBPvE677AGKbZiRSdPNqKHqhRY4GQGgS",
  "key3": "31HW84zrfZm98Q2DwmEF2qRCU4BEWvgFAshgpFKVu92ACCPnSaGeAKM4Wyw8A9fZGtEtmcYYBdhCV6SNJMhaLLoB",
  "key4": "4qeVADWFv4po2uJMZeFE1FVsNEqB75g34uJG6VDJCs8E3hThcRhZu2ccHRUt26moBM5ScDWjv4hBggzrK4Hpspf7",
  "key5": "4fNLAmYT2zEC1WPKmZhRKE3tBh4aJ4RCBgcZ6qLYB4wZ4Euk96NV74UQgpZT1GREQEompW4av4AAjyvWpDotXZzQ",
  "key6": "4JniaiEPbebTzHcXp3Sj95V5gW4eCGurZ2hoknPFtenBgsLL2CxRhdxJxnqMEGuZrstD9e6XzaojoBtAhyLEsN6w",
  "key7": "5NHnn7ftMDBguQf8fWkt6Vq46u6uDFmg1egZMAdPGM4EjJvmfQW8Y8VJWvJS3ewwrsmrLzyBcDiDhyJw23RK2kMx",
  "key8": "3RcoCJCKtNcmAPbzYruDEawr5oLJ3eaAtLWCpfvfQo1VchFsZYFktmuHUGX4gs1PSvqwN3wNHVGLGcnRdKn4KEQW",
  "key9": "2MnYS94AaFrP5RxkW5fvFC88372RU53D7UDMJkfB6pwMVC4JihodEfSFUH6D7Cn1SzKkFSyyPMgStXt5x9mEWKE4",
  "key10": "5gPXDJhxNDyyer1GqHxUeJ7uzZr9DsUSCq39etvZ7VLfeoaz8EfHawXdmnXRRRtF6Dgqbgs4rH1ZpeG9kW6nYiKa",
  "key11": "2UoZPuCFqZVQAassTQj7C6diW3XxjcQJMcVXB5VHtC7o9hom8Ap7ugFooWjSg9RJudYbAKcb2uUzrXnbSgGePrhY",
  "key12": "4AKmZXt72HUoQeyd2r9hXUAX65RwUdcYd1CyR2tsg7D2kkLKfpngz866QUVM8NyPznHPmMV5uHxbs5BPJqtH2v6D",
  "key13": "4Gk1iDXF7rKmqHUVBG6NwEb6C3kNzqB7yi7di5vggsgyYW3LPj2gG7eHrSavoWMw5k2erpVJ7b4MRYHFztETRqTf",
  "key14": "3ZTeUxHbxEp6pqJrU2V7w4kWWEoiktqqp8PpfTYLDfpbwhWQo354F7p4mTUqbSXaKWvbvX3cYsxm35wfqEWriD9Z",
  "key15": "3oVUCCNBWrDwaevNwss3WHiLhktfRXKyAmcSfzZjMqMxumpphpMrknGe7pmhwwz76JyssbSzjt3U3FmWT9ufV6xC",
  "key16": "5xNuHpuK1A7m4KbR9d5Nuo12QCoGYajTv2voobC1oDrX6DptWUEndDkC58YrdM2ND8Q6U5irtvYzASAdVBNRmbPn",
  "key17": "3CQPi9AXeMoxytayc2GrUoY75ALo6xX7iJ2PzYm2aLsGoDjmUjhtwdwSbeiXfu5iYYQuks5551G9Lx9GoXAbdrTd",
  "key18": "4VszNHog5tgvKKVhfpYKVUbBHiBz5S2vXMp9hMUDNfiKMEiKQpjejfimeb59P6KbQzZcMoHjwtDFgfhP6q47TRwi",
  "key19": "2gkW1z6UejHq9rY5DyE7dtZ3jKSNpnYaqQSbvd9zPMBeMQ69u1wyKULJJEyyeGq4iS4UYzcyuSeCQMa3SSgZ1WMj",
  "key20": "kDkz7Nqs9dXciUjyAwbpLiBkjhDy8yckb3Gkhx2jWm1pjoQuYmPPymEBWgxo9fRtg2xUYkDwa4jYxLNrjk8BSdg",
  "key21": "3JpwD7225bukMn5y5ofbhbAPALeayGbwUtHNiSu9yvSYPHtJCPgxmew6aZRadmUVYwB39gcuqtHpX9xfgaWmyHaw",
  "key22": "4rPYiA2wxtXeehMLuToba86LQvbzPU6BzoXFkGF9U89QdfXZtrh2SwEpw9YKPEV45NiAsRkuANQ4nfx6e75K7qkk",
  "key23": "4hNMJwGf2C5iNgJqUe6LdW4QhdVx4DvXWQ5ASbGAdqZowVs2qfG1ozbMcfC9W4UnwEvVkeFNiHh7WiyYHbgCBzLY",
  "key24": "nXY3fxLKoGdWnfho1qT3SWuQuX6YrAk8pdkrXhUTtSd3YAnPK8C9jZ41PYDJzWbihhDPJyyZWd5jRghXcQr8imP"
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
