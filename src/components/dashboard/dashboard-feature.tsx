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
    "2yxmHoFLGHks3rMMuHDq6YJgnNjJ6VTPdUv8jyBjR21wFULRfKkCcEJMUodyT9djc48GrUVrUi7yXpPQ4jC4XjMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQP81BeHYxYhyVLLdJctD2YimDp3RXnfAf6odX5LjgFFa5z3FEp47R6oiYzQjZSMHAML5D3rcUHirgoSWkwm8am",
  "key1": "2hdUi9nJAD8VL1EtjsQ7Jvt6pWy59DJXwdZetRoND3XaypQeVGrWnkmEhx6bAdE7mhitb6bJLGyUWtu7sMSU8eGx",
  "key2": "aHahURDeDHszKGqZN9Guu3GTS55c8hWgbpmizmQgudmz4VfJ8QK1g52giXy7NAi33w5L8f5jqhSvts6jugH3LKr",
  "key3": "21LL8WJsgvnu2oozGz4YyJ9VbpF9R8HPPgWxZqMU9obxDUeBGHLJmdVawuTAim1LqmcGA2r97sCsXA1yve3yo7Xt",
  "key4": "2BMVo6GnBaw5ZEXqNSrmhF2gjhFMkxdZHbTRAb92LzfWacHRSYcWNCtuuHQtJfSDit6F7XQ3KTPFgkuRPtX3k343",
  "key5": "QDyMfYFqxYmGZnSPZHbNA5m4jALmMzPesMbCd35oXitbHZZFp7DtHE1SfHAg2oHThAqaB5q4dwwkc2GaUSPgLMq",
  "key6": "5EEV4aC9MF2EianqoJjJ3pF632NhHdaPvB3obgfBL4ZHWS2oe95PjeCgY2D3Yoxjf5Ey1Cu1E1rTjFi7YoznpY4T",
  "key7": "5UzAnDBPVxcbTyFduaVvkqPgQ7f579bdHW9ZcuUimE7iakw2Y92LLAWaWTzUCuvy97Z7NVrPVDWoaRUMTsLKcMt8",
  "key8": "3Hk5h3TLzsMNDgbEsJytRHjJZqbGsDyGYTHonGSo9b29rTJNzh9fdjyqTc3Qk4hfaLeRxVgD2khX44z5wXc9gELG",
  "key9": "2yNGXgRFYs7fgwjJEmNDKC6hZ2Kyipj8SagjLBkRn3sSjjgPZTS5XMEerbG5qDC2quHXyvPDPBnh7HoFfZ22UdRP",
  "key10": "5QJvnmxpnnkHLMqZ9TFS5UVkKXMumTckHKttTZxyFYyjN5QYcMuupwi1K88f4FyWjN5oqP7QqEuN5YGdxMiXCe9n",
  "key11": "4Sruot9QvXCE2uYwZFTVkNpSdfNrmrAM1S14X1rjW3JF8tifU6YGT5xzVemNsmDSQGB4HzYcSMsxkbqp6YJ6TvFU",
  "key12": "YU3rnoEH9n432rDwR1qHUvVfwfFywifjJuUSSprzbcGMgcE9LQ6aBRJrKooJ2XhE7gYDHDxdm3jA2yh7gpdBqcC",
  "key13": "b1gvx9dwbesZhwqHh7ZdBTNaMEJoSk3UNpCts16bdXHvWh955SE8utHLsmL1WbCfL5KKJwtF8tLduV7HBQaiifX",
  "key14": "dqPZJJHgw7pmjrAmyjtnT2nUB2TGuvZJsL5dwZXX2ZmFTqfY9umJrXVCD2rDhg4Hg5K6a5sVh6UaztYhCae1Gm8",
  "key15": "52enXTn8hWL6XBzAkbpFg7GWxtBbnTiEXfKRuys4X4ayzfJhQD9nFcTzs3f52GSaAdwmxdQaqBCuFMDrCfkq4woD",
  "key16": "WiRkiXJQSWvHPVjabyhBYWn8T7t3xNDhygdaPTwo64vPA4tRgaswJQzBcj3Q7uR2jkE6jQMPf29paUijqfkbt19",
  "key17": "uT7QgVN1rsxMHHSgv8ncQsygcnNgNDvBLs1AbS2M6S4bQcQ2fkPTMtCdJ9GShytjaGysZTshxQGhUfLGyaoY2Ln",
  "key18": "5H4u1tGxd4u2MmbpEqDKX8U73UZnEaB6RtQ8nbxVBvAK72D4QFaRHyUGUkeF2k2XSGUU4kzDja232vXe5qf861VT",
  "key19": "4QS56ps63jW46rMqKEFre67a4GuNZ4aHRBHw3w34RZJ21KD4CEuXKuKxBWaLwkpVrELaAhxnLQHmvUupLrtMeAAf",
  "key20": "4UuwodAWB2SDMGZKmPHJfeM3XnprnbNLLzb1nZneLDwAqKQaAki9EvxfLzL97pmimAuTJXPwq8Ps7LXyiSoYZ5k3",
  "key21": "5KeANcrvg89bc3whRkfGSEDPFFGgpPTfrCMLdJH2W8qEQfzL6UQVs6Ywn3WAapgcHJttqu4jQ1BrZ43yhuhu3yHa",
  "key22": "4FgepnzoAh3VyKNFZZJStic3A6qSHHMDUryf4qyDgCrLxJPdV4wMQpwPKiPtTreWrahm9WTn7KjnkYC6unatf5ik",
  "key23": "2EPNhxwjDu9FAS8npaXVSn2f7CzUGK2t8CyMKquujJTq4UDSRUMMidGmcMJY27kWtbGXHpPtbb7nrNSYHgxGYeKK",
  "key24": "4jifSsvS9AQNPDb2AH8jJdgnmVQtQrVvtEFDtQbzDNjhmvznjsdyCYv2w8ocNpvVfqUM2uU1sUDzf4w22yAkDD4H",
  "key25": "39x93Nn6zdd6KT77AToWumJydiNSQkJ1VDXkyNDgn3VVzrbENtM9DygA7GU2ZPePaoDutoo9ASg78Phmd4VZAFEq",
  "key26": "5Mw8N2c3LmkGYHaL6eU2XnYAAcepFaeHEnNpojQSaEjSBfP5QBGTJghSAjmdXw3f16xeycvF1pvNfvhzuhWPXaxQ",
  "key27": "62ee125MqSSSfqwZXR5A1B2HHE6VDmnUZSk4uK44gEnuaNdVTYKgFAuTiqKwziG614uSgUvMND6aGvKsugVaBPrm",
  "key28": "4LZCYY9AMAYm6Y1yEw4FqaehTknjq5H8gPyui2mthyoEozJHE5RQLkcwKKFVJG5StQCMPXhr4wHMnw5d14SxXReR",
  "key29": "3ieGnHgpLqedsK8ikzWewF7U1Br2KYVbGRD8kcCW6811x8d3eCjSM3wdbW2WwjtssPt8Y4vCWEMC5FJzhXuwkdUb",
  "key30": "5NKhvKpAHwtqhjgCBrEzchSR6hf8hRaSt4bCSVXPKH8YkhLs37niqs2TbfPUVtmGj13PgTN5ECixxYzvADfgv1bt",
  "key31": "5MGVrotR8JcjrxJR1MTUBBG8VqbV35z4EQrTLsQN65N1pEaYNwh84WtcsXyuMc5D31NHXuL1uv4EdXng6NUpHdPb",
  "key32": "2q87HZhNZNJYeeLkcHrtoZftKNGriAiNroDcchSMEQdZpKDNWQJdpuiWTEkH9zobX3dLJXHAtnmRBJahVvBxU3zE",
  "key33": "axFbAqyFsCRaxqvbS7z1zB1ffJxu5mmXoyDCkx7qDLVceWDNGzb8kCB4V5xGXTzmweeLFc4b1Rj2ZEXdrXsQeon",
  "key34": "Lb8MwxCKHBKaScatiVcSgZ2mHm5QcJxqYRwXJo8Di92nKpv6n2CP4FuHa23b9UHUnVaAaxPaD9q7RY92YaSUgkB",
  "key35": "4uqg1n6JxjoVGyEj9abzbBHiVb3fKRvS7YgZJKRS13tHKkNzY6oeiSywGFwun3cNUokDaztYV5CHfZceYKig7X1o",
  "key36": "4kBepSouLpbk9xb6aDUsMLJYuh2fx6jHWDZgWcQf3LpQyibvuhG39ehrSVDbzXGjq99kf4rPntfwp6UQq2sCy18F",
  "key37": "5eAmDkctBt6k8insuRTXHXR6pN3xekhgiCfiTk7KuqQLiQ4SWYgof5xmehZeuQ4PBR7gSUquwKD2C3VNhpsLeo1W",
  "key38": "K41LZSE4RuQMyHqce1xXxAsuuZ5zKjSXCgmagWG1DdPjLfEL3EPazEw1BxNLn68BeKimBsYpkq4nmhzLv1CLZk3"
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
