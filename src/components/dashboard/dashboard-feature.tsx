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
    "5AAZLMqVqQrtTPzThDbaTkir5AhAv1qyp6upKtMGctp3xuAKQ5dcrL2vmNK9tBBEHFw22EauaN5GMfSaqjduNR4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUMRHm9MFUzCypg55ezwMx8agtxf9hZuLfPnCPyPPE8qDKPfegwUXT7XJZbJhpetFScw38MFkWSASGhZxybxwLo",
  "key1": "4GPxPXviPPxN78rxbe7B8W921B12pGs9rkq8oWKEhfr5AkUu5Ki6MuoXDp9hBFmfHa62ui8gr7RMq1Af5se45XAJ",
  "key2": "oaSYW3DPHxqczpFhyDo5n6KNnj5hgmGYVzw3cByJYN5BA1zfy2LwefKtVNzLGzHyWcVXFnzWXR6EgRsQdLgAS2c",
  "key3": "4cNmy6NGFZGR55oY1mHRPAkzRHz4Lju7wMszq6wi6iJSUGEhLCpZkNngyycy5trBkJkwfynrXZQo78Msiw1Hy7yE",
  "key4": "UiPWH6xx1z3sDa2kjQyWE8qnvGQJ9EXxhSw1Y7FBpMDWmeUwEzsFiWCMqxPqJMLWWckg8BtaUwn2DodFy3JXusT",
  "key5": "3g57nvZN9Ti1iYPzH7YXEhqC6kNNeghWCDwFempupj3mzdwPG1QhgddySwY4QBzb3fmSKATWAB8eUWeh74DvFGRA",
  "key6": "31uCAcNrHaBcLi5RCtTdFdJRw3U4WVCc66Lnkvn3VqfzmiVCSniUSNiHbRjf87UWNuvLSMN8CEsRfb7vQL6m1GWp",
  "key7": "5z31x1rzN818pUHo6j2GbgVAhW5E7SC7kH51a6SX1Hpt6paPNTn3cWbf825wio7MAdVtJzZ7NW769DC1hLxg5q6E",
  "key8": "3trPJyxhUzk9RJP9eLdgnzKKKGrbDRpGAxkf4vWeV6op8MStm8zzqRNiQaDhVTAzW6TSiW87jM48gvSQy9pJuDtD",
  "key9": "34bVyESkDZtcW96GWvLvcPSKQPaUJKY4qqimEpt9wK5MHKhGo9o84rrTNKhxZyDr3ay38KykCgooTizyTyepwYyU",
  "key10": "5tHbASDppeSKxzjMfgddGnrt9Brk1uqr4PHPnhvSMDuU4Ev61KAhnRRNpe4taJ4ga24fy2WKt7y2f8dw92pQ9uMg",
  "key11": "2zn4h5euVcMA59eUbHCiDAXRogQvuaJTvgzPizBpaWL8uE5S6B82YqtpG9mVWRXaVpeNbyiTZoDfkD3fY9of3q4k",
  "key12": "3oo5sxeMDoDAqjYmwuqd92QXEwrYHgqT7yoJpDZL15H3MfjXRgVY8kf8W5HWBPiy8FnnNKK6LDvaDtbVATKHXmXN",
  "key13": "33eqjBGidLo7PAmCevzNESpis3h1z7eqgPHi2HY9HTS8NchaJLt6Qn19RtdYJ1EXXncNicZhsvi1A9sBD2QUQLrG",
  "key14": "4F5pozcVNgL9RBCp9bSX9kz4oLigfMUpxU6qWR1Yy8KpJxXupptFkqD5pP7Ex9PBMNLNHKfdT5iAtMs3JVZnttXL",
  "key15": "bfKibirXPXRZCoN7cJQ5Ge8kd7cQipsYqwEdMFdVEJADfSqQ7ygcAwLtkERGBpwEEgGCLQ4GvXf7qqTzAPBwVxi",
  "key16": "3ro9AQRr32PENW177uigPUoQmMzCg8FGzA3PhzFQTRjE3qdgvK5PR3kpMUNajRqPcJrCbjRYiUQytLFkoAVnP61t",
  "key17": "1qHGhTjn932x1AT2tZVRcDht4jyZvQqTE3SqnkKbX37T7y9DfX5ddS64dmoNCj6W8fstDy2KRzBSrNvWep1dP8D",
  "key18": "4xwanKVC5Q5iTuQBPmHXTv1UMwep8rXrQJgqHhbcGdH1LEWruFt9PMVmE5Gi2MuCE4nkYJ2rsqTFKT46SJrk432M",
  "key19": "4knf7Dii5D1AzGSmuhNpAS6pPB6TniStAu2VmcUUUJeTHiLiLbU1D8h2Nv4G2hYWqkDzjsT9aeMXg4QazKxPsZQU",
  "key20": "qx1R8cj7DUES9R1QPt7KDdRAT1y8ASG5ceK9eYNAJFJgZYmK3MoBoUmAufRdu38sNm9RppmRNi1FYqPChZJnzy7",
  "key21": "5MCBywMFgWu6WZDmR5gDCbvwZ2HHVdGcawTCCo6TkVbQXpp8cCATmc3MBgU3Dgxo7ENrUBPFz6cqu41nFGvJHuF4",
  "key22": "4UzW4aYh6vCSU6ftd18NYBhLuSiicyNZ7QpN8AjMtrsvnLV8eDbuYPpAW3yFF67Qbp6nyeup7NSRbF5fYC1ZecK6",
  "key23": "2cAdd5dVy4z8DrMdrhDLhqDstgotY6c1NRRn9u3tci34ayCEiZwRha5QdYjH8NTqZAW4sZdykRpskKsfJgzw9eua",
  "key24": "4efgw1WLdnenFX4N7TAeTypRBLHDMkvMwcjTWrp9LuQFSz9gu6SkbcJLMoQtbPeH7ckXDPCCP9ZBj6Uw1WmW7hhT",
  "key25": "2ncGaQowu9LFC7usCufkZbGQmojkpec9Y2CMUaDv9qZkMmeir6ESqcAxBBcvVxoxexBkef3q6BWa8NyfGayFLckw",
  "key26": "3LwC6SRiQo9N2tZKpMtKqfbWtP3y19sW6QmRsYZ32pgShkDcYrXdzuh5maGVFSYFyVTuwyXghj9ZneF57PmCQfkr",
  "key27": "S6YUuGYTiXqT2DLWMV3C7XGhgWNU8F9vj3z9rkSbrFFDK2a5Vd3QecX45tQBiWFZRW9AuKNdQFDZaHTcR4cbe18",
  "key28": "4CsPUHgGB1vqFd8im7dJHJKkH46h3EzsH7YRJT4ijuPCux24gjzReGTbiUPx5BiW2QXDAtBuB8RbJRUDENmTH1oc",
  "key29": "mkeHZ5E8J1jYcybUk1pu8RWXFMNnpmLvPf173K2UknnUVemkvnAGFaJxPRHqr9vrmJSskomiNn2Qfc45ogjdDhc",
  "key30": "2mzAjnsTDpZQBbxBJDR8iHiQqd7tGzpp3XdrkkCADPfUYST93xgxJPXW7ABrx86wyzQEjfsAv9D4GRLS5ue8CGUu",
  "key31": "42aN92wA4bVv2kYdHBcUBUapTrr7g7eaUDCfJLMg3LJHiyCkyVZ7YrRzSU5eq9V12kyQKsP2u9WrG2Ahszc5c398",
  "key32": "4pdyird8hRFMmBYiyaAifLS4HZfv5NgiUhjysKv8cD9S3se8goPsN52ebLActCYnvBDSnUev6yWLYnK9V7cY6U5L",
  "key33": "4zTKWoGtoPfJBSPv9yKDUxHX8TpwAMn6tErMEM8FRYEk9iE84FDC1RR1GajahhRfPJ9Jq5N9RuxjdjgNm8vJczV2",
  "key34": "2xMuXqUsznwzcfKvmDvGzhvBFi4VQGC9usMvD8cTfWFnFuHCMZm9gBG6v2qyvUHUS3YhWDuZt63yEAXJfcbWBbgd",
  "key35": "2DuP1iB5kWW5aGhws3PMzxmAt6FuJVmpochd7cejdUHk5jZm49MrYYp9EpwqnwSRHeYb4hHQWgtxv97oTSuj5NP7",
  "key36": "VKpMGhXSMN9Fvtku1twv6u6yW3JY3ddAaupjsafpZ1pb2t9s8UJb8x1LuYqRhhtwgbVHSTEg1TKATexo7aU5kd5"
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
