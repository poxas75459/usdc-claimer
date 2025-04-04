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
    "5r9syvrjmTgoEihh5ng5ndBKszGJuNauwww9495bcTbiZ5JkDSZ6DsFzdNzH3cHWvjxRwejGVGLNbUbt11e4PuWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBwwyy3jXj4CmBsQwVxyeSj9PUHC49Tniub4mkoQESJyMSQi5H35uAABg1pp1iG35sxSzdcXoqjVunokcDkcrK2",
  "key1": "3NJtcFs1hSJsVJAviR9zsTSH7pQ8UHSk7L6SiNHux8A4ev9CYKcSxjCtDju6Azekau9uN4d9zWt9SSiiyxQaNABH",
  "key2": "2m4SggYUg9texGvRDn11iM7K5YSbGX4kzB3PAWKEueMcHmtKdcXUhBsMrFoRSndNyZagMNo5DCpBXRQ1gAPPVGdf",
  "key3": "2Y6kVmUMfR8C354cwrLm52qP34XVeU2NMmtGJwpddrEWSTDF3fdWsKyCbGEL1TCB9iTcDA2XRd98HvB4m1dgrTQS",
  "key4": "5ZtFgHYjPhNXQKQG26TgNNrU2jqbL7ERxqgjR42943B5fcrDLunkVJua7wJbCJfKLXXA23RfBBAhJLrcL5EdmSNe",
  "key5": "rjEgfbR61KV2QcdUVacNien4PeLpku27cr1Kdjum9SkG3pa8JumJLDR3kmo4g3FALq9Ua53bH5rT8oEZxcitWZc",
  "key6": "nsYSekW5rHEdGury7bqdKDN6GKuKuedi8SrQrFkj588wLcsCz4ZtTTpQ9b36iTJ9oEqtaFreqeLKVP4AKywFEqk",
  "key7": "48nBqcFbZURK9EZpf6wLRRVUL1jZQzZhz29DY9A1tTDYctMaqVjqYNoiYTExznufn31p3EUqrXkshpmZgWDzUAfP",
  "key8": "23hgbEpvU2yMrNpzqR2wumNNRTTdgoVoZVBR2RSNpFGvj4d8ot2EEWVCuf47PAKxG1G5W8AcXBb5PA4jQyj3yCyu",
  "key9": "5myYH8tVPpUbLydEhN8xRsBGHS3tD2diehfPDPCUEPMdkttQUqydDCAeRvxUBeX7wE7pGEykjv9VZxMuPMJxyuft",
  "key10": "5dyttSjaS2LtSB3XLJRitCFyGtJZKPSPL4xDB98dGcF5XAKHazVBsk6n1xSf8LGcZN9FP5MnW9hbZUrASdrzDLBL",
  "key11": "2gnkqTJwNZEy3U2XKbLX9vJ2SVHbJBdFzTB1pmjBHWgC7pf29tKW9FuoqJxvCmNWqPuvHYUMpW5aJjLUVUkhzvey",
  "key12": "2seLsrwg2etstznAmwo2uqpCpHsFVrHgCF8nbhdKQRfSpLmGRojVgVfKtatvnDhDTs1CroiitBcvZSbgEroRizSK",
  "key13": "2Q1bzU3JHGmFrTSc5i8TVcEfCMNV9iTSCiNpsL31LPoQzutjbjspPw9LgqL2v58QNTcw75yBXSSDB7AE9S5migNk",
  "key14": "4NhxBSC2b3iKoo4sppVgEiEUHBUkLo23v7MjtLbxvN4qFeXqvnTRsEoJe7BCyzjA8uymTa3wmj2j7ppGGCSyipKS",
  "key15": "uFuV4Q8eU3bPPjdXDNZE7663Mdk4xtadxLi8rwQW8HZaYazB4z6sVczeojZUUGX461cX6EzVdpvVPtuYebALrtN",
  "key16": "3xT42ySwFSHKLZFUJLtCiXQp5jDxBnEBC22vxqeoDB2Ghwo3RARYfANWwLurb9txFi4Q5LXunmFQgMRLXoJPTu5c",
  "key17": "5yzZjxbBtJSsR8eHb6iaUb5gR1BYhHT2hDjSE1LdFBsgfLqDvft9SFio28LpXkuyXRgzwyRK1FpyKBJ7rjVG9YLS",
  "key18": "X3giit21osJ1u7YzgyJxqASuJVYn7VbQrhcFwvf4ub5HjgoZtPRrwsJ2AxCCjtmjVe8tVUurZmCVrvY68V897r3",
  "key19": "4caRmRxAPVsH23NK5f1nrBAoVL35LLh34hVjTieb5VWMP2jXXefzqK23H2P5qGYZtWVTiNsWZdBJfRjvgdB7DXeQ",
  "key20": "4cvFPyYiVRb2J78844JfmgwGpVY6kKUGev22EXQ1ix41TDWSZjYDjGH9Pz3rvifDfy3s9CvrcZbdwt4amDdz69DY",
  "key21": "3vnYFEjMz6SdBvp2HT676uP9h8TkfDxAAqBWRQN4RgpAes6rDb92v6huq9rJmNWgwNqzuceC5tREiCjap5ZtyJAt",
  "key22": "2a57smAMe2bx4UDbDmUSV7KcpwF2nddokQfSZkzpL8aDNuWjSay6pqdzJDcXARzfwN12gkWyC2XE6Ux1WEzGKXiM",
  "key23": "3Zw4epxx2WUJqSQqfmwqhvMYZPFfvxNsJaDPfFFrV5X7KfnVArr74SVVyKLvX4NuDvufDPJAwFyUgxFvWaFVjobb",
  "key24": "5mJkmib8h112gh6FUoG6TUCvnjAfshyiJN45DB3iXmMT7LsXmkfscwecZzfJKZeqr7HRc3vP4qU5qGaY7qotAQAb"
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
