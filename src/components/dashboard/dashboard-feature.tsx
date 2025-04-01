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
    "2jZE8H4p8tMnhCEeeqBzdWe49uzngvsiWcvtLwb4fWcrhFAcXim2GPyUA7BcxTMPijmfEQ3qQn6ekWNpp27iUiV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aq2dZpWcybBdyTxF6oYBnw5UNo2FHGriyP4XQ6LTptp1CgasbHnZHSSP4gKYGFZUTS3kTNUJYBsA9wXzxzfTQgV",
  "key1": "5B7S86KAyHhxNfMqik1kGzo5StxktQYgSXxDApBFitMLmnQzDvV6MXRoDAT94Z1rYEs8BqnbSJhtK6EtHL7eur3q",
  "key2": "Bkb9Vw7AW8NLYHL1nuyNQXBTpyXKiRvkAdv6DDvuEGDYJTQ3hmGbKjqyyAucqDKdAENRgDmB8mwhscvcKrs4qmZ",
  "key3": "jyfbC5BQPon1D6ZGctcjKX12hdHmHbHFpnc5hmQQgiih2EpUiTEww5hf9HfBe5kzNrVGbndj5KGbtMrU452B5Mm",
  "key4": "K3Kn1F8nWme4xWHVWrF1teWvWgqyjC6rup1LMiq2dhsBaLTPwdHCtPk2v8KaAYA4ZBqdG4xKmPsH8i3Jiqeyx6p",
  "key5": "5MqMLHLUqeh8A13gUK8n7CRRkm2wUYToAFeyVA4wFPQs9RBb4xR5C2DiztyuzwcFyFAXG3EQZC9N2BABLQdFTG2n",
  "key6": "VscTUZBUuvAzJXrqG4eD5coTj9faH6xT6aoJp74jtUaEG5DCxYggU21VhdsjJdrYz2xTi54dS1aab9G9izdtdKo",
  "key7": "2LNBibc7A4RAWQbZ8nFJK5nXMxieoNi5Wkf6ZU2PDjQrLgtR92ZwgPdiKy8tUZZKCxzBeCJaFBgedY5KBoBJ61pJ",
  "key8": "4U3LSnq4B2yTd4fHCJjfrKH2j4QMojzwNRVA3dsDVqabzFLm1U57FEbfv4zQxKR4xtZKPkbvFrJE8DaUpVjcYdWR",
  "key9": "sQowBaFYuBGGeAYYFf1fwW1c8ZbbunK3ZpLt2jmBDQSBTu5CDhJNwGnsPdDEgXRnWxidRkgEgiZ36E6LqdZNbP1",
  "key10": "vR8TjRJKnaiYPkR3WuxtRNJoz293UwoKhZYh7rRrsPYCFhGSP9H3Cdwj4wK54Qt6dBYUgyLUAz2enJy747zm2HZ",
  "key11": "28KXk9SrDUFzAL8e2aGV5QDnfoA9EK4bshN8C9pnEARiNCk3RWYatvBJcjWUTuKNqBhxEedv3tcAq2odjFoUcd8D",
  "key12": "5xZWUoiboEcJBnvrg495AEdaEo4drZnX9jDdFynTW9so8P6qT9WCSwvu71U2yCn2gc3eWDXEqtbYGLNcNJRK4Z6d",
  "key13": "eF6T2fkbYPTzmWKAuTRhR1L1kNNLKZhTZFyLmn8LeinuZtdXVoXHLJB38qn98bNsatA3koi44DoZkkUAxyp8N5S",
  "key14": "38k4aMzSnyJsMaC5BhL4Jm81r7RPMbkRKjLCtTowFV7XkCypbukEjU93P4yYUnP8DJZ2zMDyuqNYBDiSzgPxA9LJ",
  "key15": "2JhkcwRB8ZZfXY2QZTyxsnTrZbYeTYrVhoHqsfrKcE4uH7W8soLhUYhD4XAx9yjw26zRVXRTGnidc74KZk8SP1W5",
  "key16": "2kh3WMzur3bVCq8J4UP3A4YQ6C9sE8PfNdf2DvRDgBzfcbk26mhmcb813imAnMSK28sqQzMyNtQ9yLPQYbcSJ1WH",
  "key17": "5u9jgjxwRg7bsF7bBQxNmKbPpGxQv1GX5AbXuzeez2hKtUnMtr9yxeunkTECCJcVwsAT8wEinSDavqgxu5u4cgbQ",
  "key18": "2WJwVvWhAS6TDUDNZmsA2K5Nm6zWHFa5JX7RpBrd2jxa4tfX46Eip2ucHbomjQx9qweZsVZqUnnM2LY87EER4teX",
  "key19": "R1Q5BshGKqpFfdZroA7sC9K3iN6dZCyLfsvZn6GbaWR2Vp1zi7f41jZ6ARvmurPHRxWdDxjGTeo9cuQWPQYVN9T",
  "key20": "2JRNMSDDj9ALBvkSU2hhSGRtLNNkhBhHk469MbHpnmG6GVrUvNFcQwEkyDx89uhWwGiL2QfKueXeKP8kpXTNwEEc",
  "key21": "3hxdZYUq6ZPZHWiq3w46SE6mKPenbyv8ahETjX1CpoRjcttG12LcNL8VFe6d8qMfoLLcGLaqL7Ygd9GQmsWdapK8",
  "key22": "4WkbYGfs2yVoDG59Mn8taCoV76BAbhGyyF3LD4YhfughNuiNXcRFnnjSnSw95ov7Gkp5WCuAs96CwfZEVYUHVJ2k",
  "key23": "2aXHzMND12GzqKchgg4g2MztsnwjdqXtiiun7jTcFJSpL4fJVa1L3avdgYdRpBHj6KeEHaAa2eTG97dtsfYjecA3",
  "key24": "4ysahWPiVh1M2tHwxphStHDwzMN3h2NkEj3VvKseSv2SLnewr7iWp2QyN7THgxVX4hJ22hJ1SYee6krTbYTY9pfJ",
  "key25": "2Wtt5upW6tvLB3MoCiGyD7RrNyWdT4b5a6DMcKeJn8m23zknqcGUkQkP2LmeYpDzfjiYFwbNKpsgscwXCSssLCT5"
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
