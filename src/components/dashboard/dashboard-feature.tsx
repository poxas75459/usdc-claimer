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
    "2kAv3afM6v63rWCDkWgkn7Xv75YWE7FN93xy7D7YnZ9YzWfUKGbdRN4PTVnqLzwcmxUhSnAwr31V87Cu9iPEdKjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATB498S4hMkGSfrvkTQfbatENnK4Yovxqiy1YuWMn99UGND6x9e1vqfmzm68gaCfDBCe4Rb4LeB6EAaAHb8X8yD",
  "key1": "53u2KgBRcMd9ifwoqjKpvTNporFhrnhvjMifehoG3XUuu7sPb7iRG3RhGqE82LLAPZNRVgfotfSQ2ytxaZHqNcPT",
  "key2": "zKjQ66M522M6JpUFHpARqzjg42L1Vj7n3A9C1CFyWzG5Vz8oUPy6D2yk6GAMXBNUxCu4swECm9M4MTEguWdmToi",
  "key3": "3c5vjhjPbmhmpeJccwAvkUaWaEgiKtS8EHu9HB4gwn6yficCjwZwvHAmVwY2qZcrwBo6G3pqoYBkgZ7QLAgqsmQs",
  "key4": "3o3RJY76wFdgpW3SUHVA9gLAGvvrZj3yKpLp6PqTsiYf1Hmaq9iQwPcyqM531T9ywK5ByBKiSpswuoesAMPzh4xh",
  "key5": "FdVvNyoqMXiqk1zp8PhTDpqdJqsWUEkQsr7RrcjEuQGhcGQfn9SKWeuvxrEfCgazFdb8TB4uawF7xXcYEmhhAXf",
  "key6": "zLBKZbS5f1a7FfPd2oeFjyxEw816N3uhE8P6dciEqzPf47TyTTqwk51qTgrvktSdZzRTrpcYSvnvrkKMaipk2TY",
  "key7": "3N82Fq9vVKTfaQK1DpqnwvZunNFe2afPh2GNyDCRFHVkcjXSBQqnmRYfirxM2FcrAP4Fy71soWSvdpDDsTo84HTG",
  "key8": "KnL2aUkPZ2dJUnotu4LuC48B4FbwbtwyvcbbXnmqTbnqG3MM4p4hbQ3Du67WvuqBvxXUPkUkpBmGNWv85SNBGRR",
  "key9": "5FFywXDDSinmqKe9pgcJnf72xamfBbPtp7UQi4AsefCZYWUUvjfGQ6g1TJvBiJoHFfb15jXQKnTdpWaUPoHUifmW",
  "key10": "5p85HJNbt5A5p6Gfh4ga7CGsgDgHhWXRdrsoB6Sv7YLBC5rSgx5dLXN682WQksFJFb23dVALiTtGXwVnLjmDBuaN",
  "key11": "5trDWYofFwgipkjHjJY45DYp3D6A6L1xDcNA18Wz874qv9WMwNH5fmpo1LhmZmKXekz1HiGcRNoW6SugPnLLfkZF",
  "key12": "5wKPngtDSginTu7zy1USUtPE9iLrrov8cZyArzbxwbCWkG99R1NViMS7Tnqk6kzDg7nXiwb1JtSVPqxuary9zUiv",
  "key13": "5LzVHjdoVgndVTU6LwSBqXRUXh8MC5cJMEJ9wiSQbKK5Rwhi2to7cEiF4x8Gwp2Us2zbbtkyxjmBhH2CkLi8fCNJ",
  "key14": "4cs84qtvqwEcDqMo2AEDzDKMCXeQWnMU2GjUEQr88ZhLQfaWNCNU6vQi6viEXTMygXqSsJQRCewuyExFs7TMCGAt",
  "key15": "3mnjWEiHmQib11vhWFY7jEF6CDnFqPkEf9fjG3agJY8XJhzs41DffrLMdz4fJpeWrVUccQpdUrF9hyJqZeJ6zarx",
  "key16": "4c3uwvGuZzhGqrSqLd7SCaWANTBJmwScnPXMdWYoMjuURqk9WKaVKvtAbcsGKq2V2sSosvv5BA32UUT9gb9gEtGc",
  "key17": "3Xnvrt6wUw6qb4tKrsRFMRJJUQMyrVYVh8VhVCQ8sg8Lv596SWDHTwWUUTfauwBDMgZUJfMRDR1Ay7USsggbJKSK",
  "key18": "2SUz51HoA7V6c6w8HMipo7LfN8P2wm84Wjajp387XPENF49d9QoTt4n74KcYKe9LCfqkk2Mvnry3S43Q5actMKUP",
  "key19": "3E9ZNYX7nHSr9S71NDEJ1hdSzaXZYopHc7kySe2XEm9AucDSKzPkzHXeAbL2YrMm3Nckkw7z7PKdCCT735brzNpT",
  "key20": "3DUGSUiy8LfHmL93PfuMxqVqQ1RAKEfhNmv7aymdrCekPRgjwMBzzxF6oBKzqSEqJUYZ3SuTpp31bBHqK8fXdrbd",
  "key21": "3gXmj71w4Bp5qrgkvwbgJ8CYKrZi5ApQmvsxXvia39BUfFAiATLxPFiLttKJueSCFNnF71D6reyiQqzeLAB5CJFt",
  "key22": "2bqy15AKeRMn2Fb9B6A1WMyF3hUQraMzhtrvSCfFRcmUPHhZx7Lw7Ci8LT9Nzpbo3zXzvzpQcgtMmHopGdzMGE5q",
  "key23": "AGdCJcSURj2V4LnaBp65ymDJ2Hpqx2TicUqwFofBgbZAqH1VCncbEMHx1c4H7YLgG4om2m7vJYYznhCL867u7Gr",
  "key24": "4T6ERCdqUpMW5aPVhBui7tGN2wyAvsjYsmVSbQCLugHv86r1okWadL1DbkpcznAR6zWkGdtaTtRZssEtJmAk5NAs",
  "key25": "4ka9rBMwhZX2Q3siqLnJF49a1i5RaA8njjAfS9x545E3dm2roFPU6mAJ39Dry1MazZPiSvJkSRJ5uGrGE8doy1PB",
  "key26": "5SsQFSxt9m6LVePyrt7jMttrbLhMwE1vbf4TH4QZ65FjmjEkGGszPkNH1Z1sesqDQPFetL7CH8LxLRWc638xuyRt",
  "key27": "oMn8n83VkFp3v9HXXn46wVJPhAejfa5BoFMY1aV8MqRXyxSLmuYHkJXmZEytHRHPCH2YcsGCKJF9EQfmtPKzLdX",
  "key28": "21FUgAGCfLqrGqUqSjs9SUwMkTJdWNgsCSKnpv6svAGwfoM8JJvF7SkNrAyGQ6nzZYHF76xhpniSqLBRxByhfCie",
  "key29": "53fCFph8MG3hmu3vxLotmmzZ65gqjrav6WoBDXusBUQGYG8gmJxrZiBLJ8PR4oHC4eRCdt2CRQgMyt1tdaXSmn5Q",
  "key30": "2k6hYFeHiCov6UgJwQbpnWCeTn53NbWw1SUkQJxU4jivnZvFnXdXmShDHuF7dUup6CpQeb938ZBxUyFzT13QXo2R",
  "key31": "3kzs6Q75SVbDcF36QtFHpxvX661q5hFykBUwDjuikwgx6XLP4BSk3oJe7ehg4nVbx1E8natDgzNVcmNKmCrH6xNC",
  "key32": "385eg43CRBsyogGq3JhVJXhREohmxwg953CsYYoX7SXob571Lf7tbKuDmaJJXWSVp14gP7ufMPuaMwssLFkeLaaV",
  "key33": "RQxUsouY9HjPPUN1KCW8bpEE9GqhyADceVgve2Yks1TFFZ8e6EFqr4WJdiWhydDiiy35Lt2yFxw9cg76DKWoedq",
  "key34": "2WixR4dK4iNcXeCitEZBSETZ4sJzLQb9knzakbG4kZcANR7Wq1T3pyyFkt6Xri8szKLp6kvGGYk4xoUbqv8GhpYu",
  "key35": "2Pgm8a8bUaFMCkmheStpvvibSupa5tvMQRH3TruBSJb7JrbgsLZgVE4Ni9wuEFQu7QMyR16N7qGvbhxTKUhydrzE",
  "key36": "4MgP3UBoV2yaEsFcNfkdjTsqjpC2UDoGBVtdvkhyLW4s5Y5EdmKpRZuB3R7tGxLm1vnctEKBiye4eFqc2vkz2vwP",
  "key37": "4UYT1fzDPEsU5gHJugqJj7ynXdc7et5A6ovSsvDWzhNKXtNNYnprSzcUkiiejbVhtMQYKneeTzujud4VNFMqD94L",
  "key38": "4pA9HLK8umDDKtKHzyJeGspwAYDgm836WDeYuxhCFgaiFfHy91czk2oP89NWGtWbWMnzLzrqqqRpWLxyfbqqs8fe",
  "key39": "2CPsuxwnPE5L3R94fb1jNrbzP4EMCbiX988TMQi31u2cLueTJofFQc7FSzpaVn5rkESwHbr67ZBtAervm8CPQewZ",
  "key40": "3e2D88xXchgFoXrAYSnZrKV3THXLwiGeCnhQPfg5KwQLnkJos3oV6wYdkPdpPFHN3bKGXx3hMBs58hzyzAzZQgWj",
  "key41": "4DuEkK3E2GRJhPp9DusQGNxuH6oGyrFwVKazuxNaTV8Nkn7p3k5L2m1sMANs8mSwKPsFHdWJnU9h9pY5HCkUFWAk",
  "key42": "41uv34ytU9qGZCBAQZnXJsdctzhXofmFVpXNTWJgL33TNf3mLFJ9vs8m2ALcx8shfDrWgXswzppARCxsuzQTfRrm"
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
