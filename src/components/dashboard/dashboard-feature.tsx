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
    "L8wdjU85zDyBFNazE38e8bQAQwPqjzmketHjpccUfJBLt4MUKTfZfH7JwTDVgMJgyYd3ethZDd17cEDdH8XbJC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3Xamj4tFoje34fLsMUDfH5xaQnj4ovdqNdv75PhkXmrTC7mAY2iazmvgYZ69uJuXAW28XxCwrMc9a7CXMobAss",
  "key1": "3mfhi6raq2cmFUavun8dYDs7jpxU3yWxh2BQ5Dah5U9m6MjX2DCwD3GUjEHwsRozQJTDKKS4BxM2V3ETGsLU1Azi",
  "key2": "49rTBaEaeQdVQMGSsn1eUrhBGjXFiGDtLSQ6r9mYAzxJnfDkdwELr4J4c5yg6pu4F1pGzQEWutnqkmj14QWpLiPs",
  "key3": "4MQ46yik8Q7AjLo27Edk8SY21TCZU6A3Sn6AtyftGzpLK4CHjLjM1uyXwt3td6guDoesxanL4B8jBnS336syQjbv",
  "key4": "3BjGM1YXTd9LNAe1tx2xTYhKackkFkBqeWJj2krwoMGVGGH7HV9PzHGwS7xuXvxNWJwktGUYTr3rkV1zcftCz3qt",
  "key5": "2a6ZuyMmaZiCJEKhwkDj1LvhDVKsuz48qWEWqNwJVuVwDUqnXP9szHqLDAXTnCrDjNSwbT8s7ajuidapQgyRcyEE",
  "key6": "d8GSkbEZeNC9GWRUScHjs5ov161gE73YyfXzMYgzj2QtvLk4H4LqL1iNiHs7tH98GChh9bwnW6LdCUK6nesYrsd",
  "key7": "5uKtDbnvFzgqDPw6DpeFcWyPNUCocgAhRmPt7QjcYz83rP1JhBJe5e6y4pSHSzonSXjWvTr2vuqjpfBSJhDa6knZ",
  "key8": "LwrPBPVtfQerfrT3jqoGJpFXkRqjiCBuDwjtT7uk8mBigi4uqWTcDSrXmrpD4TmvPE83KvaEtJfX8HyAXFHjYP3",
  "key9": "5cUCqF1rk6vidmris4umadGa4yRNxy6gJVWkB9QGswTdMBQfRJrWhajmA6b53yaJa66SW9ZMvGfdXsNns3wG1WBy",
  "key10": "35XKPnkaxGvUYXb5XyAAiuukciLtnEhvntvc17whxtVyc8N8HTNh8q9C72Feuo8B21BAot48vPDYtfu7nxaxfCGv",
  "key11": "2hGfJADNZmjAntDLNa4wjKeAbmRHYScpVVCgwx8w9qSpC2CmYZ5Z7TsKvGT79jAjmhSVYnpn7SNqAcbKkCvwGjxs",
  "key12": "4ZuV6eLxqGWckFf3f1pyF8MQnMR2pwvRmugSxykTz9ev82wPC7gPQF9US1bBux7kt1kkRoiYRX5FFGXR9gJXGxew",
  "key13": "353LVU5eGVp9qP2fLxdE4Vyb6e2714XWN85YrD3HSpk2Y8ynbg3u5p1uWgt87RGpVP6CMmdoiEFsLoE4XoZLMYCy",
  "key14": "2FjUVcSJBRBQcqzMUAg3KVYKU1n7jz4tQGMN3cFtJhvLyR7XMPkE76GvjEzUA5S1qxbg43GieqiouY3tM9ZXsCzs",
  "key15": "3x82BdKG1rdf1Hubw51W2eoBBR6p8J2z3XtJHSiQLkQZsZfa7hbY8CUqRy1sSMwxoEwFJbGL9des1oss8YFNMVVM",
  "key16": "43NrVFv8bs9cDR2bFtWapGzZwMhCg9HFkD9GMfDmxLKzk4Bc7zqodAGUvjSTgpSuqSTcxcSvjw9NSNQJHysxCiRi",
  "key17": "5aXycEm4hvCsDhetYAkCd7EVH6cV9WBpVhBp9uuLa5VmEQur1qQamjpCz7BcWi87BBwxMJVH7Ppq3GtAoxj4zaEv",
  "key18": "4xR4kVWSqpvfim227a7AdGzY7YAhYBA8Q9qfYhs7wMRi3tqqynpinJNDwJFd2Ffy2Vrv2HYg5kQTiZ3ygNrkboYm",
  "key19": "4hxxDpToZiqqeik41qXfQHZ9N5XMQBLXiH9vxFmSUMPuRnJvssVjduHpJFfSPij2zbLAx4Wa4wVDTKziJvN21qVr",
  "key20": "27bwfLK8pzadJEyjsanPaNUqjwnCuYhjXfvHDpWDKK1ypVtC22sQ7cs3HXNwqh9QdCKeHSZvoegA8BeUp9cBVe11",
  "key21": "5TZ2AwWK2JkRuTm3NvM6CDQFtCWDY2iZUrDTshHhkLw61tJGb2fdfZwCKriJ35JZVQByogTwDs86oBWSMuGH9HbU",
  "key22": "4VKUudHCT87nt1cRickyg3JoUbooZLrSNxbsjuv2b9n4SWxkfLmMDE65hcsGMKbj3KM9Cg1Zhi3mKWCiMBUXBvHE",
  "key23": "3RTxP48D2JaWFHhbeGZjqZYpviKHUrj2p8jiUtXTL6Z7gJZhrHbX77K5C2ns3S46Voi9CiYYdZMXVMyCb6d92qC7",
  "key24": "47fbsKFD24DHAFzgJ8MHemJrFFZwx6U3DLqG4YY3ZJTbRPUbjwoimYTuaNsjQujA9x4DssgkvFKVLC1UJrPXXJdw",
  "key25": "4JxoDT6qxANqTYdXT4NNdVrL7AuZA7y1Ertjzj2Tcw81ZfEjCUdUtRWrgrN7Q1fKKRhvQtUZPtsDgvdpHrUkkgRy"
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
