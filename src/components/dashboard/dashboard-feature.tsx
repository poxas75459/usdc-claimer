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
    "2k4bxi9r4yCBYqMYXJCbXY841ovBpba5LLVqnqhfMgD7FNv88rkV8ZdsFNL2LWgQUC9zXSk3ZupQtomfSXdFJqDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3M8jReQgPFYY6uxmeDhZpUXDxRB4K8jzRLjsiVCUmHTZWEPvac5DWFnFignHkjJiWfNdVdMzj2xZ8PQccCrfHB",
  "key1": "4sMVjYbuVKNM6gFf2uS84ngvrgCbGYDxWmwnB4orRyejh1uc5oFJdLyh4pYjsG76BEBRjpBVxUHkdaENjuQPQQXW",
  "key2": "2EKjnhrJTsdfoumMSKERQ95Yh6JQxPR6MpxgNenNgXqEZh9kPituc8opp9K7v54171toA4sdHQPRtMQj3CrhF4Vw",
  "key3": "4xXbNwTqGeETG4YGzG5esK8oZMntsWBLXzDjKsaPLmHoRk5oejuM7r1pyju4NQFJYxBbGqZ8uqnqyNXUHQQtJdJo",
  "key4": "5ViUUQptBge3T5nehn8nXreMKdWwMsFnVTWGXygQVLcsPJQMrE5zxfYV7zt9y8X19od4dGFfmowkDf53SEZRRw7U",
  "key5": "2YS3tb1ZwSQv1T25fdfTvx7YD7czBzytnbDvepwWA77rn7p43eZCd9YRw6NpHPcbUMZeweRibAhCHeeJJfj5YTK6",
  "key6": "279yP7J15Bnos4C5aYLkLw3NutmmmzKps5R7AYfz4aEDHcteEhTX5nx7YQZXY9Agop8pcSXdY9yfkRP4Q9qhoUJL",
  "key7": "3oSoz7ppBX8dGH5ynNoaisLCkqjipgAXnYsPb8aejpDjYp3z5kXjPLVZTYKuzwjAP5fvSuM2DdtSDpiHkw3f5Cni",
  "key8": "22gXZeE85hR1rUQAX2LEjziCmKQyBo3MFJmjiL4hJ3bMvGrpnq9JQhHTk5w81R98NBTaVHzHJrbRk6Ev94i7Vudr",
  "key9": "4zpCNTY7gf2P7rWorYnWaby1hYTBCG1tFyoV1gufZKn1ZpShPHySoVENLy7z9zQQSK7BaeAwN1yG65CMLW2Kxw8i",
  "key10": "1iEtm2g7gkYjHygBgWZChGW66HfCmUJejkrujWz8WAmgWgdTvoyiuacnxzNb4ZBh33ZKrGLwxRRYUMTmeo4Fc4L",
  "key11": "2wh5VXYonm1ohvy3sBqiaPPhnEwA4tB6gSSWQP8v64JRZAbujU3q7xYoN4yZ1rubXq5PFdK2jy1sFE7z6XEz593X",
  "key12": "5pbEXXRSvUoC9uMh4ccCBd7hLtEjSJrvomFmZHGvd72aPJmQa1ZQJaU3hCoaiq1aw6gBpt76g53zQMj6jRLrQJe2",
  "key13": "3kHZ3czC2wjoDCJiYo2jg2nA3aqJW6s8WDAARDMYfTCzLz1TmQtJPMWRpep8aZgn9EW88Z3CcD92MLmdKYNr4FyX",
  "key14": "4C7cyvgj6UDfFV32MTPH97XNc1Y66mAn6vBFTc8mFiWKaKeQnT9rmCYdJQZhTiaLx3v6yPv9fZxP3FiS8jxXWYys",
  "key15": "3yYZv6hAwXAj24fGUpq8e1hh1DefhUkyTgD48AFbybpWiGqCHJcovZe4T16chuYiaMDeqcPNLmrniYvbNRPshqze",
  "key16": "2DcC7x8HXQScM8urcRmSWhhGP6xQZrfWyaLnsXictuFs8XRaPB1o5iRbCGbyp46hCBFFs5UteSu9kaqwX12eXk1f",
  "key17": "2ddgsUBKQBpmB25qiwpWpGJoUY4wPZhBmcz65AV3k88bWFgLxinfaLyfXrxhCBQpe2PBF75wtoKsHcnPL6J1MXsy",
  "key18": "3RNA6nozeAjtTCqpgnbKUdVNuVQK1seUWmT3Hdvn6T7ojBLCbW9V8RHh6iX85U3Fv1gpY5p8CTPYygXhtybxYYKU",
  "key19": "4ds1ZeocaVSKX1vh9bUveUB1xwmGMyRiDY83eGDATKrvKJcnCZi8XzzbQu5wWVAg6sbDvncfbnsPyqD7wuEjMkzJ",
  "key20": "nMJc6YdntMkoofyqjppvgz73Zmhfq7mEXRNctzFJCxnHhoaZ2tNKZd6hLLBbuxqyT7vM4FRecowtDsiiJNSRNk5",
  "key21": "5tcXcouQoQzfrJhv14kRNqeocPZA28vfWMSsAgBckHk6MWvDfMYGKtReuWWdAEjAaF8LjkhXD7zXCVx1dS9XELZd",
  "key22": "4KDYo7XREUL3hZi1iH3eL9QM6r8JyFto4LnV6aBoz9ZY35vKsbLfzKBeLPgs2vsbjmh8thFPxz4uxBsG2Y9a3jDa",
  "key23": "43AwpoRojbLY9iUgdsvdm4LBL8LVmf6U3BaTRc8ZQBQzWkx23QBLaMDHKZBbjkGLdqMBbP23sEPM5G3mUYCTq2yk",
  "key24": "4NYMcAmz6FBHThyd6KUGi6GCLq6aHsTUtKbDovTYdmghMW2nJyQzz8wZbCsAwSNdSvAuy5xrhzRYg6poSjsjkt4S",
  "key25": "5LLQiZ7HpV3Lc2iphGrT6MadbZvuT5zNbaMESo5GGPhvKn5vLEPoFrqN5un9r9kFgTLdS52V2tjZkHuaEtjPAxks",
  "key26": "24Ffyte8dKczMb97K1ZRVvBwftw3FPxWBM8iHbG5KXW438ZZhb8RXtzbSmphRuKPDE3GdXpPpcL252eR6a1XSu7x",
  "key27": "3YszsoRjdTgCtR2knRS929mqhJTiNajpXdcSB8M12ThceEERgwncaseCgJ8bDgnKPSwyhKcD9hueoK4YfDveJ6y5",
  "key28": "BqPM2T5e1aKcPkNSYRd5vQ7w6S29HnDCmaQBXtZhB5bJAF1LPZPYf98EnA4qnB34Wf2L2tiK2PZnqbSWEpwc7ud",
  "key29": "5kDTE3LaajWbnpNohkwETe2qBPmf16Q9cvvmJUseuNouEWdcd12HU9o5q7D37QHASsTZSZc7xx3ERbjJYMJHv1Eb",
  "key30": "5uySLwd6djMtm2A1nSg8arsAU9gQ7F1H5RsEyBoP1SxNbdXsoWoiDoXNmpELWoYfdhDgcM4MPXov9JNpkvWnYNM8",
  "key31": "4rtm5aCo7Caa6ddNz6bXGGZVCZF52xLkeFmdSXfsdzEmLD7amjxhvLH4fcKSE2Av7ZqQgPAaArKK4QvHRPf33JdU",
  "key32": "4mm6d7SN38F3Sq5kwuftyLxCwMtLSWAAuqup7McP9HPXpNScebP9q7DsfGRb4QTHzpb4QBSU1zsF8w7cuU11jDdv",
  "key33": "5tVLKqZAqhLpLViaQyJqjfY3N4gusH9eHS31xs877zNXd9rZ357CSoY6zvUxWYR1h8yojyGsya91gNiffNTMYf2N",
  "key34": "3k4rAyjMsAvZLPzGvCEnVjvJn9tqfjFAmSgWz3LJhWtX1F1pXsGqPqRs22NGwQEAS2yaZaH2ucaD7YzPehTfeKjp",
  "key35": "4nwEkkD6SCjEoqDE7urr3ddjPfAeLRFHozCYkSpNuRVov1DVuC5CHtTYZBwDVNnGcan6jh7UxYHTzz2ZuLjkq4Fd",
  "key36": "4JCKQf1x2qeT3zUrL7XdFGywBaRhipKpESjQvuzKkKxQs2UtqPdBKHStCuuBsEKTGVKz8TgLEeoZKUVvSDVAB19g",
  "key37": "2QGgwQwkD6Sm45Q7egpNax5oHLHBQ9XgmZ9zEVQUn1RiAugGVHvZiXmLrBNuNZW6N1HZt2M7zSxoP9NZxZDfaLTx",
  "key38": "1htMojQ5Vnoqk5newr63VeZgnaupoAxotUvf132nLrdrD9PZPjMLWtAuWbta78pkkQV86uzogsdwB7YfjukitD1",
  "key39": "3YKYaiLWWoJp76VpDvX5ikpbA8CiWxBaVvsax8mVxQ8D6v9MaXcmMULccbz4zSA58HEtxc28Wsqp6CPVZ3jMJoGK",
  "key40": "4Jremu4pLACurGRXxWGJtFH3T91w4saWUc1u35xB2dy3zJUziEFRXWpcDesgpiidDM1gTWusvyWdyzC7zXrLDSA8",
  "key41": "yMJ9FDGeFMQFZaYqktEfPonv489jujrQA7iC2GFPMX3QKUAFU5sSwcNP2MykkqSmxSeZHUxqvPpGN7y25JDP3ED",
  "key42": "RSA6spBgrCWfiiWSCzYLNKp8aTiiA7DPh3jcZRvFXpCVKENm16BzyyF8exp1RP9aYBx3CoimNScmWNQUZjfkxGu",
  "key43": "2VkhWe8gQHZ5ve8WQ53wspfyyFkVsdddhQoYQ9BiHWW9AqkGAQoe3EkrqgidaKhLFZdEUpLaZG5zbPhLxaL6GrGf",
  "key44": "21qiQAnFVJZ6GmG62QDJ83nYqjr2c2zyEPU6gwQJZw6GHxradro8dpJ8cHnSbMxc7zKpjD1g9kgqRsDw688KBuy5",
  "key45": "3unPMQCp1QdaFwuTMsnj9UtyV8zCichML2GP1HgLUT1cNKSc46ztqo2CeRQqjquygTcE6qoCrhfwyTpbVLJbdiAG",
  "key46": "ycUp6azC1DHyPJz9dfn7wEoH5gERwQrhDqP6RHTAAZWV1H4TxUkYcAgdszup4MbrdDGHTw2SkiBqs2a1anyGMXi",
  "key47": "5SKB12L8h9hsNNVA6TD2Xyb5HSkPrWFZiqDdS2LqtYPs3RNR3dMNQMzs2DpGSPgawrLvakGeKmSaUDKVGncoKwqp",
  "key48": "3dk9G7Rg6Gv9EE2zsCrDvuhFdekJRMohZc9MC4t7NJjhmwzJj89hbhpc7SfoCsLwZMZhQbqboLWTrFiH71k6bHoV",
  "key49": "3rZ7miHD3nmf9z1n9yT6SpsSNFLHeeFV6htH4qrwstyVfNAVmE7D6tFNmPfjAXvKztRGTGze8Y9PDpmGvM61bgiA"
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
