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
    "2gMhAXEGdXtrF2xvX4dLqFbJKmG3HFj12FfzCuA669BfWetAs7GturYZaEPGjSJFp8bNz7MEMKqpBENcDhTwbFis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h82yLCjMwxmMDCn5bNwhXbwrpbvnc18WbX1Y448RffSHEbjJjFPqLdNQKHwbF9qv2drHDrKLBE2xwVg2ydzWDqy",
  "key1": "4TLVvaqVRDvsiwZLRD8FGnsQ9gTYzZLdMxCGYtA5jzPakfGeStjGEVF7hFh3MWnW9ZhXSEaC9n7okvjrEpzqoCFS",
  "key2": "5JvWxDRFdjauwnoT5dXKVA82SP8EQxB8DQHhomxaJB4WbcgQkXCxSUbPLXJKZHhN8mHGmdJc1rSPQYLfoMDjY9dB",
  "key3": "34fQCLVE3oqgVYXwEdpBCmvdjMar8wrqmTYELJ1RiruHJYGes6zLxnQUy6RCP1SCydKFgBVQpnNAzmibqTVHaaCW",
  "key4": "3yKW4GVcdcRyxUgvBgwL4QEqDALd3WF632RXcXwLunEhnmGRdSpeK5VPpDugVET1erWFJ9k23qGtG8bgFiAvAKYa",
  "key5": "4yz2mgaF6p3E7zG88eS97fdkyBFCJnWvoCv9s9AE2e8oqrYyVt19JsFo3ae8ZT1ZQt1r5NJBaBxBaJZU4PqHDJnV",
  "key6": "6JTxt8g3vcTXThAkRepFmhncprBy4HgLjNDCW7FiRnAuPnWzgG28fcJG17aKVjeCTUkMEvMhcnvAMPMUP1MZ9rf",
  "key7": "2Tb6zzyoSj9AxAZU4QezFCoaZoFBAaycgULnbMiwwRPZCgsMt8yCcWRLmtEdAqt7CegvnuZhtsosXo6uwZ47yJvT",
  "key8": "4cinfY4UtYAVJttA3xysKeLd3SsKiT6FkDUYpTZ7GBqCZTaSUaKyXPQgeothGLomDJkqCHs1ZkgkXyAWMfQN3T62",
  "key9": "4LrXFjvLF44jChhP2WrpUR4T6B8K8LFbDCJ1gYSyxTHfyLv6Fa5S8naToV7Q5g6mVGigoCW8MmxT3tnYCA4Tffxm",
  "key10": "3ZnTZYn8anEB1ezRn1MyJSwgimPZKXiL5GubqpPsa7XoD4ecwhBPWeYEFdyjbFEbcJjwVMzwTNr2gVtAR4Uqh2Do",
  "key11": "dY9fYTQJtjh4ZPf4LyEkviteNvp3qUjjFtWAZekdK2QDvJoqmYjPSESua8vbrKbLNqxh5kaJdHk6NUfXdVBDNHQ",
  "key12": "3Ykqo8PjXtZzr1dA99ZvVcUqY2gGpf3Nnx4jpGcQXqAesv33TyBzaXcYDbNM8EvvJFeYyi6j2VK8Bdrxe2vrTie",
  "key13": "4xKPgrWWwwb9rHzykKdCVcdfJTPtXByraY8jEoBDRyA5ftAUHkVf1fjujzjvWtRE8zUws4tRtw4nMVBKpdHpp5G6",
  "key14": "63xi4rN9mbd3PFpSqtGgEpjjuRouCYXPDiKNeHDQTqdoT4TBigWsB29JHMAGho7ibKz7E1NXzEsU7GfVgJuxoAwi",
  "key15": "36WwAsMuSpmCFC2NHwnmhTf5yUhM1v9Q2maUUB35yTTtEqe8gXrBKfFDemZ5ekQeTWEFj5kaCSUrM5r5DdUqcho6",
  "key16": "4Rnsfsk6RcB7oC5D8dkRded85JMMW8nJbFQAKiWGyPoMCuFXhYH6xF2WnhAQm9mD1F3ZDwpKrrYSafZCewY2EtR1",
  "key17": "dmuUUsUUibws8biW5P1Ey4yjPTc4ozMv3rYgkXDygfgXtGJi2CKFu7UFjGkizBjURqgzQxXUesuZV9esrDPHrKa",
  "key18": "2MHhw89begyMCTdfns1RRZmTSPfUt6iHbkvdHAQvN1CCHuPipJeVc6hccMLLvmrJCh4F3Uh28KzviPAJ2ncy77NW",
  "key19": "LRFr18czfnLwg8upMPGcQgAJYN5LtDbYBUH1WijgUMEgRTGcDhoC8d6ghhyajFoLbyBys131UgTUxFZxynSeivP",
  "key20": "2MFQ37ikVH2t2dg3aQRp48vkTef3LCEvUG8kXsgh4Ak22ViKTTVqMo3Jpe34NumXtyTG5HgZNQgSfUkipN8CG4yV",
  "key21": "3KwQdtCABvgNJENxrf4jq4x6gZZVJEfxDHKZZzcvfJqpLkortAAPoFvXZT4AnXaD43pzUibAW5VrrJwwwQafZeJf",
  "key22": "utjxcNsWgUq1LiUjtXbYjFAdMnfSEo5DAcRY2G3sBkaCEgjKPmaQWisswnNBM84HNzUPNkc1K6PS1rQ76VHHpfH",
  "key23": "45KLpzv5nPWmcfgXdiLG4tqz6zftMPA5S37dwi16Jq6aUmkzRWzLpYn8TPuzG73WiGXaxxeJSZoZ1DnhucBmVTmH",
  "key24": "3GTtresVoGCP6YpsUJ5jrb44qKtiZQEiTH8cS7b9HJtgRjV8iHCLqtEH9dxo7FbTQPPVEErh3myFMk7muf9qJDWP",
  "key25": "5Ngt13BwWwDSVqKZaot3gcikntCGchV9dwNP1odASyNSjHSfYGnj2RF665LNt6ycEZEKfGEhSan2GWJ73ZpUJAqR",
  "key26": "5x6TXEC2sR75akyWM5vvfLfbEZPRprsjLeUghsudF4ngoEuyPSjSZuM6pNKw39b3PRSLfZcD7hths6HEXbedR1iE"
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
