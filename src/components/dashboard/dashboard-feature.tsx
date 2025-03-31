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
    "3tWLAjzUVMzLc2ipiiiroQr4nsc8GVz1Xu17iWUzMAN759GaxBuSgeY3KVnKCMHybhc3Wbi5SJp6ZU4FM8qHjurH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfNVbUg8zvz3U1hQAucJcw7y3PimL6FKPBcnFzVCoh7faM94uTziCrMQYyx2UGMgyGcA7gAG3cm8biCwmZZXKJo",
  "key1": "4wC22QKJhQexWiHVTnRDMyDJZetR64MdgiuMo9CuovyHEUuLgJRnXKQAuoL4Kp2SKLEpRJHgAfqWxSUSWQNCH9Fy",
  "key2": "62U2WECWpNftyxmcnH2maMtJygNXycSJjo2YAKZF4Ti97gDEfW5yzWHfvu3ZNDpYCNck4gLncb62Y2P6hHv1WEh9",
  "key3": "4ZGemRWmdgxCWhWqX4EdBC3Kw3BbA8uS8pcsBbzRuwJSVPtPqPvxQcWYTunPXyBLFttbSZEopLFXqvTeXahrGapf",
  "key4": "5AaRr44gSHSyYWn3gaS1GDsAeyuqnjZAARwNbuWKomwrDtqP5w2cRNiS1jN85wxkqS5aaKkqXVSSgPRHSiaJ63TM",
  "key5": "2PD1mFYJkPiBHvNi2xzrC4D729X54tB81joT4rYRNsjHx9d4HiEVVa1uKsDSsNc6ta9L145FXcELxV67HxrGHUyF",
  "key6": "2x9YmahjmHBEfKwxjA9RqiFdAkE7nPNE6pFKNLPY8PLGusB42EkJnf7qtVx286bMHh1ZJLRDdgmwLoh1YqDJ11F8",
  "key7": "56kfYZXUZsne8ogxLGBKBphowTiwM9RLpvoMLaaCLYgTHSqpwSuwyjrewZinJPDo5NcyXoL2bNzaLDPnrAh4CCQz",
  "key8": "6jHS3rxnWnSVqMK9ML5Kf6HxUpXeefPgYuReYGdHC1hWtTaqEo2GhhDysBayu2VUo8YZ2mMSA8d8Txtqph2FMC5",
  "key9": "4vcDVCv5rL4VpoutzWeGXKii4WFMBvYHXCNCkvFza3y4sTEcHhEH1qTYrbfWcmV2eZ1VMfb2z1X3hvTzKGEMw9Vi",
  "key10": "3LtLNuSY8L5FuApV3GTmiG7fdPXAiFTSmv1v3jHyBYoP8XbBxpYQYg86q2zqPZWp1VQz82TFcZYBKCpZJQUxRC8E",
  "key11": "4wit4dTV6mnHCVnqhtYzUDX8PZxqF22KJvtiYzkcaY1ywh17DMkJGNqftz7CChFmfJ4gojyGoUYATNtS72r1VZ26",
  "key12": "3tEoX2xJdMk3Xjhd9nTDDqL9pmCyos91yVJYxVgsZmH6qZAnyWC3wSDJM2DAibStp12LGimCz94btmvzD2jfPqxk",
  "key13": "5zcRVPypBq7wpYaTXj6ni1QBoq42ThkeTdqYnY6NcGMvU9Ajswy1uaFb7QtU2qCJptcFTuJPpCKBYyeyufshbnrm",
  "key14": "5mXJXFfU1UiHvLR3tma9ie5h4XDebDHwvgK3zAmbWYaMmXjM3yPQQ9BoBu1f4h5yaXtQHgv5P3PRLxmRQthEA6ag",
  "key15": "5GwXvorYMAnzF9rXW6ZMYTx74nCtB8cVcazBw181UPWQeqhFWu8CyiL7Nu2nWEaFYt7KQiXmCe37hBEiy98ptvCc",
  "key16": "3nPykGyU3pAiVnSBhjzyUWtppYA6KQJonmd1mRQEZtZsL2eDe5EXq6HzswrTcEG5yejyNMho8ByZgvGM1nRvr8fw",
  "key17": "4gFd1D7thjaEEiTJjXmnViVWfSgcM5vdwPP1guYBgarBXMdbapR7EUNPEVjvgr4ymF8wUgfcqvaYiSnqgoscFhC5",
  "key18": "5hdzm4mMgbrvS4HoQt76YtjcqHjAtgdLaNTzFCKcRyBhxsXeT7urYinCRXEq7TYuwU1Tc8AWZXoWyUAKqksX7rR6",
  "key19": "39dyaGsmhQ5cwKMuHwhWAcrkubRpDjHmGoWL95gLfKT4RMFHzEMdz25qbMEmiEnomyzHwWMUUXKnUqcovgtwufzM",
  "key20": "4spNZrPgCEqui4aeKa1HR653mQjbb36YtdubuuQRgZeHziwLr81gioTKvRnWX6QCpN5KZcYDbhJMqqjKKxpfgnou",
  "key21": "249LQDf7cGUgGcfrEyvCDPj6TRjtbHGy9UPzZXeh8wWuokKxsy7zURUnz7xomr3v3mFTcRiCwtoMh5TNtVbMMPVi",
  "key22": "5MbXTGkyXXgdwwwr19RdoWW3cuz4vi2kMuUz3BwRR9jRdGmpDHxDrhcYdRUEUeM8ZcBhhKutVQHM93EuZ26QMo8p",
  "key23": "4oiH6VAGFnpakiMq9zXPQCK1itgbzrWiSahfN8QTpJdibP8J2vsGL79aYGVXeamHSrbqQVZdBbqNeku1ZGY3enDQ",
  "key24": "2S5CycFPXdaDW3gGUi6yogHfsTzK5dyngyJtCqUZw2pvcASk4GrdZwHKFgvK76vHxGeeMWZkpiPSJbbWjjDQJvoh",
  "key25": "41pJg4nM3Dw3GoSRsAKApD7ieHZASuHQuLMdH9MKrWaXL4exUMa35iQd6Qp7Vww37xkEDeCs3VAfmnCi7PokAPmd",
  "key26": "3YiwVtLmu6pB4Ez4ckjJw8jBYMB3HXg1TCNQfk57YFFU11VbF6MrtbQhyurNtpgo9SB1CK9EVRU6uxn4pBwP8EgM"
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
