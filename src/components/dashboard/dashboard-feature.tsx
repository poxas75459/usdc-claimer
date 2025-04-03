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
    "36Mt6XvFqPGqiWt2xcDoTDLjQWtZuqB9MRLiXDnTMu5Cww5WsCJ13v3WHCC6UfQ9kYt9PZsy9HLCPW8L55ba7VMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDnQG31fUYxobywfpKqAoHQGCCchuNewpnFTbu71qMpx9PiZMuVLJeTHR6b7FGrXpyxz7g1XdbbmwF3pSEnnMNH",
  "key1": "2nssQeXPCqE6WX5ToMbnuc6UMiobLD4B9szZYxTFmU9wYAaQTxk2ruv5TKpRyQzjihtzQuQN2MzBwaujCTpUnaQF",
  "key2": "3yM6oZeeFcTqps8RpaNag3AjC64oGz12wR3jZSpxxVA1eaAZMM5qXoFVH6qCYiNUwfbikicifspVVJpinq1gngLg",
  "key3": "62bpTtMhxc9gBirf8NK37agnqPjA5SUMbf2oyWhCq79BYYaGLwQyfD8zNFWFG2S21dqC2zYmrcWjhnkMCSASQdWJ",
  "key4": "5nS6NGJNukt1xH9Vaaix8NsWWQjq89iEFijPmvKg2MhQ2cqiMrq7qViA8dNPhLWp1fDSYsiCjWhSPkkaAVvz3ruR",
  "key5": "37XomLXMLuRDA7ED7t814b2qnoqnk57mdriL7bnax3y8V1iwkihKcTegV4yz4kuQXgqqHNLP2e9Cycv4NLRQRLNP",
  "key6": "3NNgWyYvAAV2mefyyg3672q71xCLteK2zH9m3GvCB9S1QNzc8h1FP1VfgUbvLgvaTcPMe7M34D8jmden86VmVzWi",
  "key7": "Kh3tY8jdu9H8ECtN6SKKH1HTEMGebySkKjWSTDtMMwYjfEssL11TnDkS9suJDpQCP8LNDyoryDdNkcTvZzLSYJX",
  "key8": "4d5tiMcvM55KEmYKun1m7Nj7Pc6zskAciy6TZsAmVLeJ2EtFfFMYFCtZnkHArm3JU7UP12c6DPpiagktk2efAQRV",
  "key9": "656K27eTtTn43EyRK9W3ZyaNNK6xQCxu4KZXTPtxbpcmeS7VVXcMomZDBK2i5owM2x45Ft6HvNEnty9H7DYZB3xt",
  "key10": "31z9xwGA32JMtXRRfi7PPPsFRzujbXp4hcyriY7vcT1XzbSqN3aEZUVQFnvD8vggPug7qnvfoLRKqRq9iWC4KUkr",
  "key11": "3xuNx7yTqUZzNkmqHkb1RarevD2heo9A86bGwXy42kGStQtehrDZqPwAS3dpnvqigiMdwyUiaabi51fYZvAnxvcb",
  "key12": "3ah4VCkfRBfEGqwtAfu1CzpRP6dBci58LkgFkUnDMkv9NFyNDJ7Z7kFtC1wyVYZHvAr7ysp7yYEVXN5qTtcmMH4Y",
  "key13": "4UeETLvYUp9Ctj1W7Kd9bAbgXETWvmjF7Vkqczbwaq8izF15Dz3Wb8UUn7z6C8uocRChxFvz9YDuCLqcDiAK8Dyf",
  "key14": "4AbVDKbWEJYi7HUq9tj7zX7eiUtYc6NKzy5bTY9kp6JP2u6NVv3mXHfUMrTT2TFu1BecbMFw4XET5GbsdTjVBr7B",
  "key15": "2ju6YgMK4Tz6yCNCqbj8yaa4pKLCznzEns5sxidb4eHqhLEPawkA4s2PaFEMr6quY9LQzDwkoEyDiTXcX8QVJFPQ",
  "key16": "2uNWa2gXshkPJP6fpHzuRvzcTagoyBgS27kD2kDto4LYunheo1zw3BnaTkayP3Ndz41ArZfXR5rb5KbjvF87Mt6P",
  "key17": "2w91jzuJSvjT2Sae42ptzZAphwCMsRCAHtLwWDkHgz5hbs6f3198mt3yLVkRvTWet5cxZSJNvNoRY7R98FWV8rZi",
  "key18": "oJJaPostb6JE7PYmPJ4nv5pnRYVB3QBVZbaAvwtiARC4VvY1roLG4wcxHv5EJU228BacKQ9oVEt6rgsxXuqq4GF",
  "key19": "4pgxDeJDioTW1hbN8WkVkBvn6s17PwHBuv3x3vcsD6gtoBKr8k29K38485jCgWwC7mvDCrrUT7jfiQHLkZy2PgLV",
  "key20": "5jayzMBuzD4HJT2kvhByfcZ4wSG5gPC5fh5GwPEkoT6dtddAWNTbzMHLYTcRqS77wHTF2YQxSNRHbhSGt1vMDYtp",
  "key21": "2pp2vUWoJiaNMYzkYGfLnMkPBTWEXZ1oxKkaWHvqWAZZ1XFwXbsYCuYKESBYGVxf7KiryEPJDK4uMwc8Yx95NheS",
  "key22": "2JomQ7R1NpnWWDVRNDhxMJHB7uzwwT76ZdGHKUUB5XemhosXUwiyRTcrq3yqdoPvVQckv1DRb8j4Wtgmr4Bctzp4",
  "key23": "e1QAqEoLVS18xDya1QEgSLBbF1wpE872rLisEGEJf4dSFVHtZsbGAfc59x4TigPdYXJxoj5dou53sM6FGikPDM6",
  "key24": "3VtfexJZPFEssf784F5ZYzHAYEE3xKMq678Vm9uWZPBRecBNaRAYQyZeEkgBHMsS7f8gxGtHm56nCoKJWyrTaM1a",
  "key25": "615pofXB58jqHCDvdP7yzH1fhq7Fc38b31eVRernjzdXfKCYzLZ4jXvYMMY3UUFNWHqAKNkCUYqqjZvB3c43Rg4a"
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
