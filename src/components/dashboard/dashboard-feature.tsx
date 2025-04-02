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
    "2ZnDuo4nccfyfCPPP5YYL2NcHVbLnWmo32hsnMtX4DmdUS2ABH82Nt5RToU6AU9qLmPAPeiyWHwbxxNwknUsDdvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNDH9FAkAmY6EdE6JTYmiAJyozre8Bw5aWs759Q5MZt9eMjrAaEGDkjEbBmrqFs1LDrJwuq6sMduvxtuUiZYeCp",
  "key1": "29DNzuL3r6zMposczc9kTMdnD8WVGWxMsxXtVwPxi9iVNrtxE7bYqR6YFzYoTMYXJ8uL618BNsL14YK2hx51LT2s",
  "key2": "9Fp7jPdtg9P3gFYvBuicgoxd3YYoK3EusEbeE9oe1CgxCYgxxTrPPMr9LQu7N6iFmJxKe1V2rbJ7je3ucwscwuJ",
  "key3": "z3guMwNzZHhvHHLZmd7dQoLw6zipJgZGmNiTjgJDV5fxrfjad925mjpoKYLrdY9W5M8XWs3K3o4iRuMNqcsdj5s",
  "key4": "5ZVvw5BaZuhu2kVx3C6bXRgn89uc64UUYV35cY9roWRoa3uL9U9HoB1pEcWA7QAZdzpXDRnN8bNpWGY5mVoRZj9x",
  "key5": "59ZH8rRSwumeCQ6RiMqBMQdgGTDYcbNaCB3ee76zVPfPRGVAtZ2BYhyt3LxtSHeY7xMrmVoGsq9wqjynVbfhzXGz",
  "key6": "4Atg5HvSt3c9vkXBHW8Zkd1Zr8fpZNp4zzWjsN3odBqz6LgXRu2LoGbnMrrE68wDEv1qR46GU9pwBdSrUWVfEaWg",
  "key7": "2vswLBm1MUQiQiw5UBBvJNmbN9RmiULrQ4ETqHzV1Pbx4VnjHGHqeGnYvhQLYnExmdv93hx24qYEQXxSSDCpN3if",
  "key8": "4ykeBTqoHZgPtDD5qwHgkndh5X4sugxZWL6SxWravuVKsRxrZ334XK3iuyVpFCXsv1QyLYHK93a2HgYS5yK1GsBU",
  "key9": "375XUxYcrxNKzdrbwsooQNe1c2JgA8ViD6xVcvSwpNB8rqNYgRCSU5fDpsKkDtVQmv8mMVHiT6zXqBXvWPscW9Ws",
  "key10": "53Ao4fgqHczuvA3jVXanGhfW3ndVykwJvWiT8nEsNdo1KT77M4CnMVknG8VQD6ZP9sCcZerPNL55t7Nf1jaG3vXi",
  "key11": "3tPmMPZr1fjveqRgM2DzpiVSHh1pURkCYHuiG19GYNCu8dUeTSfbmCKTxobncQiBMkkGokdKtnP13uKgxkTTgVnA",
  "key12": "4yaiC9VYEuiq54gCm5grqwaN4BLnuj4YiQLYCaJcgv6SZc9eCRxF44uD1DCEQ94SxBhmegb3TMC7y4zzWdvrB8oZ",
  "key13": "3aCT4sSqsJ9Fa28pQ9FiNG5UANLqGPs8kmUcyz8Ra97YcJKtb7DUGEyhL1SmoYevzYF1UGKEb6V1ooKzuNYdW4TK",
  "key14": "22bu5PYRmsd7TKEDHMcjBsPBGkKH678ykeGmVF4h27NrCmXfymd98ffCKE9Zv6LGGk2q3yoANdPHSSYq6aTF916k",
  "key15": "5TiQbX6MyxRmPk1oQpNPh3cu5ATmo475gifrfqyRjKgAtu9DMjHYX72f2BQfRL7kWAbBdKv9w8trNsLzgYX2s5xU",
  "key16": "RhrLUrzVEt7tPkFMkmKeWAPYhz6w4mazKFVfH7vUP1ohw9s2uoQ4LFdRWKVPXqhWmKpppP2yiq3bPxbbP76oK38",
  "key17": "2ysPXpRvuPdWPB9oSo7yhYbPzGk4tmtVwYCpEfE2c5EoViAGYPwhuwzke6EagCcnsV5qitN4m8jzFz6rQbjHMuPh",
  "key18": "HspJefQSG8c2UQ9Sr4o9uq2hApKJb7QevyvHjjNXjmiVnpvsHud3CU8RFciZM8jbZn6Fs2HanboqqeR7Fk7cS1P",
  "key19": "5AyL2rPAqCwEWs2yLPxDuyqjfimw6R8wYufK6mZ1jppCgirAcBQLDbNdN79akvU4WnvH3or263M7zxRYPnBjhttv",
  "key20": "44j4QiEVJbB2fuqnhGcMdqWjsjpe2YC8KJoxgTZ8kk4Akr5W5dxRzRGmmDWyAMLTwRJudRSeHYKXTLY2tuZqBSP6",
  "key21": "4qdUcZdPVNyGiZQTdfkV2WNJHLpboiLQ8ZPfrdL3CYBsLNPiwKngwGqs1QroBNxsbmuEKujQqEYj18TqtXi5UW8f",
  "key22": "k77wzNNeFc9CJcxPc8RdL5w2q2z8LC7nLwgL31kQ6EqC794kyJH7eSCUx24C9b18qjq8CPYiGkBbKJ4qfdr4Yjn",
  "key23": "5SLN7uM5U2qFU5xdtWJUDC9eshC2h4yeGgAujQmNfGawmJ9AMw8mz9kF4UVgbd3s8R1ACCdmfKXDs68XratiBAXA",
  "key24": "nivUd1tpGWdEAfTNjFsjYUg2Peb65TrxaWamr8TMe5HU3Vxhmk4EfDqZoJR29naZgpbGZCrMojrg3pXk7ZVWjwv",
  "key25": "5MFfdvDQYNGaHmtEUMUANyLnp8FBuFmgnVqniNTUMJR3BuPipWjzNULT4GrcTDg3XFigr5Etq8T8JWttieGghnpW",
  "key26": "5HNgeuQ3SRLB2DXQmcLizJyRp9yiypcmL11Fiyz3HEvsRKsT8yraQYGtrLwwyu1tagMt6WxprC9p8bKZz9FrzF4Q",
  "key27": "2BQKU2h3ocLJcYq4duLYaTgYvEEA2j9XntgfPJ2yFqjV1rXzFFksCKBUpSu158KGpb9L7hWHnT196aoK1DDunDiQ",
  "key28": "4pW5tFk6yFtBsveFUTEagUdz8b5T5iG9KYFwQ493LqGMCuCoeipnHN9SpM5P1g3eAzWzNqJDrFNLDkkqocwrjFvP",
  "key29": "QPiy1qtU1gA7VWgRACgSguLkiRB4w4FygMiS8bHGCTSDz6tVomxqDS4ZTdwuEKYnDTD4qi4QJUqjDcdBm6CCUyn",
  "key30": "5XXDs8sQbgqQoAej8mR9x8s1sD63YZycxqoRJzjHBYKYG3PWGsmfnKgzMsbfTY7twHZy6uHHpceaQCkXZS92EWLE",
  "key31": "3hfkGDTkKiDkqKpJ9TRHo2XnKG65BLAd1nezzDgUQMjHmezHozNdy2tihtYBQrEkFxmwWnW3wDNSveReyhMu9VME",
  "key32": "3KhmgFXFsR2HWjXSR8QrbihpNRTL99icywr6W47mdnmF9YhV6LGpQuRnKhaUtxS4D5KwPZ3DkBwKau24f8KeQ9Ah",
  "key33": "W7h4w6HpPec82XJ9x8WyQUiU6fntWNvT15TnwJnf47NvmepwJwZTCRWUyLNgAXpKBk6SUDMrZLXRwbxRnbMcnkz",
  "key34": "57vQwAgN75mGzEY1gj4MX1AyrAqPCb8k7HFQQwCzdztFUfbiNY4mWaVzQTwEYinDAePHwQW9tJQ8TiaEa143oHy7",
  "key35": "4JyBkGxnC8A7zSWwiTdUr6aB3vrqonpmF5SKqBpCUd4YPET9gfqYzEDhukbW6FFrbHwG42ncQz1bvZFuowKQCcHZ",
  "key36": "4YM4ET4uTiXAUjhimUPakV38hEcmu3fY7AHCSc9cX82b2QKcStRKVcaDErTB7V2agBpPiQoN51oy4x8yKMaoGFD9",
  "key37": "38KTVxpyoPHpTokuMDozRa2g7APpFgz2VxH4ViGFejFqtFawv2K8txpZESoqyfXkaEirsix9gDk9wHJaumpJ7Xe5",
  "key38": "5Zo2vfgiUBtLhZfPpdzEyKP3BXjKhbD65mfjAifCjZB2bi6kPxERkyGLSkhkqMFShUHLSSwvNz1FQrrYXu5dcUde",
  "key39": "3Q6km2rDMfnkHTUXPYzD2RQ4mEMPuviAAVWeqjd2KfYndMJgmU8K88i6ajQvHqPXmcuDfJkyjetLsJgyfDzu5vqR",
  "key40": "3cpw2h3BMFZmgdaNp98PP4ez7zXZ1xDaKuCC582LtMAtN5sppg8GALCZ3GtBu5fmLtok8nFkoymkBzNxAZnghpzf",
  "key41": "2BoaCPBtAEHSDSvU71aK5FBL2noH9wpvuLymEyXo3h9Nz1daec6aYRtQ6bGmfERHGXH3ftSY1Vq3XYF7rL2Caz2d",
  "key42": "36J2UKf9h8r2T9KmJFKqTF8hctEiSN37BdZD5rXoc3Zcp3TThnT7hXMzqAma1jCUJQahGGevjo4hezfg5YWwMnL5",
  "key43": "38SBBF7iHR5qqKjPARYcZ8uZCUpv5hCoCcJ4uZitnxvc34nx5uDFreULC1qV67DmRh8og78WozBfHnJZNDNWJW4Q",
  "key44": "5uZPrKBKK1aJ5G7JebUn6KNkr7Burerw5WuvBHgyBJiC1xa2b6b8gJYCRgZzYJTLfRS4AX3AhicBEKTqW9vEGdE1",
  "key45": "3jZp6tfaMrA4HmAwoaJ74yweV9TkbcZCHbLqcdGKdnjBmx8CWVUYRVrYY553ubRKKdJ8PFPhXb9SYW2VTKMp6Fju"
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
