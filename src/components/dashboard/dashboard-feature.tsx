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
    "337UgbzaHwHephs4bXSTKQNFk5wGFrMXdkxcGhWbhzi2WjVRuJVAqmkcCnRuuR6ECXs1nhU2D19iHAeH5DNmZv5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8yDknzxG7Nf4bPxthZBwfZEVNBC9Xqr4b55PYXWMziQ9MK9YjzE8eWBHwEH8RKq61FDVKCDCshsJfvH5RJ8hGV",
  "key1": "34vLUHGSf1D8L9EYmFWRhYPBMdSobpxqZTBwpaS2bXWR1vmTpFyz7UmK1HKttB6uXmF8ag2uU1CmGkiG3ti7wxKE",
  "key2": "4o1yWymZgj4eChmBrGZgESGqYorWisAYQ7Mx9HJDAMV1jUJ83c6Bj7iZnAtxBjGUgjgCEk37zfAL5HqVLQ3aFhT6",
  "key3": "4xLkQcrzyLFvmtGEsxH2MYeWa6ZktCtFW445m33vfhK3iceZAS44Fuzxrjj5TuGwhVupue8oApuVyLxfMBNuhHKJ",
  "key4": "2nusRD6ecKAEFYa7jRcLyt18M8YqxgErRXpJ1H8QE6fKXd7RwCp5Ef5J2xnTuP6DiiMFXy2geo92a4zwEjwWffvo",
  "key5": "5dYts75s7FvqLB6iwMPY4QdrDHfGYQxG5X1kwS6YtoVikrRicJwynLtCmyfvcuhc3cUbAKBQ54QimwrX59Y3q2UF",
  "key6": "s1nNh4C5p7REzBUEvPLZ8Wp8DGs4AuSZN2EkVau8s19DXeUqCQJYBSpUarw2Uxjt6Z54dkr3KPP2opTXX53K2ab",
  "key7": "64GAji9S8CveQNAiJazuqYXqH7brTGm8VWpWhZgN8oELJ2Thwk9Jw5hCqMB8ksPWWg6pvQBtnsXK4oVfZgTJPDda",
  "key8": "KcmV5WYuVFy93g3TFwZwHep7jhs2Sc2153u2pgYHJiwDTj44Te1zAWmKupSBSZFGBFwaHYwQF2U2boKfA2HVU1S",
  "key9": "9C4Cs2bKc5LQc9YXVVq4JijxhULf2oCzySa4xtkNJrEiEiPnsMMsCNC6NkAGsWf3FaG5jZhPJ4srSv34RjKFvGP",
  "key10": "2CfQxxbTXFFvKH17utFRkJ2fGKrTdS4ct1wUArCo9foS7dBXKhMYRsStLDGRUEyZ1Dcg5aRZXDsGGV9zAanDS5vF",
  "key11": "4Eu8bJWHWn5XPV7eGkoyMbPhnPb6zHtoAbxfpUzSYnj4k85szdbjSVjHsZDKGKLfgT2DT2M9PFvPQtLw958C6dLq",
  "key12": "vx9yW4keNnaakngsHuMHvy4smC7CE9thALFJCzcwtozAdTCSpMsQwy7byET19eBEXiydHCgyjQDgZp6L8sugjaC",
  "key13": "5sQ2TeRJn8HVDMyC88kqTCv3sr87h8riui2WoxNX19K7h4vGwA9q435jp3sccqtdBRs1wZ5MjMGc4Wf87ABrYLva",
  "key14": "3Kpzi7PfRptnZ17YESAw99RF2ird3SgxxhG7mDhDrVG3827vi1WAmpLV1rhAvyNhvpFQcr5ScbKG5tbTqeudjTo2",
  "key15": "3btNNH1zYnmVEThKHBmB8pzh7vJsq2Ch2x5JGW42Jt5Xg7RFAwqAXZLZLoiWxzwyZDBYKyBY38MJJ9gKcETrt1Ey",
  "key16": "2F21aHqsQARZYSgvwRggJxpToHKTkRHLLE7xRSB2jYRcj7h9AjSuAi8D59nFGJRRo3N5C1XxWRcAY9JC5uwsdvyw",
  "key17": "2VZpNknHhBHpvxd7cTPeFBknjfGqUBE1Zetbc2US5uWFGoZncz6UzPcoT6eDx4MSW7LdeSaT9aENfxNyah1BGduq",
  "key18": "3v3vsKq9m4qmE8aSGcFQvzcYySVTUKhAssoqYpwDW5iBeCqqM7PXmiGvJ5cZ57CD8xqHRs8MbMw11UodqX3i8Cbb",
  "key19": "4uWScFe2vPoniuLJnb7VcdyLV4MwZzGxR9FMrqGTezptWvUS4XSNFdXbn7oJD1KhPsHf8gqr53q3wR9Rj4duUeKt",
  "key20": "5RH5n2zbdEqrdSMs35hVSdcFYL6WKJVfH8R5t34UDnhxXL2MjVA2nDqQVxcKs93WVA79Yz6d1tizU8SKMQKviiCn",
  "key21": "2vBWAjuSzsr4dmG34SsthVk517652wBu9gusHM3Db6rbPucFDW7AXA7dMdnry9QyNvVtK2eBZ2EC5EyFi9G1ZgKo",
  "key22": "3TGFMJR62FUoWNiwA73JPP9P126NioENayUnMjafgJwnPtZn2CJF7NXijttUXfn8pHGcCh9oyEUgkWwzSw5sarxb",
  "key23": "2Ba9wWMGZYg6b4Baxt6oK4ryS5fcC8pS2AYfyn5oqMKkJKGVFR2iaTHSdPXi188km7YqBvCmaET3kSmErQtZ7D6X",
  "key24": "3aV8AzHRZfcEdDh2T1r2ckRwpB8K5g5dpyLdiEtNkKGynrL3ijs9fDvdB7ZVM6XMJejauW4ZUdQEcCFCBD1iK8MG",
  "key25": "2tbmPwzvVSbCdcnQUDY81cU3KNhkuFJdGz1cxFUsK2F4Tw6mkrzhTZJSBoHNmxXPnEA53X3V1CgJXRZoyJfR2eYz",
  "key26": "63uKAFQEyFFTTJJ2a9b69rHKfF9PubxGa9QRYstX2MXhJ8QjFy8LbNyr2JNkYjXiiR8CLmZkYm2xV7BZEM1aGWNL",
  "key27": "4Le2pjSQsnEK78X3U3rkUKPGcESi1i4bWJkY3n1neH8znvVZzSHJUwQDJ5BbeqckwbU7rCt4LNvrVbnZvLDt1UgD",
  "key28": "5Lef3CBiwjER2DsaXh5C188bij3ZUnP5SDFfsT7ZPcqG56om6B4DbkWSdFdhMShaUu3sornu6Qyn1tQnBqRGsii5",
  "key29": "3DVNCv5NFDXnsy7dwWNQmXq7eSxjfxhnXcs6m6nuEhAJbZLhqdRyCDgq6qkcrJKvRNeAYRcoAqg9PTnJLqUJ3cDQ",
  "key30": "2SvbtmsYdBFvXPAasKmGLqRuCG3wjg1cKjrn7sWWh8LZB6DzY9e7Jsoue4eV6fK71Tq5JjWhBNCURkcUh1EQh9wH",
  "key31": "2A3XsVm4m98n4NvWcYMd7watGfmwNcPu5JMW7Xn5WG3AZCNBbFubLyG4s8Wb2bgYAfVnPXyA56hNKb9q3bvSFFcv",
  "key32": "624PjbvZEi45fEWgi3PYZajBsPL2c56AYmFKBo1osbDp9dNYErTsFbU44Dns9iAZACtM9z3vAmaEovLizGmSbf8T",
  "key33": "3BHNNqmxPM5c7BsJG3Yt9WF4e471vUhm5xU2mfmydoSgGbEkY32w8CMpWMUWXBKkD2cBdeVzSbeZhQDoMm47fimB"
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
