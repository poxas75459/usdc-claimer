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
    "5P1vBjyJySBdiXooC5FiBj4pR1DGe4enpJmWUQygFZQnHS94gyiiaWEjN5acLyww7yLac2CnDYPwuCTVxQt4GfeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqRgvz6Lkoinw8hhSZ9WQRviVudcm5UwdVU8zP81fpWjxBCAy21W5PfJMFjPNoG6u7eJ7AAFAULCyGDyT9ctVaD",
  "key1": "XvwLp8jUdn2pBEcLbcY1zWzVydDcSCjP5hdwtQiMKuD8yUNoFHnsqqG1qygThfZnwMgqMNf4A8JPQJ8mmeEaT3K",
  "key2": "2NRH5pJgQtGS8edUcLTW6CnZkNmdM3Muwg6XpJYgFMLJJLVKSEXKwYsU5dYMyLyXtWMEDpoHW7sqQUPjcv13enXz",
  "key3": "4HrjXnSiLNkhqQquvsXeSjzMpq5wNxYZiWCYAgpXCjsRGzigbK6Sga7SfP9k3k3rBRAcTQ2MLoTTiyJaD1zQrpja",
  "key4": "2zDsxUNDAHoA1VfVv9co6dygABh32cyuutigPLgvJXD73ptTSgPc1gFjgZR5GZRAEUaUQibbrfWj65YECbyfCnRi",
  "key5": "65soLdjxFBMf1qVdNeJGiFQL9vyygUe93xGvi5btMc3UL614orMtBpB8ePKxjxT6zTqZ98qSSAgGZAiMbBFYXxic",
  "key6": "4SzDmoqVVi2wUdb5Qzm1XDui6wQNemqngeLTZiMKrafnWVECvA2p6arAQMGnYcahSjh9ngfTuLr9xToe9JsYmi7w",
  "key7": "4tYGyasewDACYeQUogVEgDx1GpcC5AY9HjQzTtFFkn2u5gJXnEbzZaJwGihmneeS15vAupfW9QgVmb1VFvMeW3Wb",
  "key8": "2zTDXxW8weTrNcTNdDNKM85G89LrwgiGT9G7VHMzr5ooCH8atDM4U41zMy4jp5WvTsKXEKtCFLzxkSLU3RsJ8x5n",
  "key9": "KazR5vyZv8iUaWgUAGYbh7pvGhk5SfRSW5NcHxuhzK7r6u8PkmpuKYuKrvF8h4GwMC49naVXvBT8Airrh5BkXd4",
  "key10": "64x8H1BAsmCBu9yXdLM8AMQY4uZyy8qN1TicLQ4T2LTymdTRd84Fqy178RWPpMtqEq9GpQ7ppX8bu1A8JMoXs8xY",
  "key11": "35aqzyJoGZRZQoMLDSdk3JmoNM8qsACnHTKXGBg4LVX3JRogaQnfspqWfVzrFjjqiovJKdovMPiJQwtc17pLwJ6x",
  "key12": "3pt9xZcjiwFQ9rLcXyd5TwoEaa3WthPxAqPJcNrd8HV9TyLAbMdSA1mXoE5yxcVV8yuP8FBihAuyLmCY1LmfdYji",
  "key13": "3RB9BuTxz8rvuJTWSD1FoHT5ZuWZLPcGCzGN9UCzfGejU7sPnPQgaSnzzTbU9U5G4pUhh6bc2fKqRAARrTFaLVzB",
  "key14": "5WyRvcayQfCargqpwuuEUVPgdkvAz8gv7Qamo7MS1BVP4Hudio9gFUYfXpqcm3ZzEN1zZZVDwpDAHbT6TGKc1pSR",
  "key15": "Q6YKsF3g42R4KzPLw4LcAfMyXa2bBmHsZNpM1Bfjnq4i6qibHv5DtLNUwpURYQ15Zzm9ecd41hm2sbzK2rrCPeY",
  "key16": "2Urrvb5pZseXyTbfrrrZQ5DbTAbkgYxgENaazbTn5J6SnhHYy79T7EwoC699kzzbBFmgCVN1iMbfFPLbSWpnPZD8",
  "key17": "2QL8akBmK99zukmFapHq2nTKBbCbEBtnZjFqpVPM5ERfaYo1q6WfFjJyMhQgnKCbfdJ6KDNvzYpfXoowXife1r6h",
  "key18": "2qaAJY7bJhchvWRw17CVfU7KE43vbz18rjXRkZRzueEmjkT37Q7hdJ69oNt8GB6xtiZJSqVj1jrUxBqtZUxsqCUV",
  "key19": "55cUFJQtvYDURyvHPetatRqg2yQNfM3hWkJNBSX9Y2Gz5bweJ6aS9qLLJeGe5eorTuGTbouJqiFGnJ1qJ147mocf",
  "key20": "5N1Hy1Gh9d59nQQBcUaPzNQwtdYbwmf5XUdDCN7HhJGBSEWVS37tmxuknqFmB5TftJK47WieD8QVJLPTVgXSf5TN",
  "key21": "5uavHhE1JtWH4Ts4YBAM3Q3XDRHmZHNwmDota6wat3nmGsZKenB5jwSKXep2UFmRJKTGSJTprh2NdnETMYYHkWyw",
  "key22": "5hEuF8uS1eEY4KPtEHXdQcBbsaQgBzc9fpohCxwhR94rFyR1eLd4Ewti6dgR54Jt97qWAmSewNiwD5kQrhhUCE19",
  "key23": "4e7ZXzNenzqJUHEATjeSRVhvAEG8V44AybVahPJDUYV2d27rCQey7F5geB8GpqCXWSA9E2KkVwNRNZHmqRAPLSQT",
  "key24": "4cXdYJhakJ4YwyBToKCfdYUPZwwEb1EWoU3Z8cs2QG7sT5jFSRPe6VEDmVjZnwZAuTrUg96xS8TeLr2Ndmrb3vev",
  "key25": "5kjQA3k3sFr5hzUUpPRYgbA5JGJ9s3TJUn1NdjzX8eSkHY8hEyRB3wckY8MECvsGG2uiHwEiTkVFNjV1Q4NoHfUR"
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
