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
    "5C5Erbox9JtCL3aU1J4w9vebpxVYpCd7L8ghkrisNweUr8bypZVxEcJcVwybKf3VX1VEpWpAoP8ARxMo5LxEUgwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icHwtJhGVCWaN2wCktuHXjH3N3TjENpRXgS3WA4vsey2Hu42s2Ri1XykodPNFmTjMies7HZCfw7izf1hUnAEnHa",
  "key1": "46MHbUimsHT5DeFYv8xGkPU3j2BktujT2oErMfTZL4N2jWD1DnQWzfHvK9F9MGJE6yqxKL7mWzLhhozJvWmSW1RE",
  "key2": "3toDCiuYhWkHY1j4X9zLCTTDBSgD1z3RF7LnqpuPYZVBkA1C4nxMBWwxCP1Y5G2LFb6xYfyk7f22zLf6M3DrfxVQ",
  "key3": "4Pb8XekXFHrZ1ZgUyYFhntQh43NKtaSWyanvaFs9AVkHmm1xrt1YprMk5NnwJ87HrnQZeZsGafdTnhD2XHE2zef2",
  "key4": "4sV6X5Ztgt1RD445n7xyEctSThAHabPP2UoAvQq4KMDfezTvTyYP9psMccn85iTYE3yzab2AMzSB5NhF2msW2xyr",
  "key5": "4jotTQkpfPhoPBvRLE8NBBHh1Bm2eHEemZt79hVwKtSgPpQp5oABnwsUXtvSzytrmFAwazKjrF2jx7MQwHe3C2Gj",
  "key6": "23sfWkL6Y9tNap9j1N2rMnRfAssdqzLCXw7vttuWhTyL9go95nMzNYDddQAbYSJe3jcSukoyMrh2ML8SpNLEyFLp",
  "key7": "5KKspa3mKc4GfgttyfAazr3ccsrfXCJMmWx6UgZYQz27fZGPfpyrSLVpkrjbE1kdwS2TytiSJAGLiFC9onvrxY39",
  "key8": "2rZoUmfr15DaPSMaWwxkU94wUPJUdfnUH6ooRAcJ44VCZVQtKSgabB2qdW42AdDAFJmkejrTVhakAUcuANGtbkAL",
  "key9": "2Lx5i5Q1YuAzVP6Fse8ArSwqMNUNrSA2oETXx8jZvEtuUqk7AohGfACD27hXgXER1G82qZP8bEidttXxsSPKmoXG",
  "key10": "XwHQU29mWkuBpmZ8PCCxkBqNZnF6cAoytSsHFCuJfbqfkRSGD2Fk581rGGH9Uy5CotQi94sLPLEPYqzVNk1fSRc",
  "key11": "37KMZoZirX6CP1uVsv2wC3sStFZhk18XBfFAce74jjdSfscw7ekuGi7C3HriVDmSvknYxSsqY5MbUzRNfD42PSFz",
  "key12": "3qUv17qirCLKqrwZzMzs44XM8H9AfSNWRzV2QB7tTHhAx3E7ZJJJTwH14jqwAxTzr3LoHtdDk5Rb3zM9ZCPQRKi9",
  "key13": "2Xc6cxdRe9b3YYrBTqyJALS8uipbCNiSnLtSZGnw7Dtpc6zjjH1cT939K7pq5q2cDaks2B1AzKfH59DHE4VGnSd3",
  "key14": "51aRLTdCZdtUUBeUDfJ3r4Zq2Uh3fT2WUKuQJ8azaaKFDDUtLtJ3xqnn7ksAoG3kjT7P5ba9vE4SGELWZx6wYL2W",
  "key15": "kNV1725LAYn7idBFmcuQLydm6L1oFPJMztynRnnHhQ8HP67scfUcu7gMUdKAHZN6zjGHfjBdVGh7BjdnYEk6M2T",
  "key16": "2UTSPk4r4zF7d6wYWTqjo6Wp6wLUjhFoJY1wuLPz1Y6C4ga2Ff2zGiwkkctco33rdXB2WMUWStjetjKtBN99TsvW",
  "key17": "hn6eCd4QKJKCFMqFZMnDxLivr58xeWp5GAu6A9Czo6JQ3EzTPjiBMFHjxwBtB4W3dF6kHLikM3naMbyAiyJMg7m",
  "key18": "5dCv21FLfMCrdmJ2LWhVwLGm6p2WemX9CnsvhqGhXpEJQR1HsHrcMZ6EFx66xZzznVFEw5fm79xtTUwNfXvc864t",
  "key19": "wWx2zC1aE5N5oAfPEbpcrpGyHyrfZFtXrpdCxnA6pBE36pB2xaJSS31or7aP8yuC9KqPN8n7J1nRA8kYBpZEVkA",
  "key20": "5J7r1P4wV4aAvwSoLcS1TEoi9A4GHFPc2dQJgp3MxKkkXRZpzXRX4o4zqLZFjJ8J7Gaw2sc9fPwnM8Qqb1fK2rX3",
  "key21": "zpkF3iD5pZHfWgDFyue3QyLwYihYZwrT3dzoHafD7wnbT5Pb65BYAaPg2yNh66Kscigjgfs9FwQBPGAnDZTctfm",
  "key22": "ev7bDpYLNaeRFPzvPzPecn1LQnyXqjTCp4RfcQys8yYWBSVaax5M63aYaFjJzYtBY37CbZmrsPgnHdzExB21Hok",
  "key23": "2KcHAjzS85TFrRRhYSKRzh866AHmC3kNsQkmwqHFrGmVf1TrG8Xq24y8az95BPLonrVxgHYjko42Dm5nyrVroJtt",
  "key24": "4KxGQeLaghSdRqr3BU5KWfw947gsiKbEXkoXXVYceGfaHzcDjEZSnbuNXdRUeuF6wsWiVw3wDoE43A3KSoAkzXM1",
  "key25": "vNoQvVVcfxcoa5BpZHANV1AK87ES8ET99P3HHhDJi3GuXoCbENYhBKW59GDMiJkAPAdJw7U2spWzbKVFE682wk6",
  "key26": "2rVZp8hbSReHgJg5cTAaqqrvhE5qz2W5oaKyCpLfHWs44BBAmuXGfPDxRbhaf6561iUmmnCDgMNnyFaen5yNpeSk",
  "key27": "4A8TnpSd2JRrRVMECfRaMmascq1MqykvUeJdeuyjzscZvtucPNiYw5AHhQjrGnHyWruCUU8iPfmizcWgvEQ9vvRz",
  "key28": "5s9BJgeAmJCJXH6VxzEaF7bpd5x2yeu5GZSre6mjrmSa3PK5xsodp5vHPWQqaHreE397X7myM6AAdq2DXK3jUvuW",
  "key29": "5qjokjsw8MkDqAGcdqivbztZehQfPzPAXazeF3uQddwfu7yuPt7isZA2iykg6f8PZkmzp44oBNw3gL2mhBHQk7cy",
  "key30": "4C6bzmvsjctVESzqz4WytaGaJw5iFJ8HiLTih8XDhXdXejSt9YDfomhU5FuxNauKZQHwij4hfEgCmmvayPDHFp2V",
  "key31": "5LNdMCf9AZKaYECQcUJsnwAFq1Sdh2HixHfkhRJMist8hxVriT1D953yEBLHyJgfbYikxf3svz4ApAr4orgvds8K",
  "key32": "3cA7w9NEdaNG6CKzfuZXo6kcn5e3UqT5BSRcARzxqUPebqTuQWyvh7GDKwTxuHGyvkHFqnWJBrRJzecwpA5tyP4L",
  "key33": "2zZ88r8PgcAGJa7pR1G4GJDkhycVUbhHKY9wDsrPte8EdzHKq1GWdZ9ZYW4wBSLkvc3FrtB4rTA9x3dFja2DD619",
  "key34": "64wEm9XtFe8AkjyvoRBN2qAgG8dbCWGd3aDwsGZKd4dpZo63wHUUBaqbCZn94D1XrameCijQLQ8XZFThTt7aCiCB",
  "key35": "M1ygMFiCS4HQcuQBcpLbKxGaCSFiThqrkpWo8rVoMEg3D6gtrHNUBHHnDYK9jufWypxGdVbmscCcwBSKP7UoXkj",
  "key36": "GVh7bCNZzLnLT5ajXEi45Nf5uDGrBrMT8WgB4bSVdfhcCdDv1m6QfPhLmCNT8m5pURHfUiJvaNYgWr84XmyK5uy",
  "key37": "4c8r7uZww2pvhnoToQMh4T1u8mQPpCU7H5gkjqkA7BgyiwiTYQsvmayyGSF5ZwJqzueXooZHYsEJRngSZTWn4vuJ",
  "key38": "56UgXLBDhHLJBd8P97BHPXLuRfYz5WGrdidAdfDxbmMLRh8z1rtwb5pZ3yZdEwcLXHc7XKH7PCBYiodtde9gHeeJ",
  "key39": "2Anc9kUsmWzcNZBo1RoKEMFxEd78MFdzZ1SR73LSAskjS7kEu2YHGv5xQZBEAAoY5ZjuJyk48gfsCg4ZjAywZGPd",
  "key40": "3wUkZp2iktXr1nXCyE5CkCv9pncJvDtaxhG7P8DHncFZvz112gWHsqLMuFy8RkL2Dnirv344SJJNjwSVvCEJVmWZ",
  "key41": "4dhkJnKMVGXF7hssFBZg5m3q6QC964eNKJredqJpoNkNSgANBnRTu2LNxGGaF7S1MhrCfZEzowgiwHcsYcVVK6YR",
  "key42": "XSASneS45gyW2KMzNRoz6QeCD7BoNSscwLZkw9iELUEgPNzz671QGdhL3J1sNRJVyb7hpyGVR9xp6vSkpvk9TTR",
  "key43": "38UJzKQZnmNRMeBT9bw7X4y3QmuBNo758y4sRJZ2tHMaEfayPB5hgE1at5a44d6RtW9sSzwZLfUP46jycxFYqAc3",
  "key44": "2daswQpXAXy9TQz2GsjfyZarxP91PjpPmZP4Xoc4jRnpfSfjyhoss6adCfXbSENspmmu44X7pDabyPRGKTPfua4b",
  "key45": "rVEbXL66fbB2CLyaJS2ihbWERNPiB8KiQDpsHe5RNu2zuszTLEbeSH9DiTnUNoz7TNynhwKzrwjMRUnTfXnH7nz",
  "key46": "3z9XCQPvbZprKCK3mzV767xXkJxmUHGZnXrnXHbhcrEh5P7QgoKfZrxuxPgdr2TyGFc4zZjFR1qes24rrBMUFAyT",
  "key47": "3bjDbo25H2nb4t5PVW6rjy674RoAMduxHyPQnnjavuVYLxcnEGb6y78qh36SpNFSJVZcnXRRZqgbGhejz74mJ5cY",
  "key48": "3vjEzNBZ3cNvnBXK62kixzRuNiZY6M9PaGsrRYjQs7FYHhukvatzkEs2miGTGEqATLejuCZo3dNKCLvCbsFhnegk"
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
