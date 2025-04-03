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
    "3Kt5QzTCr3iQgbAEXqekQ5G4uJdyNuoe6vZ8jGAjmpuJCe1rutReuMVzpE3fPgJMCtBFri3hvrecfP26VEzamQZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpn7qrLpmZdkJatwjtGRU3hTCpTAHTXe93YjC57NSZ4xszwf4trRCHk1ZyQGDdvcdT2bPuvp7G15PRJA43EsMv1",
  "key1": "2VghCGf6wiXqiMQQWBbTjgSCwaX39ngBXHopA7dEH6b3RXHePTj9J2MaB6GeqTg8pCyr1vkHt8BymeNbYA59cBPw",
  "key2": "4En21P2ry3KHx2yrmvZDS2oYQcxyDroPk2aCvFhy82a5DEjPCFj6StpJDFn2JV5j1UsCrp9W2vjmciBiqbTjAQCc",
  "key3": "3H4PA5VBeCTJfQunbDzdkzJLygozXWbgDRc8UFXNmYAQFDiv3wHtUy3AkKkd5y4AqrdYG8c6WuvSJqFA9rrQGnUJ",
  "key4": "3xFKJZBhP9F5UhV138bRipoimRYFnW6gmfeQyUUzwX93homep544Vwb4SkTySjLqPeCgwKDPCFUNhPWG3mFJWnyf",
  "key5": "3ge4zcq23mGHhpprqUWCpssxaYW6daqFxDFyQtcwjoXhugCcuPnxZo799QKKLJcQQem35xk3ho3QtSJAvxeAxENB",
  "key6": "3e1krY2Xd173tvg2mjm24ZQAno1sfjGY92aqkM7fx6XMwz5KCmKCpZswQg1aXvkoniS3U7HQRhhvyDJGNGdmyQZC",
  "key7": "5J1NWU7mXKwTsxb4bAKxdLVBE7mGBa1Hrt6pHiTyq53Gf2wb6tSvYsHk1e29wG9v7Vm2PnTqogqCJ19NE8u77Wa2",
  "key8": "fRTEv5wLcofwnYhdTmTi36epo6XF5fu4UfYJUwewPWrU2xCYHy8ioQiwmahy5xDQjwYQbqNnpPAWWr5Ee2My9JZ",
  "key9": "5HSzh7FaJ6DBCw9Y5gth2Jrm3DsEUvCMMVx7NbWcoiwgvkjoJxMZGWWiTEhLd8aBEuhd9dhDLZ7HkFLupnWLDomy",
  "key10": "4LxGJsBBNqjyu9WLE7AqjmKXLY9CUpjApuBTDxC2QPwBdySdvyRQ8VWRewUqaJbLfSktyuw4dvKg2Gj77MKdNrii",
  "key11": "9BpuYPdGXUyLSA8qrMtGPwR9VyDippXuNj1VK26KtD6vk5r1q1oUag52YvhawG74Nv1KoWEkoQbjn7i9AqoAbgX",
  "key12": "4YNn5ZSJTJQ6qNJmre1frzxnXa8ewj7q4TkkaXSHpri1jHxS7khESYE8ANVK3Taudf3kbUtY7Gg3mM4asdyJrF3Y",
  "key13": "3kugSJodGKmX1TNTG1bkzQtyqt2Cm3v7BLoDj3DCxPYrLKUa9LjPW3ZhTUQyvPuMPyFjNhFhdeXsFwQez9J17UyN",
  "key14": "4Te7pHJ1apvuAYFuceHVRmyB8SDWJWBpBhyxysVMqnae5XeD2wWtDpaFVFeHWkMMqxyeux5P1167HeTWFACd1GsU",
  "key15": "4Yu67dixVuhtH5DLX7m6E8Sr8hYGo456rHdPzDnJPcwQ3Pz2hyVpg9FxnmX4LYyALoxLvcTi3dnEvdFFFfX2jn8D",
  "key16": "5psgBftbHgBugK8sPCpc7UnxbkHTkHZYf5cTRKfEa45VgSG5xntivjzZeSWv69ExVP3Sz9SogwbG9VUhjWMzRhcL",
  "key17": "2De7sk3ifT555i8NcfZecQCnVjBQ2q2rVKe2EZL859uiQvZnrRBdYDXSpYn9eYbLELr5DTKPqTh7svr46BMNXej",
  "key18": "3hCuuS8HYa1ARr8esykWAxwc8A9BMvZszyjCvgd18WEV7kkc7V43YJGmuJopbinU9fxU9H5UEDPstJ1D6WLyT3p",
  "key19": "uvQMyNHvKaiMjcKhpiQ2MYfZsXGQfJEo13KRUqndpWSodEtLsUGAgj7T68fJXY2KVjrvUevmknPjnUrd7q7c5sE",
  "key20": "4rAbmxoAz1JhUrZzfaec1F7q6qGCFBtbrCqKWc4V6stUWHW8bXHQ7vck7jMCKM8hkibQ6uzU9HP5d86FQmKuHcXW",
  "key21": "D14WyVDhYQtcZejmo7AgGkcENehhLMRfpkZ4NSbeoxGmtcMSoN3CL8DyZtQkawWGwnBJxyKkfhpMWjSk4JrFE2k",
  "key22": "5vwojHQN2JzK8YYkDV2MZ7hw58Uj6VjHrMwjrUQf3CGSFwSmCPGFQobDidzprqVpXSYSqiUo5ph2Sh8vrzpTUVLU",
  "key23": "5hGhuSf1vpkZmFb8xBDeTLwWSh9QykDe2SQ74VxDoWCSRzfTyibQ1rMkm8iEfpEQ3UBDSG8AmM1JiycZh6wnyVS3",
  "key24": "MVJ8HeNVNaRiyN2RMK4DnLxpTsBevNaKzmo99DQrZKmFFbfGkqeC2TzzyDrWcJTu6TY5QPYFyREdWLMtX8heV6Q",
  "key25": "5UVokLb7HPwfQ7MduSn39DT5ab6Zu29gPpkXNoArNyYiaD5T2AcRpMTgDVpA9C18Moj9CgzQ595KknyJ8FSsqn7W",
  "key26": "2EBgDfano7zc1DfrAD3NGbo51YN97qybpbkgSA3YAsPc7BGDBiHjEFtr4QAejU4Qhr5rLFKn4MP1DBfMzZvfisyW",
  "key27": "dNEKUVswrm2dKueuzVnJgBStC5qp4uJpw2NepgH3zwAFXcEbJB5c4vxcoEoJAapZvwiHSibKqrVjP2K4UQFh2Vo",
  "key28": "5DL4U1Htdnufsp6zJgAsRPKR9e8ueSgQyuJFtx4negDiqhXc6vrLW7xxRMudQet7Zxuug1BkDWNqo7jokBfnYT4X",
  "key29": "42DLmcsRm9jdrA5wCDfW1vPKV2RdtgiJzUsq23MtuJYBrDurb9nudTmV3FMgXTCSS7h8gBSckpHL6CyGTWDmXwUC",
  "key30": "2yp47dwNkH9UBWF8f8rMFbEF2V35K1f4Twsb5eAGBRTqefg9yJJqDbXJ5JhdpqZ2XVjrCo8UDu634R9puQetMN3h",
  "key31": "5kwTm1LChqcaXCREqVEgaW3EpzXezB8vJxJN3RFvkTSSMEYnkEZoKtRPDSj7UrybPJvk6QMPiwxPYC6MDCFfQpz7",
  "key32": "kpAZMjprb1mHHSQhdB3cdDusRhc3v1ZY4oPg1z1UryjZ1FUkks7A7yyhCSfGXxHwTsXaS4A3HNsixbx4KLrf2S8",
  "key33": "UNRgBuqjxPSxiWbJV4nNkah2Eo8trg3fzAWkQQ5e98oNur6vVmKpo3DZCmmGe5ac7MC8y75TGG6kKDaF5UfRrAi",
  "key34": "ZMrywZpASvFZExoDRvEsvdZmNwEMKBbKvB16p1XiwYs1WshYayT9p9AshsZtwGqzwyWjryxtbxd1486SEJ1hxfB",
  "key35": "kksNee6FTuV82Xxqp7yLLbN9GorZ9SdiJC1SYgVFq2Txg3LguVuqirGNzcAgtABxheR52QL3KZcuDY3SYVUSD4N",
  "key36": "CiiTyGAZggm6dQcpK1BAx7SDukoSFBnpM4LwtPm1ZEZAP1xg3SeR6ssCqKuSBrqc85foSLW2uhSo9vaeM1aPUja",
  "key37": "2hiedAsZnNENyY9LhzWwYnG4qVJHo2NggHR15FXiBZPXj9QF3hm21dU6XctUFQm59K4nnVUMBacKU3LvSdxAYF2M",
  "key38": "wJvfEXxXjpoS56JxJcjtSM1xPvULQe7W3cuPwqrEKFP9EGUMiHfUWezZEpgJQXpZmYPvwD2AwrvKgFp3kBecNQX"
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
