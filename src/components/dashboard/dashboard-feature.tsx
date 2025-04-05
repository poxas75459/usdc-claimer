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
    "VcVDAiiNGX7Cv8GrBQvBqkKibJGUExfY33RP1RSvuwYtqtCNE16YyF1uw1Ve14meHdiHsgGWBef3T41MsHUJKhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTgXDA9wjGEzygc7r8QdWX8AKiHg8cidn48Cp4WMN9VDPeTqt52Wp4p7tmpD48XcCRPUbCqtHxXi7JmfPiAPNVD",
  "key1": "4VMXmgV7Kg1TZVm9Nzf4Qx4ZXcD31AQmDjGDv1EjKtsX7G8cEEjFa2e5UFqoRKBFKzhQoqeLDhre4UPV8Ax64PEE",
  "key2": "2vEkiENnJv2fssPTXTpJmWg3kcEcY8xyWc2cw77Sdw3QUKyGYq534M5Y3Xy7wwPq48BpNSwNG64MP6tXQquaekLL",
  "key3": "hCaMZj1yDQzjcTJ7882hafokL3pXiGzxbbtanJYnyZz9vPd2dxCamRS5suJx523bMjvjL7LrHHftgSppfaTEqpS",
  "key4": "2xPDyX6aUevVKmcCW612FadSkDgpb3BrEwZm9LgWvabxLRqZf57igZWCqR9ybWuyvaZKYpfBhq5Gjo21yoxTX8Yo",
  "key5": "2XwcTo2shnk5WL2W7BJLazWUgmfLGTAQzGVq9ZCLN6nYcHMcaNbuJ5PhtuGpEMvq35yMZcETXgkyuQ8DNvEBwFak",
  "key6": "EAJeVCoyqhTzYu7A77XYwFzhJxHxMY45Po8TFaaZScsva9pGKM4Z2WrFjrdBJ4XYrZkD7A4JnAnMAtfuCMHPUbi",
  "key7": "3sNa8RJUokb16KQoH3PtNtoyMfUBEAoTvQPCn5GT6K1dGXPTLBMtgHMjFQ7gXwPhEqBotxDDZPX4GocTGXXD8dvy",
  "key8": "2ZWpbWSkfbER8L4G4pKDS6scCDLR9wTUDVhsn8r9hGnpN2kt3tqebgBXdX2SXJW2YhAsqpGTZcPNXx6ZSz8YTq5W",
  "key9": "445WpPg8gjZDTUN17yT2sjWMhLHN2iwit6VvbipJ3frYqf9QwNXUySPBacE56svpnscpkMwtvKVsU6zCrprttcpt",
  "key10": "h4wQAqQsTMdomd8jiFbxDd31kNuDLU37hALthhigoGZKT6ZaxxfJm28VFvyJcZaphkNYP2N6zC4fmyhScjLoZot",
  "key11": "36712aQvM9rFsSNsBPUFA7oBhiJhPUCYk2QY3FbXFc1NJCZYRftHd5V8Az9sqPHpE9wxigWMeRojFRUf3T7zY5ry",
  "key12": "3PNjr7qbRuQaspD3F4HiL9YanPKTHfdDk33wHqEypd1t8CXQbXh6g29NUjstykLJC4sjbtPqc9rgVu5ncCxeKDTJ",
  "key13": "5dRFvAoBMeTCgtpu5ykMVgPaMJdXjnULvc335yy9aek55dvV5caDBwZYwaFkYTxLw1kXzbtFQQPkGkn4AJ5WuQa6",
  "key14": "JEkoXGuvu9MF4RYJNKqko7SHJPWRPi6YRL7z9gB8J1gd8cpVngd4jtA9NjZaMEHZ8MacGbobhuK1UsFETdXfgC4",
  "key15": "4W5sKvdPwudSxn2548S64QFf6D5WDXvMHHHbFWnwDpoy88fMxfi9tdK9rEPS7hEf8Ms9nLcbN13fDFixSzmhr3DM",
  "key16": "2GjAsRhbFBN7G4mgS7d37HyQYpbsvvLriuVuPz63DWQVAsEGBSK2zybtzbApfQoLKNqRdmG78DtkArkMvdr5Gn2C",
  "key17": "4Wbkq5faUHp6pA8NaVZDapAAg4zykrcc5tBVtDHznM3gPNjqDdKfX8bE7g9wP7rgxMtoGmvp6zYWLxz1qyn5gn5E",
  "key18": "3nidpePwNzSmp8WvD6eKfAHwboU8Jzn2Ncw1j53PJbh89rTcU5eaAeJemQcgx6v962h2fpU6yxkHWgrxH188bVy8",
  "key19": "aoyhT8v5m7WBSCrGiY65U1chuU18S5bmZ5qS2JqFkNP4j5rb6BNhA8uMdAeFkKD4nQZy5YtKQN1boMnUYh5DL87",
  "key20": "eU7cFFMDgYxmuKijVyM3bB8Dwf7R3MBSzXCdTgUd9xaPGNFuwNimeqnn4ufa1usKyGfnRDhRmnnWmcMq7uJE5e5",
  "key21": "3Ci6MLaFBFKWTcTXzALDpWG7GNfrPqMgFxJ4tGshKjfC6aFyvVsD1oYpf7ZCLtnATcx9hQ7PT6RX9L5itD3X2ftH",
  "key22": "32pd4Lm9BJ4d8ATHLYecw2bCygvsn7yXfGVKmBLVPHWY28m2qLRdErCG6SKj14cRbKAizYdtZFzTNYKqbbfSK21R",
  "key23": "AMXyC4e8q64m3s6UPMHiynSq65GgShKFzS5SMYjsGZmunVYhFr882JqBWFqQ2n7nZTgDyUvGfDmy4g69euTFH5E",
  "key24": "5zEEPidZx6j3hQQ6dMpR2BXUgBRtzDTRhJCZ2qPaZtUEx6Ci7XXVutbGRzMVjzWxKEjM46fhvPnz47bhXsKkR7bk",
  "key25": "58fDPe3V4Mrd2sJHu6ZeiHjBTUD2g7RLzCVtfcMEq4y69RSwz8CQSAWEpGEQDczriChRGFDcP43WR622d1ybZkUZ",
  "key26": "yVqjAA1Nzc1BXUBbhbVCBwnW2q1PywXDUjUdXEFedwrVVi18EqeSVVoc9qRSFE4fgWoLFc8uaAHnzv3SfjmSksT",
  "key27": "4Huu1Uy2pSU1VHTM1mQEZMjj1tzFY8vnbs7SvLMeE1DQzcM6YkDJeDSexQtBNoajkCCHkeCaPnVESp46XQ7ViqJV",
  "key28": "2CHgLbEse7pW5xYMuQFKsFX2JxhDnvbJda2tSFPQo8ffi2tUoedi7Ln3x2b5LsF1zdmmPbZ5Y4hGdMNDN6divjDG",
  "key29": "2pu4aobrCYsaRU8MrPDog6k5Azu3bXY9Yne5crCZNRnQUo4n1s55LjuSp5RBPgtbWzA9zRdPBHG5D7EnabkuuSVd",
  "key30": "13hxHYCo3XGEKvLEMHFizwTTPbJoeUuPfB7wzDzagCojXs9QnUyug8wKYCJhikSNimYfgGXvUrs6YTxmpnhFiDu",
  "key31": "4wFCo9CqLL2neZXGbegx8TgtVVDPA3FL1BwSYwmsYZEiWNP1jhWNkd1ayat9aT2cp82XQ5HWdNZfeNZAFNjYiNkP",
  "key32": "5PJmceFeFsvxB3YpioFoUQFEuxoRSXeav1isj3dvxt61QPSkgCpK4Hk6Lwsm6TX1fMspvshhTFrPSzUHUCX5PDRo"
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
