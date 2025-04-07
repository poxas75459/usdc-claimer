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
    "2eLiNsfQj7QDVUv2t5gdMiuw3BATLgKPF9HmZBpZxKt4irC9Ryz9TXiJGHtTTZphryEGybGEgUrpgFeNZNTAVNFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549PucSV3eHxg27zMfyxF6wFektaewGGU65fiYo351EXaGVD1mv9UbRSkGh7GiEKq7sutFQKBpmvoiRrpPSsbV7z",
  "key1": "2Z6XLcWnaQ1bnFhmbr42QJKxFD4dpAaTVFauVAWaNtzG6N1aJQDBT7R2GkT7kDTTQQoJTHwuZ8tuNU56G9bB6rrF",
  "key2": "5KdQ9hGpRhbYxkuiY9r6z2ckD6JmyJsLFqBMo9yCkNSQPXnwdPwfkerdX27fp5eEF8CLe6BYiostBFsBccyWgSyA",
  "key3": "2dA75vsqCAQnabGejoaDRrAhyCKDXQa47apQSHJhcUvaQVfQf3ZyAkUhibcjjNSpjGRfGay7FF44QTWz8WpY5pKF",
  "key4": "2UHPBhPTVhTJEk8nGXYQ36n5Jvmu4ErkZVHpVfrWzh5wvqzvLmGqPHqfmsQtqpQtbGeW1LqCMKhQHsJr3EHbubsD",
  "key5": "3GtZEzgGnrvnguthb3879zqZPMxmnfPh9bGR5K3ENAHAhiP5noXWY5wdNzjq1MCcpP7GkfFFbkMg2fbpCTvyBY7o",
  "key6": "5ydsNwy7spgxEyPsqRrf9PSkH9KSwh6qvBYvZCF9PnSvs9FqRSW1nMNYi93cAC9qQ8bZm5e9yhcTyga7ExpzsgE",
  "key7": "9UTAiZc4svFgtPcxdB23cC6vVaWkPgYtBxSehC9GaQJvMkPJ2Tir1gXuieKaJqnZSaZAi8kudq2vSp2BTs4ZbSn",
  "key8": "5NcTRhPxMEJCRVeGvptohPNWfBWmsB1zriDT5pjNusXfVsmce9cJEH8gFRxnVkwDgSGKYu6uhhg7oPuARkpnoDYr",
  "key9": "bLSK23xzA6DtNxtWPWzHfZPZZ3trWtRi2eHi3gN4R6CSgrkdVcZvVYjjr2bo7sqjGDaA2ZFosQPsFyEpRRq7Fqq",
  "key10": "2D9FeounX1US58dWZXUm36QsKRDT4k9CLyTgEqSm5QauNVTU7zqsxoYk3xoYRFJ7QbzPJxY9L8CyYqGWJtaCC8nF",
  "key11": "ZfJdxxUNXdAnJMqUbw775ecULaUqcyBtSgRcECn1CYAuRabNhMKXma1CjMGgRqEa5567wN1x4KvTarNDxQxv99p",
  "key12": "5tmJfp7N6EjneU1kvPnPDVVRyzNKGUyD7qvnpyxUTyE1PLLNTw9ovzRSyPDEtBFa2CLp8waQFLc51qWT6JR5Kp45",
  "key13": "31XCWi3BoXp8h2QV6Umf7wgcEmkLkfjdqGUPVQufssSxRGudnCVmuivjaq7qgPYhtHXbeXsSgw4JW5go53fDbrX8",
  "key14": "3oVHhjCavnhtVYQCsJg8hNmfqZUUvGQDsXGTamJufeYLUUT9ZWhcsdxoFYYoGBJumKK9oVrzYbsf723ZGUiguRea",
  "key15": "HZMifCQ3oKAso7QKn3d9kjhhWvxbgRywnMYbQTwRzvTCRZv9RZzcT3zqPBzUWsusdW1B7s793QY1RXKoQ6Tcpzk",
  "key16": "5FpgbcopeUhJcW28bPpp5BWJ4txPfNVfnha7XEnxJNkWWBQqVezPLV9nsp4Xr91vVaEFssKN9jLQhWY3Yg21pzND",
  "key17": "4guCFq3aZMWzPuk1FxEpWqcWEnxP1jZLo5CoEEhNCRZnfXGZA9ieTSkL1z7kX2UF5JQo1AjYZSjJAzKep8XxLao",
  "key18": "2Q6odTB1UBPEymPszV9zDzvNAJngBhvmEAhPn7USgw6XMD3UyaeJL5Zb6Ju6JLnFmJEXvRnRtu13GVKMsn7Qp4qW",
  "key19": "5BQ4ZVS4g4emPPQhDyBgJ45DPHE5nxNtjYqEd4JmXJo3VG9ECG6QqrLsm7g5EggUGdKRAoWZqGkvEkM778faLtJH",
  "key20": "4ZvXPRs9p3VzukLNTQUQDUfaeYE9rHE7YVjwakSMjNviLZCfJB8VfaXxBcAdymC2kzFGLzFwxvuijRDNUbjXtx1M",
  "key21": "3nqdkn774t9utnXNrw4TWBcDfceaxAtMDrripF7mQsn8owed8WN6AN1vBCs5Vvw6YABYJqoNawt1zF76enxi84rw",
  "key22": "5AoZXkqiWT8aTCp2s1xcGXZM4TJ6vhFZs51qur3VGpei1ej9mW8SYtJi4CPLyqh82ytETgjS2uEAaUwxBUKDK3BR",
  "key23": "4fXegUmmH5V1UUNfdqctj651JevBGGcZNkfPVAE89UELNVwi6bHdJT5mNFcVbhjhtLMawamd4ZJjSbpwZbbbh28P",
  "key24": "4M8UUQeQsGXNJLnY3aVnbSKLfAJHTTMthoe9V3Qnm2kYNqnyebxBzvP712Acpjy2B3PVwRFBXXVmHZtbba6mqxq7",
  "key25": "2kpiFCY32KyJJdS5QDDGVDD3tGhXWNpyyAUucadKAXFXURFEnNVfxaGniuZGUmeJfPyuEWMxM6Ehk7E4pCbAFBaf",
  "key26": "4hY2fswqs6LRiJgrAzXRif1RcEiWxrD45Zq3v8PhogMRgWfx57oYWW2vu9RXuim7qSkMh5r7TerLEkLUgaKvsZLk",
  "key27": "5BSea46dbDu2BevaFqC9SAoTzDABsBKXQx2k53j1ZcuAL34xA6g6HHw1ibDLa64feUJ2eC95PsENnsXd4wc5vgNq",
  "key28": "3vbAR21feEbSmNkhD4wXCVun1SqeAuN3i94R9HPAr6dfVnPQqGcnXSKJLmiYTcxbUYF4uKmWSWa2mb3H3xfYa4zK"
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
