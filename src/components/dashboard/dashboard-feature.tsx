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
    "2h7mnrxAdAhEi6cMJB2CWvuQdWP8Qy2shnpa9MTuhV43hRFVkFbU1fhCmqfXCJeP8nngjFVhqnWyamk1dp4Ma1ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNyq7wDiLVf6zmYdxYe8SXgpbwRdomVpCJnsXuKY3k75viswuz6gnGwGiEqvHQj2JzFBp2yyASYjNYb7XLeXqCT",
  "key1": "3pSrosfTnpx3HE4JDx6TVVXbbr1xv6JsACvhPFDRPSiNLmzr5g89Zo6regbevEMkeymgHb91qmGY9gXp1wMQsCAC",
  "key2": "3TinsxkaNhHfNTx4VLmAx5vr6bHbHkL9CTvCDqXbeB8VDnHe3LXLhBpS4KjWAnBfpdU76gp7f1ehNbNpyY8ZHQxd",
  "key3": "4JVgoRwN9wgeESkEpKqkAAYZVM4HiZvAx2kKZ5B8s4B1HrDVPX1ESsueRcibcBggSxzEcPmmBfTdSawJXsFrqAux",
  "key4": "2SnxynaAYJXKvYkhsVi1RfRUHGRZtpgNHLPBkeXwSoAPc4g2NcVhVNXejFHVLLS7o2EtuMyQkozGVX6ATVgq9RsU",
  "key5": "2huT43FQMPJreae5o2yPWFULutKoppc6VYLHENiCXKtu3GLsfh3dVSwkgECtBcpCXMjMixLNa2maHHNU4YAsjhWU",
  "key6": "5AJX3kPF6CXmtzHfNbiDova8JpkX334NuD1CzpQoGz4oQg8iL8LGbFmvremDag4Lf4jAWfH5bXrvuH7Ho3PKPmGi",
  "key7": "4YrY1RSv274UC4wJ6u3o5EbrLHJ2SASJ2noZ2NBEvxHvhnZK39VAjvR6bpWBf4J9Y3c1eormCVzhpzs9LTs8dD9Z",
  "key8": "4iwGB9buWdYSx5MSP53B4QjVbXjTTpGtpqeEMZ6kjNXxVLDjwwLoXMLxf2M4sEVJmMnWEMvmbzdLoRAdhjWmLcVk",
  "key9": "3GFszxhMrp2epc3NnnufocjgyWvQfSGqoSp2SPqFBC1A2jbUmwtfbBWtcFd5h541ZVobN7Xsf7KDruLbDQU98LgD",
  "key10": "4hbQDC6pX77QdHj4vJ1MgVJUBbbYajhcThJ2pRm8QiJHAZmizKSYCvGLJobyjvTPY7wUbdhwyU8yj8e15R6BWCLE",
  "key11": "2SesDgiSrrHBmm5vmvqAbgzx9hFqVyYKgbuLCfdCarTXpy3dhifXUVY1QDx34qpRzz9AbW2aod6B3N7fcmYVLbcb",
  "key12": "5ggTqpaSAizYaX4dcXJbhPSh7YLMQHLPkvn4eohuLRn4gi7Y9jis6m9Rj1a6cSf4uStkhxZUBXeRpektRhBzkEVy",
  "key13": "3Wh6SEhCjqgURqJmoxLuVTpRx5Bui1x5wE3YZoTefZGPkgXx8Jx7xpV1PJ72nN4znhxQro2F1LTd2LATHvwuSWJ2",
  "key14": "2tL84o9VnB38q5it1Bct27WZSsFUxs333PEjNcDtfcxuJjRyxrFooC5h3Fajjm2FNGxvpvN7dj6TXH4Nfb2tqCZs",
  "key15": "2DqGW9Tui63nFUBdZu5hBsM3RbJyscp6Gku5Y3Xm38Feyp4SokAAwo29MwNPdgrmqf4hHdX7obRL8RVtYwHMuaXq",
  "key16": "28pHz1ckZNUE7M4gqm6dG1JjJCKmd9RHdHypa4yXLyegrSjXAcDzsybEur6x4HvNCXbRjEbXqbwdoHwfgF3wHpk8",
  "key17": "xeGKupoiyzsBaujSRY1fMDaB77nqPojB1ThnrkJaSw2veythfDuwYvhL6GJdeZBT2s67YNDrQTgTGDRquW51Bbn",
  "key18": "w7f7ZGxGRukgPLPgYWMjR6acLGPtnr9pwRv5eX5HkWLitFBJHqhPpocEFLhtSfLSQtVf7ZNmWEGBL1YabFyS7Uq",
  "key19": "QDSddVd53gxUrM1m58LS36MQh2htiy54jZJRRoLE7cUFY4ToazciaxJ8sptd6Z29EAtWfpZ6iivyjrPqFqp1kJ2",
  "key20": "61NLu8djckjvLqqRnCFNMLPCrza79ApxDPpK8U9NkruwYyrqEoUssPnirZKU86ZFqVX9iE27a1wbVxrcRo5xPoYc",
  "key21": "3W7iQMdWfXHit4wCNoPSs4iwKNHijgB3ENECF6B4qXTjgBjuairjSegFTLZeFQtp6w6JgVvv3nav87o6hospoASg",
  "key22": "H5yNycD8WudR9baB97hwD9wefxrNkpwP3T1QLd7vtj6faJDV96WcvnCmS24JknnPh61T9UohkTn4MnqLKch25CX",
  "key23": "4HynPVzktrE66Xm4wV1wqNSSU6sNVCe7h1xbfAj3MVRRWsypENEgUG3WCCoUccyP1TXU4hzjypbVEGJh1UNekZxZ",
  "key24": "4zpjEfqtTqPyunqBTRm3s1cT7zStQaBvnsxYsj8YAEmB2D13QYZw85eQ6JJqXakSrwGzSLJeQMaegbJP5CcE7UqL",
  "key25": "5KiT2FEKFLoFcPYDjwLWtSryHtmjTP1AhnUj6D17LF5yzjMYDC6nt1BaxZnMBzt7BFCozS9RB8PndT6AnQ9Aekpb",
  "key26": "3hmnbx2z4Va9aMg5qTTaCepZA1B8pptCPj3apeYQzRUHwJH2UDHrvsLZKthqhWGThR8v1G3KQJfUN29ANjytnibF",
  "key27": "4WqDb8prowU1BpduR3zXp54vRhgUCes8BqfTVXgaK2Zztp1RLbBCi3P754kWZZ9JTdk7bHFbbPudoqA2PHavC5ui",
  "key28": "3gsR3vFCHxovW9HskZJJP6AEUDbAjDe22uyVz5MRePKoMV4RKsEXdFTacR7idumUfo6fawUybXQ5mRczQge2WuWT",
  "key29": "5ZZi2YLhCjYh1mk4shk5fByB19TtgU42yJCYLqVbxH1UVR9wncSmqh7C4k73b5J98zdfFcgXWs4r8ZTj8fsGWESH",
  "key30": "cEFpkepmSEe4Q64Vp9jTxdnMepWg7odomBvjwbUB9awefQnAE5FbD2iE1t8WJGHaMCQL2sVCpbAZpZSngwDTaUg",
  "key31": "5jEQNseCSsfFde7TgVpsynrbdMgWaDyetVzjnXdszBki5JC7FPDxtpiDkkv51af591V2KBd1Qo9g8bcU57R9FAbx",
  "key32": "2cPSaPsDEAP4Ku7XwVxEwHbZm1Rzk6YT4ZwAeF2vDbnXyA3aaGtZJtPwvgNDDLPnitrXvnk2X6jNjZ9k48HDAJ1Q",
  "key33": "2ADdGyz88kEz6RxJwuR58e9GFB2ykg3iNeuvKASjxHnyuch2TzQHHHnNNowTD38YHwxaZGUSuRW5KMiDAMaZFrMB",
  "key34": "39Uk31AT8woGDSoFVJVH6EGStnLGMyGb5dgLhrxpBoAipYHRVM2jkMdNbX6SfV9heHdEtznn29o6mLQwDzhRmZmp",
  "key35": "ofdW1fjwD1nhnqt1pz4M2uc3tS4aeTzLeWsEyDMnmKDrz8fEf3u7xpzvCLC44uE7yQTgYxDvkqLGvLPo45TF9UG",
  "key36": "r67HFqsLqrJtdcoFxJ4qUUEhJPws4fEciWHKxoQMQmecKwrBjXbTHBCgENCrg9gDsYq2iyjULVgPiZYnjc5kwVB"
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
