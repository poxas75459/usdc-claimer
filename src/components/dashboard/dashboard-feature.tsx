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
    "4Py4ydroDBi3HgVLfYMWRRPXEFHfPFrEBJjNfgHgH2UPyH8yfphdUjCfUFTrSp8mFmnqRWGd6awmukLbCS8gGQM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRHYACKUbnp3HSFP9zWP1YZPeY49oHCwonNtFXw27RPUV6xUrm8N2WnbVmjLS7QE4z2cXMhCuB8d9h7MPCcFotf",
  "key1": "95BRC7ocRk5gLtnpHVr9K8oqwnso1DQduFBADnpRSRrGBuGzMVKVqCSMpeHEiFYr8iGjZR1CJUq2PaQDVLgAWGg",
  "key2": "4m52DuUbtn7kJKNGGpsvu2rf231LXFNK8a5e7KXteUSSPboAWKaqeQRZPYj6HiqW2R1y38bN3RRxuRg2jvSPMCYS",
  "key3": "4Txo3AQhvxbS7WpgXRB83G3ECsYF5Hr9f9nySvKZ8WKn6zVGJZwJLPep2WAjfxaHgKWwvyLt7ShibrA11ewxU3mb",
  "key4": "3nU7zizYNnh8JQ5tH6CtgfVYr6amqKi6v69kmi9AtnW72w2vHS4mRxLeovPkpyoKqmfVz2GSTrRpg5US2XYZ25gY",
  "key5": "2ndpsX65A5SyqFB1VH6VNAe5sYykcp3X4mRRvczepjdypzHmAYCnJctNn2UELDEctnF7hbP82dj6WMaFtAmVJFQf",
  "key6": "4BvSEDG9xkhTZxMPP4jDhfpkZ3LCfT7vc2XGxRiEPtH3it2z939nxbwH1ewpjhHKTfxtJSQVwmmZJVCcwLLkFJCs",
  "key7": "5n1nxBT7xkocKLPyreqw2wXea42EL69h3qrfQPbFRgQU4Ks9EnYcuwx2CZxNAs3LYEamWxBva8UBzJfXr8j8KNox",
  "key8": "32KbV6K3WgVdh8D13z85ZCoDvCZ76WUZQa3cAtAqB6fVWac8Gn59f5VbQGbVus8bihJbdgXC82X3kvQ9YjcufoHu",
  "key9": "DjruYzwz9qphjei6ggYTT7LsVaR8zz8LWNfJHfpWYKMEKkehL1m2JFF3FaNSoraYo833F2poDR15mV6jrUjq9Na",
  "key10": "5urZJDfTTmaL5vWTDpYcWWFu8hJ7umZTZjpic5BdaVJNkt53gZmDgVKGeGD5BJgnWMMQgzYFbQoc2QNwJXQfShoZ",
  "key11": "3tMDmP6J74WcZQfDrUTPinSCD9XmodcVpBjcY59yaBjNF6UGwdfCZSdioUjidTfF85XCLyrc56nkLjnWxAvV6swj",
  "key12": "2aUYS4FCDtYKgymfQzJWjiAGPBBSP9uvAFcLvMvsQdZpidnJot9jmPqqvZtZi7Pc7h3a2Ajxp139uvKXM2mZNS5r",
  "key13": "3dVosJwQcN1RXyrXVdA2M3BoMmMQUyXcDTrmrKnsokerzZa9WjRKNs5o4uNffczsB46uhKYh6TKLFiRDquivnEYe",
  "key14": "QfqiKeqjP6CnfTuYdgRtRmQvCnZxgthQnEYCKRAmS2uSEq8VNsPYFMv1cc377TGmFxfJqEj9wi8udMSFghZbHjG",
  "key15": "2FEP5zA55KhfynAvoFhAPgRKwDp9q9BopUibjYfgHAdyLzfCzdMY4XSvUSNtFr6zJtbHcUfAs9xPBQkfaCRTcqiF",
  "key16": "4DgjzVkVCKJ68HNQ5zxbihium6L4ghtJZ6Br22oTWxVv4nEKXpTPLbVBihjunW3xn6MM7aHSPUkf3MVKoUBMPLrn",
  "key17": "5KfKWecdyyoEbSiZ75UEgn5XBHGkecvz4GLMQeoHMPMZzeppPHoL89Wd6WNhwNhGJE6DKa8mvW5GoCCZ8wJk459u",
  "key18": "3KRdHhRsbsrT4pQNqq7RNuw1igh7ttA2PW4H5Yep3txUbF4b3RJbMKvNJff1kjRZbWPFC8pALm1cXZZJA8Qc9q9V",
  "key19": "UAQ8MuGzsNXrZ1TuyCo2GLgeMsYxS3qQZHQ16RiobHNQQh2rQxyjHChHUopnswXeYTEupXGuUrYhLVFgGDXdqF3",
  "key20": "dCRaGRzrGy43G2RrtfZNJVLfaYqFyYN5KopZHTy5Yck9KX84noLWCDEEWrr1UtvANgsanuh233VQJtqBfSpppQt",
  "key21": "NzxWAA8WAuuT5RBJhNHJ5SxwfHZYVBAnJovRHbzSRKByR8x7QcHVNiXQMdAvudiSR7nixgKGrw5aaaccPUREEPV",
  "key22": "5AqyBbMiyeuE4xj9rNfcNjy6J3tnpRE4RpCP17hmui127YWYVh6XrF6ZueF8TsLWYyVj3NWwvitU9eCkPC5f2qnp",
  "key23": "5Ms3NYjm5aK9TUj3NiVa2E9qPXT3P8VuAVc5N8Znn4ze1VMBAwUv1hkC72gQEFmub2GT7qfSA9TDnodDD4VDPnNU",
  "key24": "5PMyCLPEGZMzojSGfSvwZKzfnYDkXHpHTGDa4bRGxfjaVtwrrGyCLFprqprRDHYbFJHCKVn3cbcANa2yxa1abBym",
  "key25": "2snSvB7EwtFZFCSFoti46KwTohnXpgKM9Y1gnNHybTCd9m8RsKNNBcmRvyqth2gRAwXjPP1S97J6EquisBkrtwMd",
  "key26": "5t24dogZtxk7sCQF3TKyeydKDihMB4eCnoNWBKzBWkMYGEshqLAfkN3VpW1V5bRfZvoGQ7Q5ALNtHEBDiWtdRYEs"
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
