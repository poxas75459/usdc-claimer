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
    "2nJhJyz6oVpbjT82V7DkyLT95tt6pB3SYB8Cs9N9dJoAXawbqv2PexphH1VyhZjfCuGe39mPGpEu5WxRhyEDYx6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpbSFhkDEUoAEUrvpwZzfLZuMpEFyopYN4VrBiB63TFys2Da5e13qBnNUWDDXmksz6Xwp5FkcPMrPiNxEsRa7zD",
  "key1": "3dT5gdr2goCxgCjEDsfZhbkCxXjetVzGLzJU8nuYirLGxpBW9YyGmRkiYHn6SNUg9yemukYbfjL1GTABRZBAGRDG",
  "key2": "Jfpq12c5LnuhAWQxUbRsZ2fXpjTRVjw5UgfaEFqkTsaGwoRUsJYKh9uht8AF8t8GxrPmZEjNhsYM651YJRn6fvG",
  "key3": "3vZ4JAddhWHLRMxHPce5UWJBw6kcPe5mvBRhE46dTPRixSeuGG5yobn6a1oXGEoJp6y53j8cPA6YRsniz9okxLN",
  "key4": "4Uv3WJwM7kMg6t4EgWM7uwdRndh5ecAARHfJPMpSkPfhDpos6BWZ7MXnVPmqcsGqxM2rGRHGtHePWEKy3y4LcaQz",
  "key5": "5tSfJvxj7Z2m1hocJe9xRDFE42e1BwPW5hX8JgmyibkguygeQNur9WyMiQL19hKhvcZiccaNgwUseoi6EkGSoi6m",
  "key6": "Cvsv1nMm5A1fTSr4QXwEkuxrU3nTCNv7VFsK5k92HfhmU9DPWQxoXuvYFyEAe4UjXqKG7sUteXSwXLW6PNHGxXe",
  "key7": "3axGDoaBCimWAdnbEZ7oJCVTo9UBwPT3xdgZU5LBor29aSirXdw9R3f1yBnUQZyv3GyoBJ77aUnfjNumQcQbzbY5",
  "key8": "zpJuCCWr1L4nbKm5cZareTEi4Y3Zsv5tnMs41yZt3VGJgyTAmpoFnDABG6EVb4uY45QZP9xJHqB2yGRRZ4dbtsM",
  "key9": "4EpXJzb5a5cwrGyqiq9W5VvBKm9Q6ozKSNHoyEDE7DDUgfYKc8AKVp59V7GMhmq1vXGLJL3LxZEpiJtGQqVcMNaG",
  "key10": "4sHuSCxd5yzsKawFbU2FB2BmJYckAMHsG1r71qV2ivmvSoCVvUDWSLubAJhAWVKHHNXUW4bX2GcTsbcXvdcnCmUt",
  "key11": "mnoRNU7TgxfqfSnKWa5wmFSEL8hqPeHeiGvDAmXxJvjeNwt9s7D7nRniDWyKeUvdb9sTXhMvyMM3dvxefip32rS",
  "key12": "3FzVFn7cMrMudRu8ZDHNCyPzF7z2ygyPFfjGLatiRQJb4KxKBV2zrwiYXpnCaJ294vx6nn6tmwBxukhgRpydLb6R",
  "key13": "32GBTRMmeE5Km7dk3SpRjwwfN9TS1twyp22FFtbRyXgQjEn5zNrFpwVoHZpYFiAgxDMuDK8NKGvHpsV632zLMtPj",
  "key14": "Jjsj48vSAQgp9F3XsJ8dpaNNw94j3jSMm52K9je2kmht7EkYKx5Fd41pUakD7L3RtWszakXth7yRr4vgxvUfJvy",
  "key15": "3focZ68Gg2c1ze3fCCEdELLdYGeZJVhPuEHoULbsMsBjZrtUdwNGmXzyzicbxh7B5zy13zRpwALXyBBQjeuqwxpt",
  "key16": "3dxHpi5roRZTu4PW7YWDjg5VeAeTKnaFLwYNKTXendKoeuF1t4AaqCZWEBc9ZnYBdoPo12F8YfubEpyRK1FgG9Kj",
  "key17": "2vTPMuxi9S9prWnQQhjpYsU5Uv6AmN5taKoCjdW8QMWJrorTCG8tz6UStDbt3c1bNgpNkwqHJf4t7Miy3N6YiELZ",
  "key18": "4KDopvHKH6tEVS87hekHwa2z4C9QXKAAJL9Vkct7FpoEDXdfzyYLWaaF7iAKQFnc856RVbGVVERTz9qPnaCtJeYi",
  "key19": "P7vZmzxpSggvM5UAvmLe8y6deHApb5ySTs36NnjV7VdbAvEahT3TUfuAr1MbHcPbtAGN6t67qn1m7FZh7w1ZouB",
  "key20": "3nC3dUNwC2M3DTMw8GQ1osX5WUCpHRKkrp3k7Yrj7KZ5krbCGP7Ye8RGeYstPCrco8jemt7o3isDg1DJyueLqskN",
  "key21": "SHTyX7wnJhmgRDhMnqDAfqHD1wD9hNYXdidMMjDukKznoUJmM6PdmNh6gwmGPsQez7ahc1T66fv2hzBTiSwUYMv",
  "key22": "5JdyEWN1HZX2ri8MER1zUQPk6AfrMFptkjefo4djoj3gZWRNEVjpGmSLkjqXUwhpD4v7n8h6oM312HuM141ufp9S",
  "key23": "3BsY8nX3833VtvK3nfVT92YVxf5diFjamY56JZyKxrVjbqzb3Py6UUj7pmpSCRmHFwD3oPz6rCJP8efa9WNtrW8g",
  "key24": "4xZeqo42YJU8kqFRcCM362CffLx4Ea2VPGHmvsRnbXAdVVfN1ebpmHSpAsNK4ciG6ibKVaQhtFSW9dpmmx7mbUnd",
  "key25": "5DwLRwD8fK5WGvT1nyPd2eiS2JvHCh7163GqccF2SphmbCPyPW8ZP8Ds6BLAG6wJHM5jLzULcrVgF9uWT9u9atau",
  "key26": "4t6oe2jCLrNtYRQ2ifAu2ASCunDQhyRykJahcq1dgzSauEDfD6CzBiMABxqF33owTCcp9332kP45mssZ18QfwL7F",
  "key27": "55XN5Sdb93FoKwgW7rJ1Rd1b8LFbu7fkLESSZFTQKG7XyT5CVEEp3DZnnJGz3Q6bGNbdravTSuq8NC6UpCwNbnu2",
  "key28": "3MEcSz8iGxcwziPCMMtmbUF5ED7h1WgYUds4T8dV9o2vC6YkSddwfHX9Siw1SjQViGSRJmW9T4ctxPcso8vwYqdd",
  "key29": "jXfKKCKKCTXUV6miFv8wLHLoPmY61DNpQDa88CMtwQ3Ds2ksHgCS9aJT9UbGnNfiCUeNDsCecuv1K8vWdy2Zvum",
  "key30": "2r2pvMZ8CVY4YmPivUkmzHTdGzvhC3UiBRJJdUcRcVs2D6PcxTeg7Xu1X8mdgabxzC8sPJFvARpeVPqgLDdDtFKU",
  "key31": "59PAdq8k9wAoyL4jxDEWM2TVppP5SR7bu4q9MQWUkLkfojGd7LBVJJ1cAiiL7mbozk3pAWB2uMBatD65m3YsT735",
  "key32": "5GXVYMdrxaB8ih4B9z9VqUkmefZoCpXVd3Faz8XB2kQzVzKTnCDiT4nXeEQ9LpJRgn2Y4NoKQYqVziLxbgwzhtEe"
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
