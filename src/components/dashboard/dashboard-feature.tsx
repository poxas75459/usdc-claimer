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
    "5kzsjTJAHczFF9CWGLiKJqTfcx956vWuAhL2bE75vPLDPC2KFFjXaRxu3kgc4RHGtQVPMG2kA5MCVi3ae3fpSPr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QBN89vMzQabVnfY2DiSTvWrpVkrBhjZMoKBTXULUPQR9ULDdnvJgKMLtGMnL89mbB3BJUnSTSsdiYrGpzxQ92RZ",
  "key1": "4gorrptDDib4qKyjUvrSXCrNJvpneFaBDWzNNSHa8pwANGmGtE2ou1U7ULRZaQYtkG8HNnCKWpYjHG8Mtiz2Q34P",
  "key2": "4WJ45g6tQxZooLBEzH391aiN3fv6QLndqGtnkNYLDExKPosmeLsBYX3Q61ZR3hPaB36Roc8iR6HCw7Xpx38Xmogo",
  "key3": "4NNdyD61Q9RXDRJGuXbvCCFe4g1uyM5aW1mQkG2R6RRRzjyj68HZkwyXKRoNzVLH5s5wv7ixFbGvSeUDSR3gShf8",
  "key4": "57nqDo4BQ5Z3onNLN7RjcME3BFJLwKJ7MvWVv7e7Lvhh3huhWnSpA6JSwHyH8E7NKaMSheLj6t4vnPsx3cVx5jQ",
  "key5": "3JFAuYjjLkRQk66oLCmUyQLA7uqsZVgEsA194jfNWsqWnh21br87yByqLDJU9DeuWvFBJ6bi1UAwTZxK1JPty84x",
  "key6": "5rkWuKhAqAmW6Cdfb69Z6FjzsAkT9BbouDNmigGSEWbXdsB38X91MFxa6PPTp4dA4FripZKeuyiFhmkYW6w6R3At",
  "key7": "5PXc6SwUzQjnLF6R9kA9ywPHvjzVtR1VUXW3QqNfuPtr8J7JXPoLLqz45NTfAaqz3M3bNrQYL3y7ZMWWZvjZsFeL",
  "key8": "4ueaujDgcEwnZNt11ydEiAbxcjTSZPZq6XNWgxJkpsC49Pe2cZz36BPwA32dv7UPKrayQepXVn6a2NvYCB1xeoSx",
  "key9": "57urmJxT5kshCSbu95fahiZ35MtGEeaeYSrBt93oo5sKuHPwJvYze9xu2tfgY1YvfR4GWr5f4cZRgQiBQQLGh3EA",
  "key10": "2jWFVoSMzxACPMpxLbm8cJ5MB6BnD3cwPJfR1Mf7dPP4KY46tVZW9SHCKfnmyMug3LpTrrQw8DT9BJJqUjq65dtc",
  "key11": "5GPXc9kZoMatshFbu22HaszynDeMxbuynZQ7PAEHiz8w8iCJEQoqVa3dYgopLfiRYeh8Qj45wV1aEnYSssopXJuk",
  "key12": "31MDJDohjhrEVbAoN4RCr1rXMmoMkA5EvQFiNh8mLup7ANF4t17t7G4NuAJWsNmBu8XLqGgG1ymZzCJ7jfYi7sxe",
  "key13": "3xMpj115uz8qzjan8FhPURbRed6ZJk7Vui9XrYMccWKS6672vh66sDZ6TSERFJ1Wrg95LB3as1nKdHbPQngmyrNR",
  "key14": "2pQWvW3JSmdUwRHrbw393YrWiJzLijUVvQE4FMB2nctqgFPe1eVRJH2oK2A48MSx2e4xqbYnaNCpFkkKykVeN5tR",
  "key15": "5RKRf4GsLBMgNf4VMwaegc5xn4Y2uXLPLkDETKQfbP8r227tpiYiG9Gymk3ZyTGvH8WEY9TuT1jyobXgoP5joMap",
  "key16": "3Lm2VZ4fD5jo5m3om4aDjNwdQzFeB9CXP7f9EoVTYmCrBpPzXcX2d7dmVavumyU3J4xvcshSA1pPmzfk24BMdfVy",
  "key17": "2TTR1amxEugir1msZaBzbkABv2chiY5zWxfW8BLhq2tePQacbeojTFjEHqxd9aoqeJRGk4TSgr7eDgtsomgwgBE9",
  "key18": "3YpwMHzP7QuhpsHnRrZeJwj8dGBVSvwVYmYHaRpVDuEYk3JFSvN62PZonmU9DbkE93UPh6PSMoBEbwEpa6kNcfcB",
  "key19": "4Ttc9uWbGTujZpP21kCJrSH3Qq8ejY2ZQQ25EUwFkuyAaj8mKcH6E5KHuccguqXdsf7B82cB6Lkk1BAu4zjeyJnk",
  "key20": "4EZPwrRVyjouuusU3bTrWC9pAsFDwTDuw7ZZifHUHP5KiyeuEvuSGQTtZizLpthHQXKo183YXjjKje8SARVWk7HW",
  "key21": "2f7ke26PJaZD771AVowm49vmdUs3au4woVosvhejR4GKeqWXtPs41n8mfPSM9cBxb9oXvWBF7bp17ovnnqitvTj3",
  "key22": "4dTALDpznDbhqK6EUsN8k2bsmKEhNvDe5nQbW6UcjvZABg9nhM6utyAVTbqLQJH1yxtJMxvf1NDDA7Z957ZhbhJp",
  "key23": "5pVMrZ8nTufreEi6gZEfSKVrbWFsw12fDncYy31iU4gndGTkiJBZk4Xke9xQ1YtSiV3zVcKjVUGXmKegrZTAwdzq",
  "key24": "3yn9yVxvYvJ4pUnjz5AdyW53TfgydfsE7wkCeTr73KzmURmSqLLssRhRtiSMQDXbiNATRD7gzS1mPbGkpaZtCqz7",
  "key25": "3r9ZFRpwv28Ve3PHkQkMMyLkXCH9BPobnCoi6vKiWyUDSBydFB7Uoq6uDbEyCcNiMjhfpYwVj4sgrtZzeXbqjces",
  "key26": "4k3wcc1iB9uZdYtqYuHj2sXgmAsfopG4bVoTkAwNXdtNmkBrc466acydjrqbcMELUzpiiCdPrx93w5zcyzccmPDR",
  "key27": "TQKs1DxoqLKHAfhF2byrGfnSshnz7cqdu1BgG9veFjDGRvXz1xczgkNnviZdwBcm8okPo3ieyq2BatH3iUeoeg4",
  "key28": "57mUbZf58X1BY7XYAN1fhoCUc3D35sM29JsDsVcMi3U74X43ujDHKYGx7brBSP1Nn8o9FoPwqZqAzriwDttyrgpG",
  "key29": "2XukrY4f86NcVFBu8r8fbij2v8FK6Dki6HxSCyRrK2FtQDx5fDXhDRXgKbN9TSvnBXKf4CxogYA12oK3ZQ4xKBto",
  "key30": "3Y2UmqAohnVHcDuKC5rPPEEP7BubS3nuJk2gGiu2kVwqCR1ygkaNPHQtdLXtcuxhxJzSzKyLwe22QQZBLpaybXqq"
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
