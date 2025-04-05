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
    "3rXBgmVSJspQ14Sn8rteRRzCcfrCQ8NCANPTogmtkp98VJiSjBaSn86KoFEgWsA2MtJWMp9deui9593Mnxi7myjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46E98ygBz6J9gAxckG4Snt1KbTMnhLkoqcgqBSV7K1G2eGRanXFQ1bGGYR3CkcK9DH4MagMZ2ai5dNeypVXz6m3f",
  "key1": "1y8kgBA3xX8LC7sh31kz6xqPvz5tvXRCNNazmEUbx81GdPnp6Y7WQT1Rg9cWtaniM9CRJCmZaHdP9HXXR51YYXs",
  "key2": "2vwjWMNjC3aGq9xinikA1N7KCPgrc5JQcgzVJ4oPBEnXgfnK3dAQCWGThD2Y3z27FNJNvP5DcGQby285R9uwHn5N",
  "key3": "5EaYyXtwP83gHssS8VwLFW15DFUGxHKuTxcqx6Tx1uuTarSX9iTMoXicUAStbKsA8Pv336U6QnoxsTUsb5dFmunb",
  "key4": "2x2gYzaVaTbuYh3YQMe3HR45ikw2QzXoAmqsfZXSANtZ6JRYcGjuHEfbNcEsPby3CtokScEcdW6STDnvBepZo6Qe",
  "key5": "4aoBepzUz4ZGMAdGkyK5MBxFm2KB1RzjM8t6oHYTmfH2XyFQK8q2Msmbc1ykZN3XM5e7L4nRx6dx1JpDAVhMZYv1",
  "key6": "4iPCCRLrDtHQBNpxFowyVQUcgj58pD3zKgSYHaDHz924331F26XsmEdrdZYMtAxkJUBY2fou8DbFVwF4D8RJrtYp",
  "key7": "3XxkmBb76dRELDQeWMqLTychwMHKa4aMAo6fuD4Zd7vvwPsJVEQPfVzjWR1FhoqjonabahXcGS9EXeVZ9FQNQ52D",
  "key8": "2UVTNmGVMK7kLhsdanohx56WreBSjPrrc2HPvYSKfd7uitTzBetJDEU1pb8kmnuULFG2EGPNzP8x9mZrBtBEbcPg",
  "key9": "2e1EJvk94JZw3Yq6PFD28KuwFUtccJgXSRLAEJr94dyX2gnY85Ska2EfvUwYLQsv8q1jukYycDb47mvTR1MauqjS",
  "key10": "5jxcj1AmY26a4JHZhNNEzwKP5cKuRKRtygUeVe1gDcvp2EhVWbHgRkxtKWB7Qxm8VuKTnEY68isZ3uHfm2JdAmfX",
  "key11": "2RfddyEZmagVFE8oq4MrxmnJqg9DMKWMjGR87rqcXbvA4EsS8GMz45hnDxPoSXZUxUzh8KhDTEQWyKBKH1i6Cuhu",
  "key12": "5RvDqEscWfKPf1HzEUqC8zeYtZozVd4jXhxrmirs8T598ksJ2JrgpJDhR4jimKaTCABQyyWbeo4tmiVUoJ7TskqV",
  "key13": "49U8bzqVei41kS4dP2cnFWca19z3n8NDfMTLbAvLPHVfhgkkGpKPx2VNdzgnTNKSmNTSn97vqWEVkePoSXqknMRN",
  "key14": "4i5nsYsiYhnMT93XYvHfjt9LfKPScgcGddenG6jVamLgzHoWwB9JXffNX4RmvFVmZdUNNMjdLvvhyJ1ybkc3LZDC",
  "key15": "25AtJyHTLYQ6i7zyuUf2SmZKavxEXZG3zt3sHApUcZysvhct7p3XHyVEesLSqUzxYAL2m83XhFbRMkMgx6SNf84u",
  "key16": "5ZyK8NoooQ4VsYckbC716zmz7Do2mXUmkrKuHx1tjTrdrAqbjbf7zSrhC3BAYfRJdgBWwpjQSaxZKdhVkbzF4ee5",
  "key17": "5TT3jkesYdLFYqLnxUMcFLqzrCGBSGVLd741VjRu197DyoWqnhFikFXz1Brg9RrEW9Pds383bM2JNtMnV5kuLqHh",
  "key18": "3e5pZRVc262ahj6DY1AKxfaJBRDXZUe9tvo3kvn4ysQfHUzhuPsYA2DochGjdBRVFT3XLHqLtPsFsAK1yJiTuTKj",
  "key19": "5rxc8e5EufgTHD8Qwx2KVuz6fHeHKAS1nxDDx7Kg275dqr3crApGU9Pm71c3eL9MmwQ8yQcWAXLUykE8ERcAK2qL",
  "key20": "3c8a6XbqufBtEY94sSkmwAFnu9iU7AwBr8eEW5t8PGZYc71TXYDafMik69jRGe5JQhFm16pnggVh1tum2FVySycZ",
  "key21": "fd7UH63huk22LBiWsSJFPycF7ReTEEi8C4m1DxJhVhqudtN3KAjNy6oKrcSvPxKAZpPQk2hgF751usj62bExxgX",
  "key22": "4BsYEV3bK5p3cfRVeUdbt6UyLWFsL5SkPdfsJiXSk5Uqmr7VxMBxYQWvXip47Kz3brT3vsBG6K7VqqHRibZiYcUB",
  "key23": "5X6BAfsUxVMRvWcT31mthvJMQe8mgmTJsGchpCRkZBHxQiEqDePDCw3E2BWEauhfoaP5K1m95PHn4LsA7Wac1Vyd",
  "key24": "2VQArmBDiesKhm9zXfCNY8DsSnG7QhvQFUR125efr4pNrKPRcKR4LvY3sP33xgzn7VJs3NRLvEH4Lc6DGEWwDRcs",
  "key25": "5UpRLf8eoRwJGS3bNKaNC1vZqVrYxbSiKHBFCoRYjAvxzZ2uSByCJioPBotdRdEdbxPae9GGSb2bsKCnnzGC4vkG",
  "key26": "3vo4MDDaKvE95T24VXK3NWABNKShhXYfsLWU3kUvi3hgSXo5dfA9Dj5pwY6h9ySN6BqHoyzsf5MadoeCEwcC55mh",
  "key27": "64fBds97sQDbYUdnHmtE5UDj8TSVbArU6suuwRZE4URs1DuiLfZRy4aze1zWgYvRQcZjbKNcSTpi1AYkx7CS78fn",
  "key28": "3dow81DSY2ckKBpyK15WKydP31dbzk7bvSeN4Ur3y7x166EyWbgLpV8L1tEnFSaPFTjRF7sYhSoM9g29ZLGVhw7F",
  "key29": "3QG3dx4JkziUEk4SeQ6rD83b15LK54wmqhECFzrYAnmHX3whe2yDjA54BS835E5QoU1yBTLmDrqAVCysXnaNGqtt",
  "key30": "2AUHtLBnAUKfkPB6wqXhnrMDTGqSrkWsZtBcLzDZWohhAnrtVVZibzEsDwVHU4m5rdTVALeVaAVaYskGeLYWrpUU",
  "key31": "5yy327qF3wrbfUgYLVwoL8peGm3Edk1X4P1kHu9f6iCwSSvuFv1kF2Kva5pbGHbntoGZvACFiXMG9hBQt2DJNoon",
  "key32": "9ftGpvFxmUTnza77w48hNjDnDqMiNSbXq74KSxrorbQyaoHV2VGjckhVgHFRXf4unir9vHQZ4Cob8SSybFc3486",
  "key33": "TcpjWUdUetXpx3iLLxyXjesT8LqQ8XEUSok4KmEMwUYYbBijeJaX5Q1BSQo3QwoSu4kfBy9yFAsHca1yyChkuck",
  "key34": "4yc2vxcYPi7YqgwEF7QDZ5AZNcpvL8ioEh8upg3mHMKgAQmXuBZhT9nWCJdTot9eSrz4NCJtZcCDNvbUT26yz53a",
  "key35": "4eMKznvx6aweLL6AopgveThQSshuF5aN1QEhu9aGLr9LjhhbKnzFueq6wWpzrhhZMda9sWeXDwobtfW67GxTjaPK"
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
