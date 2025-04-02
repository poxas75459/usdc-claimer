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
    "3fDGxAMbxE1ikRmcyQu8PHkuamCNyA99GByqCV7bGmhrkcSKTQPg8hDxSUdGve9AqSWEgxhjGr1Bzg5BtAewZXnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CADiCFbRaZbb8xzMxUSe1VdiaMfjttF2f5jPEPM58TmvSkHz3v15QpZG2PVDQfqgc5r9MdzqbBhrDhbGZuhNoJp",
  "key1": "CHu7TzDLR9bAhiiLUPwbTbR3CNYTG7q83Z3n1VPHAK3s88K8W2PfUFJLg8X9KuXRaKScPsstQpFCqhCkX8fkazp",
  "key2": "3dvgwLAjGR2xsvLmxrLgQdzMUWhJsPNEdtNLAk8gxCzVjQkKzdLozckMsG3XxpMSPRifbrD1mru2rMw29xaxUEN6",
  "key3": "MbNtWBusgL5mUoS84B1csR592d9QMjBD6eA4K8iJJpGxqBRN783sH7XjhiAruERsaocKWGpHWNzKx8Unga58DB6",
  "key4": "4CK35oSXFDKjYgr8z1uh88uHygEuvEzGtLEZH8rvsWfXh3d1QLHJruKQbtegJLY9xbZzDYku7f2j3kampEPL5C7i",
  "key5": "28A5NTAunBM18KRhnV3YpAPt5GxE6qb6L3UWeKhA4eTWezQ8e7CKisNfdTytnAtVNybF4VYrgeunTCcK5H73xcCp",
  "key6": "3XHETkAkxGL8vWMiMS8pHA6reb4b1qqLGimGQD17a9Ek6YHrpAVJUgzMQ1KjbfxonKX7ec1ufGjvc2MMwq4pY6R2",
  "key7": "5yc52mENMLdLZSrGwtD3pZJW1jDYjAZXhpKGVtqofUsYPqvxMLN4GDdc1sSYbK4gk65m9Lw1uMeYLvoJE7wSMpnB",
  "key8": "4cg2Jp9kSVFqsVDsAp5XpSSJtHu5TtzMv8wJP6jqQWs4eCz5htGsdGzDVhdPLp7pbXdsUk295ew3xAxAXurwDGVx",
  "key9": "4zVye2Fb35rHJFcjTHCyGzDJL1qmw4iuFEtmGdguAGuXZQV41Y6Prqa4YLowPMHA4n7xZCCCgtqPnXHnv1wd7PNP",
  "key10": "3KFpoqvz4gum6YXUaWkv3ZFM7Y6EMoAqyFLMygXqrgwCFy9DuAjCX1mgUEDf5xA1q1C3ccx6BbRCH6b8BsyjgiZj",
  "key11": "3sYJNVAbFPb25ydrdtAmALd1brhD5YeJjKB5MBgKiiERqtC1JCdVP6mvTsQoJU39JFLQo7zk42cfTBgmy24uFLRh",
  "key12": "3hHLMpEwg8ac9oLgAz2nCa3MHxSWkEFWoKBizqPtd7XebiJ88veN5AUxi6WkyCqruNCC64iBcr94h65Hgs3hjWqP",
  "key13": "51JCF6SQWBFgd3qm21ii9eVYGNNaNLXfvKKotMR2JnH3rb2bmShHeLHDi19bgfWiRK84t23LYK5xB7fvvhg6XdMC",
  "key14": "52jf13SPGY7inbewWRskGfJyBeWkTtommrrcaGD1k46SoazdqQ28WuPX6EYrAfjarmohD98RYdXCrTRrMsKeXYn6",
  "key15": "5N9ADfjFDTJUzCf3JPyeyQKmb3Z8b9VhVSqfJ4PEaRK4oy3XLN9PTcqcMfpm5WHha2WTev7bvfXyjer2WJcAnVoA",
  "key16": "5ShvQJG6ZShyeGm2svy9TiAGDSQqSMrp4ea2GJgKnZgarC3HLm4YUhvq3CH5TtopUUQdW2CrpCMXUrVogqWTnAi1",
  "key17": "S9JVp6DMAokMD31HiRGCoJ2h9rgYQUrH4YwomRaWmmFSR8nNXvcA1B2bzH4GRcHEBU4NARDrydXf584wzgAoNXA",
  "key18": "5Qr5ZCpTN2vFQqUFSq9XunJndejxFiXYez3NQnf6wBLgi7FLed6wVq9Uuobu6pDmNGAKkWmJnCc88Q1FcRxx1cs6",
  "key19": "4QHDtP8sx5r6aJ2JK9ooTNnWEwuE74snAMVpKBXjWmVArDNC6znH4vM3zSWaSkuUNhHa2LSmDpvXwSTie8VPPnnj",
  "key20": "3M1fefGUdkB6x7xHj9a8954Cxjxg4GqxCKHV8NsxuTZ5bpbZ9mzbPZPanMZFP1rVc4Y2MG8pBHuzHXHx6XBLD2gD",
  "key21": "4PiSicG3UGaGBfpGnKJwMBLAvnZsWTeEAy6kAoS3WFp7iyaPaspEvVZgDonpVmEfgyzDQ3mXFJ4NZAWZr6hd1asu",
  "key22": "5PDGKuFpG35sypYGLymSZALt69qz9q1oqRDBsqRa7K5Ao7ef1s46rFiUAZtW9GtFZSGF2Se8HSPSyerwBbnkSeUE",
  "key23": "9NpEVNhSoi31kCf6N3w5Em9efPGyPkLLEnYUqCdjYdREaA8Xam7YTPMNiweq91iq7PwRkBErPh9ySPQNkg76M3G",
  "key24": "5mdQqwvzoUbXbBXAsnV4i47yGeQVfuCBuahx5ARh87wSmoeSoFMKGEWirVsKcXtbjBxdGGv3b2rwgsT4HVvvxQQ2",
  "key25": "2yzMamagrj8viAinJSKs7pUcAkYcmsVAosSXptP7ccasXQqrkc6qB1xStnB4vvCcM9NFfZaAyNAqbJVc1EboTDsr",
  "key26": "67hzrTANnhUWFW7MRRJQVVsoSK6XaYZSJWpXp9dKtLhmBxd9N9BfonXoQrbhNsCHGTUbDLVrcCSRvCv1Dau8ZYvh",
  "key27": "43rdtzAXCWWf7hqzb84yBMrM9hurHKK11u5keazExd4DxPdRyKCBrpcfaCTSYsLkSWH2asucpUHyWDuB7w1RUSXM"
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
