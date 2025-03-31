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
    "yvb35utSUUNq2RKpgirj3VmwHjahHLbvheXLxQpCnNjpfD9dsLdWApuY8bbsiJUvKfN8PwVnGwgJgcrWJuuhbKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hr3ENfCir4XWX9XCGAZ7DuLMEBZztPcVfrsnCr2WAUPRLppCttb74LpqvFge4j3HteXrnVozeJCMbEB6PWyzxSa",
  "key1": "4qsHWeAi3kDUZrYBqWc1AM1gLTdC68Cpkr5UoEtbDefKaEB6rMdhBmw9iLJn7z2ZtPiDGoxjWRVKisw7GQKt8FR1",
  "key2": "3uDgGZn2L9dxhUU879WSotp5V9FjF7fhU6gjn45RiRpmeLfD8s2dQFytYtkjiJSRobdUPTY9axFWFiTejnfVT17d",
  "key3": "tAePnwEoxfweZJ9QHrtRA3iKtojmsF8As49BcxT4PT9xWy9X3aTrKqb9XPWUxaTnKQKFUmuLAn7EbP2bVsUxVq9",
  "key4": "5Jy6ZEzzrN9hDJsDbo3HkzcyieAjprJbk7DNsm7xBeE4nFiZKZUH5yV5ydySzYYh4wDo6i6qPVfxY1HegeGE51vt",
  "key5": "21F3AXYNnUXVLD5Yv1rERhZduRcWazs6D5mybgkuB1A4Rn2PN65pJrrMoqV6mei24uVDsXkFpA4HaycuUGt14rcG",
  "key6": "eTQgRYQsk9PEPDLGJScU3LHTqdzqF9kDq5Lgqdr4Ws3Qho5BkCttYcVbZqcHsCFumqzuNsmXY1E88nZMsV4kG1r",
  "key7": "3tynjowrm7Fum2cRCz7hr4XtXFSeJSLf2WFcW4hTf6yNwi92u3RzPeCUButxU3ha759P7cbRxbcbvsR7u9NwFFYo",
  "key8": "DniDBMMLg8Xhnr4VP9AoV9AHKFLBLqP27HNo2funfghA533DcWZNf6uYHCP8CGYHoy3ijik4Pzrt92vNW3zv4iw",
  "key9": "4TzBBZLHKgmVobw5ZDc5Vtgz6PWFmtK3hiDo8bVMqvZWzSA5PUopzftmA9WChoasXnoSmKccGPYbju125DNLrVeG",
  "key10": "2CYw8fyMbwAnrbfasSSgz35UvmbEEcgeVgpmWoBYxirJPcm7uj2Lfer9kiuRyaDx8ZNae4yN3P9KGGnyTENoxqbe",
  "key11": "AFMujb69EBA5Ucj3LBwvrASzzKyb2j5ZDcUiLoV3VJpUoHQYjMs8UazyLHfMhfFnBDx9GDmwv1MUMPMb11HyHQV",
  "key12": "4CFuFXnXrz612zfMMwsLCDQqRGN9TJwyyTpxDUdhtNXiN2xFRxe7hFBHvx55gQskECM2MsRYiyzZXWQM1tDzhRV",
  "key13": "kqFgJzvUMc6jxUvtWf8ZNjfgs7iV2sTH2Ba3xeGJyFUkf1mv9AWbvMEvafkh5FiLyrT6S1LfoAwcwWkfYdRAA42",
  "key14": "5y6YgEC4cwMhprhhX3WCHseX2kYRRzuA4x3rsgFsBgEv8C6VJzsVzmxBNJB96111qXtERAL8AkkWUfA2srjp2tiL",
  "key15": "UNcuNicx1KderCUb3t3TMV5CuE7EqTbPZoyfoJjPhjWCi5WQekuN3BFLqzZZB5ENTWAgJuyPYxTfzVHLEE39dvL",
  "key16": "5XEK39MobHj25cC1TLd1zrAHS25tqnSGTFvDPoeWUYmJTX4Fri9FVC7Vo8xLEHBLkEqpz8PTQZ2B9rn5DaKeFYgG",
  "key17": "5qR5UZtmYffEYJq929Zo3ghXvdmCMAcWYqmZkGaJqXgzspZWMYQMka3iTdDsmgKZ75aD11nDdfJEXvV7p9YL8qPH",
  "key18": "27M6aGP7d3SFpAjQJV8iqLMZtTXMkPmUMpcctwQNqv8xPHfVpcmv7DUmMtdjTFmqjvWrKzJJML71paK6X53BMSaD",
  "key19": "3rG2bUuYF2qVbVtQzZ6th8BwS9pTFU4QDEhZt1drqDHV8rPKvvwYLpFVSPQe4xKsYz83jQza5zQCqFowK7xAA1vT",
  "key20": "5NXzA5W4iCH1nkLQsGfsewW2vYQfSK1MvjM1XLWjr8QApN8yY5sBbmQDNqzGDy5Apwk4iohot8YGh7v5yF7FiHKo",
  "key21": "4HSwhn2mqXNg2HDeESSDvdtheZRWVgQJwBt9ZwpF6zbbyC6S4tH2Mwi3oD2dMUtcviCCpVaodr1BTJu9ZjSFdSD8",
  "key22": "53HL2unwtYTEqCkurxK8kapPuy2ktHBYW2Wnx3YhfvLfkDVBK1SgTdazejJ1TpkYaGT26Uf8QjZgSRZPJd5hDM5D",
  "key23": "22m8uhwZ64W9JxXoKwW7uDKisTRYdXoRFyMGDwHMZ2PBgyfQLX6kzCFQqnMcPqwvDnhcZVQu2T11h4QBnQTARyNt",
  "key24": "3aZwCgfnjkhNKa2tq9WbizPzyJcE5ddmVFwicMTaYiN5dAU4tgEDNV3c2Tx6DpUnXU3j74vBhtxvwFoepWzdwyZT",
  "key25": "5L4jd8k1DJsPEtEgxgXgczz7AgTeRbHM5RWLWws8rvv3PBafFoKYK17NjxQJVykEBtH7yvZwHRzmBs8M1GipeYzp",
  "key26": "gWEvPRwPQi6Zt5rpGAmHTPH6jcfb1o6avvLJ7KEdrmnxsfwRwEtnoEq8fbKvVvxxD4HTsJVz2JewF698BdPwhPc",
  "key27": "5mRHryWGLFpmCBD1NJwAMEA4tqDRhCKbgqNqP89A4mvKgZ5fGLinPYeJV9Atbm2oKnoT8RLtNthyFLyvFx4YgLrP",
  "key28": "2s73zx32yoFURq2xWjqfup9hGtEEGx8d3PPhF8DXriTLyR6S69KdJCHHGyC3SwCoTbAc59fN4gQZKjXAMYEsXUyY",
  "key29": "44BFKQzWqbZid5FkAbHgC51KCjp4yoVQDntg3YWxWybQukSsXSQBNqk3zRcoqKn5yuQTzK7UxRw2sMdARH4ghheL",
  "key30": "5T8moZKiZeyLFUDe1R49MSXUyBJDR9SdeFEKJeFhuMytxggcfK14HioN775TxRaC7buMgH7M95GdTJKmvFaBz8M9"
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
