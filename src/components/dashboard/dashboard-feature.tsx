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
    "57XCTsvQ8xbNkMM7FSv1VYQX4ooeuU73DrNaJnjLx7Xr3cSeZHCGuoneP7YBrunqqZ4kdJnfjhgguQw8G9duALP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pyLFLe6Y5LF8CbC7jG9xfzX3p3sixkQLkXT2kYFQkjAfeMNyZokTrMbr1sByMmyGqTyTAWJPSnopazB3MvwEd1j",
  "key1": "52HAucMvRn1bozM1TvbshPYAyGVvxMim2y7mCB8cjE3fceXTRxCzb6pkzVzsdyyKDtmByUNUFDd2tMXVu1QLrAXr",
  "key2": "5fGgKgHHCVRBdKVuTJaL2ceJUkGFe88w2cbptuJTHHR2MbHeNXvpfT9AEu1AGWkog8iZhNVcTPbaDPBhKvFuK6kL",
  "key3": "5zsYcujpqjJydrhGL6rHxLEY5cdgrGbdDBC32CnT8dgP2gFtnGSXpXQUi9D2tTuQtE2GtJyahZj6QLypNhq5BTAc",
  "key4": "5DWp1Bac14dspg2jfjVy6nN77usuAuczR8Ths1VV3Roa2FBpeYGD9EWhrHqAEpwVpL6wADQxmMJFGWmNRvX6yTDL",
  "key5": "33wVh4hmox1Mk6N4UMvESo5uLSmKGc2Zz6ZPawMWaiJucH3Q7Fe8k716cLcimmNU3rgkZuQ9KBi5dFpcHrgL125n",
  "key6": "4RvvCGsjQ9H99GNQzCfGCc5ozz6RfkKaJLqhsTrQGWu4gTmGheTNjUrJnw5Myay7zaJZS3yPBb4YSjtVbuJd9Bkw",
  "key7": "5VDCrWjjBuheETxuGBvEFTX8NJvDfgUfP7J8WjRWs3ao3Ef78ksyAEZzsiWYmkAdj8PFYRZjKy8uRJrS9TJZsafe",
  "key8": "4Yh5CyQiLth8Ks4ZbpmuUgRe1u2SuzbWVikcPMcgyHxKJT5VtM8ydSR7BgLJfwe41jwqRvWaikxYGaGU6EsSmaZh",
  "key9": "2RKLn5uaMRP4HUJfgJ7L2ntA7sTMJC5JfFPMF7cPjo8BYToHv33xuVRMF3ALh8HK5uKuKhp5CCiNkfff6Dy7niqr",
  "key10": "3BxwocYraNQzARvjV1t5SRWiuvAbGDS4ja6XmBZdGjrYumCwY4315R2jJx4cmKWEjGARu6NyVqgsoR7h22hv2KcQ",
  "key11": "47xK7RAVtEnqB7UdRUViCyY7M9odMqyf8heawoi7972qZa4NSq8h6UrQ5VHdAREwwYeMNCXPUS7cNCNCbboQEFbU",
  "key12": "2U26RZPQvHprq8ugRBrEuwEEodEBQnYqxBF9BZAT15B6kpA3YVdFrMjEhz8XHELqYMTskHk4JdibD6vwmWM9jBDf",
  "key13": "2mHW6XbLDpCLn79HSYqXxRhRGvGbdCLvb9V2fhPmMNJtbVT6Ztdjt3xrw754zGD3AcCFbV8hG3o6xhVCXLXm8Saf",
  "key14": "2ca2ovyc15bHzavAxiXchCEXRytw4o1bo9GJ4DACS1KxK6CgXN7venZribeznW5hukKP1LaQAbVtKfUpDjvZRQTX",
  "key15": "33XiK1GaNUf65jc5LmzqmK7rJZSkrQY8YAXNnVt6zCpmJEk7eQX3VWSCMVGVkPb5QcT8k5TugghnP9aCWNYWYh5E",
  "key16": "65wka6ZXaYMwTfyuP3BSnvMugkuq6G2JraMAdUPETvpnp7wtjvFfPgttotDkWxuQ5bj1vjmDTN1xKAEMxjtikDiG",
  "key17": "X6h4psxNxUDSSLfd1QekXhmVETMU5PUqR8FGVgP4S2VqFasEWQ62691ZqoFnZW9tFCkyoFoWFbQdZk2AGPaeeyJ",
  "key18": "4jKnYwv8WmMuMBeawUMAKUSEy83E7nUwJUEgrnv69JMKYfRtmxrAoY5FtsVf1pG6judSEdEGE5BmJYSGqyxxGteS",
  "key19": "3FTiEqeNt2mtwkzjJwXryUmiWmY2HSmSSLwJ2qLRrnfE47ZdqWiWfmMKpf9HHc7VMR8aaKCd6VDMUHUP5xovQacX",
  "key20": "3A8hWZSAV5eKDnnJpS3xSMzUgdoq19M78WqFwz8cCpdYtZtm4wnRnTRLKNF9D3nXs1wuJVN24pMddEaTEs3nvXHk",
  "key21": "2VPs7ip4DRVTey9GuvYvaG6Hjwg87jcWLL7dWxStdtnrwpgSgbQ2kS66EJkdZgcmHnEZWAANT9pLEPig1vE2cda2",
  "key22": "3AkSef47hcaBjZCj5jM9oNkk5CcHU9NmBeaAYyATgh9gePFSciboYXzFmCMdvJD3S46NdTUFNBMADAuWWYa4vhAu",
  "key23": "5xXtT5JdizrHfvDvK7CsduPsZ9oyAjANMWiWNgntAsWoAMsjfRisaJ4kcttFo1EKsvLnprNbyrbfGbPzRCqJZ2YY",
  "key24": "4kLxmDPRfEwdRwzKgJNqh1t2gdwv3PgMBMtKcdpncRfYWax6TdiCSWEFdmr7obJL8NUqpshmgRrEN3ZChyYMTsed",
  "key25": "5WRXw3BM7CVf9d4ZSgQDiJzGCdjhTiqxuTGAApmxKGdfwQukg1AWdE11hcA8BhUbgktXn7KrwEsfCFm22nNFZ7pp",
  "key26": "563NnUTZBm2osfQeV7wSbTuZm6YT2HcKEkVAzFW7W4qMyVbC2ZNsGzZHMzP19zugem2uofJxxkviaLbxmpEFYKSS",
  "key27": "2dkZdxtCJ3h465aAg6r9L7uefkW7TFjce7BB4EzGgZdfWyj2WrH1TgWXLZRzBPDjC43H1xG5KNX3H6hGeMdjPJq5",
  "key28": "3CD9vcN1bpZsQv9Ldaxkd5hLKMCjjUCjuTGky1XCF5AVz9UrHLVizUK1FnqVVLeVShHRRcuaWF5Cca2SGwfn2oMY",
  "key29": "47HBxUCbJPQibrfaWkhAk5FwQvLh2Ny44vQukUZ5XLtMHkpju1LjA5PxRCWFMZYWQYcYzhbzqrSQRqswfC5Fis1k",
  "key30": "xF3e7TpqUyeYSeSYKTbNiN6uBhE3ZYkfqVMvkAHrqVURVbLUkYLq46Wb6NquepK3UqiAKcXVwxMUksAR8cvLRoM",
  "key31": "53dJZJV7C7SuPj88rQ72sCLz4VvKcdneuReHFqK1opbkffDZ3yz5WSdZpkhvS7sNzCuHrNAUv5AjB1g6YFUTXDVS",
  "key32": "4mzYWSvRWt4u8qos2n2ReDFwMh7a3BFNZjzPHB6zKQPUySDdWWjjDVxvrV288MBAeysLKb5oDtr5N93ktYisbU5L",
  "key33": "645boy7z7CVbiP2cmBJj98d1n6wcMiCRN3r1ceNQ8LEJcmEjMWsWFKYhmPssjT9onh6KzRQxTDKPC6UCVoWsyPLw",
  "key34": "p6wPvo1NqqRJShKuC9N5aoYWwVbWcQLtcyH7m6Re7Yx4VTuKgq7WfPgnEJu155QcPrDAdKPftAgjaXkX3KRWwjq",
  "key35": "2EzvBvEgxZG3XdYsQ2zpvtqyouTDg4WriysGSRe8ipV84dVLrrRzvboEQkrmqBgzYp3b2dvftQxgCtLUS8ANCxCm",
  "key36": "5h6AEAdngiTuXHsjSExcosZ1VoLogjAuVdbPPedpLLRCiaDWvXp4ses8JYLcvzF8QgrDYKuy8WTKdv3KT7rpBFjH",
  "key37": "4vQN3j7SxoaWPUAUBdQw7Bequkwb22DpYTgNAn2ZPk5ieTgjJi6g7Df256ffPX3rR1b2AjvPyjfc82QEAVi4xNwg",
  "key38": "S2dZCQ6VJ8no5NQhWWT58F5PvLtNFzjNfD27rVF6MDR1dFpjbheBjqmHGvsiBGX5iTmqsx3KWajXhUHFf2xZSJq",
  "key39": "2k3anX5mSrgTxyiAFX5bJSuRF5m6g4YpJsuRZ1xpzgXyt2d51bPtg3e5Suf2yEQi5cvKUXvCqv4kTPdUf67HZKyG"
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
