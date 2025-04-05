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
    "2g1ZVoXHa9SRXzdhaczDP9PGoqExokH6JvqStFTZN9i3Nfxp2nbCB5PnBZENCh84RUKAmFv1i79cQiPioUdxaRZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npmcnb4o4yn35h91HNMu4c1Bhi4Y8X9q78XhzoQQn41nWcTkPmMrzvzx9toT8F5G4AbrRvZQBA3dYAMbPF49SpT",
  "key1": "2qYBAi4hbFnwF6gwPZRrh7dMrzK8ATy7m9N5UtN1w3MAzdvr9LiJdG7rA4haDFVEx4z9i13hCLfrUN3FX8czB43t",
  "key2": "2wHxayAHAN66eL319TnFyi7EJ2RQndQ1wwFZU4BoXuDfB7eeaxcMVTaEkScJuvnSgqrVPKL5mgg6hWb5wzM8rHZ6",
  "key3": "2CGGfYDUGsqi8gT7Ba52ifAQQwd9h2Z1JHE8avAuiuUTmNTAXhkq3ViBqcPBvuXtETvBfvqDKSbRTxHTzaYFpQDN",
  "key4": "mSuapmCYAX5usYxdtpbn4ECrcfDspLeq4BwT5gTvXHQAFDFNKsxokZbkDXhMiT4ZS9czU564VeAF4k17R5vFgVz",
  "key5": "3VU9ZLsdk3Ff5zAaCbU6mK8qg7pAACwLbiwcQrrK3LhmVR6PJgU6QqtVT8QB2KogY45RTeDGnirEMrVCssCfAYzs",
  "key6": "4hW1SZ8bnenkLnummb5rAWmzeKkBjWJmGd5ruCNyQ8hiMuFNSxLZgjRCBJDNKgBcqQmmXddwctxN534QLB1bRtzm",
  "key7": "4wgwaqrkBoceCwZcoLJrsj86ETJSw3ktKRLpLK5oKgsL8XgejbviQ3J9k8M4w3JrEV2i4dCc3dtMN4r49CxrctzK",
  "key8": "4vWTKcYMYnQ5W5K7QKfDwZRGsvNRsavvFoURtQRTdv4fuAjWcra84MsT2pVVzBGMSQaChWCWUbxX5oYgSATevR4K",
  "key9": "48KC6nRw5iX8ewca75KL2i26Kwf35jzQKCSkVqDoSqqF8Apd9MmNU8KciXYkER6vg5KnE9kouF1SPBejW6cVrhVg",
  "key10": "326GyF3GobjhTv5UHWQQKsYkQu5kS75iJeG4mRRJAGHurMJ1Ld9rCHy7xUHsyYCjQ6RugngTEVoRgZvEZ1DfC8XW",
  "key11": "2kELjXoVJnBynGMEPyZQpq5xnXWwae1mRTfhZjYqawPr4tDYxtUQCdTnszhg5dPy7tkXyZKtZ2tQPyJyV1wMT1YV",
  "key12": "2MH8LTjpzSbwNdUxGcB7uSJtDkq6rHe9UHPtTtv2b6mHHUjzN66hYoNR3bvqo5AGTmMB5iRGx8RhEsjsP27TRmVg",
  "key13": "3w526KRHJuXrAyJ7LJ5CPNFaBhujkHjNWSGAMdQyun6JAYtaKCU8BFCBof6tfhaP6PvMM4MMdbYwY6vJhNW6zLSs",
  "key14": "cgFczX8uqmFNEzZZoGg7rcSCnXD7jF3PsBKTJePV8PHPQA5Ja5J5VcZd3d8jgjbWprxGk8YcwtvdjhC5yvitaGC",
  "key15": "4ouf2AoFLLPCWp8r2CakCcydrNujJ6P6SD7d3gK52e3KeMvzPZyZ1dKWJnGRhAcJ9anSsu3B3Xwf8uLY8aJ6yiFM",
  "key16": "4j5e1gSVS35WPh6BxozCFa1VS56eUkwgxMTf2oAiwsbQkJHsN4stDYHciMwsBVW4cmJwDw5GfMqhNfcsRUuzrH2Z",
  "key17": "QEVVgz4WgHJXbTDn6pJKn1YzZadU8SAkTQmDBDiVU6LmVYs696TWGXwV8C3aYJZGKWZrxTfG1xK4WyFf2ywLYnm",
  "key18": "37dXgtd5CmJV8GjatMHWopyZFypd5ftYug6PnZeBwzkqNvxvZ44dxHApe76BboLkjAu4dgTEvMLsbdefBojdberB",
  "key19": "5rwAeobQTy6v1oSTPvF9kcfSCcCPtaHt7K42jK3fzAN7cDWNiPGH8qaVZYW1RTtiLnoDwPVv2aiWGnhvMx2sqyuh",
  "key20": "ydm53oPEcYh5F8PQEfkYPBjgn91vEvGHo1ExRCe32LwFZJdb8WA2mvykmqQjQZ7xR1xBNvpH3zuApruJdgEW5Ud",
  "key21": "51n6Je2WgAUgJ5EhfbwK2iiLfqpgbQphv8rfo1QZvNvEgBfFK8GJUr9FxgW1AfvTLDK8tF57zpEQji8d8jJKN2pi",
  "key22": "31dQJKfBZoJtPFFjq58nVBftfAkymEy44gn8tneFmPoHt2Pzh7JnJMVzPaCG7w24Kb3iq1dvH6MFZRWKaXBTcJrs",
  "key23": "28uyuvugx1K5TveKUpRg87zFv1Pn2xUho37EPi1RBdr61X973b7feP5pkeZ78cP2pPYCb46AkVBNF2W7zzv8HXVb",
  "key24": "3xZ3Jmt9genWddKWz64AvVSNVKuSS9STkYo5kwGyb3RagiqKxKmrkT75TVUHdk9ZuunKeYqGTeu5zdXi4uHzMNXc",
  "key25": "3JdAwgaywRoDMhJ6LDQD6zEYDRpgC9udGtm2QS5xm3bkQa6JYFTA9tjB6gNuDu296936GA1sRvz2gPt1nxVBoAYh",
  "key26": "4dY2K5g9g3XSTG4vreKxigLGFEdrn5AWTAfn389mYagvhPcwDum7kyxitJEs6DmYVjGVZobf2xePvPcPGc6gD8WW",
  "key27": "M6PLrFCKsB1pnfG27n46E8nfGsiAvDrj4YapMQqwNpRUNjCFnpdrjiYrrxNPceQYVxpVLWXvrqjzSz2LKA1p3E1",
  "key28": "rTP641XwW3R88Y9mpSsQDkEXj5hkwutoGvE3t9Hi4b9FUuHQciuAeWa7nZW9fK6MStmtT9nLXj3QH6ouFYPq3Tv",
  "key29": "3RWqCPe9oaBAoHLVJToToUU9ukw5zDFq6RdBGtDBDXcTNqmCRhFQ4wg74iQo5m16QrWqEY6Lm64NS7vXbyeBRznZ",
  "key30": "46jYDFVx3gyZTvWTy8NhTzuenrKcB63Y7f4PURvYa96tVCyTxw3LqAsBGWt4HUqeda6VwBs1PCV716CJM3kvCTc9",
  "key31": "3XtEfFRHoWBqcfgVUZ7Li5BbCp6mKnCp7LB7fvyoFJFvqNB9oMH1Vj9rmzfbr423rpAzMxoX5FRiYWLNCGrBvLMJ",
  "key32": "3QYGdD9yexnRFENpDgRLvbDEQL51wuVZ85gNgoRSuRRWUjxD53EvfeHHCPfiHshP8KcFWGKxU6YFdz86e5jpZgM8",
  "key33": "4g4LBLkUXbYvDiTqPDPfUvwFV94Tv1CqY91ppkqPP39QS8mbFeSpdTcwZxBuPp4p4MbMoJWNZMk53nCHwyP3BtfU",
  "key34": "4mVQSUudou2m5zgVv8sNaJL6vtuXcXpyEREsBheHSBERgN4PQdzFocBeebQM6Yw8qP5sD1FGXAerCoDm5hbo17y",
  "key35": "27mfM1GU6HMy7Pg5RKPzLEwSCs9ewfdErzAkE5Wq9JXt5e7vFjbM86cvdZEYm4YKVpuoHg8EX3KR9DctpagKYF2P",
  "key36": "4brZrKcFPd4AibM8TtmHfCzSMLdSr1pbDsgebjHc8gzYi9LSygmZNrQFP4VZEjtzzKhJTq5oJDSuGNZtnf1bm2Ws",
  "key37": "561Np27eNSkw6mr2G74CWyvfMTSgm4QJkUxdsi4FRvPj8XjDPmTrk8EBVPM9U6uE7uLauxw9CuiMEVmkeqjykULK",
  "key38": "5wAbmRfSN8cnex4tjVAPUKiBvs9YBP391cAShfBmSFop5QiMUDdTFbRRqmgzPyByr7HgeNWWJ1ZDaSdScMJhPj9y",
  "key39": "5oFXKkNu3sb4T37XTkuuPkhu7QeyjyainJG82Ahe7Hop5uENysYL5H8u2PEWjksH1tiCYYH7vyUMDPZi5KLEtLU",
  "key40": "5c8ogvTpwNt3YkCRKXjyXaNMn8KGxHT7RHX6qF5EZsGWTcV2kQBYeQVs4DJNABfibHpqxfRv2B9erqBBJvsnUwXs",
  "key41": "u2n3A61J1pvzzap6g7qHihPah5B4HRhgLtdMrbE9aM7NeNiBDT3TuZ4GVRFwoosbmU3X3yXfTCo2LozxsHyoDLL",
  "key42": "372x4nJTh428Gc6C1iv3wdNQ7r6GVMA2H6SsfDnJ87VynTevjFb1EKbC9zQf8ncLqB3Tb1eF3fGLkr6BrLYuHZLR",
  "key43": "2wg7S6LG7ZUMZ53WBYiHUvt8c5oHwQwPjnA6hdntuRSmoVr8AdgppYNsfEVRA3crc7SW9NFvJhS8Ujuc6Gg99CSn"
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
