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
    "1836NgYSTJH442x8x3dFJty9iX87Z8SMeZ1wcqd7WqqpRgjerGHZxmyyvugV5pWAvoD3okn6VWJ88V5hTTC1LCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31z5CxEpv8FjqheRjM3uaj414986TDw4KWiT1vvJqvc16gUihZGjjqirwAdxxYGX2A5FEwuneJnmWdjM7oahD52k",
  "key1": "67jPdyqnskGi7NDKBFGj9TZby9QgJ4fwudhs1zbhV6gYajwpFux4vnKqAiARxiP3mnLC5uV3HM5S13Y2tabZZkgk",
  "key2": "2DhLLf5BU8r6UL4GF5VD4SdgHezavfAo2K1HYxTUzkXUYXH7ciXs1xp4TTF4XvFF33n8yR1pmX6WZNccJ1kgupj5",
  "key3": "3yG5j1jBNPgWNfYSSnrykzxVBVpNFBBipzcjvbS2s6HanzsgSiehUytSnCdu4LrUkqScvvqB6peGgUx24Tkai9Qg",
  "key4": "2rvx9F89na4vqUoN1jFMf8oC6PQhGFANmyTTmEPM6w94uRuYQWDuW9ZEh5xyku8tPz7BU5iY6gDebsoFxJXgXQzf",
  "key5": "5DeYgci4TFVKTahc4EEiAvADcJVXvrJUycewCyfBa9mcmfjLP5VEVmFbHE2xzyQ6nqn3CFHquotnoGEK1P25Z681",
  "key6": "5Q8eKZ3Uac1FrdQN9HsptjouaURA2MFp9ed5hz7DQvYQgU489V6akYw2Mh8uMt6NsJw1uCUqqdo8JvFWfg2VSy6F",
  "key7": "31o3ry8nFrdeKRG9pstTK2krPA7Sy3XVy8JdAqdAmAmahaAMDwXfcU6Z33aTwMdkQNBht43y2JDZAeWPTMNufwuA",
  "key8": "26ELQqd279D4Etr8Ly67QgYPvAygPnp5raGXeuNfvR1988zsLqChu94vu5KBfhjg9Ua44fMucLM8miwS15BNtkzd",
  "key9": "4hcWq5wUVgssnUZ5fsE53SK1BVXnDXcC8rFUTkUd8KsRGiY8p9wz8kewtTN863rzXHZozJa8UXvZ6bHNpjogGmgF",
  "key10": "5mAxseGRuvsnfWap1n3qQu5d3Jubjskvia8sMB4irxfBtnd22FZXxtknCJnWnw9BMFNwKwgbbUWig8SiGT95Thqj",
  "key11": "rwEu2w4FrZt7bnKQxiRrLmgrwKZ359DqCoudKnXZ26Z2SGEVy2ojXmcjw1vdtdrkAoZEHdgar1zJiSchL6eyQLS",
  "key12": "23RDLMM3J6iXqubdriGgg5XWCDJE4QoiRbY8stZTvwUV84anXpZ1qQDnZmTh7xmsVjgHTRoWTFrgNQzVfkkrTpQz",
  "key13": "2PtAUXr3dc9Su1vDEmgt9KijadGkwpaVfKgeCzHcwvoaswGeqig92tNK3o1yX7R3xCNu3XMkhF3AZZQJ66E3s8mh",
  "key14": "4uTBHYTYUaLpkS6cztUgQ2LTmrjHzCkuH1YTRAqnmixkbLhztuiLRUVZLEE2wMuyvqMpy7aiWxcD2Tu8jEDV1S5R",
  "key15": "ofdsc3o3MrWmLCj3bFQvjcUGswc2mPPf9R55MMweTLiuZHC4Fi8QvbDNm4iFhfShkZ7hasd6GSBE5xxUqmuTvdA",
  "key16": "1jVMAohvpPdXUup1a1frnHUnaZdcMa14KTRw9xy1n7fzvsEtynY1edY9JdKcKU9VUTb5oQRvrJFL5szsWermRTj",
  "key17": "gWCmYsfZP6x8Ba8zYjRMhvS3JXdPYD52UiYMr97n2wCLWxEskYrpUEio7KahD37oyQXMsX5ZrdTvy3H9AeaKohp",
  "key18": "QSQzLHqqC78XyAcpe7cK7MsciWSuVWiKfdL2gk4BhNs7C8hTb6Z6MDqWH7z57LFTXATjcwSEVQR6jEx3uDFVSLV",
  "key19": "5ko82gw4z3sHRMmMPPfwKJH7X5QMsLjT88bxuUfNk8hipuLgL9VPbgeaUbeyPD8uGZ1LpsWoNdQ6b9tXn2K9MfRY",
  "key20": "4BTxkfhzByUBxEUEHU1eMLr74bZGSXqpsTMg9qKouVWjnQxTWgZEEjv3KMQ7C8q8kRgk4y1jnMLmeHP8h1YRPPwK",
  "key21": "fdBYvyymNh8en5EWsYzJbTRSX2HcdDti7S1XvZNkhUBkMpjnV9fsa9Pc3PTpH62fwYwFDkye1nfxe1KpPt66AQ9",
  "key22": "2NZxGrrW5Lrg2eEca4RDdLvgK4qnLTdvUTjPTto7aw7pXJsNBZrFJyJMekFm2uQ4iFnfaqKMrgg32TDyFYz2wuhT",
  "key23": "64Uvh1KLoSAAA3ciKzwNBS788HUvGQz2eBcNREyy2t5RpyXnA6dCKuSDcN89EgVXRwn6pGCUFLphM94zrcPrK7KG",
  "key24": "k75urNHnBVqC2poEiB5vePmrQ5SpcfzzR59p8BvK5B3vUMAFnrYcS49QeKnV81gStuQcyF7U1hD8o5EaTVDNmKb",
  "key25": "4YuM3MfYu8spz1s9agBq7ER3tWuN56jc2AYD57cGoj8q2FvyJ4pB5TH1WQzYYmTgUKmCHSbvk1BgnGKxAwE9kM77",
  "key26": "3LjUgoFVJnXtsv1kNVdHxxp9fdVB3vj4BjxrsQTR1XMQgicZEhKah8rQWrtae2LVwKdPyjNNPVBn91Y7Ha32Ruwr",
  "key27": "PqGJaWt2iASH3hQ6guLANDWT6MKDunDQm6smaDE4YRxwratmFx9q8CYXwtRLhqJeBKdNiz57pLTrHCGDzQuxgCX",
  "key28": "4HLEwKKd754CntX3vWKNzAQRp8zFHy1yDhfcKx34kWd5fLuUVzyUJyNtu2wdmUD8FQzXLSJaaniMWYsMW3Nza89T",
  "key29": "5LvpwvFDhRAynvXr4pYjNRAyCsJtCb9n7EyrRgDs6xLteo2sC7hAy7DTo8pmnBBW3msCMTwS5ywg4FGxyUA5egky",
  "key30": "5t9SqkWyntVS7v5oo3HSDyj9VytMhEdWf2z32B6kiapeXY2n1kFt2eQKfaoyHC6L741fayoFF1pd5oGM2T1vM22r",
  "key31": "64WNKoM62xNb1PJ41eEvv68Dp7v3TkwTL4LiTG55yC8wrb52n2JVULKGjqyNGv9oyetNeWUhw4xFw31mknug9fxR",
  "key32": "5pjASyxup148HDvfD53N3bQ17HCL3PdV2bsqZgjXRj1jLFNNdSnqXcnnJS8DBSuQGu7BKEtLApXwz5fXjXDEdj5m",
  "key33": "3cSxnjMQ3hJiDxxgXcTaCna3FPbp9hfCH7nqHqdAM24keikWeszRMTVhCr1LRhgEy4KkD9ym8An5dPUPSTKRByfa",
  "key34": "52dJmce4xms6qRt4z9VK1fGtn2vL37BNXdLQBBHAqDqE7d98N4pTyvbD6Ju4S4kmYhAgNyP8Extq6d8Dgu4VpvDM",
  "key35": "4wVrd3F6CbYKFjb9Boo9Pdh4gtHsHELFNokN5Jf28v332uNZfbu7rMqz5LkNm2VURGWeS27fqHd6QdANsUbSW2En",
  "key36": "LKTc48F5DQdpJCjYGmeuno7rK1B3bUkV9V4URpXVbqL2wnyT3V5dC34KLpfZBxuWW2vRvFEUH73AZoapfT2LDTT",
  "key37": "3mEkB1c9SNMhAWBXmEHiXoSy216y1czh6vqHCjZvB8UEakk5DtBw8z9QopXfosn5AzFXDtj8KpHHvmje3mP78hRY",
  "key38": "8v55UCV5YUTgwJYq3LB5f5qm2SxXEJgdwp6HnFDANQtNWtsXztWt4NPfJfxUsY4BS453qb5ausGGP228HTSqZns",
  "key39": "5uyER1bzfqBC8kNSPZ3b2y9D1LJv8JvtNp7WipYk4gKUTPsa3NiqC7xhYYpkaAkpQ8mkm62Df5eXToG7Ea27XbSN",
  "key40": "5PXJezZSXGujTwkYUy6YbNGTUkKXdE6VTDq8yfjsvh5zsPAcYgG36DLo2UCQc4GoSxy17SLgAbXSoY5uWHKYeS2s",
  "key41": "Lw8dTfEcv3BzMLb66bkLWyiVQqRd4fZBx1gpMe3fAwCNmRdjCsp1T3LRLGgpB9gNSedAZhwkbN2zp2MZr6Ns1Rn",
  "key42": "3P4QSuCWa4ReQAuYBGLLRF4kPJSCawix9djmagx2Jwi6H5y62rUSTQYfgmFKxZcyTWhj5RjY7REg4TJfXsFNDed6",
  "key43": "2r3YQVKpSFJmfXxPpQ94nG3EK8oXCXvzeTQenM16eobdY3GR2rKUMQBMAeeaUVmDVCxowdGWgCDafieocw9MYe8h",
  "key44": "5fR51Q3uN473NmUg8YW75XHurFxW3Lf1632wfyANVT3qw8CnVyqU4khEqmtVgBsgrtsu7Qbq6yUFSwBiUAu4itnx",
  "key45": "2Hzjt4cro1vRuj7WNjs8Aj461HH4JzANop4WvuY1K8fXdKMY2S4zatrsa6j29NHEGbCmh5bnuTcrz2LTdRCqKofG",
  "key46": "4E4Q35nH2DgpZhA8iZbDHSCqwoRTvCLizMfMPqYGwvrT6ZLVRzCgvK4AxxBgzmrp3qziuLMokZJhaVjfDJvZBLgd",
  "key47": "ySS8H9HoXLExUe9SLvgeZ2MsB7qj1RMMvHoqwjFMkMb2vicBQSqooTMMfNRnQivPM5R44MdAoc9jcBiAEiLBpNq",
  "key48": "3aGgn5F7QUewB1dXAvv9d1ueHZhqpfQb9pSEUnGZgqy2uaTmEDUtmf6uVWmTsbEymG2gydgmiL1xfGdqBFKhVauz"
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
