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
    "5LVDm86SFP2aQaB2e2PATh2HZpSWbynQC4CaZyApQ6Z1Rch1MHNF1ri6oZuZza2KHrFjhBd7KsFV5eTAH2yFAERy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzGSeNsV6Ptxu6qSswxYemEGpAXbMkHFFFHXEUQBGJthssTCqNXPybepoDFmj77fBEgpZzvH2XLLTsrtsc2rkq9",
  "key1": "5RKcMFcrov5kWnppDH1TysNvTvCnSzXVz9efKvQsx5tr3Tykv4ipXJi3VA4Wcx3HXHpWw823MGu6LRNESR7AWktq",
  "key2": "YNuY9Q96WQy8N3mseRy48Vng7RViutZkmGbgSLZsT5uXDthqpJxnH4vL1fhy1HPnPJhEcxQgReTFeCeSU8EmF1Q",
  "key3": "5HEhwAUJFjZnSLEVXzx9PYnBPnCANy5mixQ38wtMQww5kDfUkZTB83Tnv2HbVMVLSgjTTnmLGPPjzvAdp6escaD9",
  "key4": "2pWNGgzXbPpi1GwuVgirNbnLKgChT8bJJaMxqZM6UgeZinvAnNoJdwDpf6cdy9cpZrAFcPm4ti2y8XcBxD7WegzL",
  "key5": "2aYtkNXxYeqHMwGWJHiKWi8MZaaAXjuBv6ktyBgCn32C61akRBdKmQb2oUwM1aGgm5uiqf1FHaV6SJAEYVBsHSTo",
  "key6": "2nwM88HdRkKSLDk4BNtBBiZDfjgFebJYkkkQXXYuho2y9NQVAGvcaGYHd2wWj3db6NdTkYdp4ygkV4DQX1ptKoWL",
  "key7": "4zurFYPRCeUVV7JQbXQmipCikyjp8HRCv3UJKrFmrk3UdNx4SHuxy5co46mJ1ewQ5Vc4PhUWFqvkWns8H58DEKz5",
  "key8": "5ZwDgtQLzLwiJKzJKqgYv11PLJqWs9WRFQxDZB4UyuAySW8dVHFkPGqRMzSczHpiQk3zTx58wzHrYhs12CgMnMXm",
  "key9": "3GqiqL2YzKDHr57118JyHaPjj7jUXCAK4kdwVLNHZBEHXgCmeF8FT6JW2Zoru8tPPfbjvBFkETxmZ6DU46PQPKgj",
  "key10": "5mErJNZdVwUxxx66BLG5Xr8h5dS9ydCyvhFMeZP4mNM7dVtqfXdUkK8jL9gaSaiJmJedq3irc8w1MgkapTfjuEeb",
  "key11": "4JBWxLAKSuJsEReQF8rqEDxr5kwxn2xgZryzSymzhJQodHXKfRXNSgRbACazxdJzwLRrdMcaaRLqgaNPwo3E1VBE",
  "key12": "2EtVfagEVvxjaKy748HSsKeBsvH6v1GSHrhULEeQYAQC7M1Ry8ZQq2AbcmHizM8wzDGZdLRSEgZwa1nhu7BxiPpG",
  "key13": "5tNHgKc7pAjvb1o6JnP28C3bbUeqBKFgmruzD7HAAnvPCeaCeMXhy6hPs7btgPjW5X2r3oNxNcnSvMfs17msEqBU",
  "key14": "mWGB8mbDL7uRrGBgoZHexpNo11RZyBpJya7pPVqz4JqrAMUPfSP47Fd94d3UjQhtNjfgZvHmBwMTbXZJaRVooWK",
  "key15": "51CC4ugAuHTwBQRANgso5jWGqgU3SZdyakTFRQ5o5cwyjvCvJsa4VjqCPdb1hsU3qtEfTfVe7YuTfs6fzgH5wXxU",
  "key16": "5nBD2ZE6dN3DkDYmLj5GCtNKogvs2MWmougdQzoAfNSHZPucRY36BTDXYn9UZZ6pM7FgzXavx6a5vMzWArTRtSMQ",
  "key17": "5UNka6RiuN7hJ3j8CnTScacvMr6zVCnK8CL1Pf838vasRXV2WadHiawMMUrhYzRkjKWz32jKoRyxpApgU6RAYZtQ",
  "key18": "5wF4wJraakoVSfLFg8dcCUtvA4PcBqANARvEFeo1TGAwUFYXhVX3gMjvAzUciYV9j98NAzn1ChA2Y6uqUGy77AnB",
  "key19": "5BNUgbYPbzhHsEa5UQowHiBqpSVSfb38GPzGJqg2tPSePJUTvWD7QrXQELXxdrookMaKJSnrzHDf59QiqLwCRaHe",
  "key20": "zsCngur2D4tjC3e14UjoqZFk1LFPiRcaF6HEyTQwnAsMppCbkmAaNWW8tFtUdUquN9ipXr1G9gVBF4GsuFxPF1j",
  "key21": "2vFs86mD7r5fBDwZhLhYJhptFPcNaBP9K7T9VZpkvmNUrfakZjLuuvRSPFamRwZHZFmgDupQV9RJpnbfZKhoF2J3",
  "key22": "34kv29r4ztRcmtRMJiadrJ9SVhHezW2xizS1FYDcWAmD49WRCWfUR8hv6hThhEqG5pEZ3cwRpNRyhGavyWFxuv8k",
  "key23": "2HHxnXCzb2Avj8RVtdUUzSsZ9MaFDWaF75voYrfCR5gAaps7wFzB25hykUhLg93jtrd9zNn5dGdgBwFbFSMThBR",
  "key24": "2Jrjxk2vdnvY5KrJgwpomgXDKLExQjELoqSyNtiHPkmnvPEH8kMjnWU61xD7Zxq4JR5LqKHGxVWBQeaHdY1B3t9B",
  "key25": "5wfM7wMCdd8HrZrkjpG27dLvggPLkBZbPW8MhzpuaifD7rEu93P1YtUJLBjfb8ci2nuHvcsbN1dDreD3HrGm6XzC",
  "key26": "vqRB5Ti1AczHGX1sGS9cqY8v9HrQj6whnABeFSz7sfLWsab4H3YLz6FY5NPYSGPgF22gdvhbuD8ZmXJN5sM8MaZ",
  "key27": "5zFENWU3tiYmd9VbTnuJDtKCQVLDNG2VLdrgekVDvKj59D9N6CG2QBYbbQRiYnaKJWGCGNKccMYLj5681K5ExKqz",
  "key28": "5Az7dCLLFmBgAdm9cG3cx6nDiBeFdEEzezZD6W4RZ4WkMpUQQyUfq8MAQikFenR6J5EyZsRuxqcEV7W3L18Y7PN8",
  "key29": "3aJcFrsSxMHSMHJP97A1RsDJDhyhmtfxr5JGPJZ9CRqTAraxcTDpZMqQj8mDfFLjMufvhuiZDcVY5AdaPwYXoYuR",
  "key30": "24ggr9JxLKdKAkpbvKHDQkz6uTUgTMhkCm8eajDTCWk4ZmaWLsxgG7HRni3rs9bZShLXtR3FKDNjRAVvmXV3H3dh",
  "key31": "3RTvG39dn1MxtWWhjwWeufCoZgXeu5GikDB2z3vvWb1xPEduWtZen6N8rX9NAj5hanUiZvM8LKBmp5m95rQZUGTm",
  "key32": "2SDHwFgbCPBHyNVnKgJz1ktsgDH5mCux5CpTayRonhUd9pzFdppakZoWhLT1EVj2CPAAsFG9bEvMArTNgEBv6ekE",
  "key33": "ceSuCD9nmuZMau7jQaUNb6GHJsvUZwrfPztJx8VXHpq7uRuW1KDxz2THRictUuFBSSTKn1C1jwbZimZtip5Tg3t",
  "key34": "3CqdZBUCMQW8qeZdKnVwrqxpJqU3HvLKZiasou7cf3PNay9mRiLY3XE75o8AuA7CwqLsSC5WVGj4MepHPfL6dQ81",
  "key35": "3ToiAnr1SvvUpwr8UfG1yo3L7jzvM6Nwesu985gLXcGD3FZctPJkr7wih1rjibPtXa9jremf8SHHknbvaBHp1BZE",
  "key36": "6NKW6HknLoyR3ZggcCLt5s39PZcQE7YujL41aS2QtwwnutsbSrKNfFVuVNoWwPu9FesHMStap8qWC2Wareu1myZ",
  "key37": "2QZgx53zWt8ZW1GCqXibktWf75zAACWMMUkqcrntDHGaRFNbYETzGWRQLibpUR7f5SPe5dwqH5hf6GoZp8rfjZsu",
  "key38": "47ZhDUAUfeFYvwuQiXRRJ16L8mopWAFmMyoqqHK7ybuxdjQKFwSjAvqeH7ARNHTKzkw4hYiR8RX4SCQLDkYKSYvZ",
  "key39": "2FcUNdeLoyraSzKPn7Hv9UKzsFSmQmThAPAKLXgLfpQFXs7xzjNPLKNyQS21NMDafgHEJLXzthtbsgihcv3G3KN4"
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
