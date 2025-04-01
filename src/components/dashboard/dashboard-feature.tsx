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
    "3PXDdH3JDPfxSgonE7cu8EvMyrWgMW5o5VKdqqWLRAkKUSARKCRcB2qYui55KtSPtp2wTtZfNvvWQ44Roa2gLgvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jyzmbf9dUBHW2aRfJFBJMWWBv46ykoJpZo5LfMX1w3TTGKsYXFi4J75m8fC5x2PSUNLFkQEYPgkk2qtPJFocG4V",
  "key1": "5y9b95y4YZQZteuR47TLczzkYeLA8YG58i12NjRBiBLnU2XS2qdrbQDEYuAvSWVaeqZXqe1xqm2BWVoKzmkXNJzm",
  "key2": "31TUxryPMMHKcsKr7BMN9dNw5WEqN6V5mYXnNGbWVjGxo9by4sQNRLE2LYn9aSLQgxFt7dtLgvFvnWJTNDBh5Jg5",
  "key3": "4fvpqCn4vNh48rDYqHGEmrpG8JdEa5LLvjH4QFFqVzYrTuQLSJNXwrSjXMuza2MXQpTNdvUDnWB74Mc4V77o1ZA8",
  "key4": "2dhdEQCCJYBBCmB8UozhUU345WZmnANV5cdaanFoKPor2LBPnTtYV7jbkZuda16vy5rrQYLpM44tvcvhXTCtnH7u",
  "key5": "4PivTrABEEsYuf1b6krsBUjYouGBVFTi5YfQGcpgCLX9Rc2CXhgoWXy6hvP1F2ZwJmcBNQFmUffCnLDomfxzgfuT",
  "key6": "5WPndM3QD6i6X2qbAukV7sWTSrtzeMKCYmU1refM78YsHLTrMTZ2xYNXYDezMoxUiaskjGnN2CMqbokvyVwqaeNH",
  "key7": "4QcVbXZpbvoLcQwwKRkXrUBL74zm3dKLKFAnADk7zMdpL3Ty7eFKFdhkzJ3Nkhenh5uYd5c8KLvs8Azr5oSVqwUF",
  "key8": "yViZhdM33EAhz77ePZqtZTJnBRitSXrQaTdEHZmNM62ano5Q5oYPfmu6AhicC8t2MJiNv9rz8mCtNYp22ZdM2nQ",
  "key9": "2j7AdYCPDf7n25AmD79HVz6kmoQ6ZLAm16tHX6sUy6dcXeQQUwZ6j9fiB6uTd9228tV3QgCw5g7DYTufBWrqBYHo",
  "key10": "3BspvjCtZEEWesPwUtjv48iGxkVuc3cfShw8nZ2xK98nCyUYT6RrPS8BuwHsA8Vbbf9f57fRCAmJGV4stSHh7gLL",
  "key11": "2S9cQuKHqVcaPVb928p1N825QN85xjWnNyBoB9XEtX14NTqcWMP1iSaLrrzNZxL9PLLoxxKWvToVNM4fwvvXb4n2",
  "key12": "3tdKobqA2YZ55A1ER6G1Moey2qt9kAaTZZEfmqfyKEgw1y7RhWiUhX8hSZ52xofMUnwPKh5aiR6DQieF5RXCz8ZM",
  "key13": "hbBXiuhj8wmZq5tYq58HP4Lz2Cd3fZqikpZeLCqbvk6Dij6x3HTMNZRCpguiVpHFMMJgEVJzG11cmeWYiS8bhDU",
  "key14": "58iq1cVyBF8Mz1jRVAFRLm2d8Uuo39aVa4HDJ2qwUoePw8G2ySiATV1QEp2usKhRUnjzY57hpfcNKCEaVZKbUT5w",
  "key15": "28jQfgS2KUsTJWvTLoxMJGs5sbnBCKVYCjNT9WTnTJMUjiJQFnGvbXTKSB8Hp2KAKUJ9fbTfhqvjzyj5ciaHGXRx",
  "key16": "4MKHyWsVxJNrFtEVL5xozLVrE1ST3WcaBjBT8duND7kVms8JDCFtUmQRLiJ5gSAnJoeYJao36nDcHvj1odZHSyZK",
  "key17": "5tBpAj3HpZddbjbLkedyKHZAx6HsLm2yH4AfeHY8RdN5DF4AjX6pMU4USz2pXAcRYsiXF41ZrsSJWrEJx8uyXS4D",
  "key18": "5McHpwwzYaLR6CsMxRQscgX1hreb81cxYoicr4MRg53o92AGoWgfq4C4jAZDoDe1VJfnbzf3jcPPMEuEjJBXoTbw",
  "key19": "2kXWY6ai59pCsg7fNBrXzVJonEyiBqn3ALceYCotcYVCDTYPgV2Z96grU2Bftc4Jrk5eNv8LbVm9Vvgh9SrPiN9",
  "key20": "ziDMxKJbekB1DpemgXra7KTErx4P2mj6BmHG94NfBW79Aq8T2HU2LqfUa74SGXMrTW9KtARWwdxJ4d8ucNsrpoE",
  "key21": "2NEyTzAo2yupbWkXF4a3jbBBNsM8FLuXzXsq5R89wk7VwL5CtJQ4N1MjkNBYod5dDYeZpNjhfNy5URxTeCnHVgPL",
  "key22": "4Aj5XurnfVrJs5AZMoExjydF8cZPxTHTVwNzVcTV2GBnDPgsqydBJwUS1gF8riz9ASvhnvZeFq3eJFvmiSJmR4nF",
  "key23": "3V2erhKfZARqH4L4VRrt4trVFacD3GxTv8UM3gqo7EU6XwhxAVBZSDrFvotGdfPovQgejUJHRXgRzUiF2VS7srdf",
  "key24": "4138McMRxS58VFr8GJoghe5AsiDWvFkWvFVTbw8HszhmR69kJFfpYTZ2C4w1b7BNUeE3FE1bWJ6GatpZH89rp6JM",
  "key25": "27a8hW6psTatppy4A5YtpboEFrSrtFKiRPi7By5BrtLkg9ukFZSo6uaZTyqW3YPd1YaZSVAtyh9QPw8QCJCKKBNB",
  "key26": "4ii9faUB8E1S6XDtBgaqtn2Pg8aSjeoH7nNKp3bCXMStGHdFvkWyZr523qRnHwcwLujDvt4xtbWeMRSAYAcfrAVc",
  "key27": "4JNo4h5unkdS3Zu3dVWoWf8wxgQgx8kr1XeFnZNwsDXCRhsgWawenhzXKWbBBUxqm79CY24o6AgnHhLUj81vPJ8E",
  "key28": "4vrCE3YjPgwaChie5HQP4rphERFvrt6QpKe3oPaYinYknoKuHY7weKBLsixzQ2BC2oBVmHbdTyQLkUXb4rRjnsbP",
  "key29": "jworDJ6sUADFtwH4fsVz6KuD45skscygdN7hhJzpiVpAEaNUHhybmA8ECjdjQsripFWjJK4yyPVsKGcBLXR1TSV",
  "key30": "5BfPUc6WzDjmZMNSaXDaVsniTooyCGPwAi4FaMfNVVcj7iYCq2ynKNzdh1aKmrgFtVvLALWtcovTdRSSbb3h3jwe",
  "key31": "3Ss7XkAa74rTd3385PeQVfNc2WRP6hiNM98HGiDxXjUoZoEC5kpU2cmCv1pAY3FnYFZaB5FzDSPnCNziyFybpemZ",
  "key32": "4X9BVkNVBie5o6Qr2X5V7VGLny9Ptr6CMc4A8YHQsEvfgHthMSN5Fv5BkATnxAYjHRFGWbJ1HuoUdjQ9ACSyQS5e",
  "key33": "3Js8CxivreeHyMUK9xE2A9XGMj18p7pCr6YeDvLLhM6FKR3FcF7corroBMCSS6aMKD8u1w9YE2ikWEUycea4yTx3",
  "key34": "5YjU2HTinBE2Zei2KLEWAnT3GuM1s9hSaaqk9oDBzaEuuiZG2KNGcbERRjVR8q5BqcYLC7kvMeVQjuFZ1fDgf1Sn",
  "key35": "2kPJ5TN4c3kxb6sRAXcaQYQQpUhnU42Ci3LCHSRMgUbkBivXkYrUCNXMbzAAk39pPb36vTv4tBtatWs7iwDfk27m",
  "key36": "2wPcHjK3NnbgamCh159YEhEy9krDE7fN3j53jZuKKZ544br2MjsBVDoidD4kKwc58h6RSQfLH7o3HPev6meP9qoK",
  "key37": "5YEmPF6G4Xsg2965met1sZPzvgFvEa1jJCp3izYNhN2DtykCuA8KxbGgvCS9at8VGqQWSA9MEgHzbK2XdQ6MhtcE",
  "key38": "4HnaQfixyVonxVUL2bgMhrn7i14bvZiwZSQZQiqUPfJaSD6XrL7eJEeNX6dyKgE77mDTkZYHJrbWFNzCkWRzHzx1",
  "key39": "4c8Zu3dXW5WyuzF6WaMHm15CAcvA9m5NdRbNBpKP8za1TnhMFiuZesZm4Kj2dYi4f4W67GTBQC67ANQV7QdRRJPJ",
  "key40": "5Thiz992HqN3w65fLL6MVS6DP36J16dHopmddxZebSr77UhHayYLhKLRPVSJzRydV3r8FF5u5iV98Ft1QbyaE3bJ"
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
