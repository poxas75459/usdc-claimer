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
    "54xvDavCm3shsGFtA3EkaPhv2wooh71Ys3Dj63i4dNb3cdn28eAWvwLUsSUqAQNXksA7Qrx1FWPoobWjHyUAXRZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBKTkZEFgbQGr4TckdW1Umqsb2SjQncU5i7L4x3JZWWHKzBEXV5gSBCakPMDqah8udGEiy3q8pRvCXJ4U5ur545",
  "key1": "sjKQoiubmR97ezsS52iPT3qrktmK5cBuAJHdoujtSQPuPgVkPvUAnmjrEbd3YFwxyvVHBvmPu1KCDoQrN8gSn3L",
  "key2": "4XptasaazWXC9rLzxASFdfG7SWhxbKB4r8D1N6FPmJHVvd17aukm1kZdri87BX5CYaHPMfkRKjkLZmn2ZYdZSUmN",
  "key3": "3ankD7YEM9VwfSPYAfJCxv61L5uzcTwqEuQgGhrYYLqxiiNkcP6T2g7YC7Rj1f2YMZAV6w1L791U9w7tnnux5kPN",
  "key4": "41wTWpPbj9TrycpUFJnActavwwNBUi7Qq7ytLngs79fMduypANBTTB62tSuzGAw2jjPjt8TB2a31fmKeCkTmUJV",
  "key5": "5CnWj8cKtmeA6whmyesV2P4UKAthBepi5v5hZHBd4RVVLTt8R5eheUNMWFPK9VYeUavDuqEsiUGavQXX7xg4ZNSu",
  "key6": "48V6xAcpwnMDVyKpGiSBM5h71qXRB8MfFmy5kvYR6h9ALqjiq5a4AcQMTTWLsW8ctTXoUiUscoKo9D53wa2atRAX",
  "key7": "a9oyThyVuSNeVKZcetrTBqF8ryCgS5XwZWBk3Fx94KGhfxyswLJnST1WoFjinVdTtc92K8bnRNdAZE6eCwZVZxo",
  "key8": "2Sekny6JUVzNWiG1iCLzCiea6AacHqbTP1UZhRKBQR69woxcQC42Y1X2g4y2yHFnassGfJsHRzjBJ9Abf2SJYKjZ",
  "key9": "2vA292cBSvmuFeXZVt7USh7Ri3HbXzjueQw7QK8o3AzR7dKSCgVTkbbcEshJx637U9FE3hhqGSGQ3UfZFo4KrFtc",
  "key10": "zKuePBj1hEvpWZcmgNR9iowfa5dB5yV8cBVm8monyRiYb3qYrYfRja8YtE4M9ggfEVri62pEkhMtDSWfS6FjCGJ",
  "key11": "4KuQC2xgq2gTTgfuLVnNqeTm5re4jSiVsmJVwPFk3hJTQq2ZjqWzJDgAQ9rFzC1FFMUsuDXrcaNwAv5sLJyQJ1iA",
  "key12": "wzHaZBP7d6iQ6cHa6khcwGhpPjiANyDG31h24tfWYjBMaTznMx5gbA3eeGgV69vSDkuLweR4TVLGx5CjhcV75jt",
  "key13": "2znVLRPugpXLmt8h48kQw2byQ13G95jgYL14cqwjHvAmEyNeGFPMSceSKXkuWC311a6d3p3B2ABSkUqx6hU3GsYq",
  "key14": "2EqXyCgadAfNGGXeRFUWgi3Dnigb466g9pyJ2eGKygeHp1rLJnT6KLcmNNijshnjyhNZUbM7BeTYZpPN8LnfeBKU",
  "key15": "YrQzuAvxgjden3D8DwL1fL3eRSGPksiMvZh76HbK1ZSgmAySgLHehR37VKDQepFFJCB9HGAwmxvEiTH7RS2t9yq",
  "key16": "3x9W9TTQu4JWkkoTR81uo9ebzapDm2aKYw8oFweqzp9oEgNw3J3pcEest7UVURBV17i8yEcSRBFETok5kGXnBBQd",
  "key17": "5W6q8c61jNSjJwSyk9wJUJHaVKtRszzhw4Dyw2yJE8S6gJdtq2KPCSbdP7VepCCJfv1fTaagyvKRjSFnEJN4zxM9",
  "key18": "VP12E9oHHt35qnHC6p2za8kuSGnmF1F6JUDqdbwZw25nYa5gWshD2aCWgxq5NZU5qX7KpA2oSPBRhKEN3Qavn2W",
  "key19": "2VdakCxfuxTxC3LBbtsCSFgSmbYeohsk39KuAC44VCREYTUzXrHZC4HCutFX5NcJoD1xM1BchiYCWrPrW5oqZaUb",
  "key20": "5iLz33RZArqf655HfJg3SDRRGhetKPPzUmZojddiKdPnCgdQPmfuwpEzFS7dCtx3Qy6nFFLDV5uTnLefp29nNxXV",
  "key21": "62Eah1NcSHwkmCCHQV4weynNaZo21ZYkwu9dV2GsLb7MQjxtdRYZQt91gEY3Kj6YxHxpWskn6kYMpQ8TSUpfUAMf",
  "key22": "485BPj4sTYRqHLVhvWunvZ3a7FocRRnA8H7dC49bJB329o8CrLpPo4yXbnyEKNogrRkcpATe7vf6dKaRqk1tWGaq",
  "key23": "idrouqaeLdSH6m5mFcDDtbH3FzDHbE2P7pmpLYEkXNfRv44uGJKf83r14NJiUJ8BuFs11V4NzyiFcJn6YN2F51M",
  "key24": "5D8mwXfqTzX2GK9ziXyw2q9UqryqBTwxx3LkU5HcjAJCN7ij6X9RQ76CSS8axfJmNdShuappYt7s13tbj7XFr4ek"
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
