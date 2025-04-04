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
    "4QUsvmrpsrAoAArtodVT8FioEwcYobrQNcYdcq1vguT5bJwU8jceH56M8VbzZbk1jMnNKYowEcNRfJmP1y82DuBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1ut3zzcGK8LhVfDTpmNLYV3S9uq5Pk5S6rYEitiJHgr9qRhaHnuLG1iKkxmRYCVjXuhNqsDL5UBV1gmDYQfaJj",
  "key1": "4LDbKJLnDVLBmvGEd7MF69Yvnouy4exzGoErR52q5LSJLAWY2gn3XLNe8LMUvHMYSh2KNEJSLDkjt1xQLqaueB3F",
  "key2": "2tubovPCW4C4wP8brZX2gMWiJXzkM9YQKsJVvYdaiVsuJy2JydeMV5Uy64zsgt2mL6NqpuSG6PSd3fRsLYZhSg5V",
  "key3": "JDireZ9DnVoBVXUf45UxE2puTEwBbzFTVEQt381qJYbRorrZVEyjQ1ZLP1fuM9sskhMbvuy3hZgN2aJPw8L3RTs",
  "key4": "zWvmbxcCn1aYm1eP215JRLQ5SnvngYLtgWxtHBcXm85REWcURFjuFKxYpqYswmTT2Yd1r5bg6Ge8K5HkQVSK9Bz",
  "key5": "3JEGBC1tFomP5fQZNPZMA1zw8Kc7EhUBebHazRsLTWhXazaajQPsrYNh7cXEUPyr4QJQJB585BxkjibxeSwQH1DL",
  "key6": "5p8jCTGtsGC1A75VYrGVTVcX37KJZWnpAHtg3FPiqeSB3dieGfFHtu3oKy6nBE3GPHnAYjmQU5eFXs2xs5kx6rrZ",
  "key7": "ibA4fMAj8tthNjkk9afc48MQg61XN3rdjP9c3uJbB3cG5jZf3qf8z5ir3muBzdeYmaS5XqYmcd8bYMjAVEpWzu5",
  "key8": "453ERg3nHj5XJAS8KxAmN7Zd13YvEhGioZxtn7AvJ6Ly8Q2rMLxtUHBLvmeqQhhbgP8jtGhy29dvREG6txSjo61N",
  "key9": "4vpLRRjjKnB5GFL4aYccf2PMinhtEChLqYf55X4AebztKcFsKRGnDfxwze42xHttXrAZhTRjMewViZ5HhLx7dCwa",
  "key10": "4GeDkn3bbz1yxXzTqkHFwKFfVu98gFJc41PHd4SQLa7Ged2cNcdhufkv2qjk47KfKYRuekFDPaH1HFgZT5rpBjsw",
  "key11": "3KJhYY5RsfkD9fKTQDAg9jF4NmCNmviBtYzkM173r2D75Gk3pHad9TMSiurh8NQdDEqXHc8Z5j5o98aFcjFD9oyc",
  "key12": "4v85MCFw8mDCxdPnv4brQG7YVH38Z66eqzyQZyypiZwQKcfs6rxkjzjhwj9i5EwFnJjr1qxE9t5621BjVxrBuFNv",
  "key13": "JgWRYuThY7EsRSraNXLVQFugVzSz6GLEaXBZBnh1cU8UAi8AP7BBCcz1kbL5xemhEyQBHJLbkMUm8EsiCcGZ36b",
  "key14": "fsKUeMhZZyZh3KyhXttCqWYSvnJdx6Jp4dSkFTGV6RLGS3Y4i6jEBxmvTZiwQDDhtDQiSFe21J24YVpCUnwdx4F",
  "key15": "45Fb1nqpt6Ap7CeNor3FUcin2Dgkp4GRy2y681i9wax8KWchySxkK9fASihqj87Nn5UPDFroz5M3TDm6nr1aoAEh",
  "key16": "4qNwjMiuqxhA1u8TbEa3GfBjprFFDfc4FfpVHRM7ExjhQPDm9s44EmkCL8K7jdCwVRZHpsWQP42mipZBbNjaj1QL",
  "key17": "5F27DFvzGEiqG9JfNuKgAzA2fMy325k9NF9pUe4qwRwFksZcvAbg6GwrBe7QzADsoj4auFfRq6DR4uchVsrg1XfW",
  "key18": "2LN2SV5N46sJqwY23L5p5xCYcZ32Eh1Y4pfM4vbSjwkAXcxXSuLJ8Ld18T4xzgkg3eQPm3TVuzaBTBVzVZXoiWrE",
  "key19": "5KRSbQuPEBG2gX2iGezu4nrvPEbWxG95maGnawXikfNbLLdTYzAxGDQvb6iAM9FTAUbA2ALA1H9Lbj276HJ6sxG6",
  "key20": "2nnb2qX8Kp9Q9ikQ6jwxhyb61Y1yuETuaYkKokaBGH9AAtWhnQXwGiNpghk8yuKCCy7YKyfNGYs38f6KzNRL95nx",
  "key21": "4AvFMCqGMV8aCd1YDpUsRhNJpgFM6zf9bXKH6CSXtf44njfyMoZRw9RWJnZieo4U5A6yu5AcpiQnEXG8BWYsVBUv",
  "key22": "4tUSHf6sQeaf4foK9doRbuvjDfKg2u5f3QmtRbm6iWhuNwaX7e5X3osWtmu9wvFgAh32p9Bod3aeSv1hekwq146a",
  "key23": "4ETwhhJjSboSjQV4VxKBokDkaxp3GpY7pZwnTH2khntVtTghZeqGQwAHHx3GHqk1JZRCyQSwTWFRxBatyJmwVCSs",
  "key24": "3qFwofshXdRHP9Eb5ahZD3rhFdid5C5ZiZErAVcZhhL8yUx2RWzXXy2XEwYu9wagomZxVx7DrJWD9868N2zScSaN",
  "key25": "59G2ed9edP35BXhLpz9KYqH5gkv3Au3iPJMpBmbiW8v1aQKYJVH3FS2PQtB7nXedU9MTkmpCbfqRfRSD7qf4afJ9",
  "key26": "37hNmnaD4dRruQ8drWtycQkMYjam8toookbPN1NQzrh3C4XWUoE9AX2DfcBmy2nQeSrB3s91PXAn76e1VxT9sFxh",
  "key27": "5yH2ynvqXigG46bdoRhYZxfFxLebW8ymhWxd3otJeHVMeK3rBfRB2DnDP1AF6DioiSrtPPPcRyHRrkzFyyHPuNcB",
  "key28": "4XjjeBCFe9jycr7SpxhjvngA8fd9BWybfaur9QHjRmmPSJNMNzhmLm44Hikg6yrtEKCafX4XU1g9ANEnNJZeNQN5",
  "key29": "3WQcivVhBuTiXGLVmaF8ipPPsqP2ZVxrbSuX2wXLT9noRnzo5csWWU9815nRC3Ti8vEyTKkJF2ztWrojuTC7K4nF",
  "key30": "4Vo3M8Vwu2MBnhbdmxqudm9s9rsP5ahzex44w69ahApo5KSBmd4c8wPU299t3pQyELwa86b4pXfefCDP5mi9Rw2f",
  "key31": "34uNgefg19n3ajocwihayCDteDAyL5dHoo8XiHXjisfouErjgHiHcWjJ8mi4HkyqAGhCEW7wP7ACHg2wbE4sP1Bo",
  "key32": "43TbWpFEuWfWidCfcMjYwiBxgRvGAAMNuDe1G3Ror3kf2hM73cmbioRvW4H3k3Ryugm7m81QweFwvvHn8Zz2dXms"
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
