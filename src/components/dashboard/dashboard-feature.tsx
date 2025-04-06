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
    "3bxXeuFf5DiMWLEwBF6bLJqzQ5jYKEb9aF21RAR8gkP21pK59TwLL3qqfucw4LKgg2srk2CgnbTRt394x58Y1Bmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hf8aPipNSrWn3xAGXGRdbo6o6QPYenyDrs8wJzXw2Tsfebawt7QpoiAfYDeP1YWJWbVTM3qbeGMghpdYheCeMXZ",
  "key1": "3xD4R1iMSRYyfiEU3tVdncB648kNfEGqDFacfyvUjqJookrW1rh2TNsbufv1k6oa8kWdkUnUxwGEGA1vUThv6g5T",
  "key2": "2izq7HaSQa41NS3B19iw3gF8MTCsffKtAR9rbPfJsimhJUHANZKxoKr81G3cLMFnWav7qTNLQhjC58RjuxAjVtrR",
  "key3": "22fBs15Vcy946YNEoyQ8ZM13bfCxHqnVYXeyewukq8vsBVUUSj3se3C7eZnGkEuH129yYia7J6KLo1L6XDTkXygn",
  "key4": "2FHPrtWSMhBEUG72q7fjzzEzgPu19b2v8GELzzwAQeonkUNLVeCqHUW54f6Dv3huyudoCB3ittag9QjLUGhS32QX",
  "key5": "2GTsMsje5PYGdT8wV7pRzbyxL52FT2vWaj4SmdQxrdnSzkQv7jjDE1WkX8hFAVKqHtV3UVcP5uFGXRoWUMWX3Tkz",
  "key6": "UXAxsU2CoJriBVC77EER5ahe1ny3PPXJUfAYF4yvEJ11fUgjdqL4itE86d2JaBHggrusXrc8VGGwQujsDBTkTV4",
  "key7": "iAnz6WipNJ2K4MpCiqqS6Hm329X3jPq96aorBSLQ1XGnDe6Kbtb76dksqyXu2rpYLbuyeFrDb9apXHT6rPf5V8F",
  "key8": "4PUPuc3xjHAKLN6f5oLvD7iMcHfK4CCsbRj8KRaGZ2EBQo9FeMecKnzBePysgXqzcdc1Ndi6AvGR9cHtU12HjG3P",
  "key9": "4WoVNKzF9BDaen8nrBk9BNoF2hnkdQSUnaV4gB4yp6MPLhQTtFkp6cq9MD3sdvPaW9ibSboFziQgMgBEXonxP8ax",
  "key10": "4NQvNCqyqfvuoQdqtA65B6sKoGv6YVGXzRs1WFUS8ASuxq6n3b1iJpmadvZygBBEBsZfkVoGawdGjCSBfZaa1UQW",
  "key11": "5Fd6sZfn4n1sk83GzVQneK7QNjoM3gyGxsN7wzi4ySj3BQPRA6unaKVKi3snQWCELCMnt9UWea8uNvegMB3D3RLh",
  "key12": "4TGkRwLNkhKpuh1GqGZPZPonN9Y6tAWhaV19owK9ebRY6uuDn63MMiKJSYkmroAbhNJ4F8Vw7nWNJ6qWgNhUqZj4",
  "key13": "4VX9bRShcrL5eDTuZrA49FCaC48mxvBP6fBwTqDUdV2GScUr9M3VuPzboPgeySgDnZWLpTYz3HD5976ovpx6PvkQ",
  "key14": "3ULA2eM6yDNvdg8zA6KBEtRVVERNGivY5yAPhCuRkXxKEBC8EexUpYAzADfaqdqbC9xmqCWDoZAWnxaAYgpZL9PN",
  "key15": "5p4oizD6PzcMqTiGU5Ss1YWZ4g2Q4bqtj2P3FDSaawdWd85KYHznN6nvD82hHfN1KkY98icJGhMLGqCWmXUvaVmv",
  "key16": "LYe2y62HkFphjn4QXtXbimaezY7zxSMWxzyTA7raXGmKiVsn7y9VskrRjfLzArtCb8kdfwEG5KSPacSA9rSFDXg",
  "key17": "w7bqZDAm6w3EWNdVoNHLQcgkaMWiDZpFUSB2oPPG5RihUb7j6kWG73Tesqu3Hw4NKX91JbxPuZXofD9PUG58pte",
  "key18": "Btm4v4FxNusjyDUGfYgR5kBDJC4XmUqbTqaLApqduroAacAZGb8c1gSV1WbaiEgHuiNBwf14MStBdASy7WuXyg5",
  "key19": "29T9EvZHHf3Sf5NQqHLdhUGNjQSj5SWhM5wf8hdvEmXwofee2sc8zmDUcLHrhbPXucWkFhXTnj2zKMxB4ZZweL5f",
  "key20": "54UvYauUug7nctMeweggPiuJDD31AvZ5G7FoUGZW1tYw32wH8hWWGtFexEUZWeZfg5ruvKr32nufMf41M7w3zdom",
  "key21": "RmBhjwD7HGHSy5wwrcNRkmUv3FDJzba87dzKtnD36CYLVysabtVtLSPRuzFLEiwkYZwqjGq22AKu3xdZCYjmRnv",
  "key22": "2JEqAou3bktrLE9HvUasARgVP8AsbfbeBCZqRYTimVm4YJGgSfw6pMwSwzZbyxeh6KdLpQ97MdHrkgxQ7hJBetpG",
  "key23": "2cuobsWwik8Hq45kA3eCkENwAHkUubn4MR6o6gDExAYDevn6gwH5qecC68XmXfkNmuQa5V8AjUsqbJpQc1aMuwjn",
  "key24": "JePhCRZ76dkdX9uuKxKfCLH8LmE9JjyVDdCUkxJm19Lv5ATJB6LBotEKhWmyHY6XZ9Ae2KSviSdvS2Eo4rjFBtv",
  "key25": "3DF2mDUM4qpf9UYRyBWhJqz6bqW1dx9fdgguuaYTKVphh4rkHm92gx7gMvZWqxycvVuur8ziZzy65ha1WWTa6Nxc",
  "key26": "YnXhPZFShhu2mMgG8pvvUL6KzpZAoA4CpqRqBtcpHPcGKMmE1Ehyyi1W9P2m4qJ4hT5uxr6L51rcMs8aRn7sQmp",
  "key27": "52CukLDyfoJA6eznUYzNkcCt6aJZ3181Q6dNbezFVFX23t4RqRKfUgfiTnUjZnffVgDPLwEvUEvh5gJ38x4WQC3L",
  "key28": "xbEU4yHgQCA1a8A9GKjrN7odRsFbJPzugc3MSjJD6q5tykLxHkaUnz3bkAtwYSF8NxwxTtiieGV3HAUyvW11k7X",
  "key29": "4Y1rJgfyJcQvSPbU97fZQKtieGJKk5Udd2zasGfiiQBjHAy3dbBJyi8x3AtzvZSsYpyT32AEJfhhSpKyiUsTG4UN",
  "key30": "3km52SkwquUzumonLvrqbeZbe6ykFB91srg52KFmTcGaMtV4RHSjHuSQ61m4P7mY26NEB6orhyz1yJBjwpquXCQf",
  "key31": "4RdVf3HqEe5sWd1jpk21UUnAxXmbYpY8W6kCGNWYws963FEKR8C7rkNjaPiWUmoETw2BfpLuTtsbM51Pu869F2xm",
  "key32": "5LxAMKYjboDAqzc36bzJJPW5SyXUVWVEE1mwPuv8VEYhYb8BFiGgcCoyRachLQz2gZrRPCPaTybVheiqetj5Ptr6",
  "key33": "4tFyUei192DShKwUJbUvZhwwMAmR1oG7GQFCpLQiQnwpCsMWQewGD1SmADYEvCi42FydnN6qyXLzXxsnWeZqfo1z",
  "key34": "24BKw4cpu2gEvo6BCS8454cbjoUw8RLCUtcYhocvJpLQhFD33X9pH3jRqQrNQvxyXpmibaakAWHEYNeWtRiBMkuP",
  "key35": "2LXRwf3ovMTpPR393rfAgeAah2ENuwQVdnCG9QwFFSdTJ868u7Qpt7jDeL1ueohGHhLjcSL2Up6qYXvn3bu4p82G",
  "key36": "2fQz66hEEDGDhk6sawDcyT9vKHKg6YZZuuF4EU9DxroVFnHTqxS5CQUyUwiVPYc89Z3yCNGEV2qBfpQM8nvrHRFj",
  "key37": "ksdSfUxaWr6usZivepNp31667yvWYAmXwPGHuoP6YNe69bJFMKZirbJE6WCpaGGRHG21MEhWU5VXC2W7au2hKQ4",
  "key38": "2YAEw4gw8AJncF7Y9RMX1LMd27hsU9Eg3qxVj1gqqArfBw8U1J6v8UAoZSBJXbcHPdf86QRpeFV3U5Pa4jh7rtnv",
  "key39": "2D1gMRqTTvU6wmdLqnTtL6Xtw2s8JDVHMJMbkWNgmrq2ANFC65HkPGvaXGLWa8ME1RghmRLVEbEAKH63iTe9KwbZ",
  "key40": "tad5ysLrzuuwMBaeskzbpTrct9i9AbU2wWmvv1L3AM938AfX9XYMswdgfzpeUbU6MdZDXkrY5itKppDNJnB4WHD",
  "key41": "5vTikPczR1EAyLJ9XPdAjBVPfAkLATeo8K9xmbd2R39tqHLkFBFRqHxSpDz3SaTRbHWbD3C2vgPDeTxm7cXoo9QA"
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
