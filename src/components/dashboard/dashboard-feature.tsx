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
    "TekWqDXzEZRqns2Vcro7pe3nj6hHs67dJoBGj4Zqi3sk9f9RQ8EaXm9rCwAPrCP6fbbDj1qiQvHWiVWpPXyQbcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1n8i78c11DDowKWgPKTmCtM5qwsKXLJXeKJFoCDQBoAMRZsHN3czSpyfVzLnDiCyeA8pkrjvZpQcTsUyJUN2QZ",
  "key1": "473yTzgFgFCSn2JHoRXyee7SVgwpHueeppDjpU6Py21rHJmURAuGA92QeaVfc8NjHNcN4Z69uLvYDCsawN6W7Qwe",
  "key2": "2CLYjAAth9t5x6vVEsbrmTnacGGXY1gEf9XcstYRehjH7pKqYoGCfJiWgCjDHfdhJCwxxSo176i7wpAnVaNXcuA5",
  "key3": "3dofYpyUNQR1p1gYw4C6Uas9tVvWjx2KJ72keia1FuG295TGdruRwZPoyBAeMWYXoBRH7C1MhE46vCXqRKCnSkPD",
  "key4": "3oXS6Dan9cT2F81VkyhHEewgH4U7s1H84KFb9NqTmT23hLdWAXo2s5Zc7PvYHPLLb92oLkDyUJ6xY6aihkEXVYZo",
  "key5": "2TNwReSwrWeY6J53GP5Er2fQQzmapgtxnj4axy2QFayNUuHJtsg1QRNtFS5HkGCCRnVLMfiAiqddioTVZS3jsyt7",
  "key6": "5zkFG2hdUxVAvDTNUeMutbR11u5Zdm6wCSm6pJeshKTbLP1AAYPkQoUEhixEERxw8kr57m8fDWL5zfVp9ihSbVTX",
  "key7": "guQ6iFm2URqupg99HRV1xgjRMgSVjmKD6estZBFvPbTov2iJgjqNQ5Tv7c3noRLLtRNEvo6v7VLujw8XK5vshRT",
  "key8": "2kB771DohMvHurc6EeZejH6uZxnJyhKo6KNFY8mw5rwGnZAUHuC9ypwi1ZQPVjURbJskuiWQvasTh4ftsbhnuGft",
  "key9": "paiAPTDCivpoPpN926hejV3QKZ5rx1PVDX3NSKRoCnZ99MgtVZLntivrzmT9Dr2bxpJMKtHgYBjXqQrispSQt2H",
  "key10": "25qZRe4XJ8SnCe9oT1bC5mUnBfqmwS4VLteFKPUVzCYVx1S5UC6FMFCUvxFif8PKqefkmCuNaoSQ2RWhkBA1ZvZZ",
  "key11": "UVe3KiwGzmYnAnG3SBS83HnQd5kUEqdfEZ9LnjpM88yb1gPad45eWRS9t8eryrjx8JiNiMkrqHpj9RuJBXkXD3h",
  "key12": "2JzyEGFLhpSn5ju4ZVvf9ryK7DtqfXmVGqZfk1wAmD7jrorFBnD7w1dTrBpoJihM8SbYLakAsuDy7FAk7hAY6sjh",
  "key13": "3evNuZcY1ya2nCJX1V8qG9xz3iYJfp2bFG2o221v5Weibxa2pLHzwroSWFbNJLn64o3qUsmBz4PeEmFoFYhQHSn5",
  "key14": "JrhzciteDEu5UxmN1JGdWr4qi3hePLGewUBTEgSKnuHiWjBg9r66P4qhmyCfzJUftKRk7dgNCnGdPyBdLsfEsya",
  "key15": "3ewAmHK2JrHg6hNpz3UdXevRaEEn78UHBLEBDKwkEoExMT826DxSYP5ZjodLYy5a66SCXfmyaQXNG7AWvy5h1h4",
  "key16": "2SZG1aLSZtx9kuHSd52vPsVYieNRQkrybGNTsMbAEsNNgvE3quH36tmcVcR5ZyGTxAS2KdNYfEAucT8ZF36f4R9M",
  "key17": "22iik2oLwK9HSre5g9kEuurxHWHY2jLPzussziZ3UQfHSVmtgthiifixeZWKqQYXHQ4SYGJVMWq4bLnXok9ELuDY",
  "key18": "59frG6BqWGU5D3i7HaiwEmu3dwpDpkjTkDffCCmoC6nLL2hy6xwWRpk9gCF5JTGkeh96SSq7vJNNAoebYoS6bRdx",
  "key19": "3nsvHby7CB5i5p4jMKm8jrFM8cheDqogNzQJHMKhfJzdzYnv17FYofLHZV3DzJYLCSuB1VaXpCW2uErMcbUctG2W",
  "key20": "3eq7dGKLphr36Ce9oyzHsgguqmCNA9uPgbs9dvFLCZin3uXzLa2JLAyVUqWXfsG5gJRRmQwCYTHTuTHy9krS6zYB",
  "key21": "5ZAQSXT4oa5YdkAdWajkhaKwZGDaMJC2ywoLhuMF1txbafrgctRakQ259LxTDyqB2skJWidQxHG9MpuJhSDhYvQV",
  "key22": "53nLTaEVTb37kZW3RQ1FYAER2MBgVhRgF6YCJt73ewvQqmmDicsnKztmGfHyc23X5HUNTd2R7RaM7BF1Mo44Hx2V",
  "key23": "2EvUSMAjUQLU7nJ8YycWf5eLrZkjYoRrLX8JUeBoyxzFQv9ygzCAGCHySvBEExvGopLsL9E4F6gZfMwxPyMV1AY5",
  "key24": "4EwpxoHmsikEYGkJCHTy3uDehCbZ5yHszQWULeqrTakwgx5uFRS4M3CX2zE1DyJnknAxrzsJu3oSmTqwKQ757LgF",
  "key25": "2PMdvTV5FBx42tdp1DQjJ4bgwxA35HYVDbfTjks8KTDcmQY98vqemdgVgmBK8kSqdD2y8MEtLaP1VpiPtAB1FZ1r",
  "key26": "5cDMc98x4BS79VMruoEsGqDqABCLKW1j15aeax6cWZz7BXnCEhjxKp1hGHQoP6VyW3WKgrCHg9WPzWf9STvnwhvN",
  "key27": "2dYREDqvUXMQeUTD7km3x3sNQyNaYXLQRXeaCoNekoXZFYR5m2SRC6cPfQXNnpUUPAoDHv4NP4p4ETow3F6A19Dt",
  "key28": "G62BBXPqJy4kG8dVnXtiq3jAtyRLdFXRLVP7yigMTN6bi8pPujYKVtqL6eV9UmwaBiU5zPaTffkh9Nydqg1tCys",
  "key29": "3xjJvKfye9QrpstDYvXsXv8zjbdKvQx5c3JvcVR118G1NUESdi6jTj3fY9HHFMFLuP6Q58JM3t8aHxBLvJS1v2CP",
  "key30": "4vwoJLS1xoTCrdq2ZYLfY9Y6RYmceELKvMqVe4vw2CxesXLTZjQCu7YKx32GVKVGUtGSnYGy1xMQRfjFfQ95YfjQ",
  "key31": "ZKaj1rg16Rms66j81ANUQYZ8azyLkymPqixXSFeLwxDLm8nGoo2bcVtPi1GdEbGYyWFNurcuvufYTgfvoXYLUNk",
  "key32": "2DgMJ1GNcuABeAkZ1FK7BUuF7DgHcHW1fsLHkwiq9NVdfpQs55AvWTvKzEYqviKBxdSnLzXpgTXh8nsVawPdPLiQ",
  "key33": "2wy6cuLN537pbhYUiUC4FMkxD7sXPEmbyNG38C2XEMqZ39DDnUtsNhBGV9KECE17bi7WCW984veqnSUM2bCrwSYb",
  "key34": "67bmtsJp53iCsc4BQeBc21NxUkStTxpbTQLmAwxaGuabivGs41c7gCTFG6suCgoCaRoT2q2nKyKZpSxYTfhdw8qU",
  "key35": "2Z5wuVzmmpLRSNS4zdQndzp1waLrxHtq56Hf9LpZD9VhWuYVahRg1kn83k7J7fSrvBmPnzK2dMr2TGWxsJdvgV3Z"
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
