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
    "4xip89rn3rbFVKyS6nyHCtd3PoZ5tnrJKFHPCjVmD98NtKKxpsgv6Qw9SjmxuPwLFyHo4EmNN6cAgXX8ie7ATVbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zBnvagnZLr2AnaNXtoksvJyuRH3wpqzLGkCtQLPKTgkRU5d6zrKxhrUbKhDcp6ipYBeMYqeBSYAjGgvweVx2eA",
  "key1": "3krgygskn5wECYTLzUHmjhL64XPqojQ4nM3ij9gJDfKq3GQVyY12j3dPzjSgVUP5MdR8fzcLCLJzbjvBdLZPVEb9",
  "key2": "4UEmCuydakMfGA7z3cbnzBc2UnMdrzazE7ieJzPHWfjYGkSMRzP1kftKKFMuafYTVJzZFbPwbrzdtM8oNhyWXJR4",
  "key3": "4ig53JPyw6gtxfbvPvsBTnuZLUcmh9ZkGN6nqeqqWxfzYPaze5XcVhtF3pAtFcNUmF2HWMhNQyJ6zinsiLRfzsQX",
  "key4": "47pXHrrnXu6UnTruEjns14B3HtkTQ3r8qbq1B43pWBVdndTh38wZmHeaA74KHNLB9auGNqoBMrDbdd8UTj1uyByp",
  "key5": "2L3GbLBmGhuVkCF9T4nUebt7PWDhinaVxFYbqhYWwyLE9MpnQzmtGB82gzjyPkTKig8h91mVTT9dDw4eFzmEGE5Y",
  "key6": "3P6iWJcanwsnMrKVgaUFoMZuphiEDoRJQp9fanMsKaYwyAGc6azKhXMFQe5iyHGvjeTqS55TirMXAC7citQm9qoo",
  "key7": "4uLL2NsRDhNnJhUJCMWAPttAS2ZU4ZyXLi9R7pM3gMT1HaZCkxPq1JWrvREgH6cedHgwkjcDxiC2L4vspxvXyK1U",
  "key8": "3UwQ1LWFFX83b7r9YstiQR72tQusQFkS7dgDBukdJaF2kaTcR8X59QFqRKDkn7xCmNkrBrsmFdR7wC3bqQDPWG2j",
  "key9": "fjS7kikQerFej1w5Hj8XvX2bRdEHfrBD8oZoBEpY6UZjmgNrLS9MVPHuwtaZs6X8nEDfQY9S9AGfmSUYHuJefmb",
  "key10": "iqdbcGdMZ7gmgW9kFHk2kgaeAUXZhuijE6QdcU82AYPPnBdCrEL9UuvLL2KPMxqS9e7odZexhQAMzEWGZwdvqJD",
  "key11": "2kQcqS58e6NH4gJrsDaE39T5wSfh3HBmp4jAVdJZ3CnqmvdxaVZKbjoRVxCe9Vhts323pj7Db32tTXBHuZJsiU6A",
  "key12": "2HRf5oRdWtNpgRbxfoJfT8qeDcXMSfSt5zqaCsC1KCJJs3Huq6RtLKSgn5c65DwbXy7JFd6ZfmGtw7GbNYQJbVCo",
  "key13": "tUu66S55aahe1Wd5t7MwKUSANu5xisGxinYTM2D7gdQqufpDQhTcFjo7YND8AZPQ2cvU6uzw9btWvAF5dPvCFF3",
  "key14": "4S9cCd3tCsyDoHUY26eaMwZpB3ycREUeop6ySLzVBzRS29oQmuK2kWT3cVu7mKTPHzncTWwhXkrQzoku7omuVdMX",
  "key15": "2oX6NonZ9chq56V4GU7fobsqQCaZ1NHyYmuDH9tvnMZfauAC3XbSbCsXvTpaZvea3FzQMFRmruTj3b5wMgaMbR7T",
  "key16": "aCqF5Xn6vuWTRMwU7EESn3KmYn1zop2y3gEUUt3hes8sfJgvStggYHCEKxmrNiDkiXub5mkjBfaRJPRwGVCpQRN",
  "key17": "66xsAaghZuQAzSBehxH35WJv6XmaWoehbautVXnL14fuFfJW1ChCdnat7AbM4D7Aw7dts791KY2j1TqhQ1pmrDBj",
  "key18": "5ScwAR46fn2V39q6y6CBUCx1cnsfsVouNbzrsZN5g3FvYGXdkhf4GViNuH3R6UMi4DfKr8d4Xf1eCHcDSQDKVG6L",
  "key19": "1eWfoRWjeJ4BgFEQxwUjXfzJmQ7Fk5VxKmVv9Z8e6JZ8EUkfFpFwmopEgykudm8Rh1h7GWrDGd4r7uKfkTGqJQe",
  "key20": "2bjQr2kLWcRU78ZPmu62SxN79Dg4BKmAm42ym1xdtce4QzH9VLCWtNWjziAHBS1bfePezefeZTSi1U8KmZda8yCD",
  "key21": "4acUcuuWmrHzz5JqNAhC3LzoxasDu7WQRtbne9QkU5EGST5pHC1hjpSDh6jZGtd9Axgfs8cdqKGhH79psspsg5gw",
  "key22": "2WuU6LHK23pACiSW55eB9unRzUJBUTW1uBrujvFVPKKaGL6PbSxdCpNhZkPxAV7HD2pWfkuUfq1zbPmGGpEiidsx",
  "key23": "5ZKGWCa4ovXeNgKmaQ9TcGGWH1iiz4WnjhfLmHL9tsizgaVjdzWEXoVeEuXbzCDpuMTPgjNF9spjFFvBV8AyJnjn",
  "key24": "5nwDyvTaf6KD59WvcFYLw5669d4wpBUPbZ6Fo8gKxGGEw93nV3CQbffDwq2GzqeXLS9qQQVYziRSSopqSpDY78mE"
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
