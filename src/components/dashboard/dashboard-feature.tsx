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
    "xDHuoQKsdLeP8GBJKyLJhn7bCj3t8ypsYF6oMRsZJrJCtB6ZtNNsgPKuHRu67HFWUS1yzc3Efb9QqTukvpAxFLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBa9rAFpi5wU3hop9d2cxYQHnHxHXBvBNKPwXRq8LYvKacY7vJs8fzcwHtJ5BQvqjcW9FoJ3Qoj3RzAUBDpXaXM",
  "key1": "67iiqjzmne9unun6udmowhGkiLEDSDf56GsE1sekAv1qB5BB8R5PwYvvs3WArMKpcq2NG1Fxupa6dPwKRS8y9e9y",
  "key2": "4LLwvELrBsdwrnrWEcKr2U6kJJjHrwpb5rx2FC213XA8LYY5Jz6Nx5RGB9APfVGN1REWE7xnKViKnJby7dRutxJw",
  "key3": "46yHsk2WWuE5CT7MWMRm3FeNjV2F1DkVP12ABSWKv8WHGtZJU373T7PyfJhTXUJKcoUDu3d4fAbK6hHW2x6P5UuM",
  "key4": "2iNWyzfqy6CwT9f7TLEmcWEx83WFvpTbcJvm9XBM6ssvG5GENg9yWxxooUtJgYozKZ45SvhnGMBnYac3BrUVJywr",
  "key5": "5k8vL4P4YJGdwhXCtdj6buu7WKQfsBdYE96iiGkRsSVmvRo4gJhgeb9DcZHyTNbBUEMSABBt3ejyf3RZqt3cnq4y",
  "key6": "61WsziXJfaL7zd7P3jtWHRJvUtS5M44JqBrJ5nKfESNgr8CTokxpN7GVqqoLroXbx9HmwLG2Y3w41Ao6caj6wm6F",
  "key7": "4uoBizKiWceWpo71NQm7my5JSyGfaUqZDK3SVpUSQneu7CBi57JGF9xKJoarLi49SLFL7spJ5dUADP6UDmaoP6dr",
  "key8": "TwyUY9sDzQepPadQZmm2QYcNHjcv7hiecQ5WHvnmYFU1f7pRoTsq7JUiSjM2Dza99eFpSRv4SpkxMsaumGy71WA",
  "key9": "4Pm3sAwaNQoMBQGbjJ2qVTQoeSETDkcXFkia8PVmTg3LaUkCMiWErKfFDBeXv5qa79FU7Sb7GgxwYntwYhVhNP8N",
  "key10": "4ppMHL98QsJaSB18SZ2VVWGhms1TbbNzj71W5G9mrAu3k2mar8QweUcSdr7F5t3LcLKTeHiYdC1mgBiYbDAHqD9V",
  "key11": "LwcuK4pkTzKxxgooVsWpL9hubZn2xhoo1bwt2EJSpbQ8cyVaGA3RHZp1S4xFbhdSacACAw9YwNnpKNKGeafgauR",
  "key12": "dPmq8NkWy7WoEssbMYZTpyjieKCVjdQTbfSw5FKnQDhEH1ehnJ2K1UnabuDfWdNsEanfjmMX9EaRS2hkia8TDQC",
  "key13": "4Sdzf6PRM1TuFveoqL63dp3WJp5a9Ev8td3EbWwRSNYfECG3T81mu6kw8h15tgTvCnE4zmwenuYiKhv2HKBYEMUh",
  "key14": "3MQzvKMfQNFircPk7dgirSbkA2UtmqZfbRDNYzJFs2PBRWdgxxq2zQQbqidv4L99C543W6eBkiu1hPGNmgRLbyUd",
  "key15": "ZN9UXnhJGRSkwga1cii6Pcv5PEsMrJdZSCSfmUrFzr5Bra6weNybfFrzi7wsVpUN7rDEhmn5g6KRV4ZpqNtUu1m",
  "key16": "5j1zUetyUoQJnNfGcPJuaPzDYEFbPJcPZVmckbX8Sio553TmPVgj7gaut6sZSgCto3cLAQUNdbUVZ9aAmhYqs9j2",
  "key17": "r1BULPrJBd8XEfbMBfdKszQ8bxW53Cb2kywhRN1HDYkz1qZo2DB4qQbDBXgkHs2T4Yh1gq9AyV44R6DqGJNLeDY",
  "key18": "51Vt23TDFqFMLcCjcKD3rn7EW4xVW1ZNLQitdg4fQxrL5GNFqans11bMNGRK7UnUoUkTBiR6b2T3VSP8vyFSkGre",
  "key19": "gWgmporrm6r4nGfiw1zkAGsA3Zxa5eNU7KM4MXuCM5xBUJ9CnuJZNL8w7fuv7NJYQit4X8WJj5w2HTvFyQssrkG",
  "key20": "52HRDq8NDfWJ2JLEALNGeRut5Wr6zFxjzQkEdUSwRwK2vsDSNhnxsnmfHm7KpTJukQ1Z2Qxn2WxDdMVkAVat1r9J",
  "key21": "3TFaTkpz5ib5JggD9CNL2fAW2ZT5nwFRtAU1FsiU5yZZREiYSvpSLyqTw7U1KN29QZU1b78YFhKQ1jWoaWDW8AXm",
  "key22": "9tbcY7Zy7mnLtoeRZniJanSDQwXypsyPHnyoF8ty2eAHt7BhxisF8xEX7HYLuqZGHD9Eez3D7JY8ZhfLus2GeMF",
  "key23": "RhSB7b8Y4kQLAvZMvSTAHq3JwNdLnMumY8MCzv78fWZKvAUqL9C1NrjhJogvnYDBG7CPuyeActLEBQbWvx4WzXy",
  "key24": "54sJTZGi8gSxLKKBGSkDLdFkNBC4WPQ3mXwUKNRpcbf4DnBoGKRv7VEQ4fDJPLhVNf9f3PC4T6wga5mtYwY96QBt",
  "key25": "4JBasPayarz5B9XjWWcjnVC7x5JTWScPjANpH2su72nxLc9MduAqNM43zsqyDqsprNS2xNVqsxhcx2sTt3kbJJkX",
  "key26": "5As5oouzN6h4o8dUdGGxQ9AzpZzA4yxWxZ1nHzKfASvH1ye9EpFvU21TuG2QBBhEunSm4NwmMH311adxx7UocpjY",
  "key27": "5Gsd3ZuSgR6NdS67tCFqKeoVi8odQ18RxP9GJLauTTDvxX9YRnPn42z7UcMGd136pHPxfoDmcDaJbqZiXPD1wi5n",
  "key28": "219QiQzHebLhEDCs9D1Pus1j37vTkmbjGSBo1HabBR7cMAjYVHXD7mjfpuYsDd8gATmMpetx9we1Gs81aTJFrvp1",
  "key29": "jf1cF3VGYsDRa2p5zuHExPtnDcddceeVBRi3fiwoQWovTprcgAHqF7pNY1RnD2GC8mqiGDXAJH9R6emVGsGGA6U",
  "key30": "WPXQfLMydPpF2VAEADMVw7MzAfv67KHuSshNhYHNt9FYv85SEkBKcuJ5aHMdvqe2e6gRWED7keTUJQRwqTi3aGA",
  "key31": "3t38m3f1TofSqbT68sWUTNua1EkwWsUZc7VZhuxmBeWbeo7xrdLiWVgifmctKMxLxwHmZ24cGUwLUU5roW9oSwHJ",
  "key32": "5c6jmMgsvDajYM3FMBfN1b6GNEV6wRdNcg6bUJ4xXnPcsh5EqcArZEaSorpV2smH2CfUsZCdtAxSminDqNB8TKWy",
  "key33": "2ohE7MVH7ai8nkddHhLsdkL9cUqKQbjiGFNqGjrzWBgXNQwCn4ZiVxRkhCZBcxRGurAZHqeouyqBCFLYhzuCpzjx"
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
