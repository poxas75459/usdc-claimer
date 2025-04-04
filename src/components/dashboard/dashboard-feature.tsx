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
    "4r6oeCFKBVHUHUjMH5EGf8P4cquChhX4YK8Bpkyb1CNAGLJLCM8yLEJneWEH78L6CeUQTSnVPAbNZxChqWu3LrRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhbkacAXPeGHzWTKACR7XrgpooP5ZFBSXMqpeTngRydxA59beREUwbVk7aWgwHMazQSnv8XV1Pj2qroQbewKFeP",
  "key1": "47MDoxtSY2t5crqzSWP2FQAuhoeuPZP1LJwMXsgZcBM1KWpy2rHzy2c3hGWim2BoqTArDYqhaiZScLN47daX81DM",
  "key2": "XumPzh5DcrMv4qzxKQSwke27QwurCmu7WUHLawwTF5Fha9Pp6SMbsGhs9tgvkV8hrjvqnnPRQgw96LBr1iS4PrM",
  "key3": "2RhofU6YxBHofQff2grzW1rJsdyrgvZpKNSuWNsSfjqciy6xSU7TmzzNKBB68iPdAa6kPeWxXGbjbM9WGhrWVEPJ",
  "key4": "63u5FF6Zz7BbeQJMoyhatAtYQWGU8HgXEpcaonrCEfftUaATn9s4WTwKXaVCx1WquWRbmmWZPEVrYbpmiVug8qpm",
  "key5": "2gEBpn5bUVVoSjPmJoMrimA2PvzrSFKzuS9qMBMJDPZWWrG32VXeAZsnV8YwMq2A3yy4pSbh2GyzqdbaHrRu7bxE",
  "key6": "4E1vvqr6H6JitVaTW7KVwhznASbPeETCZ8GDzHNGj1rb6NX3MYcJcYBkRPrTQyFhZrGLcvmxPxgyD8o2ea5okeV5",
  "key7": "2xBBYk7Zca3ez5HVR6VvVhYjG4edkRGJtgXZyuEmQUnzbDXiejU6nvZP54chJDeBqApjPfTXfaJ3YEzWwLATdU8t",
  "key8": "5bvxsKheYeFWLzn26hJkV9Yq8ZG1vYf3c6pKyYKSAw4JNcsv15gXabAHdBQVBge31qZfPV3TUQ8PzYqm37jEY1Ps",
  "key9": "5Pke4kvtYfND7eYMhyGUmKGmFzvz7wNiz6QhrPfP3wXpabm4Sjoo2nPY6AR6caEP9pSc9mnKLuT2SWNm5bZBBeg8",
  "key10": "4NVq4ZHm8Qw98BQu4Y5ATdfyNuvyQPJBAk4drBKjVtD4Q3E69k2vEZmRLpccukuMW8fjCeDT9LK8ErkJVdeBd5Mt",
  "key11": "3cPybx2B9TfXCzGu6ReGS4qeT5UPB8C94ppbcMHVFhzdZR4LtXbsTFEzfKQ412gYAFhib9fuNWuSSnT8ctUkeMgT",
  "key12": "afnwMiVNr6QgCoheSDk27yF1JG3XKBDykkrDrr4sKfL46VHA1UtJgR6cf24f1TqkVUvisBs4srZTwdHD4D176K2",
  "key13": "5RvgpnYjn9fL4m7D3b4dBtd4uQVApakMT41vG89tCenpnEMFWNqncEpPK5WjFebTbCrco4jeF7Re7DkgYEtvAxVN",
  "key14": "5n7asNXK1LnsAGPj9UxU4XCmCT64H8bKhfUvqw3oEnRSC2cR3w7Ns5YGUo9thjATbzPsB1Jf7fZczKrjjfPsYxxA",
  "key15": "uyLtrzh2ep9QD1p6ghnhpk1nBCj5G17nEo8taJZLJSL6dtR9An6cSMYZQuM2ufoVt6fLeKk2d8B7EkL3Wn11Emj",
  "key16": "5LJ3JVZWX1M2BBUrnwYgmCSUpfx4Scqm159AtszvGJtKE7aqBqroCZpBxTVZ8YJPjaesEL6NdKZ4WS58ne3qLqgC",
  "key17": "3oWYumt4xxUhNNM9kEtY9fEuCfjkhFMSajMZzfqaTRoeJARQoNud6dwW8UKmcsCRNDvZRB2Kd6bQWVSU8VYne652",
  "key18": "2Nk62GGLK3KT2gZR6aYy8a7HqsmLaacoFFAAh92RjU124w2ujyFmAxEncpzziHFfUCcyChAPLA7vLExaF9AfTkzy",
  "key19": "4gJxLBs52mmwQYotu7BbZJiPBXbZXm1QaKTqaipNhgBFKAG2AbE1PhSgdmXwHjW2zeJVEdg9igConXcbJZhQRghQ",
  "key20": "Enpbe3isem1piDUQULwQxYmkQUiJfooqjcxWU78pkpijvUjENU3ujDyyXk81uHm4unvT9VbXAm7LrWyAs7bwSj5",
  "key21": "uD1164j4wVSrFfeWuXXyau4iF6bmKmG9zfmDYzfhVGSvzxp4hfWxgJ9h6gWh5b6PmEuJLmYvEJbV8CesEMm2cmy",
  "key22": "2ZS3hYPwo18hpEuPpQyoCtSMtfe5ku6bJcLTuG8uqbZZzfRtRToiH22qVvxPojLhVrYKssEr6ZBZ6atjbMsoj7p9",
  "key23": "2CquxXb8pmPkmLmSNWiyH8Zzk7s3cf53QLxvUAnmNsYjhahf1BaGb1JqMwj79sNTYNBepwhvF8EoHeq1fy11yPGe",
  "key24": "3qDg9Nrs9XfKJ7hVBrn25tvCkgBLhmXqam11iJL6Ry572tAFY4bFMh7JStoMvDFH2QPj8JcrFpvFKtLwMCqLA3Zp",
  "key25": "2W6KdEwYegvBFB1wnuo5mdWWeCJVQA7hNxvMQwBYU7GzQqTUCfVpvrrjgAJc519ajqBcYW6aLRGftGoPqsuKSQ8B",
  "key26": "YHy9av7Qe4UDhrPaZyohFtPiRfwQyzi68WKrS9ydKPK6L1i6J2Lz16x6buWjg4eBiLtcKEJKVT3adGmdZVA5fDM",
  "key27": "5gMkEbAFFcxuuZ4EMeTZvJYUKBMrqdRSRh6o6kpkPQM3q7H4DzBEXpB4dEtR33TzxFucuAKSKh31Z4dZ3ND4rcyP",
  "key28": "mBetPMuNrbDFfgUkSYvBWCRUh7NXWHGx2CmLjR7xvUptrdfrMbd1kYRcomu7Gc92ktA7MqkHx384naMV7Lr5FGa",
  "key29": "4ndauvP8abJx5CS8isUoZxySvDGrvUaGDnNXBHP1zA7oCS4ztWkKbH3HUFweuMHb2ZNsEyvmyu3jp4tuQMi8rFV"
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
