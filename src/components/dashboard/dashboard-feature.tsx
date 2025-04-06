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
    "5nXWbTac5MRPZRp367tohmbgNKpzxQh2WvcvRVPFkTSV3ukiXN2iBqfCPR68uSQ6UQTRC1P5wEwomoYrS9TJKZ8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CyoxWUXzEcd7uhEZyxoAb5ZbqD5MYjP8mrFt1NDtQW5HNoXY8jvZ1Nj79wcmvV38oYVekEY1fivGDoLPrb4F96e",
  "key1": "3bGyuogHkdHm4cztQecrtvXfD3Bb9Q92NX4Rgii6sgN7snmB7deTaZRy5ntv2ne6LYwHHem4oBjHnm2W8PLpmX1M",
  "key2": "4xViaQVQQ2SNTEX3LWDby3t5Su5351RQJHifYAmr8GTtW9TbAsZkCGEjPKVLwJmwVgQQqZmXQTEhMpuHkUowtJ4K",
  "key3": "5ksjvpwTqKrvnEpdgo549w37jWDwc6gLnzDGFPJcAxvfW8qyh1dXpdpVcg5b81zFe4nEcAve9a2QwUn4sbMn2E9p",
  "key4": "5MLyhx4aYZpDhjbBAZhdzyeYviMW6As2czCc2ZvAPdRo91911J3B4QrSgvs6Zv6CQhSnJRdP65TWLB81a8oZfgzq",
  "key5": "2GSXFe8jCXGskTgUn1k1nGoK9bsdZ9J5owLAmxyRWomkEL3i6iY8Z3xT4BQf7zt1yJUmSzRbioXCjZD2rbTZbw8v",
  "key6": "2EtSW3JWukjmmKXCpvUY9z2E7bSBhAov1Xn5B5jvDifjF5tGssE34ZykhhUjsQGWptogLZDHHwFdLtMcE4fAdKKw",
  "key7": "eAxAznPMQfJhCTAbpEv8Mc6zPQFXvE51J2khYavmuzGyzXHbG2Do63dWCU7quBY2MKoccbjXoc1JRpVCZ4gUeY8",
  "key8": "5xuAwajsLA3yMjrX8AbzxgudxtWLujgxCNiVLFT6qwFDPdy5tppjamKfuNihnn7KvpWZy66iJAiBNbBKA57afK9A",
  "key9": "592mtyZyeyXKSDgxLd3MqQ7v3g71MgnzEGfzcTiKKuJBPkXUnJDnZRVm8iv1BoQx3wQeT7DUkvvS4uzYM6Lw4Ury",
  "key10": "3fDJNhUdFCTWZf3ba533dDfqYPgvVLpzDdePxQfsXBHzFEfEGzSyxXKhk9UHSPVzm8BPCaaPWZiqdpp6GioWLceN",
  "key11": "ABAXn22TvzwEJ9WU6GpPDSoeD4hrGaULp786cAuhHpz4brcdsFwhTUZ8zbozGbQNCVmvdLRAGoRyG4nMcgVfh7i",
  "key12": "4NWUj4YmTtMP7FoFjtGtzdbb9DsfpJSggi3jD4qaqm5BtKvPFLVdGUrHLmS9obnNrGLZgd26oV6cHEC1vmMnfpWE",
  "key13": "2vbRG1v2BghKMnNbNxYseeZirgyPMysU5SQpNjS8omkyfmB16F2AWs5v6EeejF5cyP4LN4aWQrcjmk3ooeYjbvsH",
  "key14": "L94opNfNn7DsR5KdnMs8hvtNiVWmTFa5mz96nLCEnx2hcctVttHnvXmhDyZtn6BeShsEsischdng1EptmASxvDg",
  "key15": "3eLRxTVZ6HZzRqr9jMd38zPLkLN1WeruYRCMHe7FLgr9KSiCdq7sPJwdcBxoZtmsnQCMAL34R3MW3GM73vY6cFdF",
  "key16": "4xWNsi5cnbkxh9piGRDoELxFspZwA4na87x6MM9gevfGkym3oUVcN5tpS1A5ShzMvkbVZcxdQUs9KaJpAsgs2oju",
  "key17": "51APWqhrzgqyrf9RFRWxqkCpkPBRWrsyTUsexK3WBnV9aDxXMwn7Y9UBU2DGQULXrXA8Nx8gyuwpsZkqQSx6LW58",
  "key18": "4aNNA6x1xcHsE3d1C9YVvnE4SKu81mDw8kUHRU7t6Edj6pCeN1KD1M8PWE8H3LNhWid1NDkia6DD9EyoVtatwpYt",
  "key19": "3pugvM9XBCM1qNApEk2yLukzLkyrukzj5Xz7rPrXJ4dp551ZaUCipEnsW2xwULQFDn69oA3U2P7qUbPVAn6Ezrdc",
  "key20": "3oc7AW29S1mazGx7WYk414NNrQvVkyzwbrE8EH4uDAU2AKXF6zgF5ofqgwhzvep8Xn9H3A3jPUHmBHA5CkB3z56q",
  "key21": "43R39NWb5icC4YvYgBEZMtMajnJbEgLiRTQ6PTFqNGK4R6rx8EYEMPfEm9bfLP591cEnUCeFUKzZ12tJEe5J6hxA",
  "key22": "3CwitNPp4RhoMFQcdpc17SWb9gquLN1yPcUZcbXSK7geTEn61eFBwLTyMxXH9LfjXyJChJ5Lfb3ZbMAvDrMFnmmP",
  "key23": "DS3qfcPbQsPzMD8AUjpdCXQKYkHN9MMWNvpZoGJe17Dpn6MTFfkoiNGi2TAPRVDUYBsycN3bmc98etN78gru33U",
  "key24": "b9rPgGD4ysR2uE2Z9YsSKVfrL29B48eCM97dAYM2akv58MZA5Wj86h2962DzQN6Q79Aqs2JP2qM8g7GKti7SGoR",
  "key25": "35wPMAwVT7CJXyA8RDHNYVKRbxAhWxnT91zLVhFiYbb1vkUYsLMTfYyH8Qh3At6qxBMmkumeq9A5MZNEgwkLqMzr",
  "key26": "h2K5udJc6qYr3Z5QYdsg7A8zNo3k8Bo7ktnQCsw33gCUWNcHMxsQovyGW2CFjgNG47vsF3ebTkHmAqGz9dZyWCn"
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
