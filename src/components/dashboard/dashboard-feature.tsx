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
    "5KqZZWfGpq1jN8smKibrpWaeETPAczDcV89VcmyRprB2DjVJ5XtZr8BR1Na4pjjqoVjqKzrkZWDdcS5QV3mUhU3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4ejbzgh47tDGuPWwCG5szx29nWzhUMKy6q2nqrbwr77sny61ztMLCqHVEWFVhJSHQKmwTgm2DutGBKzFY5yv9t",
  "key1": "3E2cWWekRdfry3yEyQo4tbiDLXoUBVzahYJSZuGKdxtN5xzc9BGAP2Gjew9xVpGff8AQKon2Vx4Mv8VgBKBqdkJM",
  "key2": "Dh5wU6xLXs6JyMrhbn8xx99h6cjcqiZwZChMB1PkdBFzHTfDKZ7tmTjMwT4VS2mykVpCp929e6K2QyNv46NdFtF",
  "key3": "5bsoo59UAfJifNS6QZvC4NeirQdYnXsYw3qHXd25XSKhWZcQDAndXcR5kdU4iNDQcEZSXmrLXaVVx7uqNDKwbM94",
  "key4": "RhmD9k4USfq6vrVXoFobL2aCMWgfmnSgqr4CemdBckwhmABpRrBW3rkHvjotQSPLfsVwEyrNXE2bG6K9Py1R1t1",
  "key5": "3FKeGy63ogz1NE8iSbTeP9kiCkAx9t6S2HWnvKkbpnWBAQPA9UPFCHo1nMKYdyC6mcGqDGsJb7DG6KTt3NHNoD1E",
  "key6": "2CvNahLDzSCpp5XqnFkS7ztaAw3cwvp9biJoCR4t6RmqKCCFYyZ7QpVozY7P4wvGum94zBqZzAkENiJ7zbfv98dv",
  "key7": "4bXHKnjK6nRNHEt4vTrP8WHruVvGHhVACgtSRcoJnLBstrXhqdP2iiHNyg367XASrroffULfWbkrr6s1xzsJEa6K",
  "key8": "5tQ7S2s62MGJ6a1jfCR45VagDVx5HYRcswSWTt7rdbszpm1tWBYw5z4r4HcpGJqFnPx4Bhjz984GTc46UvQhoXJ9",
  "key9": "44XzuFoBSwhRbo6H1P3UHbsFLKBNY7dXwMxzrs9uq66HajnUATWnku2AAhUkjybeTR1cJXNTuHLfi6FbNkKk2Pkp",
  "key10": "61ETftRjVpnUGvVwxyUDQwEkisohK44WsQfjKFy9yiE8LxU91y6wTh2USrnrpyfC48uG9t3XUFVZjmDa6CxDSDQF",
  "key11": "3ApbQQGtqTnzF4mrxdt3qkhzcCkQpMgGqBXVJvhfECvX5pvxKmxGkLKH8vDfxdFJEPbykLaTZLKt44obJ6xDXR5z",
  "key12": "5tJdLawNqhhkdDRutsNzSaA7y8uoVRJ649KkydfUfZ9rQiKSDBVRSE5p25HfPGbQCXLY1Vfn5xQGkP4n2BbsPWiV",
  "key13": "MjVnKcVLSFSPUKP3oHmD2esuscgs14yQqP2m8WuQuZvuKduUkARCbkArfrw6qe14gR6TcCQgjW7aVyt3MnNs4gX",
  "key14": "d7XEBSujuN8yHSs9RhUU35f9tLneHdbZ35HNbV5nrguWEp5vMroxn1TsHLDks2jf48C1dv7V4b7qieieUA9pKoX",
  "key15": "5fjGKNBwgeJJSqdimuG5UfK8cVpri3mfujrEmvPtL7PVakbzQgYSnwvGM55j8pSpw5EAC4Wtuxiywr1viY3nhRCu",
  "key16": "4Y67X633Ct5EQiLKbNgptPCX6yrjPEqeiPg6q6miSUBThupYk6HeNAUrhz4w8QLKhg8UBju5DTJpKuXYjN2p2R5L",
  "key17": "49JkniDfARGuqKhknc3zoYpbLqEirxjjmwkQHpZJqqnhPGPZpMHJ2McWBnM9oaxigV157LXR1bMcR8E2DbQR68tP",
  "key18": "4vuPNBzWhwNAX5QBQsRuQbVhnfFxCtSRW77nzre8XVsKMqoYiLV8Rxhi6A5uYjX3GePMw5WwK6JHp8qyu67kVArc",
  "key19": "2QatTJWUUiTeo788hRQpKmAAbBZfdEfgaq5PHWqBqnPuWCkEEHZpqfCiLubLggHekEFKm3tPVmRwRZho1xN3z5Qq",
  "key20": "2Yxc8ELBV8xDZFZhZfH3bj5EbjeMMfKC8GzGXSFq9rmPbBoxmCA3zYqgvWSh2438T7YpR7oMzAKUBi4k7eRX9URz",
  "key21": "355FNXpfbGLQ74BYVgvkiKZzqREUtpnFoyPwe8z9siZgTk7GndZfbNR7f9Nvdj1x7GipAZQ8jqqfBuxCiB5PA4TW",
  "key22": "5xT68yxVTA4JBJCwLceip89R1p5JTuP7z9eqaMTubH1uwzJ1uahC2UPUERYHCf1uZASHyNAkxvkfSRVBbx2mBBFZ",
  "key23": "43q44GWKq8GX2BmkwghwcTUSE7jEJJNT9AfJov333DQkLbUvqVAE3FkNvBAidyBtF1fv5PXeDmMAm3LsHzMDCmUT",
  "key24": "35rG79m7MSKh5GuHCfdAQzobJSW1Fd4PadSTTmihshCW8abGMhgBFo3kx5qMcfbhH7gU16R7TGUDrXUwTipgiyE1",
  "key25": "5f99CH9SdKuWCMHVHdut8tztwmUez6tmNT6m2h1BWumCR3tD1tVfUR9WScmmZGQQ6WRexDFAvCfagdxNSnaBDHYy",
  "key26": "5HfpFZz1tbfTVWZbkDVGweV9HmcC1MDLRBU7jW6TnhFuwSxk7HwYYbvKUGx4aAcipRZWwbHgnK3saogmcERcJGNF"
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
