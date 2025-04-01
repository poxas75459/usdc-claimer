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
    "kSzrZZs3RRKH842xzTYo7YuK6BxYtujtFsRjVSTJRidSC9vQhL3w4q5qVzGCXa8sc4suKT9eq7P3QMwrhKu51Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRhu8bNatrAyUxgFLgs7jL9besgWKRK2JWPvzvTd9QHR1UnSKrEPVFBymKc183HvzbqJtKsPFjy5egdaL1nGLbz",
  "key1": "4sdQqXuuSi6osDvj35fhZSemeprfC5ufgWmweJGkDWUosiFPciM9uBe6nXax7HWwsuWJ9EsQtcDnsf1hhnm517Q8",
  "key2": "2nQ4V366yqJ5RSYaKmK9XbYLiNPAMrTiVkzQXBgijvhZVKQBqSUULhSqcvTSY8eytM51HZU4Tx4ckVu15UQNU71R",
  "key3": "4vgzDm9EnmWoaavgr58ZTdzZG3KSCjC6KXnqUsdns3r4Ye61m9syggvCenDkDcToS2GDBcKcS8ProeYLk15UvHeN",
  "key4": "2DjNj2Ti3fxAud52pw9c342joxad6iD6eFVobWzbqJYTksTthVP4bgm9W1C57nvt4zbuktHi8bGnw8n7tWWrvRbE",
  "key5": "2DEnzZZJKZm9ZkQHrpwVvGVb3HkGpNKLHGw1WHSEq9NjF6irSSEDh3or4RY1N7Ba18RF6S892cbwNXdULYbCcZ5R",
  "key6": "KYAri4krqjAEQcpEXW6bw3LAuUaRJYK8aaNnucsZHSboocUTCgBWfwbQfwaoQYaCshff973XM22GgdaPqkK8M8W",
  "key7": "e6ENDPKC8n9FWCPpba8qzg9e18sX4Fw55C6mAzf4cPUWEsbK9qaBQpMxTq4vfBHotaikwHQeNeSVfh4C3dRZVkz",
  "key8": "mC3vKdk7hMbQpPEcGzTjRutXYsdfSPeZT2gcXTB6srvv4geLDPo8zqG1aKLJMvomY4mkpLngwprnTaE7tmz5K5Q",
  "key9": "3GDt6QjZJXM5K8xkca52eoCMkM91aVP5qMBjZjFasEsBcb2MEEVbJFrPxup5Qq5vokHmQiA3ew63WfvKmusb64M3",
  "key10": "349sruQ32n793b7cW6Pd22eh9MpN1MqfGzybaHARPUkLKR6Fnmd2pnAz3ZiVaTXfLHfnpQ6juio8LjnsehiaS7kt",
  "key11": "5Bbumtm8xQVP5MfEcz7kcxa5EmEsiK42HdKPL5pepeCpHhirfrNasaxYCS5JPU1kjVSBySYa5iQ7cbUCH4kQvpAs",
  "key12": "5JonxCEu1d3ZCAcnV2q8pyNz9Tiw1xQREpZut4QbrvBSHuTtBHHvosuLVepTtg4qkJApA97seMGgr7iuxCNtAcgS",
  "key13": "fDsxMkNW3P3kuRCkt1r6xLSRj7VctfMFnZkq5iPzJMwapfkUyYHGHa8rcMFNPaLdrsaHTSjJbDeLdTURSACp9Rw",
  "key14": "3njswpDuH7qGvsBvCZ3kqiW1mFN6fCmospXdf15eP91v2YwnqkwPWS2MBQUS3CkdGrv96PPydxjoEK6jyyUSkj7e",
  "key15": "2spVJfrYUTFG4AqABnSSLKGbrEiaM8uBGJEZufuvGV671XqvZDQPJpbqaPmBXx3FyyyB5VekQAxTTYTpaaa1kLDS",
  "key16": "66KyVsXRKEJjnv4msbLkh6Lvt5BdyWGUMTbdFiDjEcs7dfz9bJ8g4psefz2g6GMqfjcEmi4GiaQntemZStuF2u54",
  "key17": "54YuCjQucQrW93fXpMbtxyarZUh6k4Ff4Z7g4EwBZToqwjsA5NdJZtYT5ERDe63dGMNFsSnQ46jTYgHjQmnyKPu8",
  "key18": "5nFrRnQsCjLggGbF3mrAoeCGmuqQ5vY6H2hPUrokUkyXAaSChWEnDncvvqRuwqPpcHbbNh3QKKbkkkoaYB6d1qTX",
  "key19": "2UymSWUBGr6r46rVr7GiRUNabMsQ47GyikqL4qXb6NoENxmJovG9JVuBUSApXThVrWpQcBqzUBe37Ph8AwxaWJSW",
  "key20": "2t51FZnobLDFNbLYgnAaPsxBWZCNvigDty2bv3BWqVESggv2z67e5AnUwhfj8hof6eyLtsqWoPu3VdwND38FZB6v",
  "key21": "5SbgRjMkCLKcczCpaeohAexRAC5BQ8sVG31eeMd1Eiw2h3CLTTfetjvmhRnoEmeYrysW3rZrqyz2sv8LioBcgpwZ",
  "key22": "3E8wyMUyGUK77RH5U3ee4HVEzCoqGeZ9r9KzCY4wEMmL7Ke2g465HhZfnUaBpKmrXFkX4SAmEYSXaQfEnR5aiCMf",
  "key23": "2d8jsuhf74GcdCwj8jXzLApdoCiU9RDZeHKXUBygzSBuJceZfAdezP39cj1m7GaAsbadqHh9KMmUSebpCUndLftt",
  "key24": "55szDqdYyrhxdqDPZHLgEKpem9MZtmSpTp25YzHcAZz2zZd1D8pQ3Aqpry28cLgR3zw7eXGVXpvkU4Cmo3Qf8G96",
  "key25": "4feCfHxBpy83Ptq4RewrkBqAGX15frTH93z8ENNyKDRjD7itfQmvbeWdkDj7BHHButwSis2ZTK75gQMy2Gnk412y",
  "key26": "2Q68ERbfWYosQCtMx2uepKyc6VtdLhTwwVTMs4fkLtWxrQoEdjPtkJ4qLtELjYStWGxcAY9pDxU7zUhoJ2bePjJW",
  "key27": "4nRzwtt4puFyJRorYFuNjjH3vyuaQfYqqKS7ap9E7GepjzVp3UAKUQgwe1HXoBHnCXZ5dPSsAw3vyxqWy2ZNAY5c",
  "key28": "31A4R5fCCKxkbB99qb7XiFG8ji4BzEWqYPsvVXbKCNDuuwVb9DYCkuiHJtEkJFehW3EaGw2EwLTE1UtP4krjWWSi",
  "key29": "643bUXMyzfxHe2j62BkEMhjXiwnL93naAas7yqP7BtR5oEhQB4PmdJD9j4LTs7igRPMv2CMjSMT8ZXt76diWJyHC",
  "key30": "4UzYTQLJc6VPemH5g5KaK3TytCRfdPtNWhJ2QiDLDVNrhoMqEhjwMScSx882qVQhEF8xRanMqztQywapBdVqr5zv",
  "key31": "4wm6tBV52giKenLBriT5BckaJaVaXrZSbhehbNjLd3iXhw2Kt4zVzscAhDjeHFjxYu2jsy7TwBLDugucEQkqHuCF"
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
