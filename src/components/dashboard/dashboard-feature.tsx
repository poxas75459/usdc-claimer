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
    "5oSfCm78jBSeH39yUbNz7YQQdtgQVLeHehExo4YveLmEPgNs9ov5iZHqvE87xAzN4ZVW73GzkNEqSE89MkDJdLAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Nf8EQDhmfipuRy15PeQBaPWmkcRG5ntCj2RmRTsfTdXj37SA5CtzwPnMb36E5mHtLJFYSfzzCxUyLZvWjq29Pp",
  "key1": "4j4D47GQEMq2DyuGcuKzQ6E3455f5cAfupiXsDgTp9b7jSN2BeGi7xv8BH5pbhH2fDSP1WeUAMW4MWyvchWsbRjP",
  "key2": "4ZUZKgyav3gZNwTvmEVCV75gEq4sBFkKs77WLBE24rW15AEbZbcwHcs9Nk5Shtv6rvWKoN63oCJggEFb6T7UfgB9",
  "key3": "5LQ4huYcXBahQ1SCX8eDPSwLzaaLzo9f1xwMXt2Ytj6J9ZDKFAjv8NRat8LHCWJfm3Rexd2pSDBoYjEHFfgA63jr",
  "key4": "3mfUGHPXUbLkPZeuzJAcuye1LQNJ5q4bZ9ktzbmePZ2fnGiom6HkBmJenjqu6tC4mpfr28RdMe5akxhZRtFv5Eu2",
  "key5": "31GE5A3Kmtvu4riySQNk2vA8VEVmw9yiTj7aEMV3jkhYkf7kAxvqvyy7QUmn3ikK5v3a4usErrgM9pcrfxfeNa2r",
  "key6": "4gxsX2sGSvLKSeiSjxQwzmCJ8MZDfZJKkJ9sB5f6ygCnkz6gmvshmDsAMfhx9yqUUf28PuPoRdZbdwNkWvAYDBg3",
  "key7": "4HddueWAKktS4sSgiG2LLyz9JG4bkNijuz1oyaRyV4CffvQi83BEvVKnYpA4Q6CwcgeevYwYjxZudssu6ikMZk3H",
  "key8": "3MqvZmbrP7dGfAutrryz5fSuJsiCRwZkvBswDPsha1UvTbomTU2ZsKFLBgAHivmKNeCTa4CnjDHJMewLx5n1zjdf",
  "key9": "4MR39L5tmiLedQNWMuSVBthQ2Z8XJbr78dfWTyUE6jrWCi2AqqPSodjkzSmJFnAJdNkhSVmMYjWZiCZ77rSujwYe",
  "key10": "5rPhydJz9QeVNpu3BfefGdW97M4rdwZXr67nCkGmJEcmGHDGPqJxed2GXPTX95CvZMqY4GLXeq31NDZZfVBSx4wW",
  "key11": "kJRCSq4aAVpKTnwQezAEGSybHWF1wxGQASsBQjCKWQnZbFyb1TRSJSQN7MWpcvQuzhVCQu9QdX3PTGJbxWV3GZL",
  "key12": "3gCizRu7pG2NVbRbHKkJ88ytFXENgeSePVopTjuAu4SDmS6vm7y9YvVXgp6WZEvm6VwjvXFPqMyURRKpWFo8meav",
  "key13": "3bnquRfxzLdRHLQEVLUdemfpPkyvfZninSS5chZxvy4gX6QqK2cZtgZmb6QaNnoT2g6NHhijm4DcG52EkfcfusZA",
  "key14": "JcEFnBxxxxiMgmWvUWw8ZVRGC2Mc1zywkNjhTwUJy69HzrsHgmmRFbhN2xFX6BbDAnyzPiFq3b2a96ERiRnBdTV",
  "key15": "52vkCZnq6bRYAedty3X9ASuf4YZqz1aYSqpGC7mqNmd4me72rbPsMZSQr3vnirjpCkg6kckr2Dd9Lzu45BHRocZF",
  "key16": "2CAayHpfRemm7MM4c6Fn87anXgQ44UrwJJkeoaxNcTvnYC11n9gyc61kmzALuMg2gVckL12yXeiTUw1pokSG5mgW",
  "key17": "Cj12odCqSNJKPsxFEYLuCxgSCh8DuhBf7gDx8bQr4h7W9Qdy5uEiMWxj9UnxkxWNLqwio3vu6r4a4UoEYFJ7fjr",
  "key18": "3SeJtj8qwjWhudME2GHjkdD6VfTUZUHyzRxwXBkkWxDSQ53H7k61aVX5mJWomJMSASK7AWuS9hAYPePJjqZ89TQo",
  "key19": "3LuzupqLsY5Ezv9C6pzKq6wFr2XZUEvKxGaNZTBLhU13KfQAyBTMvvCMcxw8yvqMLX6wBNEFbAftR2JicSepwZ2q",
  "key20": "2PSCKPVDmXawZwM5ETE1nbkAJYiJp24wkdBZMym7wFCN8c4qmZabFUFZ8nkZakaL33CVi8Ztn6n68BTYx5Rb9EzC",
  "key21": "61AUXgsboHNcXNozeWWwdHprWgbCoCAKkevyJdu4PsT9qeJuVw7eK8ouodWFy7kFRytEa76BFZrvgYJCeLg6tLaB",
  "key22": "4R1suf74Q8ekhy1DvLTCZAxmNQg24xAAD9Ae66ULgYMwVuZjbto5uYXz3RrqcwgwCUgXqYXjekxos6uSsyxh2Kvd",
  "key23": "4Wm6uoq4Q5of5NvW1PmtSjUEGNZkVg6DW7NEEv2TNC85ELz14T7jtoVreeE8cKYTp4sCVBiMTFxTfsDE32SR4Gei",
  "key24": "2Qc1tMzgVScFZwCsbwLuKLJH2L4R2Wr4WwmHbh8uXV7UszJvFAkCXmCwsnsYbdE5J64qRpJTsAbfNXbDMrGQEQff",
  "key25": "3noX3QA1LYeLAxzk9BGM8EZmfPd1yonZ7z73R8WVqRtPiarmNnwQuVDvuzMzb8EiZdsuwzSCpB1EFQ6DfEnTcnrc",
  "key26": "2bTWmPnFVbcCXsjyJoLYCMB4fmN5GKKZtfZJabosFBcKE83Y47A9ueHmVpfzaphMEMnQf7ZDC3Dhf96jqqDpd7w7",
  "key27": "52XDyRfp7iTdTcrCAMXRT35VWqd6Xkff3YeBJh27sR6KuXMvZY2j1izbazeUqRsR6HydC3x1Ys92EGWDz5gF1tKN",
  "key28": "5j53rxt57AVVhWMJjeb9MC6ZrKGd2UgHoUSMPd1VBvGv9ycwKoV5LSRB3BUxybHBna4tbBWPHVUWa9pcLicBMAQ3",
  "key29": "5DgNiZKrojoZ6Zgef9fPW5KApjzS4GYBYuBCSHkaBnUPwvC97wpcbfFsA7rkzFD7zwLa4hVBCc8fdMKaUqds9eQL",
  "key30": "4LuhafjQ9c2bN6ziovAmZCx32D3eDTSv9UFqSPwaeEi8QMgAtJ6S6P2SaCx5fAzrcHRqDLuMVrWVtgmNycMPcynb",
  "key31": "5JLP3jrcT8EGgYfHFJyCSrj7EeS2TE3WZbwMrof1kvtStmPL6TGNN4yESYjjcJ633z1vWH3qrzCq4A7TncgdfBNz",
  "key32": "3rYzPVKFM2QfJDoptm4STnCn6hTwu9dbuG2B6cWVnDixQnNqU29JPrvcxnmA7SXtBcd8u7F4yHHXD2CQhrfbD3Jf",
  "key33": "AqnF6sa94CtSwSEaZwMex1YQCVTS762NuGQMwKY4XURAecGfcoHDemWPGgaFuBJtCpx7671mGHYbp6dx1qmiyUN",
  "key34": "4ed5ScTGU8Kieub4uUNbrAyfWSW2U49rP5U9QhfAsSGxLZhoXpmyUbWcB7Xz8ZDyesz6jzPbGDQB64vGRiLYUcrE",
  "key35": "5Z1zzR4LVSmYF1MX7pUtGN56MR4D3qTaRJvhhQwZebjc5sy3hrXVo3VFddKgMea4YWP1nMqWn6bHV98ZeLH5VoWo",
  "key36": "3ug5CWgTbsMm3cXnhSYzWygnXjhGsSNPfn7nLLnz6EEBWMASc6saRDuaReYGRGSzNE9ASrcG74kvcjM5iLxxzuLS",
  "key37": "4F9LNnp4szcmkmkdPXsLXp7zUXv6HuL3ME9twYSpK7paWXnmtvX48qmKzot2rFfaKkdZhMYzNpE3JGodYseq3XEb",
  "key38": "nbhNBw7LqtNgmcAekgk2bPDQwCaPKxZ1dP2VeW7DQ5We4MAcxD5iSx8fvdAxGz4XjX9HZVZCdzQQNtiJ1zXj1EV",
  "key39": "5Cf1nXKdESZciqTyTs3DYXosQxwbkks3PkcNzbYKsr88XrpHPSU1wGe6RdvdJVkWJXZDgaYrVEurMWr1Jw7hCBiL",
  "key40": "3gU8HtfhLbnhDGadd7Qqecqc54wyXMVcw8JDWcfLyYHmSYxrPNo3snvgD2zs3UaASgvUZgmS2gn78DhmYrGXBPQJ",
  "key41": "564GAFynfWgTiGLyTWYPjnJ274aH7qUHx5DepbAvRzGmxdaDCDy3MAWcuoUMRQen65cT9A9Pq6YrHgoBbp21Z2Sk",
  "key42": "2j7etfWUzp8XhZ4Vze2Zj7XC8r9t19BzGUrNvoAqz3oBZSV9T2GbrsKvKibqnVDRywhpd99V34BsPG2tjdYgBXew",
  "key43": "2bNSq2yn1DKMWwG8ztnCw3S7JrCqT3CfZq3AxTDv4fzefYLJ5V7bBZajcjP8fNR3Ga2GWhb2CeSB9YpBUz7WLZJQ",
  "key44": "4LZDBwHnEBzcovTzepDHAXoMGjywd9SJycBKZ3WtFLzKa78iUWbu1fXynHxBzv9vy8Ezr55qgZ8DQ7e6Cep3M5XE"
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
