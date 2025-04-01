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
    "5732vg7Ei54qBBsspA4CgYxQM7R4T2pQynHVtU78EtrMQfdxTEwVQMF6DDt3FMqSgEN4yCv7jmJ46ZZ8Uf2RYZpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWeXLugsNzmNU97aQnHTp6Q81WLZibmiJah5uoumqFQp1D2b6zJsyNXn99Cz3PfNszeJHZr8MWjtLeRTwcoBRiY",
  "key1": "4PTA8ohPsMA9VBfQSz4GKX4G554L7TyVRyEhoK26CLWeiDbHbjakeCWZLeLCDw1f78D4HJvUqB37vaDF84ttpzwT",
  "key2": "4w4vWAA4tFTsXQWedi9xZejapUwvTuJ63wiRXRBmYVPkQ71k5Y8mzYwbgbCTpa5CkrYPkZdo6KU3afkvYjA4SBUm",
  "key3": "59z3QvTBA94gowGFjBBQFrqSNf6beqLomjGhaq6aU9maeeTw3YhTtoQYLrzdcK8o3s6L7EJkFRNfoDvbN2Af82LY",
  "key4": "5MAnC3QxSZDRw16P7uLyYJSuUMzNrw4aFBEmouHQMwhoYZpa23MJdsJhFcNvcrbNsiwYqyr1xawgkJPFEGhcYkPw",
  "key5": "2UkBMKeVi8pfqvKmWaQErCL9PtvHnWX6opoH71uqGcnDPJf79DrjqeiDNR8xtZgjNNzdZVAwFKxRV9SsfhY7SY1A",
  "key6": "3R8zpBKyByGgtBjFNei6mrsU2w39NMk5hGYNu8EYr6WAELumukXrHzC4CutdQVr3837RKQhXsLGb3wKWeQnteuwZ",
  "key7": "4ZUTyUNXAzAVDkxXtf2vhg8E3ebCoNuTUbw9qt3GJcF4TZ5TTyKbihVLsoHzvhr1GGC6ycHE7YjujomnZ7aWHDmE",
  "key8": "gjURFSLfwKWyJRNHvzmwfZBVjkFoTb5veNfStJ1gbb4hUgLTPRSFp6Cv2GU15u6KMh7j3QE1gwfuM7pJe4uGyHd",
  "key9": "4nxXiE4Y1qeeNTEUf8ULjEyNzf7EPhY3R9DA2UmL8CvsQkUuXTAFmzD46ibz5BNkDSbTLZTRDFW21f1HCVo7cKgQ",
  "key10": "3v8tcCQ2w5XwREhNkm3oqRxqMVVRRsztqU2wJA89BmN7dFysdYpfj6BCsj6W7BiNXqEYMdpmVTaPjKnr45eyjaAD",
  "key11": "5sz6kbbd4Gst7fb28dRSUn7UGKPDY2L8tBPPbvkYBLtnQ9KcPzUXWoDaFUBDGtAiJnWSobuZCBpyi1M1wCkyTToX",
  "key12": "M7MU8yoVKnQuhNyJbCmfe3a37E87XmuFE7oL1HqaKTPBgt4K4tHtWoCB6B3Kz2hmu8tjKtgkCU4RKrU1djQqoNt",
  "key13": "4x24AypZcioWeNome9Kft2MKvKA5WSwA8BSemETZxM79DQyKan2xQ5osehdGepCxN9VVun4KHpXmtZRdsXFWRuuz",
  "key14": "2xEryGrwWtfGRM3so4S5duQzrjJmzf3JhodpxBZo1Z3tvnyKKhUYaEBvZAcfM6Q1jbjiVBZS6XD91TfB6UNCDitr",
  "key15": "66w7Fma8tqUDoaQzaWoZ98LGQENR7Tr7gtyNBrVGyLB8Byi9MXjT6LFgqagq4WXwwLxje6c1Q2jUuuVtspMEXcFN",
  "key16": "2wgujVdjQJbXTiZ2iEjYtdhBu6Bbqfgzac1GbK3MUsU146TSxvZAe4YYqpTqYehYBcWBAcYHLaQHTkuiZVasrLKq",
  "key17": "3529SoCytLR8NVEqG4fp2YhrQvWMc8pbgqjRqadx3LSGKWico6kxKoHqtxDg2W8d6FrGUK5JafrGcqvrc3jchzJW",
  "key18": "2Q4drctbUSWzUQehdt5B8SyNqTEvSAZqNBEpgVTJ5yE83GDefB8fgcfqK6mUsGhP7sYB6CucSX1ggtWXFj7n5ZqV",
  "key19": "5fg3z7Kzx2GpTFooAi6Nf5ebjU2SLztbrTskLN5gRwXwPx4rfAqbyDANK1WGTDrwgjEEVJqZzDbsdsDRuf7jJZH6",
  "key20": "jVUS7tYJD7Yx8khw6jc7pHQAvkC3UgsbiqYjmX4h3T1rt6RpwvvfGZZtRyqGD3FfyFUffbfKEANrYQeTEdUUfiL",
  "key21": "CPS5tVYkT4BoyTAqbMexYnF3X52g7S4UoLq9KaDUqWeAVhogg9dfrCQTdq16Wm4ckXGMD15sxGymPLk41hqNLgR",
  "key22": "C8f5H9jSHp97FLM4K4cpRE83rXRrWFqBDbXhkHar3FsnGFk1pgtasgFbqRAVDGiDLjbJLR1eD75x8TiD6Lq6D1o",
  "key23": "5R6MqkLUiV1UNyLSjQneaYfHRjx1FQRxGff3zrVFb9VnXt7au3QqH7USnbS8tK9nbxa8iPXtrRJrkVvyL1eT96eR",
  "key24": "127cZWiNwXjpqSDgRCttEzNRk73LA7RTYshSaJkQY7gj1n4N1xHVWLh5oZk6X5hVsJTas15CAS86akTH3poppAnf",
  "key25": "4ntLVwqZymqaR8REMSeNA8pTXS5o1wyv3cwcyNjvHcDWcZsU6S9W5zuC6pu1d7PPjEuye4w9Naveh4dZ2dgRELL2",
  "key26": "5u2N13LiFNw4ZdUov4dftUbu94eFNDqXZspTk7PBL2Dk7ncGKpV2okucEi6EK6PTb6PjCRvQfXoM1mKs1bG1oAHF"
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
