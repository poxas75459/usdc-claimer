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
    "29uQCRwMwSzzCHPQ4AMp6gKUXhYCyPQfvpZZNDoVtBp1t2PdRUmB8oHP2fov5PqhaUr9g1mREXLNt5PTTTg2Wnnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfHFhSWNMaebsrXrDnB4NuvhHwSk4H4p3c96C7UpKBe3aZtqSf3VVay9erjdgsUBm6Wqyh9Wrt6yBMR43HKYzmF",
  "key1": "2P4725JXZ94ef8un2zwFz43cad3o7L5zhaLZ8Sa6KKZ5fJVy9ihTMZSgkDtwgTnq5HZTELvF59Qjy23F1DcFBwNi",
  "key2": "5pUq3rA2f82SuJqNBMMZDLZzqjSPFisEYYSZK5b9jS41ms8yMa1z9FBSG1wcs8Si3a9ZHicmRNUEkHLSE61ASMgK",
  "key3": "27tSpdTYvcMA6q7YWVFYkVUi3nMoWdwV5qJ6f57rVTnooVfbU4NCVUJYY8ucDiZqQVSVbqsq2QxVV1w48dQmq6Dm",
  "key4": "5AXPGyDKLG7LxKKXgfyfxBwN428c6dzJp5TyprDWtw8Bkb6vKxSYCdKnXaX9zJZCe5fz7kQpv8NMJVG9yacnaTKn",
  "key5": "43EU1gxEYvyrtBwQQ8mjChotHxJyYENzdLZ8kF1LwPEXEbds6i6tSW4eo3JuVbxU6qNbL6mYDootRk7ZarehFnPT",
  "key6": "641Cywkjsvw1JJLnPUCBFg3g9y37uiR3RNWsPdLVxhy4Zcb5Wdkcj3VG9RKqT5tVNxkhyBikjjmojnxKZd8cueoc",
  "key7": "59DznLfwY7bvsZ2qJ3owf1htpn9P11eCaiLtuB2dsXTrgUVuMx89Ei5TM43tkSxZnNHvqzVGG4xCr3UtXySjtqZA",
  "key8": "3AxHnzRc5XeNdEdD7UqQzGYYsBtndAf182rbqfMDwZyTkPqxNYy8wqWGQAzzpXcqHnYRpsrEyy7MUvMjfRM8LvzG",
  "key9": "2Jh6bjfYNweYbjgz6QXxFUjq6vWx5XcZroCNJjoFcR7hdg5RRawSVGXhPaGyyYv3aftu89GJLL8uw1rqeyFs6iSg",
  "key10": "GX1Qo1Cexsi8NXVHYH9BsJtcL3FpQgjqX9rpm4YhL26xUk7trC8mBv3tiazbhcRtW9EZ8qjgiphkuE9XdhjYY1k",
  "key11": "5GT9i2Kbuh5six6R8LJLTUS33xymVNeuw6CHK29gocktZLiUncCc2H8WD4WcYXpmcyKV3YMWQNX4P3ZH4jKuPuKZ",
  "key12": "fKcmfLd1VQrjgd6nVJXtHE7Gy66W3UrEdNpTacpKfNF88Edsg91AVAWJW4wteshyLVQXAemZiqZMYaXzNZY7NtT",
  "key13": "61qMhe9pfXZ1b2ijUvoZjsnEzrgFHCj5igePAo87sKEzK19CokLaxBHrLEk1kQPsm7cnomZ5TNSDgNMWUhLkAYWB",
  "key14": "44GvZKqbFmngbfYaLmattQ6UvhLD3WwpAvVvEkGgbFsZdk3BHuHW1C9LwTYDeSBNF38nd7sRyTT7mnuGSea3xKhH",
  "key15": "5CAkjpqCbLJoD6Hf1usUK3rxC4tePEkZyacwRqBWmHHfMhPLwa6Tn5ovsSrT8Bg1SXmWAAF8esXjo7t1KfnBK963",
  "key16": "W73wSJkmwXq3ZstQxt4h54BZNWKQaqXzk94czE3dERfTiejXeYF7vXzsDEcAgTGazPzDpAUjfav12E2cUzzvwqm",
  "key17": "2vjGx2ZatZKvfP5Nev8a6EmGXzYHPgqxkp3ZhVX7ioxT1rCcmFEqv26rNtwGmBhoXPvjdd5MNQA7bKT1KW8zwecF",
  "key18": "qHczqYfNLQyxao96Km7VrfqKHrdWRZ7PAWGm1GCsDzZRxXpakk55dDTkn7Be7iGDKTAeCro7T9rccn9E6fttPf8",
  "key19": "5xoxEgsWkqooMt7jWpzHnwbgttqmo57JfF8YPA2GwR4tLiU9SMVaT7j2YEjAAohXcPC9b5gsf4ncjQpCD2h4nmju",
  "key20": "YBWjFGJdjbZxM6CoFFvAHQoUJ4jSeRzgtYPhbdU491TyVVrtVq5TZuxZhEtBaybRrnADLdciWUSp15gPwGFD8YB",
  "key21": "VLRwbRvUCR3JzYrSHUzh3StN5zZ5JsbTgqjcN2E282uix3WKaMoyPqLF3NvT3yzuCgTrNSSyrRYuvAHrpZjaLmv",
  "key22": "4EVWfz3ouxgXNHthnudariS3SjyhZcKpntWuH9DwCoZgepG9u6fkNcmUBexY61BF93axbRi7CUXG2idZERw9h3P4",
  "key23": "3eCcbnQXaJ3RS8v2XEEDqgQnuWHFkLc6KC46nhoHBR8ZyohAhn2FngzGHCZVvg1VKwAtwzWhksqVRquXHv74v3ee",
  "key24": "2s5VLTeYbCXk6JWgLHPfNovkdCFEtBLiDGYxXcERHx6dgx5UcqGke78jwS1bFoR9J7HBSmfw9C6BW4bAyTrL4Mab",
  "key25": "3czmKUncuDDhGpcE2x76EvD5fZgDCZQQvQV54QSLhBSKjqWCXUbhGCsbVCdMaQWaQfp3cnoDDA7Zx7RdCcivm8dH"
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
