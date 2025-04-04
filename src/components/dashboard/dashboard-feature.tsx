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
    "4MvYDV6HFvyCJznucRkbcRZupqxeDDj7axHavC2Ueo6hPSWrN96n7BCBphv5vUJAXMeRVmnmZXFLHC6ntDHnrBKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGj3bxENjXnGtfXgy8K2Xz1g6aX8MaZ9x6yP8VcYdph3TNKefsNqxmZveSpSQdxCiCcL5GsuX9Ao5bRuvgdaJxS",
  "key1": "3yA1MFkZDL6RJQfaY18NW3shzACtrbGL8jDiismDkpUowPS9iHiQNEUR41A9Xm7tKBs4B933N455CQzo9Ay2upGf",
  "key2": "4ioAyTjWEEGhuBEAZnYF1TmbfTuDpw2mFZepBF3acvH33KcdEF9BagSc2cSc5wT8SPdC2CLmeGJMnxEv5YVNkUsS",
  "key3": "28Q8LaA61XBAUcS3LFpym2mYt1fGNA2pU3KaTcVZjdmbyiMnHyafYwE1qnJgSH4bnUzMmkcPa9Uqeztaif1EnRWP",
  "key4": "2wMwK9tsLrBRRGovRnZ2oK5YvDGXSMYrbsskhYBdvhxR5CZ8HiKs4JzYDshGfYgn8pYwU3MGABczhaezh1ygvV39",
  "key5": "52dChjZJhTdp7HJ2sN7b1b6RFfh1uKHhJPHN8HWDpmZThEFFx66PWpMoihujZkTPT1zJwA2SWsNh8DEdw7r96FTx",
  "key6": "38TKj2bSCaY8YuFXapVZ5Xfubhfq6eD3KXFcVnMQk2f1SFWCME3mbpYcjfC3FYArSn7VLpiwPkkjfYya3LtyUsaf",
  "key7": "5sWAQRtbUQLy8kD6QFhFQccxt9LaCySERhX77XDhwcoXoPSWgfSst93gFoMxSg6hDh6SmUFyQEMy9yFTBjmWwPoR",
  "key8": "2MxUjPrK5qXxbs5TWkJVocpvnbvHN4Bh3oUNQPG5GMBwTRQGo2Hhhf338HHKjvS2WCvefAqiBFZ8qAj7rvWcHUEx",
  "key9": "22k9zvut1uHicn59hLc9WGSMAdnpk5pShTNHq9NhbzYYBK6589L3uFEjHcdb3UVicJUuKjNmQtH3r9EetPS17BmZ",
  "key10": "3fKDEvF3XuLKTxPrgYEL1BZB4xkFdRm2HSyNoqfgH92QPKgEVgUPZiKQXZpGkbM5mSFo4XsgnbXPsZMVry9ck3zp",
  "key11": "4b45N2qFxQ6sDZ4YjUf9dnhVjraEUg2dWf9P6W95SptWUQy4MFN4kdjdA61ounymgtFjhs1yAJ2MDxRH9V5jxw8E",
  "key12": "drDiAW3HMVzqaTVBHGxo6iHGdrefjkpuUgGGBADfVQotrSpYDdVdBq82HaVFYxddBbkK6ZimZFTeGwbviPXBm4H",
  "key13": "4HbTTcxdcR5trkoYLTcoNwLMKHKCNsPNsvu6MuLMXGngS9yu9wxTzEo9p3XKUYDAehfhrPza1X4pGqjnQedYWx6B",
  "key14": "3VjP2HW4SbhhG7jNbGTG42bgz7SjcPhPxQybpQvbG5be937c3drBRWXDYE5s2h57WSDwYXdWMcUmZPnoYmB2icP5",
  "key15": "3xyN3772thuXBSaAfAMdxQuT9dC1NGQ7BvrgrvXYD92xJgukJPf5uYqBBBQXDTUs8GTmfsFG14kxD4wzdoKEXBDr",
  "key16": "MqjC9aEqwGs4grmriE4U9KxgCRm9B4nUNoyjdMu4EK2Vt466kyTDddnFdx99ey8tFMH9RuDVifhtaGQep1y43S7",
  "key17": "4G1vdvppt3Jo8YzoTJwZTWbbV7LKbdec7bvwedaMd9BXGAF3SzJkU1oUT5idh3NiVtFT8jNhHuCzWe91vxwhKG6N",
  "key18": "AXQH3cNwtjgyceRjyNWcYVv9JmeMyYSUA524zLocU246nRQU3Xneevv8GqhMoYQwtxYjbbNBeEgaSP2FW9scf4f",
  "key19": "67b5ny56gxYhUKnM6eMAsuVdUCgM4AoM7fpJHyksLB4iT8ekTbxRG8Fs7wrBbpQkX5QCFFepGDRikX4vFuqtHHxU",
  "key20": "42Sngu3amYCfzyzT29rJfvKc1VGgsN2DDc6kdJ77xNpdBe8vyTE748Xu9ny2zGLkKZjpiwQduu4szSBxv6qaWXHw",
  "key21": "miupHNtMLroGT7a1f3Xs3SwJexYGsb27BwQAaL2y4p92ew7iDRGR5Sv7xbZnT2RUFoPxP7foGnUpP6dmWcqdiGc",
  "key22": "3aeXTCHUqSK9DkVFakw13EpmXVE2jXNyaegwK5Zzj6s8vq4YCbHZ3xBsrzJLvyZAan25q4xyELWa7HHtHkYJNLLe",
  "key23": "4q6JTBJRqqYQuZSY1aE28DgR44akm2kB9ApfkiUBhGBQz2jkFy8q3BcpuqZxCQbRmi7TzBAG9jSDgYJPizp1CJjW",
  "key24": "RLs81ZG3dX6EvXW1a8XbzyXjyCDDYSdBeiEcH4EPVmdC4UdpoMEe5wVp2xoZURWYvTGwQnCxYNegQWPai6ms3Fy",
  "key25": "2begRvc5wzFFcJ2RMU4LKWtwdxtTM8ny8SESMcL3BERc5T81oreU1DU1yo9PvoCU3XprHENpoMU2g3Y6zNU7eShZ",
  "key26": "55px5W8BZuvZTkTUnFzmsH5QGgsjEsbTsbA8XdofufsbfNeTvz2RZu3YVSh5pzGhw7mexL3GC3DmsvAKadkgi7jh",
  "key27": "bGWE8LEyWDcqe3eXz8CPkr5vJEjRgeGo3aCViLdLUrP6yhyfvxBgr3YDNiwHaW4qquaZySKsEnL2JokyhamJgTT",
  "key28": "3hWPDiA1nx3CA25mG61cp4feTXiY7wM4Fn8Nrcxz5DfghBdY7JB33NKBRkuvBvqMtyAiRLejtv1HH6n7mTGTViG5",
  "key29": "3FWDCkn2aZq5LRPsm6nHAGkFphb5iEBCPc1j5fU8LXNYc32JHV5YqbuM7GzdKw7dkdqyU6JZKTwLESbwKpwfhRZ1",
  "key30": "Aa5seVQx4d9vdTaXVWw1Sd3pqGtCM2CVU2gqDfUcxowL74duUgDP4LN2VNzXLcMZXiEtDv1m37GAdB1TTmi83bT",
  "key31": "HzBpw2S4vCnmCiEmzakmwiYTzAhFi8949FmFKDbnyFSvmUb9XQfriqFvp8vNbkmtSxHJp2eueiuJ39UF9wBEzEV",
  "key32": "4stYRtzKhmzxHYLsFrTxfZWaYoKr8fJKr1db4joBcbmDhExzdTLbXKKMUt3QmYhnYW4wDv4aWbUqZSHSJyPuhmfh",
  "key33": "4ZDvjS98wuCMiWCrqnAKoGLas6n4EkNufxpBH4GCgoFpfGaVKd8ETcbV5Q3ES58dQjXCNSwaGTDKNU5wJnMMmusG",
  "key34": "ef2mTnFWCdySBBvW9zSwanwnz17PAA3Qn2r1UWaHJx1bWMN46pLv6MHeGQqyuk39djB7vohTm4VTGbdyuqKiLBn",
  "key35": "p8HaVb4CTQXX9ABWu1f3zzxTj5KZwj1SoWMUx7RQpZnnfygkNhQFcWKaGpxrDssRhHPubcH7uaq5LM8ypj4Sptx",
  "key36": "rT24hJhaa7kx5cAkpJmezRaQ1vRKki7d24UswR5iGbDvUHo7ViY2W7SKa9FNHGbKRqdD99p6s2eQpiPvtKWEkH6",
  "key37": "4esDqguR3VNYLEDUbLBP84aAWKHxdjTqWG9NJ2bUTNjt3bRXkmxGy4swZ1xFCvC9w4jt4NoGs2QLFPL9AQBoejah",
  "key38": "2iVJsGqx22YU2p5iTxAUzs8pDDd3MvzY9pmJ8YnTeAvziGox84ABWe5sb7i97vicaiJaMBt3DZaAxtzGvbx1k8ci",
  "key39": "52x8xBmnv418dq7BHSohTGW6DCM9tg5CWzgs8m8BV7stDJuTNoqQPNhromTqgYyXYpFvYXN7ysHV68BCypGvaTA9",
  "key40": "3B3Y6XCrw8Y6tB88cNAFaWFTDFw8j5JDJ7ZLRW6w9gSh4kCUR3HSj7NJvRmGepNyU3Zfvrx1BaqqhnoMGRLisN9M",
  "key41": "5rPt9886WUS4ZD6taLCV5LFp2sV14VhhYUUs3miNWfE4TKKJJ7RRtarH4RpFKp1fYYz4pFKzs3SJaBDeyVMFookf",
  "key42": "kWds5oWJaM2WLiDd31o94CDZ5z1bwbswaVeRB5iRP4hYYZozxkKsMdGhaSwGUbvPYcKZfrPeFfw3d56uNhympdg",
  "key43": "63UUVKYg47E7Jwns6XUBhePT1VrCRh8c1AcWiBoRzhLzmeMCvsxXUeFtYWrbY69U4unHZDdZ8d9LXPJNsWN8uyLL",
  "key44": "4FF1kFQom6U4ZbmwGTh3fR5SNCjjrE1MHkkNbdiQF1bvrtzdCcdyeTkndCaa8jf2f8UUiS3vuadjwRpwhjhod1vn",
  "key45": "cTUPC57N76DDQpuDfp1ZckCuvMEZ4NfeAZwk1Dwc61NAvbncM65VUWXL8qhBKPxSDpa8rAVrjq2LLvE1dGdyxVm"
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
