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
    "4ButEAaZNDZ48w9YPVnh4H4SZDBqdS96jhfuGZjr1HiRw2d6dZE6Soiv2pkKYZ3mS8fw5nEDsHv2NaRpEgRgK71u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4F2trTCy13PDuz7ZFukmiDi2pwftX33LUp8JTxuE534MAi8WcaiNP9KfukmftFHa6v18byGUh5grsR3gJbao6c",
  "key1": "cNu7gdeiqFsoFL4L8ez4YEC4bW8v1zRZFUnmbW2PsuDzfypiTkiGxZuETFeUxpFBfuwK99NgaJafEgjpUjP8mbK",
  "key2": "4DpR8yoew1ZnPV7XGnD7j9jb3cQr4ZeTxu1K4xRMfqAMh7iy532XXyR45Lh1iMPejjfo3cdh2TbkWi7eTZPnc2gm",
  "key3": "24vYT6Q7EA99z7GcXKDtAXXCmMzFTWWrkhBBfKbxo85aR6bXcULk991oVzNnECs8jj8UosyLXb8eKkHvqRkncpVS",
  "key4": "2VRxGp5JixXsMmFSnt4dmc5ot8KJ7oLYfrPXpeiz1s2qabt6wjtemKSYjt2bqXQw4Ex5Dbwip9c1Fy3ypmSeS4X5",
  "key5": "5YhBAWhajvSiarghCHGZCSTe9Ti3HaGQDRa4UX5HhdauEp8CtENVrXtJoximuRazuKezQjER6XT5oficMQf9Wfmd",
  "key6": "64VZaDHpWAPbm73cmHjRXAhwPpAYGCJW9WT31XAikiZK4YYccFMqGJB15LHZtrT3qtrPg43r4XAQZQWLshoJ57vh",
  "key7": "3YNy3zQzCrtaFfVoTe9utpj71JqXxfR12mrRrVLZ1jn49h2PH5hgcFG8qm22uhSkug9712gfWLCMTyXLzdvSHs7R",
  "key8": "37TS8sSpfGwsNRkUVJmBapXuvts5BmmaHfpaCwWwn6CznLwmNJaBAd8DAYKhtbDgWbJipagyttEcDCyMwhYNuz1X",
  "key9": "28ooEA36v2cdsUnHVm5iQCtXnbRX4rnXcHQQHzj6AK5hsuUx8t3JsE1H5Nor7FqpCH8bqJ3hyy4jKAW5LU86y9Xn",
  "key10": "3dgKd1XhtEoLgdPfogpQTkkg8Dv3Eu4ER55JeV6SafyebD24eqvoApa7t7wBrDrR6RrLnDQPEaaYiLan49aXDoTX",
  "key11": "4F2YoYxJfCL7uKPNteJgEjWYspCvAJ8VU7jL8wf56GJMLGLZdDCMp7tHRj4UkpzzrhEjVoiYrJuxSN2CbyYRtNkg",
  "key12": "5gc6L6kG1VjHrKFhtxMuJnFhcUGjqAW2pmq1ZpPUZxa7iMC7euswfi8GPjKK9nVamx6K8KNT5vPfXUUr8sF4JMEz",
  "key13": "3uTLRXdQs7e7ErY5GXrF7MpLLDFjmARfPYwJgDpLnqNwmbyB5DAKgDbr9CpwozhFDmadtWKA6mJPT9x1Q8zfA12U",
  "key14": "2d1Yid7AFEAiPfUwbtwZgayajVEFg4cdvHsPkYc4DPfs8bxfTKMJuekcCBa86GZ7eW5DZa2QxcgFvquyTQsTvbLs",
  "key15": "3kDejxrd4LKzF9DfbV44zfCpaj2t5X5kqhmtzueKbAZoWs8imMxccM2ohCM1nmzjdzxggMtYwZaynGhNSW9eoVQd",
  "key16": "3RfbSTC8Hr6SxpEVdHrPQTwpAziVaXafEb4mLUHo7qtbqKh4EgGh2A9ptHsjnUi3Kdsiz5KzsHsaXBF3HX32EDPV",
  "key17": "2p6rLRBNd8FCxLpRPmxLDsiCJeS8DX9obtw5DKRvBRRCAFCQyUj4b7zXF9FWYbasG9rk5KrKLTSbvHU2NNJiu6n6",
  "key18": "y9jjKvE4HHBpEZbNXsDsChUr76TYzrcehSsbVfwKERP1VgtsDfPhpSfB12uDrRBHZ471SUgnBDz5QnZW81uPLXp",
  "key19": "2rG54szcyBnw67QpZAUNyQ7wQwfGaPjSkTC4ZtPPgTkgdguhKh3zzbYnunKLef9R9UDLabwyXb4aYSCN24D5mgUj",
  "key20": "2MB6M2kK6bFSge22U9Ht9RorUVdPKZa8qXpFNcrZ21FzJ2m13tLXA1rQqS9SfTHdztSh82hv9pHccSyQHJPqCrrk",
  "key21": "62Cg9uNi2tJHFY8wFJVVjdV3PNB6ktFJjttVtReP5MMHCHGyrHTxHdk3jR6Jsw7TDzEdyzPgxDRRHxnJD99E5vHm",
  "key22": "3nX4mP6DhiDe2rZvdK4iefD2xha86frMPajZKXxe6339FsztSCoawQqPjuZmvXZgeWNdJbhMWwKNFfxHcDHyxV6t",
  "key23": "2kfrTEYs6KrsFBejDyQpbntw5pqpPPSe3FGjEFQNxGLofsPdH27QYi3Am468cm1yYHu6wMfM2pc5QPog3upQ8jcQ",
  "key24": "5RkipdJLdXfDNtd6PF7itbbUn3sAZNdjyU92Z2jfUSYdBMmLurdJsLDEU9rP1C4rNARqnC8QHq3NqczgL1Kkf5vr",
  "key25": "5jB6LdPooj589BAJkKRnpRHfbrUXgQUCJjeLV4dVbL9wf6rTBNuj9NSo8QRhT9xWz5N69EJWNmzT3nu9DMs38Rah",
  "key26": "53MMWpifxGWUku4WhNLNYoxSW1g7CVp1Zggc4W4hPXdzLXEvJBGDgvHp6bduf1LuPyayiLg59oScxbu7NZbwaC3C",
  "key27": "3DLJXTJLMRJNc4ZSTDtweD7u2gY2SnYevCY4YEHEbi9WGcHkkHP6Z8iepcyGNEzvZXGcsULBRWcAWxbdovLyg3Pb",
  "key28": "fRVP7JRy4vU7Uf7m9Do5urR7J2Ee8QvppWaYy97pnLPmBGEUL4jWLDnGZWGBH3PmrTeJeUcpT88iCP47p211zXk",
  "key29": "2iHXLnkELNZufszmyMYtYs4KCDZVMQWbaLKd8xfyyiuqvSGaYZ1b8pJZzjibUjKjEFzcksWWUD53MACLzCFZ3W65",
  "key30": "28jruAUNgMLdqykDP4n94Q1HTyHSj4QiDv4VQxo8jTgmx7rHS43Zp6SJ6fB3Cgr9xwxCVvQKRHvTbN8xK4pqk7Nk",
  "key31": "4242j2htaYrBvFrPCpq7VZnsvMqaW3ARUAQDMeQRcf6EyWnGbdj3gxEjmkcSDLqu8sRx7UA787uysWztHAvBoeN2",
  "key32": "2NdJBAhV665UFPc4xDQTnTc9KfPsjTitsTzjixnt1mCHXy5cvgPUrwd5it624pqPeCmpWThs7VaLkpwyTXMTcYof",
  "key33": "5aXQ9Gi49g5trK7MHGenDRHyfvpC42w2KJN1bSPRwb6KLG2iHgrYLxq5N6C7tvmgCVz3PD1VYr6F3paf6zYNe3rK",
  "key34": "2fMqbHXN4dBmjhWMyyBMQZvaSyzhvDdnYgPmDbATwRcve2aqnhwjJy2n7Ms2GJFmn99PBpfi1YdiuHwaKtNrdM7j",
  "key35": "5TpqCu2o6y4EUFAxJhT4Cwcra9bzArzQZC4mLBhVvzGNygc1b4gRGyPLR2t97zoNn8zcC3dxgsyUJFuAbxfH4vf",
  "key36": "566jLNv8t2Ro2BrZdzENYEBuYEMmcLkfG8ojYPZcEfFcgwCRqjZe24RZRdyPDFGapk7GCsFuXZMG9o5Gver4qEju",
  "key37": "3RMbj1GspDWsvTnAUYVnpgwcuszsthNwmsnh8rXa8PmeXjxuzT5DtPiNF77LoP7Jn2hRhebpjQFeKCvHZtrUZN19",
  "key38": "CA2cfbZ3xDnAN21RbiYYmcjczQP6ZYEhNED1EaADftySGaSre82RkjjycQktaDwUeHUjbV4ybJ6SiVnRJwgSVcu",
  "key39": "4jnT8sLznfx6bmBkCiR2jwRDFYprgUAvoFp5C7mjUmVn2hFzxDaCqRB3c6uHmLJfZYog63t81TBp367aELb8kJJJ",
  "key40": "3QAMneC7rBwF8Y42sXjC1NDTtT1bZjbow92dTTpdXV2Uaes8DuoHbJuTydrvWRag5HUfhgTHKcPR5kxB3SNNCcEk",
  "key41": "54gezQBBWsYn1V19hmYn1RmNy3ejKW7o2AiCMf3ztQr5kJWBKntZwCxFu8hBfyfTBMXuKhktmAP1CDQSmtqyzpfn",
  "key42": "5JQaHu3DESDk2jYn7xsbet65vK19rw8XfQ4iTWvVeEThDdZgtUrR6Fw4L8m2asCzyEqxqdVQb95shr35MTMCmg1d",
  "key43": "5qRpCFPAPAHx5itfv63Vse8a73CWukHfuJq6kyEsYqmwkydRX2ncNJxhAinVn2mhijpeUr3oUbtm9AL7WvRg2T9e",
  "key44": "3yuxUqGHbiqqrmephRrSRFCHKmHGdvJSP44PMtZvy2JFYzJopqSDWDjfvYTxHvD5M8U4fozhsY6tb3od1yfViAnx",
  "key45": "5ziQNn3PMH14SNMCDgk69wMSARy3MczWBp6jujkBxfq5ss7S3oxDmoVZ6YCF9ZwGCGyxZSgWfCr8pwqruShDtSoZ",
  "key46": "1pK98p6weY4kaRQpcR6KkVgdk86j7Fzuewgv1XAyTUGAUvf5XsSuyoMQpnyFvm9Cve3Lc4yBcP6HZsMmY7SyJYj"
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
