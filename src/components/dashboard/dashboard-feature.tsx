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
    "3oGEL2iQbFgkafba4CEDbMSMFynDYfqkGfzfYt6yWBZo7WtsuWwHNYGyUtnBfgWvQsVTvP7Er9ViSA8uLugNtLoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvWsSAfPoRgErWrvaCp7L7CxswqKHZxkYJPzAmZUUPspVzNKNS9LbvsyaUvmGd7iiWco7qF4iFJHnbBGm8J2Nfq",
  "key1": "5jscZP39qWN6FJqxZiynvihFHKq8kRE8Z4zbPPCgfTbwRPzttZADHt6QZ3mVwnWo7Vbops1VAQXTT417kUx3C9ma",
  "key2": "5uvtndqDSPxkhfxDCcRqfAW2tSTdR3YjHqQWX3LpwEdJahMVtmmzqGM6AeuMegtaxjhWjB67aoxnw7zb5unTNXqf",
  "key3": "5pws8ybzkwSjve7FJ3gLmAGcjTCBqG41u7Ga4Xkgr27ZWFg3scfuL2bqkJvpHfZynmbfAex924VYMXbSmDu5AV8j",
  "key4": "23VCgKAAtzhpajM89M7JuaZCuCuhQa6gnnV2dddgyFbrkdmqR9R7Srqwf4Ekutb3nTagoFAT84i5491pFgivbRDR",
  "key5": "2AENQKH5ggrsbPEUEMDtHqUi18FKM5TowpoVvqs8w9Pfsw3uC7mB7ACKcUJyZxkxDNWZKfu3Crovr3pDpk2tMdFJ",
  "key6": "5YLqUy3FCBnt7s3nQh51iz8Y2TDe4c2tcPJR3biishQQ2C4J4bUv9TsqLACn72Ghh6XTCrcKMfKyMGG64XfNJA8A",
  "key7": "3aD2Gw7Z8Pc5ToKkmbnAnpLCYQCEcVPVhwfjCBrw6c3hyoMquGdGSzbbC5qp1qZJxW2rgdecMuvTK3JeNEfGuAmK",
  "key8": "3E7LVu8HFxVUjSenHRw8eb7eC9FfFojkZY2M9tBWK1tawvJzZSN75WDE14XGJgcaPXTK8Uf2iHgQXWALiTQJb6mY",
  "key9": "3RNxeFMaR8dAcRL6aMwmbZuqX27bWW2KkkkYQNHeNutj73RftCRBYqZLdj6rQ86Lk8gYMP5P6eoZtWTWHDk4XUrT",
  "key10": "548eiYZbDv1mKMPbUCVCgCpBTqxxG6ADZpKiuMdjkBUXw84QCXNjCN45ifj5ociUeUVwo9RTeiLj1hPaHMmLYnMh",
  "key11": "3khtQTko2tWRQ9Q6YnJuNzU69BcSMEa9Rr6aamQpEdvKyeZPnhBKg6TALnLwjxZPzDQxtgpfTSFdQAYmhHjo11zi",
  "key12": "2UTGoKPZf1vg8rknTbR3wHiYgFxzj7DNqy6AWAgqXTUdgr6K4tz2ZyyiPiFohAJLQipdicR9GppRQdEhga4uU4Mt",
  "key13": "ez9icuYWSqZF3E2GJ84YyYV1Kgcu3YEBk24KcmevhTxsJhJgJhcQvdt38cznMiZi3LCMJyobfWXKnS5uU5aaDsb",
  "key14": "5YFN2pg9FcgXtnxqqAZVueTx25NFgM8GXRggZCGJpxBWTgRfD6REq1h38USPduBCKJQXkLzw2XX9yGk7DhZjZSNR",
  "key15": "4Vh85xTSixEPsTro28Nt2smoEK2Kv2Jcrzpd195TSPTKfdTr8TG2yxVbaKvg7SEAhBEQDUAqAQEsVYaak5wkKuxL",
  "key16": "3sGzDqpAKQHJd6nRauU1VeYMYqaLxuqJmg9hXP8pcfmXKRH6aJkEKTVcete6qFWB826weei5FKhLvmRrnwCHULYv",
  "key17": "5YBfpFCMGion8KqPAwBJgF8b4gwhn41K9d9ZhLK9bEyC8rEMcTCvXNqUXWBBSHDcphM7C8krRMkkQiMQkCP7hq7A",
  "key18": "4zH5TofzRPKLyJn52Ds46vanAFVzBdQUsaBaawUooYUMr5fZM2DpTGg72HqMcA2DudWVZPoL96mcAJM244hxYV2o",
  "key19": "2Q7bD5i66LhttYJeZMSr138jg5jwTzrmo264pXSsUqWfGJUJL7ae9Z9RRpeNa3wmTGHHJPW6iCKFqAxmAPgZa92c",
  "key20": "299U8HgSv6K7BgrqKpVUMQsMDrjNyfMdkSrc6WpZi3S2cScBuAFAw7faY9ZvhfDJofq4bcJVnpubFbmzm6zaQ6rt",
  "key21": "3ReUnWd5R13sej85BWaWeVfj2PuvYnMQGrK837jd9Zx71ymqtbDeGYHYsFqwWrn2Rc7UVtzsUVPywRU7a4mKmecZ",
  "key22": "Nm4nNZ62VGhoWbfusju5sEzgJoPqtGaYcAEe5gSDoDFZQ4mBpgR3ng1XcBHESAi4pwMVs4BuDyJg6njNs5zvGch",
  "key23": "4ieaZZGAczyxTsCXkHx8EyU58YvZfHJBTySENzmXpfujsuXqkiayFbtZLA3pvHUBXnYLPNpzaoJMDN4y5qipMNDc",
  "key24": "YXPwNGeVkLRWZicmwKCEhhA647NXVUvqg2VhCfR8BydaTMMsxJXDV23E47YTzFYJbpuct9HHF3iYosdk4MeMrXD",
  "key25": "5js3fhnx6UrRpJ6deH4D9jRRCBmEHMHSt3DGdHGfRhmha4Q68P9fb69vtwpesJhRzHawPEU3Frscam3ZPDcKMGf8",
  "key26": "g6H29KnMXnPa5Fe7huhWk3agBTBNqYgYzFeN4JQWD8p2pvYUgicg2XGE1VksB7T15cP2CTBGfoH5H7McsMxSmEn",
  "key27": "4A7osD1mSkEmQcDRMDH5sCEHsDVvhhJSV7bHTTcPsqsUUgEwjWB2XdxeUiNjNFQt7E6gC3DJLszikLUUKJYEHNoj",
  "key28": "3gKdGbMm1KeFdWNndTW9LN6RBdsQMVMJJty7c7YHxSkhz4oPgss2wM6bXWptcVbFaTYrQPd81a2W5VCmNjNvPB4d",
  "key29": "9fLFShhHLo3iVbccpkF9WRMmzw9Cc5w8GMpAJEmLSrpVUQhiFGLNNMiQoQ5dnxKjfSy97iDo4Zw8FGtqaJCfZD1"
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
