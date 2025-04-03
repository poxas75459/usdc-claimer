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
    "2JGrG13avFLdyGMStAJULto7yDwTzJMj15E1hPAGsKy4dpCgSwvMHW1Jhm1a1vKmdBotHkm56NJqUs3vxCDRwub2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SedHwwyRA6oYLHRg4TpSWQNeBtaA4acU6qSnSEbkupMpk7BFPPB28NiCpZ9oE6nEbTHJ83MyX22MA2J5ddmXdyc",
  "key1": "45aK2nupUshKDoJLcnRoNmouwaVYWdaWuWfYeuzKNDEnRQc5DjzZzYkLYeptH6pYz2kNJakBTzzBqW9HZ8RLaoUp",
  "key2": "2zKpW23Qq2kqBGez9jqvDdbn4KpjUn1uxr1F5GoXqGJgxqbnYzM8LjWrbvcYmVxpsJC2hvKoWu2ZbWLdSjRb4YYt",
  "key3": "3bxMyzUHknrsn5KVVp3pKH6Vp8QzQocnxsHpQKuuB6iGHDCRKN58cJKpKuuUVPXKbtWFn89eNHo3a9KKoErbEFq",
  "key4": "N12BgcXXAGDBiKgQP8tWHeRtegpNLJiDZhZetUASw39nLVsHnT4AUTvSBUo2597M6M9TvxaHneAiBBpTNMWZGgS",
  "key5": "22DcyTvMjBC3gREo75rx1CKp5Wv6BxtVkyh52ZdnddLmbGFeGLsPfSNAyogBwCCRLQAK4N9H6xHJwrTUom8NENqF",
  "key6": "4eMcrqJ9QADqP5Ufu3tYMuRjCYUih22iYUdCeVVes6ngegKkY6EfZxxZBKVLLg6FtRZDDL9pQhz3UffvVCa72Ex6",
  "key7": "2AsuNpWWiZQTc6hbYut3sVr3niJR758ypYHmcWgaEnq6DHJsz9gxXXFCTEj69GtaZNGhnFPeLUueXgxAHDggr4jJ",
  "key8": "398YsjEUGDeMS2bXdh3EPP9C4g3UFRerF6U4hmXikpytN9yrJGCfpJUoiuDcZ2snbW6MwfhhuTjxTnuAtFDdPVmT",
  "key9": "yGeBoXfhhoxDWJ18WuTJJ88hbodHSU4q28EBTAktQpgrJsKyMmX1LiXyrk9JAWxSjPyC4QQJ91YmbZw7Jqm3UXM",
  "key10": "2EiW11nsYTWsutom8NGGWugR8925c1GptW9pVraMyZ8rEeZUmMicXrHsitXCp711H5haTc3Q1gBZxcozf1SL2KQW",
  "key11": "29Uqgad8trKGgFBqTpyA8G1tsCUzZ2akicFkADjRbwbauPZapkGJPyGZaqiWDoJe3ASchKc8y7U24C2WWya5z1mG",
  "key12": "5eqaizonWF76coCe9AXdcbQHuLvQpKK3dncZ1fAyS4BL49MgTL39nHYv3n1B2r528o2r5RkCNyh8dDiPzUL61rMm",
  "key13": "ggfhvMQH2zYtMKEkRVztj1qZ7Q1QvNWaZ6pRcNtSPjcreJx2gbX7c22VoXZNy89iRy5Z93Nf5Vm5SyTfgodBd6L",
  "key14": "2E4MFce8QpVZ1c18k556dEukm5ZkK24JiD9dCSrobJ5t9F1CUkY7WNHtWRE6NSexx5JehLV91j2h1UnzTNhVxSai",
  "key15": "q8vMjKEsGWFRAbA3Z5kgbGYFGna1DqXeDDMqAJijwAereZPwWc3MKAs2RopQSZR3NmMzgJBFjWUrcjXRZagWjg4",
  "key16": "2RcJpyLnHTK9dYv8uQZHp1RZGDGwvUsTSZ22KNhAcMXMHhtZHMrq2puGVWj1javmXJeeTyfivXSqZZfKQnvXyCdV",
  "key17": "3BdzThXfGRVCZwC5h95qTaDwJdk3yVJEGPxVKo45LwWTsnXCRZpPKP2orR4dXQbFEfTiZPVqUxXpj13U1ukRvFhj",
  "key18": "Wa66t31QyvRXicjzrmZ2CjuUjGvH9QffiJ8DoFGx8SrJyufwKCNBGakfDsJzFC4viYE7J8qW6ByYVJLRSUnmFAu",
  "key19": "4N8VCXxc5X4QTpo5DDR8BiBuJcf4aewVQgfteYin33JxEAFtCFp2neRBz9AWMTaGEVPhJQpb1dPgfaufUykwZsAh",
  "key20": "K8vKtzgY7nqt9quJwK81eZ4Gz22nk7aAMTaNQhbUxPim7cLkUbtGmAssAD7vTgaLtnu1LYqRYMYN3cRN9zh4T34",
  "key21": "2JbdyqQpLCJfzHf5J9ePsQLH1VMRRubyWDGGVgCDbfxrZeyrSNTJ1StkGzqwnVCtmFoLbEjzVavuDVRgysqbywED",
  "key22": "4SbLPcNwpHLdBYiZd6Df53CDBGVyjHsWURuGpwZhocak4wdjEMHpZufmfXmbJCuUB9qJDMvJSzyBescrSMF7AZDa",
  "key23": "Sehf1qZeCZ8SM1NfSLckYBSgsG1RFCqvDsayD9Rvp9wvTsdh6P2scVUyQXuHuyGbYQwtQieRfX1yBjXAkJKg6a2",
  "key24": "3p6kLM7YweQTEhz6vGfBQTjuijtMpSiAkkBLbk7jabYmYANrUtaWUnbMLvNd1a1GjsHRLPvFzxMCQ2byNjpqLcop",
  "key25": "46jFo6aoTHB4mbQJV2tsUXrisvVsSGZnyxXeDcksXY78a2u94rdnQ7CDAkTNzua43rLxcvdTsR4g7rRsMEbZ9Tcf",
  "key26": "5P62Gzs4PAcR9jsc8UctYZiTFMvbHPpBnFCe4G18VCq5DtjG37UxEAkbcauSPpu889R6kaAc5qYwSS9oXMRnpVyA",
  "key27": "tYE9tU7AnCciUcx7uTth4kLh9EKYDyk1oYbRtQjJWa9XHMdsTeCLv2s3xUSXxj5hVoSbUL344dNFqLBhVC3n2xr"
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
