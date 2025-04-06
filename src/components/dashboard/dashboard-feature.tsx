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
    "4e4QbAhWC9F2mRib5imLa9iucr7QqPkz7gbSFj1YuBupLjMuWRvtreECoZvV2nmMPErvPUEQEXpmkNFmHmRQkTze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUq8biqx3cFkrzq5emGc3C6fm8dEbN6MvmrfjXLneuhmP8Ws82KunqDjP39UkPHtPfduFvogvtFqJvTgw6MP1sU",
  "key1": "4hEVDt6z6jxdLmm5A1xQNsZc3kTCbZCZY2zZiDixC2vKJPr19DLqay8XKh86PWAHUqsBes2rE5vTmUMiK5BotJzd",
  "key2": "BiE7FWvbc38f9vvHBRniMPexithvCe8QkJmUSgFxJFn6scmaGm8Kp2CUyWQac3JPU5qYAXzyxMYke3ymdBXbZ4t",
  "key3": "3FSWVqCuEQnDdSQkgEGFD34RTjyPpRNKwtqoJ8GdbNPQBMNgn2rMCX3RhueTpBKJ8dskeeNinTpVkjztbU32v6qz",
  "key4": "2Yu9gC7BP55DVJZnSDY5DAzbEdfm9KtgeEei5WJoGvo6daJA8EortesFmfgZjU81fhTKTNkwwtLxDkjzuekr33Xm",
  "key5": "3nurjHpzmNVF2RPjzUshX5LPQHh4dr79ktGVhZbz7jnGYEx8iYkBgLMNGTG4pTmVfafmDyeMFJGMnxh1kcRfLuue",
  "key6": "fbLhrFRrtfvSTvwvdGJb8ssoYEGkrhtLK3QjGtkyuppqRsFTtfWryvzUHwoGjdtvk2A2EhWvAuuUbDxtnNW1Lm7",
  "key7": "5c2hmJqdy6SdZQMDCfgZr4earVppjEwjwmDbtXYUDZEigRT2N7fjEZn4BBk5epWhrZ8cUYTmuP1kwwNhRt1T2TaE",
  "key8": "5EjYxv5d6iLJcmMQtFXtro4YyBXQ9zsLcDdjSpwpRLihjH1D4PkeomZCHySKyNekpmarJMB2Wtcbib73dwwBsJy1",
  "key9": "TMzVWFpZnjiAegUXASPQMCHHJvoyRLr3zLY1LCY17iZKUYvBSSTXkwg3gnGMXXxeXpAtF4o26HcR9TKj5vqynMU",
  "key10": "3RLpA5nXiSRt8BUZZc9BiD5McuPKgtmHr64uVBXNA4mfkyaaXfatWSTiGrnHdPm5qPqs87KQ4VEpVoEXD7nsgCCj",
  "key11": "21zQTjfjnzSQyGdWYgrStYKqjdekXxqofxcoYysnuiCmQXsUsutXFoBDDUy1MSsRGgHgdvCMn6VyPyG3vqwZxM8V",
  "key12": "5PrT5xmB7B53tQ2MsHXP3Fk13bPnjXFNVnuUNKgbzcn7PZ4gJAWbT6dThs8GkprEA3vftReSJHMWmWqoNa2zU93r",
  "key13": "5eHdmZrJAuPtfEjajhGGXuwdZuPJdWomuNprw1ZCuNfoWgJ7Tb9tcwpbWmtP3v6iJKifowxjDHguY5puVaeH76MH",
  "key14": "wJAcYrzyZwmJmBwyoEto6NxSQBjJRDogi23hGyJrz5K8E1p7nd1kYEUJArBNJhyEq485zeGwyivvk1beBsS13sN",
  "key15": "3xgKTMgJE2GUG7bv7zpaBVURxzSxMBonLKZ8SZJmrE3uxxDAF65HGcvJ32a58MsVhVAc6S5ADGegdM1kgxPPpxcF",
  "key16": "24YNq1AEDSS6S9P9CmADoGEmUyin55AA6MegyxEvkVyfv8WqZwk547oe5zrHso6wNqVUTmpgR5FYtgEzY99cGYrt",
  "key17": "46mEAvSpT1ZU5wPuoAsu9gWoBaDBnBhxkZJ5VSnsbtunmcYcXvva7wpz3K3Y6ctKCAszeoyKamBbrzbHTbj4PiGQ",
  "key18": "5A8f7rrP7g6cpBqEX6wyPifTCqHnRZiNyfqWxTxHqkBB3j5aWAs7nTBmag2RBfgeiRxvEdMS9hEfeCdVDteWQgr4",
  "key19": "62W5rRH3njSmjRPeK9NbeejnjFtL3tVwZwNC2XizFSXeUATNa16j4yUkNNtceg3imff5h85PLrYRuRajgsYuKnx4",
  "key20": "4teiDps4TtfzQwXXiJLtS3cw16wooQGUjCb6zVLXcuq1K1W75V7bzELit1a3rFTaDtEqowWXXu5eDNEKkVhLqNUy",
  "key21": "3A4khdS314NLNUjapipDrwoPkXZrybqAQSpxEDQkX2yByfmZMUQjasgxkLtabAw4n2rNQXM35MDjEv3QkYv1CHHo",
  "key22": "4wZ7iWua1unhX9GZTpQWeigzUbxqpnhJXWFkBmV9aSxppP4ZWqzadoqbfPpijEv6wRwCEt8zESruy17QoRuwHPBm",
  "key23": "5nNKskUgGGwiRtT4aWU1ig5fBcZ9PWuFmcuwbKiD3W4SdM577iH9Pg3x2q9zVBMEwVDRAPDH4e3cPAG8wktu82oP",
  "key24": "5ScsS8EUBSLpTdexxnJtCqNA2Ru6JuL15GuveNiETst4AYvmWteFZqA3UNZoTDJuKNmijj17fSGDsL4BALM5Mu2r",
  "key25": "2ViHxLU9Xb4JdMhjXS2oEb5WyFHQVL3P4oqwvQTnnFLDcuozAvFThoGB3WzAXaFgEZ2KiUUqoujJBviYtjgFmyj3",
  "key26": "4oGUbUDAk2DZ92d7NTg4pJsfLDbaJGKYH2xRbbYqdYXGhAPdpXrD5DcBjLiodhwKvR8EtYBFRcxUM2u9qcJnjqxN",
  "key27": "AVQieYYGdVafjRoNwbB4ehPBhVffgKyjKjLpa3SyEM6GEEcUB2tbxnQckmkQg99GLkhjF8nnGBE9n8nEA3xxPw8",
  "key28": "YJiaQa2MGvE6WngUWX4sKkx3T3Lcd8V5GzA6SeT9hnCz7muguCApy85vB6fV3pscdh82YMQufHfWXoxdpyFaH5d",
  "key29": "3yfnFP31895tko4JWXsxKujHHUB7dCsyEymaHh5r4mcHjBK1XAZhQbm3mi9FBQ116bs9jtYeQbMbx2nqkehqCPfg",
  "key30": "3JtjzYoEyuQTF57W9TN8ibVAHkanwaqurTstfzKWSfyAH3L8jxDwymt1p8nSMqC5rcfsJ8RBBqnENTQk49tdYm6e",
  "key31": "4ZtqskBVDS5QDDdKnrXkU89HFSspdRn6Uk17G711wsinLLmeKw5qLoqRSwGaBkYhuWBHTBF4p2P9ih284k1Jy9Ej",
  "key32": "33yisyDjMPZFw1GWLQc9dG833PVvDirt99MEn9oVLj9LxiVDAett1WBFQVVwJigKV7AKy2kumKs7woRJgdP6Psao",
  "key33": "5dEs59BioSqsntP2GcnKCYbSS1VcFFAeFEYRyQdKtTmWZff9esPKsLXv85GuZLCwvwFj2Z27JoGZdHN9tZ7fuMJm",
  "key34": "3CcoiUoaSBDwbjwTF4hcRcsgZA9YcGwZp2tRVwd4oZB4sTEFwwPEVoxkPsnHua6cZdWwd4wxaPQULWA2Z65i55yv"
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
