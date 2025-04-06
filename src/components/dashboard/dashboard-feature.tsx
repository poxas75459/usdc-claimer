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
    "4PTamJynB2QVdYFvrsMsYURHx3emL82nQkDNJoEncxPTsdQ5BqVvNvHTEGTew8EwmNZTfKPoRJ8Hn6MQ9ZwaCFvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsWUs66LNNZ35R42zBHTJm5oXujQvqehpAPS4L3CX9SXZVe1ruq4QtmELWagBhFaFurbDt6Lc7yvGFXGDz17TSy",
  "key1": "WiWE6cveqQVXigph8FD38rVg1ZEMTqF3f3SYx4NDGJqdtq6YDs6st3gRsXRWvNgjFfHrMZJCFQ2ySci62todPav",
  "key2": "2E7asX7KLKkWUVUhM9zx8YB4e4jPnQGv5VcJqVErgYzTtgZLAHwHozdK932o9JwtMrQABhoCb6t4ubi5LRcxdia6",
  "key3": "3RzMTatRey2TdT6M7cRhFVLriqhX2dDsstSxfCbAp5srECwTcH2DpyEaLT5heGmpS1ywnYX1vUNuq86QHv1rSzce",
  "key4": "3gkNwHgNK4VCGffgPRx8jHh1Cjbhn4XJ6yVPzq8fK5BTAE6GZmf2BGAiye1q1vECmSZrBeSLnzD7rwekQnuULo9k",
  "key5": "j9bKAw5Fb6zgWiAqisXJKDPfP6M9V6aTPpWFiauB564Gj3CM447yS5R5hDfBfwsioFdwFKcCpvHxAhDkB4hq322",
  "key6": "2MRyEv9eWS3FgJcQVNp7wnUyxBrHtyq4vfRyUmq4j2YxmsPutGm1DTuRE6je1HnjPsaaPX6rYdWXi3eGfMgRSjKP",
  "key7": "2sC1QCu9CWzmBVydbneR9fERNdnQZg39BtQsMwEPfiQhQsbDwYYs74yXiX5FdxTv5iAmSUaebH5xHrLi7WLzhNgH",
  "key8": "3RZWAXaHQsJR7AWEP5qEdK5VYw51dmEUAHud2J9KnbWZPActbkG8xiZwhALYASp9vwXHC2zD6f5CQCi6ihepgoj",
  "key9": "3YTtpNAThuDic81xBiSNZyCfnbzZfFMAPBmgZoVX8gubSkNGJyAJwseQHxGzwh4KjSPLAuYpRwftWautSftmc4hd",
  "key10": "66MDJiKgSzP1k4HLicmQ4aReXYXnjvjzkdc6pcCKAMf5vzoYoxEZXiNroqGZFkrKAvSvedeULUt97RkJGjMAagR2",
  "key11": "4ZgqwPq89gbZ2Y9sXnpvMxgQXFW4fRZ6kaHQu7UtnCv1o4shaeJTFoU2Z8C7RCfd6DRTGubrzBP1zV2wELtXz6Ai",
  "key12": "2F3TbPoXVBnsSm6PAfUjV5JVi5uoNTSfcWYVU96pTs44y7V1yGZst886DkCC5aEcoENDVD6XGBQaxg5cjmRhwKS1",
  "key13": "nbYQe16rb4P1PxpP6u7cBRLx73zZh4p4E234ZWZmrWicypmTgDYuBjpsFctmqAVFdSeVznRV37n5SGLhfnDWED9",
  "key14": "4DujaYRYoPGFuirtKLH6yKMujFBv9sMXRdB6UmXVTuokv416vMGQCynQyDgexNsLYmdkcBtq4BBtSWfzHdCU9W2V",
  "key15": "4DKwmqnhzD5fVQzCeSmhJMwC4FgRZNe3etTEDDnJMEwfgYLegjAUP6txbmGPcUK7Joxfsk6HwTtCJPQNXcttcjLS",
  "key16": "5v49hj1PdsvuchCey8WDNfckmekrXwiwEKGWey4VKTrdw2WTuazguWJ64zzJws2XAiLpvVLZ7JL9ANShCAXbZCKy",
  "key17": "4rF5EyjiC6kbDES5Fh27qVE8ScqW5BHhYahm45iXm6guTXtdvV9dxf3Jwek9xL62qvYthgJHEy5qNbLyD9yP1Y1b",
  "key18": "2iADgw6mZjquey7kYr9u3eKaXDgwGTBJZi6Us147ksQGwapaErzAh7hZZmrU9tVWCeRBHHZa6ZJoExRxei5W3aTC",
  "key19": "4dhftaaRnwfuHpQGacCxqqD2gZHooNzDxdWyiwwDXk82TuMcC69TDH2az5BYqFEvzeKy2zJbNTC2KX8eGvGtVNJL",
  "key20": "2Sngr3tZ6tfNT5QD6sfcFpsbdumDY7Wx2ME4SVXrArjP4WzDsHrJrhpzM1jHygXBGUrwvbwobPRD1kZkb2dnK8Ka",
  "key21": "2mHqETCv5ubLg4fcN9FuFRxe25JYSTrLH4NfC8C9KEjhurpPzhMX9kA5pZga7bBjQosyBb3mqR5i5zK7rDeKG3yr",
  "key22": "3YT6hVFisoYAb3K98z7cMwsdBqFWDXaEa2qt2RHTPTahjnALQcHSafJk4zpfP538ayMv6yct5vwKKENAYrq2RvZ8",
  "key23": "2WCeLpFThJMitVqZQbFwtj6r9yhrPhBSj46rxdHR91zoBZxNhksw2z979Fck3TuqDKXFEkhV7cBp7DJj5D2HEYRs",
  "key24": "5PYnnGhukS8vPLaCKinaDmcDDeZk4NcfW6pGuRznRjTDUT2admkBZvRpDU3oJqGrhZq57Dk1jf38qbZfYP2LjXYw",
  "key25": "3jmLVPiqX6NTaD4NhDMpK5P97WRF5kdRNLVppx3C57JF2RgHjrByrTAJS8EQnEJfkFnrEecs1KCaUUHzPjmJiNjM",
  "key26": "jjPUmUqbgz1Cb8tz8iGsnWodBR3CNHF7rBvMnNmB6TPGgp2H6XmufjiyL4aaRrVRSUzhPfcFLyCYEFiqDXuq49C",
  "key27": "41xS5voRFCDaerZNvrWD1SgwRnnuKwhFff8TEKtayAzYi4WgFqcbTn86E6HcVhveTPy3DorFGQRwoUoeojEAP3xa",
  "key28": "3t6PLPWfrZc8ZrcREYHSoZLT5GEiSmU9t3Cwj8zQtuszctbAWRpii2dw3eaBRq1uNAwDZ4mGFgnJ7uGJyBSxrq6N",
  "key29": "2y4KAHErPT21TEx52e64QJHAYxtBtxYryNsKdzKUypCg4mE3o9pgfuKrKuQhSf8eZRERiFngUHhaxkGjTKSzay1f",
  "key30": "5ELK9f9ikubMwo2XbBJFYXafUDhd3Ecz6tM5TR5ZwzVzPREWAUiKbiLUKS5nBX54wXF7aAiFRTrRMBo6E7zfGUAf",
  "key31": "4zVZLUQGfVnzNCjo1JC5VUXW21WNwDGepJzK463ASJf3PmHyE5xrPQyxWKztjh95BGpRNkiz1yD2P8iGCmmYsnQm",
  "key32": "4LMpdykFn1VRsTJZ5QTcvz8XxYRFN86ks1U7q3cn4W6KENFXCYAzxrdmmeSk4pQ18jFfM3DGFDRq5qG8FurmNTQM",
  "key33": "2BLXnFTzSvCkPCnUitc3ryqKrKaa6w9rTS3PGiCfKzok5ST1Vu5fivjkJortnhcAbeLf73g21bWVVQnPijW941oB",
  "key34": "42ktQSH2VnkEdBkhV99GvP2e6dBVYQVhJ6gRpVNi6gm7xVDzB5ecDJWskoYCygZqrDcf4FonfyWxGsNKe5Fd5uT7",
  "key35": "5vYmPjB4p3VKNC6DEpWq6djR54rqaaydSSEBdP3mUJKgq5gWLG7wAmFk2XHH5RKX4CvboZ8CdyxSYWC94L1Co5M9",
  "key36": "4MUMoRRYAVyWN9wpgn4nxAtuvJ6GuCNh62cVHi7warxDJ5oyWmvPZzFPbt3zAyuhQCRwK5Pbto27zoxF1C467JA1",
  "key37": "5k7xQqeN8wH4dFayFvY8MPo6xDe8gY3LhHTgTUCv1EEW6cyb85P2j6Ce87qWJL5L3zUoejMocW7W8PnF4MtP51Vk",
  "key38": "HRLqGmGeH5GA9Wd8hKwqjQuntwG9vRTVGUxtLhC9YSJdEzNAEKYBdcsHUcsrCa8FqrymRGncWd2Z1aguNYzYi4n",
  "key39": "C9bJ4XL35jNLY6y7p5Em48eKPyvvLcFBEWDv3Tab1oH1fExAxRV1VygX79d1JwX7fCYqXrH8fAA5u88NoJvxBiT",
  "key40": "D1GRPpsbFpXsMp4HgDBXU7HZAamvrYYAUsD2eEPDChZwcNo3L3d1Ht1rhP3VHGY6Th7L4C3X7gtLyje7mvJEymz",
  "key41": "4smMRXNp5ntrLZ22G6TNbc9fJYhS5RXAyhQYJyzNE9popE9X7soupFyzN3AjNkJLdabRC1BfC1ovC66ETSjSvrsv",
  "key42": "4bv8WEgQ3WJzZsgym5s1ZbRaaM1BpzYrY6SGxgRCVcsVFq877S8GpqL1iPMnkHb2TSAeTtk3x3LfVh2b73GCGce6",
  "key43": "1Z6su2mUhk2BT1H7wBEFUhgcNtzjZHLyCZ9W8ZpUK49m63vHicTKykPTWNZhEq752L9UjFzfPwzQH4NuqSwK1YP",
  "key44": "5LRpZHgzXHFkZd7mLh5aDeY8vxGythVnhvDrYN75HoyUfKraZTzNHu16ikDwyLsPSNesi8e64Pmm5mXQhDP81Euw",
  "key45": "d28p71Gve4zCkBGbHYDEHVspubhiGpDSJEVcjSdFCHwR67jiLgwcUz7CuvJ1wXhcHpfr11NfsHiJRQLjsy3Kqb8",
  "key46": "5XtQVkhQymFDpboW9G9wEATeDwwvKC953HXndSXpeYCfcdkKFGKPEaBYHp61o6fM9igh5zNEdoLk1WBiebKALmPM",
  "key47": "3YEHje6CSrHL9eomahBMha91KcRvBeyvbF7hrYnRbdTCSCoDjrHE15bLP3hoocSwewnCFfZDxsJaFqkVY7SgrdKm"
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
