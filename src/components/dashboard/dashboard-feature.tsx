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
    "2haVssdxLapjN9BEYDaah73s44dHW7ZvkHKTR1VQtVffdXrqKG1AVkXt9Bb2Hh5Cs4QTcpkhNQyrYnCCuGj5Jwpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvZJoUiuyzJGAv5sQdkvncU9e4iBNF6mReCUbsXMadMbFwcvAPe17jFVn3TuXr9PUe4t1wN52WKk6iBBr4ZrKvk",
  "key1": "5FeTVFMCJNZiwXRpK56uXke9GMc3PFQWoCdWwMnePUz8zUWvsCMvCfjTSoBnpvDsCp94SYbsm1EZ8vhDxcrPR5ez",
  "key2": "5pXQDRnwrrvJr5YPUUCX9ujQ6f7rMbGeMBV1cKSao2Cu1DLJ2vPCBeb1nPT5yeamCeAqcm9VU77Y6X91opgZkAVn",
  "key3": "5Pgrji4GPofyaaax5jAbJHLaAwxQyGPuu1FpJn4uCAzou1oBrStpAc9nZP6tPgwmyERvnxNfdsJUJqRTu3troE73",
  "key4": "jF5whzQrQmYuj3SfivpZtut2BnwfjyymUGuyKrA3BjCKwWeRZ1rju3Dww6RTbaGx3HDjWkd6i1LXXMRxVo2AP1t",
  "key5": "2y1ksxmAk9iJgWfK1Mbs1LkQPADTqY4jmUZSQ7bM226W5uSFkTE3CYvfKJsak89mbknFGziKjuCWeajZYzg6dCtv",
  "key6": "jbFrbgfreGUfL4zh8wGEyxxhB6dm11LBdD28YQeZwGyyC99fhKxxDPMsa5E7hoT7EtmBwXj63dxtPPPA5MbNjfu",
  "key7": "2NSiSxwxiaerhhEFNCiCasfFUw46xwmkP5jo42GyAifjy8hvp7eMr1eTgzsCZN5zCVzFUpZ5G2JFPXeooowKhifL",
  "key8": "BUdixKbVPH312qFPLD3mF3tDXSXBBApHduh5y1nDs7mLwTxN8T8DZ37CTK23zahijVmpTBbnGDtXHYyWLSYV51G",
  "key9": "2YjbBMLdB1oTBm9TWKWs9XknndXQZymUHotV4jBeBqn1QTF7St6V2GcL1RimPUsGBXMk4oEBHhksMpy1zuthCPtv",
  "key10": "487YvbUNx2xDfFnC1VauyYDDznJhyWxsF6VPw2aJmnLJkJ9QmtPyVR1REmXKc97Zq639Xxm3f6X8XW3psCJKtpnM",
  "key11": "4jmfhr4Ejdn7RiMXfdF5NDoSsGbZCpoFZCDdtKkUuNjpED2HB3LCDFusUnrP1fitFejU3B3JFoD4gpea9Y82b457",
  "key12": "3M9wtoXzyHMXevMDxv3MALhrzcsjs3S32cS2cUY2oXTazVbjJHptaUCDt5oGJ98HyQqrWq56uFvRwH7Hw5FxBqTQ",
  "key13": "3Uf4qSwUZoZpXFmYRKA821asof3eingHuNbjVFrKHgu8AL1GZsAxdf2TEfvjXumWQ2fb4g5qpG7zXkoVNZuVpcBW",
  "key14": "2HZeRREPrSqmJHzufppy2anBc44dMkjUWBygs8sqCXxvPBfyb97eXwSJSzTXp94C8nMTwjXYUW2DkHNmi3zS1V82",
  "key15": "54TLc39moSA4oSoYPserHpj76uVSqXSbtH2WKKFz9oEx5uJubd7pJoYLLykroBrUYC74PHnHoSXdkFQfTcFHXZYn",
  "key16": "3FbHxBvw3DdpvcQNCL2miJJHL2vMr7AAmnSZitH7s9PYB9mBsBAow9ai5i58jPaP3bsCvdvhKgPgB99YRQRNxKQx",
  "key17": "5YLdRtjLRmJUkivRNmHJcY8EvxwJzprijm4XAjGTK4jvzunJjWNsBZirkKjdkN4Tv2E7Rh8sUeDtrHGrHN7fnHvS",
  "key18": "5PFwa7JhrqucG2VDYHeDPbJCjFsZCeZZxYaXHtypDMoRQe194CxuM2B4FMmhQaUrJiEqxPWxGApCkQpBGehi88jR",
  "key19": "3oocRuHMfoRBfCzbqNnmEVMpJSvnHAe7aGCSoLVqfwWsYhB6mRm7GbUoy5ahBKAQ3Lwf7soesENXrkoRheiBKou9",
  "key20": "3FFUDVuxYScPPqoz2Dq2c4gLrHrG4m3ej19X1DYjEuyqTXobwsJygKA1nGd6Arf6Z697qxuFe6WgsN5vHkqJyih3",
  "key21": "4ZrkSmnxAz58Z2a6Q53LJzVakuSS974EJH847aqwANx9vZSsRnD8RdExkSbzZ2Qm7TdrnDq1Maq7Z57hsjHGeVKJ",
  "key22": "3T4gq6QLwKMwx7xtwpHHKBA5k6G14bZJ7EkkrJxGipD4kTM6hxCQCWBUH1ddzzQdWU4ZT6hScj3SsyYPYcvM4RRv",
  "key23": "3VFw9BAfjwwuqvsUPxZjfhPC9emr3BW7VCAqGHDSTSnD8JQPEBQ6g5xLsqP8apLxYx4PNWuDaMxt4gavnLkfTsma",
  "key24": "8uYSep5SbJsyXg5gtzxLhfmDFcB9yo7vxcTdFDnafDvcJgxGmqvG8Mdi5Uiq1WUsKoR1HCEjuXNAyZ55eUZyjeN",
  "key25": "3Gp7t3biBraemXbzzBk5YfrxhoHamfFfdxGbKw8KBct3cMYtqAJLM2WfkH7Jve9KVDTZ7zYZRNMLsxW4EcjiavBM",
  "key26": "H53KzxkiEuofFQUjti5v4MPkqjHAg1knDnmd9zGVue3fyfUqRu8aGMCuax32D5dizvQLyqfS8qy5UyF5dnTT1bt",
  "key27": "2u7fxLK1n16GE3cCNHmbbTZCJnJEBRJSzgFEsPYv94zdtHk3jHs2A6qFVjb7uTCiFsEq6EvigC9gmDqGaH9zKcSB"
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
