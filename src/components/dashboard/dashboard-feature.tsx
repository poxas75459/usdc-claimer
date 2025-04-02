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
    "2VpiwBb92vDPjFLM3HMquSk6GJ4UDz8zV2octkxpL9bd1s4xc8fcnGivAcvkK6mEeqZQjRg4xSvJtSDefXVEiWwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnJzg5WhFqPCW8T8nkd1h6KJqeRMWkhSYUPXXXRATktxVAahpKyudbrF3Mm1p1BJv9DW58hkSuLY87DHNkGEAxd",
  "key1": "5VTyL5yZsnaioB3ryYXZhDUH6yBuPGbA5jHi3Rsyg1YEGk28mu1ZwA5aTjr2e8uNHxUgVAst8gjJ2Q357vWKNU4B",
  "key2": "5G3pXNGsXtzUqRejNPzQvWRYP8XP8t8RejWKJjnvbwT5oJSppYBJyEnwMWFhzHprBN6kqQo1waM8cyuNXiKEfDqh",
  "key3": "49gLpd2fs1h2jjj7A1f1oUSJetm9qqmd9Gqe4KfUABr2RLkydg2f8BRiG9gZ2nA8qi7LDvxTGPrzg2X9DyuXMQwx",
  "key4": "3dsDbtpRU7fL2uyhSgx1PrxsbuSnyGtuGrNKbiHtktjRjeavvFEK3HcfkSMP4GqbZRy7FuUA2nRKNtiwfPLgPQMr",
  "key5": "5LX1vCtSYjTQQ5HS3fcFhtKsVTZUUTJQCZvpFR752kfncqtHjh3S51DYR9VDnvfF6cwiF9fjDoHGjgZqNYmHSVb",
  "key6": "2TwVtQ6WWzdx4AjjJDXzsQhPXZamMppU78eYDKt7DJGifDkWNgsTGWUrikRca2qFwzaykYnfV9bqjXm8Ca63MKvj",
  "key7": "4PKC4toK5bKzWw2z6j77LiMUegmyNLAQLrtvLT8n8UPE5mv6tH4AR89axFwAjLwNJM1iLrdizNrMHg39t7qeWrjS",
  "key8": "4EAARgJ5QEyCq1GZTjNffstKwQuy5Eqq3Budi1GJaZH2aerfiDHoPBSiSgXbo5N9SaaenVYU4jChemETJmWwHZzn",
  "key9": "2CG9dZZRiKZ3yo97m5MviAaFMzj6BwM7o4VrZXmUpi9hs2PDwss9vcWa9kQxv6KrR6QY8ikrBJQWYPukCQYr5eBa",
  "key10": "5guKtANg8igQPd6nvqR8Cj58suCHgfz844JhWemst27dzu7usYABU3tnPQcrZk8F7XkP94iP8EtuX9HDoUJxtFH9",
  "key11": "3W7N6xycX6PoZJUzGQ3K8UCeeB8VruDVzDADUXbiSy8YETm5tx29iDGdATLndAUWaG8n3nQnahV1uaAnYZLDvMjB",
  "key12": "3QrM64Yzo3Qtq8cGLeeMhuw8raNZVgTttNVqcCDYAQyo71ZKQeHHHbcSArC8J1Ujb2fEJVdme9bzQV2woTfjHtiF",
  "key13": "XLk5iW4zzVWyoxXk6W5KezvUcVurFKr9NkTq18vYQXzuvw5EBDFM6CgKcti1fF2RwK42zycwtu6JEuTyV3oMwFu",
  "key14": "45ToFgggekZybDscpTuNW7cMYEJHgaCuRTh83SD5AFFRxk15osvwF42wMWEvUhCTKYAqoE8JbYtay9vCgaJZAsWr",
  "key15": "44GNV2vX4fuMzjcQQR8qViWoYmwCDFfEwX3vuNsAJ9S8rSDTa4bFg5jHzi6NLbd63xisEbDAqcLwoU16JEXNyYWR",
  "key16": "5koaLbtsQc5M8LXEBtoK5LSXhceN2P6rCYmmPjA6jAQC6exTx5x3UsYmUqjEfXEdYjKm3Qgnx75pzHjHTrufwM6y",
  "key17": "37xeC1uh4AEXPHsBzzGqDJFTsmr9e5QS7HRmbHdxCNBmu5ujyXxXfDbLjnXjXjiDeBWHpUe2Wt3DVyFzrZkzaceV",
  "key18": "4hqb81KgeVRDaNGgFkvzXhjvjnGKzUuNLtR3Gyk6MKYJdaYjg5kRchn8Jp1Ycu4dTk6H3XYaggDxRkHSNgdGJri",
  "key19": "HWcKnfScBQ7mhN8oS7f2Q7psqR34UndwP6a1qTXmA4A2GasKbvZ6entipPSvF5YK6cZHfCSTe2hq6KGFT9MZmsi",
  "key20": "4NK6Fbn7Yyuu8c4ugExCCN86EuwjkgqfpWqeUyVyxfpHdQ37fonMNipWL2DT2gAAzfaXSHaJbf535aVaV838DVk",
  "key21": "3nrZCxZCF1fU9rSZSzQrKdro8KbWgqb46hPR8Zw8pqWgj6aFQkMeajsvzpNx8w5Vbsh86TPGBQox8HzuodaSyLXK",
  "key22": "2nBWZvxfu4d2AJcMmFUJ699uPi74G1ZymGAX98kX5PL1odJknFkQaX6Yz7TfZCUcJWR37DjcJNAy3zFg9VCErDVj",
  "key23": "3xk5idEZoPuyU2JqnXaFdhUyis2PzJEcA9CQNC4Lqx2ywBZEbN7T1ViC26NKybgeQD4ksUCEcjf7uQP1BfWefesD",
  "key24": "3rmhAFeq8mpRuXhX8Zamumt9fWyTVRkXDENhmPAucF8LX5WZ9p129PeX22NuV4ohM9MU4DWeWwutLLDLEGFmZWo8",
  "key25": "33Ro1MdCK78xsRnfvfR72187zhyjNh1syFoP6389RQzcmY5fmz4QrvbxzqcbrsHtgMDFpxhumM1UVkk2QA6UJQH8",
  "key26": "4zrgXwhgNpZvHhhnpZFe8vqHkw8vLjpwLJZhybWhstTMnf5bAP7ZJvo8CykxMfKGDDmc82bKKTeCKu1ySKXMf7uq",
  "key27": "eJ9coFAkbAtJDHAzDte1TjRwVGCHvan2zuHDgYZgnCd82wkjj9obMkgo9K17fwVya1r283jDyWwGPtK8frQNzDD",
  "key28": "WSwp9QYv96Ar6NARyyJBp6NQU5imrxbJzo9aDJnuMtFnybpLtd8WeHPdiqAYsN3yx12yzoSePGjLh1yQY3y5w81",
  "key29": "5uxKERqxzkT6mBNXCGA8ZH1APoZA7TDRTGkPFkwr4DauAsLnhy5cQo9XS4bC4r8PDuatzCtvJQ3x47cWGWHGnN5f",
  "key30": "3uHw5FstD4EFJhmnF13BBQyze39dgHz4HaQYGkryobuCzEkNUyznhrdspZ2vjhczkYYrQQ7TmLSyAgZW3h5aak8d",
  "key31": "4iwEiUii19WzWjowrYBZep536K93oYgGRyE45EcRDtbYeRgAFLM3i29VFpiT2xBYpSDi4fuYZF4bRiimE8BYGxau",
  "key32": "55mWnu5s6EfSJKrKaqgieUTzv8UFFyDux6fGW4yHegjmDt9EpvKYKfJvkTVmKj2uQ4p8rzqRCAAdwhsoKeS1vg2f"
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
