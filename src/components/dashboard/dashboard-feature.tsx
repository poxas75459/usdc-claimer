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
    "3ZpJxd1AsYcDT4c6vQj8S48pzJg2Uvuwk6LBmcCN5HytaUv3aq3zXfW1MQjBKsc7kP66yyzeSRZkTETZfRWhvYgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nggk66DaqaMyuBf81vaJekm2yjJZ4dfUu4pkdCVa5zfCny5K6mu9qn3Ftju2hza9GQ7TpbkTcgTZBxrnvX2Wv1E",
  "key1": "3vNSgmqTCKv4hK7YupyCsefhJG2yWEprn6q3tbLhDJefg85jYz5VjaLqkCH8wDCA4qXD9o7h3mxAEohamVdQGkmn",
  "key2": "3xAuwf5zAJ7jtJWKNqcdSao1Z2XGquEa76jPEiipyWoFa9FxrCS7rzYhwE4uDiGkgadS3QB25Wycmrta8hopYstP",
  "key3": "45hUHP12VzM5E4MKr3GCCbu1hfDMJb3iuvwRKTjFdCS5L6VpD1nwzgLioJrxjhiQ2CJkk5qEbKFak62fGLztnuF7",
  "key4": "3bjAdBGFq4nWgsaSH5DQY9AogYgenKf4s95hfsGY8dtsE6HbgsVT4hxMHmiAmuRj9ZdWnXQ6nwmKxffQZJmSckuL",
  "key5": "4pD6Prt8jZ1KHnj21uUcNwZtpq4oFsXTWii3YvVi5wwwSCved6rJqqCLQQLgCgVoT3BFfrWrWiK3zcc8jA5b1K8r",
  "key6": "5NYTn6KqocKxzqHf8fgnhY9JcyfXBbMfwyDofg1jtU4Y5wnx5ETHJ1NSW4dCDLo6WXtKLRvYTpyiLr4JZfaBGypc",
  "key7": "3hWLCV37rDizAKbfGeTstrvbtMkAVpizRzbvGYVTTTZWpHizajQYPip9ZS8nnBqCnuLJ7ENnSp1Nwqqf31jhsF5F",
  "key8": "2cYso3EPRbKVJ4qSs3tnpPux97nL3Nf1NFCk5Gp5Yuu2zT27RpdP1kg1cX4GsDjhWKngWHmzSkVZVJ28BFWSNwAT",
  "key9": "29ANaJWQr4uVDw7UN9iGURbTnP5DzTLpsquPyi9vmJsdmYWVd7J13kPmDpcfUjKbh4tzbd9f68QV7vAGHBGw2bmV",
  "key10": "57t1sPUhqBfAAW4VzZ5mk9yBXtHuAvGbwcwh5w7UfBq4xwkB6SEj7sDWeBAvjdS1QFQWLfwa21ZynRYBGQYgicCY",
  "key11": "tsuQgH4TiTmafkde6y61iCovBvhiv6ScRAmT7zusLmLgHszk4oJ8XCuhrmVEprkC81fEPKwxYQYKaT2snQg7uie",
  "key12": "2Jh6HGRKJwm1AUB7gbpZfKWBs9hxF3SYP4whXhyWUGscpu5SYaHWZ2q4CL67aY6WJEwp1L4ZeQ79ZzbfuRBXUiFp",
  "key13": "3UzjgRFbGKfLoeQbT4RFVYSNDvjJUAUzKWXxt9jePSSmxX2b1yiEej4dZqcwCTN1gujwV7YH3rfr3eUCtjCxGaYo",
  "key14": "2Mnb2E3dVqy7bTEqCV7JY3631SWW8tpjbf66p6Hvaz3ovHfjPHEsuThDtoAn1j86XzPGf2Z1Ge5GeTiM2CDm1fB2",
  "key15": "5Ze1Hi4n7cf1CSEymtZ4RQjuS8Y7kLwwiN1pgDWzBL1HmbZprDZVdkP1VRBGtzWqHNC9Po4TycGnWdjVzZXQWaej",
  "key16": "5z5U1i3wa7oKupNneaZvEjWfu7uk5bMagLixmqmkvAFyzUq2ckfQZwUsmkizJX5HZSr4GsfvfvGdMLgqABmydyq6",
  "key17": "37qDTY4p4u4oZgSpLW8UkFwiAPi8NTPbarhccPXAHZZ8SC61mSi5cSEgWvEaW3bmgHyoa53Y7y4UvuYPoz6TPdok",
  "key18": "4hVnhTdtSWxo87FwLpvf3aCKMj2ewUELTkn1rtN8MFB5PKHxyqMxxZnt5zVUhHNQ9K8pPBfiMHikny1GPqVAeZV2",
  "key19": "2L3FASpfPXxjNpdbSPPXpfD7mziwPPo2wd4bcusf1VPkLdSNkjsRiWVYgu6A31i1X1zuTKViUmt5odLxJPn7xToW",
  "key20": "22LTRi79hmfJGonLF3FqHrUiEUHBSCxHmGeALYSMeHPZn63MrtRhSHKoweLU3QthGkcCxiaHMhTRYZjNUkeadPr2",
  "key21": "5AT7DdoTBtQd9RzF6pYtD6YaaWRBiLe7v3NvJSQPC9wmLGE6EK87rppPo5sLUZM5iLeKraWvaEvouU3W3Sy3HQSp",
  "key22": "N3L43x8TUZEmU2eLQpuxbpASWFxJKJ71BDm5W8yftz9DJX7XgWcGxsPvBL9dFwTg7aCaQzjRpaPHjtxkSN8Ff9w",
  "key23": "5RDBzZE396iu6jA33ovJcCgHpSQwmmZqGFHBnNRPMM2Mf9WgQcjuM7ThG7gBJz7QkWP2zt5LGP8D6FjWqw6DJgEB",
  "key24": "Jnj3yfLnK73RhCMJF3w1sbxo4YLLGoZSUfMDFNmzeAHLeGpVUcs7jAYAqL6aKJ13qmvjmg8h3wcoJyFwHkmZrhN"
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
