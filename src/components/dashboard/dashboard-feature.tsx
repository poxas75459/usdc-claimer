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
    "5aCzq7RyY1CaVgsTDWaTnE5yS4hLXpBbz4nY1soajA1x2REHW2pc5x72V28LHfMWksM9HePpDzk7FoKoPrF8LxKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUSAgG3dv5HcxFrroXvK9GyVaAyySkMWqsvyHA2BzTaYmnV4swJA9F2xxe71aoTW9Q7p5x3eTiEmUCUcnT1s9Fi",
  "key1": "5jRNhMc9vTihiE8PvQYvB4Bc8pNkhzwqH8wrGjXKfMjiH98gxHn1HwL6d2QTPMtgshcwQUt4sJBgt9X7anFm2QcB",
  "key2": "jbXyFcnhVZdCpH8XGFLbFsHrq6QKo39oaBm132ewRcbgwisJq3Zhs2aTkro3oMMWhd6MRUiX5fZvJG4TQ4SoX2T",
  "key3": "2ueSG7Lqud7iE7tQxHjoHQrJYBduPCsTqzAZcF6XJGXS8nkqu7Qyf3UB5sKQP6m1uAEfYrWiKWRpbxGEemwnc83F",
  "key4": "56UpSvvPzT7LmB5tymW6972B7YL78c4R8ygZdcTv666ioL1Jv81z7Y98eZYAPTkiAKDtrbTu4TBe9ms8KjirBfzc",
  "key5": "i3WZuKumtQRQK9B9EEiwMcJaua9xDCQQeBan8vHojSRpdvGmYcSNwov4apieMeSSkvrq9kArxDM7rBpbGRF9Eng",
  "key6": "3YYm5hWQfRgib8XSLoyV9oiKFYQaUgRYmWSz8R4fBGTAQLWk3ffm6MJBSwgev1aw3ziqdG7YnxAm47PfE79WHTtJ",
  "key7": "4AGtWEbVKgQ61Eix74WybJbJXEZdPy73pFm89FZWgQNnyHazy6wA16ssmhadz71PBp9vqQb2YzyC1Q7LeiYuFapn",
  "key8": "5tALTtKZaJ89vZzeUo2vAuaK9qvPc1DCK5zX3nphvX1uChUPSa6dAtWHZacBPokieKHt7MPGBKB8UDX2vs8RRLgp",
  "key9": "5zbKh6RuSiGajf6Ze45VkCJ1xsKmKUWLFWZPtEraj15wptqieNsaAvsEy5RqJPVU79BJQ6GMWxGFutZh3MjN3we5",
  "key10": "4hSLpS5cv28zWvqcuQzqgajh4FtkWWicQT8CbHy7rpD42PG46nS8bFKygBKpYq8tUfssMng5FguJudHiug7Dr1ur",
  "key11": "5iPAn4uxL96D6Fx5GzmNdNgQNQgg546Sad1wAkvCabYE5EJxo8LQ6CjbAkupivqmTa6PXnXvH5N7NPA6aALkJY9f",
  "key12": "2cV39gKZ4A74vHiw6cixy2xV2sAFJ7RRPT5M12hfR6K2oC6oDZz5HKtSdzhPRNdnuRKqKLmaQc6REocvxRaQuTyt",
  "key13": "5i8EFC9s9QFMiTyMkbRQHnrD91wc2BCgNhExsdHXXUvbtWcmHoJVnt8EDpNF426H38Gp6Lg1rUZuWoAx3Eddrc8d",
  "key14": "ZKRYNSi13quHkMSnYhuTvCWPezaBAojX65wv22ixEJ4UBCvhBoJSnBP6KmarfB2BhiTJXvbafau7QnSXqAiRXQ5",
  "key15": "5k9oozmxD7LnkuJwmrmMH8NnFTNYVCzRrWw8bKMx2miKnKW8WJ9E4nRftPZtGHKzt95fF5CAPazKkGJpbeyyoApw",
  "key16": "4PFP88nURXpoXC58qrnHzhW1nY35T61eHptXhkpr7JxKF8gnCSNxZrLnddNyKQxC7EUuneWmGwfEM1xCsabnqmuS",
  "key17": "2pSGVVVBkPuVMkQQLDjsyF3xBZ2MeXTmmqdUTHMHCFJ16QEnspG67VmDitFXDkaKpJQPTgEViKKrCDnEwLSuSxUF",
  "key18": "2giKCbbPxGFXjmuMjZwd41kzrFBu3hRYAt4LmfY95MinbXP3WSvj9sVL7uBxTXTXYSnfUc269Yt3RHBFGBj7gvto",
  "key19": "3U1htHaXwsPhBhjFaMmRDeK8ncagH2zBYEJQhPaX8AJ7zggpGBd1mRrvHYWkUrofeVasL61GwuMzfEj454z1aSKV",
  "key20": "7iEiAxwNvLyrq9JQYGTJAjobrZNyEiEMzLoimWV9NFCBE1mLLGT71b9fqPyoHgJTHA6Z2Hfxv2ZwkUkRcKkrCQk",
  "key21": "4Q32Dc9XgnXhyuZfwu9oy6ZbsoZoL7DLg7VkPUL1r2nurm1CyPF42cGF3Byo42S7apkyYXw6xuHMNtMyAi9u6z2G",
  "key22": "hUe9dDJeDeAhUZfhMUtb8E4AfhptM3DKwTeRXE58f4veZBDrYaiwQmLCqbTLeNskBRwfnGp4uEHozJ7PFxfdcmS",
  "key23": "2tChCD35xBeJnToJXXMxkczo7ZuytGEQqmig2H3WjNC8dd3YMQHmRfasgoKm4LXhwwrWzxfoQYorFEETXDcV6NoH",
  "key24": "3HBcRF2gUubjRUg5PgigQ9nwTZ18ZDWHRn313eBKe5Pf4VnufXkdegKCbhAy9BTWfmxKzGiskwktJ4QUKT28Gx2b",
  "key25": "bhMoEBQDrZz5at1YCXi7grhn9fhrWHEQMdv8kSqhGf4aAfaZCLRe7nLBKwQ8iQCPiSHbt1b4uAckpBbRUXnyNyk",
  "key26": "3wRPDksdKJfjbfruQTJsQnzCFbjFtpTckHDmW1brxxM97Nz2VtjEgCppMrwSLXpQybLocCNKQKZmZAfR3p9UKWSF",
  "key27": "ce6zKhb7dNM1zEUkQJBms8kfDgzDnzgDZCdUWLgThnEkfCpTVxSof6Vvw2WWCr4U34SECoWCYfUacyZChm23dXy"
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
