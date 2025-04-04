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
    "2tVxfV6edJ9ya458ATagT6GH1mSL1wfXSPYELCxqqxSPBvWp6WAqg6gVDEUg7JWDN2j2y5zySxPW2do65GzX2NnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Muhb3egDQ8sc6pu5NChGwSCFh47Gw1cvTUDKFDuLpAiXMaGFtKkvdoiCWfFrhDdv4z1pAvBs92KpdvksHhb3A2d",
  "key1": "4Arji5Pmyh5TJvpEJqynBHDMPkiRnKq12nztYNbThYABre7Ft2oNz5aNcPBM7hbJ2TvvCCnG14CkscYaBdhzNqkb",
  "key2": "5eANkLiwdRdnvm8pE45w5suFPZ1DYPzXhDs3zQaDYyykjYoaf9S1qwjhSeGvFzNZxoJim37b5fbEqNArMt1D8VsX",
  "key3": "5HmaMgdGYqRHvkCy9gBC1SwMFwr6GHVrz18qw5YjYodu3BEH7jL7RkURVi3jy553xGRwUfuEgwpEkXkEurgtTfnj",
  "key4": "5DpXgxwASvuP86rZidgpshLMMYcppgc3gwCZwLDMj3Ygez9nTrgiH1HtH5HwfBvUDgjJuBp9heix3BXrNoketT7Q",
  "key5": "8AHtFtSRUomMa8K8DLFREj3Rtq71MfNFLiRUCgztpGMGq38D97v9m43AGacvNDLXdRW27UZuF1GcsLvVUsp2Bmf",
  "key6": "mmsrHyMQtGrFEsUFyr3bXs8YQvhqxsGrJSESDtidjGnnWvau56p4ayej6VRcaK4UskZGQnWnPQDCMJ5ma746PGU",
  "key7": "NjrZUoL1U6DdHEdM4gxcQnmi72go3HipD6UKQMm9t9WDaNFSys3iMHKDzMdtQXKXYFJkDavAZ4osU7ajEEf4i7X",
  "key8": "2LTm1eyyf3JTHtAkVKkGSscbY92eeZ6iMLLvHdDrQXSa2fvCLr95HhLvuGc5Uxpf8yCBnqUodbRvy2YjR3ZqHcKA",
  "key9": "3J2aV9J37jRA8E967S1sXyMnYK6DVoCGdPcfwh14tRXLTunVCHPb78FpzZD2ZzPp7SjDmp93AFUyWk1be8DR9TCk",
  "key10": "65b28JvCFJMAYPox6XgXVNN433N88UbTRkDzyDhDNs4NfTDAirnd5iYbpNoTDJRbDaU627HhFKrXoCBzq7BQKF4s",
  "key11": "49YxMK7wiqq3VAoib15kvANmh4dNRg9qwcKMuFatMfxRFUXeaJ5TZPMqmRWBiSrGdLS6qTzYzjo7pgs9xE34XUBQ",
  "key12": "4jKySV61o2MG8Zms795K9HdD15aa2Jcr3cjCRqW3VtvvYfDRvYXceoXhhbZN7ghK1PeChSuMswYuXDhnK1fLsfxz",
  "key13": "jCanr4tqMx3QwCojm6NeEujUcm6tdG5xJ5a2dZyBJGfDEFhgGqr9bc5ydYX2avUinrq2pZFPW78Nongc5P9j8NY",
  "key14": "2kFCjTQNNCysuz2hxLvGcsZ9Qdiq9oneJoAZpmPrxfFbZu5qWpyA3ms3XKyZG41H5yfDSSeKaNEpYfShUS6z6cH2",
  "key15": "3y9oprY31CjvY9zEdSJiE2frDwuukF7UCXcqQw2CFrnTipg9TysrpBYAbCVVSAMqgUpA7nQfmzipp5qQeMN1557g",
  "key16": "4PmLsTANMQ9mDPF2VkBz8YUom3Wn2isURdJYmC2NiqcUQTEM7EgbGsY3QPLFi1ytbLueFQeREtjSzYPZqBaDdvh4",
  "key17": "5G5ZkNLLukdPD6CYCX6awZ83W4W2gXgZ8rL7MmcFwJb552HV6GrEkjpbiZJymE1Nz7QrKxH6nsWbgUqJW4NFrLAS",
  "key18": "3d2Djtzt4ktBXK4NXyfQoczAqDb2nNhFUkTugr17dVravAByCrAqLAKB2gFWzAVdk4vZEBVUnjMTGoJ8zfFUY82e",
  "key19": "6iMCZV9pEi7UZAkwEFLewUMppmK9j3M5ULLjH8dnUNaKU2YSFJioCUSfkubLawySmTQySnbfpDuj5i1RwRCqeG2",
  "key20": "2j7A9m8HLT54EqcMpUw7EMR7TK41WvKtNUybXo3RKrsQSKKF16d1ANowyegt5DrW6uhQbvDsgfMkqvrua7MwDgpn",
  "key21": "yRo182XdvUPvZNkhbDSPk71HXprkWdp4wrirNiYBE3jABFGbwr8xB2A272mN36623srJ9WPY1x6ZCyyZDSKTAvL",
  "key22": "3jZn1QacqGjNtfNQxMxLu2dUSgGDCvbSWgN4UFmSJf1BaXHguM4W6sf3VR6fi9NKTZYUXNmF8hQ9hvUQ2wmi7PNC",
  "key23": "hBuugLTo5chFw7FkRMWn9ng5HttazQWcLe1MPLZPQZCYT6E4o41zJrBW6zFD3Ft7mZojW7BDsMCXQTtAKpP4bfk",
  "key24": "2BWk3kRLDe2qk6kcM2DyahxtmvRnCrHTcj4qH2TnFwszGLX724yZZPRmzDZFuTz5gmQSg7Y69MK1qknfAsLHfJXT",
  "key25": "ZP9yQjKPhyY1DWCj9FJbiFzzw1gs6BEdVD2KuFoGgbmy5TTGHimw8cAhHnGGtRkoAwSxE6Mi6pcawwkBCvgjTZE",
  "key26": "3r4nqMo9mYkDQeRYrPXPYVsTua1mekfqMavRyJWwt5VEbwWQVSyZHYSdpRffHqWyoymLx9s8zzcCJwVFyZ8PK5fu"
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
