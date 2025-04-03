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
    "5pRbnbaMF94pvKM4Lz9se5iENALzYnLtRfKbEwMnXrTVXQzNSumJiBSWayMgu18nDMDysne5HQptC9syZrogY2rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2vV3URru4RoPzxxEHezoGTieREjGaTgQa1FMGCE3Qc9yHHDyX3qDT58GEkNqg3jXenBJADj9gpPqi2NHKr9v9j",
  "key1": "5EwrwbeoQS1phYcJ5KwwJBXQq34wLV5aH1dckT8hi98LzPF9LWmqa7ez3FsygoYU2qGBdSawdNRUgeJd3qYcedV",
  "key2": "9TX84t8V8298Cxap9uy7G5J73i7f15iAq6Ft7RxeK9exzXse93cb4a1r6qtuQR9Xf4d1hLDGhEwZugUzuCcCcQY",
  "key3": "5syuwnXc8URNkN5DcxxT7CavrdL6E6a6p8xDeSL2qh48rzqXYZCQ8UVrZ4ZKAWzjYoKkbJ8D1A3VcYc9Ytn2itcs",
  "key4": "2cBbEGbbhFZJQQiu8cVw9rva8bHSz7gApD1UMV9SknmRPUbCsvgmLpXkwpWTN8ktiLUQ1jVNKz2GfP9c5z6V3cCK",
  "key5": "8uSWHwaBWB9zCLS1Vg9fLXDefsdgtFfvFhUt7kqikQrExdarPgzvpj5JD8k6bRdWszgjHHaaiV7HgGfcpVPMrpL",
  "key6": "2ivquduQyZCzLHnu5rwfsV4iAsXyYJE38xGcpDbphHNBvi3PpYAewaBfnGXpAVmyRV6NM2C4e4sY8uhfr9njzcTS",
  "key7": "61ZSYXk8wRXRbW3EsWNeGfF2Sn9MK6X7U4L9saLBrz6MERhaCXRi3KUBEzm6Uvh4CaYKJiviubQxTvcJSpxe25cf",
  "key8": "5CEWNPDCz1J1XrZVuDzqMZxo8sxegfdu34fGysLh1vuPvDZGYjYZ15Kw56WVhuTmLxEGYwPMiCUSwR3qHEDnfoLB",
  "key9": "ZWWFmBLFsacD1d7KTtUaXBmMZk2Knn49KMf5vfButgDr6gBofueswHqqwor4zZhFBwMPh474BjjmXL69CJPg2GH",
  "key10": "2i1eguv2vFgcKnP3pRhg9rw1qBdFGNy1iw5QxiwsT94FugyiMpih76WSezv2bXuBZoPScNhwjMKapztmpD4tG4kg",
  "key11": "czsrnqgTWYWA3gCtL7q6QcqmvLViGsNBrLN8r7ryRptdh6rcq8H6ogRRX57axYkBobg2Z2XCznZWhKZy3JbFj8D",
  "key12": "o4AQue7zD1XEnuE8AxddXCxKbqsUrfdw2cvNZFc7w54etRYMpmRAGk5vyYFqHsJf9UNG6TKkEfKHFdGzrTkeEbR",
  "key13": "5LiXXYhXFqVXgJEo5w3EhmMJuy15QQaBPHCkmxkYutqnZMULWcoXS9ZNiUUBSBFZzsVuYr2r2f9JA6Axa9e3T2WQ",
  "key14": "5SZPnmJCZXniCfFJVCx4vUz2bYWMGueCBtepiGpZ7jzH8j8pv7FAv8dHZqMLcvWaVZ1EhwXEfajFoMH1TqGvg3Et",
  "key15": "5oJ8vsEGttMyePSukJ6EvAKbn96AFE7eNARpuaD7tZbiPDRy2XvJb1NjejeQSSkFQreK7aPKRZqRBtPdUjLVQ8wS",
  "key16": "TNXGsajquHxRtPPQiUYhvySCLDtL7vDL85dkv9fe4DXWUxsUWxF4G95z4hzX2AKZ6Vshu1aKrznthPZdPCRBuCo",
  "key17": "5fSBAiL3ibyBG1Gs1soWLRaWU595mpnw7itob11XNc7fDhW3opn4WfjbnYDe89cfd2xmVCLnHhpwtTb2h5q6rmsy",
  "key18": "3HobM6yJKQEgRmMvHSCR9qSBiow6vzLqwvQmWqSXVDPgrBZcZfhGE6tmNpU72MQ4XrTb92Hru2vUSGPG52He5o69",
  "key19": "24ooQXBdvE6Q2pr4amWcTnqwaLTaZ8BBXsr439LUiTriNfcSJDGrCRNNnYKx6sZ2uaccBKr2AZRfazQkrpvpyQTB",
  "key20": "3yqqoBi3M4gF3UpUzGxHWBQoy2diBzgjvfHrZFGTMCkbWLa7dtjGCARyA5UKGXhs7nMGrcLqU4xFYR64UhrYrUF2",
  "key21": "4E2MYMiWyxxrRmK39KaAtPHSRR8duj9fHdhsukzvKa5md3XfmZXsMRrE9piVNLMEHgvXeddTxDu3oLixpXYysuBC",
  "key22": "5wbM896S1fndVBxaDHYm5F84gsF3onBoxzVSU6xx8BC3d2c7PfCAXYwNpbsrt9EG77dL1FK2hbeqXCbCj71kKjH1",
  "key23": "34skF8LvqkYksFhtwKA5XPnZteCEhesRv1jjCCdPfopV1xVwUW9P1wG1aUJ2AiywdUcHQsXnhQJvBd5k3tRcx7sj",
  "key24": "4HjTaDt9XysQG6fhm4ZxTEQbjaWkp3sweDks8hSztnXGbHF4pM1p3iZQtG2HnpuniuGsWKVoop77Cki7HPPk98nM",
  "key25": "4zx3ozark4B86c78fMrzTHbwsPEb7WJ2SLHZEBiDPKS6srQ2FPAGuA61pSJ5JvvCz46oXpMpudEzEuABGHNbog1X",
  "key26": "5krshKYXHq9XMyDyKTyJm51PjLZcgVvZFexpcnYHXcpWskCdVjqc3tcqzneqN9ZrwNtj8kWXun2f9QtAmqSfP8oF",
  "key27": "4dkMCBL1YqYywSUrbWJ81Cq4UhQ8UYtU4PpJ3vExGfxduh9oHsiXihBCBw91GX4TaoDUuaaAMn7DTmE2C4Cc9kL2",
  "key28": "2zdSHuitJ1Tpv9afqnge5C8uDpinCRkKJuUds4fCfWEDcAzNGuMxHcqeGnsEwZ4mqAkTrNux5tHYbZKVXxU9qY9r",
  "key29": "2ecFfoVK2Y8V29hGp9TExwqtSyu1D4s28AfogFvzivdT1fxbk7zRqFjD2X9boKDMdd6pTubAJaKEiB8awcRdvmyz"
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
