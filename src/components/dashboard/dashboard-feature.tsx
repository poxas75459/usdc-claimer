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
    "3LXs2AULJgqByjpZXvFFJUbCXm4uvv5cQs7iNoWAqDULejRquBbktrZoJvYqLqpQ7LPdtosE6NnW5vZFythBtEKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56KdiPuo6jgp3YrjJKtzCVwFDUL8NFGvuPXuvzdSM61stYdDxDZq9XxzaA27b2eAKbNHLksvLVN8ug5nEsJvmczm",
  "key1": "4Cvg3R95tjz5dJoHyE64EEpRV4kv5LUiPa2eUMDUENtNLWcCqxitriBc48YEYzPmSd52ZXURhc64nAKfquBQivW",
  "key2": "51EK8zC1XpGhMhdyjWWFFxhkdtvaoc8d44DanEJgn84s1WgrBQqAtGrRwTsN9UWEqTj6hk7bHBQTM3qkcecRWR9s",
  "key3": "85AeLVRgXtZSCGimt7MpHXXSfPF7pWAmoap1mjYTAirmuTCdyj9MAC8Xe4vuGRu9FpaYwsstrney25Y82hxFiU9",
  "key4": "5Un9rJkZFqdnERxuHsm4AbzpxGrMWjH9uCzph9NQPTXu4cgHDHsV2zYteBiPYcwLD1dVuNkTbAZJWfJ5AsorMNfc",
  "key5": "5ddkht1uN9X1HNKpp2emVp6LHeFVgVrnxVcH8ZhrBRYydt4fgatLSFdTANfzGBCfHxHCLrimhRydURekzuj5zB9Q",
  "key6": "MkmJa46N5ZdU9bgfpE3dSeqaufbkJVJ541sWdGKAnDF3GxUEaa4SibcDAnDZdgGzWoJBC1JpKzZtEsxzHxTthsA",
  "key7": "2uaMt2UHhGFHn9KT4DM3W64Zr917Ad9uAJHCnzhdRKCGQCJWXFy4mZBVjSaNZ6aigfMikB4ps2PuTupzqRHdm2A7",
  "key8": "4P7sRoiCyhXzTHXo1MJz6TbwqDwpqV2nkV8zUmvYEVHMksfW2Akfiw4ts14T8FY5KhDT4gjGQw3ozps8hQhe8fYY",
  "key9": "5GvVMAZzibAJ6QFiBNMxvsqUppjhexzhVuK6Uk2o5uS6ZJwE6oUQs2DxUjsSGqyR7H18kP1zDRCAZDhsJYG4X7ot",
  "key10": "24QaGq4Wc4f1H1aBm2cDCQkunXFQhwSCWSVhbmpE7TL5CaY31bjqWJFuDnVFehTzNyubiv3UrWViLtz48C8po3TH",
  "key11": "46FxdzgQapYCpqWMqSVfWaKfai5E6fkBgXz2wkCDQ9hgR9Yks5hiBiv2qSjfJSBkJUXyejHjFAVTjBfMJua6s3D4",
  "key12": "5ACmshAPqB2Tm7DkZqPqsphFyNKRkTraFTUsA8eKDzM5J8S3JYDqdggF57BUCuWEE3TYS84afaXfzsdgzGcX43cn",
  "key13": "35JcLcNnQc77nPTy7nVRngrvsz4wmp7C5PBSWSdMRtGco3G3yh9Sxuc8yToRJGZVcCGzDMJEkbCdTBjxX3SHRDZP",
  "key14": "3GbZpc1D9zThGmywrFpPoFAdfy8wQfcG6HC7LGnf86iFVBokxB5uaN5tP5Jxx1xa9RxsF3iUpFEqNM1rMBTaA6TT",
  "key15": "iEwmcd437uswztyzuR5CEr6YToLmBQ4BxYwJ2uM5FiiUF7p28WMQoT965wQ3sVkqvBGP6cJ7LKRJ1eaKAkeNdPY",
  "key16": "5exTR3i4o9i4uN8rj3f23byxrsLzqkHBdrm7x3R75jsD5JWf1QU1514rpbCY39Q2G66w8uAioWWaQ3Ra2Yy1r8Sq",
  "key17": "44Z4h2e5EvQza4c3yrQ6g5WjmjsYtU5E1zZytrcAJEADN3ewdXfRZp7vnWyi162FtKwSJ9Y3cSJkWeg26tQZdcpm",
  "key18": "36aesBx5gqL8pLjhJmFhUwvN9Pr1oQZyQnar9Gdma3aj8dNU2NRAG4RPDsGiCG1mdtPxwdgtzgmNV4PFmwVzsmnK",
  "key19": "5PNtFGFAQfKbFn3qf8pjSD98dmpgFx2Pa8hWdXpBWzhGQDevZK6UvP7aVd5qjLM81gs4WkrLsQXp94VCSJP6iiHv",
  "key20": "3vTZSi57JAggBaZyZBrKM7bNviwD5AZzeRL6YLgAcSZvtfY5u6oXKeS1NwLMfTuPBeLSV1dYMTiiBQZh6QBWmnpz",
  "key21": "2djwcuQahRMkVJTxCd9nb3GSTD3aaDt3UTgQu2V7co8jvkRScBbQoefoDFJ6PZjkP2rjd3w7JqEdnhFDtXBgoHqj",
  "key22": "26778nkruAQYNoYcje5DtSkvSg7kigV5cGrAk9FjbGVnHxBBnPzQE7wjbmz3V1WKFWGzyVUHnpxmKM7wUbFC6uqR",
  "key23": "5KfpTEzPuYV8AuBmX1EzQ49XVA2TbHeu64GrSCgjsjgzPuKfTFczB2cqRwWLFrsLJyKNMNsixdkVmMrU8MULm5hA",
  "key24": "54VXu45ucDNpbKxCYgAMvSwwx4L6nPFPTm6vRRnX3sZBuyEXgp7LVLmkTDUoPxvEtxgkiZhywkA4PW3VwhA48gxV",
  "key25": "3o6opa2XEoLTs9E6NLtf68shgJZE9ssa5YFUPnsFPqYNsc61fosnPHZYQzCsaqbPrycBeqEyE7affvtBj9uJaBLV",
  "key26": "Ak8bYra6cP5QhPxwAQPtjnTrFygq81Hr8U9wtyPotq325jciaDH3no2niq9uYUTekJWgANAdGZmjtfGfmmCN3TG",
  "key27": "3uzicJ15FKhyv8guHbwiJ2R7ZjuURAeEnRCM94SaxaE4w7QcZkBBw8fPWedFPkRjbsL54bREMVJeBSnhsQZEM3Qu",
  "key28": "3GGEX6mN23KqAq5hQ1Vrrz8NHZopiU3uhbEt3fMYWJarvaQGCcNEh8bCQMkSmKLhnEoHteeH9TpJJS5LM2eTTFWv"
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
