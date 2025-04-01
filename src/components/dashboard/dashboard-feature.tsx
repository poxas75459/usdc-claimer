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
    "3cyDWVmTvoPUHErc52yff5HFinLLiLkAhXjZcW4kwJDpwiUDrj6WdMV1bF2nxCQxcveiA7JWBvRZ2aFYzwgzuSjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Hg9EhWtSFAJ4wD5KHiY3VjGGUGXdZZHRagPxjPqeGVFGL1MNUvWWrUBF6a8fmvNUuqCf3EjwVdzxDho8cDUUci",
  "key1": "3DaTCmVYoxwy2H7Z3nwEjPX37zxvBESHfoaSMgjZAQQxb3CdwXy6hK4J63TJkaYrN8mCVUZQ8xMX6y8jjxDo8xEW",
  "key2": "CNEDXTZ2y3TTfqWNasBoxSyfj4HQNoaMeCx4DhmBGxDnR2gdFDdj5QLdj1jxsQ3xoGtY1U5RBUhMuRQiYXPAyfw",
  "key3": "4BnXreDRPRMKRSTcahs8J5xoMonQ5WMY5oMWKbo8xG7wc8phVRfb7juwHPwu7gB41q5aQ2Va8VP6K4WB85LxVSjz",
  "key4": "2kRM7dYUhmBKssSeLE9duUoeV6pcGXwf2NGPzLnAfE4HGJWSvYaDhTUZXfqfMf4n5z4kiFowhbwM69MUsxKFHVKU",
  "key5": "rYHgKPkvYJ2PC78keVSQP7Dn2KUhmnxqtZq3ox1LbUddQxpU1F1FvYfJgaAs8dhRcinN7sGadyia159YHYpKHvA",
  "key6": "3s88LYQUUHPiiw31WHiSF9GzJsvmDtCmLp3C9svQau5i2a3hX3XwAqmLcXNUDfDN51Uwb6zqUhignSyKNfugMLaV",
  "key7": "3hfTKwH8rA7xkf7dwnE15VNmj4rwT9kSTcXzNtd4gvS4Fpr6Lm5bNFG4YecyPT5FWhM8DpCjXY2zbQpFSJdiWbe3",
  "key8": "3nbhRVk96pGHB6QLdtNdWQpEGaYppCZe65FWj4yY4etgCuUaa5Mi8obGnjGPYSJGvepLjwvj1ouULwTuxDRVy3Ds",
  "key9": "4BkQkHiPpP2ZiaN4PY3ReZt16hc1mdNMVuC5NopF3UpWpJ3zbXqVcL5LeNHSE9JmEvhjMd1D3oEafmWrWDov2h8x",
  "key10": "rGvzjcW7zy667yyrvuarGdR5ExBxFoQdLpkoiATVxgvUKEuRa7iQekoq4u49KnJGCZQ7gZDAbvZuBaCAu5sW64R",
  "key11": "ABiVMu2wcyrSVfVFuCQ1WySudfwTo7hj7vxqZPA3SckfQeWLSFEhoRkdjU3F8hTqs8LmpKyQn63rngkvQx6VMZz",
  "key12": "43L4XrCcnuSk4jdm3phVUHHx5hJi2QH4CcTvJ12uxKE1uX3at4qrTVGXYLGpSWibfw43YHiBqJS9meWXWb4njxTr",
  "key13": "33J4mKTb4MktN8mc3yhLM9VbFdkf5pLL7SG7iZRZtsdwnBT94d1QyHDjMnvgeGWnpAndDjP5aE9pS4BqrhuMVYoe",
  "key14": "2DCKKNpNUDKJs8YwiiRTKJkzh4XiWHpZPMiKwLjT34pBpsfR27AGn8aECveyboKTfHnpg1VsuTqfHZSBhSxRBDSx",
  "key15": "5E6GqPkvpZQkmnkdHD9jvkpN3kGt93YWyenFWffL1LE1itZs2Kc8hLdcS4UTBQQofj2xBg3EnikpkakVcqhZs5Tb",
  "key16": "5Ki4DnETRHdaXdcWfRiweJveo8Lifpq8jURdbJSBn2CQ16gf9Rh9sBe1b49d3P1Lox9iGpHEehNH9JcGWnENg5Xd",
  "key17": "5k6AxoF2fU52KaUuxyvJkEiBAx3KND35dLSTaNUo7GykrEJBiY24Bhsv413ScwNknWCDHDDDzQTZVB2aPTRkNqM4",
  "key18": "2pauwHvQiYqmKBYtNZQggwGpQB91eUu2ShQ8VK4HuAQrhrzHCfFc8aG3mhbPhXJzAjtajnvni8aWUcVjWcjKGzro",
  "key19": "4hRUYaeoi2xKTeWxfYk6uzNqYevvJvARmWL2YqigS2PC2yp1SLphjy1oREUcKHfbVheawKJKUXyUi5cqs4fKuPbn",
  "key20": "37c6QMLmTK9i6ViL5k7emEtXyGJRcHWjUnQV5VCC1oDadQatvjcRD1d6GWAvLXJcVJcGyDqcbNBPgxnxXLnsTKii",
  "key21": "29rkgpXE1AmCaR5Be1cQknvvoPWs4xst39G3ZFAxZXDPjndpW2RJUc4xU8wE25XixsX1hUruB1nkKxDHWC54352i",
  "key22": "2HnvX4ThnPyKyXCEK3tD3Uj2HnVcfY3UnK41AY8SsH2t5DXxZioKqCLJTYT1JptbDsDQdLnkWxdZUTBtiji5KaXv",
  "key23": "38EAtZmUJTuXcyxZgyhoUVDMu9d65nfbHidKb6MAKTMsBbs9uaSCpK5MT8S3U5Qyk4LgjPXXTcdnKk1UqbEqV3fi",
  "key24": "5SHx8dQLhoXqAMdj5mqKm8pTQACbcVECXDoTPe5dfCun1WgGBxReXSBp1EquZCNhNA4WZoTpkNHvyFyu26tSi5yu",
  "key25": "5k3ZF62ngZrnzDteXRVhrLL6ysTUwprZk4veWEwR1BibgNwb7yb5iXemv8Q2qksy2pmD4siLZmo67C5WvJNqGpFd",
  "key26": "5b7x2fNezzGyhgp6BvGSaxd6iEgm6u9Y59WeGzAJKJfb7PqJEAPBLdKkaMuU3V39iSCErEqZM8bhcM5bY5c7QAR1",
  "key27": "5nCyC7axtPX9z6mqDbHgnxgWiPV96ogYLTRhr46Sz9a8owwqKikPb26214xG5uBDYZF1yS6gcTMaNKhndNXzdAgi",
  "key28": "4xUfjwtAWeWrKrCzF3yLLkEx3CxGq71dxpFX2grh9gyYUMrD4RWGpSPMTGLCcDYJqHDYdyeQVkhk2im13MS6r3jN",
  "key29": "4ktjTdYYQonK7tFEJzz18UaAVvssbs1dJKGuz1tjvxvjBm587yG1qkWPVFoGD7aeMAroRmnbufewLDDceHiEgGHN",
  "key30": "5dnbF1E8r1MEXQZqbnq6cZLRyVRqng9fej9tgg88SwjstYgGsHXB7cTKB4Nih6CP6cEvGA7gn1iaPSJ5nmZfqFYr",
  "key31": "2DNRvmN4iQqwwrAu6JcCD2VJDMnqUD9fxKkEdk1h9uCEdsdiBzj5EDWFrfHaCovpBhwj6o9AQeRhHn9rdaHieYmD",
  "key32": "3CToje8tnjxaeZCuxpvz7TY1kicxXdiv8FeGvHmNoQpo9cgGQ1kg8GV9XJeSnaP9h21L7FUEssYPRUaAFJ9L3RQz",
  "key33": "2jum9nDdvEYeUBFtgjXTP3hVwUptMFjeLockqVZWwKLNpd4RsxsJNGsTf7bYLfNg4YbmXZq7nphbJLTupFx1pMFi",
  "key34": "4x8dcq77UGWJiZGfWJEg4dz21WePoSwsKzspTiZ133rZKbPYXy8qa6GWLR96BzUK14E6EVRt5DXc9TGhBcCDHUXC",
  "key35": "3WFvrVfBP9UjqKjQCpB6yKVUao7bYvhB13USLKx9HLtUBi1KLHgcR7TEjtf1yMJ8ounM2bfdpAuCX4ZrWLsCAA8V",
  "key36": "33VMNpLdxt857QsjXLJ9NTNY6pASJhwTtPEPJMkKHVg4maz67herSSzPDQdVYht3atuivMFgWeE3CVDukgqq8mro",
  "key37": "461ZX5TL7yqwu4kEvBz5cxAaaQE87uoztxhkPgQu6Rhfxihhy4ebhQ4CmQXvJdQVZSobzQnYA6UhmHQ7QRAnNBEM",
  "key38": "2KPr8vbkdwLH5QaRbvr82RuDY8q8rj5HmPueT8QsVCmc8oZqSXRf2n8Lnmu9g5XFKzyz9K4hk7mLiSYUEuFA1SKT",
  "key39": "5VBT9UwMrbCMFpMR62D8K1L3kDhTppN9os3HWSv5EuJbr8XH69rieY2AyVYJvchN7AZQHA3dmf2UEEX9PLf9PMG2",
  "key40": "4Mw2yecyQ7BotYprGRaCYnN8J1EH1vVnRhpGQKA9AshuHMKzcT7WXTk9DRyB4Jmx1V3Y7DSi4JM9fqmmfPwGLkPu"
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
