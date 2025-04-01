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
    "2NbE62CQDJyMHxBihHmxJveBsCtCup2ALZcsXE7nRqWxmSreEki7Nx5GG8as6Fnya9JD6gwpYPk8g5VJKM9wPPQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzwG2d6cSAH646hWHEikvLyQN3YTxWaNgwURgnhor2aCPJs9HrbjUNSb6bhZNUpsjn2gv1P5PAniCF4qr1QUZ6J",
  "key1": "fDyymicGckcYpExPFQ23L4jD89xgbq44TcWQUx5GUFwypUwS6UKhfhgaiuR6mKPVLu9ZBQyavwYmyGQ4E7VNMxd",
  "key2": "Pu5HuWkvVq1rW4FaxvKQUv2UbQckrP5t6SxavKGpjsYm7di8Jpt2cRYNL61kzkrecYByVuCWUgzc2twUjTLeup1",
  "key3": "2YhpeZJtUVhyP3mKNxhaziQxUxesAX6j1zsEZM7LJZ2ie3cEhB69snPGszs4JPAhEr5funCifd4JgKZCvUMZvfye",
  "key4": "3QYpojLRyzerBmtP6sjCxs4g5fYHmZ8KXhhsdTiUeanFGuZjZWSwxkNSbsAB9KdCPu5zYEXKtKS8EkhJoaHaqzxa",
  "key5": "2MJKaCm9aYGpz3o5h3uQGuX1HNdbhaXyJyrrNTU8YP8jQTSxShhLgYmBA3Z7tT2Ewu8t9uQfX9G3iJB9u4tSzfJ9",
  "key6": "329fzyt5cGqeMLYWbWeqf3pN6Xk1AsvHyrDU94WPVLghNutaavgPBRpSzL89E3VGmme4U4aPwDmSstdVK2t4i7VJ",
  "key7": "54ZCsEF482EbAsVvR5JWkLZYwPw75QFCBp6webMgYME45rYrANSvSNdmCcXyXuS4bTw6LwDGpyGQGA1MmNpvc9Jz",
  "key8": "abAZsNYRg9zRpL9iduapbQSTdrmJW9qNVfjtVviT4gtDRwUCuLKxfyWU7M3vahCvJMVyyxPdCC4ZWYgrjDSUuVX",
  "key9": "5irgES5tNW4ZTwtfkcJV3oEHyL2zY3uVZNXzmqWVwpcDh8dRuMeB1doV5PcE53dWvpJYQemQHMKEjmxVvJ8BXtBH",
  "key10": "SmCBUJtRGckFar8dFnii92K8DHq6wWrRkqtgmDygZBKS3Lo24GayFaUKyKZUcs25dw55ScDZPucFPWCZLoWEaQj",
  "key11": "4UNYhoLecEnLiMwjormyY9RAravEPGEfKLMzGFUdn8ygUMA5cWjw3kFkfaoVDvAS6sBEfv5cijsD83TXMMZcqmhi",
  "key12": "3NVHdVrWm4UhJ5ccdyLuQ6oxgentX3cR1RC21yVB1jXRbFp66FDBrEy9vQwuh6ZCL52m1L9A5pPejCd58hYmwgoc",
  "key13": "4gJR936bbd9Nsd1WVg788SxyeCTkfM37vGMi4ehaPYsvw9qEkU48281qtR4GAges3gfSLS4DvSDmwxS13oeDtbnh",
  "key14": "V4FWJLXYBaWpfNVVqreL35CTJRmHB6zwHUjoKQz5kNogokesh1i3Zk93EDqFRRwrSGY7WMtihQKAzXyahxs5mBU",
  "key15": "3TovUPWJv3a5TW8ZbF1UKyBxNGvSAbJRe2ihi9gSgSMdAyUZKQ4SNPD9Tz4VG8vnvmyTe6Dr7GXThBspcKeX6SBv",
  "key16": "5jEEpYdgtkiV5itWzggw1owob7mi87DpSXYayuhKRcQetnjRjAi2x4vCT3kaMuPchrMmty87p6QjXwrLth783LKz",
  "key17": "3kzzpojSLjg2FhhM8yva4RgZneTPGK7KV6UZ7hiE2m5MBbUWdKfGtmoT8REYbjNZuS7NNyws3BqMMuRu8JphgTmM",
  "key18": "2pf5AzHcyjVczBbkQSLAyK22LjTvJmXKT9phmjSreLCLKwHsAMDVjX9LMJrdMrE98NoUvRfUteDotrQd2a7sjBDP",
  "key19": "S9TpWQX6bxuxw9mATkFASwKG83iqbhJkqgZSTfBZmA732Z2GtTdjbMRtQTZGFaHQVaTbzx4wdcG6WHWHvR8Q3Ac",
  "key20": "3CsDndesVLmECPg7qGxuUEPKpyaGipTZDHS5uTunKvVuk1HBW2abDdBdJBjcwkBPZLdt8zfBieMzThAsBXytybL6",
  "key21": "5obzzt9yiVynYEQwyWZcCHNVMfkLZZHwDpzn5qTULntBdxCUQkVTzbwZh8fsJZKnDqKT5jBwnvdtyKXL64rPrFKj",
  "key22": "4KPP77gMs1KynQxfP5AyQRnx1XgCUWQMDZaF4DsgLzUZaKfZtT3YMNgvZghERsvdJtMXgaT4DfDxyuUcW8KdPVDW",
  "key23": "2FKgVWw3vnBApJE3kREkhz1LEA8qHTX3UnvWjPzzfFMT83UBN36JYU31xQYrabF1D9kQNw9c5DNCP29Sfa2XRk4T",
  "key24": "25fcLBHapcC3z6jWUcSj13QYosgQRgsB7CLspeB1sZY891okB1Hqg34AdDnwVMgTtSN5Mg15b8nwxov98bVsXsAJ",
  "key25": "3CDvoFXhaLY5455UoRvJuQrmWFW6FhDC9L2hurn7Bg4sEH7E937Zi5EWK1AMSVFE9tursRimAjHVa1cDjAVmh7yb",
  "key26": "5sAQa77TNnBdxaYHUqwUVWrfPHPet2y288Lx188dqsmrmLjR2EDn2g48RkFRXoP3ivYrBxtxkCx6aoejHMCE9jvQ",
  "key27": "3gmMLt4B6mwPD165LLwSX99i8tZ8YB27FEQNXiKaPL3W6m12zK5eD3pE5mnVYKFLgyzoeAQJJb32eYdMZP7bfsS9",
  "key28": "2pJkcLu65uLWR7DjFJB7zSTDMELtFCVGMBhMrRc6aWUg91Me22rjhvSa1S1wXmNGzoC36eyJ5VMbBYRZ6n7rhAwK",
  "key29": "35kBt28ngxRpEFGq7nUB5LsM7j2qXQswk5w7AWb4MFzBgR6RkFukqhiYrq3ANZxeJE7cmZQy9k3rsLGXitoE2i7b"
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
