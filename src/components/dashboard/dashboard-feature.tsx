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
    "YqWZ4NrVeWToxUswg3saJzC9R9sCrJXSBUHWoEFRjuRhUhcBLRD5stoFJbSLHza76A1UVTHCEvrp5oPBHD3rUAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hvLNDcvHa8yJ132EL5vEen9HK4pbwUR2hXjabgeH6uKdNaJUdceQ1qFWaVBmBknMsWhyGkAGSXAVgAeEtapb9ap",
  "key1": "2MwoBM5EZV77fqgPQUy1UE9XNJ3Vd2WqWzdeXeJQQLKkX22j4PewXVRBKRncihpF3zWQeYSwaLeG6nTKNKhJFByE",
  "key2": "2uqYLw3qfVE2mXvbYkcWkYtCJyTcp1evnGJeRGELmEEbewycWC5RyceGWvu1EYup3LappX8F43wPMVohPmfGZTaQ",
  "key3": "4Dt3D3vV7G5frNhGCMiN8A5YxCQPW2RAru2b44m2wSRqutQc6M1orVJqNv8QJENLTnjtP8Hrg5EiVH9DYDNA82AW",
  "key4": "2NL8DHCWFWSYEhrcCGbWw6ijYVpUAVbbT65vpSfrTP91DHfzD4dQ7WnKiWDGgWR5QVeTeecaV41xmBW8gqFAvEU7",
  "key5": "4E6KWArVMLesBHKzgfmaMjBuNjtR8LDfHXUArAchLppWsLzj3mL5DgKCaQma4h7MyLtfL9NNA3qLU6bH61dNatGX",
  "key6": "5Df3iBDhRLQDFYZmfEsQiZq7PcGB3GkqZmdoZSMrU7T6ciHUVdDktwtWpTr2FLWEwGknvq8FmaZWBPtttaPxicL7",
  "key7": "2CUNeg3PfE7A9LKkg6ZanEiBg6yyXxjZUvRuEjTjvFq4vmZzbEJVLrw3ExLkHgNM7CEKFU98qnePbYG2Lxw4PEry",
  "key8": "4nC3tR6Sn5QGoCNSXj3Hjr5Jwq5F1qhqmf74Bvr8dvh6NNgK9irn25irRXUb7zAoRCjHTvadhYnbGFAqYcjDsfgp",
  "key9": "XMSPcm2Epn7urL9Hmq2Zkduqam552wdFtizK3BsiVeHypz6xSzABGh73LPFSJBrXfipymUvDDSmXWfBMjdZFb4B",
  "key10": "4bbXfyZVnoWUiRazPkgxrd8p3a4XyG823nMW4Q4L7uTpX6EL2r6J4ASVTsxR1sYDxcr4eDXu5MtMuxq3caeQEXrW",
  "key11": "4nLxLyiVXJ3g7m8AgLSdyta4g8zRHKbSqfak4wAL65jzgubMuu5VE2JvQaTdzXuEuKpXR5PVBegRqJtaoUo9FrsN",
  "key12": "6HreEae5oADRMdnNJ7er5u2NZ1z1EneswTAKWiYbRgZfpSkRbHGhZj3nJNiQu6dQhmamsr82eXCKQkFkS2aKTdM",
  "key13": "2vGug6d82awD73zGarmi2AP3vgq9Y3A4fkBuhvmcymU4KNu6DZkr9CfZ3QE1FiGWWvcmcVBB46cPgLBUqcPu5PNG",
  "key14": "4TMvpGS962LxM59b55oz8B7Pv1jzww8FmVVs8pRGVBHk8SaPAtThQXN82VX6YDqLFmywWjQpxsSWCUJycyB96tha",
  "key15": "2wf6wqBLNmb4K9t572JUhfgqtDGBaBQTejEXF2LKgdA2NZfeUoZSw2JFhxivZBJhLsHuk2KHE97hkpXdMpa5MBHM",
  "key16": "2MPLcmbvy8x9uHoWaRgTWGCKTPH55TYm6HLJGCP5BfEcQDW2waATtrVUxRXgwz9hVky6K5ZZDFBhQnoV9jBVXEM2",
  "key17": "kfdMuLqr66876Drsv8opBRujGsfw8f1fSfKsmLj5puC7Uhk11o2HWXofqsqxWVwczsRtp274DG4z7GVhM6vfpg4",
  "key18": "5XbJQzRXTxW5oSkQM2zu4zXQzf78uN7Z65CnoxoHsY7xQi4HeufVgBtz45CFeMezxyD5W2URjqtaJMrtX1uyaggQ",
  "key19": "36oqVMdofYhhjayxt1c5gL4z7SDfmo1Q9H9AHZcWVB2FiDSu4hskmxUCqqeHCiGmbZYEGBL1px7dvdgbQteY86ez",
  "key20": "kSGYY3mjgnhHrWFtq8quiSzRCQShUA2htdeXazaTNAgcuPWnc8wbbE5pBZ8JLkWBmETY81DPReSMhJ8kQD2nKRr",
  "key21": "sEEc1W5ycM3WdNdGTRyMY2drcQxH417SvKAQe3Wbfq2phZgxisfStUNQjeUTz4w3GMTPGt3t5tVVYa1e7n7dcPC",
  "key22": "3djsrLuhoZvJwBzaZiv7wBjHdbtBC3dMNqXkzxUS8gEHG9531jduJxUkHnxj4Gp3FuNamxAmMtCgu87BSXXfwxDN",
  "key23": "59WP4MZAPMkS1weEykjmpvfHVMQAXUcVbpDp3auDwY1YFrePGp1ioraxaGT75bgXWhD6TWKTghxrEgtvAa1BHR9h",
  "key24": "q4mguZXyQUAFqTm4jFdFaz6vzXUnn1PJti1GRRBfL7p9L74XQZP7b8MCuKPyLwjAV3TQuKe5mktqswodBk1pqXn",
  "key25": "oPHGQ5FooYVZbadbQB35SWAxYz3bZFht8Ms12cdBCxpUiDBNBWwxhzyz66C6ytMDdWrT4f8gXFeQDHATGGXNx6X",
  "key26": "2cC2fzxuBAB64mBGF9iDrUSN1nbFJS3CX6opXa7cBfB1RBNEVhqe4cNYEU9V487UMh4SV6Air8p5q8AcC4C938j8",
  "key27": "3ce7cyBgxAyw9Q4pmSNynqLGYaErgv21eX93XjJ8fXbZstxnrsAaFCeHqKk8euv3LGGSv9vJJQ1cXqb2h4Liz6zx",
  "key28": "3Mwa1F6rRZ9vD6KYaFehQm4QYZi1z6BL8kGNzXMnWhdu2Jp4nuNpgoA6amYHibBQXYVZTxfVyBjPoJgXY8fRp6z5",
  "key29": "5d3FtjLDa7WUuSuK1jSfNijhTKL3QrEKb3Chq6rU3K8xb6cmqFATXmfrZFyJYZLvpdFQWnJMnuPnALqCT7RfnEqi",
  "key30": "3r9snekyCcHWsCc9Kv4mfeLDGsJByZ3aAiUdkcUGyzSzQRY83bDeEwvc7UT9cVDUp9XG4BaG27SuXNdUwK4reAeJ",
  "key31": "3FJLZ6jEU7LDybd36r4fZ6Qcuy62rfAomLBLSiEZDRAvnX25PGYkSR2GajwLzPtmDv3neYEotD2baZ1MJd3UxJrF",
  "key32": "4VuteFzYeWtsSQ1WqBFCV1N5WsYsFi3wNuD42S6SGFTdsHHbe9Wuz6RA2AexADZu3yQfkyzhfMd4f8Zr8wgxZJR3",
  "key33": "6792PGE2313A7EgfaViyePXCCXRBkcukkPR1nHRkUQb4TbEQQrbBNNp3AWYCDX9Yki38kCWMTmSbypfBan2WFWhF",
  "key34": "2SwuagXVTVCmE4BHrrTgHFjXCe8j5Wu4NkpTsghZzUpxeDYXE37WWMsmtCdFhCQ6vzNcV5T87bXy2dqDcoZ539rj",
  "key35": "rfaLPnu4m9fU4de6ddDdinXzGEDSL6udxaf5DmwXsQ2Y1XcVWayAqcLcgySdCPVonc1GjP2kRsABLeaQG5uaGJG",
  "key36": "2yE1PCKnCy5LVpML4kUF7Lehq2GRdR8W3dknb4kw95qJRuSgbZsRoHtjAwuTExUP9Y3R593JevMDvmEhqqSeugQW",
  "key37": "6KFrCZFJz8tkDL5r4bwM3aBPB7tASvguCSoJEmndFjTnkbUC9xVdVeboMrakGhzRGPRaE41szaaz9XKumj59gu6",
  "key38": "KX4jHQrNjXuMEHsBfwewuFfacvvkvooWdqVfkc7PvQ97akTGmuJQ3h7G2MGkMx9KpKp9srfrFPWW2t9NY5Ga3U4",
  "key39": "5kMgUCoFuhMxuzGu7wHgfA9eCQERX8KX7sY4BTD6Wg9jw4tePeQ56ZCHRctw5CyVhibA96kRb4rWUX1zUidscHuw",
  "key40": "28FoZSvzBTyGJ45FXYLN8HshT4BmT8F8b8wkcy7w15koAMEPzgHJ3zbSkfRECKAkppe6BNpWenehUdKLemnvhFxE",
  "key41": "5DKmCU6VCpcDeESGDtzAoicRdoNkkcu9Y3mTfUEBURfz1WN47AqyHVYMKQfpeAakWNG4ckxtq8cu3YSQWWXwoQDd",
  "key42": "G96H1sXFhqjXX71B4aYWM1RYNWd2GGiqhUPr6CQFKCrXAAaxo7ThiCvWwaeVLMnH4JFJWkJVrexTGRHtqEc4KKU"
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
