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
    "Ca3zPZX6vpeg54qwnMYyx7Fv4hr5X5AQQ4rFyk5HhNM4kgEyqAS6yYMwFwPCqsNLtFUH9NMdEUw28G224oAz7rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pczkqQBEn6kuscz2c4DTGhqxG477WJCL4f2Px8rw3aN677srmrimZnqqgNd4FojxkcWHYdpjZSNQQLTzQijt4Vb",
  "key1": "2tWZ7Mwu6zQfyCGkDfbhhiEFygVnsfxcdyMUC6ntKDb4NTa1oK67dSsvFKUyGa35yGUCuZDUEQrqi4LLNyzMDYnU",
  "key2": "4MCqi3SDeRXCmvH3Qbr6YmuYcY7Ybj21EGT9Zny6AbWbwTrgJ4B35dMaLSjDPDoYW6sDnmkDcrqXUXCfbiJTem8S",
  "key3": "5bTungj45b66ZGjBUxF9PKqpFyL5VetCisVBMkT8tB78Lj5ZkQqZeoMbcSVpF1PhhzgvfVRxL5ofqHWmRobAnK5F",
  "key4": "2mxySX1svUT4sdjP9Qe2xHP43a41dy7YndyejWfctFKpkXUkCFv1rudCMW8HVAxSbHnqY3PgeK6adM5RSEomyQkP",
  "key5": "58dmR5vWFU8ArNzyBok3UdztTZ6gUgfRU5k3YMVZAwXd7DTrsS587ysjNpDMH8vXnuRShgFnRYE3i1VnpfAG3U65",
  "key6": "4pZzU8ka5sDhfUG2dUdWqrZ53PgwsteL8quWEMP6uVKYGoLTZGJP6gB7xwLZNiRtivVJkdYRQHJdtFf1VsczSJx7",
  "key7": "5zGwgDSP3hnUf5WLwyoHLkbAeeBYr1Pb53vbTg5MkiPLTeRPLNGRoyj1heoSHYiLmmDyoo1qUJ5Ka1fESguBzsVd",
  "key8": "47sWaVUzbXHpVqLazF3GbMSQn6xsUZ8PdNnrz8Vixw9q66uQ9TrihCVtGcWqYe5VPUhgrziWWFm7VaCFCqT22RGp",
  "key9": "BeE8wHnBkYaMwHjZ8wxc2cYtP8eproXNS68289PRnpZeVirYhEpq3oNszDtCmQfTk7YKStSw2THKAiqEM62Mwz9",
  "key10": "4jdkrhZf2GcDF1EY8XMtyuo5kkcCBpWAsCjG5NJwXskBBLoMNDrKycJPj3D1FEpfK8hQXUnPfLk5kb2f6H18Zsx3",
  "key11": "2GzJdK87tFxA3aFAjG59nJ2LD6JJ9jN9rZbS1w612JCpobKsHr4Q53Ax53W8t86UpMyDCBYKRYJq4GZBSxJHgKv5",
  "key12": "4RUN2ryeBiygqM3eBhCGMF1Bi1TdVVn7ikGbMZDs7rxoYPSYghraV8uST1KuFBMB3x9oVgrKHJLPC4TksRCGhY65",
  "key13": "5CJ19L76BTmnMKhZSNnjJzCfzMmy4oT7pNneHJ3Qu3XAa1761GDugJWGzFWf86JiR9wqsJzrhzUsVZdW4GV6MPfH",
  "key14": "216ftWUEEzeZauSqNMzNrdHXpwMwfxZHBJYHV2kn17ocbsszRB9MUukf9Zc6ujefw44uSskNHCsPpTX1VdyKV8eD",
  "key15": "2g63kjVhJFugkNsr6qg4FvBD4x7hkpYARMNR8XdNddDwgGx3PGiMnwHpAyKNmy1bLZVqhdCs4u56xztCXaPSB3A5",
  "key16": "3LhGbjaHYqfmmJvo57xxwFZB5HzrYYwqgKzQviGM31Mr1qbS6vNq87GbbhMcSj6xmbJ3DaMojZuMJ94gs4E9gUjF",
  "key17": "5DH6Uf5gzTi67CjHdQ3jxHk3qgug2sA3ZQHkv56W6Y4UQvDRgbrqpPxFwbTRtRgneUGnjskoLohH8NEKwQN2Mdtp",
  "key18": "4YU7xPN7VhWFKP1UqKv6GWjFrM1P2fnsQB9c2ToyWga3RP1zAV9dumJHyaHwZ4SKc9gvnwz3rkM3zAzLz9HgUPN5",
  "key19": "678s5tGVpXJ7BbVpqw37ZXqgAbbvPqohjGPLh9c5WDh8cAju59dF8eXYsPzAA7dFJJYpfmQcX7bssbjDxV7P3GAk",
  "key20": "38aY8bvh4Kthd8NHSdENPTfZTNo49XyFToRDtZp3D7s1hV29B9QWVCsYKnghQdJinfTG4Bb9FJTeAqSXScGF2TCJ",
  "key21": "5gdDazTdUtTRgRASZ4wVZ5r2egpD4g9FbWa4h71wVABV16bN61XYZdvgsrfKrofC6tkrDHEL7nbsuRxvbwops8Nr",
  "key22": "36cRj5qcQhBukYh4wky1sY9W6Vf4xsvYTBbp7VYbLSaig3dum8tJkU2pQ8E9QtAyMKWDhDUaJsqYrbi561bnChBL",
  "key23": "3YGZvD1deEtXeoiciofGCjPEtvoNfDsboyx2bGsq9PVpNNGag4stGsL9BSqqrrnYvpFfU2oZJM5JoY5jhiGvYHUF",
  "key24": "525XFFtFHo3eSoM4nURoenvLoLw9zGRW5UABDFT7VqqexdhhioYz3ajhnVvQas8sjiEUucHfct4DNJmN5rozqyVf",
  "key25": "4bnpVSbcStg6w6mBZza3djJwBSxDpMeRGezAmsuKuURJj2gt3xSPnKNT4uZEUSe32sRAcFqS5fibvXjabEWkZK7M",
  "key26": "5g4hV2htKJbCTZpHy7Q5feNSE5yRXiiTeYhEv4f2ZXEi7Lj8Rw5FNdTHRL4PWzz34t6J5WBgTmYK4gA5M2KCRzi9",
  "key27": "R3N1GmUCcgvTgffAK8Fy3zttnH1HxawaLAdF9fLDsjegE7NsxMJV8WBYf2JAfXtmZStMgF34QXoCSaW5iz7YM2b"
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
