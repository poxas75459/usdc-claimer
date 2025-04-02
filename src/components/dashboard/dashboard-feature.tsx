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
    "5rF547iJnUBRkDQxbTUZokGe3tXRg6p92eAu62Eji43BJzrTFzA6ZTDtZNN9rExUjWxosLgzDv56zEX69tmWMmSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcWtu9MAUzF34DFB8f2r7aQAbmdSKJ2BQgBsnvpCXnmYmNTiPf2xbY2dcgvkDveqHZWECw8sKqz6yrM6HMCKM5F",
  "key1": "2c7UCnVUeLaLioZA3MewdmWkLzkaAbXBbmy9PvkfUi8EZZjE2BmGn1gaJ5Eu2gCM2DQMekn6p4ENtyTFhT8eSztT",
  "key2": "2xKa1y5hGj9yfhDxPDT5o5Wsk3Vx2sqc4XTaWttW1j1r1DiA5yB1UVXdg5A3xnCHHnu9eCiUwimZzGpnCXLuASRh",
  "key3": "y2wY9b2fpx9QCuM57Y22vYAp9FJNKm2HE5ZSxvNhgvqyofcwNyjPNfL1MCcsbLVn9i1SJWzvFLGrtGHQHoHQbiu",
  "key4": "4xB1E57bjMj9LT69ayCYveS8uj5UnvtK2e3qw5mU6hn8ETWniAxcUpShEFUFvAGjN22AEfbyYWiTG5MVy1Ugz36h",
  "key5": "SqH2GQNimomFLmtFZZJoLM4EwGY6iLPLEzwUAPEK2uhKcd4KUrGeXSbTTzEMacUHMiaxWLsE9LQPfW4RNSPawEo",
  "key6": "2s4ranu1M4BfdP9G2x4iqVgn2J1EDNQNpJkFNkmsXWxxpxRfJrKtQVd54CYArgNy3UqMUBPsh1E76mQZgjCRc1Hi",
  "key7": "2NKiv4U9vhp5VJfihGxyXLiWfsJ8kX76zeHDTgsF9oSis1sHPoNe9VSyhMysxkrb78yKAjXSJux24DMZXqMytrNk",
  "key8": "5BAbxfEVPdHLx1mgLrq32Rnx9GrUWXDqP5xNDJr6vN1eKi4vFrwvgwK5kjqB7UqegnowPpDB8SkHwvMQjJgo9MVX",
  "key9": "65f8NekstUWTZF3Muzg71MLyj6AHQduzQfgsULi3N4TeAjBEqanDDd7PorUQ59AA5GXmiwiEhcUmpxNn8PY5DGNg",
  "key10": "97xgsVbAWn6XpzJVugGfG5Fa7zCNhFCD8YJzjeWMcqiMNHrQgmLGa1EWRPQ17Qwa5htD31hJmGWcjcJxB83tntN",
  "key11": "2LimubgeaLfpUKQyqwEffWHKrWz4MPhD6W6Vv5NcgHvFjSRwMtqDnvCdJhSTvQc9tYNHGueCQrWc1uAmmF69snzk",
  "key12": "5tRTFtZ7wJKB4V5nmugiU3i298M6WN4JAM4MzEPoucWaSCMg3Gxs6wsLsLjYoL2xvQbG6CksxBN3hp5zkMVEFgPt",
  "key13": "5S3TRAvAJZC2zT1FMCUDppQ8o5FJ7BvC9gj1oH6thKsJ8giYkF6vA9opX2VdM3YnHzyxYVEwLA3vfeqC5h5Hfufz",
  "key14": "47fwRPYbTXZ95hGWWUCj6WMhjDhBrtP7wsYF8mq8ABFrBeYUabidXT3rXpCdzXFMoRpuLknDF7nox7gvfgKPZpw2",
  "key15": "4wokCnV2sFa9TMByqj3fMLvaCcFbVmNfJ4KWvwQMVbrvGTqbRS3ErutJAF7GC9ue2CsPQQYe3UED8haKqoWCHuJt",
  "key16": "V5Ehyf2L3ymC97573z4wMVLRseCVezecevuSzpwvRcKjuZ9jiStNuRJYbsExiZHVfrJDv1qpzRtmwV8zc9XHGFW",
  "key17": "36yavAjhHstpYk19JpHsbpkUKJizYjcZU6BVSviB2Va4MQgkoobmo5z846mquasbMNp1aHsRDYAe11pULuRibsUW",
  "key18": "5REgMr8kcjK6d16xpPj1xrbtGXDza1E5CoQyDEJBzinw7oBPTCZNdY6C57oQq2pEAs5TYTZQMh1UGySHMaorLVSb",
  "key19": "2SMrtTMsBzER3dWBurSEJrLtE4AsVgaFNBFrKjsuorKEj6czLyfmd3TD1v3edoaAJHztffmFNK8diKhM8aWg7m2g",
  "key20": "ks5u3zrjUfpRnm6EgLM9HUMbwCWTf41k28mY3QH22W8krR2jM46nCXnDFKjNRSxnrUcBRAvxWc9W7SdH9ipaYmP",
  "key21": "332pMo9yXPBarSji2a9x1mouMxkbYTkH1RtjadxRP2FsZcpqrB6L7jTjrbV9p5MtFrjLiH1ySH35PtBG9cjjDh3E",
  "key22": "4ijwgrpbG3kLH4t2N4WcVPpYLFW5YajUJumTgkvsrGiY19nrZ7K8eAsUZwsEnt6JKhb9fQuCjp33TTk6nCPyFD1v",
  "key23": "59GkiZDuQHUQSbGn2zSAuebXLdUpPb48WNWX6itL2JRZzDeXDE4Jw6gUcvNV6XwyY3g2Eop5UMgC1WmmuQoM97Hc",
  "key24": "535pQmJvTKWo8kpdXUkjBT7pe9frzja6tMtMDVEmofMShXwEq2QcTRd8AyvV4mVu5wMs4PTy6THVmghikife6Tg3",
  "key25": "3hrqMzdLBjgK2ngk1nXa9wjtbBLHHPD68ekUAMCzub9ShY4A5hqWERs6NU6t28zgYzYEbt5EFdfPhWvjqsgAYN6s",
  "key26": "2CmrQpaBvb6faYHEXxuVkFQ398GFATt5VCZdQrGVRUSrN3kmydqEqVkxUhhLfbh7Z2GZbjszZtH6ujp6FURLRn8c",
  "key27": "39iUDig9Gwv3Y8EhXkXxQakuPPYhgF6Y3aQc2zsMdJoCJBXLjEbSLgNRvQUGix2PDRZfuFo5kRWjzuKNRHDouUAF",
  "key28": "2T7K9q8iCknixWC17pF9aSeCv4T7fZrGExFeD7KajveEmE9SiiQt9Nf8jEE9wAP5RZJppGogBuAEfBtQGuhW8dt6",
  "key29": "4RveeWmRVNQnogdagtJ7kb5UpxaqbPWjPstESduoqBL9nxwREDabegTmCNacY6vfvXSC1hB1LhkWvWiS613zZVeJ",
  "key30": "4G7P1DamSDLvcbb6ULptd7CQFjzgziECsZFSTv1tpWWsg76DaBCQ3PZSoQyW29iWMe9sJ3Ps5VBBNihKirpS79ez",
  "key31": "4yTs87hSadfHLBJfF8MyMt673QgSjU9m4Z5Sqqfg7ZLdzT7W4ZG3X9o8S7VDwXvQLjtAF5HhX3BNPPaRLiXLV5Ck",
  "key32": "46TTKcgMv4mnP7A2fUuxjSerWEZrTfbZNXeQVoBwbWWKiFXU18vXc4LWDpar9XCXVsbaez7fjRFbKH5tEFcAVnSJ"
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
