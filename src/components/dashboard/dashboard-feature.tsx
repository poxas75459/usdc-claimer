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
    "NvMkqLdf4hQ2tP1RKUK5AxpRyLfP5vPU9wsbL5vVrwRUFxShRbsVoujXardejLGTNumenYmWoDEkY2nWqPgwvr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfF5woSViUuwD5AcWcYHo99tWhAwn7DhhUWrgNNZfYd4coXW9yZ5nPrkqZQvGLrZW4GSVzMiBENXQc9x2RkjQDa",
  "key1": "2TwjoewffvV3isCN1MxMx4Gdo26UE3dc9H3s8yCVYdtFmhn4Dd5ebLF9iFqFcxsCVvMDTeTtamfEKQvMorHUv7yB",
  "key2": "2qAiHR8FDtKrE3TYpsNbnfDgAqeq84qDNW6DaY2JH17v2AxERVnfaSiUWt1kApJZwQLDmZVtXvtwgQuty8xMyq5a",
  "key3": "5t7hQvixSomPnX3qGWvX7tBwQJfNheHxTmjqPWeDxXz9FXxRTgpGmA8L7Ap8SF9JsFSTUmstMpchRU84HhcPVVQG",
  "key4": "3KNcGftJAoXRR6MxbCpXzaLpyzZAs3hmU1wgMfrgaHJv1i7SEC8zjgMFim6dg7MnwHKwsBbTWvg5DbTFL3Ygynjz",
  "key5": "2wBpKY2EikxRtMzKLUR9wkRfWoFmTcrMUE5No78mnuxudx3DHVuknvnNvKUjbmzNT1j6WHXgx9E6VbLR9eAsEafF",
  "key6": "gHTeoy3TrVPqCSwHhqSmwMNTgGaHqd4mAFbR5WcEdFmkgCKqcE6BWmgdSQADgBRuesFS91s6H2gMXUR99w593no",
  "key7": "4ctdnZ1G9F5sUyBBYTj2Pd8kTF1LdMvecoMTc47eMzVNFAXabu313U5XQys1fN4RLfn3YqLDnBtPZoAPttdFSQRz",
  "key8": "yX4muKeickEfuunbMhJ9h3RD6EhB69fsmUMyuGtX94tofpJBHKryxbYn7gqcaKQwMYLkxYfiy5qGJBKF1F82zNJ",
  "key9": "2qbTeJJ7MXRMeXN8YDbohJ8J19WQJcvSFU35RhJLszAvuwFkHuwWnshV8KDXvLKAPzjpvt2zdD64ygLPdKbjotXm",
  "key10": "4Tnx7DRJELESSgScWjEfvTmuwdVkP4oRL7FnnmhuFfHEGpjGfQ8Xq3xuhD7W2cwE8UgSDea6pM8oAjqmWBRMYu8u",
  "key11": "41UxSVgazGQF7YYGsYiqGoN3kTM22Ji4Fo6koQQqkjaRqgATWYJ8SF8WSuUdcQ6YiLPK2S4oFuRz3aiEGgqH4FZf",
  "key12": "3HkbBhY2fJRomb4MCdK3Qo1FCLsadaSp5PMtwhB7pYqrv4YrdVs8U88D3xagt5L5y2stP7cpgWjAUbKGBD3P3aEg",
  "key13": "5EvAFDhsVYyj57DHE2X8bXR3KrckDo83PYQ25HWo4XcYrwWtcRURzYMTyuKrCQkUjuGz5fP3LgHnvddRacW9z2E6",
  "key14": "56YxMTnC8bN1jVccSi735yoFcjQ2bTtfMEwTgU8so2fzbzGX1AgfUewiajoDBSE2hnSs83vQ6u9RY6dz1WGtvojR",
  "key15": "618jsmLwZRc1xEHuHvW1RcpPt8YtwAPoCEB6sDxft4jGrfBVLpdGZhY3CqZsU4rf5sHDN7jWcUVqchnSpH3EAv5V",
  "key16": "3Dyp8fEJ69sn4YX4TVRKGmNhSLVNNVvhVDZmLDaseCS2n7y7tZnMrYZBqytnGgDB75LqcNa7hEvkbRopLLmKHTjy",
  "key17": "5xXBCbQKMJ1RB7GoHNi5hd3GVwhf1yHsmejtPWEKtTfekft3HWM3VUay8yguXRHerS3EUhYDCGwkXWwUGru9pqrM",
  "key18": "erzQ8Bb7ZyDg9SSxFFRKpZdKXPDuauZ29fWGCBiqnTJhhtn8UgFVjXWrrYnEeFkgUEPfobzptErh9gHG5HWzv5H",
  "key19": "2dq7tXYZR9MvV68BgKzqEZQY4ZAtQa6tmKm8iFvAfn8Bk6zJ6KQRKUAzT5WGhhEVc3q6Wb4frpFz8c7QZfVkR9HP",
  "key20": "5q25pnCvq2KUteXkJkanfYLf4zRsHV4RS2D5WdLvkyKHhAS76BH3w1NbXSL3EdFfhnLAeX7vnJn2SxyuUQX78a2B",
  "key21": "2H71urjvkQ7E6n8wuvdKdPQY7QPkwDxuTp29iQXVUtSGUHHnUgoVasTTmjcWgCCvD5KUvEtUVHUY3VBht2GfqK7K",
  "key22": "3owJngv8vi24uft5KrLR4dJJzoZgnWq3GRCxkGTQjrn6oRndu1evJZAFQWYg1SGqsPKN8AyYbTRJSaw49UMA2E62",
  "key23": "2zknZbrMgw2ret7BN73Rq4a9zvXwgmyp5xDVbdkxgLoh4YggTRVrPNZyxMvb6Y7FF7rHnpxiJo5dcpEjGWFKHsV5",
  "key24": "2PA8twuX85pa3PwUJiEZejoAsedBFMMTc7m1biHx4RtE4wkdCzKjNTBABpsAns4oihbgkixCDs6faWUe3WGXmweg",
  "key25": "2YPVEk1rv1zhARdVbjr9XtR7r1U1sqCWgVH7tPDuxEk8sPoveg3RWCTQejSok4ygAYx85B7pxatGbR5Ve8TTsbko",
  "key26": "3SSALWBiwmWn5cw2nCiLuZT3Sb6pSs4m13isWF63Awj8kknpMLYrghA4NFR9EoNsQ4SrqvpAbUFcUSJitviF2RXW",
  "key27": "1e48PJVRuhrCPHATuwk25dMbG3eUnC8xycP92h84662a2dyqb2cgZyKbxEt7CAE5on9YzpnFe85KYLVxwZtJk7Z",
  "key28": "5oL7q3e7qQUBv2QxBttWXQVEzcbzo69rgbZ1NbtqD74Nz8U82eePDEMKwwyKqspjYSiuywJZjsdGSSm2YotioDYM",
  "key29": "4q6QqTc3ntiDCjgqycAWAB2sMMK3cc7Pf2NiWwf4xuptLtzeiMyW3AAQjq8oHVVQqPByoEQTdod6WGvJ9zNxfequ",
  "key30": "jcJg3tFNGjojSHBmtNvgCzxz65brTqkwSvryyjSYMZeH4gxApGhUZFJ3fWTMFdAsxubzLyehEt8kPScXZXcHVnW",
  "key31": "brM7MwXyXdV5qw6pS8YWLGSwnQRt3mRcASRS7qcVxF44iX4Nayi47npEYfaLNHmfKQ3wJiVYeoGMrvjG5DTLjwy",
  "key32": "RcYnugWpH8TDXfALu666TmLnMAEBdWd9hktoXX42vFRtz9r4byombUojUygFyGcq2t448NddpufQivmzBfXpvrt",
  "key33": "43nBGgcHtfaCymAy8HjPbZPQb5UoTF7DsVhcejXqbBk7g6v1ooHPP1H355aHEzA9WwUVX4nG1M5jRhkab4EEZPJ3"
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
