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
    "54Fb6NzLdnF4NNhBMFrmyQ2RqrHHoKGb6AJ6zTudJ8NUwe2HgEdd7ALifhWhEH4Dv9z898dq6xqWLFMLGPSmTfob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SGUu8AzvK2oYQmSC54dwosrs48X1MVZijrxpjZ9yDxuXW4ffSju57M2rwW5bHUr8wasABVQj3RhNxYLUHMcvx3",
  "key1": "3jRe8C3vtJSKYQBH39wgGK8Wk3DubSvv5T3VHw9gj491qU9uSgaX479DdsqABUEgmMUujABDw7D9KXEr7mpUkdRW",
  "key2": "pNz97JJRxMUn5js1hR1BhpbfX7i12CopZdzcm3NqAMjtpcWcXJRwDtKrDyjVA2gXHBS2s4tkHAMoWKYq1xeXzrN",
  "key3": "3qMccfVLHaT4tnVpE3Hnt8tL92FuXLDYyUghEd3Jk7TfWNCNxL5QGW8XXmS1oDUH63N5HLA5LTpmHArjeH3Km8Ws",
  "key4": "36e6iE7Rh7FB3L4oj26FKzZRx8gcCXXnUVg6uu1TPvH4cJZ3wduFgTkphoiRrAQQ4Pw6S4gC3EYM5FinENhLMWun",
  "key5": "61YdP6ccGWwDKp6spWHTUQLALVrpPgtVT2nWaQCKpGs2ijhdq3Jjsan1RJnr4wS3PfxCBbRgP3crJvdYF1NJ6RLH",
  "key6": "5kWicRVs4p3kgV2wVeNYytiaPjbm4DGL36X6WDb9ruPWvg3yPjoQB6xeaHUSxc5DatjZFnUjpoCqp9xu8Qg7NmL1",
  "key7": "3SVCn6RYhjgdrqGvsp8vuTzFE1Vtp2XRABxWb4cirzeBeodLBXrqYNVSNKJGnR7eFtBc1R1omFTeQxXVZgWSyNTT",
  "key8": "3PKevPW4GaxRR3QuaAVnMqJGdtJDHzxrKGvD8ydKj6qAefky3tLJ81HBW6C62Serw1SqWczbjZwY584kbKTuLwhc",
  "key9": "PDtHZrQEETuZBybXx4Dzf5hrvuXzrzXkAZchS947KgzM51vb7tuAXUgg9qShFwLzfYsztCVo4mkMyYx7WNHjcCQ",
  "key10": "5Nu92iYvLBdbNabbFFtK3QgyZVSeBodaEFDcThdbunZNWfp44nCgU1CXtnhSksgHQAJKo8z1M6hcATL6oWAsLyCm",
  "key11": "iZbBs5vum5ie3tT1C5LpMuLdaTZdLKvkhKYg77ZjrNtdH2K9eSEEj3D3yvatstkC88DAuXivSYVp6mzx1R343Qh",
  "key12": "2wgbH3Y1FMyB95ciukQ56eeFrT8mA45P73iUs9ttm31S87Asq8Z9uD93HKjFJ9rTNzL58tKZ1nRRT5R2fnJGgfLJ",
  "key13": "3KLbqVbp5ScV7gdaY1pK2tuTgCnQtrqgvYYKe9YiUdqZAH4LsJbJSRcKNYyLExyY4b4HCfXkTUcz6rFzQCTSxrYG",
  "key14": "3Pca7qWdz4atTXTb76nRLksChUTNJok5YB4cYM2u8qdgEVNkegffnn4J8ZipURaQZ5jwTXh1vTSLrhTDgSRvKJFq",
  "key15": "5UmUfrm7koRGmp8e26jERaokbZTqUJ9anmdSFiz8m1wKiZmE78Dv9E5eQjBxSXW1NVsf4GNgpZa7mtWGUVEXoPsq",
  "key16": "2rANLgoBkfqMWTPAaCZkYyNyc2VmJvmV16RWNfaPLg1LNRZHCnFPujeQiitQvyNahpxmwrnaJFgsVtWmkogr5Yf9",
  "key17": "gfvTuMfwvhY3KDLHMgGcoiNUAHyjVK6j5f7BQHLRZNRoV9J2a3Yh2Ye1fqpG8FRLtcGER2TD1q6SPwhwvEZ63NE",
  "key18": "5thpEAPL89WxeawmdkVB4EypQdq3yA6vZ8GZ9tFQU97iHcLKsW788qbMLjgwnbcHGNpsLYNvdsGFF7HAqdknCFTx",
  "key19": "425jVnjtah25vzT4z8vprgRk5kQwAifypNX4h8uBRA4kyq8EsSkZst6YoNHjfvkVGjCCHwK8oHdryHiWwCqMPC3R",
  "key20": "2Aa34P3smokjojzPoHZGkjtLDXzehSFZPrh33s5RCgwHrALThBwougxrrAiJghgPurJvdusCu2tGbDBE6EzvypQT",
  "key21": "3EoYtvPmQgUpZnjUmpgTDJJpyHZxS4GUb5tuetxuYwn8umH2szvhNir4f4iNPcmDzTxVahPW1o5mgwVtKWWNAZWk",
  "key22": "6481etZV2KpXSMYip3Fcur7zstwhUxTdtVh2trBagpQc99frsmHvQjrG1zCdjN14Jm9bc7zg3FZRQJBrfvYEaJca",
  "key23": "aycHWSShMtpmEF2dngm1FpbS1E6MRNNYbC29uRkQWBjA35uCDACFGPaM49Lv5injYLn4GbbC6RKWkLC5p5k2Jhg",
  "key24": "4PeLFE5uass8P5gimmfktvxANX1sRvcJ7oE7MuQE4xvKyoTTSa27HyBHv8VdTFy6fRohjFZCo3iN5bhkrJQ9qyjF",
  "key25": "5sEu5HxyMR7kduJesc618xLFhn9VnjUR1YvmbxNCECi9H6UWvRtHokR8Yrb4rUV2fSBdwmzHvVDr2kL9upBaKi8j",
  "key26": "33RW9H5TiByeZ7wKgvyCHq3fRf5R987dh3oq8pSqWacVFRz635fXiEgNdq7hQfF7ymsmNwhg2aGzu6gqw5GDeFQ2",
  "key27": "2DyMD9sEPtNnrKrh8bonbMT81NgFDtW2sFjoXzH2VtjQ5kigwXxKFWjwZccHiyzyUsYaZiehHr2ZRi7J6poZqt3W",
  "key28": "4dwbAvmhDtbfYSEqgW2EjMbwm5Uy756op4FFTqrXxkAAH1Gg6HYA6PvzEG4stfB8DCCZ29tpVDFaiwnxsdB7sufa",
  "key29": "4ark9vZddk1DbxFNxKSCRVtoyych11kmvscC4e9EJPpoKvc8CVLuJrMz7BZWmwanzZUfybXp64zW8LVJryNWw7QP",
  "key30": "2cwywJ7x6rfkvfFKb66M5vzVyqX5iV6LmV99jwnDRpmPXb2rURQCKDPg6zi3f2K7GiKR7kRZPhqKvPvh3npgE7Yo",
  "key31": "4M1kfXyLiDcSYCDZ7LvVDbamADo98mTy7y1oppD7hNu2ATHbvW2PBKMyXeH6K2KLX28LvGRCtEGo87qXedMxtafQ",
  "key32": "4Pep1wfTZqePpm5tyH2R3bXJ1pU3gmUTSLF2Uf3EzzFm9RsbeVbdQS2BEWeWdnzjLa3F3vVmnBo9ZSzhTxM1xajY",
  "key33": "5cqHmmLYAXfsjF6fuxGisSeFJBaQeRRmwCgPB7KTUgmM7tmGTsQdsYuc4mNiBUwuuMU7QvsK297XqBiPEtKsJair",
  "key34": "3pmiAiFw48tcGX6adaP8UjxkfX8NJJ9uQ7sugEXuQY6g8YytwTT7A54KU4uRNPvaVGapKjaeY9hvZxbMmmppmixA",
  "key35": "5hj7i3CrVsM38TX7Wn5kxJCu1hiDzEJsPoBG7mjGX2cc41YH7z7vTWPJthfb1YTYCim33asWHyhvoPBftx9CVHvB",
  "key36": "CTJyQrQyTbyzVSecqFy6XrT3Po7ZzMUyoPDRgRs82XhnJmP1T6ugJUP8H9HsrSdGggZ2rtqkTamkTQRmLuuJ8KP",
  "key37": "nYJyrA3fyouNrhgNKnqD2BpbbeVCCw4uyyhv3jXFv2uCon2FSVVtnkv5eM1Wc5PPj5tyebAQY3UyfPDBEXKxaiq",
  "key38": "2mTK4Bw7ovjg4pVyLfAkiazA8CibJu554kXMQboGmrct38ucgp3GwoQQiq4mxeQq8JxpvakGxaZ1dSVSuPutKwfv",
  "key39": "5Rrzijqb7cuMkrxAVDzn2JR4VxR6BH6KQs1sTQAeL9EXQryJXSaobKcPViNXsNCNgpzE1PdBhZjBFhYbrq71zD3",
  "key40": "3Uz2hDiq4iCkRqiFvB2nKz4LFnGhTj3JB7uQja2Lc6jYE2a2ow4k1iFzw98RRbVuyJb1YUswFCffHz8JArgmrm6Z",
  "key41": "3cQBsaTyeJPEiLCmqKHtMZX1wuhpRZECdNqETanxuwdRXnuPwfeM8Eyyrrv66wVQ2m6xjH4S6gE719L9H1JZ15Pc"
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
