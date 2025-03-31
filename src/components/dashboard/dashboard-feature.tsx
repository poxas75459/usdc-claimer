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
    "3BkVKSwqmSpsYwNvZ3Zh88K8inzZ7Pcxo8GeYaiT7ovWtEPtWvGZxQcVDFGhCeDtQ7uKShk6FQk5JRhd3Kb3FtXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZQEtXE6GPps6zmgoi8599S4UJamM6iZLnWEW3KxZ7WPnHGCz4HSPffsTR1HMMRPVaADB4aZAwY2U7VR2YnVQQ6",
  "key1": "xh6dzsxZu5dxmSYLkC9qqoehAcfTJAhJJCXwVmVaxr2SLXuJgU9hRppH52Kf4Pjye8QxwQTgy59E1rVJPayaDC7",
  "key2": "rs32LzGcRdLpXGgrRqo8k9SR3nRWerrhFswT1n6FF45QwQi9Rf192VaKC1ufCZNqEXg7P71aNeeeGE3YsnWZqd6",
  "key3": "Bu2Np1xLtNVdHmxmC7dHkqSih7kE4NZSQ8y8CfcLm9Z617Lj6knHRnob4uzBYzTgoUER7LbdBB5YALZcwoEQdCu",
  "key4": "5nRvi6JZoYu6W6hsZAWAgv7HwWsYtHHT6hPodtjy1ucDYN8oTprXPcCphhE774yor6uT37xQfCwMnTgF8xHhXKoq",
  "key5": "5davsGbxyxVVCx8KLBy3LfoNGYphJqzQ2RETxPq7tNe8bc1rpSQCCsghtF91jiwUTXt9JKgEz6Dh7yuDmdMEiqcx",
  "key6": "291e1UZCTz5vcRYYiyvT8BUSP5P42iKTnmfd7FBtGNFq7NSNU9M3r7eak9hnmmqeTAZAjC5sTS4eewb32NBeEGc6",
  "key7": "n9gQ82319EgdPsuByF1dPJfV8UHUTmxFkvtVaAJ4u6aKfWog9pPge4j6aFSbz1hjbU4mau6tKKCfjYZwo6SXQqF",
  "key8": "4Na3mLoVzjG4XZDsTLHT8XLuSaDsmtswGSiTgq7XK1RpswNTNum1deXgejR4EUcbWSDF6zNkf2E3UAQsLcWbxk5f",
  "key9": "2texkumZ4AqTu3oTUscZiMEUm3o2mQX1ANhiuFdX4AwouecFycE52D3UdzDvBXebRCFx5S8i4d9mn8yWQtxXDXWJ",
  "key10": "4R367Z2SyB3HJariHovcp2HEoGNXWHqBav3ryjJcycoGJTXcZaavKeBZnDbyey3sPn6hbELJJS5jEXDaQph2hUB3",
  "key11": "WHRERV7QTm2RCp4VVED5PjjHY6Fhsu8E52AzctqpeiT7fwmDN78XdZKdJJxA97xhfXW2MmPxi83ZmcBEh62hG77",
  "key12": "3wFE46Lo8Qnq84dbXs24iYvfcstBewBdQmMRvruXiqUYkg6XfTFRAnQWbpK68EmCiEHNXvEeDu2hL45V3vi6m9fd",
  "key13": "3mpHD5rHfUcRbsJRbMoe9MANybBTE7jRdkuWVcJCZPbXBqNtsT6P2us4WpYczJaRvgViSiwnS8HnyoS3ayavzADe",
  "key14": "3X2cWr8W9n7ALZzhTdSqYSU538da93NULdfVx9YfqQ6KSLSuZPViHST2EC9izeCPvfsLNnASm2dr4hyVb2SZtHvK",
  "key15": "3JPfkXKJPcord1gBsHswH2WRyFRzn6CP9JSBbuomoxUUVz4wS95YTDLnzyrjrmqGdrf75VBzJryzenCxY25WqK1y",
  "key16": "2g2Hdbuc22QmDwV9egQwcQmh4QGKTauExE2qgPWB3PLNkKsPoDbwSM6pf72ti9Aos1qo6zV3yvZo9xjrNrwCEKkR",
  "key17": "43hJ3SECwRHcW5VucCGy6Bn6oaLfv33gqQUidKeG2dQ1bUvZEtQZiJrJoB5n9frEEJNehViX2UYmM7wMVvuRhsUf",
  "key18": "LFmxnJsfQj4EBRFh8n28JMaioctgppcPfrYPrMds8q1LLzGFdWYcAgQFJ2p1zm4H4rK2XknnYLY3NrkYHGnREzG",
  "key19": "3zcLi3Yfe4bSjB3USttppMFfeam2ksMeDarcG95mLu5br1YYJ7HmegfhijvaD6Mv37gpDFB8irSRMqz5NypoM4AQ",
  "key20": "xoG9rPvE6eykSjso8e74wxEMyR4VTDHy98NB7tHyj82qifCW5i14HFeoq3zHR51bCVAwCuYqeJRK99jcTM9j4KK",
  "key21": "3tNui9DugBxwzHeW4BUVX7qaejwbFREzdGyizZGCYEfsz6MMcLtAmCNToSHSBB2UqZdzb9AZ7p7yGTqJdWckkje1",
  "key22": "3hVHHDqeJFqP2uAtTcNQec2GSiguWRsZ8FGYYfcoXzPy5JjzBxeY3Gwkb88qkjME3etw7xwatyYT35snrQrQ4Wvd",
  "key23": "4YawH9tvEnsFp4LDTZbENE3rV13YmbT2R9W6B6UqbdRLVuGnPiQJY9qPiv45o3AXk4nQBKygEJ7enzj7NjECJhZc",
  "key24": "5pnARzhe5SDM5Li6qbSxsJKdjkjSUYrFLoGdpyd9kC8hEpWpMH5JuqJWB5rwshzV64RcXmWoiHEVQLbABSbudzMp",
  "key25": "GXJoQ16kk1q5sXEA3TVx35cqHRu86X5EktuuaieUfbDWb9XdiqAoZPPfdpZqiphbX7xckvAWk3AtcWHyFph7h7R",
  "key26": "5o3NbsJdrwWpAAoJvKakuijGKk1eg4DvvSEgYoncVHEdguRXw22eBQVfgj5poeZdbD6w1Y6bjB4yiqy5re52XsTe",
  "key27": "51iDwZK3QVcCGtDW8yXkE1RfvZDAwj7Y3T5DCKfue3zRRNUYK2mRqW3bdXZsAbdf4FffP53U4HXkNzVs47LmzH42",
  "key28": "gjUiR1RDrXJmQ3secSzzXxJtaShGpfAV4GUMkZyqopT6Uct13TkWt67yy9NA3DGa9RsXxJSwKqjbZQSvpWNirmL",
  "key29": "36v5rRZSeaSt36JrKKsFYygDvBYtWsjnSyZFQTTb377Vc1zxQFutZ96DRRRT7UbC8GXVQ2rAncrg4WQMtLzqyXvo",
  "key30": "bLeaURLFKos1o5FPQjsFGDa77hkmdxeBTCS7iuUGK59vU8ayPxFzcA6frZ16Z17169T8EVvBKkrxdq3exqTJVyh",
  "key31": "4RvuHPnKzMNvRuVSxbLfERXXuhZMTjLq6wRPQG7mzpxsAcky79GHrBMuTvamSn4G5jtBGoN31wruBT1SRiDRYfo2",
  "key32": "AtCSupwgC1dd58WAaTrZjQq3ffjFXrovvcxjCw7NAmkLuFYHQNvSa47E111mxs7HnfnN4xGbMFMa8oM27p517ZN",
  "key33": "2T4ezNkQhsTMru4oFmviPQb9LxBjcE19CQNE7mzQMEsvSsPnRjmGf7WWmia39rT821ntVQva4QG8BVGGiDgXP79B",
  "key34": "3dR1KtWSvVPDAYxadjwd3hjSDxtAWiWaJwJ21kik4iaTTvcTf65MQ3URRiycxjcHNxtm1a12fwR7czNLJCn94fPp",
  "key35": "yvVtx1tGQCiLNgDRMPcT8wjbaD3B95hCZCHW9wVEGj3k8FJMRuwKgLYN7B8qx8UacWiEz2AgoTcwq9f3g8L2Mi3",
  "key36": "4r4pvhsxcCkbbYkk9Etdn4tJZ6rKLoewwCxjY8tFM1hoNpMPvELNQVkTPmXCT21cVGeQ5DKjKsmLfuap1XcQZaCL",
  "key37": "2z2CoRKhUg3QZLBTvMmHfPdHqRQhGfSrZ2TvPHn145saUppWQQS7J45daJ8ifFgfkkUAFwakibWjDeR6x8PBzpUF",
  "key38": "hXZpQYuzJXZscGVUaZV1Yi9b1yoDeA7xAiV2t7ukkL9Lz749pXo6XbVhybCWBTwPrgvfdrBuLdqhdC4w7NTHUej",
  "key39": "3jsALSHHdCb3DoJsVPfW7wUhbeCcNCgKzygc7cdL8xH4Jo68MTCdm2vvjVJXASjQ4oZF1fvSWj93ywTM3ticTJ2S",
  "key40": "31VLehdckgwDqxBWkXs5d88zU6cD1SfRPfx6oNDxj5YCnzPBAxMtpKw33VJXi2WKbDCS94WcbeVKSd9SaQHPjmFi",
  "key41": "5EvEKYb52dFueWWto1CgCnm7DGE5LtydS7CDn4hqgP4HPC5h9Y5ogdPTSyksNwHTcmSTR9aotETphnFRadMpyo4r",
  "key42": "uqZCYAmGoUrn5PJtFJ3nmGQ9uEEN4WYDdSnaVAgBDsbwFNkYqQ63BL5KFenusL4aQtbaXThGvS1du58VaGTBXoT",
  "key43": "4Yjujh7KeAKG2LTpC9cBv1jdVhZb7Wgdg4Qm4tV4p1XWbH3PxJqpzpcHjCoVSmjzJqqN2oRof4na1RZiNLWkzuJy",
  "key44": "4CJjpBLbvc9L8s1bKUZffnJoodb2PAcbPETbJdD18hMASaukcA9JMRKa9LMvnfZ3zMv9ygzneJSbV8FHJHmJZcWn",
  "key45": "2NqnEKM2USKKsYawP3S8twSDm2EUqfCCabZJ1T2LLsNtdEXYRECL3Hzp27hsVhE7rudQc3Y7f97V76MAQaFomRZE",
  "key46": "5GDbru7EywHwfASSo321dA4kxzkaBPMrwsR3x8z7wJKkev26LahYh1DHxP6AHhsbf8b3svWM3nysHuNoiDB71sHe",
  "key47": "5w4bkwpzAmgxSDHE9nxYBHdBNrtr9sz8CprqRmBDgFEhNFxDdaD6BLe89sDNF71pBauqjVYEFrdDuFiZ8DwjEMoa",
  "key48": "HZVKxMWXGsqN9hZfpTpCFmFEieufRRDG8D1kAdaKbo9rTxunGwxTRSeiHkCvq7oen2rhjZni1ysXZmytM7iBv4v"
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
