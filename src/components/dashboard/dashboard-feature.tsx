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
    "4UZd7scdp46LM3gYyUvomccQLrgZgpegBWCRZYpPri6z7jo7jVZp6VfShYnG7NhRXzJbTpS9u6PUgg42Ee1vHFKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxb742simyU2jK2ZpVkVBTaq3gh9BmGcAJEQGJXMZsVNZZhtWj9mxW3bCRv7GqXNGr25cXjZWxcQsgP4M4DnYv1",
  "key1": "3Wz2BfDjWfxPZKTAvJoZkwsHoxiN4UCEJAJahan5q5QSjhY8ZLatouGHuwmXfHMwUmKuwUv8pqmTCWx4MwgzWAmv",
  "key2": "2Xs2a4aKaYdnAYeqNAp8gZpJeP7oUMgTHyQm73fqiPHKu4aYxVsrXoJ2ACAaf7Fupxz48VDGhN5RNeH9vR19LtMf",
  "key3": "5ayqvXSmHeQNpYvVtGq5RaihbHXJmnK2UB385uK3YcQV1RCdeTKncsJEK2G4rLArDBJG8SbEYqaWab4HCvyAtMMm",
  "key4": "8Sq2gQ7gr4u523LyKfnTQd3Q43gh1NEHEF6mrUTgUDa97TLY4MFyUTtzSQR36HKk6SnDtaA1gJfi7ip1ZCkcCLM",
  "key5": "3gpiUjZk8KAt6QsaBxVykk2KD1w8xMYerBfQz9vKaPeXaikzUJ1hvfbj1MbiWihxfUdTX6MaYnX7zpsmoHRLTr5z",
  "key6": "3ofcAij1kjizEtqWndRuMGzLZDhnBzsnrZdmPyMFJC16s6Mx9pGjTMQpcRNn1ji2j7C6THDew7jZ5J9SiugLHsRm",
  "key7": "BAzdrPLKCHeTiURhDvCwKeMGQs3q7344c1Au9wj5E2T7Hqck6kPBszScqiCwU3L5VnQnb1twLiSuFn3huJEAXbL",
  "key8": "Pv9FmJ5sQNLEEaah5LLDSZKvKV3Y1hWSKHNo7EZQFJeitudw1j9ugkZNZ2HQivWUJdnBtR3Y91USXuzmAPsyTdf",
  "key9": "5cUrv9t4N8UK83eKCFsGAR4KtQqqpxLRxFNbFJ7qo5N8zgFBp9Y7DXMfNjm4z1c2wgmqXKUVt21FCTEkNdLnpnUk",
  "key10": "2HcoDNxqHhdioG5cXToF26R2fnLxW4Y8pakAjHTgTvHd6zrZphh2WAQ5JLw3gLNBA11pURipHaJPksdxn8EfaGLE",
  "key11": "FooEVaaf1bt4xbjrB1uW7Jr7QPJJmyBcBHziiLyn536DsVkUuHdJGiNcCa2WFRUJvRnytE8w7c3z6XUK9d9L7Zb",
  "key12": "LA8ENP1nbN6JYPg5AHEUUR1SfRccMxgNVeDtMCxPdYAy7Xb3vmc7oqWrpDVKCu4jZqMCUtCpyCP9cv7PruBpeRf",
  "key13": "QXSYoeP4hYtDojPEwqqsrZkwNarhVTMx2WSfhydU6c6H2rnFyHPLcJr5cQcBMNgD3Frg3WY9jPDqHxQc8EStDdd",
  "key14": "39nBFf4USNQsYRqWis6jTD3b9wJanzPTrAjzTdWhrfKZix44E8naJnbU1ykbsL7RwWaQBiPEUR2N7WucSZQChfwm",
  "key15": "4cxgs4YHw2ez1iyZaotFA4uN6WNk2Rz1UHcapWWscaUVGq14LUNXSogdBtzo8ZtM9Kuk1VpXKbMeccmM8jF2ComP",
  "key16": "61tJmB93Ruo5Ag1WwMbYaUuKmsf9XZMjnsMgxJsgwPRgzGmAZ4K9KqzdppRhr7CAhgMcyZG8L3vpUNaYX96R1PcV",
  "key17": "4RXueAB8rZeKqmdGNrVFcvoRVi6FXMzwV5Gc39tCJWvDxDLq1Rwp2HVLMxpVvJn65YFpVLJy9YgcBTWvkEx8Nz8v",
  "key18": "zaJX2ugfSEJ3E1ScxR5HoyMKukd6mXiPLPiCtGPhRL8QBhsnpWsuNNNBoVpnf8GGykoAfTYsRgvLEpuzo37yFGZ",
  "key19": "5R64HjX5G21U5GBuXXmfi29G7ECGMbtkyQNQUgztmptrWRC2YGTyvPBPVinVB4fDiH4yDBQN1fNGSyn4Tq98Y2Ey",
  "key20": "5cfa3BtVTUe7sfgbobyHnpF2KaYqYAQvfADuoyhXq1ZB1w1DXKtotbHej1Aodb6VU7UbWbo322M42m4fGJ59N6vc",
  "key21": "3p1GsvxzEZm3wkgfUizWg2cVGxqvaBPu78jsZ1Yajqbx8GpkriBATKMFJGiTz5tEzfUTXdYUbXNLte9YnyCVVB5i",
  "key22": "2KsL8sZLJgqs2J7iqLZmkrXzcnBL1JAv28nNTYVGrYPYiiFyCSHzERigFs3cfZruH8JFXxJZ8gaTWnZJhmnyAg5M",
  "key23": "38ePxwhuSupjjJm6bZzELoini3jKahuqiWEgpEfwkD76oAhex2rPhFhkUkRuRuK226vxMegxpQq2YQoWkgc7zDwN",
  "key24": "5nk3PgMCurKry5zLEf3aZQp4jqAHRBVXBrBFoB3nwDVhVqogHFAoPzLzTX4tDvuNkcqXd57vhsJ7uMoRG77EJA6b",
  "key25": "4ofixUiqgDJSGuDpEfptnqJ8eaJdxTXr5ftZoKGmQMhwQEY2y4DExq6SXCL3ohheKhZoHGYGcc7A22mGKAn3K5HS"
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
