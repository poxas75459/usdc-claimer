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
    "3b7VqdXjQ9wgXnBPDQT1xNpq2s95Zxhv8XHM6omnqAXfdQMHcRCoN22qc1jjAXMxzWJhh4h6TmUzNfcrfPL1tTFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhbbJtQijvDfQqX7hv11d4fLBBPrqYkTGixUiobFQ9Gv8ZPQ9jtcDqUc6pTJNhcFkqfu94xqPTuokdXZeyavegF",
  "key1": "2k1aTDYzAE95esYtf5gxKgF9y2m4VDM4SRaYNri6m4rNdhUjGpwzdQ7fae7rkoSqUeqMzcEqFLhvhKhzmJrEq8kQ",
  "key2": "Sj71hVCDr8AdPEaaoZXHjhmqGDiitfhBc2iLufZJnkWAmDqrZzRRZuWpAshhMXgbs9VEhmXMJq6FMjJJebSHPrJ",
  "key3": "5dJSKFKak3Js3HafQdZfA8EcXKt1G21qgMZ4hdLNcJpmgrF4HvHSEovRZhANk4G2F7mXbmA5SkPaM5xWNERNgMQD",
  "key4": "4kUhmutZDaBjvYLkaGpbtWwMDPnQgGLPsJqKSMjCTbKkH6W2jJCdsXrTk6QgNoKaDdhj1GX5h25ixuLjhTucymBp",
  "key5": "3qeAs562DA57o2SrHHYWxjT6ySvPgLsdWYecVnNahkcm2HFVDfDM5RTPVwCUT6Qw3yq6Cwhyeger7gEAACU7wbEp",
  "key6": "3GD9J5Kg8DxqGV9EwJY3pw6BWmWAo4FWBkNwCNNGDe1A5Y1cVyQyn2BH6Q31wsRywHbwxCNcYPFCc5kRAm1s5EtT",
  "key7": "4WPSZNxg4TevVqSarYiCDh9eaUJzoM4kGKre57XfZg5UNy3YnNKuM4rNNcVgp5KTPH1Nd5Mrf8DrA7puiGVuU4Gh",
  "key8": "4PZFbUawcJ31ikvV2gqRQ1PxEXunXcadnY1diyr54M2nKJFPq6ERhJEt1ihDmfpUwhkKPHN1tns4szdYbbazuXSv",
  "key9": "5N3oPWNxbxYY7LUcPekoWXMYDQWTuH7ve1JDkGyHttjLetoEvjzxMYgCovwaYaoaWxs22UeGLQyMQv6a9txde8Dk",
  "key10": "3GbyvpQMsq6rBXyPwBMBf7RiNiwqPQWAhd8NpbTxhG1pUEdkAJaAUjht1aHvdrhomY8fqShRe7e4smAHxS29iA4",
  "key11": "3Jwsf3mDfahWmVfmSeF5yN9EZ7tWVGRkBm8ChhSeRyprswa1STy18j63G3m7g9GEYWa8KWJzqWXbxZsSJnYcYx8C",
  "key12": "3UCXbHG4kwGPGa23C2vigkPGTKWRc3BjhUS9bqjJhVEPLiWzrRwHRTNcRxGYbi6FANhFQo63B6xLvyNywvzpkh6F",
  "key13": "2zEQkH9fsPr9qBzWnXfQzouirxj3xn9eJja3Jd8Kytce9QhhaBUqKzfCfnFpdVDTb4BK5BdPxMHCz8ak1mYLhZS5",
  "key14": "4p7oXnZJ9bsYJvqS9FZG1TkLM5xkrFPufxrKGMEsP7qCr3P5qZA9YD5344ay4Bwz8KW84UWPE9SW8Lcouc52pcF1",
  "key15": "3LLsRPUFMxV9q5mH3ceRS4zwNJz2nds3aZt5JUZTGhtxJKWKJgZMAFezr7FrK5uTvegmxohadafJUwXMgNxRpNo3",
  "key16": "2qtb4bemFwP3rAY9WhYLvoW7NfU632YDP4gm3465xRjbqzY4driTsyryxvz8d1JnUTpRziahTxuiVZ1QZ5UAqh4",
  "key17": "5fwx4hsPtiRR75BHupLjx6Z9FVfsk4dSLT9RHX8E7DCJg7HJc3GmSU3SWxZEMUNK5ysS2SUhye7GWm85paX4b2h5",
  "key18": "4J9ArqPd9aaYNCPyHf5CGch3M8pchcSikwyDFxxFbszoq8Ae17S5mb6HmUwBWWdgpguc8e3Xrr9D4kREeKHwT5nH",
  "key19": "2NYMuZsmopBSLtPHGVoHUpkg9Z97NwzM6zzZvw7J1FwWAX2dGY2AjiJfnDAqBfTVKCJWBeTN978sGC7sBx13iVXp",
  "key20": "VTW5FYcZGauANrXj1WHpEshqQZpmqSXRgBo4Pnwzp2QRZoNyALeVQ3xbQhavSHHRXHWpdGbpQqrXKuKCHhsasU2",
  "key21": "QqZGt14ZebthxwqLpbLmvk94AhFwVkUTgHa4noEBtkz3N3aEG6gNkbibwDtU68bNJUSSDnVubRAMiXL2E2yvYqo",
  "key22": "65rud2KCCubpKjY7ytaM7VTGAk8T9RAYH4Tzg2SBTVNPTczHkJyn2vbvezN4FrkWgB3zqzweJogx7KSz4GTHDuA8",
  "key23": "J6UJZoZ3E9XBm4FC7re41E2MJM2FD3VpwZQ7FMorYG5oUVugtEN5FwKpb2DTNfUBY2oUAwHZk3tPiDFbv4FayHN",
  "key24": "4YcSmH4PxxCNxox1SVNsf15ti3XJE9kh7b4DbiUEJNwPbququ1kRHcoHJsTDdwgKrxtGV3iNWxjqJv7qa2LanNGv",
  "key25": "27T8rUFTvUADcU5FxRz5VxYGXjiDAUTbJrsFwadzGnqaDijyAyqn655QMDYt1Z9vhayRv3UXudx3ehxEqk3rqQ6r",
  "key26": "49xUCpEHngPn9h1u4wCuEw1W38f7DxXmtpyaN8j469AZx1Ahuzy1MeKVNxaVeZBSXtRkrhHiPmJdDDcXYBXKztsN",
  "key27": "4HMuTfYYPHoEpYfNcr9Lw7a2Dudb6mN4VrHFPprJWJrtY2KFmgacKVGLACeRhfnTpyFL84SUo2oUj65uEmMzZeCy",
  "key28": "2rFBQrvLRTFybRZCKCJHyybUgd569cP2nPBWYwUMeVVypGR9XrGmRaVu9zQ44Li7hSvVQpTj1uw6fQAKqnzUvtDt",
  "key29": "woRbAbWVhc4aaEm84mwQPBdJbQ8UDriW66BrAB68cwFgSaq8m6mvrnPathfNnQ8wu83mNjfsme72zPn2TC2SB2U",
  "key30": "2425BYGf1i5nwnFx4LPnuaL1hgbf5YcaUhRsViA93ssUgZbwUsPNU6SkEXaFFA1LajqcTSage2SpaVHF69egEXVD",
  "key31": "52QujtrR7qypkRi4qE1AgvhifxCUpr7UwiEhf3dafiaV6gjkh411qyu7gYY29sMBcDhD7TKwbpUmUYsnodhVVK6j",
  "key32": "jnLVsxNVpnmQGyKyQz5jKgn1ffj4fBZkDLijAjyEFRrhZ6wxKEGAUJf3gmw9Jm6eevCBLSWnWiGzkEUJcUuiYLo",
  "key33": "5ek35XXBG3LsaQCvYFKR5URNDLpjByb9SrDiDq78itBm25q1HYbCLqsMrooXZfonxKES7bfaPVxa439XDJoJ1CLU",
  "key34": "2PdDJ9SURmE2opeKHEVQjDjNwX36UX5g8ydBwTFZnXkXQmAFsGWYs75vSxNa2rbDXHirUPFRAoc5dryW3fh2FrHT",
  "key35": "5osD1z79LdtVD59VCtZT8TQnzFVEhZecdFAQZdkNd6cSTRPQke4T78oqLECtkxrVLXzH471SfiBFobjjebuD38wA",
  "key36": "2xWGAZSDeyxwu3MyHZPKBJTBebkADpWCMLo6XF7A1LsAc5r7oQQjhergpy89JNoUbJ42kA1Uprx3Cme6gan8xq6L",
  "key37": "5kJnqxn766MmZQQPHZw2BTHByZjBbLSpBzwjrAZVAmVLquaEEqrLpArZfHoVzfiG4ysjYyfgbMnEn6yb44VQraBs",
  "key38": "2hiySFAg69F4ZfgDphRfiTb3nkFTSXJ1TGUVtpcEhSpfQJ19PZfLDzuRa6HepqihVZnojRD27BnhTDE57sB67XAu",
  "key39": "4SnQ4ib7iDpz5GFMuNmfhYpyq68DbLyJWnf3t1USAckbcXVQXjSc6zpRcuc8HbqVvrLgVPJqxCVVoTAs8g9fa2zQ",
  "key40": "3JJX2hVtt1eTesRqK4KQrWXzrg1C1vkm76XjxeDaBE3eDTuHiGCJsYvh8Pb9ypAB1F6NnWNFb2yB6CzAWzpr8f6D",
  "key41": "4TxAnPnad56ArxfqynZYujcuwf6oELvrsTHPFFCNEWNDpNH2xTcnnETocjUkuN7DGh3GRNagUp2DNoRKFPW8UgUB",
  "key42": "4kVDX5yop58UGx7kpqwBjQsSyJSzc89duHNYznkwpfnqvgZbQEB79ggRbynbLLUJCNwsQtYQGUDTWmp5rAKqagCQ",
  "key43": "5CsLaTmgfsQNCnL5wU7qfki2KX98jwagrfPNfCmGFYF1SHZCLTR11pr11nMr3sMdUfoeiLiwVNAFNCJmeV6E4KC3",
  "key44": "vSzs1wZq8svRN76Z2HzhGMbdjVEpKQpLMUDiyuXm2xeHULdTfpjKjjySH1yw3ViJmmdrb5pm5WnU58UccZ1w9pv",
  "key45": "4wMmkpRtPkgLDXtZw37JThMuPGajxpmWESoBU6eWaxUpXneUXzc6sT54ZCCABioH9FG43mcvf5DXH4ywjXTXJAPg",
  "key46": "62D6JHhFrUqojtp3amjvbQNffr8GyyriEskEwFETCYkAvyoFLXeCxyWeiyfLr6A1JBoAbQgK3YvbK5fnCNumF2q1",
  "key47": "45oUpzr9AnwBdzSFWLRTmYmTgSmyqPpoBrpZcBnioezQb1zeuq3CgKa8U7ED5Ng4hZjSBJUWvcXNRkzLt1kFHHrX",
  "key48": "2q26MuZ2XGTGRagxhM8tF4uAF25YQ6vRKy2S3ab4kYCc3mZWuepRkh3p6QvXGjxw7fCBwxK7p4hrd3hTGbMVmUAZ",
  "key49": "23jdqtAYowYY57YoECuVUbzBXjsXZqYS1pktFLUkfoQ1xyecw1pbHs6nnyMr8H1nCCvcR4CzZ5eTPU2J7CPxQibF"
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
