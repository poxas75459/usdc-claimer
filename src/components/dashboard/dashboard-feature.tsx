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
    "5EQ21TAh5N1Ww2bnryEC3RQAKcon1TruqfNTJkFCgiY1EsfTR2hCsLHdRwTcN5VXAenJgwgFHPiymEKN4CKt25Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qU8TrFWbfzTiBZk7Cbj1Dcij4tj3VtDUHydrAjcEfxVE6iNXESpybrUZCExCwwMmEGtb3UAfduBJ5Ab4YCN1bC",
  "key1": "5SLEc5CTCx1MK571AXHinc4KmTH7AHNUqx8aVMeh8RzVgUui7AmCHmby97G8eynk72yEgXEnbZAxwyzndejHEuQ5",
  "key2": "61X12AnqyrJ58XkRLyrYC24ufrrCFT2XGkWN3tFN1pr2tLvCda18Hz4hkzDVyRkjD8D7EEULngtw9UUw9tfEcGmA",
  "key3": "2nxskUg6jGfNUb3zUf7anffxweV5ztVHT6drtG3TYYEj4VF2f26yFATTpgL3ttmWWQNsmgeWEr3oH4aGSSVSFzz8",
  "key4": "4qSY1xFrdruJBwCyzgDRyvFgkMpjDPhTDuF9Xks9M17dyVufqG8VaLvFQzCnnMJ6McFyNX8uLuuukkQdZyBMiunc",
  "key5": "w2UVnzGmi3FiJiyM2udEQEC4exKC8ooo7Fbn97CNXf3Y1WFUNuobvryrq7itB36ByM1uYAFaW3jGcLvjrdZwMn2",
  "key6": "3D7JgYkxBMviupHMA8PfYwidsxvpRgSEPha7ArQtycwuQsj7MRgd3b5bYJy6ZZ8WVCPmYAYM5wqWHsJywJNAWu7Z",
  "key7": "hKTwk2jSx59yJy57k4VSydgAtCrvuHLMo1dvZGcmcMrFLyZqe9fRUyimLtacxmzEKHKdr6ksmo5gYWkQdunfkBR",
  "key8": "3BL9PwE8kA9rE3WbP5BKLiASc2w3Gkrnt8Suw9WtKGFhdF4YP5BV2rs9af2EnMUYod3YLb4AHVruTwokY8tFPtAp",
  "key9": "2mpXwS8RNgbEtwFFmag8Xn62RSfdtoudCZyksTdaW173jUK9QYdgmcphzCamSRpAjcrk1SuzP37A4sUnLnHAYjph",
  "key10": "3Cet5dieSremqyUb3tR8ogX15dz5wM4pSTuwB69tYSpx8mzWYVp7NcckZEKBPPcgoN8mRkEfTvwrAA1AuNQZ1Khc",
  "key11": "2v9fqboyqr3HhEBJxh9fWAe2boLF7hazcp4UPYh1S7BfrqDXbApxZYpvZQKC4uuqW99DDc743u5QJQiwpXwbpT5F",
  "key12": "awijP1fcgeqadTJWL74jBLefYTpvUQATwEK14ozm8ERUNiW8JX6FLCF4HXBpJgQEaSi6eQt2NNKAzraQevWNi4b",
  "key13": "2FLYHTicVrAFhKNMoJubTAKKTuig1vy1YsDiX6U1Rkdpbh86Gdh61hHtb86yYyEGQUmtcfki7zywBX5Fx4DYJVo5",
  "key14": "5wD4zguYBnktzecY9d9XDyuBXpuhWsYEP6GaZs6CorghQCVD9hiQwmjYyS7Kc5QAEFjjU4WKgSo548B6tVA3LfW5",
  "key15": "5z44zvrXHuGN69NSw319BxmjURu6fRdTYDTis4Jq2UuDgXGQhxrMmCHJFuCvvTse9H8vjPZBWLkTUnt7e3KPTMdZ",
  "key16": "2Sg7pQpvhZjMrVE1JJAVjTPxKzHUZPL45bsTQ95NsZkvo1kc7wdQrTFs2RJjzK3irSjtqaCSqiwZEsouVY3946c6",
  "key17": "2ekp8qV5cfnmWWD3ze7K8Va9WR2poB8uqQ2BPLkqScbsCDJW8ZTYNAoX8jHz3n6mc61PgHHFC9LiLNUobJBCASQ2",
  "key18": "2VAnygGG1wLZ1iGNeBGM9MXir5H9rNzSvUPH5XUo4KNX1TNnF3mqQT2pycdNH86UpLwJTfXkG6qvoNHJFpvnc8QC",
  "key19": "4UgfSzV8WG11DafTkoe63mNNeznYKL1Jxgk58bn43sJ4NrCbcjmPnzESHQhFg5X5prQEp46HUsAWSsgXthxjQzbP",
  "key20": "2AVGDb8nn4dhdAzHbByHbxvkviHUxB92ZeYbKofDDkDfb4pNHjupcj3ykAoVPsTZobSwo5WJXUjTfwbVcTMqibXT",
  "key21": "yRygysiDERNAUkG6uHzQZSFuBtY81ynsqLKKTK7s2MVkFdCdnog2dXSS8GoFVYPpb9XviuYhefwBbKUaL9z5vTK",
  "key22": "3LuEuWxcfN8HbYWnPiPxt2EzwAkyTPHj5Qth7tCTuAgNGrTKv4f4jGXpuNM6p9tPer51RNHim4JKgvWD3g8wx8TC",
  "key23": "WiGNgkzd4udHtNQa32ZvXjzCaS4cywgbaNxHcW8Z8cj1HNfWDaAXVKF3A45CpcJRcxaELMWumhBdcQ4sVCcahAi",
  "key24": "4nQ6uFnbteXPa6Q1ygDmd6xhSZoNzviVQhrQfCLg9oFR983Z9vFY7E3ttRUP8VFM8Re2mBuYcFoZgKfQjYuYAzDS",
  "key25": "5ja2vHib1ZoGmQb4XHPSMHGP5uEgSEbr7kBikP4AQWoinZmwjsz5XC8PjAWBPmk6uHUCmW73usKsMc2fgx2UTLNX"
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
