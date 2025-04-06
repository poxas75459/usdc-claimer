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
    "QFSGF4cJmuNBYkqzMCTW8uQcFkUTwgpRb5g26qHu4k8c6LscLoK1Mtj5qdzAWHGsFLnh7Yxt3ExoSQMVJf1sqF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64C84VZ4K4hxUyfwnHsZguoWMkAuoPoH386fZNLmC1E3G18UWHeVHnfFpjvXqPQQgP9ivUjUfPGbJWmXFheoY82b",
  "key1": "51A1M2U3okaxxTzhyzQ2QsRWtzjsXTgmRb9up5kuLwvy1qz7LPS22KZAxZaesA3jpMd4VU6SFkVrCwA7uK1ZeGs6",
  "key2": "VLvmAT5xptkj9v4n5gQQkBMkrXhjRUFcwdraeqeX1Qnnqt1rRuBr3ZKzK9CPfhM8pUVjbxCXGBhuMP3MVjSaBc3",
  "key3": "2kXX1x6i7zWhRdWJkpy7CqrpH3ix3Vfwsz9EBQ9Ko2HVZqUmtZcRgjexNeuQ3K3J54qqx3PbLXJzbcjuPM6bFxmC",
  "key4": "484jBL3sT3KAGu5njj1zsCCo9oVNqvNYf7qmrMbWpJ9wFwvEYMmv8WrdYYTEbfC3EcyFs4JiVJaC1daapJB591ts",
  "key5": "4QFv6HG1CKirfaw3uGgFUE6xf1exX5efYYPEA3D5Cgykya76FLoeKosQTFYAzXKKXEW4nTuSwi6vbUuBMEqahiMt",
  "key6": "38YSzjAi2Fdd2u4VqPMRitAoNEPngDkWgsY5J9pi8uXE1EsbrQWHpftVLoXwhHPrKQn7Qae9D66rdTCgBGZ6fjzH",
  "key7": "5dypHhEoV2Q9h3Es4VcWYJe8Ja4bsbAL9uUzY1xpw1Evk5LLG3iUXm8VR2F2QQCvcGN6JN7raAygBeDiW7QZYaUw",
  "key8": "2R2wjBZEz7SeXZnropmvb5Y3gmgbTXHGKSVn6AWysVvJWAR7m5asTtcVGP7DydWZyv2KNEzV4iY2wGSn3hXiuDy6",
  "key9": "5rw7YkvLH9LeGeGSLEg8XnRXWs7CSnw5K1VZpyH34GNTCH95BeyjPLgkCXkvFDcF1F8TJuZSx5dGuqRBW5V8dsEj",
  "key10": "4BzuweRm3jtKAwRqz7ecGyBvgnC2hhur72i3wsJ7onvg1eBU9i6KqXrgK5tC9VdkYyoDF1RXFX7HLQBdRib1GxuT",
  "key11": "5x6ozKu9Zj9KHFrmFVr3BH5L3qZLGoHcZ1hBnFXas3rXh6AVNhYNLy6dpdAQNpiVxgRF9q63K9EMKoyaCmAgpeCS",
  "key12": "4dABfgS4jQL1vBBGQjaaPe8Beog6Rcy2nEryXfgU21BHozocRP1ywfo7rkrX3kn3ebwcMJJdPuDkf1uagb3XKSED",
  "key13": "KUPahD7wKFGZQ9sktEtMvT9rWAEWneXJFwoVoCMNiN7fzVjZJwj6R4Twcan1HHMob33HwLsZki65Dfqc9qG6gXY",
  "key14": "3vhqyvqqoGpBvMvZkX9R9BJJWT6Q8oeEhwZWwgiGQ9imogGhiV1Y6eAcuHxztSPwioVTu4Y6H49WDSTfX9MA64r3",
  "key15": "4sSzAUVnwoHBiGowbhoKGt4FYjm3xLoWbWFgnnZakRCEX71KkUa6PF75VctkDd1tS9uHAtKZXWp1ZgZv5n1sjZKZ",
  "key16": "y7vysw33KseczH1y6HJ74FN55w6AdGrJtoFBaUcoUqtPiQVuZ6VksuDwBbdggPid3YD4CAq7k9U6h7Cy17aqpaY",
  "key17": "2P1c6gVH46RooREE66CdfSDWPvQMCpYqYRoaDk96czU74hoSXMWH622zfyJxp2b6ixQeCSTF5cV6iDMgJ1w9iAMD",
  "key18": "5JeEn6duZ6oGb56ozjVCWY3L1iedYLhJJ9hZs3JTsdSFcNJ8sfjfZ5zCxes644v3XXi7vRgpDvVdJr5s1jpMpiGN",
  "key19": "63AyDNFFBLDzHi7n87MFsBkG9e4BXAro6GivHrx6arofcbDhjWe6q1kBXkzYjLkZycoT4eYhd9dJgPQmek9LQS9v",
  "key20": "4AdhwTit3cWojML6jwX3JNfZVLJNqk8faDaP1Hr3k9MrdH76HJng2JSozjFtz288xTjgsmmrV8EMG8zk1BzdSLs8",
  "key21": "3fRMi5ng9cPFeu27NGPPz6rxEFJyhrFQ4UgcLhP3EbKEn7gribSRoRpzrQTiGxKw7sLBi92WghDnB3h2s4nhM3x5",
  "key22": "3LgsM3bL9BEcr1famkVrDwb2fCFvSHh1fMCUSqp9UmCFTg38ZPG7fUj879jDZMameMMhNJYY9rzkuk2ALrLvTey6",
  "key23": "3Kq8SzLCLFpAhnqkVzKPG7uJriopdTMEifRFG72EjAB5dPY6REYAfqp6HYyrGW43dRwRZ2N4uC5qytY3MutTDFqX",
  "key24": "4HCJws1rouTSZhNDJo6TfpkKEn8CaZawnWDrLKsDx7XhNBPFJnakRSJ6sZzFoFQgS8qGL5xdTvTYmnsthN54Qofg",
  "key25": "2hu2nSJkPYLHUtUtzLFiHoXEKNGW7v6xxtAEShFBiLuSj4W8mh5RmgqQVCYdUZ3ghupnb1WamzQzndcSDQuwKoeJ"
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
