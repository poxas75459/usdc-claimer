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
    "4u2sMvJf8YfqJVzEuL643CcNp8CPzkdV58HFS1BdfZyx3RCsFvXZevPgefVo8pVysNDBEHroziPDvGwQuWfJFpsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqw2HLijy4vmWvw5F757EZCb46JwGeuAjkmggwLgAopXBUj1G3B1BmFiCSBemki3Xi5FwCHZEhPFixqJdf6jBG5",
  "key1": "zsp6M1EN9YsiMTgZpuiH2ZLvykTag5itsZm8TezX6mv8QLta8Kg7LSWQrMr6tURhjTSmeDPwQyWeUBtj3a6E4Ni",
  "key2": "5nm9PGqbHa7ysA2DNfa9LiFk2nLpybRt3B73PmVptQbw5ydxmbkEoQWW9Mf7EEUaMgTCvSNv4A8wM6Yf8SHUTuHT",
  "key3": "4VF6EWodEf7NVAstxvcbDTRPuZEH9ZTDrNg8UjrziuoKocX29qvx5Ddm4xaBUxaCV1cASycgnfmNYCBEkTAu9o7q",
  "key4": "yHnnvwJ5sciU5iDJTANFezp9oTosi7HPmfmbSDUbHoYQGbVQJyPvW2dYT1ifzSkCRhoAAzGoqrKAJQxFzpqwEZu",
  "key5": "2Qhfij4HRgFW3oDupW6SpqXhzaUvWhCsBk8u7jYfsfxvWRupKNARV7355adbmbLYnpDyHtLyqEgLzzLPSRzpKhjq",
  "key6": "v7TRCLbrEiAEqmGENvrseHd7VuDaADn7N8WF4hixSCHmW1hG1gWGuneyyH4ZhB6frDbzvfs9B6hHi63wtXxAYLn",
  "key7": "5AyMQwzThSKP7skES2P4bQuRttiLz6DUBmyAN5w45ZFnDL7L49VW8DyUojAYDnpJVEsUMSuDPNHB4kxRQjd5GHVq",
  "key8": "ikFaomX9RuiYUbcdwwCTybzKVpXE9Yxf6JMPaks9k5rQBdUimLTc3Qd5T3R5ij9jBFi3FfH2M8gZbGrwrbrEuDH",
  "key9": "23SpxMAAyb8ey8hKr13tU1YsN6qFGNUqqkoiuuAUMvG5K7yE5FN2bLxXnAxEjWoben6PvUgCYsRfG9iD9CFA9mHG",
  "key10": "h49SfANNrwmrcKCEvUZhTwRp9L47QiUanQfsskQrRUsqWSX813eG2fwXEXf9sqEn4wyDqv7rwHgzvjvLPnPCsGm",
  "key11": "3r2TJhAzwKdd3CpNsHhokm9ffSPi2vxNPaZAHswc93hfQEMMLLhkHXGFoPgLkfXbP5kBBJaU23jmqaNfahjNREXW",
  "key12": "vmzBxV8NGyvjxc5MEAcdnNwoaMggcuwMxAcX7FbXXarRsJGdmpe6Q3tPuYABTjyme2hQYHt3gVRJGbzUNAKViya",
  "key13": "27V5p8hdjSnqH7zeNznp8EgTSV9DDhveQdTyMhUKy8H3gKSdMF6ic1srZCAUeemQTs8hyFJp3ddExuf3jQgr2SSH",
  "key14": "4uRLerbP8XCo6daKuT6SrQDpAARZewmnQKwNxXf6mRUsDLjEX3jZmPJm39yysZQHdRehLHQXny9FVq6kz7CXmk1S",
  "key15": "29f7zY8j9qwXu1VkSm1x3sgPSbYB6p5MowqL7FAXzKN8UofbqVrmiAK9K4uAZs8bh5gYUMNZaiP9X76X69Vos4vi",
  "key16": "35boenAfk5xfASiSxtEneFEDu9GA65QCcZtPRKq5NhN6WomtANR9QubtDhad56PS21CsGCBD83bT4zBekoGPfZCu",
  "key17": "2d6VEQDPvKVjNwdtrc79r6V8uaM3tiWRYYov2GCbmehBLPdc2jzNDC1Ttcu9FpdLYruqFmtF2bMVQ9Ni1QBDpazM",
  "key18": "mXoZfsMu5RLbmKrECFRZbiz9Ew3oNDh9Qvc88u7MQzDKqA1F2KLBmpMt1Wh7LdW7KSPZ4nLGPyTWh4LViW4MRUw",
  "key19": "2wLF2ciqpSZ9PmZNaQKPBahhCrqLtMgYYuxfbZC7t95USjjSC6bMfvJV4CW1EwP9GEwbWn4QFmVirNqPvtHcHJBg",
  "key20": "2RKCDme1Au9pjQ5NT3GpNPaa1fC9WfqMXM2GkD17AFCv9nFQ1o3yVoqoaV2F7V3LxLgWosMf9Rkw4cWUCQUiFpNB",
  "key21": "4zCvMTcHUwdTMNGbqu5hRLJKW6oV2X5z6ie6bQsJdoEUCpVUuSTguBbXgob7a1U3AJNf122meL9vkoe5mcD14FpZ",
  "key22": "4xPGjC1BDrKtLEVnPtSQGTtyVqTH7DXNYn3sQaqZEJjTj4rAu5X4vf53tLAeziNmCFogmm3HYu4P9fMfbmuJgtJ8",
  "key23": "5cqM1UjfvJE6RfnE1GhrrXF15DLveMEcaam1GL4PY2MmgX8CfvoPCUeXHKEe5TkZnmCRLW9zsSn1GehHr8a8YxE9",
  "key24": "3Wn3A7CsNRJQaRXx58p6PQ6n2pMyapkZtwbi6tB87wjTvshVqKAydDz82JWQbJzU4RwcDsiTP9fMrzqPRajMf1Mt",
  "key25": "2bv37mnjMtZ8dF4d27LXPAWwdssR52Fztc8m2tCsb5ZxAgvvpiLfH7sgkfphXhtpUidvupj4n481tZ18Vr2dkfiD",
  "key26": "4yuDhVpZ2f3CebGb416H38Q17JWnzftxCrucsTza5LbvNaZTykYERiEpWCGFgRNCoUPUA9ZdG2K2q2Txd4p43cps",
  "key27": "oeLUhKZMYbbhuveEm6nncD5pMBob2qDGXxQUwoTUjD56FwKpmsASoXmxXHTrpL686YbDZkG1syJLRtCZifGHiJo",
  "key28": "4SKzRPNQ8eAgNFpJYMF1VDgqj37yxX8BaFWuRayoNr6nkp1oRuyaUsYhDsHUhg1et63Ps7WCRpgnbrRxaedK2yme",
  "key29": "5nPkHtF7sCT7nBAQhRX8F5KnXknHA8gGYWqBBbdWB9ciQTEedbuFui1dFX8V1ceWVvhCKqJkoFA5AuNK9cdn9RH2",
  "key30": "4gGkDTPqf3x1y4go1fzKmDGBH3U6BYLyRsPtBsGdH9CLQhLtu7kudESTghgLJSUCD7GH21UcXoZypdLmp3S7EaSs",
  "key31": "5v9BMHvrMj4Uv2ogj2fc6EHVoJGYuAPCjt9tVcgYGAajeovoQaz2kscfujxofMpxyxCteiH12v1M94rSxJaBB2NB"
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
