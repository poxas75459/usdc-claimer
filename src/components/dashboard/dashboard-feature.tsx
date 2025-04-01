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
    "2Dc8k1mB5g3AGkD1wqjk1g7PE89vwLro1ebQBttXFx7h9DP6DghhJ4g5uVrJz4tJfSUo1Z19cya9H8vesD7N4sQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEQkohZ3NbmmSXbCLWMQACNLWVMvSrcnU5fP1jWZdL2oqic7jkAwEvqwJBDiCSp7dGA9jT3n7cxqDF5byrY8Lor",
  "key1": "4PCPF4qSdWXzxEaJRsx2p84hpwj6AUmQ1AvnRnNAiHHSoH6xQhhQcixX74c52kRLNi38WfdetDn6mmozF27Yi5Yd",
  "key2": "u3jSYEp8ZSangx8oaxxyjrDAuVA9tDN1sbY6JgYm8yG82f1Vmg4PW16aCrwCBmGCC16FPdYB8vQwQ1dCZQXY7MV",
  "key3": "2rpyZctRR1Twxpvw3UEhKmb49LMEDjo1oerk9dxJxDoe1Cj14msiqPXgPKhZXd2uhCZHS8zmcD7QxWuhPYg2hvog",
  "key4": "5b5dvCjL4cENQiEsQUAyBgYL9midoqaSyNNPSXLACGur1CVo1cnhfVp62hJdNsqNwi7RRTydTjPTNDbPfD4Eg4mC",
  "key5": "43jXVc8FJfGkSeNKKNuphzPcWDfmvtQnzjwUcAaqJetWBypYDZeZnjgEGDUdoQfWyN2GLpGXWXaqtpZtcXwcj4Kn",
  "key6": "3BQJmEQQ6M7VUdWhZf8rE8GC3eoLqtEHAAt6WY6VwYLspWk8BjQMQbHDChHMap9uKbD3jVqBCnMpFyp7txNXLiqT",
  "key7": "4QUzASuTP5qxzySkY4SsxJpu3gbXh9wyxcTVhMmk7DvdiRytPTfQ7fT8hUt2dfD7WNtUqLVjq9cpzoLc4RJHYC38",
  "key8": "5KCQfsD4SND27U92ckuN1ZM2V63gx59vr6JGajAo7D7K9rg1VGbBFwzXMb4zxirVmig9wWEKVwpW2ohdXwXx7uhz",
  "key9": "3kLetP9NyDwTRz2gCPFdnRzWik7DDd5qnYRCXxAHHfKWoHg7kvWTYC9tQ8U3JAUhtAXAxpikTB3GXjKWRoydaXqm",
  "key10": "5Hi69x6CYmQggt4bVPYSeemotQYxrCKVsQgSkPXwvNrUMGUmmzp8fq8KmHQQrP7KVYJ81DW6GDC4Nbm7nbkY31Z1",
  "key11": "3WNaKuGfi63GyzcJdhq9axVaeBGJsc1KGkZZe7WQmGbmA2pQchKEwsCU6YsWjDAaWDW4QFK3r9r2VLCB5qaJe4TV",
  "key12": "5guBeKtDWDfc1RatvfLBNg2AiuAERhvWH6ffbXUTDCyP4qwEEsLsDdsXqaJKhUWcuZPRg881TUmyLdZHeS8Uv2pF",
  "key13": "2DXL98uQXdm2PLqWB6hPg6e5HAAzFeRbytgStXEyWH8cNcAKqsdWnY7Jdfeuf3W1cogsDgvmZa5GohZEuB7X8VmU",
  "key14": "4XtkU4jbLMRBreaxFqwoye7NDv2haHiP5L2MNjEjf4NyJbeBNiA8or9Zsg8TJmPUwnPM76TEc9se5WpGbmXXKfUB",
  "key15": "48L6sjo9orEdhdnAzgyZeYevJqgK9WmVLWhwdxpoasnta8gvPu2TgRoupedJWVLSCVvJkZt1c6RCWnFC5nRCTgep",
  "key16": "qZyK7UDFKvworiBwmHGV4xJYqB1wuPig3heR9REY62C37b1vxrmGg2TVW47k7Pt3Fpi5vjGCsqKamaFxo8io11b",
  "key17": "2me9pz2sXtbDfdrfCYn1wCMH8skyDrQV6hQFSYiLK6ZJmYys2vKxxECfdusRfD8px1BjDsWkjKoBCBm882ZG2S4j",
  "key18": "2NCGjhxwZcupuSTHsRGLhkVt3xQfh1UHbu5G4pjbDHybeBgPQovkz7by327qHUWUu7TAobxTRFqaHJcaiNE94zY9",
  "key19": "4pHXr5uhKjsuELJZVAW23jLCTkRbBs34MEJ16c9yDTdRqc8YPy2LUiKJYgPmRWQC9jQGntrx8if1gYcm4m7Bnv4g",
  "key20": "3ik8654GhPaSYvnhABJvWHbfhqDPQpijVgJgxMucde2Z5UEosMY7tp3hkaHsWNwXBspu6gJWQDVpDfUhkAB9WXM7",
  "key21": "ekYMz4Zf7RAR8DJYFrg5vV9gT8dEQcF6UBXpHqVBjyi9NvzoSyMyhkNLnyWUvQ7RB7TKVBUdF5jh56LikNwQKho",
  "key22": "2FAtUhkxvqhqjZGc3qWuHRRcaabGqfW8ZdTz8ufgnd4MB79Y7YNPnqF7vopEStWzbtdS1yhrugwp3LfMhBZjxGov",
  "key23": "3E5wFFVpDD2PPV4wyJGN4zkBGMhUaA9beiUkBFP412c9pr6yQKFMabyMGDz2FTD9Ldx6HBx8puhfy7H5bZnC1zqf",
  "key24": "4NkmGNWEXPACBX8SMqsozKtCyTdZMPWj4GV7xabuTtjDyLChqVDX3wd8FPkScn7gWEffFseVUm4AUWvbjrrs9GdR",
  "key25": "4WSgCuwQpFiErpMbGCEX21R1mTjz6w5ehJ9ZVd7WDks5JoDuWJoGEm4Y1pZ5TgZrUzCHtF5QBSn1wyWd24EM8uWm",
  "key26": "iebS5nJiwV8jzrk3iVVQds4U1f6jLctDNmbXTpMRBs1JaG2KVahMQzvDX23hS4bZnwdqdz4Fr5eZvPcja5hMhku",
  "key27": "58bbCRj3WoppbvWBwBYwi4u69WBQc349mNqivRhxWB2LTviKTUghjDrmuxYpjUhyykFyfNeawgdjZyd19nFPx1ed",
  "key28": "32zZPEEbSciVDFZo7yhzqXwTrvZazduhL1nJFrVKGcVUZ2fVBKZ8Na1xvdVp9QxmS9rQXqw5xxmHthTgtbnDvvQN",
  "key29": "5UEsVYNGjAXpEVctnTeV3nQ37qapg44NodVLnsHwDhDSZ63HY9zWFLXwwLP9HoyewpEEeFNZ65Db7qPnPV3t6nWo",
  "key30": "3LWAR3EBtwY9dEZSa4fzXyYCLii15hMocKNSzf6ZRsG741uqVii7QTgCpiM9yTFvRX73mdiX7xyFbr7kEkaTaHfk",
  "key31": "4qYHR8YMFTpEsuXuSzFaqs3qSt767dgBUEHMWz4b59c9waDUeCvuNyX4X79BcTsi3Y25Vwe6qjh5Ef6bRers7LHv",
  "key32": "WXvdDsGRo9eonbaeLGNPZK1dfd5abz1ZVUYV2YsUAMBmYWVGAZpDCSkfNrqeszi7RUa55RPwCQRYUU2nnKQDuN2",
  "key33": "527v4PD957gdphQrdGkUcheUD9u4fNPGR2MqKM1E4f2qF7iS5xreNsW7yN1SrLRFcUKk37t2wNRkbucDUjc5ei1s",
  "key34": "3zLTf5a3yGYWGuz2RHZ7BNqZhLusnTGrPXJyGwyGdo2xHMYxaQ54NLHJvSHkxu8K8dT4ysH2wVMTzw26MysMXVSu",
  "key35": "5u3n6i6agHbhWSd6LqLLcT7SFGHL39xbtiqGGx22DvfZXGCCPidoz47o46oXgkvAf2m5HqvNPbZRz5Km7bJF2b7r",
  "key36": "ivhzWWUr5Qg3mWiqG5Ufe9LsW924Wke69r8Rhvz7w7kx7ARAaLNXiAwkf7t4FT8hGWWTLzUn1HvoCUUPg6SnXVf",
  "key37": "5SThUN8mLqy6kw4uAz69jnfaSzb3VQ8MWStYLLvui5v6aQ7k4NiK1WGfoXDMRsdcaiY4NmJHjbyfMryk59LrEZ4c",
  "key38": "2ybQdZsZXGmRxVP2wVofDGk2aZSfvXhUogeYNDY8LaGS4p3oYzTp7zzdMsJTqtKBvuH6mk5aKPoGoPUPZhgXr52A",
  "key39": "2p8BDRDXF22VdCUWXWW57kRcbiDyt2vScrSoLuChhjwDTjub1qCHDeL4vJqThj9rkRTsk2qYYWajk9Lk3GyY7HDU",
  "key40": "4MkriLpJ58MTxrafHgqJERwegVYU5gWvQAnapBfKy9QWUDnrZmtPHKh84YcjpCNriUq9gTqqPWXNZfrWjUdC2mZb",
  "key41": "3UsoyQJFwFWn9sk89jro5QShWdekbTPPbgbc7ListTW1SycvhF45DJ9bnoz2cXoGcoizouAQbP8aJTstpQ7MEW3d",
  "key42": "29XZCTKbUSLMHHV5Zkt1DQJc9uxtAiMeTHCiGaTS4tkk8DeQtUxLrdTGkbsjAz315FYs7t4xaWVi9kwcNxvUeW1e"
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
