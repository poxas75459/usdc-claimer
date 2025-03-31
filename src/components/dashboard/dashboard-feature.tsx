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
    "5d4SZ6p7hJuXpLJMediRAoritCu2u7B9bhU71T6u2yV1ZvXtQoaBHE7TsACVdLtMLPU2aV6SC5aEafKUGU7dfDcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkCE3HchAPLPqW3Dd7Ed8D1eRF78VYynQubrYufEtDVgKP3xH6cP7FgiMPrL2XgKGdwXkdY37WL1bbJTAiwv6X5",
  "key1": "5HKhns9abnSLZsUa2KYtyAkhfLK8RvBsFi1584844sXJxpSdCKVrsXDaDLK5s9QWj9X1i21TNNhMY5pmsf592H31",
  "key2": "34yW81sjrzQbWd9RVwye2FTqVonG2t8yogpPHWqX4LMpJ1NWo334kXrgRuf3a88wATVa2ZjMSK4CpiswzkWrZetJ",
  "key3": "61BzriiNyjoZE5KDuZeGnTxJr5sUji56wbMi29R8PTv3fKLeChEgPkdhWXRWay4Z4FjkHw7CYK9ZyN5tJo8PDxW",
  "key4": "4zYhzVcFSXhsqVt7fuQotDDq9MaSYkMBET66aqSTKhgs6XCRkfemf1Ktoh8r2rJB9N63Md2qEtqdsTanzsKEJjAo",
  "key5": "4zbDzs1nTgH1XZMuN23pZbENAPkNELmiKjdzunoZ9GYKW2368YdzCW1JR2g3KDH84tCSBRiAhmChj8udBnQiyT4L",
  "key6": "2j5Kd2mRg4EUxSF5B599xr81mdo4TwffgxP4rqnKQrbfBpugWALAcUQ65NUd26sssgEAMZcrzBpNS5yxW45kZiNq",
  "key7": "uAiA2HYyopGv89D9Bp7rgQdQWt5EbNVgM8qZcZtJJNmcUouh8vcWMoD8b7DxxdcJVi17X2mnfjZKd4Wp7wSRKub",
  "key8": "2dLoSJ2Z3bh8UdU7UecimDDTMV6VEuSmLRF1iRfzJ88aM1hD2qUDYW4R2wc3U2Ti5GTt9QNvGgusKk8H4CkNumR4",
  "key9": "23f4HwPGaSaXcvX47HMkzYk4cURgK4RF1BZbngw6avEUHP2GHmiDQZqRzsQYneLFmdeQzsHCKPcSxxXjvnWCydZj",
  "key10": "4uVJJqtjdmaAceeeBQ9r42Su1njbiXRBR1Pnjt1iZefNedbQfCEYpMJq4hS76qEeJ4go1PhPYZj6YVzjPeCK1ZDa",
  "key11": "4LAZRZd1w5eNRuUuEWofsnytSYnZzSPRMtRskJsw2gR7x246zAvQSH4yftPWRyg1EQfwtqcYtnQFCfghw77VuLxC",
  "key12": "gLZtTLGeLfNh1m2gyNdKNt83c5699sfEjZHpmwyJcsWTFsUXUurDJD6HFq3czYhhh5hvXTMbaySGebDDdHzcqje",
  "key13": "1E6scSYwzpAh4L16tVk9zb5FhedrbvedzZz2ZWdUqMFmduHhGVURVf43JFNAaBQUQaYfkPWgxLzyLgzPnFZC2AC",
  "key14": "2CbPBETRZtbP8QGA4yFw64NbXRFeENVjvHrvNMbP1F8YfT5Me5LuMGxyn6KTjGWXtbMCPJrvdx7tMKLZba7gkmSN",
  "key15": "417HAkNnF9fqL6dRT9eAMRNK5aPQjbjDBs5Rq2jAt4rNPMg2Pm5rAkttmyDHoibbuxVEafa2inEEunawuSSjL1HQ",
  "key16": "32pNktdFQcUNk9WP52B9AR5zss6Ko4sdJGLzeSqY1RB2EcQhVL99snNZ6Bf2JBpUKPgm1CRmULCE1zNczJQhGB8f",
  "key17": "CiGb3uoyoAasvmB96SSvvimWJy3nFQMckNU9R2MyxRCXUqLip2YGUZxtv7SjtB3xRLeGKLXrjVbtfHtN3fXSzLk",
  "key18": "3ToYGnxFvZQL5DtbRGd6VRjZhSCakPwDwZnSqmPhd6kjz5mpWB8GUpfFFHvknwQDGbMN86wXBwFhyJ13529bdE9L",
  "key19": "34s6wdxSPshijTaz5bQZ6giP8ht3n2bAwtPF4HA7z59s1mhkdTuH3ziZiojYXTSz8H7xiLpxQcfBVdg9cajadEAp",
  "key20": "jxmmZ2bRr4gsToTBqw63VXiiqm9ENhQ27esXYXdJUdNg9g7De8KPWfzkkVm3yhvEN1aj3bzUXnzDXtySzVjst8d",
  "key21": "3tYuK2QRyHs5JV4rGePyNMFCGn8xsAsupmQc8R1eaqayyCYu5Tw9hJsUaGDJL5WrfdLvD2oAiZVB2BYhd3DWG6qV",
  "key22": "2QtygbHzwa5ZBZzk1LRjFpJgBSH2gG5W6sC6w9tzsExxBXsE9fuos2FdadyCKtHjvodLV9yYQj4B2nucLdvq6MVA",
  "key23": "5JC9NchsmvKV1jRn6gH5awcqjEER527X32cobfCb7k9rxeKiCkUsMsY6Afs5AmR9sN6gAQjT6eVRYTkM5X6NtLxf",
  "key24": "5T7sNhXxqTianuzko6DmLQfUnoBdxKSqqh3r4V4dKLF4Fypj1nNC6HbQJk2WmmeU6sebbX3sFobS6867hqj9BjvW",
  "key25": "4SW6RXkn8zQocUymHJpPEXGmhDsjZC36Su3n9PpAHsxvDjsJWorgnEHCTjbxr5CfsMJh1AtMh8c9Pr39oQH1LTNP",
  "key26": "39LDG8cP1yybJFUzuuVesVF1WEV4YkYVaeB1tyW5GigAymCm3AHXiWiEEYARkNe6skBdJWKbV6k2n8sptU45ACpo",
  "key27": "4FnRqpWVjY9p97hSgtdNeAgtie58pWB9qmurTyvcmVPqW5JKu94RAtJdcgDS27qYkzhEyXt1qzGjsD4Y6voTKGA4"
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
