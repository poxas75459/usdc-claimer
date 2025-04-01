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
    "3db4sbnuC6U63X4GfTHJzBe73TXQGoJHbtUAgAu7kTiSszwDhuqFt6e8eV94uGodYNn3KDK1DZVnhjAZZ2Z1EJ6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gw4HJdSgqPH82ChbciwxjrNgj1V7zVqgdos8sxRNciB8mJSjMZR2oo6faoNLJwTwJYfkfgphF64RF8sApzqdS4o",
  "key1": "2nLarWBSF3bG4nAuJUxjPtek2BYRk827bwihUB7LhChtnBrv1RqRT4rsr8ZVE9JyTTdC4dvyWNqssj6hnf4wKDP7",
  "key2": "3XsnqRNBvuhYATfpMMiw26b3WYtLAhqj8CaEW1pmsk5Q93spwxFEsr4oABC1CRT9MzUVUrwUeqYDMfB8U9b78K9y",
  "key3": "4JhyoCX8WWxqXR6SHCrvXnxw889BP8xSrFfLgzDNLdarzTEdR4CVKdoGtH4CGa9WfwB7oeVhfdqMrQXBvXV4TYg7",
  "key4": "23778bPNXfPrSNyPLh6isFVbnRbqo3QcUzaZH6HsjbKeBDxTjcRi1WDhGbr1K8xciRWUY6sE2cf8KPRJjoV8CxC5",
  "key5": "5KXzCyUeabZVmDSMENGQvv9zaY7ypYi7GDW6rmoVvXSQqkf1yYQJEB1B1JXxezpXeWmFguytV3HPW4Ga3Ld6TAnc",
  "key6": "3wJsvaFoJYpGakDEs16SN3q2faDJYy8DbKwHwWMhhPnqk4gbsgt1EVM8HzsJxHBgPh2QvQGhXz33qrrrCecyUvpR",
  "key7": "MuwBTBHhcp3viGZyJANXapLzizVPDVuRJC5PUMPKtyVF9WVAy4rdWNRwa7YyhQA8BCrg3otfwnTcu9636zMtd2j",
  "key8": "5cVAxaGbrJE2Hui2ASE7TJeUGx7v38UinvStYDuroQWSXz4yrc6fFUHFfFd9fvxk43f4p5Fwhj8hNbtbKqfmXtuW",
  "key9": "3h6hHv3eJnL7ji9WeTKhaczsveX156C6aZFgvEzEEQExhqWiXPJjgvfnjxXJQxku6Qp4HK4etuF9Novhb7UUFbYx",
  "key10": "GQKVykcLJM5GFtewLVQWQaxXt1zzdwM9nGXhT7AD7XbQNRQbNuoDg7UVFkyskpLjoxnrrAMRQ4Qo3VZWNJVuxMn",
  "key11": "3GropboMNepTsMcmy6bozmNaHasQpv5USdhxwNmmekJFfcuDinYYDMja2cWuZCy9Pb6NSBgQsyRFRuf6QzWVAScy",
  "key12": "28QxnrWVN3CwuEpgofrxTNMq9CUbLJLdGqNeunRjJyLy8PcHdQgjuupxDR6bQn6DNLaHgUEVfLk7uVPiCsjd9bV3",
  "key13": "36aLoH13pnKT3mJP9vMFKZECSosQWjCP95E1XyTzPqc9fNK43nfoEyLnfw7DFf6SAGLVBeJM1XLUKxzh769qHSdM",
  "key14": "zxNniGu7f2kQpPYoimE4JX8eYaiJqqftCcWFxkpm7fc95syCLdM44dNn2kmcKjYXmvSRha4BtReKg7HERgBJEaW",
  "key15": "5oB268fpt1fTrvPUuDPHU5W1xtcknvbvHgTttZX21EmZZgRNeUTcEVdr9XbTmVb3EWs5XCHWGeXdMk6cUvD2Azp9",
  "key16": "hfut4AT6CAA5umovJkMSvGcN8YRtcKXsJeBuJgkEDQ72RmPopgzh5aVkCenUSzHSaySixXi78cyaMzPDBDdq2aW",
  "key17": "3p2geH4Xom8kJDP9uwS1NHNmv2jtgrE6UqoevcRpiEoLn2a7MBAgfSwcVbAk52kESGW3h8K5X2VineS5VDPCdXSn",
  "key18": "2Uh14s4A5SdPgwhgCWsLJsg5MXxGJckGPW6fA1BrNAHv9TKkFZ9iFhHHMZRw8cGF6zXuT2oBudzDTJMhvWYrbqHb",
  "key19": "327BPPNMVvwZhc8t8X8byQApvzTFUP3jjYp2zwKCuxs8JEp8wFMNbYU5LDKGjnHAM8jgMY5dvxRf2WjDETY71dDP",
  "key20": "4c6CTDxsXeRWTVYNPB9BV3MCxcbnGETNm6Virwa2oPMTFzDyzMKKiTMiK5uywJYvXGuRmzuWMi3LCP6x9rYFkuNe",
  "key21": "57dPBiv1tJReY9icCWDitHjbrhEdZwYE1Ec1Vp7FiMvhi1h14WTFxGbk3ABrbxuarzv96ohQyTAAQ536pcSfTjfZ",
  "key22": "61b2cSsFZytgQvwSnjyK1aFbmTNnXkHseKZrLRKFUM7LAbSGFSHBN4qnEqQiqXTzYBg8fdG8cdPFpiJ7WryoriUn",
  "key23": "5m5j2ysQspyLUS8SW66czuuYLN9utsN85rcSxhmJD7s7xWNBL1TwbP2h75eWNQJ8YvAaRpzTWSiJJ8B55Qz8WzzK",
  "key24": "3pkPrHUE4KxniN9W1r93fbjpE6sf8e2pCZerne61W3XtHviRwgSjr1XU4yA85iFs27YFPE15iB6hwVaZz3fbNP5z",
  "key25": "4S3MMRQ9ZadE6J7hXu3SEsS3919QhUDUcwoghu6NZ4iofTbkNGYL8Zp5PQGLRB5U9ohDHGVrkv5NrkF6YLMkW9gM",
  "key26": "qvd2N8D25Q7LXTTXcgGqu6AnNR2avECHntcghB9LFCHzXppjTPsLbtXd3BYf9Fm9G1PMeqnm762rmWQwjLsKgW9",
  "key27": "UEBDd1aqgGcNkgT31wMYAHiJi1ta5CMPKXeheh8McrpiKEfAQR2nvxe5NZws1TUiu18oNned2Bp9z3Qv8fWD13m",
  "key28": "QtRdxBSTymaiSSCYhdd6zLzDmatD37ZToHPaMyYvEVUTJJtJQQSCBgwdjBvxb4zBgeFaH7CjNr2aqYk5BuS11VR",
  "key29": "45wcTqRLFyHHiRdyeQbnVzxaAhgx7vvmkzDbKuQGoCRXJPUjtXjtamPRFShdEhCkrGC8zWVj4wd9e1MYzvXqcTcr",
  "key30": "5vpb3DAw6fXE88kqfqaVY5hyWj8gqnpjezkAACJZSTNUsYFPc1QfGL9gDj8ksxj2f1MBTWj7eWZJTRH3oPJeAsRw",
  "key31": "4WojcSQVrMQXV9RUK5B42iS4uQxttWATKHDig3ipyPStkjmzBCd4zBP5kkEc4KfFzC1sJVci9e2K5W1UveaXpUi6",
  "key32": "iHxxAoNfvYqa63LPKJQTKyBPKJjdhqHpK2WPJC9sB6EJ2N69QCPBJhrDhYYbFgpug2V8T21JzKJhSNaeZxJdiJs",
  "key33": "uwBXpMG5WDyp4QFEPZ7nFEM3DnQVYSbwHeRvqnD1zbUCRffcSjTAWqzswttQwcVGhcvBjNJgsdqVwcYzg9LAjUk",
  "key34": "3Q45JmSp7AtR82AzepAJxmGqjJnCkcMASvkipMK32MHAkwWctR9FVf6spADDdwZscZdmeCkFbJ3q42muRYZxp2MX",
  "key35": "5TWQ1UMHxa4Kp1Dk2AqRG4dydiqrLJ38xYvu5gmhwJqTPHyZJLybpUJQjpzfujnEXrEiJAmir6VAtEUcPLPPDapN",
  "key36": "4k8FHVpB3DuFE9L4jkY8jTkfav7gZ8ys6F9LSG2JHnptB7DhMD4WYftci7dGMDhGmuqyLYCn2hemyix5PuLpzma9",
  "key37": "54q1JLUyBTjfq2tX47dSCTegrfyFtumCKWniNW1Z6dy7pZgUcmEA49tf7Qzew9Q5gtKBAi1hY5fZSJTDz1jdgD3u",
  "key38": "3mgTEz4XkG4FGWx8Nqw1pg7JbUJCsTHaVXdvQePvDxxVjWaGrV2VcAZZLediUhDpC9zwS4hLd8aGJyJEZUQrkxsL",
  "key39": "2nMzkerdWftMRoWySQe36fuLiYPebdu781Y94D287EEAyWsoWX7feJX28Sysz4MFbpbPbegScAV1sMERwDVCxQjS",
  "key40": "4FsDY443K4uK4eZb5x85NPH1Gaynn8UCXGdLKob7zguSzBhXtMnmvq5nSNt6dRJExMP2tf5QUQiK97RkcmgEFk8v",
  "key41": "5YTiu8WU25syES7f5pqDdvPhLFxBgdnogqD2N3yiYwmw9p97s4F2HrLnMvLiAfzVsMPUum6PAK1Mjuq2LH37yqL",
  "key42": "Hz1QyeFrB1NncJxJe38ApMfVvCk2VRVRpPcefggAsSrrALWJF8qMToWv93Jj9JyQHnxz5WycPd3DfFvQqHHYmLU",
  "key43": "4zw4BfpjpuVWeLWhguyzQw4VRYB9MoFXBh3zimHCLRNc1R4ss4CFS38FMTqHgqJWjxQYT69FeGHXsKwtyGtpxxRG"
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
