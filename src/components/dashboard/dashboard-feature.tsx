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
    "63pk2MJA1HEQrYJMMUL13tbRiErA9oKREV3mY2N6Jk71dmJyCVdciXBmPjJri38Pt3scWaLzo4CsJ63jjCnNT5FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzDABJKo2TStXZGCks9gY37XVRUm5WNY6tUo9mYwrHJPMHWdpASRVyuzcBSG5UQLnmSXskn3nRtCNzL5ciR2qbe",
  "key1": "q1uxs1yvwJacUfF94gZ6f2EWwvRvCVrowwSeZZDMYJhxoEoF3snAuSkpvvtZ8nhvQV4kLBnmFsHYhppz2P1F7P9",
  "key2": "5Z8FVKxVS8v94gttjCQ4e8mwaMuoc3Jk9Ypg5vCzsAs8KTwGtaq4t9U9ZJdEhb2p2VokcRCu6HE1VPC2HNJrQYco",
  "key3": "3s7dhGSxx1oFdHFRxmtyEHUeW1sFDLHnK3xFyiX4Ray2stNbBFKhmGvNvrzqiuxYtjoYaXuHeEAuEuBhpGG6EbBK",
  "key4": "4iCJP6VaHL15FJX5nVE6SVSRMYP7cdTFPdB7PwbNFzHAji9pJF24tVgyauA6SMNVL1ycxYkLE2M6mTdFiDAPnfwN",
  "key5": "2GNYdhRKdKb7XotWx7Ym4H3BQA6X1uqFN189fC3vy58W5em8SorvQEXmUpsm9buHCCE2efrScA3a14rq8hZiCky6",
  "key6": "62ZiqrWLrZipFsWCLEY2T4t8Ab7CzjLwyjqyNQYeigJAGK1XrTAwKPYsDYTCv1FdEeonYMdhfYsN3P7EBvnNgUct",
  "key7": "5CZxHbDqXeGqhbUNdu8wj3iXPmF6CPNDkRhs8E4rsFcTVjgNAG6YiSYKCuGPmTDi6Sjgk8nYAo3yB9q7gt5ZDwtH",
  "key8": "2csxYZrSLYjBY7WJnLbmAQ78pV9SsUN6Je56suyCRSYhWC8A5vH61R8eVkm7LMHAzML4mL1b2weMXzsC3DL5ixL6",
  "key9": "2oPSVNbkTEmK9t9WdrZAdSD6usoGsQDcavZy5SsTnBzLgS8TX2GRbmdLEXnF3nyj6jZ6nhZ19GRTEAvwZLyod6Z6",
  "key10": "4b7fMZDdEWWzNNXqaToHKvr7D2GWWxLgVr9aEEUf9S7E9nkqymqCKT47q8DDndbHtPZ4ModUvjSyiXpXVNFPbNC4",
  "key11": "2oKj4X2aHqEeucN2xbz5ffZfQaSDQtQYcspxkPNqXrXbFNeyYrHvUxChiBtLK6YeMVe8HJq2VfQRg8EddEsSpgEP",
  "key12": "3msumU6YL2gC7T1RmRdrrT5tonpiMfUUaYyyhaS7nRzXmgbWhpDUzKHHcwF7rgNHi16AXrdja6SXexnit5riketv",
  "key13": "5gK7Yu9ddm7XE6y6zWSpkK878UQ4G3afh6tk3bcqKJhDvo6WKZuxeNt288e9BqqRjtNDki8up6pmug9EnPWTy5KP",
  "key14": "9LiXJuVo5ptps7NK3p3NoGGu5z124XUVR3XFRU7v3TVHcdNkrdFasD5rAHpJRDQPCaSw2HUX1HVFrYXU343LbA9",
  "key15": "2rPsqxmzmynDjtWgn86jU78aMKVfTCBmNedD9gJ3GWP1oKGUrzBGuUjZ8M1FWQ4Rv4UcjqdmmgirhEDcfwUsQDTr",
  "key16": "5AruK6PMQZAfyF9WPx7QnTH9JWAnwGWU3YwfV7t8AQ9WDNKY77Q7q1WsqrAi2tZjd6vY2vc6ZLBinX2rZZxuRToQ",
  "key17": "4TnyS4gq2XXhhg2iVV5MLHrcgBP8spCrz9KP9EJkGzwLX15eqCRrUKZS8TNUcTSFyh6fkFSEHqMaJWEEaXjBmks1",
  "key18": "zQvr5ZrPS1ZDQEQaH2PntU2AYZGvh2petaUN8ChGMziUoLfTwv6QNA8AfXxvp69wLYu9zSfbCzN2AR9YhJyeAWn",
  "key19": "54HJQKPSXXTFqrxXzLGcSbJd7YUgu7j8aVR6CWC5EeqUR5m9FtJBKtNHPYqhTSFvzud2QkjgeGBoD4au6stjZXgN",
  "key20": "3QDMctxH2tSxafNJx5kQ6AAfJnX5kAHaojFA3KaCvcBQGL2jDqo6Pna33KyCeaNE3KbVTWTPkMfXRavu7xw13Wg3",
  "key21": "2ANPK2pF2TE5hNhTXPyVHpfzYdHVDap3xVrnr9nx6QgzuoeS8eMJbftcwDVeeDZmoapRKUXU2SayaSaLtf9MsfJS",
  "key22": "5UHn2yv6THNQnNv6dnXqMRpT3EmPteaJUjHc8UC7NXVdtwv5aC9nwXAn5DJMrFwxHwdf5WZCBxee6fEkcNJkCXM5",
  "key23": "S265ATB4Sm3mraeQdqyK5GPYjVubjWdKoWutWFDQa7xZHHbZ6pDtuUq1AkmRsB4FHZToMJZQAsXLhAtpxZhLgJK",
  "key24": "DgZL7pyPpdrh6L91Ft5RBxgjWejAFHzVGqp7EsUC8JD7zUojNEbTBtFE4yykQ7q3iSUAoLpHZ12ZBJfWFDUxYuv",
  "key25": "3zki5wPgUEaufhQdfuicEMaX3penNTwh1q64T8dvaXx5WvxSnALUmVtUW4bzbc7cd4J1r4WmeKNSUL7tksKLMp98",
  "key26": "3ozsTi87CGuoZr4RCDQR2T72xfUhUd46t23zL2PHAj5JMQbpnVy6zjspSSunTTd3setdYoNBL461hLohPidhDUkX",
  "key27": "47mZhqwnAfChy3zU4R386MuPUybSrFsyjkFiDpi7MHrvB4kdbD7JnqbHNpLPXxTFU12SxT8kZN6a5PCrsGzNy9vX",
  "key28": "2KrD1AqBRrt1n5YM1C9paNsBWhP7VKhM7egeFBVPFvNUzQhmFqbCM3rWfRtZYeCoYzJh4xW9RA7pZcwrghWqDydh",
  "key29": "3y4r6JcGTbPYUNemFevsrpUvUAZNntT38b8ph5Lff46y7L3uLc9sdxXJA64RFpLfLi9ftFMHnGrhrKiTgQYVteeX",
  "key30": "54qdYgdsEM2ghdt14XQBVY2SMwxg9L6J3nho92MmZxrRXJWVZaYZdnwoWYBf7AjxwMdmKe6HaWu2LL1BkzZq62QU",
  "key31": "2e4UiXdatmuSfLRjoaqk27bcu7ioHmFcPXf7vx9vMrKZKU6jUGKSZET2kWaBXeBz4Phsdazwi6eRKFWVm5h9vZbh",
  "key32": "51d7bZCqj85HcWBYHW76V2dbGr38B1J6giypPg1a63LkxYniQeyu5pyLXqJyCkEBWdETzNmT3XaTF1TLyPb7Zc89",
  "key33": "4U3Vk6bv6NZrTMFbhmienetZ9JZAXQk78trnQhfbxfyvUxBZYrG8CDKTHQcQmgnLhpa89Q4JTkqCEBvboQXXgmyK",
  "key34": "4LyH2SbWkjsqZWcNFaSJUuTY1X3rowzGQkFDHmAg2WDvt8E4i5oRVrFmWLdZKYAvUU1Rqs4XuapQREdsagBCYtBe",
  "key35": "4FuEndL7FACwa1DU2qyJsexCxdig3HjKvHRgBvcETsuAQQm5CnPEw7mVa2mArXH9NTbaSJpmeirvGJfu8bcXqU5v",
  "key36": "55GLB5XEnvnzgMRDfSwSfQ2YPGfxqYMJjPw5pMu7PLnujtPy78pj2Yh26AmvD7vSGPjsXKQNCWiDLtXqa8YFcVHB",
  "key37": "HsEriUuo7YzSUj2zJW8a2WDeJ6RDbBH6BYyTxrCYYQ7omUxQvWdKQJpejkzSJ3HJyemMdRzQnZx7UyB8JXwCbCy",
  "key38": "58iaswuHtecasfrYvxyJzMqfiRy1EBV9hCAmV1eGZEo2UyNmmCnpXDXMXaCPdtfVcUaww4vxDkadDdgnNdtX3gSr",
  "key39": "bqcjczNtogW9ukpqSiXfGJnkWMXZz6ZsEcPuv3qjneRaFQ13FRuMa7CTr3sshLRxC8wHXioEhEkToKHWfdaymdF",
  "key40": "4WSaMTUrJjxLWME9Fr55yPKsbGLP4sGNP3Sf3yYiaBs7s6wrwEpggrRuapRh1fuGUkjbTDWQS4bHsEmVYZ1W6Sac",
  "key41": "2vm1F3QXS3qquHz5JfETZH5hLyhaSBz8R6yePRJzF1kKB7seiSpkLneFxDKWG2cstynxkBN6X5YUZPeat6hcuaxG",
  "key42": "4SbezVK2UuuZzLsqjr32svU67z3dio8vVH5sicedsy3BqhN9xuapgNHiqUMahcj1y4NdiBaB1saApHaKrvvUxUx5"
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
