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
    "2EZRVzeBHLE1M91FUg7pjxT6uCxCgEmrWTnp3kvtQ74oQXD9HkxRf5vEc9kTgHZDfc9gPCGeUJYxbL5p6a82dQs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6271kKHUBAcnoDCtjEkyn8zGVBzRfxddK9aNLSjHBT1z8fqchdjyYLpJ9gSD1wMHatjW5Xp6cCCV32zDCSkWKdxo",
  "key1": "4UJFfd4Cj5oykW6PNNA1gmSADs67ghsuumVKY762Tsi7dChqusUQ1j6N1k8NqL2bsSKUfxTSscSQMEmUrGXgf3hk",
  "key2": "55YQ3CL8nUeMStMTC2KKvTMohZt1VEzQGuVwobrxfFjgMjeYAJZD8g1Laq2k5xiZPJd58fV3PFegwU6rKT1XLiik",
  "key3": "2n6ZRXnmrdw8WobLZzGeHFr8CvtgQvhPEdMSixp7KbuxitojjHaPvqC33zriuCHaoVMeeMZKNGDL3P6zeisebuCA",
  "key4": "5iXsud9EQb9TZxGhNjS7KuFTHMcehYhMwSGp9b3segRDcdQRLErMytgmyaLRR1u7D8mftHwimRXrG2L1VMVu9ccn",
  "key5": "3DyGdUJUCsnNavvcP7hG5ix8hZ4oAr99xWubWpCJceYtZCkB5uLfbizRDjfodKhTTjarTHqSSwyebPFxUWQCPkxT",
  "key6": "3qC9gTjGWAc2WjQoT3q1QYm9ByuNUn2UakHpNCjCYTL2yCUXMguniWXN43rqk1YMNuAHjw1DShuGh4f7LmNjAeAg",
  "key7": "4rKqMuFT2cpLF1ocYbJHfxcAzFNeKrT1S29cTvYSLQUY5ii2ArFauZCEkfuScLPz3zDbAMct5ASq9iA8S1QXkoK3",
  "key8": "3viV5oER3RtRM82tipAsjT1URb3hPCNqhaD3Pfo5w92yhLi2sNeCdwVwT9BEADvGYPUgL3atDkE6RRUYa7fmQPPu",
  "key9": "JWEPpvN8Xi6oy63NnegB7jVqRRrBTPygsfk75ErXSRiehELWjF2ht4j7DWoEtJKThcYkduWckXFRmjiGni8YZr2",
  "key10": "4WjkVkGoeuqHVMPxfcP7yPevJE1VmX2gxmUxNAPA3x9g1W3uswMNRcti5CR6P7AtMHWmi8ft3jVPiF5WUn5TN9M7",
  "key11": "3WgzDo7NrznstEDDFYcdYyvJxCWzosWbDSMxaNv5rE7Q7XSaMYJ1X5NY4a9EUWfqmm5Lp5vsjK66wtKeivMrbaJS",
  "key12": "5P2rGFHurYq7z8CFrYgSm3j4zaEAeiwSgeHCoPR22A4DQHUqtteMgEZBuaC77wAPwgnpkRDGZHecEgu5kh3d6Djj",
  "key13": "62WaFBXDbXcrpVE3Z9dMAcarSqN7ndLSCD2yftgnmP77PYVb212Rrp9eviBxetGM8zbCNu3MGQWhG4Z1rq6S5U1F",
  "key14": "575TX26g1cMYzP9PKnvrBkxg3oPrzYqEb3rwhTpehUz8Qn4gW11odqFqP3B4Bxg3tiFQxSjMviLiY4EKKkHZRyeG",
  "key15": "2T1HHVp5MYNb9jKtqG2HuiH4DBztngjVUuLRUq66oZNxZr5s1dQGErRfECPHuJXibVhyDD8TGhxthYgYsB3fCczu",
  "key16": "3CxHDN7abQ3d1NQvDxjXTLbNjCCfaWDd51Aus5Ej7v4ZsbfjcvfNZu6nRkGJaBvaryoS5SVYJ9k4t1EjtWUVA3CF",
  "key17": "2amgyEM5qMgioef2wvqXRBxH9u8QNxd5FqPME1xSGV1WaadH1Y5EfTp4HFeQJj1ztEUJsXuZyhuzVA5sxxCqCRkq",
  "key18": "5XN1HrsyjKeP49DuQZ5BBEXvAraWvr1DXrVFGLBMWsTyo2KGtSATnwE4JBHEieet51GVN5TyfjaVtw2idRCnkiwe",
  "key19": "49YDVyPRow9Lcs8nKLVTPEgUfqJtEnMEfndr182XwSyLBKBb4KjRap9NNxNDarkTft1h2sGtGHKfJ5KWLYo1TgjJ",
  "key20": "2Z8ctkB1vYcFKveEKN4kt53JdK3AtU2k1k82R2ENbYucq7RmZKg1a1eWQsedLShyaVFcbqMX192oRjfsefTQE6NV",
  "key21": "3n7pj8zRs6QpmjK95b8T5kKjWM7PZvg6zHnSihVvZcCoeMhLxSD91cFEZhqVfyoDZ6ixwZLKePw39zoBXytXksb5",
  "key22": "QJjc54ZxgHvSjgiRMqt12iRHxnT1JrtKoqtCGdi3s1qq1R4BgVHDFjLhy8dZL5WYtpD1qadLsCMVsYQucYgyTec",
  "key23": "51ccbXDdXRJNX12rf7Ardikhsc2fA4DmhbaGfxRbXFNuk1xaXSt3vKuFbbNxhEkcitognYGXUZtaArFaxjfhhUi",
  "key24": "MavY4UDZzcNFFgSustt27YKcjKJkCbYnQ29BTPN6FkwXPQkVbCr27xbCMQTRxCiiKVBbeHw3fgiR3ZACAq8NGoM",
  "key25": "46Jq3CbKd3XMkVBcJYH3uf52FzThR3ipmMHaqmA9p5c1EWeiAU5PWrBPEoWLA9vU5WPff9pk5DV7sGTZCtBonJ3c",
  "key26": "3xxRfzkH7npaaJe4sUbkvMxbvfgPtCb6kjVnuZTr8ju8FzU8BCR2AfS4KowMYc84h2djagKGJUTNq2b9DqhQYDsp",
  "key27": "3McS7WFJee6xH7bpHtbtqWLV6Td6MDsGdobF6rScNyc4Z6SeT8hr2bYWQh6McrQbGP89pifPDtYLfZ1KVdL25mM8",
  "key28": "22ZY5966t9tvthXigiW8VjomiEB9YPQteanhqWgVNc6paKBGUPBCZp55fNRm3zzCoczYeJ5k5DhhFi4CHAtUGP86",
  "key29": "3jttLRXHCHd48e2j99189TxVHrU87djeNoBbwLMJoJibcfSks2KX6xyAWCaGgmxHFgxCNzRcYjBEiEkXsb17eim8",
  "key30": "2kax4GCFVa96ZdNkJNhR8fMfD9ykwPXWAPukRAWaGFDDxjF5pxjGtEnzHrn1b7EWBTzs7FAhqd6m8j4LvttPemuB",
  "key31": "5LowDHyjD3dYJscmFvWKkU5a7LSgBAbY8HQ4ZweG2QkzgsLfTDKp2cB2FT9j7HbmhtpWMC9xngPhRjTc42wXrhQo",
  "key32": "4hJLJdWT8E5j1V9d8m4CNSEcJ91jrjwRjbC7jvAGypPA5wzQo2RururxnpNzE3bQ3Zmx2hukgvVJTNBYVFtda2aG",
  "key33": "4ja92rmcPreDXvFavfGB9XqaehVhF8jkkdRRB9P7yTacXsuUuYR8yVjnVHp9fYdjFZrWiYfGgbe9wHT5keApXNGs",
  "key34": "5oWFnEf7JsRGTrnNTA6DAgGPXDBGu5MFPpaFWa9EU1XoZky5pZvzMUiiBH327Vjae8M3RVa3DiYLwFCFG2oHFMpP",
  "key35": "LqXZrBducUKc9tcj658t8b6RXC7MrSGFmhmg14vvoGHsVzosYUqZ4ARuBDuzN9H3niwzPeMqA7hmuKr3r3ouSDM",
  "key36": "4WbVZuGb6DrHmwTnfD3v5D3HsyVFyLEUoT3o1AeGJfBTZ6vJjExKJMdCKzoHuKGavZDW3wtn2JiR72HfRNcm8qhx",
  "key37": "2PXk31ii8QgfgiYuegsehPbpXHagkx4pdFPmft9A5uu5LB8n4U5y5FcywPYo8H8FJp3XeMbUnXyyAg79NYPaBopM",
  "key38": "3WoWx838mD3pMFeLfwHugwZ1zY6pW5WrzrYMUNmNX9ESqtaeEoZYFoJhbwQ767BcwS5v1LbTnRHCBUEbmqujULH5",
  "key39": "2eV8kUYG4wNbkMBDfqJkyEixwuKWR8MQGJKW6gUgMrjJMwokhLVh5wgemFdNXwrnbt8KmEksGWNHBamCufV57cht",
  "key40": "2mg4DVhdVsfy7DvN5Vvy6aKoP33cDKV1J1nysdEMUw8SCb7ojiCexqvyeNRwWYtJRQXHNENBa1WVHeJzqLS5fW3Z",
  "key41": "SJJXfXkiaWDFk2ZUQcZ6EMC1gKZqF7VtZhXfCyL7Hv9zmd7fDJ7kVyvqmxucmyA4HqWEcgEuAera2TFgZBSqeyQ",
  "key42": "4TiRumizWxLKk35qqFgFfW1VKUKWrypHqgepWuii5oD6jYmKhZzAExt5GA1DDUFetyiK8gGVCpMWUUX2jXfq99ch",
  "key43": "3qrwzcypWRisyMo1ixwAnE1coGH1t8WttfLAT8oQQCtN8Hsk5YmTfUEcquwhTTYQZApkxHaCtgGJLUQ1aoQDiTFS",
  "key44": "5umT9uuZZ7mX5JLijQ5yB2RHBwTqxTofk24daTpvawjS6cjqVCS9SpNsKuLYxzWjPQ2iJmWSQZAj6ZsFnvZWtRTa",
  "key45": "3NzoTSX9GXiqzyyrha8eNJJb3SJupi8EAmnoUT1ryZKDH8RAZ2aDhhep1nJ6HmYpzaRPH6hAavVFNqWzvz6i3tci",
  "key46": "3iJKfd8SguW3mzmLqPjRvqP1bHkFiLVTsQJvtEL2fLPH1JqoCCA6ojr9C14Xh3SKRtKzke8WD2RpRNRm4Wrtn5fb",
  "key47": "TdpMVx4Ay8uCMCuTRaBGS1WD4p44k51h8nj2oA9kd28mtg6UiZMYV4RcRKXTpaqX2RNYhjDMH2vjnrvxWREg1VK",
  "key48": "4fPJZ69zpL2fwymG5vTMQpJA941kAXkT5DnDtEyTstCWhMo7AgjrYpHEELEdG51ViXFtprU1j4J6ZtUqvKLbkVi4",
  "key49": "4B1w12GzXfVEoox96dWJAvcfcvss3FjudUhsU5SGFxjTxEUpC4ctdgcbWY6AERP3H6osiZsW1RDn7ErGAFf78rvA"
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
