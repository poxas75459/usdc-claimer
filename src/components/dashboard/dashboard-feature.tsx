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
    "5iUuAiMHUtS3UVvtyfs5pjZrMpRdmoZbhDf9FJPURpVQinkvBXWY11gr8988T56pmKYpp7W4nkbid1rM4PeMEsJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UsLFjQW6zNAFiRKuhuW1WLpJ2Eg3afPvQQVDXaDSfcU4xd2q8QcH9KKywKsw4yrN2RAgkgjJnKYVSL3ZeDJZwG",
  "key1": "JYCrJox4Y2SzRVNdTBkfmvFY3jgEfFApSNKy2L7JhcofnhMDzxSvnvS2Tvn2s2sGuZko5yepicfmCJ8Pz4pCH77",
  "key2": "5UQjAci3YviSGnyfkjmoMVTPGMhM8N9g67PWSM8yKQbVUikqSFp6xKgsUWaSuEJ2pqWjYZo3GDR5JxD8YbNSazq8",
  "key3": "3hFkqtxE35AQ5aF82bj1ASv8T8HJcXx5B3BpQqyR1ebo5K1DhDpLGwgCSUTC1XAFsC9zBYpqY9LgeXbzsjsNdTjw",
  "key4": "29YDbm8w5VD2W8k6aoAVj8XHBYPywtWUJHLmdXwg5MuoLfLSyCsUggBNDfSusSMQfbTiY5BVoo8sKKCFyq7bZN1c",
  "key5": "4g2AVzDSeMAaMJB6C2yjT2cGgRLbY8V3zLfRqLzhRv7nVYPNNd4B37np8hK3z6VhgYDrvPo13rg6ZC4FgXpnPpCG",
  "key6": "31yFGuooBvHWM5n9Ey8RAoRh45dkN51pPGzzUxNXbB33VoPuQUBqtZLefK2wbsupoFiGsQFVPEb647L23kM3NEBc",
  "key7": "4JC39jU1EH1cVwGfr2vPPXeB77La9TxByGxiZ4XMY716GdwrKkmiXxczJxGgefAMTfTiDSByvBndbbUosF7SHwwX",
  "key8": "4Z5YiCd32ZGxXtUxK3sA6BdiNz76EZjwSsLTxZcqmLvtbcnT7tvQhAkruav3xC3LhtUzwKFPieC5k3xRZBtxVNYy",
  "key9": "3rtWoLz6kxkQNUgpjxEcuaqFzFGAGe7ZUZH3EvotAjscRbLPK4RuMGsxJSPYrzJKuLj9TRaKffg12NGbcoD6fPkE",
  "key10": "2CvbwHdMuUHRDNJJk6LcRTbcJES3xtC2XZkRfmXVSwukpUnrDbwHStSLtKmk77ht5vZwm4t8x98m3ViSpmXfVEMx",
  "key11": "YbqSpSCqzre48JqZGa38DRoJHNjbXuBTFXT6hMtNC3yLsDZDsn7aJMaRRXJoQfVP3fNGcGPjH9ism7d5G73VgT7",
  "key12": "4X8tHkbQokkpEwWRtciZW8qDpC1mz1vJxauYyFcgS5LmeovKbgPFZMyEAQ4z6GYuLSW3UKBtPS8K38MnbLBBVEyd",
  "key13": "2TmP9WQkNAwdvr39fhzMYur7H4f9NiTP4QcsXdt91JBfnkViGCcW4oGLRZxiwnTGFHNT4teGugfmkRm5TGPgtrXf",
  "key14": "bx3X1AnvjUaDzScyNVmCLLwPq5W27hcBwdQcB9CT8GsnYiqpVH9Ke45Tx3XLjC9aoxgPBM4ui2cPB82cmhmFkoe",
  "key15": "4dANnNeWckLGoEJhayvDyVRQmzvPcdHYXBMdCJ8jUhhr2HKYzXmMatKs8AZnh3kzVdkbBd86EhntiVeQAbiq9VAv",
  "key16": "4vzXFhZgtqfyimoGEvNKxNq8wQAGcNKMxBU1KFQwCJPAD9NKuiZn4xc3Uo9rBMWAPbQNK25BuDvWsXa9Eza6aPAN",
  "key17": "2j8dcBAwqH3pVkVysDHJMWPTGPXRLpPPJ5aJ8EeCDyNaAD1o1bZbc4DYiuBwt3EUVkwXecAnCnFHDSEkhY6WHZ18",
  "key18": "34g5dMHDbnY8xTxLSTL2gbkCw3CvAhffgmNkni7oGtZjkWyixYQwVb5HZys12qjGojQJiSEBk3Fa3RLPtGiqzgJy",
  "key19": "3fXUejswoWd8TEpbfKLGGVtWcur7z14i3PpxMoEtzzMcbecvnFU9X37GQSQP7hpde8DSfTTCRNQkayCs7zncgw7P",
  "key20": "Dx2YqnjSCdAtybELjjQL2ArfCUPsKZKkq4aLTvUsVwZgGEyvYRHJ1gUtUuccHcHzoX8QWX1HhBdDNMWwimc6Bvq",
  "key21": "GxQLxk2DYeF3rzkEQ8376Vwn8jvgLjrbsZkmhUuefgnrT2LokDGAp3YasfnRPq5rhjhFj5WxhXvFJh1BRK5zpFQ",
  "key22": "5WGcQwSWxfnA7e1qCCHNEDpJhFgP5dbmjSGztsSMuz7ng2sxvS3TmQBPwmKbnA95MAmxJCGu4Z7AN4pxRA3pM2hE",
  "key23": "2r9e2ZHEzhNutxZk6vS42F6K5sbK64cYXhK9iVb1iyP9x6zuPareNeRKW8TYCpvE13EBEnUASKUSE5Pa2zBGaoRv",
  "key24": "5L8Rh2LXQfG548V48qNv61buwhTcrfYbwVeSU3YN99EEe7wLSGg9e3VLpCnsUKZmA3iygRfqANSLxXTpqjPbJuCn",
  "key25": "2AfpQNkuwkWzEctWGc2a9k2wArJgz3htWdCW1uDeNuvmxDHw9MdM8Cvmg4bST6ptaAQhuXhKkkGtJuwFmNk3v4om",
  "key26": "4pRzpRja2UrZjiNN9ZRPEDo7aeE4zw8yqXqV9Z4mQ5gCw81Ma4EqeJhKn1DUPMwMCicRJJE6TqYUqffFi4ZKswee",
  "key27": "4Z7DZUH9yB2JuNJAFAbbpsRrxiu6gHcSmAK7uTGSug7bcAHMGGuMJehYgrqhmqasmsQcp3C3s1dqLVCA7sNs4QfB",
  "key28": "55FQVPm3awgnYpRKETHdgygCYjK6Wuhr7XJCey7dGRpzBtLrq2BmhRNZ7mARF9YycFzaYbbzNUUUba8wJ2TKhFun",
  "key29": "WK41YGxPQpzu14BPjdmzCpNJBqTinZGKqVB1BfxPTWbPFvJgu9pV8v31CeEbHSnyVSWtFifLsPZURsmCzaY7BkU",
  "key30": "gdypwndP3FqQLe9m59CN5pdHgy4Hpq4Vvy54zwRofQPyhLtjutKNHoqr8WxmeJm7FtGiCbKFq7YVx1vPHP6gwhv",
  "key31": "2ZvRWhDntNSLB41wijdSxtuzRTdd2KfmBxpQGD9ivEp5PeXVFPU4Z9VupRps8eWVTaLJqcbLgTzDivzx62cCGD3F",
  "key32": "2DUdUDZC5D4ZGgjxNLCwRWuPVzzfPZ2Y4zTW8gz3aQobkW4r356RBLruJmUCE5zGwwJhvy4w21bwwEcEUDAaQcE7"
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
