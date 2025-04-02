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
    "2YoEaEmtTgf55fdVbjZRs1jDg7GqhUGje8iviNuzDNVynkKe5tWH565yt5WmYDcwhj5HVXjQ4oH7nEK2JHLX3zuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5kVNXnBcVaw68BkgYQZj4VVckZocbiroTZdvgEuGQxDujcJMSHZ726HP1w5soj1HwzGRokW5tUarMG1tfUBVS5",
  "key1": "2o1wuDBzgRgpoyxezgRM5atDDjypfQCVJBavyJybynZ6BCXeeRoEEjY55kXoYA2GMu4Pk714432AJefiMJ7kxhna",
  "key2": "2Mg6koAF1cLmJGeie9t2iZJdynsbtWDtFeCXQUg6AZduFdT4JuRK84H3zmmNZLbBKkuYLSA4TwpSXY1tfKAD9XwW",
  "key3": "dYgLV7QfkqSjncwBaWZkvL7rGcdmqmA2GMmgUStkoU1NZj5cd7Tac8F4f3jyGXVQygfcnwAZq93Efa1MoFwzFxA",
  "key4": "2qYHZnKbm9MkTerQLfuLf3A6gneRvJwF2nSx8bXJZftfMEsYExov51gMji54JzCavZY5zwabR8gDpCUfFPT2Rtzb",
  "key5": "64z3jqRw6Hgq7jLyiHXJWALyGGKGD7jyfsppeEw98k5rzn6Zu1Y4W3xn6dHHWbqXcJVG3mbrwVDBRJFjj7gQDxrP",
  "key6": "45GRytiMPYv1B9NUdJqL3AErFyXj37SpCxty9tEJazKgvZULSxtF3ywoG6nieKufiPiaN5J49CD1BwmfZJzDsrqk",
  "key7": "2thP1eKx5zjFLKh8AHNmQ5WbHJ4fBVAVrPAKsUL12vgkM7b3H3ZsUQFP3MMj5o2eicCQ5nLEmFQTnF8oCHPrVXn3",
  "key8": "giekLUoqb2zD92Pqp6pSZXeKnJvsbSvBU9KyujLZ1CwXjyhveq38wsTky4UaLH2KFokE9r7jgWfk73Nbp2MJXkj",
  "key9": "2R14Ms4pUyuzfMXX4GJsHvx5ynEYDhhqPLK43rxEjf3fSNtm5SdoESxQkwqa5z7qQUsGzQ6yxn6Gb2yTuiYN3Rv3",
  "key10": "5nRpn6Bhw6UWS4RewBDmuLZJchqZxZTRhCJ8eQFyJW7kYMyE42EuZASU4XjynQWz41pMqfSdG48XMQTP8jV94s9p",
  "key11": "56cbNpyRWwxEkegP2CaGtGYpzCHRB8cb7n3TBcPG8f4HmQ9oksWVLNdDmnXYSXsk8uB8dPE6Kfu5Rc8uSYSwxMuF",
  "key12": "4pH7pXs3NWx8bbuuonoVekPBRMUBTsvXYfhuFsFhMSw7T9PWcRACiPPGY9XH4GhCPp6owbEWBM5bt5TX6dDK2VGE",
  "key13": "4bkNG4JBNATLBRWp6aAAnyYJShEB9qdykF62qfQpwoHUekuCpDQc8mTcyb2UJQtG1ZX16myXMi18G97caCcR7uHv",
  "key14": "5XFrmG4AendQqWECbqpHF9GAadKRWhGnU7x6btT7Cv2P2SvoeMQ9sGzjziH3iJdbYNWJGMbrnfqGtppZxiSsVw4J",
  "key15": "VFkx2vsM3G2J7SjUUDJhHJhwesuTLmZdx8LJneVF6M8X78VgCZT3LnqeZXkkGn3oepiHkuyGj38wVzH5tfEH7g4",
  "key16": "5tG6C1xyZ7r92VX5wu2oGa1Pm1nodNsLrnakMvSqk82HwFUhPJfJxLtgtZHecuuxvihXrbwj2mHNVaxn7mgRjbJy",
  "key17": "57WZUKYnv2k4EkSc7cyJ5B7Xzgp8RddStmRFyCgGMiLKEyxbqBmTeENsPniViWNiiXh9rNr1JauGT6SkRUEjrQiG",
  "key18": "4C9c1e73kviy4gEZA6WrGDR5xUc6htk79EcGNAskZjhHHAbGjCsovDJqCPDVguM9qPc8G4RxbifxhgjQuZZehNW",
  "key19": "Q39F6hdb8obk9CjiMEkxPT4pT7UWqjN9nU5JCe27uA3vXmS9BRzuKa7LfEywvF17AaiAhUoo4nkpvzyztc5tTfz",
  "key20": "2WgoWf5w3rfEgS74aYd1xNzmG5LD8iR5fjLpCcVEZmPjVcZDchoDGjh5p9PHNDCm8XMS2QLaDbFBTgoeYRftrEn5",
  "key21": "5YT25zucNCca5oBFZVwgD6nkhGRr3nKUhbVyhakhTY6HoYZnVwSfVwaPbvLKVXsEj1k6p5UEiss5Yc8JsGP7ntb8",
  "key22": "5jtuRo2Lr6dT6PmGRBb4g5ZARURzDduwkSBtm9VLVRJdACdYRRZus7CkuXVnm6awSXAv4w8asZUDt8EBwqS8tmMg",
  "key23": "2Fs4Eeq3UjcE3yLPiZMixfrY578T3qr5cZAg7gTMX88eDCocaHGsKc7Nhs8hLMxaVrHwLrG6MrTXYAW9P3RtLCgX",
  "key24": "2pLv29XCeeyRfMPmjWCMCfYcNUad2eCUVJ9uDL6Lpda6TA5FHnqAxhsV8eSt8MLwxtaj7puMGLQsbvQuSE9vtFM9",
  "key25": "2egQgoxXAvoYxoB93CVfZAKhS8MXm13ry1U7LByvgszmNdAGgkSS6jniD3aXciv5CszVjga2cuy95A3q7h926GAP",
  "key26": "3u4aqJq8WJ21gPx8bSeamvXU14UgMz2J64DtsH2cxYZv8QiZn9HMteYB7nrx7WbcxwjJhegmNGuB9T5BohthFM6X",
  "key27": "5vvmserx2yP29qF82tS3dTY6QARHud2L7YC8WQxUm1ECBRxAUEUX4dkqw8Cx7Jqz9J9eiMdsXSnUGeZY33jcFtML",
  "key28": "idimDCa7uWZrTPzSHnw8xdu77NzwktJKww8CCTiSpMow6vewoaVVe66zzrUqebqq1En3Sfwhk7ahSC1tWtfCVrZ",
  "key29": "35qYcy8sUMVibrtBt58jNgKCMnjwcbd35cE4W8Sj898UqFQBfZAhc97mMwhpatjwbNw8YDqyK2B7AF77pCEVQTrZ"
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
