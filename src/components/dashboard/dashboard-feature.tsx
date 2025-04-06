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
    "4ECSRvj4LqbRrPffpV3q1S4GeooxKEDkJAi7DHttdRN7bLbb6MvEsjzfZfzStM4Zkzm4PqX21FHdm3u94UCsXfFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pM1Vbrpa2MW2q5UxueAamiD1mkW9qzbLukNGEYavHPhX2VRuALrpy8y3iqJVHsfXysVYhzE6caTvDFhtfoGd91n",
  "key1": "21r2KEjQ2896kyAj5v9kzZ2Wk5gaMoVzsuf9ZZ2vwWYWeC7dsoqs4Pjyav8YkVzb9b1oYvKTuthbPSvZHFYXCxhP",
  "key2": "2ViKvstLnxkneY9fnGdcQr6b6UBgFD8Y9h2M7vbrZfrHsKX9r6G4hEMLqBMCCp1fYLGmCutwZcBsYe866mDWZ3qT",
  "key3": "4wxpNPVZGaWobCy6JrAM4d1aKPpGmaVRDrDqCtVKRBY4gDNBGyPLe1YF9HBsFgLfi1wRq5YBHJFhZoyPHENZmdpo",
  "key4": "2cBs9FtQhwxQD9NCdw3P4cHaSLx4XRorJfng82dxPkZ5tR2CvXB44FqzT9AvnJPytYisEwhiwLoPS7NuFMm6rDJT",
  "key5": "4jPjEB5jHKvubhXBVHa4vrNUVyDCqRvMjQCxXbmiEcWgjS1cWRKgQ5JM6P5JZrPdDURqyjKsFBWVyBVDVGTZviXw",
  "key6": "4KLCai5xiLacqPUCjjBr55CUCCEULweVDdMKSWqnHM3Y7et82NjpKexazcNveEamRDtdgzzXsko4UikituDc4h1p",
  "key7": "JUx7BSkmEzT1AbfTgY2t3DQLNC3MpxgKMF2GA1QdZnbMjw9KJ5xax81EdJgS2G2mg782fhTJGWLne3Lt9yAPBCT",
  "key8": "3XdXcx6jVusY2e81suzvvV1K95dAZJ4HboXEMSA1hK4jo1BE2ukz6PdADPDkedvQfdnrsteYdy5xXrFmWMmrnK6g",
  "key9": "5AHV8jXceg9phbGQeFjLfzyo1A45uJS3v6PtSxmDhwS1RTKHoQjrVC9ozMLWu2Zqmt9nzxvWLnn61EXn9PUkuSrV",
  "key10": "3Tui2TVySp9ZxXm6vL7ppkDppYozUZCwRdP9LDzVs4m9DosdgjMFr74YRNNA8uwkuKgocjzJfuHQR5uoH7GqmGEG",
  "key11": "5b5wrUiA6v63icWApM5WWpcWhZwAjYUD6W3NXMqfS7brT1MnQRsn968qLNonPiznZdbbHNfqxhzbHzwK3ScKeFFK",
  "key12": "2Vsw9339TTF2ariG6tE9oGXZZuxvyhYQMHk423wqpcA9TufELVqqRiwh7rm4fd86q6gh8w8U1TseWSFAxYdb4xPP",
  "key13": "2XNXAkYMjbf35CexWaJa5RmCS1j983JMpuWwYwcadPyonT6nVvBqeGWqPLnpTFXxig9roYemusDhNEwrJN85PCBz",
  "key14": "4rymvkbWHQiDVzDu2FHdWfR5j4ArdqLNzgVuVH9vUzfaeAbYfbqBcEFe4Z1DpK23QjBL5HkSDAtyuE35DzixBdPT",
  "key15": "3mciMMTozSUwdpq7rUuJsaonm3DTAcDPeKkKXQ5KmeAp5oEJrvmfJVKYYjXSdRxmJL4JHaGg1tPDeuYcTda1fnph",
  "key16": "3RimMmVr99ELtnoRrmwTEySQhoCrL1FrZWT1ZnWu5c3PMkHoNrKj4v5SaP3e4sHEVDCHNboo9o6Gx2iTrZXd45UU",
  "key17": "5sCyW6nuFQk4V3TcAPX8qfsKNgQaJfuVNaETCTF3x4VC8vK85Tj1uXkDYUR9QYNWvKWNsgtJMp1QPfi6bexHZZxD",
  "key18": "5UiRbVBgYanXPVBd7ugXwvRo3Hp7QHe67Hh71w4fM7GXxZFgjbxjEsFRPTo7zncxfQqybK76xLY47EDdLpzRJ5tj",
  "key19": "FDnBgiaGqCVwE3GgLfVywGQDJ3hEiJJVXCmxpTvA8sXoruGFV1Ex4PhMgeoV3Lk6sUkGFbtSKNBeC4GGP4Joo2M",
  "key20": "2eLxy6m927LdQo8pAQUm1gWPHe8E8jhurZCYzGX6J5K9RxVj92RsyHxK3xwnmrxkuQjRgixR8AA3qjVLAmeR69GC",
  "key21": "28WxFBJRFKq4Ln3mhjWuHprsLQiKZkLCKSxfeEasRvqCbTScxc4ESc2tPSi9VoBkEoshVSNJSWPM8JUUpMU4GvNe",
  "key22": "4qsSjsTdF2ZBNDoq8SAujPZDffzUR62M91mpDcnLzbKSBYxEQ6KAuf376JBnSRHesEz3zZCi8sFKGyd3jGHqzx93",
  "key23": "2NfsAS8JJv84MRDn2JmkmXD4p9WJwpqpBmk19RkvtCDp9gDS2yYe93YWmTW3JkAQ4sRyrYq7VLE4WqWCAQJRQfz9",
  "key24": "5TziU7Mjte9vXp3w18V8pEFE4zSNqTkK85hWJyCNfdVphxCSijfH5ygnQtU33rXMzadxFD9gRHWX1FjMzkMBdVkW",
  "key25": "DfeKRgeygiYtMrNErsK9ESC1UdHxUF2p7PUX8RhL4FdNZ4JjNvfrJeVmw8GDLEg9BM1a5BfbxpUj3QNcadiPa3B",
  "key26": "jbZRWF3xbisSVk6XvVthvv6f9fULMiA8QQw6U7ZXFJh3sbsD1C8DenXKZoqrkaVL3Ump8zptBKfRZtDeeWsjKGz",
  "key27": "5cNDpjL6XwUJnvDFw4Z5dP41Kpbc43TFJS2FFckwN3yf14DnLn7Hxy9AmNfVJeobTjytK2SuhefaXuNrg8vkuvxF",
  "key28": "4oY9tdYRuS4J2nTgjbou4TnpVQAMj7eyjKpFi4gT9XhVejEN3Qc6NDgCEt53P4aUtj75EMthTTqwVijwyPYXmFho",
  "key29": "5UQSLTPiHeGn5PZZXkp3Ubu81uqgDE14PnKF8dLYcKPJLuyXBLT8YqLzpNJ64HPwZhqu5KPRfPfTqZfM7b3zqqs4",
  "key30": "3Sw2tLbLSW1mTdNq9q1AqaQdjPMGFMff4btvDNgt73KVVLYquyN9LboCZFBkRgtYZS6QDwkzH1k7ZdesPG9SG95Y",
  "key31": "YPv6xeeQo44yVDBgyBBHsWHk6SdEaZtoc2jz6rG9mKZrSxk94M96N915prsoC48sbDPC7HWons8bpSwRfSdWCWp",
  "key32": "5P767F4zF8TDtet1nXvRXSJYEhLbBBdy2zEN7KENHZQtKvGCeCHX269GewVsTvsHssUFc6JmWUxpgjymXsp49KKX",
  "key33": "5r9KP81TQSwe8fMExmNB6EJLs2EZQSCCBX751esxuLQmeva13CHkLuBjoJfPoyZvL1h8Q4AGPhPe4xwvXDZHgVJr",
  "key34": "263ehRtS2cH9FW2gLPU1UFEr2DaLy34Pd6r3pk6zqkGGwFsL8LxuytoQwiPd2AdqggKANMd85Z9eFCNsuD8q5mDZ",
  "key35": "4JwYHogYqPk6mmnQaiZtGrGJ2RqzG94DboVMPf2pZvHHDyJtwY6T3srFppWEvNiyFREuM7skc5ZF6F9A1QJHVcGZ",
  "key36": "3oJ4Xc6FEXSgYDMixd1WEuHxoHyuLZsVGe6e5NSR2stt86UySmdsrtTaZ58dfUSjCSeuFVmAtrUg5F5DFUS5Yc6e",
  "key37": "2FZFUn188xqCF18siWvK5aATjod881sADLfXi8PPEKAkyeCn2MszThYjygLQfnqg5nTX4NG4Mvo8kB4dtc6shYwx",
  "key38": "UJik3NiGFfNztJxonHSQmPSMEomWdXXQMfkxHz6TG3xYuEjfiGuRafuz2wL5K1Ncb2Ey3pVU4w7D5KB4JerPNBY"
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
