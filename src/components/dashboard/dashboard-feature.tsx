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
    "2EpCLXUYjnRHbWqQ5diWBdGveC3wrjfBy8DpNXqgh7uY8vMftFZd5wF1j9o1WJcWUfXWrUKUVyQjmaB3eFR59iaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAF1obUkJwnWsNYJMi9LXcvfqCxYy26hp2XfRcs44dTy3BsiUyUpVfC3bTR7FpgyoNVX5gt4smj7JJBSDKm5C2q",
  "key1": "23bcSkpsGBiZ6yEDUtB7J5A4jiqffdZL1yrpRNEwoyzxwoqwG7epfFFT3Zb9fvuSvetJKLqBm8rqfeoxRPorVtoC",
  "key2": "22gLrA958Y7L3tEUQV5EEL4pdLfyQy1i7Q2TJRMy8wd3zEitBmG1Z31S6pPDJ6v8a569aHe89VqDnBv7J3tQpjZN",
  "key3": "4fPris13aMD2PKaVGYWPT1AWq95w34QDBpu7WnfKhxPz694zAC4MpBUH32xLihJSUuQJX7QQ2jMpa57y5nvpLSh4",
  "key4": "28UYP8cjcfjdpLbrsFU5oCw8maTzexWmyLjRijheRp1yYiNKdpW2AswR1CBoDbVvYYsvTYWm5CSe21mSSdjwjWKB",
  "key5": "5rBDEy3JudzNdkFu877S7CX5Y3mLhGQJutofpLFmMf8p8vi31WifnPu58CWdeuMfuovd1FakTEBYqXjgWLTunDGA",
  "key6": "VqUSxnZrABm5kVgLjeQA9D7Dy8eJdxXZLmWJY3CZDRB3SG8m8acbfQSBrZo3Qz3qxYSbK9XJgcvpkHTtR79qw7m",
  "key7": "3iUDMAwtdT5Xyf7fR6cZDCNMNfvjcyqfS5TFnfF9p9BonrSsyUnHxopD1VnwVB2sxwvgrCC4fjCHLb6iYqCzSjBY",
  "key8": "2Uu3jZ9ZWN7Ez5U94vxc61xorbQxxwGPjm62YuUpNZquQsQ7dJFyEPsggdANbBx8QJtavT5i5iPByYBQY7Zcvddr",
  "key9": "4bdsYMT3B164Lxzqt9bbfdd826Dnkq2ofDFhds5gp6cWTHptZPw2U7c7748gNCncL5CFr3YzMvocG3qudJW7fzEy",
  "key10": "64qY3sa845Z53ib72cvnVEqHrPm4HZtvxGpV68pK7iCSzFpZUpvovvowYSmVjR5Me5LYMWrqk45X2Jr2bstPUM1c",
  "key11": "46fcDynutp25baX3GqMFcTsAPANU7HTihStEmeYsZkPXeU2zbDrHFQhPDBdPQP7WnfzmK2UyhVEBjbfM8dzgCkN6",
  "key12": "28SRajkNr3rCa5Lxbdojfm6YnfX6ANUGY9EYNt9QjQJozJZmQRGf83qufEoDnMggcV5Y7KsEFrtTVcCwiKeRjoua",
  "key13": "E1PvqeL1eYj8wbWcBWk8S3gGBuFfFDGodQHBo3SXwcxr1Rp3VcBr5jyFJTfoWex6wqK9F92A7XT5RNWPC8sibWk",
  "key14": "24rXuZFdjjDCMgpjB1kF4sCYNkWdjPpn3Njp75iWywHHQgJya71Z9SqXcaehDdAKZvQN6e1GZimfWDVhJKQZn85S",
  "key15": "5gFjqw3cvCZzxKyieWsuku9EALmDHReVJEuaLXkKFhaMdzwYtRsrgrDYG1bKjTWiLNXHhzqQb5S6gZatougkmXLY",
  "key16": "23mjRXRSmzycBdVWn72hxqQuNvwVKnT9aLpFBwNHVxC45nDyoJFySP845esn2dwJWFTZ4ZgkNvJExhix7wKsoz3d",
  "key17": "5Ci2kji8ta12xnfdnJpjATPuVYGvXpLxQYdmw5HwemS8eNifhBHNkqzz2P7Kypd5pZ4GdZbafRqBrVM1bWMa8T16",
  "key18": "4YsMQ6kdJAakCjtUDbBGA9ce6foKWioq6YqrUkwnFkMg5sc99xyRRAhSRustZp88oJnkFguFSwjasq8hXPV9jafr",
  "key19": "5C94TWfkPsua4gvQMQr6Qa6mPGgitdMSccMbAUhLH1y8ZcycU8VEHwamvDsgAj898qo4J2tCDxSZfRhV6uJNcpb6",
  "key20": "b9a7UP8XJfCY237S1WETWou3eu5C999aErSUQmewcdqTBEn9TLEPxrQUSUQrVC1bEWsVSmAaAmRVQcE1Rcq7b4K",
  "key21": "hi4sbwJYwngQ3wJxWRsUse4BtfjBFA2678gn5grR1q6Swp723USPb6Vg4Gi4JVNLiwNg9rbgEZLPhxVZ8mDERFY",
  "key22": "4JHdJpAkpEy1koirkLwBokCo4VNjQFsFKaxMgDv4SvWja1k6q8mdjsasXJ9s4ANkErTT2KYHcA4AAHXrZ6vfp24t",
  "key23": "3EkKLrjCUT6xe5qpXxasp7XkqFegGeRCnrkFrZVusaX1ddXhfhNUeNcd9BV7Fe5YhdaPk452dZoUJuqhexSrPu6H",
  "key24": "4kRCJyMd5Ga5mDa6Y8VhS1LnqvS8YBUqv3haGjtf145REm9319DfhkK55E8fu3GWsWwAeFV6B3Q3HNDefgNLNR74",
  "key25": "5pwhYpWDawWfvih5P8FGjHX57M4BRRp7D2ggPHBNpjAtACzitQHHDME4FouEvAtwf1PQsh3ccxvkkqNAd9gWpvzp",
  "key26": "XdDw3B1Q3uXJpB9gyJ6B6dJ13RGQLwCoSqAqLknHJ1xEMsbRmABkvgEQLQSL9EBwQznFREoQJC9Ntyd1UhctYY3",
  "key27": "64QLSBxZwwtPDhN1StCA1LNeJu3wH7qYXSqsQ5ZZTMkLgk69XcQYi3jP8iBV39PWm3Yax6mmXTdQi5YFF5vFit3S",
  "key28": "4Su6CQCoPAWTpCc3GhieAjVkwUtdP2uuWQxCb3h8Vs6FtDKA6iBEx4Vh5b5RFX1VTrkBugjLFRk4xo3smWvF37dv",
  "key29": "2PmGmcq8uYwucTmE51a1BhEhKtHtbvakQiiH4XVMpe5t9dMLVC1k1ohbqKuWwzaUkq2Lya95i7P9BSNDzUxR9P3v",
  "key30": "5FiQbiYxbk4NT2cHNraSYG5owkVU7EGFECgH1LUce78nUSK1wVx49ctfS7hXg2H22JgNbzkuSjBW1AFb5ruovcrH",
  "key31": "5ADzPdVhU7sDsfSprGss5JMUt1YA695wmmHifDyszH1hu2JBcZPcigtUf9nqxr3SFDDpi7mULf68TCGjRh8x9ynv",
  "key32": "285sRQFt71VV7MaB76aNmQ3YAawZU7q8HEzpTrdKF7jknQeSCkUpY1PY67owgKW69BjZbAteYLg4Vqu35xi6e6hH",
  "key33": "61JSyg2bAz8oumJ26X7BG5XeyT7sPR8s4H5FbybzYbVo3okQALhnCEQg9AiXFgQp7ks44XcUFKCwaVkvUz2efuq4",
  "key34": "2J38d4GYxhq3P2p4GcBBd4hGwfF5cPX4iiuLboYBqHdDyx1GFks1yQ6dveHpKuGahWN9Qbtm62vCXbGMochu5rei",
  "key35": "64YK8pQe28gyBumPED6e8PhPKGPDTQyRVYk56nCCVPP7TMUc8ruVmCWPvJp7t5E6thG6WHp3no5URpk5wyQBH4x2",
  "key36": "4oCUk5mZ5ZrG1PDJMhwzYNSP47MkJorCttd2HXXPCGkWwtbfXyCRhyW7Tsd31oRzNyfjh4Lf6m17hdJYfL5ejNuG",
  "key37": "EGg4vPNgHVG4CLvDZNd4q7kMSBWjWtVNbmLBX3tdaEEZeuCtXDqhzGisWUvYeDQ1CddHoWSccCKmPcurmKo7GXX",
  "key38": "336Atg5x2fDPTVxeEpfY4ZMLCJRtqZznqZ3RNoqF3moF3p4k34dea7ZfKUEnXR6ihapoVFocgyxJddFf5bqEK1YQ",
  "key39": "PGetJTA9b2tNzGo6mV4fUjawAuGZvgWdtBZEiDR9wXdrMNVKUhfsgKgDidRxRZ4C3DrxXc3v5iu77m2jXSPrnEF",
  "key40": "64BiubjzMtrL1pa6b6dG3qgsScPRiTdZZrWUHuoHjTP4vA7LMhMpZ6FK8WEYuZ3mdzCi6Rz62cxcuihKTacQDBY6",
  "key41": "5dsvpHbY7v3Fsi979hpZaPMVz6WtJRPFF3VSntBhDHW3eXZLnq8yErzSycL8QxGxem9SXNPm3T1Y4T6QXBxv7Nne",
  "key42": "5VrB76RDJf5XKB8oxS58FF5stzWrgaYELHyQpBZvDA2P37aYRwXEvKPZ8PSq34oErVNxGZDYS6u6WcpAJTJoVzvE"
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
