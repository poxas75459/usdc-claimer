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
    "3DDupCYybCMxCPuiXuC6my7DPzHJaonvjDs6AZ6Cj85dyDDj6ks2oJJEodJanLuucmj7LAMCGaCgG4EA3rRgYeH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cB39GsY638frian7PZyeEPcZ1RjCtQPsD1vuxGXWPSSwXstDDmQzX6Zvqp3hWikMAUcUQAar7ZUGCwp6NMeXjK",
  "key1": "2QoowMdR54fpasQdXKT7i19V1xDd2pZUt6u9UWbQNr4ibPPFBsCVrH9ni98Ao8hgAxDbuB1kRkLcmczugDMP3xxh",
  "key2": "2gyEjm5nugUztQPyeZGgYQuKExoaktDJTmw63rCtfxqyEdygk7Q2jPD7WMwFeYchkcoChk9RzvRapiqPj9YTXCZ6",
  "key3": "2P5KHLFjS69n4AwwqcZaiLh5FkGcamtS5f8MYdbSdG6sA9sPrgGNjKZmaoU4aQsNCC8H7Fujc2xS143CYfvkRLBr",
  "key4": "2vdNjqFXu3FyfBMoEcUXa3xoQHxzVLeKW8fJKLvs5UfH79tF8XzT6m4939kSq91RjxM1Xde9DQgjYPxpUkcSkHj4",
  "key5": "4aW6FGK9V2i3R2gx9WuY8owCj12ztMiPfut8q2RcvtiSMQFkWpCwgBPoKmYjZY8cytU98CPTMdGRkVnuQqug8Ty9",
  "key6": "pFfFkujyziJ2S5jZqGUWngMDSqwdEY2Xch3v8h1BeTihx3nFLwnmAksjtGsVZxmn1ZMibU6Ch4XB5SnKSt46N78",
  "key7": "5Mx5Wz5hmRVhPgUuVfwJbzNXURGfF2qNcGLvan9Pxc7g6o6sU25ZM1AXryNkEgUHAEVzdyEehjLzMC1rEwGbRNQ4",
  "key8": "2Taz88zZftPRViWw6SRbhqD34mnokcubAbCbc3TZxmEHwW8huTEk9nSCVKaqRrfM1N3aaZZ3Mv2M8EjSwxpVkdiK",
  "key9": "ggBkVZqvygjexo5KGoUz4gc8Dj8v8ujEoncsHcn4bDge6ecZkZvCoZrc9bibBXVNfCkvwj92phWG88Wuu7L4Sta",
  "key10": "5M1JFWRUYKcLXqUTPTmwM6RWbKY2xb4YFD6qybsWJUQv42Qq9hALgNkxa3sXhRHQma8oriHFLLt6ZAEnLiQxoGtE",
  "key11": "2yEnsS5YhCGxiZezRzv8pqwG1xgELJaU4p5u3Faw5ZUPQJXZeN8AJGcUe8V5bGqCFaPEc4RQwUSJmGhgAvs4rHNS",
  "key12": "632NbRZUokrgZnSgsgzCcGHdFH9D1yLKJ4ztRX7ZnS57qLqDhp9ZrL8fHyYJeB26NdbhWrA3akFHCgeVaqxzKjqD",
  "key13": "4EnhTLXQVRaVSTQ3RhTdxJywpUXrvSMguQMs1uvMfNAhf3j9QWoH8yhYTujuCwzJi8wQDAvAe11CsKGcLbeT2wK6",
  "key14": "3vt58nD7bVmWMFUgnSutZQpsiW7YnfqDE4eDc7RKiAst9zkxucJhsvLCRVjyScWiyyL6Tv712k6wEAR5KCRiXAiS",
  "key15": "xkQX2DvfvuCRJcx9Ddenu71cmVzFkg5sBA54SksMngvCwKrAk4uDZ7wn9b7os4gkwZssxvpesvkkX1tLwvbuiMd",
  "key16": "32RQCCUE99grXzLcRCdqX4dvGbAwpQ5g8n8LGjkNc2dQhpAF64GWUR79HZ1Q8U4coAcdtsYxNXFzxiMtG5xJS1si",
  "key17": "44qgaqvFqZE6zFrA3sfokF4KABApRsbKJNaUkLbmzPdM3VEQEtqyHf73DxBHsvYnXEysYsB77MXAhmSxhvwtyhvq",
  "key18": "371DqeD81cMWCGAa8NH7LvZFsQLT2vwUFZHYGd72Q7xgAMtWHAHp76RNoKxMK2dUPn9pJh1i8vhUQMoJW9sG4EVi",
  "key19": "3rJjyrzx1wgqw8fKsco1xMorsAyAofXh8ysyAumj7eChFNwjYac9RDnoPwuHbUNfN81uuWH5QbMCyyLCMQ6VnL1Z",
  "key20": "4ruKmYQYqCbkvk9JkMoDTFbG6r4GLqhmHgkqYi5KCZDEcV6EPZs3ECDJKz5HJTrQPnjqJRgiYRibkm2hsTg1MjYk",
  "key21": "3ceu2uNVWERbXb4UqZjY1ceVFQ5vEgH61fuk4gE3KPt3Y7E2HHvaJbcUbFocsSVH9dnwakqq2gkg5u9uymLLCSW5",
  "key22": "2j6qAT5KwwBdqDFUANwVggJyYD4L2rQXo2f637eXzQGNSobGiDjgvJrobUiVgJWaLJmDRoqCnbpRDCuNVcotB9sG",
  "key23": "W9wS33o4J5KgWerjbpnsidXZ1exxdBk7XA2uvJ7XQv46t5QAxUTHzUTCXe4VykcpK9SwWfzxBMpnWYpW4H57Pvr",
  "key24": "22GoFnEBsfTjp8EqQfVhPsT9ZmXBQhX7J6BDfS2FmwvAfKf6aHyPSVTpuigtPKPdvbUrjwmGmqWvgLjr1YBaRz8u",
  "key25": "5XftKdv8CorEWLjp9x4Rm9J54j9awGFBs2DS5EVsxEcbTGbfpUeTwjq9uzQsKu7fGwCgYUdXs3E2JEvxLoiUetL5",
  "key26": "323c7kkNe34RzcA9D8xEqK3tD9svTFHRM3JHtD8F4vq8wFbNQJgaGe24vxtbxH7jMHd9nCMYigHkw3hYhi2qmCEr",
  "key27": "GSbkwQqBZn79VJna4q2BY6Wq7dguuicBfAJhBCcGTbUii9PqxpbzkKJGrxGZyRkss1Mm5FTasZMYSX6VKz8qsVc",
  "key28": "gqkL3C612srSeSs98yGZP24iwcvrTBWBiuHmt3UtrBvK11LcU6BKTP7ChrRBTn9qih452okVYYTAAQLDVBXm9sT",
  "key29": "3CcSoDTVM2UVE7dKgESBYCKskz6j33JrbbJ87631AKeAA2CpC4dA3sMT27dySd6Bdto3ScCMhQSQ3p9XX28y9oTi",
  "key30": "3kYx9SXyC8rNdcE2WENQ7A3bu7u4QjNdXbLshntNXJQt3bD1Ne9BhgDbCNNP9fnPjKAzJed2Nw5RVA6xXrTN323c",
  "key31": "m9MvGQQ68nv5UomThL6tetzd6CuG1eyq6qtSEwGM3eFzhB2R6DkM1QEc6w7aYDJuQ7c9rQd26F1ydkpCXokKR7u",
  "key32": "5o52fUQm8AV9nwqh6A4UeEHWqsSjpzdbHVN8fi9NfNw5K5Rwgk4c8GvyA73skmGmsHBwY18vGF85XA41b3p935FS",
  "key33": "Zt5ayEfvX2eZTjcoXBKruHit3Sir4Nd4q6AzSRjfi3uVK2mgQZMyUCFap1H4DbLqfBftjm8qYpZTpJEziifuAeJ",
  "key34": "46FbAS5VB3qFui8u1pjLpeapEdiNFPPEqDAupKPz84M87cDriw77WcL5f6FPbzyndKDDyxcpWaMZqa9doR1bRB3m",
  "key35": "3myCRP9hmSgMyBhdZNMReLUWfBGRavZyg2wngLQeZQyPzunQZh9svCDX7HuQW91GLqwJ78crp31nQw3FyrecHiGq",
  "key36": "525eBK6th6xpfCPT4YdGpdxJkoXrYPNc457xweq548khg6uFP8gMfVkUUh4x44n5fEw9wWVXLPkcLomGvihFXDAV",
  "key37": "4v2rRP7QuLeohiXSRFx9zJQMaQsc278mZv9dHdRNYpKQXXRx8U9SbpPb255KSSqrzuXCSqejgJR8TNGqLUVkLPuQ",
  "key38": "2sjdmBK93Ex3PchiotvMnVVzW9XnQR28g2tMAXMZiweJS3K8bidMKKemmwHrVE6vPZU9pC2X8dxtzd8ZSg285JDh",
  "key39": "49YWJQ7gW7eWUxKJ73AKaBUsxatXJrxPXimr5rw4MAGiBDM7sJDXBhgGwJMzLwS15ECMRD5fMoT1DPg51W53LhtX",
  "key40": "4v2LyyqF3ShMhaPEewCXFxFbDHzvs6vjhF3PsPkpq8AwxVi6SFWF33gtvAKnLg4aoZuT4XGppDMyeGfaaGdjGfQi",
  "key41": "3Yfp4NQBs83ZNVXaEJqFK96ZkTud7WhWMYWgic4mx4odamhQQUbTmhfC9q9Fqc1DD5WgUYpLFUfmuWPxmeBMaiCB",
  "key42": "4nkasr35sCbRhch71ocxXVrunFnHDWRFK6D82dvCJ5K2crDRcy79U4jt7JfAd6Pa5ZzDRhKH3HDVZaGhwREUqsU8",
  "key43": "2tVzVaV7mVP9HhTw84VEiYPAMA6y2t4penYoZR6caJXLwRj6BhgLRUbtJvZ2skTMAYZAUJipk9A9Csu97DikqLdP",
  "key44": "5BYokhJA7y632w5jKfq8ia4vS3fArmSjGUUVxxGq8AGNCRLw1sX8gCzvfmSEuvnCb2yemTUUgfeqNVMKCdLGhgXv",
  "key45": "39ywWSJC3KnT3ZdFfqi4UvHzhiHiSPv2KfsHg1ajxefAwRC2hzkCUQ9jD3kCNjKNbzFaQPvTxGEkPkRULkYq329M",
  "key46": "27oqSDYpa3w2cxjHkqMHmw8gqEMV8NVS9jaquVXNQLsvFDvQVtP2dwMneh3sisrU3299ioqXzaakTPKYUTdmSB7x",
  "key47": "4YgXZJCM1Pkqt3Va28fht9DRvqkX1TjiYGULcHfJLbbrxW2vC39TRMpcNxTbZf9TWACYNzefrLuDYa9BjYPvsyhp"
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
