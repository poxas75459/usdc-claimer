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
    "4sgfHhYGT2NgaYCCfwJveivXYfcf36NaPNnF9LoRb1zWejMCUX2txBDsyUWLXwRGRcTFG6NF9T1waJErUQz4HE4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLDWAkrV8uLfaNPuwkxvYw1R1ckY3TAQeNuDoXfgL28zRr9jpGpSZ7xY4KVvHdputqAVFx8jKacTdUX1LnY4Mog",
  "key1": "cbAu2gPinbecHDUYg7XW97mcYJfcbmncPXPL8n3YSTTgkHfu3YMQG6H58HV2jpfsVTVSytgrJAg7HUM2U4MaN9B",
  "key2": "3ukY1h4AXLFR4SLVUoqwzPtZYdQ9Px1euvTTLBuh7STfEFWBcU9wLJkdgx9eahRDBXj83Vetx28tqbCrjhEtuEyY",
  "key3": "5S6qzvcMVW6573WhsxtK6g8XXsEJvFWAq7tPPaah8Sb85CJqBa56Ei8hJjdR2aKcw7Eb1SMyyHsni27artbtHxNv",
  "key4": "3HzGTBRH9QioX7zRHce5F4xekG2ahycorpen3rDwR2HRBUu1iFhzqSYyqXRWux8wWWxG6HCDbAWuYTfGSf5h4RSB",
  "key5": "5UC4V6hxKRRP864UoLZdMix34xkL8J2EpGAhT9kkkcfP3bVc3UefaBDZfA7eGuEi1VD6mq617e9XsWxNPmfn775q",
  "key6": "2QrLu4NmSJe73yreVJ9yjnDUxnZjXYaJuvCLuCbcdthBw8WsTKhGoqR8g95SMDaj1iRFzJWs2ZQ7PMQUxtSQGgb9",
  "key7": "3p8BbJ3cEVaaMRQFfaLLTFPyDz25BPrJA3yUncAJBSyc2ZomufyM3KiX2MB22KAcNwy8v1Shzb3bZiwpz1bHhMxP",
  "key8": "3ELRLLz52d6kgKJ41kbLMvdTcYGmR4zk1tAapQoSTgj6VCQCZgAhmzdcw8VWoNiPdttQEyfKcaG53dpZpcXqrEJu",
  "key9": "5qSteMt9dMXpCCmVRfFgnCi8omSH2wwzQzJPnVy86Lb9Lh5ane6WenNrMWxQf6s89TEHMxNTcP5xLtMnvxy6GkKA",
  "key10": "66fFzHqUc13vniwev8PSZxzWz1QE26DCyGPicBbMjMTEFonTQDHUR26272RSxSu9x32U82AxNaJ6anGthtcoaoZ2",
  "key11": "5upkbsEPVWykVALb3KMb3y97TjZnX2oNV8H8HJSFi3ZkhDwf6XE45ic7PENVpGa1LBNRUyhpKrv7EVkoeZEon7GF",
  "key12": "4NbrnFV7tw7bodhqkMdnKd9jQduRGRFG4jGAa6BgX3UBLHRwmN4Xxmy5BCdvoZ4BvcFcJC9a5reWQjMLpjSthHAm",
  "key13": "45VgoeHWHkS6CQYNa1RFshB5xfMJREQDkCknqAXEfbDwJEmxJy1Fu9MZF5JzhUDTcB37YkGR4kyn8bLFVNAbDuhC",
  "key14": "4iVJFRey8Q66P8W6b9HoRho6pFzkZHbTc4w1Kq9fdoAr6ypUX2hoYsyEVf8Utp4pxbthhzgeKWEC3ZuAqHsodsi5",
  "key15": "5CLojNJU6HvsPA5dgBhm7mjEwEDoV5LgFAAehcMJ3SGQqwBXzaQdimb3wjmAEFPphJPGX8NGcqFuEmGSmouk9uAf",
  "key16": "3adWxRrSLPpcHfuT6zQNF1PrkrxmmvMWrCYTE1mk18u68xTL5wbeo3FmtoCCRMF65RTtvmQNv8TFSN86mjdqUmXa",
  "key17": "3j7TJ2jJ3X9yUJCLJ8r8a1en7vJv3vTPMXsn7zUMMy7GKprnn7cNRb63F6f9vkEef5YbKC7aAigzgV51FQEMW4C9",
  "key18": "wVxtVwXp4txziquSuZg45zdaVDJAhxnojwXA8pHQqXk2mu19xUPtMfCyNN2X7H5JhsdY7ka8XtL1dEVbkr2vEkU",
  "key19": "2dBQg89zDWpXqVFEzG7Ef7QK6hXADwczA6Wma7GhzGxTDpmeF3b5BCv5Vetncqt6PtYyubfHacKkTpemZCRnE1iP",
  "key20": "2gRpeCwgVxX8KSKLCW1oVxULNGvP81Dccm3PvFAhVyharaepZ6n4Jwi221uDz3CP24HMCfMCRFJxQZ6wbruaYDeT",
  "key21": "5cVAQz4ZAkjAz36CXESZakomJcd6u5D7vEYVJbi4bMn3FAyK7JJ5snMy4zsHrUiSreVoKBLgXNzvszB4hoVvdQAQ",
  "key22": "24uoKvsRZijSw7MgQb3H6RAC7z2t8wykyFd1F4DiUQGyoeQtMDSy4vaqqB3yxxun6GdB8kc1B14JBYrw5hNbdpHB",
  "key23": "idNjpXtQJ6tp8dFooERYgg4VjCXYAx3wmTjbQZ4e4X4qAPxBpThE4MVHEJEUVi62jxHzzS8Yg9P7tssYdXQdoH3",
  "key24": "42e81CoHFfc5ffFBm5tWzGEVG5eunecwd7aLcni8c9iBLa4Q6uZWpHVHwfo5zD4DXPiAb8qsaoGptVWZ4BPZQf9q",
  "key25": "5Gt23qgVMbJp5WvYXSBPjdbCLk1QUcBDzFeuR6a7qE1JUDetoCeipssCeoQTw9nKrzrioynaaRvnCiEdQivzNJpM",
  "key26": "3EHJG1nT39Gws5zEaCVGX7nbPZeV3EYUg5a4rsp2k5xRrCrfRbzYQc4Xehv1MY1LxdYMY7mwWuF5iUse2CpF8gKz",
  "key27": "RjLZGTKLaMygAzGSQ7Mp8ErbVk4WrkH3dU6aB1tgXst2BPhGUJ1y8mbszQiAr8QVRBMfaqMAH34oDjX9UQ3Jaiw",
  "key28": "UP8T12fbKgFxgv4FCLLcbD4vQYJfAwDboK46QjYyWG7mdzKpRM4yFQaCJkExuzzPrXufaooVHLmdKMwJmZGUT9J",
  "key29": "442sKzroEvB2qQJvnzWys2VYcpNsi1xJCB2F6egqb3P8mGa9ENDauKTvvgXpMC5RpERrSbTkESDL9YipyFXex56L",
  "key30": "3CBGVY4RAYdQdH4AZw2PgasZFo7Ef1mcSSpykwAc5Rox8KL39oTY7i3zfy4jeEPeGmqzdPaGDh4rJCQ7RaUb1DXh",
  "key31": "4nDYTRBNUBD1bNDcPNesaPnTTo6mQdd9hBtDksx1ekg83JiwALoxT5MKwK3LFyVGtmg8xjpJng6kLRu54vvmLxUE",
  "key32": "35e33yRYq15QhEjXpAWYMuGekDJdquNL99EjTGMuJTGMwktsAR84PPHfx4e2XP1tfPso6ywkMcP3Q3pgKQNzKShN"
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
