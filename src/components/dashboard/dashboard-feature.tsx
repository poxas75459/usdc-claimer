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
    "2ET2fobzdYtXmLiLWfRiLQErGrSEa46n893u3MXZ53VjpFAuC7q7PpPvGjdcWJeQhWxZ1RsCLKG3zyP6VP5E5qgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cYpdCUK1Ss5AB4LP7iApkUJp2SJJPNS6b2hyRdaUz2QHh6e7qxB5MWScDPUHLJVV4AGWzZqJd4o9fR3oEg8zEdx",
  "key1": "42DM4XAqW6K8GFzN8uq7J34V2c4BeWWkuPPhZ78mvNf1CETQeqbKjj84YbnvJd92igPmnyLuXFZTrAw1yTF3r9ny",
  "key2": "24zbARASr1wUmoYWD9TtEJjETkSWhBviucJqmrwwgkkstMQS19iGigag1LvPmCAaVcjaGcZXoiQgP7qShyPNXpje",
  "key3": "2z7MEXgug4ZqjDEif4gqEY6igs8EABEJyC6Q5m2CQ6v7MqDapjuPUwP87Gqroks13b1wh3PnSw1cRRZra1TrurHx",
  "key4": "2C3vtxptQ8EopbVRzy3mvVZfrTcVapz6yuT1qe3Bv4tkVenLTY16ZKkBVfWi5dGPq89UkSqL5PKPepHxtaFcbji5",
  "key5": "2zfPnGeLuHMPKZMdZWjiUiYKKDhHkdCdhHEfnNhATSyHjePzuTCZtU49GJMSLgwB1TkhntzY5VTj8x6H2DJmyQrX",
  "key6": "2KeUQaZcTadzLgMYTbWbwARYiX6AhceESXhfC2tm6TtaVQFwiC2sMV68xWf9UZQofke4GotAcu3i9AyrefiMha2J",
  "key7": "61fJqi2pbn7CuxF1BH2kK7mKCXJFcrHepRpZokU1Pxmhmee4F3h7yfjTPDTprMnTrKYZsy3KEo35eMAKGQUhLduR",
  "key8": "3VWEvdTPf9N38cGDBJdzVKsT3TMcKrLd9rBfjuKibETfgbmZCvgC1f3qzFNWTShk5GGCbwkZh6UNuuvymmTmPte5",
  "key9": "kosVT4UK64WZab7xGQEvXcBMvVA4hxgQcBrRn2krBRb7vg8S5YD8F6B9nmxULBS1n6akjgqVj7fEnEP8eWSDovC",
  "key10": "25yEXztyYKJDyfzoo1iuQGUeYN8b54NEvmvF46La92yawhdppbF9qFBvZrAZy1bV8jzaXF4LcHTaUYdKNEVajwdc",
  "key11": "6199u5QzSJRW68cpW15qdNuGN1QremnXw5sT25DCTHVERtwAJ9CpTaCvX1y26A3Mtcgafi3y45dNNNp58t6sFaCi",
  "key12": "UQ6jLZjQyE9NF5GFRDtYkBH1rp1dyChocemgiec5tx3Yh2dtYLJXmSzLMJjq8qmgkifns2dmEB2XuwQzqTt93zt",
  "key13": "2m4nZStkWT1QzCpnEQR5T5cGwkuZYruW2pxZxZb6Y9PP7eHRHP1mmdmMhUH78EjVhti5qAB9xe5er5AeePeiUuVr",
  "key14": "5HyU5pALoVmzXscVsJwdY16eayQLYwfMiNQhzAPtMkyx9CV4URRLygdRx5SrXoriF1LK8kTqhd7YHraqsT5bGfPt",
  "key15": "2sdboiZULEjQaLhjq5fGfPymxo26knqfUU8Nw712JPbUSibb3fYhQjR8czTGjRy9CDePnhTUYV8KVNKmTvXmQL8q",
  "key16": "3nN7ShtmPfH9VLfNwdKe2ysvSSk1ufQqL3HEcroyfoUzCt4b6shrHkdmYMVBVVvUbGmDvqhRfWLCs8Kw8hPnTR99",
  "key17": "5P11ijWaxpmRU8UMbnUJygPwuXUr1HpZYZWy2kvCZxU5VJ84wSuCjvPoGGxuEL4dPszAzk4JLgg7PmuUtz4zzgcQ",
  "key18": "349fC9xULTHsTQsD5FW9aoxv7hugJNniJWryB3MqPAm2Rn3QWypEP8ogfLtiG9qQwxDPnBbjT63ZLw4Cy1pWh4mw",
  "key19": "kfyQLeo7h3iBBm3cV6U12GPSgtXpi1ZiCJFg9Juiv5cxbrsSMymm3imfzNn4iH6DqnmhdP98eNpEEuaNGmdC8ZU",
  "key20": "3kb9yQr7Uk72zDsXCHsczTdRD8xdPHmXB3intj3DLEJCrT7xdPCkG6KNerY7iBEF8zeragrshFusC7nkhAAiZ3vf",
  "key21": "3rLAaxqygDreYYGynKdtw4dNWdiMH7CfxVy49qzA5tzRQ9U8pada8Zjp1EkuqdCyinBNW832Uvqbzhu5ijkRwUoR",
  "key22": "57mu6CGRRg4SaSk5dnNSjQAtLc9AAeJZgUUDPKU9Hw55ZZ5BB3dh6xULHsjMbCMUzjqdNRdepGkZQ4M1yfPtfUtC",
  "key23": "46vfNptzJrUD24epewaBEojLXFJjBWPrPuiVfw1hADcVJazy39kFApXgs6FyHnAJc44Ax2zghq8Q6WGtmKmv8n1J",
  "key24": "5LWmqKc6E1jGyKMnGmZgTGbuRkbWj8kPwULGd36MJJ246GKQqqTQzCVu1bS9jKAZQzPwRuytyWCjDFbd135MDguX",
  "key25": "5wUSmChomtRfqwZJorfc7LztXco8DzUyMuS5pS4Gb7eSPaQuT6uBiVp1MAkZnQf249T8Ez4EiBShAgnphrKmBp4c"
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
