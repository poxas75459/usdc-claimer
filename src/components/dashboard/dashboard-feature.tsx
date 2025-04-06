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
    "2rJhvKAkSk3i1f5BehRJvMK2ud1W9wsSqETjhXmct7W5J8J2x84obRQLcLiETC2xGdgqP6PdCZk1JSjxk7QAWvPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyugsLtwFb3QS1iVRCDPFoAJYjgDBv7XyBvTF4WmQ2bi2zytYpLxo4Gy6vf3CbZ1K5XXbKptVG8YjQyFunnAiEV",
  "key1": "246NQED9me1YdgzS1kLURP1HHNJ1nPgQXRFAg8o3btnX2PXtHWKgfkxVdAVF4E4agRU3eYkbc1ZeVL65K7ufCF5m",
  "key2": "2yUYGd58k8gDipzMJJdM31wcxGNdYW8qhEuuV5R3bbT56SPZQbDqwXAbYzuAJjxpEXmPwJTa4xrYrDfAn1NjVJMA",
  "key3": "3GTFgbE5dvN8upLNf8ihBJXeBXiDwbkM35iMDdz81cr5p2pktnoq4oN2vorSgNvaRbr4Pr93dagX9PmU75pLYLSh",
  "key4": "4BWDgn3vKi3uxjJpvh2zVG7CkA69gnPBmoJ8ZG3ekuBAmG6Vg2rgYGZ3sNZZJAsnEUpoAnEms7S2Pc37efoVgxLj",
  "key5": "2CnnNZDLJKyVBvUf6DCqQG1K8GfvSdcro2MimDWmig3BRB8ft26WVhagbwnuqvbPURAkqvkDQM9jjuAtVf2FT6uY",
  "key6": "32sB7hCp8TnRmLkHHZmnvR4CGtHgCKYBT46Jk6AxMp1HNrN49pbin9MNGjzNbZVEMyjSL1Rgepf1s2dQcgcJBio4",
  "key7": "sBim15qn6M5TRy7WCdLsqbt6C43QydSuTuCP7SZL31sDvZdQFyd3AM76yfkeLpfWRBSKfEsog1nRFVwfENXSaaa",
  "key8": "dX2Zv4vVFXyc7wJSpyggKCLW3tcsDoXRagAuUZMZeC69rwdWMfxfQwVN1rqhy5ehemyGpwkx8MhHruasYL2ZKw1",
  "key9": "2AtUS5AZy6FKh9jYE1vTqzsWrLcPNF2wMb5G1yGWAthZUt66qRvFZSyxSxCpXNk8NTK6joqGUYtDSSNEfBwhA8LD",
  "key10": "4YA1nDwWrHXWbU46exkvBwTeT9Gbp7Np8EgrydcwmmdQssuk3LmgHVditT9oz6cX2aX7AFyMAGeweHxrnYJaK6NS",
  "key11": "2TkXa6uz19heZ9oiFyCTkPVTqt8F8gTqs5ELHnoyDdPJFKhwNKkK7iYuGaQWmivXMs7ADB17SU2XJZ9mQ21PaqUr",
  "key12": "4qspLKShYv1QCRUJVWJNZjP8pg8JcuXY3WA45T1BQNUQuQNasjtdr5tna9vh7G4ucV36bTXXRVaTunARi1WrGeU7",
  "key13": "2rppTrofCFxjonTVnWyQkmLaaSeUY6VfmZbTMTx2KuipgV19NKNv8bMtoF72AUXuVaQfL4oLwUTZXUVKCf7hPzYj",
  "key14": "5Qz5xs4jaqdBtREju7JueL6hCZBkZwNQEXYkbSRYucDXhjXjMWanZc3mGBnxCHRJeL2nXFuXewuGsFc5wyMN6pqd",
  "key15": "4hvAwZjJxGk7p94gihUYdzaKQ2DmzgeeqqqH1o4WEQTD6174eCG4dwHen6eq7FWUQVA49NtyKHpHxKmReN5mXgpW",
  "key16": "44NKeVRKKMZupwU6cEgrcpaCnLWRBYSrhar4cCcdMDsU5R3HjTUUY2kkNeaqsPKpMB6P1G1wF1sFzZufxydGYiDx",
  "key17": "3fJxPfbA28HZPHghgz8Wbuws7pX9M1wZd8Tmrusi2QnVYcpDgPWiwF4pypWgAZZ8acWAWDFqbX9aDkybkaZHbWGH",
  "key18": "3zpQ6wvVqwUMotnxo74CjxwCVytJe8pm15S9TkiFe7tomVp3dSDTMwyxoMGQKNqbP6Czh66frAjHXihsHVSZr257",
  "key19": "5ETi8256V6TQaC4ZczTMKtmN4boA2aJ5YYxkYLZiCTL7vjE8ATz65gDa85X6UB7gyMtBKK2bQp4f2eH2F2XZppvw",
  "key20": "4p9YCLoGsqa6sz88ij7BMACqS8N8RkUppDU39Z77WiLFhrFSgbUmvJyp7LgxSoK1oZwMVGerhE6n5jovM6fzCysY",
  "key21": "3wbvrCePxNqwzVbLLGDsnLh3UzAqzkv9ktVKdFFW5YHysLCfax6rAHfAkV1hpd9NghfbaWSFuYjowCzSFCPZ5VjA",
  "key22": "5b4V2AWcM5HQ4iAEmwf5Lh7YjEvMNaffvoj7cXxxNE5t9tEDohK2SrxMsDNfVMbfNPb1Jj9Wja56bUXaXS3LjkzB",
  "key23": "k8ye21aovQVDpcknvLN4gcdLJXF1CJViw1kXMotTZiehUTeTMqn8xdSiKCqnveUGzUKTJ8Muff739RwtMVzg1AY",
  "key24": "5ceEo8Kurv3ko34iWGoUPfdBWjTYgGSeNSEWd1CEvS9uXkQ8durbWuds3B1VDbVeuuR23pSi3uEaoK9XspbSzKGp"
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
