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
    "4Y9XBaSawpxFoJkaACmjnzouzgKSSZR4mCqvdo9k144jyDUbBUDtdcomieTigcznpj6Dw66r7iij4HzSbia1ZwGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23okee6zVmf84BGBpHAQs9nJSiPcvTpLwUovRFEC1e7T7JYJJMVCncumeGGSHJohyteCXGfqLLhcZ8eX3HCRib2E",
  "key1": "5eNSuXLhTNiar8zdKAa8gDgUK6iuakX8mNzB4LDZU9vkySSK1gA5NYvm9TVh9U8wouXsyP1tpCaQmHuVPtZmYshR",
  "key2": "QXhh6y2dNW5chyMp7RVAnTVmywSsbNgeMnh93DMUPPgMpkSy6zXbpQRvfCN7WupREYpiCWuKdQZMmJU2iAJqEiq",
  "key3": "5E31VWfi1uEeK28gMtGzZb3NGLo2hCCj8Vi5XJfTQUQeKWMexDJWigttQR6hnkQsCZ9dy4X4HTbVLsViQfCePUvf",
  "key4": "2pU3v2qM6uCt6jdxfPk6AD5b1ufakx2JQr5NUD2VgHwCqo16uxLFKxM6b5kcxqaFyieBhgGrA8Tc1qszS8otzH1r",
  "key5": "4nGJFV9HPiTPFEidyAZ9DCdLJSpzo5tqEiK3KFMC2MgNtGUaixVEbHWizGFjwengTvDkLyV9BFY9QpUGuJ9tPcPG",
  "key6": "5ydcwUG41v7Uo2Vp6hiSTnvreQqayAipgKyjXDezWSxwh4VYZ7Z8zXGXyJz1x3xGAtL7FeZCfr1AkXkqsZLtX1mS",
  "key7": "4p4JNGJcTReKe7KW4vRFmoHGiJJLQtt1geFnhZQ7Kph19j9T7jBpjFnDmZvWZujXQkvfiFFqGyjKPRL6fstBiRuV",
  "key8": "bdXVGnEDEW4sDeRa4UMKTJwR9D6fqAcgNMjipwpvz4x7sTULdGJa4agn4v4ae8jVXNU82GDv7sHTemK5GwrwcuV",
  "key9": "3Xy6m1goZ5d4Xe6V9K8YStPD263nFbCaR8PwjYhpkpbh3ztscVk24nLB7y8T89uDZYWdjUBi8JbzED371ACJbk8u",
  "key10": "4DhEXXBjATyaa8TXKDZSnQjJQjpmRoRWQLi11R4sDmFqeuzEKdVFhvhksYqc11vuAhxkVMJLDxfVFarscE95GEUB",
  "key11": "4s4g4Lu3eMjsAWM1RsoWMAL37z1QrEAJ557TjxTiszR2CWi6Z4jE2PQ2z2ncP6gY25ym65Ya6iwwWG8L9LSWt79G",
  "key12": "2ikNoeK6YVvUFVPhvUUEJQ7uC1vgQ4wM8CpohGqgV91jhncaMNfbEm9bqjoq41BnzbToyz3sKoVJrx9nmSAL9qpi",
  "key13": "JXuvJ3hY2VLPLGH5teqSizGYSh72QjaS4tttasY2FbXGFmgiWYhq7QhHSTpPVsxWLHq8iA8Wzc5riki92GqpGWf",
  "key14": "3tgwTgdzqPJWNnfC93kQYVxyesvsKeWPeTVXXCQBb5hyKuUDpNGmFK4rRGqovmkm6RADt7QGdcvrD1ZkN7o8wHXZ",
  "key15": "4htBGinb17X8CTkUpPEYovypoqJTwYi6PTRKvmPpBNZggbpPBS8T5nbXhNmsstuSEYrBdvRX65bxnUyXEQWc2Y7x",
  "key16": "35BUaWhSjTKG4Sb4ooWDX6SVYTScj1a5g8hMtmJPi2dqkMxeatJSMUooGDMBQEcuyiwQfZKcXrALs18B58Wo4C7T",
  "key17": "4qL8Em1rTJbYspWMH32fd3HG2Wpsiq4KezYFYnseyvjoUCS9b1Y1jiU6n5HhksWGoiPKdxFTexvVzpJELWwpnGx4",
  "key18": "5Haq4BG782oZJdG2NkoDDX2kLNYJzSpkY5xvmmG3rZutTLyGuFxKMGLRN7SUAcohDJjGR5UgdGGs7YBQuEj2PM24",
  "key19": "yUTmuvqxcg2f69o2Dt8krF3KgQzhG9eGiLLSCXk64YwoxdHqbCQEpnVGgXxzgRxPScVcbNQBocWmHzej6RaTQex",
  "key20": "48oSfDFXJygHaDoayK3RKfPreDJtcAdoHveodm91YipHyndkMsnZ9TxwTdEavjvUc34ETQwYRDaKNB7tzFDN82is",
  "key21": "R7U7QZJme29yuMgEKVUNECM3esWo9MGPcXKxtGt5RUtCYfTsFyg8eX8QChWCe5UrYiHW3hPPvUYsZE3iAH4LbKw",
  "key22": "267SjTJX4UJ88wrJ76zSSAwUpnxtFzy3akVQZsdqs5QNy21RP69XVveCANvLTrwVjdGe54RTERBLgj1hwPJ313gb",
  "key23": "3s8E3MUdKYi3a7uzuRhMXySoMoBWfPp1FURd3tbTc5G3gmg5DWt7BpRYoxtVH22BnQxyUdWrHvG8VfKzFx8Bw4wA",
  "key24": "3iix9EuD3rrzzrXxjmUMdogTcDE7iEpKQ4KnAVrWYAbmEu3S8Rdyrx3NnPeyLWjwvJF5m7jaEtz6nxZTsC7kM2F7",
  "key25": "5eUZzufGq2kK3F83NcK1SRgyihk2tW5uxrmcr9vkfYpzx6uw5B5H17JBRGk9xjLE7jt9bcahWFB1o4Zmk8Aej5Gf"
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
