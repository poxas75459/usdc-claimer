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
    "5CRWi7avzhd4frqsDX971FvskQmwuycQ5hdWaGPgywQeaEirKr25UDLNi2VgszbQRw3bP4igHkocAxFrEhnAgoLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnApRFyBQxeTUvc733c3VLww3scy8yWqLrMAxxd1KyGW3dhVz2YWvFBmpGZjnas5egrvhuGkvcHxF87JfyPxTvK",
  "key1": "5ciVSBrQWX6w8Et8rsdk9nJrVJ6GPFmFxbFgGHJ1RmQtMCu9siXs6BLGe2hhyUz1sPBqL2JYsuMxuePe4T1jHe4H",
  "key2": "CbGv6GEeYjQWb9jdNv9RMaZL2K2JCA1ntv5FLvvxbjsnsS9bM6VWFdBX3ywSupRPS4f57xaSrqd4iiV5zDXvPti",
  "key3": "5YStLBg84mVsqk8Y1Aadxb8QztCyefg84a9ioCWPnCUikXXtPnEzaJLHUj6b22Kusd7vy1AD25nwF9dx948peXsv",
  "key4": "22P6ny535CUjCBANUcPcqhuC4pkVt5FQRpsMhmg5ggdBiyyjAHr1X5PqxmJN7EopqJAe5XASfyPKhNGMvAEqmrau",
  "key5": "36ToPGuwiXvEReGKjipnQZ5Cz6xPv7uorfeAcCPGpg3eSenRnu15hfrAMYTsLM3wJwkw9uYHsEAKrEZyxKpzmJsU",
  "key6": "3Ub5jCKFLu2Grgw3CyackHyw418TM8dB8Td1yvMUdnkSeew7tjoScT7ReexCppPTuEL4ZXwVj8vG79r7X884iH26",
  "key7": "4yZDPAcfAmXoYuQdzjNa1QTk4XtDjd1t2mbrrKS3Srek4yUFqRb3HfZ9zhadf2UrDwyndsaTDYTTbLZeTjeTXcQC",
  "key8": "CqRUDdE8xN6RAuk3HtWP9PWwGrbgEEP1KwJL3xV64wCtip3n7JHUoBM2zyG9n7yo3fotUt2MoBn8Cw6YLpJ5uKV",
  "key9": "2D4vNmqXGouiQLNKYsckK5emtZLPkpCY2fybntJhD5X4aZBj4Sdk8MShp1yuavZXoj5Ea5WxXsXNKc9NzQUgpLh1",
  "key10": "3GuX7bcLhYptxzq2FmhNYJxuQtCAQPsyyUcFhCmG7As1rmvRgwHThCjaHBmcRhMNP2g87jPnCc5pYarwqFd8Gzmu",
  "key11": "5bZc4kY8gCxG4h7VVfjswjSZiF9DjykRX8ozbG7RW9sE4QAXk876q3GAW6aeUC8MqBfzGyTMDSkwrpSZFUmSJaaJ",
  "key12": "5VjSRHfvFryCu6f1oYZx4ZUnYwFH7U2GiNQpXeHqU3dFisyMtYsmmshGy9RG3bUQrHdEJohawUWw45dFvW1szG99",
  "key13": "2SJCzBsEbJy4kTGphQEGXJPtufs3PJ6MHAk7dTYMk92sswkZbTCMNyDZh9NaKhvsyivs3vhHDUeZKcymJ513NzCc",
  "key14": "4oaF4oyCX73r4Z1WzuMdK6dMDqbc397hMfUTaVztECpogwPADWHoBbsE3c9jwaruWuYKqy7zUcfS2T3aYn46Mz9h",
  "key15": "3wUKCBQNqJTnEaq6W7ZMqZLRwQhuzD1HHndijgYzP6FoBR7a5K3gG6mhDmbwkp84VURSHvs61K4np6WXgqAKe8vF",
  "key16": "JiKHFMfHHgcJ7rRcgVX2GxMKSsdibbaxdpMKFJU4obX7rZE1GsrLeqTrhLALrE9CUhmgs7bPoXsCPnXq3WfbgVp",
  "key17": "3bGtxp5UJESd6UcAgZiZyE7UzDHPV2pdv9StPCHchQG7MCcs3ovx1t5jy8TJg35rYS2N9QMtxK54z3TfNBRqK8LJ",
  "key18": "34MCwu3jrYMCAkrERfgePG2GxcAme5ALy3Ss7EEmEFwZu6RkD5WnoWBiuuwkxTtbHx5x1PzV7p61UNAftW3NVK4r",
  "key19": "2AmiTxV9hayFgbuYwU56axxCyuNV6aC5T3zf2tD82gNCs8A8HNciVTr5aSZwhKF4E9MELLaz2Fu5L5b17JwJvy24",
  "key20": "3WDuoEtm9TjgEUqKaG1ztpMYVGdULHAk3s2ZhCenuPg8mn9XYsz6UU9BoB3kNApQBs8sJLQ36KjdPqqTPgVTLH2B",
  "key21": "5nS6ahSCmwuwVHAibwVGqZFbphbizmw3M3d327nsyNSxMUXW2hUavVHZYbUuTwTxVuzVScjVsLcuqgz7xgo7i3d1",
  "key22": "3P8DS5PxCGyYPMBU6rV3YVHRk8KRZFJ3gBQiUR2Egq6Vx5tjkeySSdF5mKKEHWYHtJQwCZXwymZ7aDupEyg5goXv",
  "key23": "P5sXwgb7pL6Rt4kmyLPZ1ZaumqCaUjNJrwEH7DmHfoDH8rMLNhhCko8c5aqeinGK3mwy8r7jYd6pweeuYMhQDi4",
  "key24": "5tmiaSSPof5Swz7xETwFEqUDPgWmo27KQCLCQm5RJeT93Dnq9zcRaRGXbq8JTJzTDkuyc2sYwYK3TCvYyxaUJLaH",
  "key25": "2pG4aBmmMLesQ8phiVyBphLQ5dGW9sNQx2n6dV8VjqqpSrKsnfjSyX581TziSknJNBKzzx66izddTq4zgUZMkT5v",
  "key26": "CyZi9roRT88qyxjjz71rpH7SVhU5qNamgiDe5okFW5WBEXgq4GydZGaNppUQkvhAwNyrkZU5w1r6ZBcM8WA2i1R",
  "key27": "3KXEGfyHhZeoWF5Z6KfUoQ4Te7HDf3ueidSSQgmtD4pEDvNrq6hcKpEJd9Soksbu7wNzD8yiiKKf2YBi8f7o7vQb",
  "key28": "5V9FNK3boGPc9uwVzRAPJYs2ynXCCCZrRq8tBANTATebNXLuCjs7gBzTGMB34mvCJAGKfqycUD5UR9thnbhng6qi"
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
