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
    "TMjKmiRK1wB2aKR8kHVPaxxm5G4mi8NzHR9X5ybZ32UA93ADeSMfMPivXnstxApuZ3SSjoeaimn98w8yEdhTxxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGZmGqtAfCZ1SiTvbfAQC9662EF69H93LxBPzrr2rw7u4qti8J9UCN7978isrkJpDBvvKGjssZnJzwYq2Zo686E",
  "key1": "5MDMmzJmp6QPLQXCAQXoM54q4ABpiDybvKcsqLKBC8giWCameZVHpy24GiUF1erGp4ahvb73ei93gAVQx5XosAuZ",
  "key2": "3NT6jApWmRZGFAgfLS5qTpm5y1NzHSmYndJBBCW6Py1tV2JfQ6SzfeQDZtRxytaYQNcAvHNTEsdy2nv3W9aHoYch",
  "key3": "2PmgbdtzYSrfv9P35AnWcNGfND8iEguspuAmZrxGa5CNaCRvm9FjYFRP6yn7BMRBJTmzwpLAgUEeavoS6LrRYWr",
  "key4": "5uL72dxpY9RFYz6JRB765BAfhdRgHyDBeQGfSVEPfYWNQcZ7VTSRxrhXeL78761J1LuyWW2b8hsphRBz4Mj76461",
  "key5": "2NTPbaRoPRhHGPPyfyA2BXweU8ibPzJC5u2FBQoZ6aebwAUfaS7Bv1F38PxbXsYDr2Hk9r6p9A6csDVRiVAZbDbo",
  "key6": "2nZfTJAX4FazhT7wvYGKKS2wUKm9zUodYEom4HPYjCwXycPpWxDoft3SmgCqq72KkvNKN22Lr4vppGqfwknc3ZTg",
  "key7": "27Wo4o6dNUTok8Ld38E1VqcQD5eqg5M3DX2AUofo44UZzWbKzPkjr6QmwNweRhLHTRHhcEUTTpjUBQnz8cbyb8x6",
  "key8": "5u3c3QsNGrtmB3bRsCdAmNf4SJzvAZwo239fBWeJWiPaDKLyritkAqi4sr7sSm8poE1bNhTceyB98SBfT8Y7AhnK",
  "key9": "2JZkvFtXsowNE2SsJsbWXUFbhs78bFR8Q54z2DTqC1NVBhK4ihURo2PBe5bNKts6sR1ENubWjK1m1GiCuyo1J2TG",
  "key10": "5NDrrmS2ggfae5pMc75JkjjuN4VmfvgqowNLL2RyEo9DKWLFK2vEa5trwpjehvoSf1SQdhXEe9Lvemx1GpiZD3bx",
  "key11": "2sidnetSy19uA14hD65oG4vt92Fa58cSYDgfPGew4Djyc7tWDoBhJZRrt12yAPi4L53CHFr8XgXZ2UhD3MnrHpVK",
  "key12": "623fnXnUTo4Vb2TwR4HCLbPABCqk9JvJeBAQMdc7ieKoZKLveTQKjij83Eweps27QT6v5iN4f2VdgZM757T9hZHX",
  "key13": "4qFruk1vcff7CoJAoWjfqkWBXgU2nepG1H6qT2svSZYfRePHQwmiWmEqLSJgzYDJm8pLxuiVpKsyVrHcWKuKV5vZ",
  "key14": "wP5zHRy83FT7cZWX9vgkgQ7NFhsTT6e4QZEoPYjehw4GMJMhVrvdCh4eWtwp49Lq7ghY1gnsfUnDzmMxVG8NNqc",
  "key15": "2YnnJZcemioJ5EdCZBAcEVxUtki2e3113rfSoQhVu7BJLwPwFSa9E781NPjoBRu5tK1qCDoSUQeXE67HFEkVg2c6",
  "key16": "3vA46SGTmBq9wFgDMY3oYsdMYqdhTnbugux6gQv8ntCDJGj8RggjPZdkp1vkCaymYwS5CTYoJw4RGK8z2QNDvPVR",
  "key17": "5XtNDCimMKBXQAAmi3VyTfrabmyRk6upyHXyd436G53aHTxCior6aWHoFC4cqWkLk1GTrGnXhxCmHRy5HneWJy4A",
  "key18": "31KXVH5eH66yhCtpuscoyB5MspyKathWWHd8XBLimBrMWxpT2t2Vb5Cndtrm95kEHVWm2qdum2E151mk8PjC1XqN",
  "key19": "VZ5wFnVdXuSdGbyN4TaV4RPEU5V9593PviCA8C6CxMuJH6jd7YbwoxzTDhpspzLA7hdv8TLduwWuJfULLv3F8xS",
  "key20": "28iBLi4YAvx5osHgyCByVUt6Z9goUbBoLVdjEL5ykUaLsjUQSY1PXRU7oTq2YJzCXpuCCdTnCUR3GuZFhPVhZ9zq",
  "key21": "53d5QUDbkeVeYithtST5gDhLZQZQYSXWg478n4PtapnqaUSwAuuEk7i4C1vwFz6hZcCW7gPfWdCpbhKfnXfgTaw8",
  "key22": "5qtskDai2JqeEFYrvBR7qg3SfFYgjT93PXPBpG17B1xnMzNBx45Vq8QGeUABpJpcLEttsapR3ziqhaD3owSjFN5a",
  "key23": "62XBiWyPwAiGHaGtRNe9GVpidrFRKCNDkqYRK6o2BwSEF8NCW3frjLpKGzMEK6LmBnuL6K7YH6wER9ZkDjicjg9d",
  "key24": "LYbyw2Sdo32G3Hs4t4LKQ4HhPrEysLBiRksUb5eQN59NHjCCWapr2vre6frzbST4AJkh1U2qMdqCyMUoVer8kAr"
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
