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
    "4EJpKznqCHrjmcCs6U2jxa9Lvd6uw4tFfMdvm6NGfnXL92rafSHpnYZQVXYf2Th2yZ43chXj3cFKQus9NU51HtFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8aEo96RX1MK7R8H9XXaY3S4zD2KStwGoq9t5Vhe8wKyKigXmVqGYEvQWyETR19hFzooxZDETBVdcp88qdZnZQVW",
  "key1": "VYMVwQRZmQFyLmY59yqkgMFLW4Xnvhy3nJALDr8Syxdxzg33puyfwGRgu3uwV8r4wLiDFRtWqokLd6e9ek2i3DQ",
  "key2": "5riP9eqZ2pgPGQrKBVikFV6JsniKbEP9efqFrcShdfMTwxtieM1xAyBvH4svPR6t4eukaW2kf3tq9eE4MdBwW5u2",
  "key3": "4sHJDNEQowCPedpzRMCuYDxkXG3t6Av9vhqujRwTvRaHDWPS98QviYyaXxKeEciy1W7fan8bMsr8e2anG1fvojX1",
  "key4": "2WPuZfA3G3FP2k9ujEUcejefhmnY3ovrUkqLFrRGnCjZohrBXF7vpwevrjHsKZ9ES3F9gKXxF1bFFnweBHxH6Ypu",
  "key5": "3oDY2qJCW1AMs5vJakNK6dxyu7Rn5vxJvA7mpjdFXPmdF3C6wnwSqyhXApi65hQinBjijF1J1z2LbpJxvHoATPSJ",
  "key6": "TmEUwYzuxoQ1HsV2cWpayHkwtNbsqLSPFt9sGFiGEskHZQ6CdoQTHHJf3Dskev5j5uUVxJqCuhMX5ad6RQRQgr7",
  "key7": "3HCpZprDAkMaULRVTRrrYtgvNvXP2KFyV9dFP8Sb3HpWYBE8Wpi4vMAH2YdBL7tbq7zczvxbpxPXjaMvo6pEgMvP",
  "key8": "2M5gUhQTooBmGNy6iWBS4zEsvW5xoWSQY9iLSQhxRagVzU18nHJjD8eFLuAx3mZKqrMZtTMD8muanuEWba325HQQ",
  "key9": "PMraQbhZTkw4odN37AVZqC5uWbpdThnmH6PruHmAzYgaDNTpG8C5UtXWtS91nWRvf3cJ3UyUBzWQsT3j8FFtF8j",
  "key10": "5kK1t26FmSj8M8eqKTn2a54HK69ZrTWnNayKtM8z1ZqbpFXeipyKyDGZ7KVb5A6oZ1G2zzJRdY39JiCeEZf83qbg",
  "key11": "5MtwEYQVAZKT1TgrPVe2o4d4WjVo1qpWr8ijrCQbcoAUGqAjBHKVLW9o9m63RLMvBpPVKMzPuBjukH6Jmo3VKhuf",
  "key12": "zucF7wYPUdgggb1XD9dYc8A8Zhbdx2hDAuHXTMXUyXLXzePCNybZpG2x5EEfTf8QxshxVoiFeDj7iP5tg8c88SM",
  "key13": "4QpZMnwZX2M9G35U8ejh8eBAfSCJWKtRi7xe89RiynFhDT6jdWGcdwL5CAgnmFvJAdePdnxNaD77SUmTUV6etLbi",
  "key14": "3YcnozhPKndTn3h9JMgtaKJZmiYFxZVGHyqW1VCeEKA5txrjKSeGFVVzUMkJDRj9X6SxQ8fduh3DvfzcnVgqouRT",
  "key15": "Eacb8vDkpQGQX6Ub9JjSgci9xZMKnp3UqCDpDQvttKCHRxxEAA4MhW1MX22ApueGx5xjVMU2UX1wRShgd4XtzQH",
  "key16": "i2Ho1Gw1Lyq1Qw3HP7dithhdGD3C1cVAARHDJfYmXV37ideStiwMK81ALp5kLaBRA9QKT384X5mxcu8VbLPmztb",
  "key17": "Qk5TwkG2gvxtepgVNEJkQKcWEZZ4mWEN5SBqcWpRJoN4ygM3b6Pu79uc4qF1VDjsyQzUTEn5K3pecJAbvGTs6jY",
  "key18": "4a39M3u89caSsNZmB1xd1mqpgknNW3oDXJh74W5bQjsM87wqr6pLcaSzRtx9sbyQ87yES5gTuY4cdFARWVcTxGQr",
  "key19": "3TRWKpHYMyrREfkE9RfhfqC7awgzqJRJRaetZgCEdfVr8WGMHwyCz3bP2iL6JtPiBQrd16rDbg68h65EBF1tkU3a",
  "key20": "22zTCs26BFzCfSU9ChpM5VZUULmWNwzTh2rfK9uxoaffp3N1MqGdCL71PmwpdC5zbPbviEWzyfvHo8EMivjwdkrS",
  "key21": "hXDASvLQ7XdkLYua9SLpASCrduqGYmLbZKX2ESTYmpJFjhBKk21Y8taCJhAZNMiPuQ4ufU5azRXr3YcbbkFzS2d",
  "key22": "2kGGbKorwhjaKWo3hUbZahs4zzj4j7yjGJ3m54EfBxzszCEWM7sKgoAGSQjYg7xQHGBzLP9TZibQYYs4PmVfMbjU",
  "key23": "2wdoez3yyFE83UZdPMuB4FSdPvaLWUQAaShyAXpFSTBphbna4b33qZsNbK3RL8mr8hHvSUgVV79mTwBAZ1N3KnJa",
  "key24": "fQP2tBDRhh32VcnrXxhAgjbWfbP2VkbUBVLegdkJzJ8QWZHckCmTeAh9mcBokzet7UKfkGcjiH8MbbxXrf5mPUq",
  "key25": "542UPfwwd4oXEa9fE55aZZXW5snSNr4upGwAGvDKAcWzezobVzBRoLHPn1rtr78htt7MkqnqaDeL7tUCc2oJYzQC"
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
