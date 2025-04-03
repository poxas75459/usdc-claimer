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
    "z4N5utJEKjN6uaYxontiAwceq2vHiaBtfctGdh5WKsrE8dD3Pt26T2iLwpEAPcq7rhbBL11iNM9x5JMBEXd9r5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxCNHBwKHirkPZ5QJxtzpQdePJjqec8EDBJsSJ3DKvPZTmFSkFkbWJ5h51DW6pmmwPb69A6h11mPk7B5nSBhZGh",
  "key1": "3f3FxsjT72q3h56kTAfdpmVvh4bXcGXYrSKQH2mMvjqFVkQScPtFwFVo1SrFFPt2LfobgF6G7k5VcREvhc6XVu8K",
  "key2": "s6v29aDneZduNYgmTgFWogAKNQQgtTFb6DmfKxocCKZAo8Z6kxadWisWMYUmsqe5Fr6nANZWQcYsQ5JTXKLqZHM",
  "key3": "5z8uasJdwWVwgnCB6FmGAdHzUqCoaCcejMhWZV1bbftXu1CXNXT5CZyNHjAhREWk9XZymQQjYs3jpfv2iWZ8oTiz",
  "key4": "imaWmqL7hCtB3Ysh89bSFstXQKXbMNKKbB2TmjiiL67hGGH4zPhwyBrBA6B6ixReenskAVgESaVS4F3jBzPpY7X",
  "key5": "3JFPXXF8Mt2cWRUM83cMvA9RYvjmTz5mWuYfSV8NhCQEWA3AELd13GiHU4YVkK2pbKPqDdUzgzpPLJ7p35FpEYt5",
  "key6": "28Nq6CoxVCMXH3exkHmNt9yRsy1o7gWoBL5y35yWs3e4byzGB3rQ5wRhu1uvMEc8hHDdPvbwJPF6VC9eodABdGpb",
  "key7": "5NXsWegPnD25q6jc3tHd8YUkGBKtto62LW4Ls6Sthc1jhP9457jzNVnrJ9UyhgkcSj42wxaAXNFVgqND1myFw3Kb",
  "key8": "4iwh9Siafk28QoAmN7ZKMYy3g2MWvSTpGrfncjeTaJj3dPPPrDyjjS3qp2dJiRsWjNjKzevCknzXFjzMbHo7bqzu",
  "key9": "4hpCQ7XiX8jhkcJxBc14ir523AZMgukbgkRyxP2t4zhFqHhxasrvWmvchQV177fVueXqNBqmQ7WH3HoU74vKtG1X",
  "key10": "2k85mpB2cBMEaA4EYy2mYP5rfqGCVKFDwj995t98S5SoiuLCerYUuuaSoTyVHscB2oTjPFjcPMAZyL2MUouc75AH",
  "key11": "4zbmwEokRGZwcvELadg4Q5Q28WpuABskovg4L3UkvHeAueFpoeXxZtuhHT8rfgWfrSxsapyuJDMT98Ab8PQKB2u1",
  "key12": "VEs3rysVRz5qiQJEcPvR8BPPpaEgiUXgEUAfws2KewGxnSJPvBPVBjAr7yqoe4M3p23N9kjESZGX2qVGXTtNfo7",
  "key13": "4QbEhABLZkisWvJce8Ww3DdYuPhoefPjv3KNoEzL77EprSxW3dqtNJGXmzPM41wqrUX9kVw1P3bPv9VnVLWuHL1b",
  "key14": "2dVZ1kmF2WvviMBznFvPSWauxXo6KyKKrpWiQrv74DWq61YdNCnmESZr8wHgRqPk1MPS7kZURtNxRgEAuNyaWAEA",
  "key15": "56NYuvBYSWcC9MGP6kdHu4jpevjBd7sXAtCAMt4r83yx5LonHLcBDdAFCGNUgeB4NyEj1PU7kns4mESce4jxVqd5",
  "key16": "4ytnZXXJXUKAKM5icktsWFiArr8Em1eGP8mgQrZzevn2byy14ocJwEAE7acs1ywMdjabQLchDLmHiPPDYsokBNbb",
  "key17": "59S2cdYEFK6NJGYiS8ndegYg2Uwpp6D6WMGsAkEi8GUdKzNq7N8wKbkBgr7oW6KLW7GuGKtyuAwaNxRnmQZYBHEP",
  "key18": "DDPdADa78YXbHJB88PmvbJsiynMwmR2s6AaRQ33yj8Tvj8JifCFBDqy6e28FEcKz8P84iNbiB46KHY2gW9KtAo6",
  "key19": "4o42RwefSdGMWrNc1H1Mw5RhZb2wAWMopdwA94g21hQxW5Vr6kwGx2RbUjPYVySnEvfuY38Zpk5g88VwfkqyJU6D",
  "key20": "2svuefX7NqhpB1anF1nPQt4tmyK9hNp9sCwVYQeHoaEEw3DKtx4C5q9AFLhsJA4MphomkEUxRscUDmUxTnkkXwx3",
  "key21": "5HZfAKoqp93hLJnSeAND3JsYg3FP5qy2Ahv2cGRsU9q31fn1wxk7oL1Jfy94mfxztfcXPSFhqh79v7kNMfm6TWA3",
  "key22": "3rd3aPpj8N92gJZQtKNW13qC3x5nSpDsZNBA43DXv9JFmyNpybx1vpqtDp3GGCS12ja8pw5HEb2s6DLpYQ7CH3AY",
  "key23": "28GibGtqk53XNa9swnkLHivH2u4Sa6w5E8qrqj89wBWf7pwvQ5EJAXecLw3BUHkciUaeRCUPGghWQKNP7GHEe6an",
  "key24": "3mFSiuBcyPKjzvoai5wNpimxp4PpztYTbuvXh38EJbdcgrDwb3avX5i15RscrDM1WJrns8vHn4LY1XuwhxV1cWjv",
  "key25": "59kJMGEZv9DyzbbUnTZzT58QBCTnJ4sDf3drticEpCaszroFEyVjCSsJBRw34bejVe8i1Dr2xRXBUFYs1pf82JYz",
  "key26": "J4kiPn2WHnjMzNU9sUwWCfW8istTbnWZHHQupndBrQviSoBNdDeNDvzJwVVD4tvgrzCm67Sfo6JZAtEfpJPY7Vr",
  "key27": "4ZVYq7FypYoPjCgdvD7DWFRU9xytDGnzNfU1xKQCnSEBAXi8Hnf6TCcvvQ4BqS2in3rGGCRxw5HF7n3JLYfvUUVj",
  "key28": "3r9rUBiGnJqn9KkrDwMafyWcXoJNqKGomVvXj6JHipkb1Sq7xCutUmqdGGs2m8FVxAHrYxTLCvGtYT9fa9thQ4M7",
  "key29": "4yXGdxEfotnYZMyuKAvM3onDwEBGB6Ph83fPRKn9k2HyNscJ4gfB6dggAqPzgHzoPHcV9VaU94RUDqrvkeLSnbEW",
  "key30": "3MmF5qWTS1T5qDKH9TCDyYiGoLzdL7NA4YndW1Eckk6wXFaLo53TiLoniBP9AqDTyPaKYyXHXKPLFBELejCSd6MD",
  "key31": "5RSdDjjaSZcKzHV4NNekjJvSJdjnY5wVo7Dq1HKB9rUqmxZCwWkwmrF8xvCEv8JkgJ4t9zXKGeNZzL1afi55Jx4f",
  "key32": "4xmiqo35ZM4USCaZ6M8NEHZoSqcyzcU41L9Fe1NxSavhe7nPgA6W9h1u1ERQdrqjmN6DsjSpp9noAqgM36Y7EQci",
  "key33": "56ewSmZe3TDGsA37bPzn9f2uZLmqW46UHNBY2WKXFTQGgw7hv79mtmmijhteqxNY9kiiRsA3uimHHXksZ9di9kYH",
  "key34": "3e7yBcSxw6pujpwvKJJ8YuKEVBnxt8oFMWihWjHXNcuv9QaZkHqNqgzugvo7mzjLv84m2Dn7hoZ45vf9HM9sKsfm",
  "key35": "51mvxbshN9b23Bb7VyyBWiDNUjpQXRScFSUDw4fjiDTU67qRFXd3FRvyHCgARuA9hrMPiNHp2nhh4B6zKSCahRdZ"
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
