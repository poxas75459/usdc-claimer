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
    "rarfdLuDanFtE2RxjfNieQPRAHDPXCkuMYDwUDFSuUMjCWfuJt64Big9hnoux36YEmx48ddwXBMEJe2vCb16f3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247va8US2Hmr3Er8EPUr4RyzxGJJMafCVmAdYpVUkiuAXZAY3e7eaoi8hXqctqz1AMoW1jYRhe1p5JSjeN6usN3y",
  "key1": "2kxtvu1bSpm9T16omCcRQeuJTytLovhvkTDLJxnZza4AFND6HTWijroY46koyNLujctTmwr1xF8pzqdmNzEhMjWA",
  "key2": "4o5UPQEB7LbKKxEr3vECx9ym1AsfZvLS34pdYMff1kazcdrcLTxDdWqXSJ6xq6feA5t87Di55hRK7iG5TrrTe92f",
  "key3": "2rHV9gmucp126m6KhwQdjb76rEXtzL77AUXHdw2JUjcFJXqpYESNTtmGb1cKGrpPcTcyLUStrk4yCLDNfRdhs4fr",
  "key4": "qDUQJMQssrKphQK9fAZdyGpLnGEZ9cVmutefCZXxGzcnDX9EAxdKxiECC3VafQecAjqCUCYB4dy5Kzzgi6ArSim",
  "key5": "yi4eNnoBLpHLCm4RbHQjnryPpNZyTNbZphFq6DZMb2h6pk2sJwRMwBZ5GujV2PMqT1MFrWeKvmc3YDnL9pM7dTs",
  "key6": "84HwybFaHeQCui799d4sMdaHadeMQvmH7NU4HhuLksbiw18n3zR4r5arHw4JSwcrPHNE2vhyAHE5dn3uEwfKNZr",
  "key7": "2pUUBx478EdvCiRShxmZeugJcmuhfTx8LHwMSKM56yS1pLPJVXduZeHNWVYFY78ASD1ozYHkPHj29jNYmeEC2Fam",
  "key8": "d39VEgsdkxPeuHXtVDdvEUCYc3WjcBLahNfpFGDnyXRN5mePapYGtgpjiud3r3H17YGPTPzEGxK21hP22SPtTTV",
  "key9": "2K1xthsFS2fw5EAemUWWRCDDLCBH3CZox2UupZBxMoem6vdVEXCfsMsQQQd1zsttW1zDrR1sk8SFFsah8PS2envc",
  "key10": "2TYxLCbas2Ssw8aHmxNb8HqB7fyS815MuovH95PuzECZmqno845hTY9xhHPdZBG96tABYTJzyGREEaRWYdnLuYCi",
  "key11": "2cwt2bv3L4otjBdDU6eGCoCeQFaZ8izqQfs5iLuBVYdDUe9C1C3pg7HZpt24kCk7oRBfP3gh15zXGcFJzbSC2FMq",
  "key12": "49Rsqzja4GW8qYDdjNst51hH3s6D3FVaLyCpmgF6B2imwq7qdXBsqS5a8tx6v26MiJPBKVuvro4SJHbDcXwXHAWZ",
  "key13": "3QF7BsGhkKzGxYpXPyFwB1QkBirDrhSMnBfTAy1uq31a17H9jkKKkSJW4VhfpvyJsVSdjVbkHtPSbPSdgPgyoBVM",
  "key14": "FV48yae9v3yXTT3H7W8ifpCU5B5xdczHsoJK8FmhWKMVJQNuP6Ag6Srg4SjwwGAnK4AAyKxb1ukxsUne8xycaHW",
  "key15": "5NCWeMLjzhM9sbsKFLhNDc5gTagE3o59efh9ho1jmHmeEhJhwG1293qRTsQhp2WnLcnBdZThRbzSLHoGnzy4xVBD",
  "key16": "3FaJAkiVFJGxSEreh8kFvBajhNMvpRm6KnEmZM8VFwXBDsnj21u2Re6QsbPKsaveZx2LW9PrjmPT2SrpLT9g2Wyb",
  "key17": "3e9iTgqbVa5D6fWnfJChTrMTmmRXFL9JhYbad6tSGibTR3FeXTagEiEE45PN8jMxBqa43LnF7Pfn59bSQZxwoKj",
  "key18": "5yRox6KQmZoxUgN82szDw7AhU4HoedEiDESq6UM2aaFk7P9GFyyNgGo4HHJ54hJGF2qYFeAv8aZ4WME4RLs8XMWj",
  "key19": "2ix9piyEgodbH5oUaAmevuA33Zwx8hrkfmqAAakcA9P8JpRQbmsaFaRYdqTuZDuWNEaX8rYD8Dt6qL2vvm8T8BkC",
  "key20": "5QVrBCwMZePFPYZcYv9xMQa9y1dGPQhaVyexyPqiFfDAS73TCEWVarQpQ8Dg9aLgSrUMUUqqYfFZoM3scLezmK1e",
  "key21": "4wkqkFszrJhV3ZRrSSzgzxDmHieLnrTcAb5eP9VWasbpChw8pZL1zyYij5QFEsHAA6veDEgnqaBBn5LQAyKpFCws",
  "key22": "4PbnQaEDM6XQPCJUjxAbjBXdMLoP2We73Ffbv7GTQGKLXWL5CRSq81kgZAN83PgPaDhc3bvwfuVCNt55imzyRnxo",
  "key23": "3yDcNw2eQ94KZcY2asNZiUSXJAGnv9CizJ71CBqzRBCqBk9SeGdwkPc6ztLshyq3mGX5tZeDEE86LKDrm8STkDEv",
  "key24": "27UgvGhA8Z4eiujrfo1daHstCGpLEpmjeH9NxKjYkkRTEmK579zzYh9GTpLkjJkLb71hm2iJbYbEzWwos4vRLVNR",
  "key25": "37S1CHw56VRKGJenQZvLERUap7x7RY2x7oPt9HgBQAQvEb6NbBrvAjeudiMFmvwzBYQuVoNGkVoLvMyYGsQERMDk",
  "key26": "3z4YsdWR9XUsBCsqYUfMc1zrgh37vLuh1phisS1HpwDyNSzNQvUHexjGu1Zrpb67ksa5bXzMizM2eSPwPL91XQi4",
  "key27": "2DyibVgtsmXtG62RGmqiB7WhyytjjeTAkG1G4N9vFXSF2aoyM5trcmomPB9AboCW1E25qZo4RGJYTQR9gyGj87Cc",
  "key28": "4g5SDy5DfxUQ6fGJv9KEE8hUR8JaxT2EhHeBSEH2Fyw88JXjupeYNDh9Gt7u7n3hnxsqQd2BWuvq6q9ZRPET1svN",
  "key29": "372MMeKKE4iCT4MyGvA1qeFh5BMZvwGLv65ZBHabTnvTq7xQsjKJF17VthsfB4LJooDQx6H7T6GFUKp37orYoLBA",
  "key30": "2srSgwFEMKNimA61ZMH1osw7kyqQKfGmd2xktUSSwWPoXacuwPgwP6uRJvkP3qufeEcnv5QzNSLafz8HLW14CWfd",
  "key31": "hWwokUfxs9cEvHLX54kvxYZzWGpNxM7tnUmvQMFJzfYf9gxdvEmP5Ly3jv9kosjTBGDhD4UQz1XfMhd93AXFhgk",
  "key32": "2xbmndYQHEAbUi78mkVEFtTnfjVEf4jYnrv7Mcyu5uaqve7z7SKcWSnVzwDGW6AyWvhNf154fxYcnAtM2zoTstaB",
  "key33": "6119PbJTS8Zp6STfJUuz7CXsnnH1tauyTyMwLQ4FQaSKWW7BirChbiikEP8zojUsHiRBYjwb1HQGF5RHRuvnvgZQ",
  "key34": "43fcqbENXWoDcbKWL35HYaaEmMeDBNKB7JVrpTTdmezTfUkKbnmpTfAc1Wxakf2J9kHjQji8muQnFaJvpie8jU9C",
  "key35": "EP1pH4jaVcw2pGtYtd9qFGfPWc6p5ZX6h5JSPQmrr1wy5CtYo72XqQnsoU9RPrLWTHehyjzAAk51msDYYy4GDWK",
  "key36": "2GyiPspjoX4SikKDNYC2SnHDrNvqTia6fiJa6BRb8zxxDLRHCABwVBVZVrrQ6VVLvqGr5UzCRpohMgxEoZhbTas4"
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
