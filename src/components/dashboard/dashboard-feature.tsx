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
    "611qmY5tBEq8Y6wTK3eoicU44B5erJdtsUtEQMspRvrtmViYo7kErmis168VUjANCDajJscH7MWWX9ySn3b4gJp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zuTAJud5bkRMQHGWR4puJziQY3d1Jpzk47qJkc9Gw1U8Gxw2f5cmrBuBasZhACPz3DEVXuG2kac8d3LShdQPgc",
  "key1": "532innxeaPdWohxHMqKaiRvBmZyUgfkGwFTwGhKTKsiH9JHgXBWEss32Sk9FV1yANT9ExPmcKSMkYJkZzmyrjU9E",
  "key2": "2degexBCNTmEgosK4PrgsF6Z62SgQgtcjfMYoTSNJGeu24p9zbLKJgAkCtiisYSpBk75uwAvwdLYjSs2J6ipgrDi",
  "key3": "3FFMJjjf1Ggs7cn9V942NXkrZvC1KfUhmyQ7DAZjHyabvrWWxGa25i66UPxZpQzzdq9fkjNzf1GjgEiCAnuDDjxB",
  "key4": "72FGnQD9ijy3b4GyCstbrPJCJTZdBWADVzvPUHXMuMV8BRQJfBFv7t2FCRpbrY29Z6W6cuLQjf6fFHgvCVtQPSC",
  "key5": "56GnjWqBobb1cbLQhTQS9VsyTkidgWSuxMBGJjSXPEkWU4h4aApyruQrG5wU457Yy4BLtURkuKmsKSUYTiXHjRyR",
  "key6": "64S4uELYvuYB8gYM3Tk9pRq6KbbE5xgXpX5UHYB5aXLZf2YkexzzFDSuyvjjxsQv5fpD6H97E2Zxfx8P54oXhm2R",
  "key7": "JJkP4PTNT3njRyA6rdv9HFtqdTD7YqRJKtC4h458JuwFfYQTThT687NTtATQ44Qz6BHvKSSmUcYSuSRNXehMs53",
  "key8": "3C6kU3fCaYRhzpggasqoukkcWtj9jtHGBuyUm6ZuqPggLzQkFEyqx4JZeHVz2EnvgRdN6xLCitWPrFXJBnb3wdr5",
  "key9": "3U4nEYpEdj76WG8XETG5QFFAtRwcEaXZNAXjDmjMW9cP3aKH7TKdbeAbCoPJkwtT6JqEYQkUnZbEtMYTWDatXNBZ",
  "key10": "2gczgtxj6knsvd1PZMqBPSwugU5DDh1nZgt24pgr9gTnY4zCcSA2qymegLRKcuR4wALhuZgpdoC6VwK7k6fD4Rzq",
  "key11": "3Vz1ukZ9fihhHKps8Kb9jcLmr9YvyDat3BhsUmqMn4TPDoFsR5zDwMV6bwfvCQpkEEgMchBd71D4bbMK3uDAFBu5",
  "key12": "4XmdecpwBJi7gVuPu2pVjP7yykNnd5KGbj4DnHHTAcnVKQ6jc9Bh8FaL7K4o4gprT7E3ZZdqpVgNE4S42whhCs6v",
  "key13": "4jWn6L9cMaBsjYPTNbSzqxVcRHoiuR73qDBV9zAvKAp3pFLSXTraqHNasAHR6zjog4Matf7JNENGAE3Y55wT8u7w",
  "key14": "2Dm52fuxnkC5W7FmhCDPaw3qKG3rtrsV1E1wU8Z7X6EDYqnLD8w6rt969HdaVBGUCLmwNURtVJBixTNSVsgsm1sb",
  "key15": "2RKuhkp7r7216EkPiM1b4wn46Ysj3QtgASbD7n5X2DGfgTmTMo1UsenZfietRLDgpp8YnoHADUhLPNiCS5mBt5DH",
  "key16": "xtebC7NZF4JY565CTcGf1kuYSb3Ss2NwxW1X91fb4oUznU7KgCMm4bfhJtNq2HKuU2RMo4ptR1fSWNT2aSsiYdM",
  "key17": "eCs3g9Hq47wBZJRy4m6hyu4bUHTjyzDrFLEETFb3M9ZmWQnaxLzjVf7qrMt22dJXRr9CyDqEDBnNf6UsC6iSpXi",
  "key18": "5dby6JpR493ecBgCXQeYNsrcvbvExPKEYwTEPh6DT7ktPkomxGEZXZP8TgHmeA9UT2KN9m3BLL3xmGkTN52qKHfa",
  "key19": "3gu1SQVqdZy1WVNmSYKwEUmtW7TDv1LtuYAxr6P3zQDdsxe9ozACQ7usafup8VX59T8XkUnF1XejwLSAmVipdK7h",
  "key20": "5GaHNK32Yw9gXzze2D4vkWFtAH1NEZck13iuYrwKxCxaNBFRgpCxCmBUY9RfqLWydqNCAEcJnNJWRTbGGtkPrJB1",
  "key21": "3qDFe5uZ8WHH4RRPiCEPBKFM3GJC3eoDbZuZpNfVzKd8zWnbMcrCA5mGJpcN5DLxdbKtwLbf8kodvPmQnCzv2xVi",
  "key22": "454Gpravnj5LKktA3XRqtChCEvAdYkgXVx8D4YVyUfZ1hgPkcbXiFNhLKgh5jUH4Qu6RgJCsy7gcCAK6KF3FvJg8",
  "key23": "4nLhYf95NJqAL4HwVrwn9BE3UMSDe3dkzcJN4a5rgQDy4P86k5eM7EzdcA3uDzCsNHBwR2R6CWAnCNbDgGS9cuun",
  "key24": "4wCA1kwbjgiy2QiEoDZuycEWE7Gpitrr1P3nonV4qk9svYgyae57toYhvWqa9PjKaRnMSuTvpcN3vswAouJ8mPTM",
  "key25": "2mJjzWbt7VthYUnczwimPRtnGpfgKA5CGnH3V7kuhCrntVBARhkRZCbgZnizyrja1nRsePW7rmR5SDt79Ra3sWCQ",
  "key26": "47CKDZENF6b1YmD2ipvK8td6UNHD2PVNkugzSmSEKpqY5yL6p4if7nVA3cdgRqnCviumVjtrUnA5XiTiVvwbtExY",
  "key27": "5FKgVhPs7Exw7o3UPNzvpym1DUZ8P2T8VpLudLcJyp5ezyyLrw7tpWjxnELf4jRrQJDQZzmyexRMkU3onmRsBH1y",
  "key28": "5QC8hQzSj7FtZA8f7fRuruDQDqivJWR7VnpwJGnYVPo1yPw8TJoFTYZAzcckP25LvgPHGY3irhBfUoyLvczhh4TT",
  "key29": "4frDZoez7GKqc1qv4LhJ57Nog5QBd1JGrRfSwGutPm3UXdFfE3K3WSHenyo1xB7RArpWxPwNBaMiFiodRMMqBjmh"
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
