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
    "3svqi1jR2Jh7mKM3g323NZc5yP5t3PyiKPe11zCKrXDWV7XAuujShuMehJKBTA6qERZ4FJBQmugfKQz2GpPYo6jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5P1kR1z3c8J3cce46SB1AF2NiMZDQQDpWB9aPK1eLbmeazJaS52uBX9cfwgoSpkzHEVgwUF8SDtatehzj8oSnV",
  "key1": "xJoDtor9SzgnDnr9jZFXRpnGzyTcVAJcDUQR8sxo9hyutFS1PaRNyX3CxLc8TsfzTTHnJt74Me6yjjii5Mmorjx",
  "key2": "3GRnMBEsFDuzQaGTYK681nBRoE8HHdNhZNiBs5dwQFaMPZkB5NvE6AGrEZjvZdWzQB6T7S2w8tP9KPpteke9wqu",
  "key3": "5RurupdzE1sfMUeS1cukLAENa5q4R2DCcZRokafMQAss4eBHuaJXJM3BaCywg9AwrNMvu4PgGgXynbpxnADbfCRc",
  "key4": "UgY5jPvWePmN2j588j1SLfhd9FGcog8sVG4sXuqidhs5iBy4tuma2dueagaUjQ4AiTPdh3AbBsPAYPQ4Cmuqvac",
  "key5": "viSLgzgxfAfqRgf8d4nxUMY9CxAJ3VZ8ZDgPBgC6ofBcXFdG21AQraHQJTU2FjW8MSiTxe1mBc7A9r5znchbbWV",
  "key6": "3VXG7Fc6ZGg7BfDTYcPYYxjMboX7CXs3SCpErxeV4q1fhnUCvkG9TfvYw3CtJxC9fdnF4mDHsTACaHRLAkJaVqUK",
  "key7": "3LzjSgH9wyZN5P3bRe3xYjagPxYZzuCHpLU5s7PmSb1kLv5X6Q16Dg8MFgfPAMt7nPjvXvZBtabKteG36zRokUc7",
  "key8": "4b4moTC9yEXrhHtbxJHnzwUxgvr92isVQg8LuZG54iqudQxAEf3CuxBZNZgzUTfREqMGESHePtBZMYXK3xGKwt6M",
  "key9": "4jQaSXfQBWx9YiSdSfSG6ME1b2eVZikVGxZjREBiqWndm5hP8XXCSeEEqzqcHvF8XPgt285X9ZVxsgE98u7oX9gA",
  "key10": "VXyryVGTiyNaruSRZFNk24DnJJcfEtT61bDjF2wmAd6cy7nEaCtaSy2HUn7PQxAegcDdj9TQ9LWUZEpCGXocJpM",
  "key11": "2FFGGcNH6VL97zsGHF9Fwg6V61eYx8a7zLP6oo2p9gaCopm3FkUsUdNbufbR8AqmAMKksnkp4HLPeXatdVd5pG2f",
  "key12": "23x2c7ABMPcMGDpigoWosnwdoDQmcgzZVNYzn8Gyxzjj6aAog9QhVWLc8wwXR8YrM5i7y9fmbGrXyiRA68NkUJqu",
  "key13": "61K8QMTnkHRTGZEaR9w3mg7B7CPku2b4eFc97Gof3c8RWMFvCYiqPPnFNgLsJQxAbL49N4SFasc2SZirijXW2ZkR",
  "key14": "5BVM5JLG1D2WCfQTmbMUa2cUigoYM2JPBYqsPD1srvtkVu666FUeJcWNXb1Tjsat2KTTnFDVa6PvgAXVBHPX7ykJ",
  "key15": "5inZ3z5tKxzcpfEonyuup2os2u1PzJUG3i8FfiwZ4xumZfHsiKkY6TJN5KV1ZwUo1iDUpBt63cBVMzK3rpM32cX5",
  "key16": "2BnBamJttoQaHXBan4utHeEhkii9ce6V3ebR3y4nvxH6PugW9PW6psKZY3AzM5YTPKA8spYBV3qy5CmDS9jfq5Do",
  "key17": "5hZjnSAnGu2CsDZVXFHcnyjmVe3SD6hPdbbXJYDkiZjFk63dj3AR2L8kZ9bdhqYoDzhf8Jfgs8jFoU7d29oVGZED",
  "key18": "59QikL3UL9Qqee1HjcQNbputrJ6ymzjQvABoDHdqthfg3FdSBfGBV2BApgrEBuRqzaDSwFcMRuiEW5TXHkTLXLuS",
  "key19": "4VmPMaCRaevcuAi9bfd4rtBk5b1ErSCawC2mz12nc5F5azVh8yzcf3Umgog7CWZq83ouJoSUbBdbEnxApRPi3FL6",
  "key20": "23dPs7txMjmyX6nKsKbQzxTpamzci7xYfxqZ2bmUZbtwho12LbT2kLb9SPaUoeRgNU5E9nh3ayxhxMUm1FyXn3Rm",
  "key21": "sPiQQA9ZeBkC1ny6pE5yhe2kEaQ9kRXXF6RjgGU1eAQet3vphFx2RPxDkbKVYNMHBCWvMUgZnQRSfUG89zdK2y8",
  "key22": "4cGjQ1g7YP3NwCoMRDrG3vMnFMwtpWcEM6qd8HL9zPvZkSqHV2nanGJXbz8ENNDZa6gi2jDa4AAoxDymc83fmp3D",
  "key23": "HCnka2fkUsRiHCKQA6cWPZywsqQcTXWcqTuD6n2a3SBcEQ4KmZfbc69z9y2ECD9EnBDVZGRqQWBqHWFFVdU3fLi",
  "key24": "5cyvwFVTinvMWhmyXgHovV2wkG3Lk3npskb7M5Mp3UVEu6swUNkbpVsVv8ydENyN5VzJ274DTFs11CwCPrnu9VTk",
  "key25": "2MEGkfZJEUh1soRA2nbRfQmJJLYdWm2Le8cCTqXa8bnxfqD5GF1gWutzksKjEm1YmQKTbg2o2orWgwjn4dZLTSjw",
  "key26": "3BJVWme2WA146chWnJ7rcCEbzarAJqFJzaGm2ea1e6u6wj6Equc7t1eg2HmRkgWaBZpo2wN9WpSJMio3B8xRrU3u",
  "key27": "4wevoYHHAJVPj5JvdudaHGMcVqPN9yBX9SsZBSRKv55zmkAnhkbc9532ZmDb18JnZyBCiFAve8PGaWakJGc8veit",
  "key28": "4eEfwFsrAumWCGuQWMq5tzejNzvtk68nZsT6HwnR7NHNJVHzgn91rEku9Q2n1e2Hk1d5L16rLs3EuxtLbEHTcXh",
  "key29": "2mKYunR34SRwvGjJMpRgwi5o6AwNUAkynuFDeGAuN1nbqshhTSzZ9tMDybyMQsGXtRcBhv6XEANVVDACVNwgJ7eP",
  "key30": "5pQR1ELuUH1rZSBZyTExsEy95AwWhke2p6bLZFr88g5L4fY5xAtzkc6QXVYQMmpCdpWZiDQ5tprRFx5AgiAxMt6C",
  "key31": "2QQFvEsAF1Bi6jBDndGB5TzkR2yNhEY5kjw5fowC12nN87D3vnmLvxvS9vuUqF72wFfTGhYR7QoKzHzBf5oUvN3e",
  "key32": "2t28s4AXxrX2GLVCBuPGGzXUkwhpLx4To95f8b33ddvpBxpL89VisoVM9dcyb4jUbqj2MkAQ7LBMX9Fcro7zauJ2",
  "key33": "2nC8iU5eTPJ9RT7Hbc31frqbRX9nXhS1szj1888hopw5t597RShoMHkAU55yXGYkzKM8JAY3BBJ8aMcs3C1trUbK",
  "key34": "3J1XJXktfsZK3z797SBDMktT8gHuG8KtCqMmiicoDAG6GpbKFZiCiodo6a16GRGFBC6De6GVeqGg9CCB6DR24Hsh",
  "key35": "2vcmWGz3U8JxRgR4asuKeW1N6nDuj1Dg7CnMcgrb4mRZ2C9mhe9Fmb4JY8EA3YpF3oiUfgfepkcAxYQ1CKjd1d2f"
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
