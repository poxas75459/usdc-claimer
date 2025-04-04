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
    "GsA2CDfQ3HCWjdUJKrJBDhHxuvWffWFFuw9xfWD6e7wJnoA3wphuu6tVrfgkKgfUdNEYdwuTr5AvYGbZbEiUk3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AgmjbJpqMT8ZBxZSYedteyKQptC2gq1KqdwR1vWHKXEWQREUsFj5UJvTzkKLHF1Yd2ESj8M4hvvqHGDDa6kDaXn",
  "key1": "4CW9j213SvdDz8PjSQFPYhywgNvsfiSZ9ga6zHUoaYUtC8yhnUiyVTRLqsHe8ZTtuSrvjdyL4s5do1tiWdHG8EtE",
  "key2": "Fqxdxiic46GPZgrym49Sgbik5zvBAX564vBYADsDb9Bi6yQB8KCyL5yMm6yTy7QWWR4r4dGBSyUwKD1oPQnaGAf",
  "key3": "2wCWNcqY7LnKgh2HPtR6WC4H6kx8smDVmh4iyRVaadfH9JzbaHrbyTEpfbmNVhmDxhu3TkavGdVAJJ1rGnTfwupS",
  "key4": "3DCJv6HsQCnzMBR8z2auBtaEL3ejzHYZ8m2M8nLVjV8VGrwJbqDAnSGBajwwMTeBXD6NaLqkoYcfhtSTPkaUB55S",
  "key5": "vVeGVT9wwArhyQ59JhzDBZwQKsG9TMZAdyHBVs1ywfwkc84ULnfnLgHfrZnKsProtLqAiMdowoGjndNYPiahzSU",
  "key6": "4jCmL6ohpyWn8w1Jqhi2tGnEScuEun5F4PoErpMmR82DWcpJ3gBdpzPYaNbV5jhE12X6opfbhWDb54Jykpckn3mR",
  "key7": "DAhy5WVSKQn27Gw91xsAmZBUXnVZqXobbMEjaBQ4JTjGNc73Utpi1FpbhNKRhSAxTFej45ZFsPTKZBN8A33Fzt2",
  "key8": "3yCnkHw5TrqGeYwZoeyquHdWqfEK6HYSXxoDf6T61t53D9r7g2QuX8qMoGLKXb4PvAGJusXFV22Bpj8XcunqBmJ4",
  "key9": "4qbmwRJqP7kJ5K1ZfFwHEUxtfQ27Pkq8Jribbn8ZwzDomMSy3XnBFeVatoNAttitqC48w9ndMakuda5hmV4MD5Nm",
  "key10": "3MnAAp46CNset42CXsFeMmQMptrooBi42NCRyXGFwGAmRgPrupBUhTeBUHMKPh5aW3a53KXqE7mLh8qW1SxerE3h",
  "key11": "4PTkMDK8gHvbVzp6rn5XJ8mcFiVoFd2L1Y5VP8NsYs1CWKpCzXdyeG3t7aWjk8pzidwGhmqdy4bH76qyTaJfb3DM",
  "key12": "4nAtfWyrwuFoFo9Fr8xHsnWUfQrpGVxhAmzZ2Ug8rCiZVYxN6a5s5FffiEofnJyM17qQMcNmGDid4F8ejmPwGV98",
  "key13": "2Z9VGtvY4MSjDsf5NHGywqYJr9L4aLvc1aXmejjgdoZwBC3qkST4fci9g2EkERwPLbqhVMSdQr2BJKFqn15DurFn",
  "key14": "2ebJw6acRSDw7Ku6twubMi5rGUVtiWB3qmBsRuTgHQoYoPdefAoZJggswH69v11DD2QKA4EHufoHcnCnQxkTmsU",
  "key15": "3ujQut8NWuY7N8kbmri4eBzA3KUUFECCyZbJk6CCNbsArHvmDQj3MZBhNJv7w7t38E8Uno8nEDHVNU3MsgoH9bmC",
  "key16": "37EoVdnzWiR9zGj9fV6D7PrfZHx2qA9S6pYtxWyEvV9dayH1dARFWNhthJAgPK6Mwx4qiWqJZVjEAmJCYx3UnEky",
  "key17": "2ax7YJcAo3nYzCzmj6RBZ2VeX2PAxsNjBtzjau498YZ8r7xcg6Kmkx7X3TgVYQW7yVaT4cEvcWFeWpUmx2aU2H4j",
  "key18": "2dUXq1jcWFdh3mhS2ATFbDRb7ETJnJo21b9JAsH666QhpVNyPz1ZJTbrVvwz6sYX6bhXGYMP6dWcA4Ed2PjSAyou",
  "key19": "bx1kcyPffbqstqPMq8PseGJbJZ6EMY7b7RG8F95TJxbaN1jCzopYKR6TPeMRTHzSv5MMzLpd2e6kj9hFe2LQoic",
  "key20": "4TBTmRZEDqTYEPXZn7DXxW9eH5ysmKpfcHp5CLY3CwMs2xHzR1FYdZwYSwN8egK33YjL5U7W2Kbu4fCbBTd925Uv",
  "key21": "4dmHZuXYJk3TopFuLwtbLi8XJXzk7uBJ2UUv7nwWQPGfwHGMbPj7i6Gq5nvNLzNWpvjGbw7agUFC5S6vQ17pLhkt",
  "key22": "4roYSbzLZwnPFUJwAg9ev5d71rjqZ3k56dXQ8cyGGkGWoW9cvLVJ75Jczvkb69R8b4NQ3L7y2sN27Wxh7qLuf6yc",
  "key23": "71tJe3NmWVU1fS3MS4fDho6bNq9kZtu3eaa6nKiiJbJiXdT1j7qxBQriRTyZZTxSkSQmSpu96JVGfveUa3tGeJ6",
  "key24": "5mHeJ3MZuA588WYLr1PhVNyKYyNGEYrtEGDqeNaxNJ7Em39BhCn65TFMy1pXyYgLzTngu7j3fg2Rs46NnU1xWNgd",
  "key25": "4rBxQRG9N3pPuGKqXP41tuomknhVF6vQ8VvAGGpnsZ5BkaCu9zBgByjnps8cpJne4UDwZ2fB2ey5vdyFwzvgZCYb",
  "key26": "3TtzfhkT5hKTgDEB5N8rALFAvwihZH7HBJaw6yMP33YJjUDn8Q7q6EbvzUnJgUGxKRGj4zsftfwKt1iP4f1t9HjD",
  "key27": "4Wmt59isw8uh6M6cDpeLbUBwrx62qykEsy7kPPVAkXGLChy4BAAb4pAZp89odK7YFjW9M69XTR9qZBgE8Goi25A8",
  "key28": "5hMt2KZiaou7VMw6kipjzda4Myi3kDd1Awa32BbcYkW2eUgyt7UJ1vKSAm22NX22hB5KhPC3t3kShTAgx2mYTf8b",
  "key29": "TDh9JTcwjfoqKi4ztmoJH6hoMKRrhWGbp3RyXhChR8UcLTNYxtUxHWaEMbsEsTziaedCwt3P9MiuWBGSq7DWH6Z",
  "key30": "RHAE5sUNQ2CRaFWjqHBtwRTicteoPznP1rKydu7S8SxcvsYv6baKZTVjQpiX1qtruzEXToSonjgfo8XAwSo8R7y",
  "key31": "4eaPnsmCR7ajqZqcsqbPmMitMYDHkgn5zZV58Wnxv67qpvBoPDcHBAL3XYT8ssL5BQWaCf7D1haemp5WDF6S8XTF",
  "key32": "3B3ud1GW9yX2agar5gMaBw33HG75rjgv1Jy2GHtDzG31bCqSLUNU2nQo5jARaQn3hDjs7mVktnyFiwLeKeNMUN8m",
  "key33": "QYFrKd2JhHMoAB9FoeRX8E3vUMk4ao9xrqvBdVyprt46Wf2uhobv7AJ6Trywfzw4tJi8pXnjPzLoQVhUDh9VBJA",
  "key34": "d543Mo4tSkhYZiWtakrGkvA79ion7aNyhB2BwMNSvz3RWXyZ4AQWADjXyMZ4s5hqhvZsTrNDnuKVSdSN92iN24j",
  "key35": "66VVJLKb5qpoZ1Vy2RuE2MNkW79vR9N677wgHPbZqb1xMJZFnhzwKj39gZGJcD6WnJqEgrKUfdMdtJMw2ZiRG8ue",
  "key36": "2ciPtcasMCGZYx3QbYghPVi6LtF9oK4F9RbqUR5qGzZbuVeyKnmgb44kCb2TStFjaYxvVAV4Qr4fmBt2qavUxGwg",
  "key37": "29HuQ2E7hjDFEG1UoqNszWVEWAJ494EVnb7voQESP1rTVNWKsA6u9FPBzwojuzUThWKQyowNvX5srcJnBUZFcb7T",
  "key38": "3pqeD8J7E4uGaQfY6s12AsJUVcH7e1NFyiicYPgsJiA8EQ5mQdxWRSxTbfktqM79zwVjcGL7EqwGJDKGUdzhfa9B",
  "key39": "4onesN6oM7fVCF61xE1K9Hnt4UzwTRHXjv4huBy1vx1cgXxjTUmTGnKMcyoG62rrtL6iJR8wj95G6RDpvdP1Uktk",
  "key40": "5qTCD2jYXD5sF6ZL29j8tUS5JwbnAq9XHWrB9WBRFCU4qyTJ4GaNmL6aib2r7DQe19wZ26835LKwANmwE2RCEUSZ",
  "key41": "4Q7vxwwh4hz75oKrqbf1BY7uGt5fJMXZg8Tkn4a23TUCNXGUxbH4zZCGcrv6HfSt1axhVmchJw2XMFrHsCwTEwUg",
  "key42": "BBpE24aJfgPxdVRzgBNGCqd18BrK2UouJGTvunRQcRikFuPTTznf9YSEsiJDPu9tooSDYtSTPCuHsACFjp5CbdU",
  "key43": "3do28kBm929FN94TuNVS7KhQHNjKT2CeYLEu5JA85VxoLVLCssQqEhYu1ABufwppKE3NNH84PYpm6LwsoCH49x6t",
  "key44": "61FwQ3ZaBVexQc2GfZpjh5W4GbjkmiK8fhN3omM44fftgG7q73SGbgVvUqUs49r7ZWNb5iTcNo5zHwHcL4fjkuxL",
  "key45": "26HGiTAD1ndSwHfA3vH5q4s2r3Ubm5ygr96to8CSAPzYbBq7Np53g5du5BAf1Gw1xZCM1nY4gc13M9AU71pjEBif"
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
