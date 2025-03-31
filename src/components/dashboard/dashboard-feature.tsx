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
    "3cHAfoaRkvsjtEi2hrAjJsMpk3yttfDNVrKcz2K2WUSbCjNLCtdtQtjwWnyhNTnNfeXXpbJXijvSb1WSSiYA4UYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25q1HkqnDA5N3vm3uKYwB7YYFWYbXPuuBaz5MbCDCBEmZNxsgx4FhUxz7tHAj1rLXRGbAMCVwnhqHscn2GD78RQ3",
  "key1": "3e6CkjqhEiNzNozw1v1hjja8VwWhm3nnVdw16EyzEUGizKP97zxMYy1PmzHVRuAKxmVa2jkc8kdHEhVdLim35NZt",
  "key2": "3ThS1KgijDtYDRNLQpa9TwWX6j7m5yxei1epqoiJYVhDZohku6gEUuNZVuh9dhgMHcFFeFahe8oPDcoTkMMmJKar",
  "key3": "3NdTQgzc61UCV8qD76jTgMLgxP6LjPbsjmDfJ6GDkG6V5GcSdnSVXX7dEP3tzhuBCmH45fKewG2QTWyahqCXLPo8",
  "key4": "47w49GHK3zH8jP33BJ84LvSWWz3Y9U2fLovZ8pPgtiDNpdWrjmVqXYYEEVXqmKudBaHkECwtuofoivyfdQJRy7At",
  "key5": "i6ir9CJDgq8ZJhgaqhXEaouh2TtfpUB76hqsEuirVHZ9UPvgmFm26frhaJGGMmEquNnZJGNwBy4Fe5nY9oHjMXS",
  "key6": "3THB9rzD7Fg3Yebc2xG4N5DYGQ7rRhkgQc96DAKVfi3kXX3ftPdTvceeqbyoYYz3YRma5uy152AnTfC7JfKVQjHt",
  "key7": "3ETiRoe7GRjvyijY3ku4m7Ca1cPQGYWJoyYuagaoELnUX37hpEuB3bKNy1bDBA9cFKdqZZri2ZYwigx1mND8YYG7",
  "key8": "27JtAbvCkud2yX1MgqthFScatPHzkhEmphi31rnwU3xtUFYrAqF74wxiXbZakLCn3NRU97TNL5oN7V82zLGsEUAs",
  "key9": "cqME1e6Ngy9VZXx4VcCq9HrcRqGGsXFPYxSfgxbroEYquDnWerYvvixwW6zZKRuCburQUdJ8nCGfXzFjywkTukF",
  "key10": "DAYWDUenBeqqMFDpfkdnuu1sCZhaWKg9LNYrCsBGKNm7XkNBeMYawAQqHHxJhX85yDBwnxSxeUg5GmxX7ozs1Js",
  "key11": "5p6uJj8Zsv3zpYfq279i62L4j83AfvqX3CaqApnDmnsfJ5fTUsAZaojcrczTSd6gtp64VJXh9azLcPD1qodsSHdd",
  "key12": "2RB72cecHXaS8uNXdsxahhfamxTCsTSfCZbvtknQQc5MoZp6UAUKHbeYSYvujE6582kZyPNhKFEcj9ZJyuN3mcsY",
  "key13": "EjEEs1SYnYzUkidfwmSwNu3oYFgb8d9kK7fChwUN68gSMqRGB9TStXTRxmapcEdeQhp85637VXUVmEtWUTKNQco",
  "key14": "2TRQmpkoR5gL5c2fmw6HxDhrAhfkJ3Mz6fVhsMCte9Kaj7geAPioUdUGcBmuvRmDvMvCs6HZQCbp5dvmmmDubU76",
  "key15": "4dhebEc9BoDAv2ahoHCsguAXKkB6HJgnJNjs1HWTx7jF3d7EtsQXhNau4gobEDLVFuPYPJSEeQ37J7kv2GNcs9bX",
  "key16": "3AW3FDpfpRKbgAxF618TXyX1843qi6n28AZTV8wbAyZLGZkZeoWroHvddUmJ8zmdZjaeZ8k9cyt2aoA5ZcpzPYCE",
  "key17": "2L3M4ZuKiBHidVzZCRcXRaWG2jP2d1w1SaKBxvr2GkQWgTTLFtimRFSV7q1VBr79WEz1J44xn8Eif6hw3beZV3BQ",
  "key18": "4hZa4rDros3oze2nExnUvRLpLFbVMUREnkrGPeZoCE8jhbJtAabx1YmBcYDsCCayeH6Qtcj9D2KrU1wvi47MJXQ9",
  "key19": "2TVMM6jMhvKT9e5aG5WGGf7QTeQN6RWLsiTDwD5V9EFUFUW54PBBKCbyZRyMagrhfPqorGc3BunCWv4xHPmtQsmJ",
  "key20": "5nAoNbiJztK4YpEtL5xSCGLqdjjgHXP91JVhR2U3dncLVRUJdXugy2RipB5uRt9rUC1rYnwNPHZgTdePGrNgVNCC",
  "key21": "4fTw8Tvx7cjsCZK9GmC7U7P6Yvt9r9hgoKbNvicpWRaxZ4iD4h7iazSYnMu8a2ATPtLivC7SBs7L1tHpUz8sh9UA",
  "key22": "5z5YLKwQh3tCtcjPRuPTEWbef8wGoHhw8dV4266JG5BTZFhah1mpUeNToGGXV6K8NDBWSx1Qycvmjqx7RaKYasoY",
  "key23": "5tVj8bEkpzSegPeC4VCfVmS26KLZQW8BkhkDUFcawRxNqWY9aggBWD1N1HAz8RdDHvWSVVhhU5HGF6BgwoucQrh8",
  "key24": "3CSerYzrJoyM1VLabEEibfhqBzA6ExwFYYD8qYbMa7wGApUyPbi2Vyp7DTHqPGhR7hEJukQww8MTbJhWBJspyZ6Y",
  "key25": "4yspXHxzpQsvvh1pGn39Rxnv9gj39UhUdxyuC3L3PXDuMjN5HUnbLhw3WbAoQrMocLQgL2QtyVAoW99M4WjHNZuC",
  "key26": "2eJEuko39HAxbYWDGiPTUmYtSyux8QkqyUyMC3qrVJCC4xYktqkVg66ju7hMBbTB83LByqPWDFRgDgWnaYna3SZN",
  "key27": "3d75VxBtSd4R6E7LdQQ7KNZHAzddZQeYKFzhruoH7zKMYdyrQ2TKP8nnwZbKj5fpdbKpdB2GR7qawWVwSjT4c5TM",
  "key28": "29RKWtjKip1sE34zX93b67m7RZB4iPPd4xCySPvcXhSGV8GBJuJ6fWUWC5KRadqYqb1JyhGLWrQ4kA8zkQXBfrqM",
  "key29": "41QwDshZqgBBBBsN7izm4Au6HVvUs9nNLxuYxoeh9Hbeziu1mQvmv1Q1az4U3FhxtT4wijKbbsx9zBAmPeVR3kR5",
  "key30": "ZyLpZQuMo9F4ozX3pCm4KUFgXnM3Wq7t8mi2GioXmsEKZjuHXf1AJfyH1D5voQz74uy1L9uKShdE7zQNcYaYzCQ",
  "key31": "62MKqLDuj952cq5iJCRWncwGjemAh663tiuD1HQB8j3ddb7siYEywAbnombuQApt1XDcSiSePRkRgmFaXh2cfawN",
  "key32": "3uqNRkmTJLvwGMbianWXG9YiwsrJMStGCqH3Q1hwgdDs5FnPvTVgXkhpzmALbP6ckvGtAUBHhxAk2FBJZYKjDaVW",
  "key33": "3K3LH88iWL5Pqc8Ei54mP13kuN6dj1T41jYFbb3sGV7XzmSpcmRmrqLhuUQv1kSRuPabz9Zsfb4cz5W85uMn3iP3",
  "key34": "5iDqmJ4eNotsDiozhjF9XBNde4Hba3rFwnzsXWAB6EBXbiVhrPk3XPrCdKS6JymadBjMvXQGB3diLYqtTcYfAv62",
  "key35": "5bXVvR3z7ZcxjkVmjdNd4EVS2W6WJuJgErRokyBxCXCUJT3B1YG3zNXCK63GGwHmpueLrNWwTZcVSov77wQDoNKf",
  "key36": "4z1hKY1tAJ3pbm1fukogico8DJGNfAgG8Tzywx3VPNYtUhjLYJyRMykVX5fweEmuuqCtGwo2uW83karub4BC7s49",
  "key37": "2Wtn5sx5c9mdvnyJFkP3otaaqLqqZZLyZgEX4port6T5mM2Nb5uViqF2mi97Av5YUDsgfrQ8HaEz7gUGVo3moYwQ",
  "key38": "88KFVHkBoPFtDV4VeE1sTgLdi45Ui6eHUYVaxrVh3J5MdY8sqhNv1HXV8sT3LicN5YaiGw96HgLCMLaEHLdDfsq",
  "key39": "4MCkjj5mZUKssWVxbFUspXaiQpfAWcD6vUdu69HNwZxyGCsG7wzp12hM1RLWGm795sPvk13H7UyqsYXz9rrvaSAS"
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
