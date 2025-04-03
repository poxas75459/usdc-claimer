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
    "2MoHBsFzdw8F8QEwZcwr9LCzF1noaUYa7xZcStEmXFJbuL5zy4Zasz5ZsfxX9AAHXQqt2PgM4Z1MvLoxK6BLXvBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXBda7CAVqbcdD841eCmUJQxCwdthDKR4sV2fD6LiXN63aGrCQTFn8dEpU9Dm9z4utymmmxHp8moXfued4ig97U",
  "key1": "3ZXQzUXs1LswZF9nK1pEp4pfuDpq1v2ptUibnmT3FnqhMJrzwdc6vTdyUgtFygJC35TXJkYR8hGwey9mjcprnbqm",
  "key2": "4xpw1KMoFm9WwbyoSt2jdzshYKz399MGB9S49T9AwbNWCi7acYZVjRoDuwoWKEQ5DDs9mGvNhhtrgh7DhNPwTrsS",
  "key3": "4e6K8Nk1PRUgGSHJJiUm3ksp3rMCbRzfTQ62M3e3CQGaaGcbkHPA2JKNRcqUSHW1DSo4k7ZqRh4rgESK6RjpvewU",
  "key4": "JNwSqFcWoX9eaCHSPdofoiJ2gef1AfB7kCtKoHkyxwaxGJDbZkrqiLeSkhUfCrvPLJKLPBhyWZkgRfZNJaqRkwP",
  "key5": "4DiZVFJ2kzcPP3V8ZxiYE9aXdmi1vByDfGZTGwqbDUEfHrScmaY18PKTAXxXwiAt3Pd1irPf4bsSMttr89NpnVH",
  "key6": "35xpQuM8baq5WhxVa27sjsPT9S8BdmKCcXCVhPGPjycQnLryo7CrNicpHqjkxRo8BuDLWQMU8pWirBm1QtHU5aDW",
  "key7": "nCAzRYu2Uo6RgHt6YBBTdYLFax6CfMBLdqvpJgDpvxr2a9dc3tRZG7cqFaWbJ9BsHiaArzs8mAdMSife4d73EYe",
  "key8": "2rYtexEHhytD9exbh3ftBEjgqSF5ChbFwJLhYu2NLMyjxyCzinGowE2eSyTPUvED5RpACtpBgLX8VMFX66Ue4rP1",
  "key9": "5nqQxaT7oM8hhsBXkBUDMYffWSousT85rH1Co8GJyu2eTJ9gKbSQ7qUQ3rg3YRKkLqaAdj1kH2wAvfUuuC4ceB2t",
  "key10": "3VgysmZuD4MRkgkJ5Lk58ZPMuTX1CZYFfKy1FtKYd1spUHNMfyTLMzvXKPwMhfB2ttRrwsHsWMEiqVE6xxFpVc63",
  "key11": "2944vkcUifbnwrQuW76AYLszXfbDXChU74TbCZLDTdYbunaZ3mScJnWDppWjQABeq3spzjcX7ohrYx81KKdz2Y7K",
  "key12": "5tHmu6Y1KCzN6MYyKoKyDaojDGwhEnjh3Eng6pZ7rpaxHUJEoMtu2e9Mw5DvEDdvCvLaCtNsy5Yqr78RKk7zQDNQ",
  "key13": "5hKvaLdPiE7BbswATdnzwNhoMmZ4pPvPoEGCTkMNqXPMy75ANiHGmvV9FonUWNcp7z7TisaaxeS78SxpCYSNj7qz",
  "key14": "26wqGfnYiqfp1oS1x1fRx3HGxDJu3d9fagotsqyWkHBnQC2VTZT7Sy7PBysUzoRnbsfGgRFS3j5CDVY4S4nCFKjL",
  "key15": "rMTXy1CpuCm8T4BCy6ofkJztpQezQjm4q2VB6wQ8NvkCmrFaPio3CP6HcaiQgRUzcbJDsaGrMdB68EFSCSgYDuF",
  "key16": "2WxdsbHas1LJetcUsuTUmP4QF1Bh3HaVSexKiymt566wDJoKSUJ9sKRPQRVT7NW2GGaUAUEYJ2scbzddeexdvAZz",
  "key17": "3B2E8GQEtzVb6ipBohzXQKxA7stwjpG4LxCDe3qoJzvR6QSiHycET46zZyPQduS4DAm1qNSmrVegnkuRVfpsUQMd",
  "key18": "5mq9nPpSKVJgPk7k2jPDKv99YDQvVRXS9cxvtvcJsccnouHuGeZnB7Kcr5KhAKoJ9mNfjZNtk1kTnwPrBoyotcB7",
  "key19": "3miAKjp4jwDNzf5Q4hmehfThMgLxwVo65jgHUDis4bhqizSsJmS1s9WKKvg3gZmasM5ov76S7wU9GdxX1RKSMQ1H",
  "key20": "4pHH43JgRKasc6F1PLMSErDp35yyX7BxrjifdCiZ1xfZkcvtTcezQXBGCoJYJQHvwg3UyNLr77g6U5HHhwLGGntR",
  "key21": "48ffmLDZqyF9FxVMNgUR5iUKCb6tPSmko3m4Gv4vKo53DEibFawdzmnyi3xu1RW4g4uDXRsMwcdVmhAQPApsdzCG",
  "key22": "NzZKeFgXNAYosV3WLH3xCc6HEzL8Sq5PkEmiJPfFrcgj6xmkQUnJcPDHdsU5UFtgeDX1yRVNmDzaM5r8m7N4Qp3",
  "key23": "36mU5dqowJecX2u3Vyfgxh4XoR9aCRaJxBVvdaB5MSkNyg7fKQV5QZgRKkCgnNSjFC2UiFYQd9JRioZeExmitRg7",
  "key24": "4ZsoDSTuYzHF8wbhK7EkuMFNTKvY9RunFzjfLq6AVU3ZKWhHFpSPTs3cz7P6jq6UDFWKRMXiMvfbWQEVpD2nPCAD",
  "key25": "5A6iG5CP6d6JTqvFDVt5pqfg2tbsaocSS9csECymbCMAE2X9FSE2rxRMaXrPPFjoCgYK5jcKocAaWbQ9c92h83Be",
  "key26": "2PoKzdgS71HSDERMB7tnr5m6c5jprSpyzHtRxFQ6e4wjPMrV46G4x2ioJEx9HLBLKxjyDxztzKzP2hyTnxA3hQXy",
  "key27": "4sEApKLSUgoyL6UFdoKAT1en2LYekREXMLiiQigLKtvxV9PMh4dLaTrL1gXo2Zz7GjTubBh1nzBc3z6ipkr2bYqj",
  "key28": "4odjmqLexMBPAXDNFCB9UxysoAuxk8C4Yp65ZLa76JyQpJsQ778pMBKtZ3wVtsRctoNJa7kBa13Vsrcp2iVcc3m4",
  "key29": "29t74TGo9TLtf5j6F5K2yLEmARab1N5vQ5cu7ckN5j8ysV8kDYojcaYL9qEAheh6YkcVJPp5TvJR5VBfTSfWj2ZD",
  "key30": "3nwurBEAudHKi8KYh8zEo3AVr6xVpYH1ACbgmpNUPtWWupUpzyQ7rkUfCgPRPMz7JWMCMKTEUzU97NCAFeRkZrGK",
  "key31": "3iD4NzgC97yVqEPsrvfk9RQZ4pVwa5zA19ApTTGGbD2F4zY9NBH25yg5X5PLukgPbrn93HtJ6QVe3kQErwmuh7h5",
  "key32": "4mSMFGzaV9Vm1AvWirTFmLWfhwKXJkShKLXWaV6S9MdMSKcg7gRgpCMrXkyum5hKJKbP21Mx6WGr9SRpkmbHs36P",
  "key33": "318q9ikrQJhojTGjfKdm85GM5YYZBaMxwpNvFFnojZhfYcXUrGLdkKVY2dTvpztxEoA8bgAwWkLuECPNssgFA8S7",
  "key34": "2jAn4f6uD1YmMjJY8nYMqzmLoArckdpgXd1s3d2TtLi7PQ5NaUkS1zUZdv8FVJmDK4X1UfECfZjMw63o8CRpZJf7",
  "key35": "4uhtaQetSrQ32APoitFQTAT8y6c1zcbuMwoM2eyQQfsHMdUqSJHmPjc2UroYBDFVvYb6JxG9SUK2PhnPkUhHWiT9"
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
