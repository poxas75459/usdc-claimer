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
    "2hbKud2d5Ru4iG63Hbi2afp6mzJhQoMpBgcHMUML9tp9oMhoBs3chcJghqv6qfc4y4TQD9r5E4JfnP7ay1Qznbjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22zGMU3noR92BoTSdeVKdemaWSNnVsNiSE7DEf3sKTQJRQ1RT3djF9uz5VAYXoHkdwYhCbk6CBoaqpbmsbRrdRE8",
  "key1": "2i9Z3PYL7WzFh3Vm1fpcUmPEw76q1aYL5pYhNP7x5Mhf2e7mkL1Pz9Gp1ETK8Cjg1CJK81abwkDvehEa4wigJHHu",
  "key2": "549Lq2SEtVhZMfzcuKfyHW3Dc91N6cHaht1WWirLqMjgehMAFXDvipCMpQrD5EK5XC1mN6nQP8sEzCRP5BD8igYN",
  "key3": "3is1FHEcTq8S9JEhfUSNayb8cVkc95ZUGWG6MYFrRdSDLqcLvntRc2UXuPnxQR4QJzpi9KgMzoBUMQ33vWmGyfgJ",
  "key4": "ETyfVCNaTXVFJSeZNPMr4i5hkSZvPWxg8FGvC1a46fMNZDqTogMa33MUPyEYg6SB9EqszRoL754Ac4CFEc2brm8",
  "key5": "4SJwMqCAYC9Qtck8xG2jRTi7bRdvCwLTrDpFmE83snEhy2PDG8DfTVoX4f9iRUMRp8hgfayRGDwLiQGdqjDhMpFC",
  "key6": "2dD6419FVkviPUWkvAFGedWFhv7DGTByRS9ybFGoyZvPM2Na1wKSDpEVwt3cDRyRttLHgRith8vKmzmA43PgH61A",
  "key7": "wSbvtmsh1ymj5t9fCJLfVsZdfwCGVkiDEqDtH3kJoX9C2FBCUdBowMxLyfCPLb15EdogG4tatfyS3sxXYNKBKGS",
  "key8": "2r7oz8Hyw7wKYcqJhjXxB6rukJmBbmCNNCiofeKJEbL84bupniCZbhhGgEkq1W577DmXdpeSDXuwJEDFciDq4NTQ",
  "key9": "qvG7Mvd9QtW1ifamF9QJAyusPYCtHfKcbPQqHHqwZmQfgcuL12WBH1UEN2D4nHU8BcNmzxy9uUeqnXQTtfhLLRn",
  "key10": "2LmpUGP4GDzsMcxpMfn3eQu9PGeRoNdnk8iRSyJdm8HJZ4nVSJ7DrUTJQ2ZdLaa5zxha8mphmhe8TZVhAk4Pupuj",
  "key11": "25DxkbMuzJWyygZ9513gsKe5V1xK41tSLmGfZ75dXyXtfUJNv5sCcKbLh6NF7JV1zcST98zkkSB3vLGB2MtMRPKw",
  "key12": "4QA84Z9T55WWKYNJ4mWehXPzu5EMFdu46gy3MqmAkVSWozRaXnWq9A9SgQPntkzvMrCiawtDhknB3Ut5oWPdEW8J",
  "key13": "32VCvAPQLzm229ZQ2wsr84aUmB2WCRfAWsSU45oKgtQiiKezs8hppyKLYHn6EPD4Wk8oCc3nQG6rf85zhKu4RVg1",
  "key14": "2CZukeBpCv4rW48fsZC4XqZua4FEuMjMQ5sKuC4Ux2xKhAf9Ac42aVgYL1NgMq6mRekj11ow9EXm2HPwVdgRKtVA",
  "key15": "2R77wsJFLBAHfr1ssvNH1oqpcDWidD6Y6Ahm1XPNCdp9frhuAcB6zBoGn3UMnVR4cVpqZMiz2T3YPgiHYpzxWUEK",
  "key16": "46une4curzAXfCuwphjZ8WY7SqqdopLbHoezPQiNRPwKQuVPrxqTRXWVnDg84Tt7m5igcxEFP23YeXmyXBnTVqB9",
  "key17": "5UuwgadetS2hGxc7bN2jEBD1SPBQ4Fs3GaU5G3QYidhfQLqEMtoF882Kmu9MCYmUGNwo6qZ8TJHYM3rShyPnQL7B",
  "key18": "4FkzqLW49yY356abbBx6evmCJKz2vkAf7dxmWL56ifqCiMkk5G7mWV7Rq4t7FegGj9hwpMaLENBMpUw4pVztqj6d",
  "key19": "2oVoZnVs7PjdrGwt2XSsJn1cH5z49BMBCn2F1v8xw77P2KjovXenNxoghwbKm4Q1kLj7dy5vtGSE81wxkWerg25",
  "key20": "ampMKNLJhA5mzdiJpLaKfDFjPjufHNWzGiAgzq8W2LEZVBYiPJyhfAvRN6kVrmRGjyg9WCQ789nmZEk9Mjj9ner",
  "key21": "2hJy8AeS8brsMnZbeTzVbDpsLzhVGjQA2H1LCmfYWu4ukNXFf5RvM1vJ1e6SqYomYkyuXxceGJUNw4gQtYm7wr7A",
  "key22": "3Kym4ymRmGwLr913DoZsr9iiU6EM7d65zsDJMekdVuWmmWJJ1TjLcKpLUHftdezZWRRGjbaoRbwkk1TSpEw1outU",
  "key23": "2KidntFtvzQBUuAfXegiEy9GtthAzknUUKRCX3suxQPVwn9wzEbZbBiJXpkXtp6L8Q9irt6zxaGsoq7mo59DxvEe",
  "key24": "gy1YRJWmdJKTph98PA3dss4fk6rJnnvUJM5EetSTJ5XqYisvTPNfdk6axqcesLMM34h9iFckrE4B7fYQpNYqWVA",
  "key25": "3Zuu51E8RhujPJtddgTaYmXem6yC48ZAojmHKhH5cUqVrYFP4g2tNhHqBmgmcQo8reCWqWqiHjm4Xw6Z3kkifXGP",
  "key26": "3iNpUSNJupZAm9J9S8xSNaw8HELDzhxUpHPfXma9kgMUJ97cQY8JbCregpLtELqUbVNeSH4q5wdVSdPXbCsUH2bL",
  "key27": "63UwDw3yaS7edw9jpwV4pDQGBNN2XECE8N9ezPBwnBJv6eN5wD2WsznAvC1uuWXxrEwAwvYxoFuHK8uW5Xd9Pnq1"
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
