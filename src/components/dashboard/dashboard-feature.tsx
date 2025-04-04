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
    "3VtXwKhQ8TbBEcZaXZe5cdPqmUw38bh2SCMPKw4PGsVhAUf1BC2NyiJRAEfRbi9eW26qbij1JcLgnNuz2fHX8sU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMzC9bTraYVg8485HQSjSKF3mqEMsc56ryAUd9Akm3MkpmnBBvQKCBGi1BpNAD8iWT69p7ipGENTtyTnX723vKF",
  "key1": "jEaNxTb9HzUo7wQarJkQU6tgNzzkMFpsMvcnk92HbGP4X2Sm8LC4gcpCAhK79dwAzNsS3gqEc5LxQ3TuTpgWgXZ",
  "key2": "4QZNWfEfGKeJh5Hvrz8114jPzByx7upY68fWbroXFuEsn87w9kPeSAT4o1FBHHRMzb4bbLEwrsyk48JHHakYkTFn",
  "key3": "4oBe1z8eZWBS99QfmvzQa4qG8knbqm4zuh5cm78Rvah4m8YdD7uG4tQkccXpCkF5P9tsN3bKBRTTCBeVoJBaLc5T",
  "key4": "grye3osyaUzALTTt3YhgM3HP71ViWgVGyEqQ7KdbdW61zCwERn7jRoL3EfXRAqrmZXbeeFPQyTLvkGJPuHGrcmu",
  "key5": "23W4AkRGrJemxPLaC2rztvitbvF5PkcvCqB9M9o2bonpargXQH4QnAJ5o7hV5VTt2hP4eyum2pvDnY3JzzpqJT2q",
  "key6": "235siw3aAau1GTPpaoVEmQ5UabuhYhbYG3P6ddugrNfzejjwWtTXKyenaKUi8U65umVT3aiVKH2LEQY5KPfEb5Tf",
  "key7": "pGWxvFyiikBfYejYedBzXPTdQHYtHFdAXTh1yN7zMZhF3tAc9nUpcASPDxRars81tBviTxUunZd2JfcuYMdQios",
  "key8": "49TKkahP8hLEoJbsZRWc5hfTzVSeUN5PTuvw5X5aVnMttqzCsmYqhdtAddujC1ZXDio79rg3vQToDfYRaazjuPxQ",
  "key9": "4SL8gTe5aPWCDvDhQBAQEm2NehWcZvtrcydB35yzoaugF8Yat54Phk1uYHU9bWHcbQp2Tt9XZc6YtJSohVDW9pHk",
  "key10": "84FPqTQ39Pmc1AZc5WKGF89hjCnMev9K9fcEsa2Wx6ghAqzdoooJgGMSiJr6DXSM27jGfpE3QScxnCviGVJidv7",
  "key11": "3BBA2cg8f8bVLoBzvfcgssGTysAa98YhokLggN7FKQLcee3zYu3HZotvhFwA6s1fZrShUaxWqshuzfajVQZZXrrs",
  "key12": "5YhZx7eHSBbvoiXqrrnwdapdCU9UXwVTiFZX4KibKC7uJymes2wgdPUSE7unJttosSjbYsen2dpv9rHyWwWoY2Am",
  "key13": "2annJPmYfXUaTz7kyuyUmqpcMmEutzVJqyuBVnt9j3eTFDHTZpJLax5bAkqCMne8Z8nHC3ybLxcrVwFBgMZtjjxA",
  "key14": "5KFsx7iHd7ZDoKQCJMVmTkdoFXg1s29GaLqJMNZL2QP556fs2ZpZgCq5KU9LsdTXVcFcbHk4YANBtKkE5e8NoWiS",
  "key15": "vEkWCbbNsBN4JBsfu2XwFBWzVpJ5YYmoUADBmU42GbG3q6DPa9bk79dzMfcbkffS7T6zEjpAYuNNEpauFhv19wa",
  "key16": "5cb4yjQaUHUrT8os673W9QFQTzeuFWLGKjF3BbtJU7MEHou5kKDHzJVZii8v27bHNbgR91Kr4HRd8XFNnqCFg1FP",
  "key17": "2MGe2ziy17znBAsbexWZj16dpdNFvXXp1UwwYLEZqhQ4Fbw8FhKmJqgnrmhWfdvRbLcnQpaPq4fzn6vSpRjT9enb",
  "key18": "2cwB4tuBsU7aK1NAjuemcEKPRwtzRdsKPBksci2Yk9JDUB3jpwNfpW9BpMPAg3G7RbixKLggLe4WaJzaMxntxEJy",
  "key19": "2rbsVUsPBKjQDZ9AQUQgZFnCRz1XZmSwQmg6vCb7KESCk36BFYohmNd58AYLcpMWBBJpTGrJR6EmntBobEvFkJvv",
  "key20": "2WmwuL2TnLGssuLoxVUDdfxw2ro8wmxHcTLBEtZNqqtestFs1FLa3LrmBgLSJYioPiU1ZVjrWMApdkw7rM6scy6L",
  "key21": "4PisFFuWWEHJLpG4hfCaBtqcaRimwEehvNsDay7yokuY7SocCQDjosF4NLSGSjbhemKCtYeNf1gF1AdDppte3cc1",
  "key22": "3kj7B7vvPNV7RybW5JbmurDq5yuUoNf6EtDuroRExRpRESx2mutGJXnVFF7SDTbXFdEhgMh6eHUfytJ26jE3NxPx",
  "key23": "5Bm9cHzSk6zXiudZcwxCiwAnEd3qTAurBLToVvSh2KniSK4Zhm6qNTcfkUZsf88QQjJyPHWhHsytgqfaVDLFVQHP",
  "key24": "2pB2sUDoM7pB76Bev9Vv8ctqbhf1yokDsq8epauwWC26yUmPEvQUCZykQBXH1hah9aauhsVsYa23dTipk2CBrDcU",
  "key25": "3BwjZze1vKwaSg4dvEZihcEjG3gVuDVs89zPdymwiQ254gMXTtjHohpjJb3A3F1TGhD8z5jdivGrccmKso4SowTU",
  "key26": "4a9St69Sk4N1RBuM3mg2yU3Ak8ceEE5J9SoqhNBycBs9bGLhRQv89Nkox74815tKjx1ixpDUxHnF3PAyGaxNZCq",
  "key27": "4gBuv37tsEeobSM3CFQWE1Q79jzSwL69ZW7wDdsqdWYjLeFST48BvVexhNMVPQmsPqR5mcWasUzhi5KaH7V6L2LL",
  "key28": "4juo3gbB55xTPB26TUfvEUbjiUJTe9GeSzuuvbtfTKT85MJwc7jcC2XsTzQCmK2LFYo11Qf7nzg9Sgb2RhH6jYJx",
  "key29": "3qSoycp42SBP3MurxNgYAepJoqkiMZ5aBbBayUjkHMGZ1VXG959RcnYg42QqnDPamo1vGNfhLaTWxH995ZteXWnT",
  "key30": "24ELqsR2Jp1gViHz5CfE5wajq4DfkwSXycDsZn8srGTRUZH98nCQgjFrvMC37i4kNjt44QY7cyaWNzPVtXHKx1sW"
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
