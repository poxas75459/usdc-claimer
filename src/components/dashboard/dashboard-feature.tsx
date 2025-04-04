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
    "5T7fTpjy4rcpFUieaL3mEbUkvFzQGviKgwh36bqDPVwW9H5UM1Ad9NUoRBN2ciYaF4ddudvHCcpn9czxAcRhaDoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3L5Cna8CmjZ52YGnpvemB1HbNRKwuRf5LyUsPrqFniebY7QDFRpySTBYfrTash1DaDCdcUe3L85muyhoBeNg2F",
  "key1": "37VhPeWqNtwB6VQeF7hqrxs91vJ6NJ94L7x5oMrHkHmwWJSMt5mwmxBvtGvfbDDPEJ5TgAbnVzNMAxF2GCwxBigG",
  "key2": "2mpW8884ZTcuExjzkcBExyF3B7CV9vpW2vY9uWCrMunAzP66m8zw5E6X69EjwZfYkC1FwUwjzPT35ieMMHFLRDPM",
  "key3": "28JQuz9DSYr66ci67RaAHeuoMwrRysNW5qwftPYAmtJbGMQM4sRiWrLoLKfAM2eqDw6BALzPqqzCPsLf7J5VPEPe",
  "key4": "27d9QhA1f5i4eHhJnhmre6voHxk5GKNzSNQpREh6qdrQSExyuSyYrHhywf5F6uYD57u97FrfW7iNafhUQkZZkjxK",
  "key5": "5aXCi5sbKb7Ln3eRgioUQ2kLvrorRXbFanYm7kfBbNAoVyNLobuWPAcFMPtDfQXDByQiVLUaQDWwvh3maenDysgM",
  "key6": "tDWYS15fZvCqf1YEutJWpnBTi569p3PG9A3o8HncKS7J82w8fU6FpQNtrRmPUerx9fRDPmY63oNEUn2ScvZE8rQ",
  "key7": "49QKPUBprU26wSpKUo2AoV1ZuAa768RZGbG6f9KoTDN4EcXmikz8BQFV3WWPG31RJo6KupP72Gnp1rjsD4L6b2JS",
  "key8": "2D2ywe2kzfRkn4PPp71SE6hhm7271StPLSXzyxuKdRpM4N4S215jSj6bW3sX9dtnbhvAhnezBYh7kaNDejahPQfU",
  "key9": "4uq5Zeh4G5pzaW2WQfaNSGiaNF31bYmhvQfhifF8hTUaGv4zPREEtRHQk4Sx4WhU9oPWCig6E5GKq2uwhyuKveUj",
  "key10": "TQHm959rpcdLhFfq7aWHYVDu8quoMjxJf5zVn1L6GKNTXXdgcNLV9MiHuPvbQ9WUk7CGKVVpHoefrTmVGNqqgNy",
  "key11": "2en8f1mUnyjS6KKHQFzAnH91d3yVu9X3dhLysRoPLjGmSGzZ4RTeiegc5rn26YELN836DEWvXkcH25sJFmf1w8Kr",
  "key12": "5Vdaab4PwqEUmejTMkoBt7mMgm6qydRFaSt1XSXzaZzRKasZG98xmhz1LvCoRdv63EoJD9Ho3x1tWX7RygrexTfm",
  "key13": "8Q2kJXJHpUqMwSeZFzJthnq1HMmZ4usNNY2jgeSSfMcHCBk9Gt8nTpwGhUGtagGT4RcXFMPLVAghhW5qqc4MtZA",
  "key14": "3do9AKqrEr6Xuo5LAZVzgH4Ra2E5soCY9kvPMsZ9Q7MGdui333TfGUnK4u8BTzmmNCFJYaQ5LmvcSNr8VGzr6m4Z",
  "key15": "2hQtjucZzB6MyWdQC9itWnatGkK43TrVpAT74vKnTRVD3UHbfyhby6rqBZPnaA6519UQgCGvJ6CfbfQgWf3ZXU2k",
  "key16": "2XCLQ1GkhVsj6vEq6Akj2jYgep8fkHUNyCZ2D4FV2rPgHTT1ra6BhND8ArLmJf47jV23MVpvkinFACM75isehwUA",
  "key17": "64nKbNg5oRxPRnSYMSgJ5pxr7HDP7j6YHru87LvjKRTzhGE9NLfTJw4Wd5GovmtF2zv9mhX1YNaMskqLRoBLKEXv",
  "key18": "3d1wRGubpwKisJi4stscfV8fKd4E5qFrARwzNL7ghYyY8Do8JFGZBfrLmYtgEGHKu5CCShvfMmnjpCvDXaMjCkLJ",
  "key19": "3JyjxTyB28rLVKamVBFPWyCP11N7ChoHh7WgVqZTzpcjSgXT3Bpg2PRg5j7Zyg9TghzbqPCPCZXJA4d1FGzkVWEq",
  "key20": "xL4nW3TgabudTNckGjuN8cevc8UNQJcwLqWHsgTKkrWQV1w8XBQwdaZtb2BjvJYHnZzCDtvADFsow1Bfnv2e7xU",
  "key21": "6Jh7Ei9txefRCqSBCKJWUvh2qtS9p1AFhWpZzo72XgzVgSFsTSqC9FuhaZRehWCxhcqfvq3YR5Sb28r7JtGTSbH",
  "key22": "h2aX8s5J9Ub4i2Tvm5ekesEqYuZ79zA4RJsZZGs5SVdBM6oGEnrW8jnWoRz2bW82Hm9AroxggXhtqUfoe6gnzWN",
  "key23": "3Xa3MgTqNzP5N8CoqtNHpdeYY7FQwcPGUQ16SHM7KV9G9A7G7unb3kFbi8N3CFsRRZmxRS4PbkxPep51j5LmSXeV",
  "key24": "3cvAnHqyowaUmy9pBXNMqyX7kHCf3uZPD4vqSPNygK65KM2unGpm758nQHHa46Vkqr8p5diBmoFPPAAZSKicyCqx",
  "key25": "4ydUzpKoga1Qjie2rgLxc3u8jDVP5DKqTbTkt6dGsFUJ3yeonDTtt62GAY1xeZTz1YprFcmova7JiZgajVGyunYT",
  "key26": "2MPrCN2EMcHhRs8stiGB1yJnBExMjdLTg1YpbKzZwsoJQcwyUitB4D3vWsyLV6YjFNW7vxPNkJfoXvi9pgQTsaQn",
  "key27": "4XweQKn1FsHa1MNAyzoKgs5z1VrBz24Gy8ADU9LqSXbNnFAWZVHeZUwnB5ZTb3QU3FYjWpMPqLu5F3VHjLj2sh7Y",
  "key28": "4Z5wpZx1AhApRLZ9vLhnuTveW5sMiiQKH6RPfQ272rn3Tct31Uh1EL3U4paaHwqctMEGscxhm3pybAxrGsorDw2C",
  "key29": "5YdaKWoir1uc5onNvCW7BwpE2QNPWFwextRNyDCS3LsvqrPn2dqW5T7vppmt3x74M4aViZRKonHT7Mmb4PfUwVpU",
  "key30": "4DzFxyz1namBW1acNawa6kJBw3oYhNVBHxLjEins6AxG2dXnNzcJP8szLz4Bfa7EU6rnbpVCC63noMhgtEgZhMAq",
  "key31": "2CuhXv53Mh2kbdnhCFn21tcEHQNGeHmguFgkU9CBaN5gckWZ25jSkgUWbRvkff5dp14o4QgVmvzVZFr7ugtuAgzX",
  "key32": "5hLayv3KM5WxmJpn3FrniYdKEcR1bSwjrL1uVqCw724THBdkMvKoYJU5EpWmCB1Pnrut5wgfnt9nEeu9DFrHJMnz",
  "key33": "qCxRX5dTLhBpZiKDGQfY7ar8LfbKy5MLTeatfCqCrdPKFFJWovvDGTJ2F9GnsFKQ9AaVi4phnKqoUeTyNpThcYF",
  "key34": "QhX7Xrfuf7yvMNT6UREtfZ515hoCbeNuuLaex4Z6sdupPrnbaWmb1KXP9nDHyrvMfWAi3qgZJFeYcZw5SHFM5r4",
  "key35": "5URnbgdgBxbZyrgkFjYAXJq8JkhqVVM7VbTNRbSUQoBm3J3uErw7uodXcQUVHkf3qFLzFdF8eW7DQ9LHE8Sfb6YE",
  "key36": "3GY2C4RZkWDnqJ6fhCjGBBUAbmbu5hB3NTzQpujV1KNqPpDxSojWjyu5oPSCFcfbjxgTRBZw4dtWazudyh1CpSVC",
  "key37": "4KEYg7qCd6QQgmrNF7SR8ppdq6AHEvyLwzBMdQpTfU8onqfccy4FFBY8srGVuFZYDuvhsYE93WBiS87StycqHifQ",
  "key38": "5BxLUW8eC5uSk2J8Hxw4gtavLAE6v3JSBvkCcnEjG5rYT1uZE9uZEPYkz9bxt9LkAzxViio1msNJmu6BXR6nZck3",
  "key39": "LzH5zqKyYhFVwxgdB13AtYyizKFacDtiMqFE446Z8QJUi1rz1N7A8JuGMxhYytaYNvtJx1AFYL5wv7NoeZ956p7",
  "key40": "4ovgctBdBPstdVvvAcuG8R4BZQndTVuuTVCfJCBbbCr2j9s9mmYo7jijwrmws35YXV3k4Mfh3tfEXMy3xYts5Juu",
  "key41": "xd6Mr2P71FnLKW3dTE3Z1LZcdxh2nyZ5riRcoMkijymmqdBBvcNjiw8tmX6YsPwEfw1CLujzrLUciuSr4XB82f3",
  "key42": "aJz3WrNJfqmdah7SmwdDynx1YWiZXPg8o8qqqN2Kn3cJrK7jwNKTXfr31nWUKGK7VWN4R67Cyp2z9tRb5tLZzZ4",
  "key43": "2ZtffxcwVznFnQcypVxRSnuVHd7VwcoQejfDFAZLPkfqLS1b6pyWtbxp4cFatmXvTnTRnv6gZCTKFneGGabMmA6H"
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
