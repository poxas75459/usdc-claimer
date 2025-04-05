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
    "4Y8HX6XigQDc4PPGucbm8H62i4gtLhh5rqmQczuKYzEAqHTRpFgNgWRaHMT5u8UKjMC648jDqPkNHJvsThkCLtzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ts1BzQXp6iFzirVBFrinLhyuAqZRwTnQMz9Zd1NzMfFtttfUJS4dzT1KtveY2kX2ZCPiQkncxeo5QbnEGCBmoSj",
  "key1": "368uMNLA8NHS43v8fNesrQcDYVWQgkkHG9npgZuVhbSH1XSRF4WNE1PfcijKVqwkYTa93RyhqBFv2WmfdFnUuriH",
  "key2": "3GUEx2qvwCQRmG3ijphNKd6RfAhashzZ4YXQks686MXMo3VzAt8P2Xk4SgJXfgv46VykxHn6ce4uSCPJzxkiJKob",
  "key3": "5WnR9Vb6Tbp8Toxfe4mk3gBDxr7TPxnMg5pumVq1kTfWtmzZhhNiZDoSYm2g4QvzXESQhA2A8JcYZiSYDyELtKKA",
  "key4": "5ECa3YPww7Yt4gktd5kMaguvpQEh6m8zrwx8pey5dFJKv3BZ2uWXmJjU2j6PQj3tJWFUh8XiF2xMLyhikotiatyk",
  "key5": "227SH4M9vNv1c6fn5iCQraiSN3sVBQuo3ZkXT42QFYUGJgnVdvaPiUMkc3hFG6EHi5DZpsscbQdwtbV1tTsTwJeE",
  "key6": "3GL9EGpEAsX1Eucp2KVZ8WYUv8F2gPAqhNWSsHMUdoRqk8q86y2HCt4cBFXRG3htCaYypVL3Uu7EFDjbobANppCW",
  "key7": "2RiFv2Tzv52z9Rb7EXADbNzNbWwPmz5i8swVzytFVimaBURY9rP5CJt1pnUFQcHMF8GTECsw6pLdgibksPFQ7Bnc",
  "key8": "61xWnSgJfbP3W7XudUwVbxji7bYaDDBCT8zLagoc3Wxcp2HAHW5rkcnfVToXFT8QtiMbpmKMqYH1kWGex3rUpUbG",
  "key9": "4bfiFoJEHzg5mNRusUDWC3NQHQBQNF8Qu6cLxttfkRysLkE27kR93Mb6J1dpYHGmxa5GsyQruRLosypKbypdEJ4C",
  "key10": "3LdB9CrNW8GvWoycxu4AojpmFxw3KRYBqB24nQvRnksdEkMSXsAyhSkwL8VVQL72wyW13HPgFKyBnaNzszjT2o67",
  "key11": "4cKZzvBWSptts8CuccFne3Eu4hHSG36F9ideF6v8QT9TZ6GqguPzNRePq6hgWj5odznHZY6YL4Z1c1yR554zDtm6",
  "key12": "2yJEki1NC4dZHtkg2HzrWXFcNs8Dq9vsYiiFJDqz2nKr7cZZH2ZRWewxTWWb3cWp2A2hDoX3yM7MXckQZWdjR7Pe",
  "key13": "5nDtyzYsreZnbVCjGvM6iYu98M8LGpnX3onfQcitV9Tn9zDE4MPuiUSSZKDBZxvF5QaZeypjwZ5Ndg1bpbA8F1gv",
  "key14": "51h1w5sh3dNZJnFg9WSEdnri1XpZvDBhC9XJMXXLsKB1tCPXLnaqV3WbNaSTRhX5zHte9RF1xvAfubksCirSKyH8",
  "key15": "ora7fNrq5Ut4FBwcnJx5Hrw2aNiYDBnt4c948HReJTYqKaN4NtTdDjqBT9mAiCYHwMMSPLZm4MJUEkL6mjyGLuE",
  "key16": "4qdVg2fSJiZaDeGsgEhpTfMtuU4gXw67apyu4aUxQxd35sEKzSJq5j7SgonquqXSrZ2cQhME9Vsi4i6tkHzdzqZB",
  "key17": "43tRYNP2zUnZT3kR35SMwKpeE5N5AHV9X1EBTB5ZqPDjZzt3fDG4Y5cruSzKiiJyqieNu6UGHDXpJw5CPmKYub22",
  "key18": "3KdBujCNj51G4vz3HZBKiGoTScBewnKq7g955rPFDR6U65YHxgP5Q8Q3hbE8T9d8RizAWbf1X97zErnqmURZRSGo",
  "key19": "XdXScUVaEuGihP3NoYPhJZyzbb22f9bcUCSXdnbFwnevq2uDTTtVB6tYGvkA7RyRZCQGEv7cHTQq6XAJHsa7Bh9",
  "key20": "4Ru18UggXeayW4E3Nki4xVFfB8SPk1DC9AfYaZdWx17mfejCsRtBPvSKm3o4oPPQTxLRm4jg6XdkHoFB8hFzaPTA",
  "key21": "2QA3zg6gTwRheEfeFBbkhbzg2PV8zZ3z8WQxh84qTAG8NgnRG2Sx57eF7DcB2cWrvpaP3Y4vERakx7hy8rEAH5Jt",
  "key22": "3nFNSPmsrujR3Phq7WWXd5coicrVfZQZGgPzk5ZSCi6ULR6gQkEMwfkxwreuVizmWyaKEAQAb65wcDBx32VkKVhL",
  "key23": "5mwHsfhxDvEQmErFh7DWTMRB9AkUQvWF2cKXa5EYvjyAgUz9ZK9sz7wXnJMupoYFRyns1Ev9GJFYqViorfYxPjda",
  "key24": "2JndPdPG4tFgQsK6PQFdjdAMZmbLLY2ZRRomUpamimboNGkSJN1w4A29hH62H1DeBMD5jZpzzM8xSEFg4MdCbWnp",
  "key25": "2yjCwgbh3oo1o87z6o6JtPnUdhpcJPsUVCL4q4EvoFrJzQsZupkUfyUAsGzJxFaDEMGQkVnH2NSMFu25sTqoR14V",
  "key26": "2uxz6BJofrjA2AzLHyyJXmhQjPPcXkPDymcWPYspjh4s5o9gLB2M7VDoJQPwXpFYWd8oG6VmuxKM6CVuHKUhQVQq",
  "key27": "5rKCzSALXDpidVX4zrC42jYjoz4494HAF36npYfMDAthCbwhZKSCMEzG7QzjwVVqNAcH7A6TqhbPmTddUjRdJ4wE",
  "key28": "5ixm8cNAZ4giv8qCSobu9oZamkTFbakZrd7TbiuaB8zEaZzEeYGMGsr8nK3abKEUfg4NybHg3brSexWGFoKak4Vm"
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
