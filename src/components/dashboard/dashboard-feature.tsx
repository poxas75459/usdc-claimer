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
    "2ktenRLtj1wGzG22QUsTtwPL1cZ9XwGFkbDUkqtVYEGaeRaTyfzLm8hZG9BQo6moQ1PgULHcBo3kdAV5zJ6Arco4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDDYt5CatsWCynwHjHXFB4CCGrEsn4Fta4ff47jY69t85Xq7UhgEa1ioAZVCvMZaqQ3R1Q9CphpUTU2LEwoX7gD",
  "key1": "5QA8KC6yacDHJqCpwz4FZJUhvd5HDqUiZGQNrHdMfDmVMKFkQ91Rn55GL13Tbqnmt9AugZq7mMcKstaQkZgiusbH",
  "key2": "52wVgZisQ3SsiP7isjxc1odKFehc7MPCwVaSDjP2QFzswJhfcX4jk9ceSum5HjKv3w5knHoVBjGDQCMchi7c6o9y",
  "key3": "3F7LrLTtaGAHaAcW1e3NtYv3auNztL6CcsvpNuW4pZb9yMLVZv2985wANvfiHiwVCNMLsgQvT5tr9hfyHQTXVnp5",
  "key4": "4dZ7fP2a9we2PnbjB9m4MY3roi2fUN6D99Up3Ffpe5VLrnd4dfEVSJAvvyfU6WAagnqWCx42cpAZQ8ajPcc1omvm",
  "key5": "4yF7EzrmSySJytCp6GyQiZx4tmQFRwSHNPxEHoyfv9jb2LQfahg5Gup8miU2v1D5gE4UYCTof8CvoVgQLMWTqZax",
  "key6": "2ryiZaihpQr2oqNJNfuVtXFvNSsVy78mC3JVP2B6JzMoeV5Ry1HzuoNMXeAXYmbuqWDyMFMd6JkR7FkT36KRKk1a",
  "key7": "4evFUHoMrtvgRZvcuZqgUZekK6biygm1Ff26wbz9CTfnV7zZTSrvrkguSmmgNTiqXQD4a1kiWPuzbmceX9HZah4k",
  "key8": "3AqiZBBw6qKnSPofYsrUpeCefEWyd5K4TgYirgMvYBZiZiCVewAFjHiXodzA3Zq27fQDjfkyMko9bFJXKx2M2wam",
  "key9": "Grqo8ADjZq3YFSvgAwjxu97ohcvub2d8RoSPYnuyvEk6oi56jGgVSuYHVK56ibQarpp8tJ6AhJDzfxxYagJnP6x",
  "key10": "YqbqSN1jiP5VgKniXTKuoc725ETYskCGpjFR4UJJFtVux4CVEsFpJ9eaRAdZac3TB2zccDUbty28xJvAnjWpCYr",
  "key11": "QTyddu6hooBTjsGsEBf3LaH8UZaLGE2U9vHLJVAdXtFi3MkQVfD6wrVNRDtdWtWPxhHBs4XB5TdRTKzJz7wM6XY",
  "key12": "3KzWUrpvrCYcADqjyNu5kpNAX53iXtpbtWTU5Cjh9pztaNBggaaM2XGJuneJ6x6Zsu6kfvhkxuHd7mw2c7uY78hS",
  "key13": "2ow65Z98pGgB1ys5ARgostghWt2zVyH6quEQAtRk2dWBCxLrxcmLSo5917XbtLRfmeBydxyaAJHuWGrq4dbAAxnh",
  "key14": "41Upm7erFWLJTTsrwRNxf6R3Xp9SYzgdxeqEjk5bWKL2eq3mqTxJGqn9VLeEFW8JhWeBxDJe1UGoeYycL8yTQZwQ",
  "key15": "kpThpAV1NNCXhTCGQ179vNxXgcAsrVSAAj7V1kdmSRWeZF35rvNJ2LQd8mKhy5cKC2gSRaWN4knSVrwSRHQGBNS",
  "key16": "21geaCPchr3q1f7TGwsWmX74YDuAxZzHCEFekQP5m7METGdphkmgJda64iRQruTnpVqZXtLTLLndFUuXZqTD9XNP",
  "key17": "23YLGr7a6yZzX44T94zHPLgoZ5S59C9v3dnJ8Va6AFPmTbtJYDMjL7N3knUk7Q3idUd9s2pJADS4vZAqVC9rvq4Q",
  "key18": "EZY2oB24CMod4zQEEtFaHp48aELvERmoDJgvxnkXmutNU1aFcvnAf6f7GbPyX7QUCbP4giD5F9DmGyKGHFwMoEB",
  "key19": "2BgrgpQhzHxVhREeosViZY5EHJ3xNbzE1tEnLd1cvSkHCxdZBUjg45dR7ihESUvvNmSM5g8XyybzbiDuBFwLKni5",
  "key20": "3wjiE7eM4KsWMC9PuLj92fDtzo8Z6WnQrCy8sZ4U5Ti63GNCDZM4DYgipoN1STgjEhcsLbZLLH2pV48n3W83aCQ3",
  "key21": "2eLnH7f1y1Ah1KkyERd96W7re7ueLt1SFogiv6sfNJBhioFFdS2c9ugnjBfngvxmPkH4K9g7kN2QbEBa5duL8V92",
  "key22": "HTY6Y2iMx2c25T4JqnfJKXi7opbrA9tu6u3ptTmaGMX32oBAzPZX8x7Xwp15Wej93QS8o9ZWhhMQFYaHv4VTN8B",
  "key23": "3f8fgqiUPNomcWZc7Dp4MrPba72UDbYTgY1Vi6mtwi1vFvwoXyayLxRjGQkRootBgsuVSvY1Z6VhSoSuP8PhmsYp",
  "key24": "PM4P8E9K68nKXQ6LebLvYRonPA69WtwMJogenZGaKgViqxbUUn5uLj7oibSpRQPNkLSomaadzmVDTiMa89N4LTh",
  "key25": "2MB91KpNHmYdT1LwziUrdWhGMerVJFRhtLNtGvAtJELEjpgQmXCM45XYe2AGHDbjN1d8FsA9dQoz5PqNsjKTnhBA",
  "key26": "28sMaieLVSFh3hGZt8jTQFUGPMUk9DU2ZFkQz6wj5nNgDrfsk4aLbwjatSeT7ePMFUCENerEKGguvo2HtQRZAqKv"
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
