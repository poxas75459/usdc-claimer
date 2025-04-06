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
    "tiG1VrEFGEiKytXHStcWVuXLPAP9a8kSvGxZDoF83Eg6vFoyDUDC9yXqpEpaVP3a1LBgAZydpgmfNP468TpTdAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNUfaZgEubvTjYmC6hXCPNBSpAdaxsHv1RpFEsiVfbGUqveyRrgcniMNbuboKCLFtp3GDzxN2Lkf7CWiDMHp6Lr",
  "key1": "35Rqrj1b4zvwkoZHiM8mf9TRSQjMwXoZEKfsnJCWnYgbU4EC3wbeShBp119zAmwwQuN3nJqWAHMUhJCzfxEgoTk",
  "key2": "TpvMEnACH1z5ncKoorN44tZNQn5iz3SDuwHqrw9Z1K3q7z7KhBPSHPVcfpeQJYNXrLHe4zKeNHnF8ftWHBt3qaa",
  "key3": "62sMp4gkoy5JZcFjQAeQQsWxMkKqEh3XkzbpzXNgTfgfcMywpVTfabuLoW2e5JXRfWgoQYXYNsX3VKFvMtqK2SkF",
  "key4": "2Y72quCh7BSyjof7LxevGJtBxTf1jpPRwJ859k8UtEXm1vcPqMsuWeN84eoK387hTqcuX17AnvmsEbx4ozwdCVeS",
  "key5": "536tXPgemEYE26qBKVCsK27jCBmqcoudWK1idBPDWwihEekBuFrPhBvDZLwhg7tKqDZMAPzfmft9cwHQ7Zika1iS",
  "key6": "5ZoCdaPyysnFuwj6gqaXGSukKJhRH4uxz4kXM5g7NHZbPCe65B1ZwZWLtJuU7f3vqmkMihBkJtAhGfto5eTDps89",
  "key7": "7PByComvXQPP3gQeJF6T9wyPdAYTvpBNnTTeQ8tPrfMd8aqE22FJMuKsqADyVbRFYQ8EN78KJjPubC3ZWwNkYaS",
  "key8": "G92hnjFrdTNQhg5ft7L28Cyv3arRjb5fVywZu4kSVk4ni8wgS9Enuu8uF1ZTqFrPVeyY9ZvhyF5hJCQgyeYX2H9",
  "key9": "PhVsQneGuA3mZfNgwRey9paRcCbV3XjWXdJhCQH1zTSGdYecawrUV4cGbWUmqeu2pBvJSR8GXFC7oGEkcDuU4p4",
  "key10": "3TR49oPuW4MPQBLh36VvimVk1H6VL4gDHNVHZCwyikEX56cL6u5PmGyNyYGvNEXgNTqtuFfFmNaKj3tQDayEdxZZ",
  "key11": "2t2gaXLw4RA94ab4JPSzRQ4bTCwsRhUCrNkcT5wf1JhCoHQuQUgHFKUL3xm2NnsWxnjrU2zPStWGX4BmSv8Pat48",
  "key12": "42GPxRDf8ph6MUgyW2cmCAtXxXRVFfmi7kqvpeqSLRqHxiwDxdDmGcuv6GeoFkTCi6FU6ndRoNF9CKGTBxpDFXgg",
  "key13": "42VHZ2isDDjKZi7nBGJ4zZsANt2hUnJoXoBxc9jT3eVAQYqQ5uAZY5cfhRoxPbpvuLbygrRuEccR5CQRnjGortSj",
  "key14": "5sEsGRwGgyAojzFfFJyhVDDEmBfYpYrqryGH7KnsjFe3Xt2U1vcJbUsVvZSJMByLNjFE4tG7vdmjjqzt3bWphHcz",
  "key15": "5DCrLrDwwBCk7LjjjX2U5P3ND1sqL1MiHExoECCixebsyPBznsNHzEdyccQbN8zwespRXfjW7y22VD2hhAU9uemX",
  "key16": "4iGRZQVoMfot5bA8ZKDxqmfREYX4jsFRJykzLP1GQZSspvFb42RZrieFanAF7rx6ZbtFkFUkpFAGCJWYwHvnBEfw",
  "key17": "4kEa9w26WQ9B9cQehRXJjH1efSGFwH3S7fbj9SNDAPG3EayMhAyDiYQ4PyYtPwDVh2DVAeK9NHh5soWDch876f4Z",
  "key18": "2HUh7tGJpYk4fZZQ1yvbx2GWYwF26twBKMvURJHY4SKhqvQa4Nwgg3kDFS2dP146D4XhKoR9ZaNihpcD8JnJs3NK",
  "key19": "3nee2N2G6LRe3mUeMfnoktYBKwzCoVLWTXSVUGPqD4vcVMsema1uLaLaoox6qRGSbSsHcy3qa7yNo5LNSfc6srBU",
  "key20": "49DU8XgM74CqUv2LGVpHxUnuhPVLs8aDm5LpCPKWEFpGD5hrr2kQiVkmLuwc4WKxmSkUftfPkZJnh9GJckLLCaYH",
  "key21": "3CshrVeLJJiYCakAe4rW7SUySwuSqbzLRYtjWp73EMTTjZH8j96FvgR1ww5ycjjGswZVsqBqB7yMKHZEeTfSaiDg",
  "key22": "5RRm8iPniY1FwZtVpSUsKER2zJe3rYEgzzvqi37QJiEDpxegeHiJWJoQhMPVAc6NmsgHdCDKFmnVSQ5vTR8LsGK1",
  "key23": "52W6rWpskdeE9JkQ2Z4Je1ECAz65D7GFizvNjo1KND3pQaCaDKXoqX3kDiht5nrH2CFP5zvhUSVNgVZzMCWG1v5T",
  "key24": "5Aw87kXA5TxX2kgGZJuwFJdZ21qZYNv4pfuj4QzMNAhEudW6RTMGMTS2yNgap6ZJw2v2zCmcBYfZkba6GUeTd2kc",
  "key25": "2HLtfKcpfkB9vpJtGZGfRwwKsvur9dWu5dswKLVANii667Qqc3i3J3kduPpfXczLKyhdFMGp38xFAAZ1tzmxEego",
  "key26": "24q26exMw6xo6YWAqczf6XSLConsuvDsWaVrEDCBY7aaqPW9pfaoTwhNZ1itgasTHsRndz1W5tXvc9gim7xQ6dx5"
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
