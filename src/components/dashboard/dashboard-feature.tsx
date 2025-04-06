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
    "gYEiqWUoWiYYeFjkhpKL6BgQhDjax7QBrRWqFXWE6j5msTCuM5xGdys9KyeTXSu9v1HdLhd43uituEKBQeH68GR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TwjMVYMPujbpaiwU1z5vy91pJV6aFCXfEMf5A7o1jNrhTrFt2svN55cuwUiXDeqkwtx6weZToaiU1xtYpyshQfN",
  "key1": "5QaVtKrsq2yq7wECw9Mz6ToVCBjeK8rs4sorun3uKrzBfD9dbsuWnd3fbTvBrHiGnumubvwwJ47KybjFjy3irCEk",
  "key2": "4zq26LR6VSwScumCsCkTzxx82U5dbDZU9pduK5kwLAqFNiPsr5sSqzothPgU9Kbhj3RhgTd3qwVSoH7RVQjviSuS",
  "key3": "5zaXU6pwatwbbRqcD5LcFthQESArpDajKC2KssAYfmrYgifmofRxGwqNUn5ujESri3MNtG2i1grS8xDarmVr7ver",
  "key4": "34YBKCd8yjfrEGppLtWUA83VZ5qQ1n5F6rsJqCeXjhbKpmT5ggQaqzbFXd2raPsKqzkK7vTorMf7yVpMyjRh95YA",
  "key5": "4AnduhLUcXxYHnyb1jaC8zTQzMbbcvPo7jwFG7kMCk3qFmBJZbyZsPDsz4cRxZ8Mdii5BWbJrsNSzVLGVWNDh1UL",
  "key6": "3ckEymJnXTuhfihW2XZgStt7vPhxoRQ8RBN5Vrz1iJVMMcWARhzJq2arsJj2uqePUgse87iXmXPxVmBtEbSw9Ki",
  "key7": "3tcJGWszZDmaG9oyoFva4USys91xiKT6xHFcjSM8WiFqKPhWVSpkDK8Nt9ZZVDXvy8jNo7ztEKryuWxViZrQB8ZN",
  "key8": "Rq8cAZoB2sruPpCV82LMoKekXtAM3gyD1c4W1TsFWr78UKVuC5DL4kTfk7xVuk5SimhB619mJuRTjK2PZpoRRYX",
  "key9": "4DRFQvHdp2YXPAh9FL8TNeWpGi66UfCHtudnhCmoUfm9wbvvstbKtsxGqyvjYn7mcDHHfvi8ixEN9y9hyQNs68Po",
  "key10": "LQsaGXHhaR5mwCdkn9XXHwYNML13KWHXnHB8nCzEv1iRjVeENfJJh3C7ewqX2XYEgxTpeY6ZXBmUFK2hjLEBYf4",
  "key11": "3vEeuecWYxj7zjjxLh6AgPQELaR7NVSi2dvkvutWQ7yjLisUuewvJ4kphDRqve2diDze8Qp26FTBrD6iVoTDrWCL",
  "key12": "5SVK6rGWSDzuoPKNRF7eeLYGNYGKvxYEdFiVUf6DZHDxzLjHWm4HziwsopMyTuaXK2bTnU93y8W9877HAhG62DVa",
  "key13": "3PMiq1pPU3rFKbteshL91CCy4eC6P8JfDGjNH7t9CZuHurCUmayiqHM3CgEoennL5jpjGsBLaqMBTNdK5igRHt2a",
  "key14": "NsHwhxZt6Ctff552b9RFUYQNY4khRLPGZbA9CtxFRR33Sn5kT9TySHYrVS8bqqNVDRbKZABfLCogCypRkjYswCg",
  "key15": "3DfbALWvg24Ree3qGDhx6muc1TXQHnrg5MY62iX6WUJvidc3iyxETthfhQQpNC7MpejQg5Vi8zSb7zvpkUVvh4Gi",
  "key16": "5MXP5wiH5Y1qXc77bU2Gu6ca6ATrCqdiVZHYP5prJDYpXVUybejtKkYPBYD1uZSEMZ66aGHbZbH24eJhBMRDrTVY",
  "key17": "67XmqpsVLmwYeWnJufG7DAomQ5zZ5GLjZnfajwyeQnAphj4sGV6WGKcbqUho5e4gbcgmwXJS8GDsYKSWvWM1jkQe",
  "key18": "2yGcsDUB98q3W1rNZuE8Xw5XByPfdNGBS1NE3omTrn36BQBWkhiHofrpkfhJpVpjeJEmnghSyrmo23SNeXQkfmhS",
  "key19": "5db58gdwGrsMZ6CpkqixSeaAL3D2JiRWYn5FoWdqcUNAXQuq3RCUsMKm6WafcXyFVKVdtEhYM2imAoGGnMk37uei",
  "key20": "5EvfoZgNBNTuFNrYKL8TMguffwLgYbKs29nb6RvQfhoEFQWfJg8G9LuTgzsDjh6vqUdzCnxqAMHLVVgWpST16NxZ",
  "key21": "QzeMeDKMw3RKAjZB2uxkNcGPsKd1GkULLvryQYtgGAemacekqV2vPpAtfjoaSzyACow4frqmnfGBDqre5ETCHrw",
  "key22": "QiPCWZUUitPwKzqioxC4PvD9eCmvXkwTvdEoVKLBST9Acym2G1gaybxZ7Xhs947t558aMQ9UNVywHuyqZYL7c6S",
  "key23": "ggKkDBHSedZ3aGdcBJZqiHFrMt9TTimdEZEaTDyCsXCb7Vr4H1o97Bz8DAjT5Ka5fMbYkBr6U2Ff4bCZWGrpkAT",
  "key24": "37nRh3QxAq4xer3KLUk7b6LymoUa9HLgkfRRgnKsiLjpAfcGq89myoLoyuiAhQYhZAyRbp7W7LCNe5Pi6uy5dZzV",
  "key25": "2S3JvbyRZ8KhRRgmb5Dw43mJ8FNHHe4MckLdxS744zeHCtzJnAYRrPJYcrvdZrD1ZMahZ6LZ6QtuQ5xFb3qKMARy",
  "key26": "3W7dsXYM54yDrBnH28XoYP32cZndSA13cF664jDD5h88QVNKjrVitanYwMKjd1XBz1CiHVwJ5HJXcEvWE7NjwG2C",
  "key27": "3PARKc1aYAQX9SDqBe1vVww13JuhQ1a712fks84d9PA86vvKbHy1AVCrYeyvu7FmJLYYpUHw83iyvzkPZCggR7QW"
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
