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
    "veoTQxQeZ3vYek7EeTGxN81fBKfmAiXDbchDV5gzpi55YquVHwWfFS2NCrexRxrz8Tjs3uNFLU7xbnVk5ftkSKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9PpdnM2Y57eEifc2hHz86vARPEwTXuMMvq3D9Qr6qVUuP9VAAcML76Uqb6Td3Ab17u8iE8NeV2JmyV2iYZejZz",
  "key1": "2kL8aBszMaKQAfjuDctjdCDyAqvsP4pJRfMAp7MPgUju7pBRjZ4QEM8PYMimoGCZCyrAH7D8djktnr3PiHF9toU4",
  "key2": "62t9CgKMntkfo5tfyBBsrPtabd8Q6NZyGuZsDwTjZVNBv35Nr6ddngaX2tMCbVWshcYCJN3Qnw2kAMiZcchX48J2",
  "key3": "2CHX5J7jv79YizqQqXiGDSywkQqQzZVyAwzQLMFhtAqwqisUaZyLFmPGQgTzwBcg2jwKsCPsryBvcjmr4qvrmPS9",
  "key4": "1nCbdF7sSYDtFY2tiUHFgS8MsWKxBgH2n8yhQMMb9hbY9V9GvLB1fJ2Uih4Ui3DzsTPiD4pzxoj6i3bSkSfRoBd",
  "key5": "5Di1DA2h41yQXZU93ELL5WjqVhAb9VsU7enuPvJgpt2dEmG48fveSRMB98hiLz4SPMSKKPiNR6efkowEP597virw",
  "key6": "4fHpgdRhCnJgkBhVK9TavSyWFELBnAuncHY6U7LwrNSNzFMpNDYKGp1tBSewCQ2GCgochWUr2rtzq9bFiahLHe91",
  "key7": "4dTcTvUq96mvhmxGGeLbqKY6XjCvTFMWL8JkJph2NG3FgssvDV1QqKnyoLv97kZ2rJVe4KGkZdcqVdfFZqa9A6uX",
  "key8": "52nsiC7hbuC6HrkQptbi1FH1qebXGdPAhSzmxz56eskLVWfSAxdH1dRjNodHKr6szpxgnqYD2ENVrTpTRVkxMYPy",
  "key9": "3deMSC3jV1CqcHRjaK4NNCi7t3PUManjM4B6DVHU3nHJLLjuwwo3Wqi7tboKBp8PToQBkTJXQhaSbcAyysggxHvJ",
  "key10": "e8VWMBqYCoyH87GrfpPJuvM71VVxchVu3u1uwmjeKRSbhaqJs7rMzfgGR2kV88xiSLpFhp1fGHVAsXrdLfn2y93",
  "key11": "2YP88wdHsDCg1fxQ1mUvLPCq3uNvTHPLJ9htx3Wgu5dG2i8cJiDFZc98VaozoycLE5Z6e3kCJ8MVU5h2qh8NR6GF",
  "key12": "LM6njx6DzRHBpkNdB5jN1AAo3e3fy5vQf5xAxB2WdrpHvbtCyxEKdXf48ZeJe6kXv3Lhkivct32UT6TFRFsUi9y",
  "key13": "5dfoG9poFpij3P1jjKyifAnkpfeJXThro7j1YupcrQvU7Jeriga7t9howEGDHoNUCuMRAJ96abYqDasr9e6Dwdh1",
  "key14": "4asCmemFfrC6XEN4Hzu5KzFhJEDGg7QLYqdNPS6VLKEsn5emoG2bLWxYgEoGW1MEiFfjhweNLQEYcV4mCqeaDZKp",
  "key15": "mgsibymHxFfvxc1cD3cDxsgbYPs8FDGvXEnyh6cNV8cGvQ4qBawSyt1wrhg4Zk3c9mGBQinv67YQRw3Y8ciXtkD",
  "key16": "As16HQXyMwdZXm6fx8NuzZ2P8StQRZCQAr5VxiVbzovcV9tcUEEM7wKWgTXsWiXqHhjxPuPvh6H4ZGLkC121b5N",
  "key17": "5PdmwUWTdcmwXi6AoXV9s22apSkaU5YcmePU5L2ZH8wVpD7h4pCJsTqvKkeUETPYM2eV4jLdFHrxUFDXSvPhY81D",
  "key18": "54jNkfFeEK5Xoim9Q6tKLaeLQ119C5FJ8h9q3UMaMc3NRqYh73aVcSVN6oDJGrns868rpb6s1dapxwLtWTPdEEEh",
  "key19": "5q1Da9HdpZWtUvMQuN1hpit1sYBVPKC6JxmyjxPhLzTsbpPapeH9Z2T8dK6Fs7HwGnH43eHTw9iuL56Ac8P18iyq",
  "key20": "634wfd3Ym3PkFrTNDPDToet2pbbPKWrf84n7gJ4ZJ5wVjttyJPYHd8XUojavEXUszJBshXmKTxLtj8BNCkrTCcyS",
  "key21": "5hfhLmW4aFwdarmGNjwJumW8B7MjDzsQfPvUbumKvSyG2Dx518Px7MNjUM2jCZWJhykDfDVEu4TMjcSN8Nh44F4s",
  "key22": "41SRpjYecCpdE3bDSc3tLvfryP5YjAG7E5QA1WCMS3c2GWuChzeBuAFpagqvM868fiuKopo1mb4DKKh4xmPGYyCv",
  "key23": "xJUahkgpuDMaeiJCUTEVBW7XrY1WoYzqtFNSubuEtUxJ3gHDsTnFS5i8LW5E3pZ3ANBjVkKoXtzX9ehqGYkCYv8",
  "key24": "4bq9Q9fpy1oCkmiZnPqbAuvHLZoEG2mdxgyYTztEKvEfdSjzvjXSvBPasGxwZGeSp297QSXnoNQdXq8B8s8bZgM",
  "key25": "27oCDqmGpen9G7dXc5Q8gq9Aa5rZHJAi9MXawqMgDtGsHxhabqyVBHP7QnwHzC9aPjdBANy9ufwHWZdD4Se4Gh1w",
  "key26": "92v5B4EoiDo9toJ4LeKC6gFoW5VqYzDAvQFoe6p1w1HRdNxrWCDpQfTVhddJfPqXVGBGstXfQEj9iPSChjq52vk",
  "key27": "6492Zj5pju89hrQzrctJ88BRtBZ5YXhenoReqZ6KhTqJqb1TNBwQdBAXw6u8oAMLMKb9xA3bNWyXp9u4kBrk4twW"
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
