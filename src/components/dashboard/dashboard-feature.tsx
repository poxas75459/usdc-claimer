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
    "3Nd8CAsJedmfUXhiSid7syDyDgpgR2dY3Ui5u7RCUwQwdCAFiSdqB7ysHin8oCzvYcuWv6nUNEgYcj2uo4Vo4NhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXgkbF12Dg4b4toEYTAef7dYo5MJRpP61eVJfoKqf7fwS9PXxT456D1o49MQS5as6LLsk5PQT17ngoWpE3XobGm",
  "key1": "37rhv5KWTVJUb5GQ8VsAWb171FUkCBwQaotsZccYWBFP2iHCbW7gSPx2VWXnYNS9AAmSaX8CPKaU7zSxKouQ6vVy",
  "key2": "4BUMLC71hfe9VyGtuBfnBx8uBtMBZthQx3FjR46c6ksuhHE1fEpLQg7wxE74VXVHvKQ3f2oDdqrXk86LsEKMSKWS",
  "key3": "57ffF8hmijW5rDv6QKS6JMCoRds1b9z98idcNbyZFwU8LgFx16KGgGU6qKYttjkq8Y9MhpNyMBMVzuuVcrqTiWPw",
  "key4": "4Pbn8PEbMZHguMCbQvvzTntjijBjvPXtuoG9xZZ7B3Hmbb5nRCKtK23RwxjGy3qBVuzT5Guk5YXtCriqxXXeF7AP",
  "key5": "4Yos1XVFidRKztAkQCo4o39FRnzjUoyM26BbCeKpkmCVodAV6WmThXR4wFBpHmmKXrqrVWsaUQn1Yung3sDwnKt2",
  "key6": "5UKSxMKdje9FFPkB59inXv3Z7NwR1MpH3RbUyBzC3V1yjBDe58fUK5F9sKhoJEoBh5R1QqNKKkkNVN3oTnFiQve3",
  "key7": "2P2Hh54bXFUd7fda67VSdM7K15DXZ8FMPVEqb6hqmHoPTNHC28jqpsN4swvDGFCvAsLtNCCvxjXZYFRgsFcYbcxn",
  "key8": "2Bi4yduHTg2fCzkipjXRWpq25XQfEQKhoANHSwUPGVNwMDmuLqFMceg6zwu3b3zVFYMgFA35QjcHMevYPTfoSzXu",
  "key9": "ZyG2GnNutsbVZeAwKJTDc4iia6mhmzFyozKGbgdMkUt375ED4Je2xkw9DKvZkh9Kmmp4aSfHNxykNS66SibzPnP",
  "key10": "36tbDLFmH2Wii1DSxmLNQUmNvniEoXsovAZFyKB5UGcX5RkX9vDx3RxMdtUS1DUra95r9CARE2SEHV7xJF4Y82xE",
  "key11": "4jALCcp9LnfUvwebEcQpuuirPhdFVZCgbxwhzQY1zwv1DUjH2mzWFyrpfVbWuPbGyHyp1RGwkHc6HoPA6gLwK7HB",
  "key12": "2e2N7aWJvdHaUYNSFNZk9cmMxn1EiD6dNhDf4sZLC46GqGqM88mj2AWgVpnjzb1sudR5yxA4hgy2jBGZ5nZDDz9f",
  "key13": "oro6nVEYmvonLVcUEAvn7Ei8EVhAunYM6xBPi6D8dcxx5T5UPSD1ZGhQWidFuqrfobegyEtLaSR9Pz9RvbcRaK4",
  "key14": "4X6J4ERL5fV8Ca1ejBNoAszBPrrVcy6QYGPjyZDtPsV1Wmvoi7Zv8X4y56uY1kSaM18GAesJRhgRfCk9CN8asAj4",
  "key15": "sfpUNFcpiqQTQcixk7QShtMauu98xip8LhdBfsr26aznaUxzc3FSQDM7bEBQhF4i6YbHem1knPW3bPK1prncm2h",
  "key16": "hKwuBPEu1Zq4ocUs7oKYZkAV1v4hnbmVfPUgArVN9WLNFFiDtcowjnaZsmYhD9mQcKM46wPD8Rmvy3CwnxFr2ij",
  "key17": "431bQxtiwP2dUwtyQBkSASMFQVvsqCmbz5BR5qZd8wZWDtga5ZUceTorho9t5Nq7wRhCivGPNNwBE5wzmMmjEMFj",
  "key18": "Q5cXo6u2qX43FcgQFc3Tv5y36N3jUXLKqJ2H3Moi5Mf8H96Es4uPvXhJF8XufZPXHkQ5fT7Dw6eDTGeQUm1DPqf",
  "key19": "4eYdinKXw2CQd7UbAq63pLHSZ98tNbrK8wUk8poRsWcyDiVMe93g9N7gPhnzmE1hLQx5BMQhovJ47w8rsVKdBiYd",
  "key20": "TjWXF8PvMx8SXKsHgwCVbreAnyjVuWPfZhzW3RJ3ssqoNy7yULtAoQahYknWH4y42mseyZgepfWi8xuZ16JhS2c",
  "key21": "4KPtN9kocQbgv8rXhcmvMXeFqosxnemDEJEhrrLo9GuVY7uHCm2KfwbwTPPCPWxuWaancSW3TniVWgDGejNQEtZd",
  "key22": "4TiXxcPFn387ZkP5EW6CiSdNyLkfzdD88XpujKUFNhKw45T3dWtzn3vJmZzndbbXET6THsFFaDwtP7e8kiciT5Xe",
  "key23": "2qUk9SmW2xq9ogvtBb8UnW67eRWobsuU87WvqXR9ecSSu2Nc6oJ25HpezvGrB6RjuZ6cprDK58kX3McQp6ieoFfw",
  "key24": "LLUwCum1yMSYuZ7YTMb6WKbrHgwcvv53T8EHKiPhbNHnFwsqC2gL2qmtwGxtBNXN3xZejiNTVr4pqHV6MAxRRnK",
  "key25": "2fEoSg57tj7Etv1djg6Lpt2h4DbZCuxaJDkUu29AEa93tCpxKjRgVRz6QCiTuGLEQP13ZTAPifFcqvgVTd9gsuXd",
  "key26": "3MxfpQBXGQbBxhVHaaNnG5NRGnVhVB6e2rfyybyyvVXH7evViJR2tqvgvr3um4ReVJEPJSqbqAkiTrUhhqWz6WMF",
  "key27": "5fxZRtM7PQaetTx83EXP5TSbxHT8wjfp6heGDB7LdBDHEjgLZZUFSvRaEo2Z33Pm31MCsHKa2ZXU83MnvQf8gWzT"
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
