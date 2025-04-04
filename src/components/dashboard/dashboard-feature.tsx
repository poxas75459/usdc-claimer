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
    "uQLT4MnkToR5npXh391JRQ752xQhQ9seLT5K5W1hfthhVih41921r5giVSdqDpcH2opyvXW2ZWofYdZedvieNMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GYo5gRRvKQer8S2E7mf5meBGxKV5itmQ3QaTZdFiZHttmH34pW4MetqTwLHK61PhP4ZQkS97FPxiGYNnFihJqG2",
  "key1": "2CyHLoBjUpipBtPSnZZvBstRgSXbRtoAkkuJttVjHjeS8wEa2NnyikTqYAv6kcxwZUqEAWECfk38iXj5Ex4hUKwW",
  "key2": "RDoZ6Yktxoea9paDV8rPENngpgndtCP7R42HuJoiiFTUymDFmQpfoeZnHV6aCs4MAh5PSBhzPWRWY9kZAx7CWfw",
  "key3": "q3fVPbC9NnFx33Pb3GMDwP54zzjc4nZWo4FkczGhCtnjdz6wayNRwiV91RBxZ9TCU9Uv5tXWzQtNf8ps8v3x7L4",
  "key4": "4jcKp5cmhaxwoyxhuDCXniKnoD95dCraVdd9aTYuXr47vt7X3P3KY8DyUcNLt3PvT1RJaBB4amoYYZx9FegwVgoV",
  "key5": "Da5vsXoQky6etCA2rryHCgJMSzLzfEGEs5jwQjvtNYcMfnZixfRPGRFYgBz1E5pnWacZqDGpGGev27un3Z7g4V7",
  "key6": "uFYhyCrNKD66oSYenV6YhpAvGBFKMzYoc5YBHXN8VPHPey5RVL9kRhirX5mLzZoAsEr7rKQyhjogWdZK2ufgfHL",
  "key7": "BwrEWD8a7e38vDKzJwm1gAncnUKkcZnZjiAsQVhAtYaT6bh81anNkWDDvSBAdr6qAU2SLi9aSDyD32Kv5Ga9cDB",
  "key8": "3Ag9kLf5oy2HefagherNeqbNMTBDdsVSQgUvifVyQk5wErKESjS4UsQwWnXbATgyab8K6eHM1orADwtyh9i7VqMf",
  "key9": "5iszD9fB7iXuu7WxyFRh3ZViZaNdb3awaaqFgVyCGuWjhGCSXmhkiZXYmMCHc6PVr98V46cUfPDEczbSfjy5XLC",
  "key10": "54QzicSGnqCBRebZTTeLXmwrjyeaZJ33YoSzeAX5X3MCtLSCkaZfT9DXUqzb5bx3pCYrkEzkcE72ns1vhRv1NVD6",
  "key11": "54jvVoG8ALv4scDztMWksNTqdjLGWUNDfwaHsKoKxqtQfQWFDydPUrRz2BGAaatTPH7gLyde118u1aNBtd3wVmzS",
  "key12": "2aCUeyaj4qgiqztJcCg1TkpXT2HBSQ3GAFehF8P8M2mdNj7CtjPEg8gh6duf3VFnW1jtjRTG9GgUCfc91e7ymdrH",
  "key13": "2eGwMhpuzu4B8nUugUHMeFf2DbK36nPts6U2w1ypZgYfumMeBmLugAxdAq2NmHjdBEBk3Q7GJg33eFN3XLsBy2Yp",
  "key14": "3JYChMsYr8K9PaWaGaESq8rBVcmhGp8pLF9yWSQ9PuzEpgViQED5gpnF9swGRehLuH2MeAXoU8ubWfSYyB7YKGZo",
  "key15": "5XPDaAawBV7KiyFi1DW6tQsGkH7cqD1643HTXmq4yeyrmJrGxmKPZDYTFvymQgxtbavKrg9tvS9aJkuj1Bsn6E7j",
  "key16": "63Jr93ZEAxcHEZJ3Ms6gRc5t1cTR3tpdKPair3N2Cfvn857nhuGuWK6ekkkagwJEZcexQpQJQkL9Fep9MpNui7L6",
  "key17": "5nqrmyMKfNhj1jDRTgBDayhEq2TiYkLn5dYjqrhqVWJ97xJzfqjCU7DxFzCF9f49bN1awE9RcXjMLFTyKGYQVy6i",
  "key18": "PPwd66qrwLqZnuqHtqtHnQTezqnfTJhrh3HrW6UThNrvKv6vmxbTvXkhVrDeopFJhXtG3ytFsKGJwidfLzPS5qg",
  "key19": "3mYtwkTpNUeKExc678L3QcC9m3dh48pkT3arNQZrJtAJ43me8XkMEouMDk34DSXnTjKi6yc3aJoSnuH6idRQ5B2B",
  "key20": "rn69D6FeoJyvENPCHBx2v2HNDF9yZ1XkS3xPc1vxMh7KxJJr93QvTsYZDZaRdrAQ2RauptGAuAyo2DRGKSQs1E5",
  "key21": "3vD6UV172fDCSmf3RBQm24rY7gELiqegCkhciUJrQnLaxrcEd2vv3AkiC2KupLgFh4oLu62tJXBQ7JceHkwYf6fo",
  "key22": "4wrcANxQQ6GHatjdH7SRBLhaxLJwHDi62gzVeJSLiKfJKfJe74BFwMC3zvpRLmdHB8W6UnyBuEe5LufT8LhjbctS",
  "key23": "2rwWvcYXLgz3BZAsN4nfNXbbZocNG5mKQdvaeZbe1ojzAVkK5FmxsiiJzt95yvaQ8qKRftkGcAK9dTMTTx5WJhMV",
  "key24": "5QLTaGk1iK6hkX5UzXv6fPcfxPbgnwRGwDpRftYNnWeiiXgMcqr2ky7nYT7sEp8Cngidm2GuVBpKNMvB73fVxWYt"
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
