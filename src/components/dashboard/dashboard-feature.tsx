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
    "vrhhdTWu1sdtGsYedCJz9GqQjQuwqHw6yq3ptRn6EX8KbDsfTyCaXF5VsdzzTkECRMMY37si1jA5dErpDJZxtbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGd3x2CSjfU5QgsZhz1uDLsf9LDtYUfnZ38Ywura5Jmog821KgmdmUNvaBKwZZyJKknMwGfXpXdZsPjkZy8ockf",
  "key1": "2LQEejRGNv46ZKLVqmePgN4m9u44LPh1YrWZu1KnCqdmhiF7w1sHnionrkmokTKnjFvedVG2uJii36oWAYukFYeu",
  "key2": "5auQVXums1fEeVJJXmC9t2w8azoZJyhnsu6ByiuS31t4wgBN2tC64xQSWVgePMX1rBHC2fx5DMUEyT3eRwr38dB3",
  "key3": "3vCQ9uNiXJDnZaVSEskDxdGBN5E8ZTLyDMYWGeyUNunV8mYGQCRS1hb69ARm9kxtcTLYHsbiNFDF2bpyag7XmjQD",
  "key4": "5Xh9VeQgtYjJhX4eZ4vQPf1oTQ4xW75mzkCi89vaDvhxYvqK8fjWtBCVmUcHGbddZiqrtWK1Jggaa7cBT6EvYQVy",
  "key5": "5Yo1PvE5pdi4MWY57Z9bH93C3n2vSj1nhbFVxzwGs5R4TnGyuzEMCRo3hgVyuRQnJusTFxZNfE172E5xYizzHm5A",
  "key6": "32DdWvJHiuMWNTzafuE8fmg1v63aoCbbhA9mdWF9EeGzBxuY1oXhtf3w17141XYWLNk4AG4hLfNjWqcjcDS3YYXJ",
  "key7": "2gTFETKqv1JkXBWbgLM7CoZ38878ayMdDHLD7ka8k8z4s5LdX7atAmr2S53xe1c8jNZJPdBarNAi9UobY4UHkand",
  "key8": "HVUF73SkJ2khkjPZGHRJBgoBTBrEfRoMrBiAGm8akpBGPsCeAbxmjhCRKhscHk7eAr9T7KbUnJnis738UVcRhg8",
  "key9": "2H7ckpqjkqJKsvdwdwYVfhqTLrrBitE58MmZ1J9zkvoAZc1qB6BRMs2RXsB2wEqCeTRhayTyujKseHZwPTT8Nuc1",
  "key10": "4KGTumSaGCbF6DrPSPRRfu3dwUEdSduGWwR1PL4X1HknSa1K26JAJ1VZtShwQcBakCs95ZFcTTim7Tc5wGSvWuRL",
  "key11": "C4knCtwQMcKihj1NzHFGGnEmZZ5iiHUdtZQy6tgsi8t4pCWWtebxpzETM3kmUks4iBVDTZBUHQHk3XLEvEXfBcR",
  "key12": "uLSh9oBhDjkw1MMsV3zVTpaLqtC1WW7tnAmHjeAuT7AD7NqA9HdyqjGNSf1rAWs7mSkcWh7x76hQ1TRa9SAbLPR",
  "key13": "3X6WZ2GxyaVGx5kE2bfKVTCvriiPgKu85nVBHN2QmJgroR3R1KXDyeJ72pxJ1awtq7fszdNz1hxFBtPfacC3RCF4",
  "key14": "5D5VVcGjbKRRtqkMs6oosvBjHzzTvEt3AomsmHJdA6VubpZoBSarzK1DgBZom5FN4HuBHGeGBME8bz4xqC4yHPpC",
  "key15": "5myzjcGKvBamsH23FJenVwPUidDZwTA4HcP4CUGKr3kuxjx9KHKDGVj4eSup2FZupk4iFF97g4aWcJFsmD9EgfBA",
  "key16": "xuX8zv3vqM6c8MbeuFTPSK2mJ3d3ZKk1gDSpLNDaFgfteRi1UwwtYgu8ndBg4RuBHLr77WuxqDaLbwAetwwgSNj",
  "key17": "41K3XFQSAE64tNidTS8NiX2xmcXUdJma86fCdJvnMhHw6RuLJb6mQ4KMigvGFcqvtjC1Vx6rJLPb4M2uq8WXoHq3",
  "key18": "3N1i478hof7JUUcs6EoksddNZuxJQq1dKPmmPHmous6aN5sjkJVNm1nyszveJ9VRCH5tfhnuW3cwjQB9khsv34Gj",
  "key19": "3TJGyspwPqPMVujA77fmCNY9Nx9rYEsdXnpSfZTSWaw1KR69hkwPLBQ8dcbEQEnZaujwDGp6ksZTiCFppbbuyqkm",
  "key20": "2EH1yfXiFBPjVgrKT57EKPoZftUvS9p59fymkmbzQmcopsC21uYFvsDdJsT2roExrhdVmqRZ2vJn9MuXatAr7H2q",
  "key21": "26bU9jMDXef6k7Y6NxbkqnBQVPZurbneU7QMsrTBWPN7TbiTSqqgNGoqBn4UZ1yKUf65T986pbg2mhS955C1pNbp",
  "key22": "4Q86Kmjkn7C9jTeiFHSh5xtMSFTHVix8fVbEGgEYyL5E2HvTsmtCjcHbMZp8YT2ndsJnDo1857rGB2WTUiefwdo",
  "key23": "3twWqNbDTVjtWTdVphUPjX8t38cwnBLSaTiB4PHEiDNQWDDxq7CmdcqCLgtyk8nS75988WfuatQLgaDi5uQWKHzu",
  "key24": "2KQUE1gM8sFhyRoMdd4oLMjbWnPTEV54arwhZs3seVEDbs4h9WKwgPVns1NZfc8dtD67tA43K3QijoSksazUMm2m",
  "key25": "G81ByWFuEvgzGjhBqs4cNG2T6936ZWvXnSG6oMqpDK8QZ1nSsMaivmHQMGEWuNGoZCpnFaizYew8v8JzCJBdsza",
  "key26": "5uJsacTA5eBSvVcA5QJ5Q332T3SLErKSZ3TgTomVTrU68cRDXGAUkx9xLG5hzwNFuWLECU6tWvwN3FVSczdcHnca",
  "key27": "2hhAG6X26GbXz4Y7eAkHKPwXoNDyVNczEuq6KoayXnEXacJHLgkQNBwpCXJFReL3gBuL1uHH5px37ubC8znD84oz",
  "key28": "3xR791rv3jLVw3uYJ4GMyCnmKR5RxPvcM78jPdDMJEkm87YxGHQ83Zhho5ct9rzZ1bGUKqc9FUyKgvNmR68nPPcZ"
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
