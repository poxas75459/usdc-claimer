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
    "3Tus6FBepCSSq5QGR9yxyLwU7fPd2X4cAVseEgNSpmUszqyuE8agXMP2s6TMZS5v1DAEweQst7S9onC1unBo86Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfXrBbNAGeQuHsXD1S4txzXeug7WbSFRF3t8VG1MDYSHe8p4N23SqmBZKL5AsWcPdj4sNedS8zV8FdwEDr84Gjf",
  "key1": "4uozhzya4sVmJWsyyWTxf5rvE4sbZWX9eUY1e7z1GrWMUahRpgWfGoTHT8WGwU5tCvBwQ1KdzRsFMA2bjD2JXFpU",
  "key2": "4ZVohd4HeveiL5VVpejn9j2YXygPjA3AUpLiDUYjSQKCfWZVMrNCYwGNwkXpURkZ7zCDMj1zX9DtDMkiAfkhaQAq",
  "key3": "QhRPGY283YmpZXu2BcrejRRvvKUDtDARAc9Yo7qeC2LKzSKoAz3JhvX8xCMEEAfDJHaF1zwLtUL3ZEZaGX2Dj3p",
  "key4": "Jq2pWgVAn8M1qTTh976WQ5TYxDDpw4tyyvMjsfBUd7jfJWgcDcNs6Cf6SWQpxWFSSfRidx7cCvbbjMBQZYQyJnL",
  "key5": "3iTdwyKaQ7cttU9n7YwvfdBstxkRp1rf94yT3RGJBvx288DQUqNMtTMSuyn4mJhMmdxZh6rst21W4sEWuu4jBvQf",
  "key6": "2RQfEFhbtzFkG2AvfwjZqG2RRc7M4cdikRAHNPW7j1XUmNoxQ7Lrnrndnx59PoW23BduXKJeJ2YuMoDeA2aRCMT3",
  "key7": "4ibRdbb9nJ3RKt6dnyND3fn9xNvk5JDsKGEykb39kr9er4NnSjNrXAvKge3pXGBSeezSzc8LNNNRVVynbQnCm1FT",
  "key8": "2FNDWe56nCvTPwVKy4qJ4Bq3qQAsDMTQSZw9ScQHrkrLFQNyb1PtrEWyjqXgUTu2QunZjJ5wMnKovoFzL89Wwy3y",
  "key9": "3izh3KqUMwHB9Hy2dKXWhe3d8w9RhdXWoexbxYbDrU3MFvfXFmZXrjJvYPh3NDZMazcypMdUHfisxpHHWLoXbz9v",
  "key10": "2eMkyiY6zDbRqhdGZcbK5rqJgtFia34RRHv5Y9X6FThd7Jg6ixNJabdS8MVE7H9YW7juKJ4wGPfcMs4e1dheTFwE",
  "key11": "2MJZSXDTTkXatJLUWDifqv7o265GXoJ1LhX6HQjqbfB8ckku2L7wNRr4oAfFXVXGruMEegWMzMu3ChdDxqNifj7E",
  "key12": "3yR43HDP2uf9ea2VvDWanwadsq98jB6JVNCrB8me9s8WEWvLh78WtKnpxZxviBSMhPcSVCNw89GZCmKBsANUaKcf",
  "key13": "65YKkiMwy73iSfgcrmT1UyDsESDMpWLb4fBudQ9mTx52u4gsmZpFxA2A9y1of6pmJWonv8mexfWdZEW9GyaqKAMQ",
  "key14": "5gyAaUg8CJ3L3etVXj8nD1Z63TfQf8ioh2T6t6nuQco4GHyVQ9KRzhtCHLN4gWMGegTCBPpgVe9BS41TUgH4P8zt",
  "key15": "4ivnhYdv1bpXY3PCGkciZjpPActdgtbNQuNyhDoSdHjnsLKUQaWtPqdmoNxTYtKQVtnQ5GXCzxE18qopL3Nxyjpq",
  "key16": "PqZF3HV4rrA4spuPXTTyb7XWGADC2riUJJVmF9ree46aHXEyf7nJ6QtdypQipJUuF24W4LBMMs1Vi28zSev8Uzy",
  "key17": "46p8QeAcmS7hRLsHzQmWnXS9sTK7wjhKeyPguGr6yohcnTDm6LNRe69y1Tq4MADhkWf5Wx5iMyYthG2GAQHv3eyf",
  "key18": "4JNuBXo8xGWgcuoMPGxUF2jk7K9tUqB55pyFGshxupuXo7DP8mXG11udptHYoFZ9yvpcy2jejsGniw1XDAoast93",
  "key19": "5UTmhJU1eyXT8DR2KjAJvJnuD6xnkR3tYLsncQ5y86NKKZuZeQJv93GwXtWVdTi7nA6uV8XTxEQBVoRMxda8Pgq7",
  "key20": "3k1dHgxqC6QvChtQyRRLV7z3dJ7cKJ4zUUfXte97xjGXsjyMs3HjaU78mc66CMjkf3mzQTuSTFZTn7E4PxTUi3vv",
  "key21": "Cufs6wNDvmTC6tBSD3wmbsPF2BathHPfmn7i61iXyct3ZwniMvwWNEYELvEDQeiedimP4b86UaJYq9exPtWZ9Lv",
  "key22": "4rfYikLHbN43BgReaU3WaUGuN5W6zj3jMxpkem6xR5ztvfDxyUJTY1QRL3DYzd1giQpfjoJvb55i2ysoqwGxry4Q",
  "key23": "5MyLgCKPzRmf8SyUkNQrmZ9AcJLVZxPw56etWoz7Cg5UmzogHY9CviCKxtNAh2BKBQV3vHxjegtr3ov5Xas7ndBV",
  "key24": "3vMCCLvh2AconRsFUELiL2NGGtN7HQ9B3wSYfbvGZun5Mpgf9x2TbgQxbsedCrswU9F1RQsu3eMALFn6grffqFeA",
  "key25": "u1tPpbRKPL8J9RQX5WANvgdq6vQpuEj7cqkfGK2hoCWWdeBMDihS7JDXJQgMfBBgUamWWNixdmnqzsUw5DWeBUv",
  "key26": "32PJyKuQGCmigkwMcAjSBRx3RMsbfpcpNo9HdXyyzHPcRBPUr3Ghn6bPtdk5YJmKkCrrKV5xsYEz3AWrh39wfi62",
  "key27": "duMt99AMSkKRWEkLn4HwGboUtWcF9QADNDspwh1GrDhy3WtneM2RoFSyKXufdteu1e9hvojPG3BbuG5YV9fuCdu",
  "key28": "rpgjDyS81XMQngbSWaZ8a4aNu5HfSSsD6pwtkt3o2sazyVZnfMUFcme8qujLtNU55zadBe7aSXpNyd1uN8erUiF",
  "key29": "4Qr4rwioQ35jddBhq2FyvdTTBpLnWqRVNeaq9zRoNkbQhEniskHW5jzkAeJQsW5FYRMBdqKB1uJiSt3f5ARfU3AP",
  "key30": "5wTdGFjr5V1jqm3cBND8SCm1Qvsys4prntLa7KxmFa6tawXKAxH4E8EoTFv2pF3Jez64oxm7v5M7E7wAQFvBp2tT",
  "key31": "2thbiCaBGLY7YDcLqh5ZbuD5jUQ4f3zi41T8VbH7iQ3WoHhDobMkkaqh16Djq4hDHq1Rrxy4TwJkcTd9D4fohNq"
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
