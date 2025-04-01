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
    "YFot57w8Qb4frmbP1Dq6NosRqHisFiSgAzpup6yv2NDWn2do1KhcJP5Nj6bBkvvvcrikhVkvszYSnJuArHyyZxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoHz4g94a49uEAw1C2zYpjUXvcTUGWEz3RbNQF3eiDrwGs7bvx4KFnZqK8LDoLN6rEYHmPnn3osSjqXZDnd1ZSw",
  "key1": "5wFFMfPkCq9DfZrCKk6y7dWeQ32e6767nzUy5m5JSVAASB5fw1acrTumNfsgTyrus3ESrBQ22cwKaga3AzLpNJqz",
  "key2": "3FP6XDytGzmJ3kiPjb6jfhTkvqCTxmbnjgXShygUMsydvdazvoqX5acmg9khToyWXJtZmfGaWnyJVEDdtFevaRxV",
  "key3": "2zcBSYStBPMgucQkUJsPHZmS1M5jEMJKUdiCoZ9nNL9z8c7CYZfjU5XqBhWh97K1aT4gD4F7FTs55q5FDrB7CJ8L",
  "key4": "48s1mLoerzscvEnnmR5Rho5zMCKXeAtFxU9FTxPjkUHJyeJCd5pzS2WuHd4cM7hAcV8sgZPLqjEb65YGUxbjDhQY",
  "key5": "4Z3bvFh6oiJWSr4rXrF8MRSDGSs83iomK4BDk7BejjrLPnXr2z1au2nCaFVpkMFKkmhiRSPRD4MXq6nSU6RTHcUQ",
  "key6": "mEEDssCKtDsVL6KDCC1NiH5HWX4ehpcEx6aj4SRpHjgJZ96kqbR8g7sgVer4iS12BsVzjjEmNeYUPFNhsjgwKED",
  "key7": "3epb9QwduHrezaJVCgWhDiHux2BVUVmvFFcbGiaViAfeqnuwMKJMaP6FEsLsFmyDtFGfvsHkn4Q7w81wnBfCAo4a",
  "key8": "64dg3dvVmR8wW14hoh4oBxetCj2ui57w5JoUiV1r7KxWCb8xc6vjtKnJwe9MhmhoL5dA7N7g3aZxSbKSXYL68Ja5",
  "key9": "daB7krJqE3dnSGN62s6wJ8xnVwuYxPtm66Zs3SjKGbc54yG3ApF1GAiEszMsBx8er9kyZfuiR1pQawqzDVPvQSR",
  "key10": "3PPfRLHsFB7tsP89dXtBtum9H8u6wzFpXLY9ij9N4UArDu9RfZ75nYUngYMCtXennihm1MsXkXAYWB7HuBFvvuHG",
  "key11": "4g1spbhxM4skynPZgkKy6bSxp5ikVEH5DuVGswe6DVGEiEUR2CQ4tDmAPibCZqERXyCpKN3vj1XD9qXs831upyrE",
  "key12": "3CbBRarmimvZUaxakZPVV6yoHAQygMXerVP3CKVk2YczMnPCpv6YjZ7DCpEf6sVHEGGQvJM6kwm85mCQMBvKR35b",
  "key13": "3NaztShPY9bx9aDHh9hPfHopen9Fs7ufUuwGK8KNhPUAzTgL3rj1Yow2Uoj8x3Gvbo7xUNNtqCeZF8L5yyqsZdbb",
  "key14": "2y4nrNn82bHoJbXuEDNbGq8puJ4vqaUpw2SKotn5A4G8DQB1uAx3RJEnh1FXRAQGjsMZGLJvA3ueYHvtj3cfMQWU",
  "key15": "46jguTQ5wmehzuSuBrzrFRN8b1VYLj8ic8TFk7wnVmCJeLAbkE7c5zUrfe1knFdvJdKPox3yTHgqqEuhr2gZQo45",
  "key16": "5C2vtVeMNGeecVnXbFFJKNEBowCiA8L7aGs7EgjndvQb8utPzqpDKM34pF5q7fqn1mJSwXwrLM2zfiKwSyJMYJBm",
  "key17": "kWd4Uy8XBXS3cM3LqszyRRKRftaaobrVoJ4FpEdhrnGffovNk2SpAfp9db9VYWbQ9M1ZteuhuqXq2HKTSSZPWWX",
  "key18": "4TnGsu8b7YCkH3JEUxMyJbvvnFxRcVTtvqg9uhVPNeLZptze6GfFK2fw9ojrty4UytXcsXjRfGmPccETmD2n6cDs",
  "key19": "3xM6tuvFkAiEUKYPvDdsg3w495XmP5Sz5KtzyFB2dRTGAV6Db2YSZoFKjuZqnvQNfNDQRYPuVJV6MwETQkxzowHz",
  "key20": "3xZiScqrrm86JGS8ZnwrwA8uTNC8Z8Xk5879yoyBrjAXn6gpHVMb6P5L5Jhu9em9CpRAYX1A7zoASPhZavdHZEH",
  "key21": "5dtgFe5EvLrJywkvKW1aAmscmL3riEaN4Da1aERRTHhUzk7ZVTeVDQxKPq7M8TspApnJ7JeJUhBAp2SinCHNXHkM",
  "key22": "nsvAUzFb78ku3LDaKrHCYArF2wV8g1cMtFhH1pZdv1B5hjwct9xDybkuNfxhyU9gWJ8d4SpiXa2Qm5sbRoe1Wu4",
  "key23": "4LeqzhsyzB9ccVCjQiaSGodk35pYkHCFhK9jFe4ovoTToKZCrVzTSxi9gmsgs9kjBAstF8JPV7eie9cEojYcqtjk",
  "key24": "2iAVjPDoPWAz845QKFzAVR2k4BmM9TM55Jhq7Ypio8vE8S9twkovHXsXUUjszpMRQLWQpt5mxHG7Vhkh1Biz76xs",
  "key25": "3mTZNQhavuf5BhcqejxZgkEoSM65ivw7zRXJvMPcvVjZtAJtzuJVDRFTvip5uiYtQtjxAA7vkrTWPmRufNMLZTCD",
  "key26": "4X8h4dLUbtayQ9EY6brX67FvnpjZ1NsbgFCuC2CUoEChE6M99fco5528JotVX124pJrGNvfkmXsJbRuMG8sFYYAX",
  "key27": "621UEQyr6Zo9bseKqqfjchDBJL6wV6EQU8V386WdkSzeUTsUUyBmspSQUMWo4oUUGmPyijNRAwgS5v5qmNpZwVG4",
  "key28": "dyCwcAXx2NsVUB87WgURdiXZzPQnJtmDxM3cCHAXMyBbSrEhdwWySeh5n3zQujWDGQYvn8q3o6YBRX8qcADTwif",
  "key29": "UNbYJUZRiWpTDbF8XL79dXtnceUgyK4xPjmLAvb5TPu7vKHzURWw5AY7Lf5EhgjzVgEzXvn7TnZemCsBLUvqB6G",
  "key30": "2okec87W1xaU7AS5SU6QzBEZ3DTEFD8au3PgwQszLbL6rz5QHTEv2koaxMNNtahSe1DJqrFuJ4icRM5N943N6joX",
  "key31": "23bc11UwPD5k8BhSGfPsojfjwKhfGhtE3EU8HSX7HH13xnqAsoCvtF46GxjrMN3yHZJCSUuGBQ9V7SGS7yHk6GFT",
  "key32": "281TXkie9y5KR4TfhcmqxvuACcaqiiLuvuV6moc5W8Qb44xbtbUddFUiKEkw9PMqmdY4BZ3w2pQNqQiTuc7pSBQA",
  "key33": "4d2HK1Fu84Zy5w5dEE4u56TfTZCMiL8bbowYF4Dc1UQdGJtGxP8ooZTACBDVbDGBoHgMRpijo3463gCLHSdzoWch",
  "key34": "2h5GRprHPm7Hpc6GRwkLqZSQURHSAHnhBoRCP9wUSZLXX3VuXcrsnG8VDDj1Va8Uh1iMtdvTApEW1B8oHZHrisRa",
  "key35": "4H5ioAr81U7GrArm1jruRWzHfcNkjKV8Xg7nBTsXx6ncqQgVdaMsED2Ufw5AkV549SwiiJBQWP7rSFLh342NbtXd"
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
