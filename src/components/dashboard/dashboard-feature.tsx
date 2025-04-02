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
    "3ooXZKnodH812N493E5tfEi1NEMcjkR4989taAUwtkZeSzBLNnUeRu8UUQd4P1UugiPoXAtXRGK8Rdjxgc4da8KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVWN8CndkDTBPk9FLgpi3y3H5n3GpJbmDEJpLeZiadq62LS1vQYeuQDB6W5F2h5TinwUjysdA1peGkWzWuo9BCq",
  "key1": "4xEyx5P3mrm9xHd5c6dqDCvtV3tWxqcYu1dsjD9MohBst7rFFgmZvymHQxyfMJBkdxquWKxBBB7QMkyc1GpdwoRk",
  "key2": "4SZhRagR9dfY5nwxxuFLBoCLmSTcJ46vVjT8VT2PmWiDwYSmn3LwZD64JG29ASXpnJNLFKBzLbZ19vRojt2dm8fw",
  "key3": "4QmfiZKVDtJUznB3zHaoDPy1445CKevaRE1RnnsMXoDow5wM84aL5QxuTWW6Dd3MwBybN5QVtVpaVKUFzVj2Mg3X",
  "key4": "53deR47fC3MmuivRiq8RtadamLixuqJhFscQK2uqSLdzhKzuZ9DSEAHAoRt2ziN814Yhrdk4Td6mTN7P6jB7EbXf",
  "key5": "4saFinN3dUV3gyho89cWqS2x1sNxheyQAm59nUE4dNEvM1vnbyrgsZo5oEGaWsKdUK4rT4KE9reCSXy4jsbFbkqj",
  "key6": "3uP9S1qEukuxznzVLLQ7kFEhGDkMSAJwGRvMBSXePLQ7zLQcL4mnqrgsXfMr4qrLM4ECvyEADjJD2R5d6qRM9N1H",
  "key7": "pnDPkihKkpBt9fpqxnWN3KWRJh3DVaGcNzh6XvhLaCqNEBtgJK7XQbLmn9ekhqc5HAxdu6MJgLCQ9gJiG4a5V26",
  "key8": "5ABp3FJe7AyUNWTLPrqWXiKdVFGsEdA3SDk2i49f2p2zgciTUghjYtxpzPedPZA5psR3MpqpYhRcdiSgob8b56SS",
  "key9": "2XuauLuerK9DkYCQCtmpR3qxu55wBnjNngJSLivqx6zfzExuo49CLWLh85DK8kX3WaJK8wPN5gqbssLZWeZzM1xq",
  "key10": "39Xuye4nZh2KU37aPGJw3tdqic24u624dyraAsMycrTJKBDCedoLk4SQxrbsU3XGep4PQA1oQPNdQSRUcV6e9MXV",
  "key11": "3XSDuCodyS8gUxvetHeGyc74CsN9SLMkjFzTXNdmwVnfHHTooQEBVkNXStDaRtNUDQgJM9hWygF9wAWKfmdcuGyp",
  "key12": "4GHvYTsPLdfA6tQzgXwUqT1M52wywVHETs3VTwGx2siFs5yhYnJ666sFc19HZdEK5UoJ6YMfjEtmHHkSRU85pAFW",
  "key13": "uQPaBZ9rnxUED2jcpJxorHsYgdoeyZod5uMYU7WHQD6YorWmuZ4HjgVse6nidi82JfonvoT5qhRK7K6iuyykeR5",
  "key14": "4oBquPwMP9ceNZ2vnuHjGGrePAFX2qsqTNWApUboZKs1QNCShPWAw27DJCTk3g3AJDMBFyFVu8yyfxozgppnDeGP",
  "key15": "VfawQKUJCW5DfcexGviESr4CVRk86KGDvKwAHsMZkuAuCuTpEB7onznY4E49jY7NRh52RQb2nkszn2cgDrRequW",
  "key16": "KZkphhCWo6wiEUMRi1VKRHCmeKpyC7WhcsYDVBHaLvRZvtEB8XowHjsb3daa9cSJ6AVgWk4LdHvQ3kGDudukkhj",
  "key17": "tWgYuByuQvru8F5hKTyys8WKDEQNBXKs3ZXc7camnqxhp2Lxm6jSeDpvJKLdwK6QLTiayYFRwepojLbQzL38Q6c",
  "key18": "3SBRmK7kCd3oXA2zvVyUmCu7A7mddgsu795KduGm7xRYTCKWLB8H4VcSwD5EPWPCwah9YJ5AToNYk28hGqvhEmW1",
  "key19": "56Er5xfLCR6fXa46GmGRxoj6nxWDEUuJz8jYbhq9LCU4tC2g6kNvCCZHckySj3K1v7diZwzUEwnYrmo2jmc17oeQ",
  "key20": "5gnmRsqufmAHu62hkzuvvgDWs2GFrPqKCApVfybn9hc5PnpVwD4XWiwSuFwsM4cwvwFE3XGohxduxmpcSY7rAre5",
  "key21": "34qGt5C4zXLyybJuhtsmHhBspM3jKXXD9FGRbhBGfBZ5gsUAKfJTtJHK6xdYTJ3NMP8JRiAZATBsHk3uPa7jVNJk",
  "key22": "7Vi1QsTiHVqvTm1fu4kP4jx8KzZ1UHbEsMZjYU9thKHGk3fLAxdTqxphcy7oXydMAq5jFnLQNE4ziNEP3dvz5if",
  "key23": "63bYqgrG7XUHEGq72c8b6Q92piqCP9zHER9QAEbMmcFteYGeGwy1RUYA1XE7i129YtMwYbkncsTjiX1CiQZJpGnM",
  "key24": "4hKZVKaty7DvU3MDCp8SiYsZfca9Vy8XCKCo4ioMxo7K2QzczsH9oAErkp8EF7tcypLKKkMRocrwis58Grw15Bq2",
  "key25": "3T9x17m6fKPgyhukuJm7vFAvox1cxmx7k5sfsdiHnQjQvPniY8rpNpAGaCKZCKpN1WvqM6jdcEPi6S4KW4fVi6uK",
  "key26": "4AeoJG4zxg39yZ6bacUhgFqjdHx9dcC6ZUg4Mf6oJ8wDKRWg5sRX15W2rNPEA5vZ675E7yFKCvqdm9Bk9aBNB7hj",
  "key27": "3zAvV8xYAvoRQwFizCDaC7RPvpUNgex4LtHVHz8Ckxzpc6uuntiPxxEr7tggJwvx2HgTWNS7FxQmQ5ZvVNW4A6Zg",
  "key28": "5Mc9sLLQ9f61Ucpwn4PAMP3xf2ZLfcD4KuNjFh8XmLU4G1fNPxkUXvik6q6dngJJpna9uZaJqe6Ko1Vu5hyU6PBn",
  "key29": "5JEEuUhCMTcGsCDGua2iyXtUfVfRFct6NyLt9QBSSZZv7gjCZn1fzXESYrtd2bNFweYaz1SGtkLdhftjz8hBx5UU",
  "key30": "2RwstpGzPpxM5BH9qXgwpaayk4jbt6vpr2vBPMvnZ25H8e5m4TeWhKdGWF1kjc4YuRBR9Df9KqNCZuHkXErkp7fu",
  "key31": "35hRjQjX5qwFN63qaYSj7S4MVf9ZWfwAssqXTFQUHKbQekKnXgKgeEphwmNBQ4nstXjbXp99cvnJmkcDHtTDCBjW"
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
