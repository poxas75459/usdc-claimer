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
    "NWFJqUftKFRZVSZkxfhsDbx4e37zVZ4fLErYFZCmJuQhn2btQUUerdiWv9uUQ4vXXMdUCRkBZNxEE3ChYMC3rpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQV4as4qUafgKH6Q7fD3SXPPvh4odiGiV8bhUV6gmVDdpNfcvGiYaxG8nztw7MgsFsU4Rkhn4qjrJ4nxevMKrN8",
  "key1": "3hHpeYSpSWvTYSw2P7zvagZiU5AQwzkmbcoNdQntfmX5gxXTBvq4VnT848k4nhi6RA7NRkq6WMxRXhcNuBSF8kZc",
  "key2": "3yRu7NnDrkQb7jWNyG6Go2JTb7J5Y7CJHg2ABjfBh3vo7Lvef5NyWoKS5be28jhfroMdNt3nWZdmgCbz578Syj1m",
  "key3": "5BxGV2Xi9Bsh3WYSuegRGWtf4Ja8c8V1sgyjLnbvFENFnU6AesDnY5sMZTjvETUkZCq8DxhdisXzhtUX9LzCdLtv",
  "key4": "3FrMF6yX9cvUCjSbFaic8tPPcZrjoZBpaY6Gc4E22oRoZvt9U5YsTuBu3c7Y44dSA6tTFQwpWQfHi2vRkLrfsJ1q",
  "key5": "Lb92tnm6ZMGFB5NizcRrMQ4k6okaVcnurvyqzveDjgauHRUcWbBfJgArXVVosUEP9FNyP94iNwmFnw8AUPT3tDi",
  "key6": "3E8o3xnHRRv4TB3k62AmfASGAY1kXtPjLubd6jaA2uvQXGQFnoiTGPfp3384v19mj9qpyKpcLJC5LhT8Rc5CLVx7",
  "key7": "4Y1VUeKfeRod3JAy27uz5KRuYhTpPkT6Qdx2np3wgpSFwgQUdYBxBTCjjr9Lo287auwNkEWa3SzXWGGMYgrPt5qq",
  "key8": "53FL9d6PcBtvVUSB5Qa8j7LStqgLhnHBSDSn8UMDCCipF8yeLna8ebYob4eaJ9SnwhE4yJWV5TZmFeiqqcym2H53",
  "key9": "55Brtk6KsnBVBACQTLgxaWKFVGzubdMJWoZrmDbcgZekZiJfLEzzNuQjiJpTxuqqpr47KXYnWLgeoArX6i9tfDHg",
  "key10": "5Y4vpb5wwsjMyP1fYLyUJWRwM6aQvdaPs37xoUf43i2XPByGnwCjXGZXk7stjwygQk2CnESCHecJTouS6gWq9tDt",
  "key11": "5pAkRoAQdwKvf8dm3MyCoR2ogyMpCJ1cB4fg1XKsVPHCQ8AdB4NTamgojao34eCr1q9a56Nx1cfxmGLRtvYaKYpw",
  "key12": "2auBe9s1wC74ibmt73YKDUiRukFB3f9CXiW7w6RKtdD314ScwWunSNZhM1egCozSApTuqR27YKut8LmEoFw3Z7q7",
  "key13": "28FfgovEBeSPfUmzCzfLkopWR9DnkKLKTZ3aiRURKHbD99SKCJ3AfKNdK3V6AoTjMy3vmA5YVRsRu6HNgBonfyCK",
  "key14": "2HjaGR2e1tUSfBAE5PKdR3yPNx6D76x1VEt8KLEG1WTnayRe3LcQ95FHdv6SCPbMadXBMyM6GsZqPMUsXtH6vP5m",
  "key15": "596iJY3jQ3G5kLH46mpHeQeppN3sht4pf1Z359xiEiXMKteWLPmfyUDssJC5cbPXmo3nDG3kKN7nUrTtkLVydi7r",
  "key16": "38mFyZBxuxoG48Jic5yDJGEGxCjmzmGsXuhs9tsys1vSvsGec8JwG8oxFPQ25merjrgjwCr6jfm7qL6inzmdYR7f",
  "key17": "rGMf6W2FnugyJUPaV9YVAiMoCYUKbiXnogiTWbU4HFxf2RGMPgpsyobQRATePqhfUSDhr7WZMyqrYANWAZ9oauT",
  "key18": "2wYcajjHMM4cqpdbpxEajTS5QFAyjTet8JRQv4dTdFeEEem4nsLX9NNcze9t8Se952PZcVnYtrrhJu6LZs4y3bX8",
  "key19": "3x1zyCEQ275XPbABA2qexA8dcT5c2a6mUE8V6UcZnmnsQFsaKcSDimXRPcoqbWTgkcgFXdhscDZX3Y34bCrYjPjt",
  "key20": "4ZBNHsYMNXbztsVLERjdNZE4Uw2UQpW6Ctg3mPAZQkRkhvyKFZPabqmeKA22QKtkiSuxiVWG5BRzdEwdoFcUz4na",
  "key21": "61WVWwhwmGMfo9nUXsFysP7djhmKeXqBzk8uBB5BLQtqZtAfkqSSB1SpJJacXZhaJniygnBWRzpkbC5rpjYoU5U5",
  "key22": "4R8pSWVZsPVcjPVFytrwFo9n2x3h4th36o7MVE91QxdLsEreVNh7Zxtokw3ACWgeZCNQDXUHB3s2c8WUfTGRJNsm",
  "key23": "5xGm5fJNe1JM8t3HXGZebN6JHymP2je4KhQJ6yvrjk5TmLnFNpw6MAPjYX3BCsMgBzqGG9HgDD7cZoaQoYrcsQc3",
  "key24": "2egn8kXnpcYK68bS9rheqt7hS8TN9ozLfikKCo5duNfZW8Q4mGF7GNoNYBhev6A39EPmcQNXKkqv2VJGcNP3SK69",
  "key25": "5yu6gP9AhDiMJ5nESpJYoYi2PGobWM4Kw6D6H1npZpdqK9xM6Y6Y7yfFmX2xZymWu28tWJFfJJFncAhSRh4TsNxT",
  "key26": "4tXQTUy2tmKrFcU1g1i4cNyNgeswS2njVsLF21tcK4wWtGz1fW1RfLBGVsTcgkEj82ANyh8isRDW3ChUuaoDjzvP"
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
