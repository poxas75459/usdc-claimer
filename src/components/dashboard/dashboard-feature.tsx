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
    "3UYHiMkYs3CE1BSXxwEwYUdATCf2JWiKRw4kFrtiNwWMCtXTVNTJ1SvZdUpojoKDk8dJn8F4qU33PtJeHPV2AJGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q7ahq4TPdoZE6Zf9EmRnHV4jQSCjn7VXgkWTtfLmzGTcE2a5zRnj2eQmdDyinUUF4b6paC39wZvP8bTzKXA27fi",
  "key1": "4YfZni2L2cCCnwDe7mbWwmCYk2iUysnhQm9LkBLhhj4Q4Tm6AC1WHZtDUFq7SA6KmeKyqfR9oBJ329W53rtNtB3G",
  "key2": "4WxhuLeKTTUqwgtsJiwKFrwSCLcto2bWLCQE2muwUN4bmxS6KqdeqjTvAPbJGuwCknvq81E3Pv5heiBw7YETgjEb",
  "key3": "62Bbu64LLyPFgAoabmqZSG7c7iU47AvEYGHhhamPvEs6ph4G3Ra8KtLZTfNwr6atbJCevmz7PRTrCDAViRHMyBXo",
  "key4": "4sbWhZJ6zrTCPYrnmY2griNueirV5jKek7pbPPJV6rt1H1XWD3rijPwjCrTnRxm6SMgaakQ2XaF4rYsCwJnH8Va",
  "key5": "5HT5sh5CxRHVhwpAfwmJZcA4pNH7PZQ6aWNJciZnynWzJiawTYbo4zFEHWdUMy5gH7jK9wNH69VHbWjuL3EQDbnm",
  "key6": "RAoQ9hQoi53S5i85yNvLjTPUwoUsDkM4QPi9zGG7ihHp1LmMcxR8qUFk28ty5tk8DKkPuXjGVUwPYiBmZA697VK",
  "key7": "iK69zkATpP77JG6ADXC6S2QA5aLi3eBqNZtTvYGUiqWBWJxi928yey4SsXE6TvrxHe1y7bWZ87TCDW8kJicJiRR",
  "key8": "3G9TNoBTohCCHCB2ySKU67dbZLEabtuDSxcNUEgMK8pcpjs7rbWHKyLUt9nGr6BHe9XbxVmH9Ru7Mr9egX364BBQ",
  "key9": "4ZyYcXWNGnwUHq4MSfbyqjNLP7HH32om8Ge2DEhSRVQbitaXjVLdy7jUgTPqo8Mv6YLE66tA4ZTmmb2c4qirAoBD",
  "key10": "4sUmDhLZ2qwxR59MZjPMDq9BxZi1abVwG9rxgRr1Yf1oCsqdgNpePahKkjWCpugSbGtMLFsrnWqc2nmxgZejFw6S",
  "key11": "3VvdTFE4KmGjXkCzor7R2Vm1GotSrJTVdwBFRTeEBGnEcajVMiCbxD9r48Et9zVu6w8JprSyQWgx1mcGHmumRa7e",
  "key12": "41qJAQhoiwhW3abkDdmF9dJ9RZaTeq6nrwJKQGyoBds99m9B5yLTPi78PsZ7H5jq3yxEXrqErji2k7ZXseTJDr2E",
  "key13": "37pifHFLT7xCwNasRvp4X6qAhtFeHyjVh1sjJuddoU5wYn5hUtbXJSrvKQRWuuWQSKixrLAuVbarSKfAAhDp685t",
  "key14": "5514672Gr751igyZ1exLWMq4LpVm2af9gP92tkM8fxPLYFWWTw1GxceNQKa3h1dMiWbJAbQFuDp1UTq91x4ESonT",
  "key15": "4d4dNmojbtgdnTNKVuJ6heXdZGHta4kZ9McHSanhSoAJmKdZJaWfGKmBMedf3JpFf6fZSxg2RetvPRagHuKrbCft",
  "key16": "2MdvVSg88YUx4CqGGFKLvs3msmUXvEvYPnZJrdhMkp6X5LEVFU6i7csDzREDCCb3TNtauiKMWsKLEJacV7yLWATx",
  "key17": "5DKqPPZpAdufdbhYBsXgDLgdNbCm6L8zmvLuRnV7XbCVqeJwEczi5nmwydK82Qmbsh5FURxzLVQseFTcvyuqw5Dv",
  "key18": "316PkDkhKB6RKDjbwZj5zft437FT75CjtcWtUFfVPL6JiNU6STsd7Bcc6DggVqv1d3LYo6F1x15kadezEB2DygYL",
  "key19": "4m2JRpUZVgyFpcMUnsrCi179hxHaE6jxdpGv2CyjVez41PKXnk6ntsDm9FnegUw23QqZYEGW5x2VxvdT2neatZKj",
  "key20": "fgRazq9ww1BwcGaKvHUha9AoSMVn68VDo4Q2w71TUMFTcTq6yFb19zQ12Wd7kYCDs5HXeF2qZDDw87FChpKPQPF",
  "key21": "2UKmr3UghQ5sbbb4FmezB913oGGRNNN8sQ22Na7iKQSsTc1tJWmSq1tYdoFGcLRDjwTFAn63BpahTb6izx1y3C7r",
  "key22": "ipzu7dk8kyi9HFBQvrm9t67Z66tGm4pu1nJofWduJqLQ8WBQFVsbCKYhxgL61wGTeLqsTUJJSkKFSiZBiEfKqSA",
  "key23": "57qF7UvNey1Kr6Mb6hfqQ4mL3zu4zjBeQVFqh3seLx4uNKZCqSJFQkmVpSCcgurRhSawSLxBRSpwd3SxLMSr9U4L",
  "key24": "4Kir4CzuQy5p9b45dbpCEfoCWDiGLP4MXsZVNpCAsjmziD7Bft1EP7sBBZD7gMznMfoR9z1wgqbTbvgkHj2jEsPb",
  "key25": "5SxoiGY7zwN7ZgfN1a83nCuyrHw2TPXZ9WXeAdHCdp7j86wyU4W5bJiTToQ5WormCq5mApgvEa1hABkNJ19Yu8mi",
  "key26": "4LH1XeBVtxCgKjj8RdqTXmzsRi97rXtu9hGry4M1TyDu9dvzRNzDB7Uddg1Asq8YGu5VEN4riJVsqskBUuJKjpXB",
  "key27": "mjsdPmYGchYRuboTVSVGoX35PBsUr8eHSYwWNhkaPKFPrN4yHW4S4awKHtiKT2h7TGqhUk43Y5cBZv2KKavWTGC",
  "key28": "3jeMo1e7fQZVVaBH5V1rWMgZPe9gfLZZjiEhssGGXeGzMQ5E4dSTkdYjNGBkKpcVsHRpMM7jZbNXwza1tFFPpEm1",
  "key29": "2MQQPh6jvXtV4tPeC4Cc8kUYxJzqT8pXrjb1ELsLTXaAx6h5btN4vWqJduiQYLxvxi3a55DCdpZ947gZCQA2PrBw"
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
