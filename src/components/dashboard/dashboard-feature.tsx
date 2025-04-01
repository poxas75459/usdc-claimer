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
    "BxF4uncwpJ3xGYoEDzDEckk2M5pX8veLHKy3UxRceVwsEEnZai4oEmXumnXFoezFCNYztJ6CYLRCdGkKtz1vhV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sWDpQvQ1SnoUH6JKRcZzCp5KwgZHi37AvTWU8BbPzuHwmBiZb7Afo7TnTCksG29h2cSuj7cowCs73AdFHj1MaC",
  "key1": "73YwTQ8sR4QPMTSo2MurR9SZzzeSHKYrNvRNWZJn3tjFhHA9ycCvaGeeCuKJEFPaTmxs76N4anoRC6CcqLu8aVB",
  "key2": "4b9575UpuN71B6GX7wW4iXXWXsq7kuptZYgkAbaxafNXxqsbUxfoMybFufbLXaQ4jbTuBKaBzHTi2U7xWCXupbzT",
  "key3": "3o45MtkeT7w6symfeYdP5wukjpE5j8ieLweKunKWkf1u8UwsLf3iHFEtdsK9iATyLTuuVw1M3PpgKNtjBd2Le8VQ",
  "key4": "413BdG9smrQs1o9diDSr4bZyECD9pLjqrL7YCx7sFbsshmg5HZjGeMZTqzjr4QX6pE2xan9eH96EQfNb5gASvBjR",
  "key5": "3chzgQ5Ly9YkxvicTtY5qmLBVR1dkgkZMrmRbMnZsd8E3WgRTifZRbSsBjyzB2sZUh8mwuX3o7rm7UriwfkRWvxL",
  "key6": "5P7D6scqJMsv7TokocEK2SS2ZECcZmcPqUFbNSwVxP5nyUSohGPrc9Ke4ZHx6L4ENpuvvsbSg4Qq3o2unDoT1cNF",
  "key7": "3mSupnyYZP58f4KqzNGW7ipYyboUwMSBihEEovMkBXLSsgkJL2ETHQYxipSqHTyPzxHxD6tL6fyhCTsZciBqgdiW",
  "key8": "34WxLxRzEzSBhHPEmSQXVTEsJ8MdFF5z4cg4x6CT3xMV2VT223Bew3ULyrW8prKFmL8sxMnNJXRDBQLH5XT8qgvK",
  "key9": "9uBZow9KsNDEM8w23q2j7XtVJEXhyfjDTRArMJb88FSqz5u7DJWdbbeTiDbopiSSdgvhas67n3JCZTbvKxEcAB8",
  "key10": "4nzBpVdMhZBixEAauSSqzS4jbAxmuLxSjEoNQ3ng7wkBQt22R9sx4bAdB7gUsadFp1FEj3tZWrF2pMWWxS65623r",
  "key11": "332vuo9F8Pv6hM5of9KppTDxaoQyfyi5tZjzNRoWHnoSZABAbXTEMesHW6xs78ge1x2ZGX6iyfwqwY9F65WA5LQM",
  "key12": "3wHKaNgFHfDX8mdhAKc71QDeTvjukvaSCA2eg3uxWz3NmFmSSmm9kJ1ZLPVpWiLdpGUvHy6JBGmgqSuMkwTappft",
  "key13": "2gqpCX2EppV8eQsbagRSoaJeWdaj5f63adfYBF79JgNz3p8oJKpgJfGvznqb6xUEYA5FSCNudm4Ufws7pMiXPv8R",
  "key14": "5Q6rGNuJZnsghVfmp6zJwx5EihYmNErqVkzRJio6bAqkMM1yoZvF7rqkYUjidGhqCPYqtZEt71YP7C8Jp9qdPKDb",
  "key15": "c3UYcKUcMjrNaDpSANfsBcihgusZ8SUgVzmyxRptrHowEM5NgLvVee3BoTWaE2y18fjVzxD8ktytv4dJLeK46ap",
  "key16": "3AFApKbHKQhMthta1SN9KTL5a4r4Q77PX8npXErey777wVunWcifVk8AbfKk1rZ3HSUSDWjiCRa9cEYnzrjsRHRj",
  "key17": "4QkPrr5bsYeWa8FmXd8hMgKKvBRroqqjZKo9Jc5MpCSPAbJuHt3w2kGK7q1ZQ3886zi7tNCPwgVJxeBoG58EY2Zc",
  "key18": "5TEfrpeFi8AVgd8tvA2rR3YWG79Z7UmRj9jn5zD5tsswjGzA4iHkai1NRqtnCCGmxjeJcnADoZB2GJQHkzzFb2dE",
  "key19": "43BPFKpnwGTMqPx1joScu1tuAeugDdmYUKGakGoCzwcxRXk1hPzexiDfmnF2J8nTGMfNsJqD9wW7KoVFsgj6a6MH",
  "key20": "61dG1Uo89oNPX5FGjH9FEvUZK8mmQxgBEr8aF6hS7vfC264Rr2J6ipvBqaE7rg4vRarXuctdyMd241aDsrgCeCiX",
  "key21": "fBL1C7c1CkQS3vYvK9naJ9MjgtSBVw9FbGniSi9T4szdmaLpxisbeEx9g3b5AWfACzHufTcFf8jzvVXi8Ei4YdU",
  "key22": "nNdeGhZjVGjR4yzxEqCBRFtb9cYjRDyeXAdL3Spkv14xWyuFbyq2Wsx56C3Kvig16YyvmAEAHMzwRVa2CzMh6Hw",
  "key23": "58ZrJpUPnkz14WsqeBWdvbFbvFm3Tj1S8C4tmyy5qtuTe61JYkza9umKx7UFm3SqCX2xt7Tcwx7Fu5JNwinqSnni",
  "key24": "3UYkdnqmv8C1gFrByhB5ASMJDBdU7DvmifJKc65DQhhUUifdUyFsgCKro6PxPwwjzg1HY1rZhLhgfyGkQQZEZyxq",
  "key25": "4R27f8YhG8Uj9vqLBYGgSuwx4YtVWDPHL4CRo8nstwmSWvk5FAoobL6xUDzzQJ4ZT3x516M7cKAbS8VGoQCuXZHk",
  "key26": "5u4Sc9qrS6bwk2M1iKDTrjtYv7ARkwaEFfnwaCqryuhS4HfzjFNtyRr9Bxq1NVXGHLbgTyebLpT9gnd4VoLy5UMh",
  "key27": "2SXUVDjRV38E9oum6oRLUxShLVBq6ufb8b6hy8cT8CjAdMNozad622kj7L8AVY5NTKoRX83eSPb2yQH2MFiaf2w1",
  "key28": "4yNs7FQyWbuQ66Xb1bSSmNSHvFxKrQeTnUxhZdMiYc74GPrz8q3oDAWXG629G5KSPjxgCmfg5fNunELWySpqLeCk",
  "key29": "2VPjCgX6tcP1fv6K5W8x6XXxUfq1DK2C6wgWiayW9pFZqA4q447gem2pdLNoVmzfzVmgXFbRxcjmJaB5ai4SbD2F",
  "key30": "2E7EaFDsp8mupdddkMRANtghtx1d4GYD5sZmbrdvxkDV39U9LPWxk3BtAQ5SUFLNjAtmtQaDJU2EgwXLz9BRKE8x",
  "key31": "26hkkkKwxeMhcPhMThgz6wJdR1EzwK6pWEJ5xKt4MxmszFJVW8fk7hggGqQavdP1S6n8aFVt66P5MKjkscnX6sdA",
  "key32": "2ea8MZB7E5t9oZe3tNHCC1uAcsm24WESD5bZUQiBV11AJxDzQu4WUJ88a1NihXBRnFVzGudK3VcVSCQqgGMx7GuT",
  "key33": "2bhvhpG8kS8Q8tGbnFmm1n1cTKhc5JrtDVgEoPq6qYrFx12LbA1Ex5X1RnEfZ8HdLAvHKeyw1k6tykj53UaFAEEX"
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
