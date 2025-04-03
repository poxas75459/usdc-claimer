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
    "NjmwdDXvZP1HeUbLftRr4F8N3hTF3pMttDqyr4Rio9cbaCtBfJjELm98WaQAyqv8NxcXoX6QdmwdsAU2WVARLZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PXonoKS9D3Q76WvAVnEH7MVJpMaxLe1UuujBtgzJ8HU1D56i33MNW3ktE8u4WmZw1kfSMXLUYnVby23tu3zzHk",
  "key1": "VfR7QeXrsDspuvPJs8vHHPFZVy4LRisT5UDUTsbaVwqd6LtBgQqPmJJ4YrtDfemaq9gqPHf58pwwzigv4xGQ8EG",
  "key2": "2iKsY8DseQXaFx8dQZKLMbaXj3sRZJLne1dKprNVcb3qcAtZmazGnPwcdqjTHMemH6efknAgCW4gLLGHrqNUw5Qw",
  "key3": "4QcuoS2d5u9XR6gEFMsKq3tFR6YzbZxEQNhCSaQ7uSqfGQSeErif9Nf7BwZJ5yqzZaPUg2swp6J5PHh17FV7qFDp",
  "key4": "45os9Nfs8JVMsyPy2SK6zcnKjyj6e6FsqfYZFd4e9KKKS1L8kMA6tAwxW4uyyGm3gBJzn28JXpV5MarURCAy9XcL",
  "key5": "582q4hRC7qYjMQKWEamKuqvvSYrZ6KqtAP2WU3vTsszQbSFe9pGyyWogcF3PyH8LU3bHYi3LHanyzaSAtmdTgZFK",
  "key6": "5grsxUhxLNLZBstwJvdvwNjWZw8HTqDD8J6cReqtDDPcAuPW696PK8CWNitPXWwnP7yLDmWNgGZqnjWCBCJqDdw",
  "key7": "oziJStDePi4FsDWH99zy4Q2JeRmyYXWyaFupM685s7tAtWEnGKwUz6uHQxyeDy7b3wRZ69M2Z6KHBpr5mksD29F",
  "key8": "Q73xSsPaw3HRbViKsdniGskgmT7byRhsHuiwVU59w4xjYDtFMfZnfvRbt228ioLJdu54LttLDzz5ZUmMXa7KWEB",
  "key9": "2HKoQ6GiRcEojidJ42F188XPzXPixpXCybXbXfXgqsGZMbDTffLN5rDi1AbRhjPatUeTMTXKUp569PPcJKepLbvr",
  "key10": "5Pj2GG3mHRFC9J51AJZQkRNobBEw1KeMT8gixep5nBqmr2WMsTG4Vvvng7trrUAQaUkz7RNXgFFG2NguAPFzsEpY",
  "key11": "4aSp7XR8gdJoMBDLygFxwc91LpN2bDqv9X13VNabNYvWWsWhJ2u13kmzpRW9YdEysXbx2FimkzBqHmCJdhfEJrbT",
  "key12": "2w5KVPQvJqthKb8NXidcDkkDKuCEwPGobRVxSujsoQY469KY83UyqNqbYL2s4aoC8G8fwU3SfkHyHG3hvnV19kwW",
  "key13": "5XzqZ6T9ajmhccr942QLgCTJWqnjLC9dfNFSEzHEkMn8RKx8R1gRmF7cvks98FvAtRRkZ47ucD8dZ9yzim5USaZr",
  "key14": "4GHXTwXkrQuEShGRfABbKyniBwnSwppNH158UDjgg2fRsPoEJgnZoakSiHg4zSZQAVLx61Am4zGMkaJP8To81aZm",
  "key15": "5ZYdJcgCZegAmFFQPfhuLCgBysxAx3RFogFpRtSRWZ1nzCFxK6r9juiUiqXZCPNCXtJ4xwjbPxeCP4wVvj6Qh5iV",
  "key16": "3CeQi8jbqQzseqSqHgLtrbaycMYJEWrH6Ye6hkBW8ktwPXR2dpr1ZTuLyhCoN9e7x9Ha18jdYkSZhDpyvEwbhpFQ",
  "key17": "4Rp9eM9Ha9EpURrfSnjEyuVjFwHNwMEsupL28bRBfc8JHpJit6QdxmEKmZKexWG26ojaxGxSPRvoZM9KdQFXwCD3",
  "key18": "usgwGXD5FjhVbJAmxKpHHaCbMr2uwMXpVjEcKkLSPU5CQPuzYDrUeQxjLLTKNHh3UH31wPA6xhkFCWJVjdHtjzy",
  "key19": "THHXX1qFcTYvZ9er59JmXeCfCCa4jW9iokK2dds8jRtVuqUuc4x7mK9sNnoJmdTRgy49iNo9tKFDUh1qVoKR4eo",
  "key20": "4HnnFmApbSxAiytbm2Bg6Pb1s9u36Kvh6dJjSJcaRLR2tuTsCC6fG1qmMwWWdB2MLxcK1qJru8TxufWB1XzV61tE",
  "key21": "2Nqa8khrsprjoar5bsYtKyt8UUtfi2uY2FDerb4TYjv5io52Gu1yLmMJC8G5KQyTB9mEcpU4H6GYapdsnNhyLudS",
  "key22": "JDP7pdQkZAbQ2jG1vHAUcxAkARWZZm4dy34wrW64nasJw2Nyz8hWwyHbCbWttpUDxCDZqoM2oYcy5Sa24qvMo4X",
  "key23": "4G144ZUHmbuFgm6WPBRVJ96G6SVojH6AZdYj7rujY8JJbsJpAwSbLWu8dtx37LN2NQHABLC2UfoinfHzk4jqXD8Q",
  "key24": "5UezrTyA29SEKCTyETsHbb16Ev3m5zabv6gp2Z5NwDcptR2cZNYAGb1ZxfYjQPFNGSrg35qzQSkgbo8reeVUMGmP",
  "key25": "cW6dfcEBJi7tPLSV4BTfWpfG3eBDa8B67PHADbAMFcz5hMWfGTUE6wfFwehQosvjZJzEKfsCDcLZHfrfZwMbdmX",
  "key26": "2fZqY8xq5ruZMuXk5rSzA4TikBViryXVhA8a1ep9VW4fPw7XhXgYvpTSa8bNmgKpwBrBvXeSnnajYU9MomEDVUUT",
  "key27": "2mSd7WqD4oK44Wqx6YSPvWL5Gre7DHHxMp88FWPkkLr5DACgCYakmKFDY2GuuevPohvwtyRVVU2jiHQMy73MboNZ",
  "key28": "4GCfYk8RT4qFfFMzJ7V5pV2FypGLjFzRpqeTcrvZMPuX4gXTntYQdj8kKvFawUeEkVGY7btNNB5jYNGwCPiwjdNj",
  "key29": "5bRkoeccNTZupqa3TiRPD3J6sbzaaRtcZa6Jkr7aR8w3r2egf7Q8bzcXjYSiuW4wfjm8DnDfRpUcy8K4jrJuZ9sy",
  "key30": "2r8HxrbJdbHERzbsvzYHxih8Vc1rXbvsS6JHyADwmpVco8F12iAYZwCdatDMDibtFU4JmThhWkSvkysnLjVXwgjv",
  "key31": "1mLvdgssiaYuqe6J6TwHcBB6iG463RutXj2xeNkY1eoUpqyYcpAWbwVt4RQHrDcXKpxaQrCmoPdQXmzFXH8kdiq",
  "key32": "TutboLqwP7dhRm3n5kufrD7nxtFWQwcxwftVzPZEQ2fuhnoTsYigzkMYK6QPUs7AKip8UE5BJ8vSCxtEzRoYhkW",
  "key33": "5eZ4A3FGnpXyo2TTgqiFwVUXUWYzXBtvpcznesmPKpEvpGGeQFJJ4Btb6wv3QAWiN6v647Tvuoks2Em8QD2eSuWe",
  "key34": "3J6KMim1KwKpKAkv28qp5ZhCcb42ot9Gdj2ED9qKsT8mSEUt5chhG7zEsZFXjae2q13UdsM1MLB4Ur8SAW7ot2Ch",
  "key35": "66DEX2kTCpTGgkGnMafvpcdSr6FD7TP1V3wsVnzeHKtF9ss3ePjf4ZnAN5WiY9y9FrAa94EGgSnZcgs1nnAjGNaf",
  "key36": "Gc1vYRfzyWAbYrMWPZ5EGP6etDY5nVu87X7jMTMoHP2BjMiWYgt9ucyoZ73gTeCuD9kg9LUKibMicZqN6bwx41E",
  "key37": "2j7cGM5RnPXWrLS9oFdUYVd3ZfjX7ytLcsEBm19gsTimNbTqfZELP3Ukg5DoxgCyXg6finfLURRPZXChHYkLXCXk",
  "key38": "4W6baWWj57Kb8QXhEjLUiHSbekpiRP2q6f8pvb2DwN5DjYKB8XvTmQ69GGQt5uRKdorwf2zXEEAg5wNBAEB8eso3",
  "key39": "4m5RTxMV4i7wnYbNBeMDdyhusMHjxCDoc1wJpQaAYLdCkT3tkqTUiKrM8nDGkqSFMnJLv6im9DsJddXhuXuUtPvp"
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
