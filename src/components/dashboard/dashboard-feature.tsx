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
    "5iuZyeFYdMXKphJQ3qparoFFYvSjF5NSaQkYMfRApcxAp1Dv3mBSe7wiPEqLybZ6GrNUT71UM5twHsvHgV6vJxsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375WXtdMRb7hff26tt1B6LAAoeQhj5dosfdnut3GLnBAQijCo7um7sNJg8iF3hFkXG5JmJxqV1fxX6qFtDo9u6DR",
  "key1": "3oErUAo4tZWcXPMuxtJEUaxFwHfYj1WC1dpKAjGYSS73aj5WPXT25ofezkQcadVfxgR3sKCefdVLhBwn6ESf6PX4",
  "key2": "5szAMvCxuJm2ukWMq9oB7fbUsL63srentvgNJpYyLtFhSNz6zYxrf6AsQQGjJKBsp2BtNqTk4FnojTQ1j9jeixhz",
  "key3": "2ZDQN2ZwLdJ214qgiic6VBtUMkDtrx6EgqdeoTUEkdiN9RRtox3wmrjaqFkhbnCU3Dd13NRkyzpQzjs4jvTdHNiq",
  "key4": "3YzYTFuNQwaxAfCwj1M6bjXyecaB7E2bJ6gkeooTbW83jiYySz5rXYjt6FN8p3dZQ3W4EKg1DvP99HDTmsB9Ei97",
  "key5": "5yiFcLRLn9gQSJqGhVzBfE1z3DsUHKjNgJfxkUG8Z2Tg58coJqNUfot7aejmHWN4fR5KycV7KnsCvrZvkwUoCKBB",
  "key6": "5Fn1qTamATaQNvnxddNm7NuYCnDpXeGTZzok39fpSc84w62FmsVrUSk5E532BBk9DFo5X7wxtogVKserDvS6ZkXz",
  "key7": "rUo9Lt7muAHwu9NuyDT4gjXmpvtwEqygABjU6sg7XQuLRRsQRncDd91yyqb7yUSuvSZPcAftA2VJg5gZxxBe81f",
  "key8": "4yGC6QyPvYr7uyhnq7cF97Vd8ckNbcVxUxq4aySYTnMreiYs8G8DHECAok6Eh5XKjCZW7p7YDn97tuEJFFbUmxvd",
  "key9": "34dcKHzA6AatF7rFk6yPxmMBoscwKppe1w6oQqPQXP7XNhRdQPfq5J9Z9kGQonzj8Nnu8VEjpdWT9Z2T7omdvu87",
  "key10": "4JMW2wiLnT2SV2R4JFESytp5oEohqY57EAM8Urd9kJ7iKzp7TqBgbjybcj78sgzKJZ4aLknC3rwMjqTATh7o8z78",
  "key11": "58Qo7UNzzekonYd4vpSPyhRtLSE5FXEmXUGfRc7ds6JNTFARXhZNKs3snreoBK7ATY2KisCtAFp1ue9UyLKmzr88",
  "key12": "4E8qCFKa5YN9LBum82vWGe4zG6fyLGFS1uEAesizpLZn3WdqP8cbkCDTzhK1pkGnLShECA3dkhPdQpFe7MWcQeD",
  "key13": "ojsoR62Xh1H7gvC9ofTYGXFD6cEubyYs4uACZFKUBdwyz1fCVPcupMoKitmV9w17qGeK3ZC2sLyJbzfwxm1MCch",
  "key14": "52WiNTL6s2uNfeWEMqmAyGPTvrSQEV1Vrmu2SJAhvEiXvpeQp46vy8EVJeZdRVZAuyKQHr6WLLXsd2VHpNeN2wb4",
  "key15": "5QM3KvtrD8Jg8ogRa7nkWPttCdBVtcx5N3o4mpDAib7LpSWbCLXwVp63BZJukVE9yd8cCp6fixcuj5RPsgAGmUCD",
  "key16": "3uJruJR4KBWAcxLjbRVUPf9aQB6JpFhhHBk3RvHEEJge1DpWtAJ1FF1BbiMLLMD9iACnQj6rGNGcJS6i9WcRFRsq",
  "key17": "2yjCBGZFjXcrt2ZzLUN16svqBaz8Uhxr7N4jqMuRaybUoXtx7fEFS96b5goa4WrnbCD1EQZKeJ3Syx6D4b12ND9Y",
  "key18": "HYQMJh9ypqLVmDR1skktgMnPokT1kraKGyUguA13nfwCsSKhr9BrnWw3TpgKXG5s3aoM1dA8pyFbppGaB9YXdHh",
  "key19": "5hAVwh4J3ULbxnKC3EDoZqCyA9mFzwJLXCkiBLbcWsDVYMa7WhpJdXScYoWgwCuEdY1cvWhUfRhXfxwxM8VkQZ9i",
  "key20": "5UP3mD8fkBGdn2JKiT3gFZjXvWaEPbr6dQRuvbCZdzS8x9WnCxqnv4T18uHfXRqoHw711hy9ZGLJmW8Db82UR1Lc",
  "key21": "hc3pPMA7obpN28fwXZBF8jxeUacWa3Xo3RGDcGheafLJGymoEynXf7WKN3iNVPcRAxH8fzcVio7Y4XnaFMfhm6c",
  "key22": "5sdqzqLQRDkoFhHhifVHw5oTFLjUoY8mpWmA2wgMX3Ef6wHU6hGirAmR3RsaM26bgrVG3a2BkcMZrH9fmkLX2tbx",
  "key23": "rtVD6tydAZH5Bz7GW7nnjJdKYedSCvfSqsVrD2mkFatakzSAKCS1gQ4hgHHQBeBFNwAAH2iPG7S2b24dA2VRAxT",
  "key24": "3eRp2MYdKPRyzBpNR91HoKjS2hzuWwwQGy4zTtHo3vSdXRjH6udpskiq7zrS7AAYA7EwfTonD55KW7bMAfbHWozy",
  "key25": "4bTZtZwTzQe4aTxSNeiFF88qYDAD6YgpzLDfotfDUGo8Jikg3cjdiKn7Far4C8VYRQoNYMdpyi8KXfbwKGYMW4NH",
  "key26": "VjcWhpQ4rTEGDLqgTXG6bFg1cspGqKFTj5ouFrfyG55YveSaZNVT9YPCXVioFSZeAckbhTqA8wtZMuZdFZCEFmk",
  "key27": "2x2VgcMVEQdixzhoqS41CtzQsZSmuEScTvXD4nSWcDbDMc5nHivwA8biny3oXAFf4itdLJAEiW8TuNx63gu6FD64",
  "key28": "2Y1VhFxgNqPBczdzownu65PMA3pAt8BU5zghjNnEgMCG7nXJyN22qKCqNbe26wUqN58cAuA6Ude9T4NBFP4A1DHc"
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
