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
    "3WFkDQ2ot2v4XHxvF4ttpgMtkgXhxRymW8LVmjsPUgvPejit97gwr8YdLDCFfBc5Esx5AcJtNWTbKT2Uh2frT2JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUm9mQnDa2up5Y41UhCGfSz8jhA2L9q5Zyku8W68GHQfp5dR36adwFrUBxdCRJph2K7C3hwic3Gft8zTU4y5Yey",
  "key1": "iBTznFv7VGLR6YmV2fibCPn19Fi8pnztrwCa3NGCS45hfeW6CxnrTfaKv1yN3suoPafZuLenc5zSHG78GQwfnLo",
  "key2": "N7XYQUKm8xUMHc4q64YqMUpmfH1KbsMteQSAui5WBhNjLCnMEYwqEKCSiJvetWZxp68HcGudxsCetsCJygiyxVk",
  "key3": "4roFo1SJ72VTYCMRMnHeF6Hf1hkcpPDGPctgXX5wLCotz34o9muexgkZCqtyoLrc8eWQXPmyDM9LSk22kST3USrL",
  "key4": "5SoWamznV7GVLbwwDJKPYmZNhvEd6uUGvzBiEwVAVTCSpEWC4xCZQE1NTL8cWhtXonTqXFEGUB6ooWRknz8TP3Sy",
  "key5": "3r1yPTPUay2NpkwZyrhR9JCRzB6L3186FWHYxHfEhjxwNymG8nbKgJVaYoCCBNQuzuMjUBRj3vGDHgC8ZqBhXCXV",
  "key6": "fuC8N9nefBM6uQixvq6xxcXCEue1nRhUdFHMUKxgQj9RhSjAU6kziDiM5RFsSfjY2vD2WXXSYE3pRqQUVj6qMvc",
  "key7": "563USVrc4KPuHUxfSQoeZycsE9VL1uKietXQNHkMCFFwMLYHvLjxMvu8CpguzG7koefinoEUXusQXGvQjeuHw47b",
  "key8": "3hvZx6ALyBawyiwBJW7D8PsrvfbeJi5HNTHJfGLvLTGr4asdeD9S92JgaXuBRXVTPoVNYCAPK8SzZk4GeveTNuY2",
  "key9": "3Vc3vSktMUSFeKRu81td4Ej1TRrpusLmJpLfayhsFdfNfNGoaYf6fZDyBcZRoX2ZxaWSjiaDeqvHhZDCYuFVWBre",
  "key10": "2fStZeDdTyKiXzcPfJD3MtfHUzcX4CTswdZtKWU7k1Znk9aZFcHxzfY6VT9ZuFWao3dkYb7SWCVSyn3qqg3JQAD9",
  "key11": "5DLAQ6enunjYUkfQ8VGkonMUHA36cZP6N7H9cdCyfTEE95Sjfp6xxSEtgy23ZYfdzA84HNVcCCeGXpxWJQyDmc8L",
  "key12": "at3N9Bvwi3cB6i8kVgDX9DVg383XztAvGtMy816jQCs2r4pqFkdXhAh5tSYjodbtFgs3hiYTiuQGTFQSq3vF2nT",
  "key13": "3LUMVUAr9zwCCUNLX8hK61cRnGq4kw8XHHAWwd9HtN5ZQyXVdyGRQsu9h6Dg6zG3Bj6PhD3TtBu9UaPnZTxFaMBS",
  "key14": "3nm66osdJYTk27qrgXdQpH6krnwxxQNer4wuCrKedZXts1uSixFf9V873LZi59Y2erbJ7hLPaTQ2GdGqntdVTnkv",
  "key15": "33n5qMS6ZjYaUGevUWZzDs1R44KWduDZaFzu4pVFoAsDDxCDXcpKVqso2CpBgJTih2MVwetpQVELgnghb3KDXpbf",
  "key16": "4C6wV8bfpBboMcEwtFbVeieqiq6ELspDKBXK63DTKMb322YErzzs1ZW7h8rK4xfV5GG1gkAWV1VwoULQECSUuubu",
  "key17": "mYg8sPeMxUFWWiTttsDYYUg8JGPS6v12NFu5e5cqE28mZM9AeqRpZhJ63uj2XMucNqASr2GRBNmvz5XVTLZGHtZ",
  "key18": "3hqRRKAV6yqRBAD67m5KNVNNYkBD6rACAeSeJ7g1WwLhYSHqRCVTdYQb8PnbXNVv5xexCjUubTwhTQqXPbiD5hiL",
  "key19": "3ZA69tVyCMCXQdLdroVWKLBvF6anmv1B9e9A6hYrghxhLQU9vnCxczkZQzRBBDvKrJr9PEZcQD1WTZa91Wp7KJwb",
  "key20": "2Fgidw8XnwUGd6XTdSmoSSuRsE8QhiQmLTiueYLWcmQ7uY3DY8u8NUogZTGbgTzPsm6rYfKvLrFft5FXWo1JYT6i",
  "key21": "4SUaoLd4vW7Mrf8EibsS51459yQrfYSZSrPNSUojqXU42RTE3BPKztCJsppBN7nhuPN9JV7eLdSccJEyYnQYiHbs",
  "key22": "4Wz53Af6ajtkt8R9Ld6DYz8ZNH38yxNPSVU876CwPeRdaveanb7Z3pC1LDTtZvSNFWC9XZyJCFoeh5h6wL8T4dZ6",
  "key23": "36Ci7dfV9e1BDZ8LWTF4uzD8Ef7zo6JeLKNhaANtJ4MJvrxbwMhiQXjKo8RjPLrhgzr7MTKzmWrTx319cEby8rWU",
  "key24": "4P8Y6YcTwjdsYJKpTbhYRPu1JKCupNoQLHFKKcCnnuARPU2u3cuWRDh1mSdx8WcCwP5UZYEhhaTVSFCoACmZ584H",
  "key25": "2xsbfncfvhDjR2K3sndtna64i2TecgPW2Z9NYFgNUNk781k7mejEeo1NCrzTXHM5Jdpuc4NoNFgq9kgBdibzkiwh",
  "key26": "2uAoTVD2Zd9tpWxeoUf6ag3iXCpk4LmX1EV3acZmqv7DtUvKabtzG4PKDu5vts4ghvsT4nufLrTPX5GKFhKy7PRh",
  "key27": "2XvtBkMHZh4v2kNBdEHnsFivUYduXXdWQzegYBbGqABb1WqQ141KNyUBivfkbxUvFDCY44chwGMfnEz1Z9E4Womh",
  "key28": "enqnWTvycdoeHdm8hzbqUtQHzYnDgzf8PZdCk9LMviDawf8u6Dup2Xs1n4WBHY3m3Tu1tGW9bv5Cr3u6XR27ooq",
  "key29": "3fYpv5KodiPjam4tFYQNYv8ppMZ7veZAm7mHBL1Nq7r3kWQGwGZaYsQ9mcePULhN31K1XejycDhnNx3jTvk5FQKQ",
  "key30": "3kbM91Jr8oJGrMDwuyVmA1SVHE7LVSgkc75z3ttsxhU6NBbXbufScDrJDntUWDPBtefmxzo2dYeQtFwy2vPMg9AU",
  "key31": "4yKKQCgr7mHYyrbzqFZzvtTmpasu7qy4RPxLxeDqJA6WGMTLFMG7a4UHGgQJs3MLS8fZHKRSQMuq2FKBhd81NBf5",
  "key32": "arNfoFyUSta9Lteia5k2H7zVUaJzUqACY7r4oBMkdTPiWoDZBmuJRNVxHNcdgmEbEDZ9h67JPhoTFartjkVcnxo",
  "key33": "4R4YAd5crdNPeXZ3JTsCnqM7acXwtoehiPgJRn27LbJRtLQ8zCEZURbuFw2DiaoHJtTwWzX4To32HwHqHwyPBMW8",
  "key34": "4hyKTneVNwnWdXRmDS1yK9eBbuSN4LSkme2gKaPwXqq9ZNXdxmf5P4j4CyDdCi2TFTN2qNeiSKqCWdbvmF1ozoWD"
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
