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
    "3ryq5H8YywHinXn3mkxp34oS32TzRJNpdUPejfAGKKosHuKvkUegpvz8WZrpoYfyDoJSRvhyJEoiUQ6hKb6kmWCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hNtbi82GLy6WU5mDKWzQ6TYuPWAHLUqNNBDTCkhdnVKyLUf19gGGNZkAEtkQiHk61BydmMaxRTTAW4epnYeEqf",
  "key1": "pqFtE69kf35RzgN2Xdrnbf2XMunHWkBC9G1B8FDmYaUTjEsgSaBWU7iHcS5qqU6zaiPt3L1uSneYY9rcwo5VmBH",
  "key2": "bDQTCUkN3vp6czGqz6u1UASAtFAHaxpQVwyKp4ZfbghCim7HvhfgA96Dw7LuCziwpR6CXZBVN7UgphM94yZjV7T",
  "key3": "5Mdre4TipczJfyP5hxvvMW3HQTWGNCacABRA9WiZ1k2yRTBnmWpwddGR1YDxVFryWSA6EMUo1n1KNgBgo1DreV9L",
  "key4": "2qgqjs2cTA6qcSfZVfURpkopNP3oWZ6oknAKXzBhDYwRxKLPt7GRLv8tcdQRFKTdKLNdQkKmNwFgiDrvjD9ZVjLj",
  "key5": "US4GGVN6V5sRiqEig4J2pHn821t7qifd7r2JMS1LG1fbtAEnNd3qw4mPsnooLMEXAFfEiTX65mpAVcKA2Ba4VJu",
  "key6": "2hgFJ95tadJyPT8XymEVBrd2TiuUo1unk27DfjvvpTkmpdG6veRko9tMxVr2C95Kws5Ps8mgrztBytycEFqPxjAm",
  "key7": "3aqzxjmY5ySaGsR1Pukp572ag67Ltm8Tdn6jbgj6j5icBeppBiWbSPHXcfkV1TXMEyb4g8Nrz7ebW9Aih7CkYtCa",
  "key8": "479S5iahFjMgPVqwVrm3h4fU7q9EFZ3Ch89jJb4aMxCjQ72PBfVksmDNEPpxFH6BF5p2WUNK8XN1RFWcVjmwQZKH",
  "key9": "4hiwSxmUFKmd5112dLn8yYp5P67gY2eAr7TQbEBuzUx3a4jsqP3phvcX3sK6w4M6itt2hzjWXAB1eQFgyzFyjJRR",
  "key10": "5RokSu1j6D8rwigyTB8wmgJnQZaEGZbVFb7CzAYuMfNhtNrCLpws2WSkd7HmKFRrkX4i1mG4QEjRwNaSDQv6JpgX",
  "key11": "5sdPA8Dqj8LhYMpRSyKi2xTXqDwCsRx9Pbf564iaCLwucWUCwpE8viwsp5UD3bZ5iAYjcGcM1RafETMHmr51GApJ",
  "key12": "2ALoiNkFJRiSqXgfBbTa9qKoPhzYCot2zHMdbbXfJTCv32GWSDEPVgLWeJaLKwxgw4BLK7ZcKyF84godmH3mnBko",
  "key13": "5CiNT8jXLZYf2GqGGhwiyzamhiQNnSG54me9ZQsNC5yeAi5VxdLEj19PK3v2EqKpNaqz3BVQW279y2pZGR7ngVJA",
  "key14": "2y9ScD2uCTnbgAjaxmkq4PRhyqSaa5BTg26nzqBwsa6q4sPf1hqy8Dy3KwSh3dyRw9xEft4Ksm6aDTokcMjkWJfH",
  "key15": "5eq8eSE2Lk8Ba7V9AqTQj3yUDEmdZiqktAogvucLYUJAyk9mzhLPkrJDAbdoJK2HAW8YYix3e6GhJsE9skbcei7o",
  "key16": "515fyopTLmZAV6HgT7hUjhUhDSonuU4jtLYPkFRYng5ZKRuvN1jq8JEVi7X2afSKe2shHLvPUuVferHcYjykchay",
  "key17": "5FTqZsig4HaTYfPknbgGeosG6vrCv8QY1RqqGxxNeHSAM5r4a9X4SY7KAgwvipjFYZgxCKYrTY7XxwKZAJbF6qL5",
  "key18": "5zkd7s8YjfaDRRA7PbaTwTZsWGSbCXfA83iXgKWrMcfgmCW2rz1NzAHeXt15R5fifySiFBUG9jqgTNAsqiWNTayq",
  "key19": "2yuqGaVSjZoQeFByTWUiDyhfLEPYL1HqTJM7RstBnN4zZ93rpSmJ9VUKtrdvfiiiuCqQcdmezdrpiDumYV4cg1xK",
  "key20": "2m3y8UwjFg5uwRBMNv5EqjWL9hpA7Yt3XGBtyduLduR7NckmZCsBVQhrYjSRf7hy1cUzMtYmmwBfrwSuLtyWXn2N",
  "key21": "ShA75A36iw4u37Jgc8QGtQLJffFGBnJW4fbDSo4fYfKVPZtJRjsWX6fDN1FNS4LSk9tHxXrh7xEg1cSMsacApZ1",
  "key22": "JJVJDrnQHipkn5oyS5w6Le5NLs5K2h3uahSGM5hKu38Kkw7c4ZWrm9FcBLvEmvQr8qo8iQC82WhoYTmKm5i8dFU",
  "key23": "MhV3rRxXBb1CGHg4HKroT6jZw9msq4JhuQLdeg4VFsSWTqKiZtqtjCaFW3THVUkVRvUU3cujYKgEtXELZMws7Z9",
  "key24": "49KYLgiENniSuT1dMMv3dABvB4QHy3NTnFdBr3vwaYbWSfhd6K21qn2dPMMRT6mB4x9qWodQUCZQ2Xknty7oAT58",
  "key25": "3KgAujHmHRiLUaFvA5DdGcMmTMkopxg4aq7RDsG61a2J35JicennK4vGsEwGPqWx9u8pA5XFEXEuKLtbNXUv7f6c"
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
