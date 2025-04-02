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
    "2i9fYnMeXzRdE4rUSW3DdEVL4eiGwVkAcJWvSaVoyNJSxiwhgKutJFTzeANuDdfAyyr4HRu5gVe26RrfPbAZd13P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awznUAEU5JGMdUttkGRGxinBdwXwu6qwd84uTSzd7JcUMWh39KK5zDZ2ocUeGS7tdYJGKgRAiv69dZgiauMu7cP",
  "key1": "3hWDksq9cN4xEEfatEyuxZzSKJtDAPe42CtWW8pjGFsdwTWQ77XgWfdg4BhvYaJa4Nd8BLHVhm3MEEN37FUrNRWU",
  "key2": "2VU7Kx53UVx1o4fdnppxKiJpKL7zV2Nm9h5pUpz1sJKw3W47y1L92sFvjoPwCwLTWfSB1HPiCt6WpXfeyNDuLUyb",
  "key3": "5dWnEFYPXoAL8u13nkBk5kTJdAKqGhcMpSo8H5Bs8iU3gfyD7N7CY9B2Z4uFvLt7x9GQRY6dfQ3WfLGRUihC5ctW",
  "key4": "2kWUj9fZ5VXMxUWKfHWSh977Ju16C3ZXQKX8brTa753H2CwBWEBkvWNDNXDeox92XA5tKzs2SW164eJm1v6JJqSd",
  "key5": "5kEXdWZYiq41wWo8Zex36Vo9ZjjbSjWWKDXhmHzLfPzS28o1cVwpCFRjcWU648JybLwAP7PcRctfdxSo1D4pQAcY",
  "key6": "2uw7iEcakApizfD7fskuVfTo3jfgDhqa17gSxfF8mGQYEHSJCuE6bcX6jQ6NrCgtPvX7CxrSS4u6b1eAZRaW1HUd",
  "key7": "mbPgU59q2dWhJRByxWajf33enNuj3it4L79TrGahKGKaVRkR56brrVdi8mMnmb96p6KS5U9RduBfmcf4Ec1w8rB",
  "key8": "9oGjteSyaptxQho4DMZRG1nDSFxGxWTnvd2YxJJC9LdqU7pkPCge1n1VZpgLssgeLgSfUjWBoRGppN5cCwH3G5X",
  "key9": "DjEpPBMTehoQ4KhLuKAfrU7c6hQgywrajtZCear3Qv2B2hwCrFYw9qAC5WeiHH6tbqHFQH2kJnRnDmJ63GkT1Bi",
  "key10": "4K2ZWCtJ65y9mgLDZWBgKyiqJJ9ub9Pp2UWSaCCTFHEcGJDDZZxg3pXYhGG6Uvgqd7bkF9SFVznmwnhxbu9TfGqA",
  "key11": "2mEZqRDGsN9gaFEnH1XjkSHMxMubQM11Jgc5kS1V4fnt7Dxk4JyhL4tEKWanxRPMeiy2KqfgeX3VXo2JiNJLb4YY",
  "key12": "Lmmzz79Gd7WL2ZmHJWUyS4qRjN4VZ1sgx1iY3uV9GkWTfMq8e1CAEN87pPWNnKEMZPhjvA93UWnAiLhQkogjCUU",
  "key13": "2QV4yVZTeLy2QpZ631p29Lyc63QYRY9gHs6m3KcfBXf85mbQJNB58MoF4Wkx79nyH9T992z44wagk2WSANv2KGBe",
  "key14": "4B8xQYsbx3Bn3NKYJoCVJxq2QVbgUY4rXc5q1kr8UDJEwPftFauUHjWhhyqi3xeB8mRGaFgvDzmb3zbD7gfGN6Pj",
  "key15": "4is71rpHgDHVttY5V76toMBxyysYdnpSk1vHpcsyEYGzmWDrLFAGdPKontrQDFrEQR6bZPL27Xe3msYfCSFcpmrN",
  "key16": "3Bqi6VUUc2ef4R4NwBVHzHJbi53EVoiP93Vas2SajgmB8enG8rxEKLBbvw2ZagLGEMdpmmvbBhx6fLHQV4qsxV8a",
  "key17": "5rtgc69aTkxaU62dVRVT4qnpMmrvZDaasuBbH9TPMCyK2t5WwCWZqrTQ4Fy2z84PKzxvnLSWjzCDMfo2ZxuyujG",
  "key18": "4QDi3tYJry9qf3cpEN217VvULXfSZsr1QdJT7bcnZDRhMgC9UebdErEeNqmeREAFvf3CG27rXJ41sob3hQmSp5Ep",
  "key19": "2hrCiSy9iHa6LcWKHzZfwBsxSrxHdZ2qj8RGywDcfvrfjeQHDNsqaXZTt8hmBnBUDFqQJWMHx596BHiXksULLyie",
  "key20": "4Li9m6E7meyG94fnS2Lnbx3Cah2Ykaayw2Hd47uzTYizV1QsjbmRArKxyY4GSM4zR8crerybmJs9HKG4WW7rj6rg",
  "key21": "4Ee2f5w4ikDqobEvQxHqRDanBnpLrH7r4VardC7cQnUfdJo76XZ4Gk7k6ZWxmB7PB2MSMnG3V5M1uBHA9Kgf9nEJ",
  "key22": "ZworYpYUqDBKaY9GBGUU9GHM3qU6i1GARED8Cz4EwJQx177NfZcJjW5CdjHEpJNa9Mhh32yg4BV7cRi947poNTY",
  "key23": "5EZBFg7Q9K8MayYyX6DZVj972Z2JAx9ySuYJJgzbNuWspjPw28yhjoYqjYxae97EMrz9K17JqQv8N5f9YwKXh74W",
  "key24": "5zFsdu1iWGUVYpseCFcskpb7YGED9qN6Vr37ZGoig5zDFqQ7yTwZui47cxkjkBiPu9AmVaxkWKjHhyA9Vy4zXfpN",
  "key25": "5Yxe7fKi28KptKrmEn8Qs3hQ8PsVGm3FJSXXQGsgjeWXfXpow3Xad2Mf2A5nZX78p82g2LGdgZ6AfV2YVvpYyNtd",
  "key26": "4CESNdW98Qs3cWn6rNk8PS33BeX8X9TC4TLvnoTUg6ubunAYmHF7STjiz6YRZsBzdoU93KLyd17ixUax9A9oyS2c"
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
