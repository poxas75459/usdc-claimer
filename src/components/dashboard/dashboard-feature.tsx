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
    "1Fh42QQfttDg8rdSKSu9K9NVNbAbdmfMpapokfTaJdumMDnK1Y34KQ3ae7Xriymq3p1sPbF2WAg28nGmN31WReF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UF1bCAbLVDq1QkJGkRo1h8pXR8XjR3V57XSjWLpkmGxJvqxMKMoD4xUv8WDxA3auFhBMo9rUFwnognjL1MCdbpe",
  "key1": "29TDTzuxe623yCV27kZUbu94c1xJiSLHZdfRpGA1wNeRDgBmeDmYkq3F8gVaM6fzom4XsMVpHseuHPzDLynuDwGV",
  "key2": "2TPmd1Q4fwCLcqBZqKVjnemQMxFVHmVbf4gZHnGTFjBL2vFoVZ1MjwC2fZNU7hqbYvhMzPcVEcw2jzLALHwT6ads",
  "key3": "4WsuKxxA5n1rtJdFf49g7yjdxVwdBzay4K6UKhFBUfzk3XLETKK8dJgoVP2RecEx7opxvsGXwUrUhDActYuLGyF9",
  "key4": "4HbuEX19ouM4feoZ7LVSqoDBNx3tBtjiSpPX22BjBoZAoqeRXqUH8jFepzoqhfeGTA2XuArvdxShQRkai71TvWj",
  "key5": "4DtFDvY9HQTz8YuJemwpteGJR15GfGDmMfe7NEFJSPakhxu6RDgpbxGVmvZkoWrGZhAxmRWKDVdwZh87tJcXhR1U",
  "key6": "5AYHZ6z8kz79GA6VA5YAmaQkPA8WmpL34EaUm6kj5SWPrsZH3fj8Wd1p7b6Cyk2PK1YqXcuoirNHbV3AqNK1DcTm",
  "key7": "WBWLSUGrFU6YbGLDtPZPWmSHwzFdqXaWZxrNnLkrHYnqSJwoVhwX2CbJvrgzQX1jUkDJdLa7pLpHdtJe58ZQCcU",
  "key8": "56qZ4zCPYrDHTTFuiGtKc3CEZogNNzVTv4h4uWA4PmaMA5TPCZjMCuULrifzbYzJEXAu38dzdyJB6b1sW1q1T2Ae",
  "key9": "UmQhboD4dqRPvzDFrBS7iBasy366x9oqRcmt6gCQmcngef37CeZbtVXo1JYT8rig169pNUnniLW7hxuK5ML4QDZ",
  "key10": "3nD8pB38hq5E65SMuqBfXefUY675Cbc8myhSVzh6MiYCQQkMTe4NH76nYJYVi29pbGbKq4wCkoUkPGH6ENPQH9V6",
  "key11": "JcJr6NVjHAGdxPoezNVJzfuWVWLQ2BANDRSE7t9GspFcnAsBJXAPk7KwA3VDAvRTAorBJBGpLVy7XmLbHotS9Gt",
  "key12": "5pYrKfSxvEqxGTXgib8BzGynuC1ZQiUoM29V1aRetLD5AvL7vjdVgTiVvNVSXUXXYbcnM87Tc2Vcp2wJsrq2zagj",
  "key13": "38cT1K7YmSL5vS7usU2T9K3YAUGcueKn7r2f3FmJJQgoa1XBFa4TsSPnfHaTqn7hz7iJ7MRChk9vKrs8dmFpeqWR",
  "key14": "4dsiRaHZf26x5JHKrLC1KfEzBJgCRVRk27uUwXKetNL8dqgeLQ5SHTtP7G9U3MsyaHGLjkeEVCedkNNw4iMKzfbn",
  "key15": "2GVLCPXCpgHVWoyvfp9D17BeUvYejQxGGjMPokc5VNoCiRAj5LLRDAahXTP2uDcdeAypb6uHJf2MVXRRG17a7Dn1",
  "key16": "qX37cS3H8Y484yqqhWCSadoSQVyRYBhdNPtvaCU6zy4h1yxR5Hke74SWh7hid5PriENepJtcsDowKRiE9bdydbe",
  "key17": "2kqvEwWCEnHZxxczP58PLPuaUtuKjPQ9m1zGAVkzToyhqPk1vJJZ9DVzaHhFC2tCwLYsCjPPYoXfgwPgj3TKkAPi",
  "key18": "65EXwkZ6abKWxjjhCduGALDW7tkAokmTi5cngiJASN59AmYTeF5W8PMGQi7S6rT28ZrK9rGBUG8ronjyGcwMZE97",
  "key19": "5tbkrxgJzHizxXY4L4sRyyFdz5CEhLPQSZoVP9EvrT2skUBsyPHYBLgVkKvrtnPSAFDvHZvGAXzw3vgqJVg4imMh",
  "key20": "wr4ka5FruzvCLoXty6RTkjVYyXrBgXp5cxCDaHVNtHBV279eqFfYL1TRR1163MgFqFWuxNDLPh6CJ9nQoCFxCHL",
  "key21": "3RwwJyxiT72KF5bfTqrCvjYfdNdXcx5KHJLfT1JZxvgfnLBXuk9Nq8uYdQcSWDzAiSmKyRDGDVNAfJnNiqLamFMN",
  "key22": "9yciwoSitiepG4zAxRHZM8vsmH4LuBT6n9NDohQqohxxq9dsFqVviMQWFMuUsKawWtC8Csh482E91kY5ydC3A2k",
  "key23": "4aGU9w8HTyopofWyyuqHtCcZYMkiY7aPrEngD6qozCuuBwFpLjWx2jatDt45vzosYco7micTfVhc3HZj32BLThbB",
  "key24": "34GgGBCZ99mgRR5qgzPT3eL62W43UTDd5sjRuk9Kr4mt4qDNQQsjAqWqcPdjouh7cbD4aYL8BtjxkJnoF85gMHys"
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
