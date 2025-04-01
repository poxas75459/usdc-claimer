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
    "od9pqtvAUKzsNnf4uQ3Ra5aJgxEfneFgc5WFeue6epmJ6rgZxizokUxmbpqA6RS1FNCfqnjff7Dtr5HiwhBdQgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7qCMi5cr8VDNLU9KLruEEFUUYfcAJz3E2VvYjCarMkX2tKfwEuowdMPe1A66uscjzYhaEbgTrjiMYHbGoZU85k",
  "key1": "3Z8F96HYjTqwUcMwQ5tva4Buq2jvBbVjGFwmBXbpVwo1fprUXdTTANTfGgiZSQoYHXHEgQnS4k3i8UGiR44hqQSB",
  "key2": "5mg6GS5HRhLszkJ5A4MdehHturN892nY34Y8D6pNVm5GP46cwgAF8sesyi8ci7EUgZbMEaqim5yYZZscUzoUyUbm",
  "key3": "3H5wB2PJS9HZAUhDCmbGhs95sX6jDQeKbG9WPGDQkvBzXLWih3TFXh673MiURxWcbn7LmAPpzJkjiyyu7SbxMDm3",
  "key4": "VgvMmHjXqnbJZ3h8ov7uC73JFWGDw3zYPwi9m6TNP6zGrzaEEAYDGVjTBkCajtdzakye1C81MP3G1zm7AfCs2Ln",
  "key5": "4mD5ES8Dhsu91Xjg3GuuRtJTY192CWG44q3KaFcXHgvQxK3qh6hMVvq2YtCprK2x9XZsUmvCfarMF5LxwFei4sY6",
  "key6": "4kJ3Hh7oi1FAdAdYsHagWuPQN8cdnHWFSwKx9wBGSWobdzzv5RdPaXnYi8Gr6GcizwcyCAGV3szvk8CiRH4ysDw2",
  "key7": "5UTQcpqxdWwKY3b6tzXa3uvWMGhpFGbkD5Xi45Nf6rjBrkKK15jSmPHm4sUfoU8FgNNk85VB9Y3HrG6e6Yvu16HR",
  "key8": "27ZXmaNawJtmncE2HeDRHbcoVbJN2LTpCd1ToDfn9j2ioJAy2FJeiJ16AAtjqz2Mk9gPaChv2wRTAtHbmvrRL838",
  "key9": "3xzEqSEunLQDh6ZxDa2FybSxVK4CHHXm2u3q3QRDCqA2ZaqFGfsYJzoSWchS4EE5M5rmCBbHLJp5JtTgsbgGdLFY",
  "key10": "4xCR7n7165TLzucjUik7Mc9SgPDBCKhYcc9Jegvn41Twt9QPD4efoKM1t5Pfp95wxpSG7PwaJvQynwCsbW7L8h3m",
  "key11": "56XpBmC2WP7PLiEqd54XvHb7ipfC91PEVpWChv8FBoDtiY3vRKew24UdR5YAVrr6gMadX7hDUDGrZCQx49HkZb1K",
  "key12": "5GnGf22MqCLSieeVneDM9HvV5Hpf6VR43N7pfs16nrHoP2eBRTsDxKWChBSs6YuuRu2545iu8WB9EAQFdCUXUAG2",
  "key13": "4GZoEfkfY9sjfojb4PxCzFVCUKqHG7w94LnaDnmBRHzbVqdHbJWic1J7gLmufPbNgu8XKEczazXVMnDCuP2YcLT9",
  "key14": "2GNt2nbfiAmrQvoU69FvynrTQbCtnCATDKszzT2TfwfZqLaBTCHo4to5YZQhkFGeFTQFh8H9GK6dK7CrKXDgsgCH",
  "key15": "3NSdHZJcEb5LbxX4LRAtUvNMzBMHh6wUPE76reSSaDduhxAVDcfsqzVG9vfZ8GBbD2ZKDgwTVzaFbASN4xHXaCxU",
  "key16": "63CRAKRYzEpmgJPgbgfUMXZk7LXgTAQQDF7jkmbdWDR9Qmw1N17KJAjX18kQ83thXREEigVJAS7KKZ4iwk3UyvYZ",
  "key17": "5sd7KfwFrBUb13w6YC1ZAaPMT1Z78Xvsu9BFQ2rHj3cM5tEvGMKiKcRkBTv9cfiR1SXxefqwEFDwmsqhckS6TSsU",
  "key18": "4kEmNZbyqVNEmnoJ2y6mofFVjuAvn79LoWDZQ4GQg5rz2Wow37m9H5zN6hXg2U6EdrcsZj6TcwZjLTrjoKwtAhpo",
  "key19": "4hTuaXJeZfL5CgZYCxz9TXnmxNVAjDr4HTsh5YQYESLYgxmTiZQy4ub5Df19Pdu9SDEkZM2ztEKcWLpHmbTa79tY",
  "key20": "4zHprcyQV5rAFv9oJ2AiNGrdiYB7hahdu5i1TePMG7uRgyycvHqYPXSwkGx8Q3dgwCGoowx18roM3Z5nHNPPqEwj",
  "key21": "5bQYgAc4LELPHMJtReJshK5uV5quEBYV9jBAaeegG68AayL9P9qZwGt4r9w3wF89xyKmtLvkyoj1B9oxuUTK4FkF",
  "key22": "5WnU5FPGPELkbfUsUEnWJgGdb7Sr8kWCbaVngASdJrXrMMTvWgLc43tRocHyrkuc6DkJ78tfkfLNfinufzt7G5qw",
  "key23": "nr58hyqVZVfQ5Xt8172RwPS6x5DXPVQsSdHc63eobtKfM8mwYS6ponmd9gSyEhGDazjCJkgb7LsW94bSL8pDmPf",
  "key24": "5cSC7iMu4vSFGKYEndXxgCDnx4XzHGnDyDuMsjJ3S8Zo5GbHgN4uQobPdbKis2t3vJSppL6kMyoerZHckqMZjEqX",
  "key25": "3ExAuD2jvcy1fM4vxnjLvy31QUUy6EupU8LfDe2zhkpJKXNMwiy7x59i1Wua2mZwibfnHmmAJaGCxTVUHABkVFPs",
  "key26": "5q7RtZPtuuVEk9naJUwRkUnnTb5P5vVGDWzDYWhgpSrz6rjKBc26qntahUU11zx7vM22V7wBhQjPDp9PgEE1EuG6",
  "key27": "4aEKW5FfHJXT8dU5Y4w44TVm4Cw96NcFg5CyBgsHpGaVrw3FFa3QzEZoJHb3eYXzfEzDEBsBXFfcRnF286EHRJih",
  "key28": "wq2XNNz57GSBocVviwit7xqvSDxEVyN4JumVBU7sZSGnVG5oUCXTWSkJj31uMRjJmmN78hmp7kEpxB4bWojEtHB",
  "key29": "3BT41Dd3AfFnzaeT9ov4ksBo1qZ9mnxHTxpiPdwHc3wvcQb6bCxgfXFugdz4k5zSMyG97yzNqgXzdxS6VML6opBh",
  "key30": "5rfQ33VDKr4iqNp52cNpH9A8DxSchHrL5rCSb82BLKGkTnmcdSBprjw9DqqcHU9CMC1gYBEqf972djgsAkVTmMJK",
  "key31": "4bk8uVbzY5BCnLwP3MWbnvn85T9VWRJjzoD5UTNLGZGbzfG8cw2mh15Qxdbtq4cRv7wpKXqi9HAjwNEDZ74X1JVq",
  "key32": "33pvz5wgRjWtzPmk99LtpjtHCMxpdGJRE4qkv4t4ro951PqGtgW5VbpYwDhy86b2Sqc8H4ZBmQvWiGpp5ZpTvuqP"
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
