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
    "pjqtxs8fGJQ1SHuK4Zsh5FZLsHrwreugWiYS8dKzvK4cpUSmKeKnj3anzxLNPFVMEtbY1LSXHsW42HR2g3mqJTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WRn7dpZ7tiXobtJ8ivANQ6H16RnHxs9uZhngpqAXhaxnD1MyFDMZKWaEuTAiCL5xqZc7yZLgKbMSX952RnEXj3U",
  "key1": "5NHvmyoZBqdW5A3xAh9cm4gcFzQx6J1Dq2FX5frxqccmLyxk3xr1RvoW5e7VoMfFn4j3yGDZwcE61kKRxErScsHs",
  "key2": "4iGGa3HQ4nASUg1G59iwXTkcku1LafadgLpXNDvK8G5UJdBFs3c2jvn9T9WQjBRqsJAD7PZEHdDwinBSziqP4wUw",
  "key3": "5ob5cCyyrDF3auzJC9KZqB8RaBXrVLmrDsd6USMDuLyb3XkPh1RWnsLqBbzAaXWoVi9wGYZJiuyohuzcXouFc8it",
  "key4": "nRJ9Csq8T8gPWfx6miMPQmiGpUgS58RLcfr8f6627ye9kDK8hQYznq6u5jaSYnKLWvMC5gzJUq9hmuvuJ1c8kxZ",
  "key5": "2XvmEscoee24worcHJE6C78QqoLv1Ha1govvKUtny1Uxs8P4goXQV32mkxjhNcu2iBjWhETCmtgFhs2p6qyPjhyd",
  "key6": "37AEj7kR2axsjYzAE3ghiRqA9TCYtvzewBy9eCPi37MSRCfBuVPqumj7Q9GNj6PB6i5qBtrZAAMo11es4YDBxKVb",
  "key7": "2guVFyuX2iavxJD6Nf6Bs51CMe3KhfrfkiThHK8zLkTKKL7HcxwUyjW5JBv7N5znriT2F5bN6CNwURvD6ZiqgmFx",
  "key8": "4LjXR2c7UEZMn38SQJLzPbkwR1iB2pMqeomhKgeygqywJXpfzuTKZkkaLkiv3Ce6NgfFzZH3td7zZvucrqzTXyxn",
  "key9": "36tkZSKiMdDDthoPjfiLpXJbTsrAvETCCUQR4UutU8ECzURD5KuXUm5uNCk4k3WEANo1c8MqUuh6RnW4gkq84TMS",
  "key10": "2LwfakauAqKyUg3NM6H1TQiUi27TQLvUfTbTPSwHhPELwa4p55JyDFSttkuKbdpBrZCe3BL6uoWG2htpeqnqu5cr",
  "key11": "2mAbpeQja2rMj2Zrr1Vd8ZKfHXsUakAEgamFsN4mfXyY7YgqM4bGTQ5xSfia1zHtEoXwAq3VmT5tStLVrkKeAvb9",
  "key12": "5MQpyaSrNEM1gxZWi3TeQVFGmoLmgL2dYdoGS5AaC1jkVBD56Eovb3Rg12Pr92E96PCdjrZeNssf8ZKk3jEj7Dnx",
  "key13": "5PrVjJhpssdcjQx9WcyRpHdXaBWEaQ6LEotCu5bZ1VZykVRECnbQx4mV1Z68gavsAReC2SdPRuFrAP3RA6LmivfL",
  "key14": "5x6mVXqXpe8WaZodxmHC58123a6bTcLjhj8xVeXP96wFFStLmYpL7bZFumzDnDjtnUfKk6TgmEYJJSdLToEk44Ua",
  "key15": "2mHZdv7n7mZNFfJWfuskAeoUSWCew2Ps4Wq8CbrzeYBXydzxKdnprQd15nDxERFQ1fdA4yiEG4UcnpCde7sQJSRU",
  "key16": "55DARiFwNiRiHAiF7ZJX2Rz1qn5afxCkFwd5zGkeC5dhgbWymiDCHkPuaf4U6KFbdsRKEm278PnQeXdVEUwvWQDp",
  "key17": "4U7SioVee8tDEfuzRT7wTiP4FzGyWyNRqTXxtDUrKrffaEYffPrvLRTS3cYx3anZkRYfhNx12ZKnuZEGhBFFWfDL",
  "key18": "5xbvMswPfdSHQ4DH3SNbXaAi7mA7iB7d49xTSZ6zp4yjyovEDLGU1bkQJcQyEuR9mUxBSZrFM8pSAeQFDxgpFK2u",
  "key19": "3RZjSdo9EH32BRSSUWdHwbs3spoYA6faixBpznPjy8qpVNw9AgPGuBNq1h3gHuaoUvzGjX5C6hdYjfbzC4GY4wjw",
  "key20": "4QrRTGZGYnb2p7awVsXVSYd9d37FckBeX6M3Q9584Z6ETx1AUcv1xg3NJ5ok6JEj7XA6xUVcrMyhV8jWex6Lw4U7",
  "key21": "46BV3MLgwWLfMVpTtwj45D4Vrxo3PqCR7m3tucPgvoaCtHrPHhFFHnkEgxxupUE5JzpgSjd3uojJVTTxMTkeJipy",
  "key22": "3qD3CSsus7PW17BGvLiY8LoW13tkQdxh98zG9MFTd1614cFrm3U7VtCr2UGfgtu4SBPypTAxMPyoACruyX6ZgQnT",
  "key23": "mnMjSaNY1Y61dqqtzgJY8bdikBxHQcVgm26wqyaF8X9ZQntLBANoFNFbShShrV6wNx2baPaKvTy9T9ALMkJdpe9",
  "key24": "4YgBF8XnbvEot5a3QNpnXCshUAGK5LJZsfXb49xsve3cDVBLHiyBbZtoemB5LpQaE4NT6xFjLyrbK11vmosqb5Xo",
  "key25": "2vA8Mrq68YjSeJubPLEbSgNWfAU1D6WfBtG5ZnRMwjDQ8PikbGNbkUQcux2YNAXkAHcanFLLJ8Mv7SNDMGoP5ied",
  "key26": "39y6dHYA54RW1xJy9ARA3dN3BGFS6j9DPbVST8BDDQCEwZHw6RMXKA98BgYAASYy7PvnwxhpL69MN9SstwQ5FXwj",
  "key27": "5WCbiL8XZ11ihZWW66xsdDzqgpeSEZKx8vftfC46oWnX1ZDHc2veAVtRchBdWFWGkfDmhJoRU2PEHfiW74Vd3ptf",
  "key28": "4FHXRpBTRw1vKYDoBygsLrJodaT8yUrcHrBCYGimft6yWmXpeAFNf1q6nByRMxiXVs7rJC3rercjeNyVDVz6QJsy",
  "key29": "mGUpRn682Z8NLGSzezw3vnmVKjf12dzYVXaoWoz5Y49EPvseZDCrNnKjXcmAaimmK1LFXVrEDhzHdGXVGuzJpxn",
  "key30": "5VPR1NwcmPcWXJWcJCGNqfE4AoH1zyQASmFMM5pCA6rUjeMXNYy2cEbwq8YT2Gh4P3RXdB4J7AQkvDGZFt3Tz9sY",
  "key31": "5ANJ2GmgzJSXQwx3wh3EicuuNiCeEgkSyZjEGGrZri19B2SDwiUuAsyGkKvgi4UH7VTEF6XidyUwZEhsbCATRvjt",
  "key32": "4mRVnGpZPegi9PrEtJDWrj16nzqSt33uwepQf9NjFqeAuB9QjJannAUfm9T6VdriXTnBrHruo8ndN8JYzMPk8MAi",
  "key33": "5iCDCuwnGAGURKsZ8oxbnLR1oKN6fT5iBx3RzucDJpRSPX9Wox65FwVJg9YpuBXHeLQokgh2SyePVZAxKX75Yjja",
  "key34": "4NyBpCK81fYPNRVNReEVa1rAF3ZCStSH6mqErPV9jLbjgKoTDu36zznYXcWj2L5R9d84BxD2fShqJZhBUiQVQoRm",
  "key35": "5YoLJLsngWpSQib2rsXLE8YLxaDiRJHJgYPXLLX7zdaUWEK6AAdTghDH7SeCNVJUSvjpRA3ndMJPvCd2UQE1mjpj",
  "key36": "2TDf8bjReC7uSULmsvFhXNPH61ozH6c19vXMcNYGbD3SGuynKmdBLcm3UjX6dT1tqYARvMYPKqrWWVTR8w7cDGNb"
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
