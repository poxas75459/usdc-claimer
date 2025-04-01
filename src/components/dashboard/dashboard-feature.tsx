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
    "2y1pLwbg422gdVNt4WswYQ4QyfGEVi2EtH7cDXuCVTQYZk39DiVnbm5VhBiWfe7PbhFpaJ4ND5NNvXA6pRsyeg7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fJd6f9sVAaHabdobUvm51kNuEbxeHGi6gH57xbtmo5ht8ZJbaSia7MqAYjrCLRcwCMn2jRQiPdqEiF4VyE84M6",
  "key1": "4oWvowhctYRw9X1kNmbriL9KzNwNxtXzhTv6sAgVhNjkSnV3iKcTvdLZQFZkpAPeH74CkAotmHyLwcAL7f9cZ3bZ",
  "key2": "3rfRJY9GBL3ZALMMkPw9Wam6hd2Sh5U2RxsjkWA4qaYJr1GGpz6HGYhYprJcmDmUrvfeqM3JQkBH7WHVbrSTm97p",
  "key3": "6KnTDZw3VBvKBJZcAfrmdJrjHSgewsA9LjFU4Qe9V3h56YtJPQdC41zrKcdtPW6osQAJdx6Pmk4sxqKmTUaivp2",
  "key4": "62ssg7mzzkCsDX6whamhra8TTZi6Qump8NWBT6Syzyv1mza9zfJ5ApW5wJf3DbhyMV7ZyJAxW6FzUoq25LHhEwGj",
  "key5": "5n4LboTxfE8KiRCF2A93SxDotUxUP7qCbHK5qVyi99WgtcZdzkzLb17wyE7dR4WbBsueHkVqHTbR8wZLHp7hnRPB",
  "key6": "5J3XawN2DSRunH496d4SBfYSQU6nQwCjYkMUeKnmE3ZLdB1z2G8qkg8V2eefNfLb7KvB4mtNM1LQCPGpqiWApWGv",
  "key7": "538KtBckzdd3nfKcaYmbchfue5mKGZ9amXvWk1rkovHk7PV1dBNRfHecPvnLcryzv1EbRsKGPKiZdMarUBoSqRon",
  "key8": "36CknNF3Ef7voUxnz12j4NFin2FyQh4iHQJXwS767K6GJYRNC1mUHLCNhHJac6hEzTqXzMJw67wTyU77GYBUetVV",
  "key9": "mRX7AtGw597rzNbXgD3HZ7q1xaFFtsRdd8YdmU2KZf8Z1kS2i5AJZ1ees8JdbSmbfATErUiVnshpxAD9Kd4MmCa",
  "key10": "4gQoCsU5q9wwT8Qtas5RWwDuPuaxenuuUdMZzG7pcg56Zp7X43YFGTtt5QsWngWVwMf7ob2CgTX1sTJzT1cPQHUk",
  "key11": "hGKwpej6jjPjbGif5U1Scs4GvnyMsA6dP3oyfJn4ShpsngzM9uoMcQLTGn2n8q2DLDbDXeKePFcrVVnrGU3oiv3",
  "key12": "4CMP7brQsFvFggzL7aMzHFVVGV4sGQLRR2XjEcQziehvKEtufMLtUeCYii2NQbKHFEG8AEn3HrMvtmiKFAcAT2Zi",
  "key13": "ndNoUe64Q5ZxHnwDmVR7HnFkfeHUXZdvk6wutMcRG5RAiqjVfir2LHUhLwoXvHMQLq6HEy7JBWbVcyVkP6JSJSo",
  "key14": "DC7dK2BGM8r5vAx1y7rQmdWnK2NkzbGFLVEj7qVD9cDPkMJtpVUwAwn5TAebSGA1pdBGmCBq37Zw9QcMbKRdmvU",
  "key15": "23gM1V9JuGw4cEXiGaq6yNYU4Q8Ftibh9HofotAEQ83CZvQGXAydonb6jRmWFQNq3pp5bLX4BXWiygez29BHeyKf",
  "key16": "2BDTC5uAe6jpaw7oLxyR8qCZemoFKyRyhDCYDuDVFv2gWLtEMFvHEpPUtgGmp6gn312RxoT497Q7Zr4BEnbU9XZg",
  "key17": "2xDX7y7NbD6yhbz6wrCkYmq4VsEGJssgy3o2FDrUQHsigTXRH22SHhEJ6kAsz7DjctDtoJLgs9UrugsqwvEiub5L",
  "key18": "2JbwXTLB3KA1WAVBuNh3pCajrD1qZRyBqYHqjWc9yktEYyiYsazw5MavnRVwaLHYuWFcXwfsRttc8woLF4yxvU4N",
  "key19": "4EiuuUa2G52K2tWwP98RB6Efh3JyyAkRhLsJT42GwDkzCYHoP7yYyjnvHxWvXQwcwtbvqdrpstivY6Gz1WPL2RAN",
  "key20": "3tatWHmdcCyJmavuLiwixSUZUyi35tchf7dB549S6rEEGzkUnYUvE1zaoKGYeJoEQ5CayjDsS38e2tvn1a6t9B99",
  "key21": "2GBdZCTgt2QsTj2feejgrJJeFQG99hRDs6Yq7tCAu3z3roDsV3VzE3Dty5SqeCquQAR3wt59LDNidMWbMUugmABi",
  "key22": "n7vmUJQDHndVFALh29RUP8DBDzcNxtGr1YZYzkL8PPyadKJHGttWeR11cpdJqt6132EYMBYahnpBtG4V1sPqRVT",
  "key23": "4QtQ2TCJPfCJqTyUBewrUWrXEHPnmFa2H9jAezvQWBKSYGkLFhjTwiGbNJnUZwAkD2EzvW978C5XewAmfbMmUfn7",
  "key24": "3Gikzd7SZUPMUrQgmx2DgDtjFLFR1HATM56QtcdEZhYFbP9fviub4waFc5zgKXyH3Gpq385XTTmLkReiTgjqxrfA",
  "key25": "57k4aaCLfLRRB57i5mNhgKHyJbvW5xZZV2SWqv68k5w4C7H7Dhn3EJK9SQPPAYf6YaCc17kguhWq6n24r8SSmnAP",
  "key26": "2nabA91TBdqYfowf3Z3hJyQpnFBdoNuR1qd2vfZm32XzpyLi1i52EdJUgANUsro5KjeKBozPqsmkKCMoTGCfd2yB",
  "key27": "nmdn4sVjQVR2XCVe11rc5edQCqE6DkVvkGZxKuravMe8PmnPNQuy7VvQSoyL49EHHjTCXYjqsoG9ShGpwuvfi1h",
  "key28": "3ityVBdVg4AkECSVsMo1iLxvEFb9Mkk9ufrE8unPtB62w7Ynwg5zAekhssmtvYHYLHWmsRLkvYpWCBysyaKzkeEL",
  "key29": "ipkWjJ3HXEgFwnexCN63o9pj8ZtudH78hWSvxBjVMSGEJrJ7AHVuFTyo5rgGJLmvWwg55TiCsVkfmw11WJ1TFSZ",
  "key30": "GAwwaiDqQgFkYt5cof1VVGezRZAWsYjJzGc72rxaf4Fe3foW24yxpxP64Rurbp6nncvjUzWWA41vPKeNcyd55RN",
  "key31": "4JjrSAdDXsgFfBn4YyggP8dQdAMPisx8r36JzcN2TXUwJKwKJTBxeQDZuQhNPiGsrW8q5M2BEgp9q1ifXGy4auAr",
  "key32": "5niKzpKDPi2EgjbAWWP4CqLFSh3X9dCYKh7KeRJJxh3qiusvW72NQXhyfMkZvSRcLxc2SBr68XEfD6oPivh7rg7N",
  "key33": "399geG5hd2SFQ4i1xTh6uNptuCsycHkKyZ3waZdH4ztyrfZ81GRSHWN6DWFsS7m6c2froeSwh6AEukkbQWEDr7Sj",
  "key34": "TmZKXyZj4DUiPsAX83BEvpippvZcEcVH2tY6PSSdFBKQPuoNf1iZZq21dxQPbPTYnmhmL53cUHWUaEi3SqMUtyw",
  "key35": "5FhK53VHbQcGVXcDxhdPZ9VqcKTNUww8pUF6r2syqMQHSNXHtF1kGn41U3Vb9Vbyr8vD7t1iJmTdUEEHNfJXsLBR",
  "key36": "riw5N9CNgBDHZxgwX7ny7wdTEgSKqHeSMkgsuUNPddkX1zKzXcc3vVBoS56Y2HpX9MPcRMDRy98iSeeMiGBKPQN",
  "key37": "5t2pyBUy4YxcBHXfiGDkxjktKK93vcqEcQZmG8XpisSgbXd9cGqBBGE6fzBus2dod5GzyUZNdA1Ww4AkcRiV2aCG",
  "key38": "5pMUekaPprif8X3eGfmbpc1iQh9YpppajBMQvhEB9b771WyPZmQSnahjs4oYMnjDUtMi92MNDUTh7zLsjmUUhTgT",
  "key39": "JWTW7WoBYkF648apjDmfuZkt8K5LrGPSJQ29S5LcRL7TrF2SgKSfEoqHghaLnhVmDH2xvYocWxRaNsf6UP4L3M4",
  "key40": "5xRyrDEZEojs9cypg5RNVe5b3fx2BKD6ho69uK5hzYrYjwjQXL6zBDSbv293WnfibA6qiwJDHyUap7eqjaYSSvMP",
  "key41": "4JjBSPgwCE7TQykCms181a2sdWhTcmdj3MPfzhYhaZuKcPcEA53ZfSVCurtMGt4fbe92Sch4PLD4PkhLtKbCt1Ld",
  "key42": "5L4dUPGBj4pYzXgjrTrBzemRuVQ4MC2hEYSMKeUDxgGwW9P5PLuuYUfNrbbBrfox3dCmngu75tdmGGV2snaiGqBT",
  "key43": "51rFsEHriiQa8C8ByfcZUhycDM8bjx3LZkiRspu4j9aS545E2gcohjCgxaaVBZ4A5RVQxyn5ZZefy7juiWaazpdy",
  "key44": "2hD3evTdTfmzwg67SCKjP6cv5vAFZbkkPyGVzoq2P7iUsDhchDqBWsLGnBaJEc7qXcGje7y1jiTuvButCr7VUKah",
  "key45": "2DufFxgv6AL3Gz4tnN2RXaPpp46C2zLQ7MoN8MdytDAVmXnmr6kAcwtTv3iBoCGLVBxqrEzFcPTmsDKT4X8k23zW"
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
