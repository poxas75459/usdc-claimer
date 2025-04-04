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
    "4yTVL35xqbgjzW5yafM13X3x44oD1hkRc5cZmfn1Ban8hx2sw3uZoD3YmJZDKo43LHJaSTGS9tFzWdhUVJykoqZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3Cyqffxp84D3dSXVvoE2ZDvykx8grkjJuEpvLcCgE2jpS9ZVCxrdubWvLhH739wuEMeJkac2ekHPhDBEYCaHUm",
  "key1": "4o8mL36BX5kBbXaW9xRoHYdLUNx73ZtfRUdUDqfXWiqJb6sQUmB7GbLBkdaiB1eH9RbwvcuryXmkDawm9Q92vTgg",
  "key2": "VYkDYeXCvp5VvCCftTLhUh3iisAngkJL71LV595jkdpn5CfXc6PrahQn8jgvyBtCt7HkGYQnzn9jj9DgCG3Pf7n",
  "key3": "LSRxTEKEDxogpwQsBqWiS3KCVC4SrFCXYJYY2dR29qsRPLqjSnimyFEyBq9q6cLxKaPaVcYTLFV19LaqhT8pyCa",
  "key4": "3KzM5ZsdoJbUQd45XE6J7eh2tL4xKzZejKhpKeRtSLEnD9nBZvdH5o2tRtgCarr68h6LkVmFohXXCvdNiWRUBpcg",
  "key5": "3vFSGKWRjJmgJPg9dkxmHgjhJ8tYSmGSouNxJERfGWefG42u5SPDnfA9LTyj5MTwp5dqQ3dQ4Jeimkf1WsAhZ5wi",
  "key6": "3vtwpF7jVxqTfLJoC2ooWdBKTwKxti3q8bdiWLKK3WYRVDcVYUEazJ31hgJmP9pf7aKLpBbBceakbp8tiHrr3UmK",
  "key7": "3X15MCM2AdT9mrvgpTpMxVVCc7GYbS7FZZGMyqUJwDzfZ4Ery4DkcnqLo8mnS3XZD6YfGHuTpErwkEQT4Geyrgy2",
  "key8": "2LkEwbqbpPTJVmPFZcyzpQ8eFeZGRMFqMfzjiGMdTz1KVxtcuQrj6sxwbmtYqcUCJgkmk22huSHFKb8jyKGoZxSo",
  "key9": "3HSEg5UW8aE846JRChJ7atsP9vCAsc2nkyPF2guhu9vGmKvnDguET9YDK2sxK1hty4npnBqFAoKgUuRRLtEwbnx3",
  "key10": "4K8BbWEmwTmYs2xxJsCQnCjXBBLBAcWPhrjujMDmmYQudwyMafUdg5dVyJ9DR3xA85SVXUBiMByY9GEkirzZL4dH",
  "key11": "5Kh61U8Ymhnu2adeBbV6QgqVvdj6tSWVKtgx1irrn6gQAvjcLj9z4B54a7QrEU9SvbeWtHneGVbkzRHut8MnkDgc",
  "key12": "5hz7xTez72kx1weM6StJeWGeCNTez3GgZALREuGu98jAE1Z586ZrA9DToBRxjGNZXjjwDYZMyRSQiCrb8N36o3w1",
  "key13": "3ydhdRy4ha7CCCCanN8xbaZThG89E9Ryyh2rENT3cWLN5SSrxi1iFCCrut8dt6Th8XXyR6C3nURU6NRPNynxNEAq",
  "key14": "2xihXZGLTNrJGXCD8d99ynd7BQhGE8RLfVcKTmMgp6pYbJ9H7tdwzpvCtYrnNr9Zkutn9oeDWkGfHiG6bk9qif8h",
  "key15": "2YzA3EJbTcAsF9wb1gjKdSBiwMn4zx62YJUaWZWUWYfduDG8Q3fo61FHKbsVB78zxs8CX6yoJr2K38soecppnFyD",
  "key16": "2nJ4iLKt2huCQi9TWbSjRhF96CCQ4Y8NnazyFyGjnMdAJNcXRKZPnj4HWusUbkkXFhe72pBULQX3TytFm8VCT92V",
  "key17": "UwgapjfxrERe5pZHyqe8tZNFp7vHSENxiKruSEm6LRUb9Go5RCtMvP9AzBiLbz6d9t8HZu25XN3goDKivGv7bK3",
  "key18": "2Fue41V217pHJc8QQCc3A3yH3hgPjZ8nQQbeysD5358AeXgbQKUHSycFsVPLx8cvHSkCVSVo1kN1XbxdxceD25zN",
  "key19": "3yERyZkzashJviMPXb1jZNJdHKieCh8TBhrNy6iRcddPcfBnKPmBzyEJHQHQBsV9m5AKXrk8gZi2LCC7o6p9vTwT",
  "key20": "5XPh3GThQaMA5QryGpK7tu1NXkus8XpxdKwfDRURRLyx82NJXCdajM9LosdrV6uxhvd7Eft1X8VMqjYYx9xJkkjX",
  "key21": "u9Yg6a8AEdvDyKN5UFt24K2Ui77U1KXn7wzmviA74NdfC2ny5k9b6KVstbfLpEu4Qq8uzUeNmE83n1b8zB65fwL",
  "key22": "4FDKecCB5SXN72FuNDS38ZVALX9GkEvhwfHePPq72t5NMM4qvz4LEsRjcGBJHRCn2VybroHDAeBMVUZoCMuE7qXf",
  "key23": "4sKrrEXZeeZknvuug9AGcCtFAtSyQDfv8j2KdwmeWFiPXBzM5Czy8WTK5Wu3LrdbxD2WRiBHroDjSWwggzEHfaQ7",
  "key24": "3wZNrmKdp6EBmjbyhMDeyTNtk1KuDUgAQXA44rNmj4w9RegzFVXvJrW8JFWFZ44mnQrNuKmERJvSdPqZ3rdgmfMd",
  "key25": "3q5gaUpJfjN3H3BUa8GakL1Xo5tnELsuEXhmfpPdmWmbJogBD1uQo8Pu8rduBkTZT4gaC3eGGxpmM5eLofBKjKDs",
  "key26": "4MP7cXhimB4nsZKa91hQyTPVkf5pqA5uLLXPbxVYCmQWw4nC1rLkTwXJPExzzAT1kLXpnHDTvBurEnhdNF2oo5pt",
  "key27": "4jDKmcuReW3hKZ7WfqbKrPq6p8hcfv7b348esfkDHfE2PzQVpQ2jtGMvWDFgVLocKXZy7S2jcwPFu1me4YhZEwJy",
  "key28": "4RHZjWQ3VdQxsA4LND9prZWyXKcVQ5KiHZLzQhZ4RNbZ4nEmEqsVNVyF2mdUj9HXimxN8BY1j48SCtdqu8uxbJ13",
  "key29": "RAY8vQvqYJLKdfdsUXJinL4nRA5yLiKgQQdrQSYPdVJ5rs7mijeNKx4mzata1XQbkmqoW6fLbRWqDC1heGM9Ui9",
  "key30": "249iCXXgCyHVaYff71E4X2Z9i9cv655WTZ68kLxCDjexr8Vgu1p3j7HnmbHk4BfKtkm3bjxAmcxrvffb5Ex6UXFX",
  "key31": "rkbrG4jVQccu6yf18J7s3MaaimD8B4LuyMpdRedAMBkEhASptkqvYkX1tTwHRPtWH7so8PkjC5T5PJMSPhH9JwR",
  "key32": "PcgCSJshbgX1T6LFZEC85tFx27oFD6bWnu8KCJRVMJiyzhnnbEXbdr79VZWDFAtawvtRTUnKR5CBWNgL4u8eAFU",
  "key33": "2FtXXPVAEfBcZwakFrLTt6wQxJ6vaP57jgGXGnkm3qQXpN63CAHzrK5PvhFoqP86P68S9p2Xm6j9Ah8531ZY8WH4",
  "key34": "4gCwVNcDcxmyqteoYfTwNkoGxwWXjwrV7CKwtwS5CJqFRE25dZvndYJ1R1ZVRFRdSHrCWKY9YjndypeVgZfD8x28",
  "key35": "3Vn4t17AuxdjQyaY4bzWYVraF3u738Ki5HQw5zbEXDiLPdice43ySQha8eMs3rxGKiUAGmieSMNe7zvukGHtiXYP",
  "key36": "4GE3rEWdykbz8JcRmeG3V83GWhit2axNhAx99TkWXtForwTWbaxyV2HpAzAsucQhhvH2jrFivHDWrjdWHfXdHKnD",
  "key37": "4VayknJ1WvxTMa2KvGN3xqmR8bQ2Pj8aioA3dkps5RviU8m9KmYkjmfqMq6uzUvx1fLc8RL42QXyit9Zd15Pifx2",
  "key38": "4hSfJJeEzsoVgfPL9DdYrBYJHmJNruWEDXbp3YG86FXCyWwnpKvPT1nKdteGLkd5RosHVmwU2H9pkAthxnXG1JdU",
  "key39": "5uvE7nnZBDMaL2CfPNNxfTPm8krMDG2Xj3i4tDeoERXbbhyjy3614baVXouiNSm4WpSWZP4Da5cY6RFjEJ6bAaVw",
  "key40": "rGu2FX7M3KPN768ke5HoxGMeNirbnAVMdrD1FCYDuUFtS7GbqpoyAj8QAu6YCePjucDN9kLvaE2Bcf4Ge7Pyeey",
  "key41": "3tacPojZ64GZcbMjJtYrNgZwxcHKjkSnHD8ks1Vs4QWJUwy75xHfXKSLLELwNmNgwLc41BdYVwFMXDfFZQvUBumU",
  "key42": "2kHmbdxiNrQLFVfxibyyKsFRzn6whGh7p5frKg2kd5iPEEr4r5ZW4AzaXwJr4gz7V9oSrxVyvTBzPkca4CAAXSVv",
  "key43": "52YahVqd7ayYCsreA2jsHd9VVzSAnzvYEeqhTwWwV3FE1wYQUSLfJAemSNug59rVMkihrWqiwnwCw6r1tXQprpDD",
  "key44": "3jVnUYqYd8fRGNyu3HPQ4QShLLDTLBSBiTYpofWarZEU4rvgmjfJE6SKTJveyjpbvs1gDKXtkR2M6pcY6fqYXtwV"
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
