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
    "2bHvfS7xeaLPK1cwTWGsWyRUv7QVvwtRRMybysueBmTq6cQDDciwhDBVEF3WRDQdbiafGrtZRz4DYN3J6Kfbnge3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQ8monrU3RDR8v1FnhfhwKqqQ9atyDuNm31JabAhuN3uHYb37XPiE1f89sRSAyuFBombaMcyYVM5RKDV3zmBTmn",
  "key1": "4qzogWiXSNpMbm4AF5cJuQ91sX9UfBoupG76JPnUvXn876sKRGC6wkVPTxhUqnNTh3r6cUhHn3L5YYLmJybWvEjy",
  "key2": "4yre7W75bRSQSuTJuwa8EY5jmUHNwkh9jdQz9nEab8qL8ZKKpvBgrBcjqTDqeGgM6Te5kETFWBUBbMS1UvUJjs47",
  "key3": "2vTGrvZSEYfLJBAXkJpvwp6r6ihLwsEUobbumo52FNkR86YKTnPq82CH9aG8ahMddozj9kWhMKNF5mqQ2ryeLFeV",
  "key4": "3NpttB3YxdEXuJTJamRpXTHDrgF4jtjcoSY5faYT5TiktptHPLmvWeeaDTaAEnYKmtLNZGTbtXe7wmPHJh3F6mjn",
  "key5": "8N5fgLi9Hhn966kKAKHxVod5ugnmLkt8riXTAgniKsdRVKdhY8PQmEjJgpDXyjebpyWRG7FLKrQh6X7x2QXZGcZ",
  "key6": "hqiD5sKi4Kp7NhwmLnDKTmStv71nLVdjMvZEiBPUV1UD3NuuUgYqdeu8vtt5L4aaL7t4M4XxqSx6kqmjhH5L6Nx",
  "key7": "5Rm41Zosq4CM1gB8CAn8p5ZML37xnSG2s7Kwmbnr3uUZ7fGo1eACjadNaksfmX6q5e9o9pLkv4Xxkmw7Yfmw7t62",
  "key8": "4n34bsYvnNXpvVNoJxLtxeiC27m6MYzDzw8HLSKeK4R5KnaNPppkQrjsvcPuodSSE3jPkMZbyTPDWjSY7kZ6fjpj",
  "key9": "4qw5mFwEK6bGefh1Tz28tZZ1PHci3zQZAgKrQZe8C9wPBmRdUAk4GDB3nZXvTidgnJWiQjQT1NdKgcBWy6K5Lkf1",
  "key10": "5dpJhXAkso4kBvptfKcqGqWC4pDEBsc7BvVEWkzDpajvyjUpEf3P31rcWnYJDszeLEbEn51PPcQdg95jKhQUMHSE",
  "key11": "4A5KxFRvrwG1qsmKz1Tq4twK5sKK2vXVQ1C1xtQpqWDcw6gimtVAzY9FjaLzoxY5QYVgmrEsqtTbPgtnoe5zQBsN",
  "key12": "4Uoy3DUEMjHTUUmWHd4GrB52hZZMvepSj14t7vidZkPdyG1ZUpHRUekF55SokBS9oYLK8uSLYXTbC3WyjUvapmTd",
  "key13": "RtTqzRbzPuXGVAtDVyxgmJYoHSDcreoDjznhRPcHamc2a5ijSyZAATn8E6znXbeFfNLoSzP82aBY8drkEBqFF2J",
  "key14": "2usUQncchnm7ohjhnPQABRX1EZZNL51HuVrBKZ6WYBkc4dE26qkKNFPQxuk5WdBsQvvegQ2BBQvVFpfaFyxSCBbS",
  "key15": "364KH5D73XXJgrz7HzLePV8karzuLsB3aMFfoQ29Gcnxumdm6cvx9Dh1sNQ67zxSSxmUn8HXkfmRmUC1xyGAxG5n",
  "key16": "5R3s18r6ZUHtusMvgN9ZHKP8jpYyhYKSBHc3UW3uK3w9HesCDasmt4jK8u4mpDj2aRzCtuCXE9BKkDv1WMH7wMFS",
  "key17": "eKsmVKph4nDx2baqqTW8VXHQWSyGTQ6uWAejieSZRKksGAPUD7AYGDY39P55ATmFYY12hrHwtaHqFz4UbMFiuu9",
  "key18": "56XWu9LEVY5mhhs2MGxQM4AHDhxrED16Rhm9wd8z8b1gWMdvNLD9iBYezHS4ULZiVCrnjeUrcWDFedJV7MFe5G46",
  "key19": "rWvkM7EJNhBfbRCkh9e9uxv5pTcSuXvdA9Vs6yu6Cg26en5rvJJyy75zm9hPPosCrnfXd6SGbJZATpkr45qBjQJ",
  "key20": "38GG46xPuBUNEHnM54FRriPjfkWZ18izKgMLzwjKDAdRKLGBgjuWkpks4wRbpt4HXxYRLvaXxSP2t55FvB5zug1Z",
  "key21": "5kSy5v9iarPcgy27SYdn6MLH2s3H6S1uKs1EXGS3RRCWR5woEJzztb5Paec3firXdJVxGHeiX4B86Mce93JR8VCV",
  "key22": "2Lj8kozDJ8LnxHPC6xcbidmSZjtZ6vBmJVkNt6Gvrc6pErnEwJDceGxrARcVj1HiUBb9S5cusTjiRE1UcuVrgDaL",
  "key23": "3CtfU2tZor5eDD39dTis4BxEtnMgefh2B77aFcihdA1WpVTmxMLUXiVsCTLgq2DwEKCjNC2rcpJ9aF4ysuSTeW6n",
  "key24": "4YoPMqTeqKb5VA78TcEbTViiKDMpLqGYKDX4w26bS8vCfkqV85noHYkKZZmeMQvoCGzfCv6SaqqhG4kKWE2q9nnu",
  "key25": "44WrJmw1TNe6CSNfS8fNNXfngYsvYSuXWtB3AfZhgwr25VHXqcDSqrhiKFQAt82meGjKSwvsAGFDb3qCEPc5gMdC",
  "key26": "2ErL22717FYqwHpYD5CbjUeRA9TEYuanhvtAPy7uuynzhm2gceYVmy3MD7sn3Dm7j33FgWiceuCinvRNShYm9GjR",
  "key27": "VPiRXp7GMpZt4cTZoLr3kBv54p7EGQM4CBt1Nupo7gfdap9dLrPuhodCBoedRzBc4cFYyNL4kAn5PKApqVKikXs",
  "key28": "3jj58JmRRDXQ4B8sfydndCgzFkVHJpP3ih8kyuftFz1xYZFuJzjWXtqrJKFzXKMPtJr6pSYPzfcQZpecykLbiQvp",
  "key29": "3VhD4WcsdBG9h3fZxpD9ZpHkFgQV355wv9tVh31cftbtmVEv7arUBdhybRAs8dJQB38eStFNxi6dCFUHiWicBpxE",
  "key30": "5JcsxpgRLtz5XzuJcD25HfdgU5u5ez1DpW9ccpqzcVuNMemSaFYn65f7kzRGWvTCgKZVhjEghtASWkmU4najFAPE"
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
