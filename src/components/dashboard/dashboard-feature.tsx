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
    "5vRfQBBhbgLbF4bs3B5YjAyvggTwgQoLr9dXKuLEcdYSEKR3z98mUwwewvWBnkKuszALLpDGnN6oVoCXkoTWpvWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEcGXKfJKoMzSCbExkuVbRxjBipiDWZmi4KQwrDcdorMX17yGfFNW51aSH6PLf5svRxtAByXtkTqNfeK5WjoypW",
  "key1": "3eVnxS2MWBbhCBnfbPpNQbDnF8GqgQgZEqvn5dBfb5Je3wtHiuuZqqUDnq41dtuSmxGXLzqtUsFXoPmPvjzRWvCu",
  "key2": "54id9DNDo39D9EjPYRY2Ka77PhxXyP7GwWaAW8nA3rKgmozLRB2BDoFhzuyn1jkaZiaqakxYV2HDDqcQXvh3svb1",
  "key3": "TiWyvjN1aznAVEcd1bdLkQvqfgCRaGWpFm8G2StHSxCZQiV7gRcw3escdDRAZtsT5m96T3Z8aMPg9iG28gXZdyR",
  "key4": "2AG4Moxh7Z5kn4tBp1TTYnWdBtqDgzhN2mcybfGMRPMYe36FiBXYxyDVfLLccLn3VmDoBkBNupjosN5vnyMi3GMF",
  "key5": "2tkaNHBHuL5n7kPvbQPb4j5WXBjoNWNyZ6cdNp2VA3dnNTbTPWNJXQFby8oRRLyJ2KZZQBTyWprxEXWBkiTZmQWc",
  "key6": "2tm4HJG43M7J3Rx5WqQEgXUFE9x6FbLVKX66MUmkVZYXLgXJyBC1JTLQsraXSdvrgeGJh3pK8nzvzeUz7jL5gUJB",
  "key7": "4DeuhYHaxPow3rdK45aFTywNpYnyug21ihDsYMAmEkgSD9vgJiRD4p4aandzY7h7eGQVEpgzuQMeLKVUQkno64T8",
  "key8": "5wtyhsFogZTAztFe7ZQGDPuoEAxG56vWGkWHKr8p7bgmMpAqxJ43v8aF5t7zQDGG5s6bhMpudmnibzBe4rQRypME",
  "key9": "52NjPpkSje2AAKcfvUGsiMkGspUoqHTz7QTwKsSY4JqTuu7fm6HMfPNts739gbkbp1ojgP8eKhDmWmBkbfURp2UV",
  "key10": "372nszNCdfsiwGV6854bL61GsPdFgd2fzEgKyWw6ssY5weTWmsUVZ6vSzW4RC3UsRBGzEoL8EdfwugnRV9EZKVMF",
  "key11": "5WvWMBbydRYGWzqgCzeYdjusbTgs6a5bafyXC5x5Z2oNduVFVQHx8buZtxikyQHu9XQZAac5fWnrqLXAWm2neD3L",
  "key12": "5oG6gqCTjLBjCpyHaxGfidrtjUfyfEuewDnv4UuM5SHmAbXMRQcJMDs9zkQzX4YDAuYLBvcqtXLQnXQJBdjCoEPo",
  "key13": "44VYdsvuxLSxht4por9U4hztLjztZtmsA79RYd9jPUePaaGJ3fvcf9KHgpeLPgvorMTjR3WaxqQdG4DnFkjJqzq9",
  "key14": "4dZ1ZXB1t3MPVgjcG67NUdMELTYNyUfRQBJqNCLNiWBhrebtAsHhE2S1yNGB12z9QnhKgG3qstheMHQLvrDUpCzB",
  "key15": "3z3to2wxP6z59CMQdzHwJjTbBtsFXnZr2aUyTGGUeGQTkFnTht1wT5dMVXcFZBj81eTizaqCHfN3JNcMXdqTcSW2",
  "key16": "4w3RTFPGnudcjmdEqnyftzm41wApwdXMpUPfMscXJthN6rMLhsWcSur7L3GxNEVwrT2nPEu8wg9DRvwpu2pdXDGi",
  "key17": "2VoZzERyT6aWqybMmjnhw5fZx3gQ7ExERt7bYD6BY8msCnx8oEWjYnfpvYh8r9VQUj5ww1EDHP7RvsmRmnLDGFyB",
  "key18": "HymfCGXCDKzxwHU3kvXUFiDySLhh3Q2gAnJaGLNiTUaGp95eCNsHQUotHyjewfCnbWogisWTNcn7hJmf2sUi3W1",
  "key19": "4uM2qjNKWrzkaS29Jim9VQPUv2ELwvSRn3Ud9WEK2VFhuwA21UQWiNzuF83HAXPNH8hi263UJZRu8HmksvHuAqve",
  "key20": "rjfUsBBvwusMo7uTFKdqEZxzuzYdWkUDCi1UvRNbjXnNMjhvTp7qhaC3nZyiqGr28WTFw3a46Tn8p5M8b4jEfBg",
  "key21": "Y5iDvN36i1cvEHPDtuiVALnLRk3jroBA7DZYeC1yg2SinjcAjy51qie59fED5A82C7jiQHHT4jyxxTD8DsKyw4L",
  "key22": "36vcWErBfurTWcNjaB2B3ZyBcDZgnM2TmaPVSBis6Um8V5FcUAREPKnYb4S48hWZ6D4YJTDc5j9E7dfF4mbvB8mr",
  "key23": "2G8cTyHC9g83uDGVLHVphNvZQGVrgDtgZpBcQyofxEZCowjWuqXvEpbzxpbeDjV7CNjTtBnbumdtJmoE8hS8Cued",
  "key24": "2sgUGkMTd96aj9VgWmXKGSdtaiD9HBjtBxNtAcdKv8ukuZhXqSc13PuwBgod3w6hRTij1cJaQczmL7rqpUAYCMtC",
  "key25": "2j1AHzdAHCZKe7HiJAE1XKMixf6LqvUtjyL3vinLtqFjP75NtuSePQxW4PQtBArjCWrNan2qJkMWyx37QuncatPM",
  "key26": "4yoVQfasAXuRoqkLrQeq8CzJrscMWo36qqWMjugBuvPuAcBMtgPbEU5e1VCyoCet5U14vWAJuQ283NPfg7rzFE9j"
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
