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
    "2gh7yqo8Qnq4tbgqdskEBFaP5AWYZRuce7S3JsYkeMpR5MAZZYCpf8TD1Kjmd25VrwVTj6h2hU1KVRd6qRwLSmTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvjfLtXWjw85ns55s2dmr5JFoLmZqH2U4LqSYjXqibnBu3nMM3LimTgZwA9sC7TxmDfcS4ZrzwCcFYVLf2H2Tne",
  "key1": "66WE5mbZaScRMCSG14hWrpztWvrVJrgjQig8xzfmFWPNRayqboFzc7QJCH7LBSFkHfFCS8MyWRC97Z1R37rg3eVN",
  "key2": "UX8YSMoWZupy2sW7WqoRgcQbuZqas2Q8eL2Xh1eekpye7eWmW85EcaXVPDWj9w1R6GtLn9Dxyrag1RKMbpPpPa1",
  "key3": "DXnEUPv64Br9Lp5sMZtNsfaRNdc4LttfeDmrPHCn9z1VKB8bLzXYEkYusKkNJE8iTxZrV5johZA35J7ffnhQaK5",
  "key4": "5LF7u6MGLjkQqdzxcuq39tqDmd9Nqy1w87bobY8vrwxFzuwZrW2vaXYJRU814X5i2xhDrpiR8AzjzShXL3pAh9EY",
  "key5": "TmuxDhq85H3qNEdP6AM4dEHfFbSEydkktk2qEJeUs6XkFeYLkprcWseo8EAWo92hyz3iNtEyBYGPM9ecMqQkKct",
  "key6": "37voSaJ6ADipyB9Lr2Nru7amhH8cENW8WVmMxFi8aspqAhBWLmyuDiknjPKRMdp1d7S6xEZDXX8PPCSuHW4WzQ74",
  "key7": "2rmLpEkC1F8bEsMeMfJEkZYv87Q8SNWRA6gRUpZnA8JDqHvkn7BgtYzLQJj45Y7W8wFtdfeDLZ9TVwtMuF2Gd7eo",
  "key8": "4MvCKhBPKHGydw2DsHUj3CSrmiPxRKTJ7NsESg97vLhyMEjaQVVAPKeQPBZA43g1uQQ6gHXmYFBeF7JvMwKRMFpp",
  "key9": "A2S5rjKbiMisF7wheBve3urpSy6Fs3tK5zdZYbTS1D1CY8YnNL6wbTgesyES9P2bM5rjbQV3J7ZYwr1vJ6EwZJc",
  "key10": "2v1XWxCsTzZyTq4cFP1BN2uFfoRKbndgN9j1zH5iQXjEC4u7qRkfdS99DHC9vnpaf8WyyqdGRC162ScYwX4goLzX",
  "key11": "47k3eiBMTEBHZhXPdzAY1LAqs2wAiBD2ZPZZjspGUDRL9CM9idjaocP4wk86UYW7E8y4wsX8cTDdi3qXiWPwu2it",
  "key12": "2sDQjXvhGBTiMD3x4KeqDVnzjJecTbUw1AmcBHqhZctrxsaBzQ8kirCERU9BTdganS2Lg8653Ly2C63UMsvaWBgD",
  "key13": "6Xg7hEV2zgW9bqStecmEFaxpkgcR2ZWaznsQcTn2PXXr3vTPu1tQLdwaNqj564xTKGiuP2mfxtvyfLrRsAJd7XV",
  "key14": "53UftLCeYEDAzi1BgPUBH8RvcKuEXbyTKkzqoB3mtJBJMCbt4y3drKhQkZL67S4r8DvTsMGB5yFxKTU2QSsCZ93x",
  "key15": "3pTcABnVfhTdQNY5oMgQJqsLnXENTo9xW7C4UNd98bPQpXkVkPUp1Dhbb9GtfhKc688UYa7LXcyVmpK5YQg7HhQg",
  "key16": "28eoH6Prd23QPXyUBR9zPWXm4qSZvzc3CzkoL5CQ1ujpe1KnED3bydU3gLQMooxhu3J6HZHGSnbh9PhazvaPossA",
  "key17": "5Spu3DXGC5hhjVGgNJ36KpzWwwVALmdZF5pDHyJTRBMqGezhAGGmCL928QB1B8YU8JJv8AvqAdi6EnLDh3H4cMee",
  "key18": "2rXvMEPQPcyQ29WQxkHUfnbgSJw3dyCDJbKWCeMUgkED6GDxruBrtRx4qRrUXJxjDi8GvicXdLdCCkB95yn5N9Ku",
  "key19": "BGbwoATcRU8SVAyzn7zuDSJCoT38KqxMacFLWYRsiZXeR1JCWEvh1HSi911EQaS8p5MJq2eDMz7RZqYNBVpmYCj",
  "key20": "56nCFxLY1aN9ka9Bdtqo2eFVxiryHSVxbv7ZsQ91zcVzrTFHhc2541NRmMXV4pNPYAvXwYQbdZYmiwbztcnrEtkU",
  "key21": "5tfULJTeQMUdA1YhwM3voSMNBqQz2vCXPpJA6khJYuh8oQyc6KCjYhZ3tFJbz61ot7wy5pJiPFGwo98QgEY1ygG7",
  "key22": "3fzVpt9FYJ7cQ14Tbc5jkWVtYZnjzSX7RY5e4brdhHJUCamv4zMfXrCN8dueiNNxBthnkCvjiSTCXXoTL9PuvuQ",
  "key23": "uiw6kyGR7puAu3KmFGNmdhfpbRv79xt1j3e2sRLH9a8c1QL8ck2T5xJ5aUrbbp3roRsG9h4UKHt7VMa9Rt3trMf",
  "key24": "4fbyDJFYEsS2xqTcgT7Rb9LsTJDfhhVeXfkhkdvZwVYaidYxp5VyLEZ1kdUv85CfWZ56ZFaf8sku8a2NstZU4pP9",
  "key25": "5L7s11NWeZp83UoMoEjAZ5n1ttuNsTvN3hHMJ8Jq973GdBpQP9qnR9k6DZTZsCMa1yB5yeF7hRvZ3Z6FtBkkT7YT",
  "key26": "5JhS2QeWGNLSwyZZtLTm5kvDgWvAwHNnjbZEGSZbKRKaqCpU9gZXLwUoFz8AoPNeAisr57o8D2KYaqRs7jJFmeS8",
  "key27": "ipyLbk5Awixqn4uzew9oZFLRUNUqRmYiPX4n3BdcUhy69jAkyD8y8zm2taHhXCp5PzLH2S8344kdkpcTQyeNbsH",
  "key28": "5LaApWzjajSnaS9ByPnsey3nqNFRaVJ4p6M5bRMXze1auLFhyjmHznfAtiweiV6JieLmuapLVi1L3FpJTDV2x6Qb",
  "key29": "3aTyXniRgTq9uGFgFe7R8xWid34B9Mfs6eknVCDbpKFdok7TWd9Ff3wcRHFQcvyHTRrByJF3oK4G1WhTmKMk7sJu",
  "key30": "56VUDdZo5uksjF9Y62ss6zEzE7zaANram7EMCp5p81wN8tQ3dDVxqDbXhurR3cwC7QV93K4PhsZjyLTSjoUse9E1",
  "key31": "5jnpuNHhQyrBpYXCdQ6DiZNwZr8dFqc15AfXFsk7PnUVH46FDd7rJCHjD6wJXZhoMz5pSRwZvmFFho9ZQkveARnd",
  "key32": "yCb9CdFtCPLS6pZrquNbp4jk6FuxoHkH5YAiEsM5ehipCZsdJfjwAvJsrXbN3TrMbmFPEUdg7nLdfxceN4b2tPE",
  "key33": "4zMS9LKYDhoHRPFGq5MUu3WBDCdjmc4ekUbivRusYdwvGWMPg2sHPuWinVDwwCxkt6a5mn2D5BnztGuJAJwSTtJR",
  "key34": "5CmpBTKoUgKmF6tmNAgeNyyKULz5T95nARXo1S4pVfjGSU9hRLcji2zGmTWBpD3cMyfSiDALx3CMVT6M9LEvFeKU"
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
