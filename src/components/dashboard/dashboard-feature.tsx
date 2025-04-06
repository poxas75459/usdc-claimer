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
    "2ryqcvogCv1JxG4g9S9YMWQkD8jHHEVikrmx8Amdar2QucvRfNv7QZJHML3jrENv4VjiNZR3sTsiYH2KRJwcvzZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTajmnbGYVzUuCmx2Xys54FqdHPcUjA25xznNBLequukGEbTeZjTpxteTSF8HLmAXFAtjDc2RwcFeEJw1TkcGit",
  "key1": "Seg57anVemNjSB2odWM4ZYFAgFgtBd6VPAhWev1Gc6FEsY6HDY4TCwXgDxftZn14GmoV95K3tF7eafbcu5EnFVW",
  "key2": "2H4qvboMJsaZKNY3uJzeNvuzPNsanMSe9ZRjn2VNTZybbZCrCwg6GagfbJvgEJPxgw8sXjoCKA6VDkpj7ZggjoBU",
  "key3": "SYiT5bR6BZ7Jaj495e4qHJ4gBanFvw9kmx7N73RF7nSfhHapF1NtGCsfru8Qy4Wjd8FGeTCBXKojrXnFTW6bJoe",
  "key4": "4AKEg7WMig5eFrr93ud7q6HfpwcAj9x9MC4f4BDAtDmHCiRPgWK6Z63pUwnb1rsQ6xkSc5KascaQQVFStZH8A52F",
  "key5": "48PKrYqy55dGUxB9U6Rsh2shRmZG8MEGJepgmkYBvgvNZSnUCuqccMR2LNihffVaHwU5ZWcsV3d9Y4fHW9RN5jrt",
  "key6": "5v3f72Xz4Qf5TgYYjp5t9pxtLK6qC1iqyyxjgFs8SUyh9cPiVjiiYG5e2wx3xcvbvaUpZ83W3aszNrtFjA753q7w",
  "key7": "55sJ9Scgzjg18HfJF64opZ8p4Dqa33ip6XfjsfSJ6EV6y7aXiE4bDnMV1CrnP6aSuP8qF7momJ6vSeNCV6WNRf4P",
  "key8": "4jGG51LBr94QYRrtbR52iebJv2NAPFFQX6WrdFUiw5dnD2hkJ3K8CsW2mb5yGVmGrcDXs1xGAMqFfv2eqE4gxxkT",
  "key9": "2YZUid4hajt1om5pu9pJdu1ng3HHJ1B8uQ6k1i7kRXLD1szUvrYLs9u8mWe5jLSXAwXjEnwT5w62hTQj8T6rDTfY",
  "key10": "4cn5gQ8ZytWGTwtNkyzhxks8WEkVWDvkp5qY1Fj5Mm1cMfnRv9Mf8zArCYJxUCqVsUe7W3xjFaKwabbQZhnRzjjS",
  "key11": "HFMbMjU3X4pcxEXHwBEcZDHB5vGHcefYDgJ9pvwpZpJQ7qJqQq16LB1zXuFXQ3EQaLkKFvp7s1AHVJghpe3anUb",
  "key12": "71VBhjKJBJs9Dzp6Emr1KAHFyD6vQT1mdxafaNBNXLNpbF4u2XATb3HwbUZ5ssQMkW2YnhqEqB5m533K6CyJniw",
  "key13": "3nXqMyREcvr3We8WocWgaPR3s4675MiGeC8xoiE6rPpT6Cn174d9Nr7CxB14k3w4vyMZnKi2XsbPtutratKPPGue",
  "key14": "hRSQ33vFXLc4pvieG3ou9kw8RJYR6ZQ6XmdBqNhzVAdULxDfAnXeKaGAJ68CGzLKphGCtMfCaA3hVU1DMMQujRX",
  "key15": "4A2TzYKSYPirHHC9yb8pHQBVMEbWJqAXJojkV5wcXqzTMkdrQPvfCfVoo4RmFvyBA2PaNXCouSJznKtGXYiyPQFd",
  "key16": "37zjSNG3ksr7ErN3MPytu1drkbAAYndTeBdvnGJ9aSA4aM5dtz8eeN698sUqRju6x4QniNkvwTDXygpnyZ4BGZgR",
  "key17": "4EX8zTdm3KWfTVPn9sYHvkq5nFL8NGSEfh1CULX44X981zC8D8FMBPQU2d5FrNbtMDsRSD3us6pbc1gpn27DZcoV",
  "key18": "4wq84J26QxUgRqPj2bFzmbkqf3tx13WHfUoL6uiBjS7fuSMExxFMeX96neT82wrJ9ivFZPExHzHjckJbgJaL23p9",
  "key19": "4KHFYgdNZWcSp8A9dkZbn6L2JjxDWPBYCCHfcZYsm4VNBX8YXJwxWHqAiKeTRfYA67wcCWoEmFGPnLCsvkmGDUjB",
  "key20": "3PvU82Q1apJp8tAWEcEdo6GP6V91dC8mpAeRU5XxF7ZvuQTgkxzHSedKfY7fRdVUzri8TxJnp3YHdo6qcCGwZaSv",
  "key21": "3pwYFUtviVSjJvZZ818jq3W5CmSteYSHwxPFuuyEEzKJakLKGmRqw1PZy8irenJKqpP5sE3gwQCrhNdudaU2hUBp",
  "key22": "uZqPm2trcEHwZLas6FMtwPgZpdGA6dwt1ywTneJSjm61mjjqC9HqZVEhDaKwefqfAMvSxXzTHL9SmthvDHuZRRg",
  "key23": "5WpMds2dypFUetd9d2SEwWAaXGFJjJ6KnWZEpmp4bD9X6rq6uCmfMTsbPsDMGdv1yr8ZWu13GaSNYf63xhjnEfS5",
  "key24": "4Uwy2zyZhiNu2LKLHyxer5rGYnuppeJunf9SyWPdTCLkwPQXvsrS3wKoTZUMurTzWYmxLwwXpgGhuYyCgrk2zrdc",
  "key25": "4tZA3UyzkPVuo8CaHXAr2noP3kY6ruaavAR79P9m8aChZPkrSUuY4k9jDq9zHgoL5ELUGWFXcvb32f1pq2GVDTvn",
  "key26": "4WuTXAJTxVN9CCWrJkXRpsCvjAB6qAkqChY3FixqZ1jqsSei9awPCDXtm83U7cvvFp7SYa7MNCkdGsPmvNxH7WRT"
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
