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
    "3cD69NPTuMngUtWtn9Jyg3BTGr8CX2snwPwqyaukJMKNmAn6J5DSULEwFwiAjDBsWFtivPNzXSHWAcJJrHUcUFYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hNGzEKXQdVrzPTAdpShJDUoQ2169m2tds3VP72ewULAnheWwq4ite9UudpHjePkvMKTYr8g9hu5gTfMwdQ2Qry",
  "key1": "54qSLHLUtHpkuwaYJ58TRSFcnKCfiK8oQpGUWwrHULcErj6cnENQh5mjYCtuCqarEeQkMAys1xTsjL5ZrBBf8d9Q",
  "key2": "5RRn4CWMempCfq3r29dvbCwtURcSC7EupWkPf3wKSdJD8EWEv6Yb6jtgTarpuJUgBUKUqG5zgAx1tyegHLdDP7Q7",
  "key3": "3zYNXtkAnHFUztzKp5kLngwq56MV7iSUN3zSaAgd87bu4vJ1iFvdvDcELo5qk3ZEPnDUK4u6sW7S6vwZpiGQSJPX",
  "key4": "2b6SvrNzPRhBbfTjkiLjEciBJ78kmQvhTC1Y3ytunmK7Heztys2NvvcuuyhFFRFC37nWMZFB83DuuLe5ohk57avJ",
  "key5": "3PazTfaJWuhf4kzfpNyxHcY7LCexwowCX1qG29omCHWbYmmTSZs2uN38NXMsapHQjA9qKsGf2fWDjLG7CiNLHUzK",
  "key6": "61ELSHXPB8rz8GLTr1mUh17ZK9YEnf1RExM92n7GRgrLmxFFAYsrcj9GzojZQoJj4XEpJA3Pc1MxVevLgSUd9i9w",
  "key7": "4KG4WR6WdqNFxLstWsBQs4qKYewJL95iwtHFijhTJKj3to95o6x9SRWPejodSoRUQcs9V7JzTcvSAp65QMiUJssZ",
  "key8": "2oGprBGR5sn9JZgFf6Ze1gfrShikF8VWXSPmfGwLDQ9pGgCp3p9rwipWXinhgdwgxxhuojcRq8rNtgNuWwSDgxiB",
  "key9": "5cvSH7UKLntxf8nJqJpjCBm5i3EDvAMyQ68Bxm8ctuoUmbpwnBAdrnQEhowN49yXNbxCEvaTR9krva9grukek67F",
  "key10": "2PhS9xuD7joKB7nKa4ZWAbVeKPqPoX1XoAvdQ1jKZxHGVq53YrztdXPH3H4Cf6AjwUiNh9VBUqsaSCGofbJPrHWe",
  "key11": "3SgynJouz1hb285K1Jtw3PR66hz3EQnZ89U2cJj5GbVJHoDCTQJ4tBqmZuLkBAFAuEp8Uik68cGwQaHWyb77Xkbz",
  "key12": "54sSauWtTP5d9HVXZnsbXzZpANi3SakZgnoLd7M1uSReK5ZfGwH1EDCXUw4G2b1rkesgVLxypo2xTvACxNXakZqf",
  "key13": "4HRBv91gNTiQ22dY4zznRK28MdbUpc51k752U91rYKBNKQYgihNrRxQd9nnwmYQasTKzjXdxfPcD2w2HuqirKofs",
  "key14": "3SR3SPbBgCZSFJchSRqLwthD9U8y3jqLu4JmXHVMvwcySx7pApmVhUwnCaHeMtqe8GE4EQ9igcvHW7a13BHeMER9",
  "key15": "65f54PrJHbsKMWBoMoy2dv4aMDHHcn3J3vb6fny5tdYZEswH41J6Mbs5zfFr4BMF8tPZNq4vrEwxxuSfVZMFfs9V",
  "key16": "3R5jzJttfN1bVvF9sVCQ9Z9ZiHYm2BzPA4jP2sKYsPAi4EexL4xqtwWD5uVBfFJFkL7fVvm89KFJifwMbRHA4zgP",
  "key17": "5RZGkrHJ9bvDVAa6uNYb1TbM8KEtPME3q3pQ7hS3rydshqmwiStU2GCcHoGkA9jfbXPfivPuQUq1wvYC9Te2Gfo2",
  "key18": "ES8fH9JvSbDwXF41q8z2hu6N24qPzPVqkNYZpwDE72ockwrfBSQtAR7JS9SfLS4yZsTRWEZdeZVLFFYXjRbAGau",
  "key19": "3mo2TjbXPyjdBg5bVze1z2sGQYBpyAWPG9vCxJHaiMQ9YP2LGWr9TzJj9VRvRpNuxq5vWMy4Yeak6UiZGxqBasiQ",
  "key20": "4SNKaT9i3Biu3WUqAW8Wf49FsEJrCMRMdTVDvHGESS8goWiSgiuL8SrkMy7JnFVRF2PqSUoXY3MhAp1XfGj4n1cZ",
  "key21": "WaUBV1mmxxksmAQi51risLjSuqiNPY3pU9uZipxSA7dCR4RuExjasEghqSMQRQ3hZ62EfMJnesG83Dzm9EH9vv1",
  "key22": "R87toD21qCm8JMgcU1YMUYsQHZDE1s6udWAbomQChwLk4veWwmzZKGTJRdd5tmUdfwhmp8faVjYL3rXvnA6kvVk",
  "key23": "bWXWNobS1jxatqfmEXGTNeEFSQvARnySLTPnEJJGHAmkbfHwvMcb3inhd7EdiatvArstV774i4Hianjkzmpqfdo",
  "key24": "5HcNzNqah3ooHmtnMsCgSLCkBeTnxNnPFHwaKvhq2s49bv3D8sagxSzatR8JRvaQwaLdDStG42RuNSaMA7rPaPLD",
  "key25": "4p8PfzTET2WHV7evS8Cdp3HHrjK43n6e6vLDfqQ1vmry1B291si49gKqW8oYf1uhNDTLxvWNTAYTqfVRZsBAaUFg"
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
