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
    "4CWMJx21Z16AwWdRrHv1HgJRZ9jQz2jqppEp54UXioxweL4gyn2aozCaBnUN9zhebT7MJDkiLWAs45RFTncX4uBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RC64Rvn5tK7dXjaQTHBq3sop1yYM3wJUErKBDo68PJ2wDL1rMBKMEEyZe4HkWmy9fRqmzWkPuSfLf1tL1wtifd3",
  "key1": "28cPvNMZARicmKvkCPGLDE6UBcctXvPHU4HSSXWVwqR8BHEmoHBk9qCETzYvxir9tUN3FYcC245Vn481WWY9NQUa",
  "key2": "5FKRKmWrBLYxvUA5uuFG47jhRZGnu85aY1NMjY7VYjNTPxZVjr2hhXnmtNqTcBpz2hdqerKbi4rBoeXvbEfK6ATA",
  "key3": "LdrQBLMHqz1eYKdxR6VVcE2PkiaoJNi6yjKPRMifJmDWhimsSx7BfeLbAG6gwrx4SAA62WVZATWk51nqFcmCp3J",
  "key4": "3VpdiSuhNpqazctyWzTyb7z7KruyrdG3pEDNsaosyCcgrC66iBZjw62T4oa393yNVqZHrpvVhmyEUJfXdRUNhta7",
  "key5": "2cKftQzdwn8tt3UzvSrCx75WurqYiyGSKcbKt291ndfbedmbrHk7ASJySM3yPHotASsMfmkWZBSb8881wWSj9xu4",
  "key6": "2TQrQF6j2N2i4AQPVxEbMjwEoEytVNgQ6LkzVfMNGcE2XzHAq29dZF5vF5V5qe8PaQ2hZxZPnCVMiLzsgCDKNLsL",
  "key7": "5fpyQdofB49niZdQdwY8V6YBGBU2wmARw39PLjdjw9Awf7aSp19oHQ2tKHiNunyHxEJSUjaXHciVTDVz6ZsqMenV",
  "key8": "3v815J5qx3FoSoQ4ALpWUYwFhTVQg4wGoq4FnsMKpZ3GZAohdM4A8z4Lvv5n36H3U7C8Wytc9RdnxMaPtDKHpe3y",
  "key9": "4P9bvKqThpyGoVGRp6Cw5mepio4PvVNcBk8MtXGHBmwery7XG8MB3zpofamudNb8Cw3LDZCtC7tMK9WYqaXr1wyi",
  "key10": "srfTQ5ZWhr9v2BLj8dQKYNrFxvdzJeDgHu9QWVNBo4PEra9nangYtCsakvcTBLzCehYssNvtyJywiwitE7hAALf",
  "key11": "5EABkGL6RgsYERXopTf2rpR8VdgAsPz1o9SVpN5Q19PdxJ5BDCCHFSpkefCkfGNxyT3DUNsKr99QiUV25yj5LpYq",
  "key12": "338kS61ZQkerGzP6pg1yExtWocpyCHJgaQWYuP1WSepHxLwbwWX8G9yhH6k4oEihR1oE8pRUZBfYfK1XajNS5iDu",
  "key13": "2UfFWLFyyh4xiUvZXdevBer5HmvZvsp2GZDkkKYP8698GixM7yTT1VwZ1wFHLNtwUASo6tcmGcSdXVdbdPXTkqAi",
  "key14": "3xLLEiSHrKNKex6b1a13W1Cts2LckMxZGqn1ctdTa4sRSgdRKwNHq4N2R1sNQL8q3hDPWkZDvhDGwgx2YEqXpmtm",
  "key15": "wTi4hBCjj59JYqaq7UUE1Gg1sCsjwLKVPoLDGTF5VT6bo1wnSZC4FvfRcWsGGDW7qniRxB7MbAEFowTvSrw7of5",
  "key16": "4x8ezJyMddPU4ordYY6DhDxEwn3nL7Wd75xiFq2QYJqQsgU8afarR6yHkBeGBFGa7qJN7mLM7M6xRTrorksqSHJU",
  "key17": "3TwMG8CDwM1AUf1JLcgiB52kGyQtQya1hys2N3qaSHJX9ZiEPr4EYaM2qfUJ6QhBRmxfuTNhaTRCLnPQmoGQYbFZ",
  "key18": "ZuVcfp1VfcgZjad6SMd5R3t5XTipXSihvMnSL87T7mJJsYmn63aXSF8oGT2WGL2KZYMDJdWb7AtgDcypuJo1Ket",
  "key19": "2fvfHTytFRKzXqSLFVoeR3RP3yrzncayyX6udnbvQKL89JkTkc6kWL6KRsfXCVFtugKVFAdkANm4cktXji7RqJyi",
  "key20": "3icvTyShWfRGsDuNggLcHTpBkqbtGpeThRySW9GB7DXbLdw9tD7NtS4NrJCbwXwdwUmUwcm1bhHCdeXmPBrZVK2j",
  "key21": "4t7ZCdQ8XPLbz7zXjUV38hrG9vpME6U9kEKKHNuCx58kZ8yUETuY1sLbj9hXg4syVswgDgqJEU4mrsXWNWwXkAe6",
  "key22": "61HbcSH5WfbifAMrKC2kVB3rqD9HCUQZvTRDhj7P4xFyZhT3Ro1ucABDwHWSwndxLcpiSBctpp86nHz7YhMVkfUz",
  "key23": "248GafoKGxoT6ikFn61s6u1PGmPa8EFfVqAar44oD735kjEUjJWxVUd1a2LQNsKbahRqeQPWwCWLRJ5253cPXTft",
  "key24": "4wWoP9SJ6vDFPgYSiwKk9ny2qYrJhfLQmF57XWn7scB5tRgPGG3ZLuaPzUQraPr4q3zH3G788qB2982kwQoWEjYg",
  "key25": "5DTzXZv37Sb4e6fTH8vEpfP1svjw3Zbxa48dbWWDzJKipnS6pKtGjuCYURdzeVzmhzavrUDef5jwu5C8jiYhfZxM",
  "key26": "d3MTNiBTrgEjMPx7ii2ZfXPARDgJtZTRrBzG5RmjteXcNqs7J6Pv9Gp2sRH5Gik8AW1ZMyWikoeuWmtDY3GKGcB",
  "key27": "4PiNVVNi1ee3mtNZHkooKdQEh2BVRSi1W6rnVG1rqrPRG1pCByRSLLAEcKJuHhPyU63GSj3zCTab4AWZXzLGMaX6",
  "key28": "N3jpzKVAPxVZJjCQXT2vE9wWM3nx2DhZzTqvsKr5ScAt5JeXXnnKSXWoapHuDYm6SH1hyEtxhjWu4NyPDWVUtoH",
  "key29": "3RhTPyFQ4xW3YCpkMcf81udhJhpcu8EqQk3kHETe49ehrjrtSJTHczbMMroSQZs7daZPYjGqfT6HMr3XAF5pv4dm"
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
