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
    "3FcJXkU495VMJDSxdFCz9TrfPHGqb3X95LzSATSTtw9WeM6TA4MTSVaFaLPNirPvTgyQ8FxJ1pM8zF22WPNZvp3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UG2UH1HcctjCdQnqKAUX3ytBAuSpTVtqbN4VbpGYSWSdjKVaaDFEdemfdx1nRfgpivcvT2fxQgga6JL8cFj6opm",
  "key1": "2PjMpo5s2MsvTqwyvNw5Rsrzf4jY6JZjepAqRwfsZzHr92iw4uYF9TgkQT25jPcs678LDj9VBA5ZQVCAdCUcrcP5",
  "key2": "3b5yexuUhYQVso9ztkB6TdZjPWyn4Wvmi7wTDayBdQxdA4CZBDi3CoSevRkC1Rf3atg5KSLmx5ehLrNWdtYYWQim",
  "key3": "3EqHUDXphGV87xm8L36pf56oHDKiNL2BksmVTZJXpEjZYD1hPJnvu8P5ab3cJcK4TCZvs6Rarhx8S2emrD96RG32",
  "key4": "LFpSi7gairpQeX8AMBTapPCvPTsy4xrV6st6NhhfL23gRgomANebU7EQH32WA8L8kAmU7yMhF88Ey5JKSx6vF7u",
  "key5": "2vdy6cMPCAbWYidZbNuXjZh84AHAZfg4qtCHxdzU5GQMf3V2SWDDW39EmnM1UKG3RSr8rUMaR9vPzUHLtXD5d7Qc",
  "key6": "iFmQvJtjZeWgJdwGMdK6ZNBHNXhrRbjMpBKHnT69GTbTTLb4XjwMvNBcXGUEtUn8RoNiKdi7Nj9XyFzdJ5FcuEM",
  "key7": "3Nuv6zs8Qxhc5kyhfdtVjBc2v7AcQf2eS4s8z7JvvXagLNpoGuxNzPsyrnFxNJHgSMVzfRoMc7x4xsACJpzusN6Q",
  "key8": "6iiNFScqKY6fcWNekKDPmrwxD3Ab6Nsh524Y6pcnEVD5oEJWSc8UNTSXz2zvaCwv6izFCq9mbfJmbabWKTcvRpz",
  "key9": "4CTq64viJuwMa8JJ4JzRcAGuK2pLNCma9qfmQbsKh1ucUD3QyaBCU5LhbCx5KbYZyipb7mV2igSVFbLb7f4VC1Gi",
  "key10": "4ceSKm5uGWsxgRPuGomr8NN8UFkpsbeSXVBC9XihKF8mx6dKdzAJex6aP9WteKmCdZtainih38R4J3sgvpmEph8L",
  "key11": "wnrsXwLZHW6HMKpJK7m3ws6NzuoUZtbjEvUxr3f5svWXQ1TKE5574GdaYvahkC6YQjcVpDcKZd2T3mb3AHECgyb",
  "key12": "2ap9QfS5wxJ8sPtR221TyRJixoqFQ19Cq39KuoGFDNz7ab2oU2Grz5fa8SnUCvjyFhVU8GCqRmQr71668ffa462h",
  "key13": "54WPwM4hn5pHTfotBF4LUwVmojzackinohXCzLgqbdBJDoTyCMfJKyaooUYKwFCC2ZMGKUn593fVX7ULmy4qgTZR",
  "key14": "4mSxP4L9pysJYHx1xGpQjSgC8UU9b8zVk8twgFf4zD6nvQVM5JXJDw9ibU6ytSSSj8punMkTVZSxDayrJD2JHcDd",
  "key15": "5Nyf8mYbAq2XDfqiP1MdRnrZYA5J4TVywKKdANMWJsGPTkzeAJPkXgkM27dE7LxYMust8K11m6y4j59zpTNnCsZ4",
  "key16": "28DbBhfCbR6de6pyXVK6hvbPzo2YfHHo1vfkdNGFfTT5eKcQZYkDvJzvoG3UXfYdQHNhxSCdMF8mtcYfWp8T71dr",
  "key17": "hiWasnxNuNK41vnr1ixFPTQDP6WkQUrKvykvKAhNNv543vnZ3yJ6qwPDH3S3wBhQnamt9DRgSBAzNqYaADTF6u3",
  "key18": "5aVn68qdr8S8EBybYTzfyU6qnZC55ifXsFpAEDFrb18dYTpkBuyGLitQFRRXsF3uaepn9gvmeUEk9HBQZodm7Xvm",
  "key19": "2Atd3R54DjasA613tZWsCsqxYwnuHuf9w4thSQHKBpZSgseNmDL8RJ8TfQmVEpUEXxc79a5K8q4d2tTGGwwwaNuG",
  "key20": "PCvum9scVMiMVCLPS7ZjUCY2HE9zXJrAriA3rudvsFDscWTLmkvUVFgF9CYtGHoQgkPfyPumdfzgrgi8K3e5zmd",
  "key21": "5WrTLyLQmrRNqhyCy3s1YsKSJEqsVsbCZrVcYBuE2UVqRZVsmGZGFBG6dp3bsM9f8CJ2Bd56rpXkjrcNHunEeWh1",
  "key22": "2b4scHXs9A77LXY1TgdSjgUn69HaBA5DVY8iWhnzTAqhuLpZgKpUJTP2PD1qnn2MJvSEDsC6JHqmBy4Q4SrDSNja",
  "key23": "57os4VfKN71AS4qaK4m5hfSbECooffLrmUzudir3PigRfntoL1uJW37rGsWzwBJzZrcdihReeXmGveDGB7maSZoG",
  "key24": "4mNH9SNnEdkX9emrW5ueQT6Taw7vCET4R13Dw8krwySetucorHxKFq3qwYxev7ix1fes1zvDye1EQ8b6YPjdR1Zd",
  "key25": "2bbSwqkA4Wh1bms17vcbKKD5FVuAL2cFNb1JM7bvzhQN5cmo7eqiMeo6LzXUWa2DVyzEcAXBuyG2fE825StAwYne"
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
