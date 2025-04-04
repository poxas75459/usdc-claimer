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
    "4C8imzeBnGxwsk85Zps3zX9FpQtoFb7jqVopBYwfqco7q7gm8EkERMs2B2mRNUqnNagK3YyfrexuB1HYqnFVWx4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHH5bh3627NPTs67sXd241GA9rGGzKckRXkY2XoXtdnqkFWnX1GNYRGyxdRxLumyop441uLfUeMBrhgcdFuUy9Q",
  "key1": "uMvqAtMUrVWVaYpoHiogRVbDHovsL1iJZ4XGuey346Sa5Wn47XdLXR4yDMgeqgwEuSjuYcifcp8o3FWCjpWrz69",
  "key2": "5ChetAo2vfkpH5GXF1npb4ds5MEwuQvtkziTFXGZNTkZM567iYboam7uDzmp5Eehy6MKstwVEc5QMghG2keXBS7n",
  "key3": "3qjDcHbtHZsz6fjbRg9sjDGMM1CDY4StTmoPQd1GGEkjMz7MegiCEiYZ4SCjinq6Pyai1DBkurRQpB8Ru7vYZPL",
  "key4": "UxD9gsYyZujt65tS69YVaB6kwrsySfReqdbX9mjBrZ67uE1ATikhvn8qUsyDMRUFV1GaX8J8r92ZLm1wmhdcng7",
  "key5": "39HD4xAhHtWMKUFLVPyd2aGkZhuhaGrDGVjPYc9RC4t2GbYX1uUX3hPxdvi2pAvcKvFASQ1ycsAhrTf1nSFxj45Q",
  "key6": "4RaoMcJgYU1yQ9enL2CWuCBRffzpUzdjpxUov8kRbZnsi9Z55PL6dpsaNtT8LWwdjLmsAz4k4RBcjj39zTmsWvmf",
  "key7": "5xKWwVzgDGrNyENS48vgPAygyfgghpKSfUF2ae9J85kXgnNmeAMP2sgyrKjU5kC1sVRZaqij5FpnknM2uXEMHfoW",
  "key8": "3hatxNxToxpadUjaVF7zm3hBUgkDmRnCGwWt1EZw1a2TxaPf1c59revt2s2S31phpnPHUkicmUzZSrG2uPPPb92o",
  "key9": "3FWdFcpMtjeuTtMBGszpspBdY6gkszUQGgiVyH8ysTmnZQ7yrWBpNBd29vRt2fwAfynXU47tRcPRgi1CMBY6sqXf",
  "key10": "J8gaA5JnEuu7rbndePG9gT1jp9JXDzgW3cRzAtskWfjkNn4UBAbpRvTMMb7gkDoELocAmKRiRjw5o3FE598fuEA",
  "key11": "5a8bJuAgjUyykChCfagHmnfKDbrpQsVmUuKfSvxvMmb1BUZw1bfarXxsCMuukrYfT8iorhjQrjWHjh1aD9xsPF2i",
  "key12": "3cXNLmKzgsmV7onhtAmkP4VK9yD266txhvJuxhqg3hXAw3Dug7Cs7LiRQ9iB7JEV9LNwNRW3opKTgZammwP9A696",
  "key13": "3VmagjgppdKtaEVKXbxa8vBtjRYYHYm8zAMaR6uGbmryrTjVG7pmN1uEZQdrjRpMzh6SR8KgRFgwd8QknLdGjqKV",
  "key14": "2DxxAqXh9EBXhqqMB36fMoC2AbGQ4Xh8uEj9vnTtpbLW88npeEeQ7wA3QrNFTS6FRDMqbn2uqJCswtL5nJmpieLp",
  "key15": "4FM4N3iUeXKRt6PJ9pT84aoWdfH7YJqPM7bCp8k3p9WHz54aJJokN4QWPBhu9SffSW1jV9pri1sib76rtFSL7Ewf",
  "key16": "5KNBHXzR7LoGQsEwnwic5iavB3cEp3LebYmDAYsFKkjSVJUn2amLZ9xyy6uq5sAkGR9jr8jVrS54Hvw22HBSAqZh",
  "key17": "5x4z2hADVFg5q9Hxs7HWgRva7KzokHGKvxqEfW3hzWXpsAeABV9ZxrUfxeQfMXDnNtJ2xJGrHYvyvVFwZTLtWYv5",
  "key18": "3KH9dvYeL86WL3K6mYoCc1pQUxN1i8veF9RPFuJzSqStbx4y7uuXabkiPYRqm1gzCzx8NHFwyRF9NUfJz1fPpkZ",
  "key19": "2xXLfjTMiZMcb2tCE4ytgmKHS2MiKfbGfSTdnzRZVKZ1LR3EC4ScKBLfMQJEPP9uJWf1R1uPPRxbPRcdjqqP8zjF",
  "key20": "2smsjmLUmrCSHZMU1xVyhNEpctuvG4TF2Gh71efE5Tv9tGEUX5jnUHPW4zBekXjbXVprM4yTNVQfZxE2eo9GFWxt",
  "key21": "5TbGsVQVRQ9e437cv9rN1CCNMU442UmdHgRzEBEuZES48Ac3uZbKZ5sgyToC2fnqvwfsX6wcMNrb8gwUah4YojBj",
  "key22": "64igpi1wZinFuQdQ3ynXTAMU9cmrTTez2hE56seZtW7wfAqAn7JAACYJPA3im7LqcWaAxGwitaFw9d51Q6u1T87x",
  "key23": "5H4eDLtAmHLZbtU9UefLh4EXX6Gz8HHZGxSnEkfy6vf6WXApEEGAmzYBThF4NNMCRf946MY6QJKEoKSVQjTjXhW9",
  "key24": "557fgapVCLy3ZYLMR651YjKw8B86umnMpZUaGRzpPPzba1EaaDXbq4XtoecsKtLzANhr8Re7HViGNVKWB1DohFGB",
  "key25": "2QDsrkNt3yRtGXc8tFj3yypocvSfS6jLkvBitYmNrH55jAT5g7HAA8YC9RKtKkugwiCeutErtNT7mUSkMqjNRovH",
  "key26": "d7jYropEto9xQfmudSNk9r9MiwGrH15WYoCGXZTEpBps4BH675qgx8rgoZXHb55FpRsmjXfKJbW3boJw4PE36we",
  "key27": "3uYRqDBCzwESZZbBycDRZCWXKDxKVwsBViwFG9gbNyQ9GhHrYQ4w4kqeTwtLsU2AzMk7QX9qTbsyb2rnrhhtSNZb",
  "key28": "4vbzryKQJLdb3uR8TenVcvut7TtUqfgh4Xy9ihn2jMPr1piY3Ss1Un7u7xZJoFxsDCPWjh99DD95GSHhe4PjjSL4",
  "key29": "5vcuAHTeuofbFkNkWEQPUEpGCb3knykXWjsPm11WPF71smSKgRrpipVmgwmwdEVCPawmTwityXyrrMEAqX3f2bbY",
  "key30": "F8BSTUPXjYLXkBGthUvr7TmyzjdkpWjKTVRvL2YFnZX72gDhG6fCSu8o4t5w22tzPBTLC3C6pgcPtK99hqNKKWc",
  "key31": "3nmdvtMHxxPGKSbeBX1CA3LTtc4mamCswxCphmomrS6o3CjKfr4CVwuh3T1iU7mkkBFrDYRaUHc9aRZhjkxnLR4Z",
  "key32": "53QUPLgcdX4KemdaxMCtc2pnBtsMFRi5D54uuQ14VL4AHx52Xknv2t9uJ8C1k9ArkGPQWLD6iZREnesMpvCXE11i",
  "key33": "iv3PKgJz1KsCRN9q5h1enthE4vVhmtLvTrZJZ4H4tC8jjUmZATypDMQARmJcfRU78M8sduYdgEyLa47fgETXmtc",
  "key34": "vibBDomZ5pyPH234vrvkmiaDTBoBKWDna8udA4qC8DjrwPXk2miUjto9LSbHSUFMmNw3fJ7Po19xp2ZqVBpfvBA",
  "key35": "246pvahMPHLZReRkYSwHCmkrqXaGmn9H8XbvHNm7CS14zHMEf3suTqUZphxMzNFZoteovmPRpH6JFTckp9BeLjtq",
  "key36": "3zsd7CaTn1rTrx3HtXQqYXz1ii7BX1xrk3A1XJmc3XgzTC99nUcE5foqCHYfvAHjVDURagwJCeJyTKSdDfGKU9AC",
  "key37": "4raTUYpHx1X8bGcGwFrWCseb9bJYNYyqSxv4in4Bo96qdjc1fAxXB2xiQggmL6Ux4nUFEECUX3MvqQ5RYjHdWrTh",
  "key38": "4jrqfDFRJXvrgWGPFmRu93Hji1PNQDQZ8PqehpufofQvXK1hrDiaWNk6b4wpL9CNws9KbwtKferBs1tMGRELuXqs",
  "key39": "3Qks4ST2ttt4AZSvEgyfqiDXiJ33unfQ8yh6zdg25pzrwNmhDfHBLu8WsEwkiENkdVjB2TurcYdTspYiH9se4pJj",
  "key40": "5RbSZk1tnJPCK7JDUDiC6cg6m2JWs6kWmvPh1J8R7VRS4S9XUDChR3QX3wdFeqfF4ZyGgZAjV5cCvjpgQHshnrx1",
  "key41": "663GxYqyFLRBFYM5dYEnf8q6gBaaAH6BgJ9pMDnBhJhk4cbe55nizWjdeXdstpb9ax3ux8TQM64WdanXn53TBhpa",
  "key42": "3ShKEtNjWCC7m9vBVvyMxadSNS9kktCiFfwFoMikmvEtnmebB4fWDDnLkBuWZrt5U2zBYmoNikD8zgRJ6gNdze8m",
  "key43": "NKDANiGZnXKb3T3AsiiAvUNcJ75A4y1DXasmFaeM8CjHgp4Ju7S6A62AfBFe7qnkuw9jGrJbg9ofw8PVW7YhJmz",
  "key44": "489GSaRdMvEWBjjgWsMvNU7Zb9KesLud4bosdgqJhzgjs8WHDtp3Uhnh6jnVnxAi5zLJNWhcQsLNJEf8YkyYVkY9"
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
