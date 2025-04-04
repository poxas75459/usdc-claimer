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
    "2hBUugVTxtFejwc6fWNekhccwno6gTevcRC6DSAaEygVkhijBurQXZYwcPNT9dy86vVyjDz6MZKg4fBMDFbj7Vyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTvRQgC3d4h2JYHkM7GK8A7oQMgwtaqCJL8SUAcG3KbFy67tbWJrzSoXnyY8dfcTVB8mTNafBa83xTvRGButAtv",
  "key1": "2REaDkceSNo26QxFMD3A3UbdebHRZSQSaTrLtwgRj91C4gcfXnD6pjxtSX462K41ggKmdwkBKgaqwTvS29C7PGmk",
  "key2": "3WtxraNLUSf4NZVpQ3T8yyrF6RhZjZGWq2qhcEVQW2H6r3nGoVBKYkUnYS91Jj53URpkDVUHS8kdFNv4s2wKfM7v",
  "key3": "4fVRJkdRYDZbJciboTSYsm1rBdqNAhuR6mKTwEs4gsozqA2VsWSs6YJVnQ3XDvxxKHY7YFu9wxzMFrFm4VASKcEa",
  "key4": "24PAgUhmANKAbSyb1EeF6jZHQs3CPaUhxkDwML8dm8Pfvec2baXTz5bsMbWBv3RjahjE4uSEZepxFqJe1gXo82Px",
  "key5": "5QrqBcpoLUYaQ48xH23uQL2FUqBugH9inWS6wDir1Rcu83AauZVxpHVWgQAWkMZZNqucyHowtSnCA8WfNFFijXEd",
  "key6": "4ifRfWj1hK2UyGNHccQnGGWwqJcGQcTFNrWkgeYHxmhsZuHLcvYW5SnFPF4YxpCsCwGB5wkFQwHLGL4qudyB5GmE",
  "key7": "ke82bpADpSRtVhuWm3rmARjSJKahW4RodY48842HhJSbWmF5ysW57BSEaHgbj7Uy7odzf7SbBYBvZsvUXhmp3tG",
  "key8": "2Nq9WXEXQsh2V6RrpHbsQM2NBNj98tVMYM47QkAQ1DuENRYNdzEbBt6mkKM1MwU3z2qBa5LZ2VMobgvQP56P5PJW",
  "key9": "527gs7ezdB8n1NezEoBf6bBPp8sbPjcjEZnMac4dVuWvkndALN2z8iK9eyJPU5rdXt7nCximZn35fwqFZcwVUP6j",
  "key10": "36WcWWZ2HxjmGvFEEwYCMYp3gyRqsR4oqJyva9ms1L9k7iVAtihSoWxWyWopfQMhaYiLbaYieBfDfLpFAB4iTHyi",
  "key11": "2oTDGHNrtjyKqorFK2MYymUZvgZFiSVfaNRZ8AN1ppoTVapH7aUvv2ZyxoAURbddd2fotwVtX5zBmY6QzfyinRTL",
  "key12": "4E6GGLkYfKMeGgr33m5dSjHxWiNkCxRmSQMxmKsZ6ab38eQFxpBZKV48MmSSsy5MHma18wjDSf5QyMdLtHyTA4a2",
  "key13": "5XdS7yBh2DYZySh6UBRJo1j8Mg9Lm3b2sym9kNNTr8z5vCNPWxSzUUEu9SonGPHQNxj89C24mUZURTg4JDrRUjf2",
  "key14": "8DUADtnFRJpa4m7HPn3ANs6xv3tmA4eY68w6GJg8epjL3isKkuPy3paDu8WtAMN4N7A6oBFau4pmwrDQFsVZLTP",
  "key15": "5zPM7RPfdxQAz5zcwBHi4xUR6XABh8YtzvZi84rJMYZRu8jc6nvPqoAyDjazpGZyXPBXeAbcX9cky4rFn4azaDP9",
  "key16": "jj4KigG9Da51o2XhpnBNBzUPupFQuHb91Dn1Uq3PYkAyLx7EF92kh2wRHmzfXQhdY2A3jCHULfVV65ZMS6Rbc78",
  "key17": "4iR6DSvr4pLieCssUCtWZv4fc4T1FfFk5x7enxGhoi9Fy69fbYx4reV24MLVM3hm9WWUThSH3SjLktP61G2LwqVq",
  "key18": "JZeFxspgrWfj7zn2jabJq3kyqsx5ZcYgre4Eqmafpx1RNSk6X7qxNJR5DjXsSGngZFyngM6CdRk9rifRh8a8EM6",
  "key19": "5FTfL51NsWgdZWaykn8ne2NjcZgKF8QpyXhch8uyQQgtUfQ6q7YJbeEhAEgYWDpL77DiuLTmAVHd6NgPEZcTVF8F",
  "key20": "5Pdyz7SLiiiwoKFSbkqcWmiPdPbvqDi2WdSy2fFV4b43XJKYHJotjerVMzm5mMP33cdregMRGDk8Ucq4x1YWYhgw",
  "key21": "51fmEuV9Bw3Duofr2aLnW55Rt9i47oa7nuhpZ77BnECyZAb5ShkNQiN4DvpGNMpFaoxPDZCZReFy6R73WJ4PErvE",
  "key22": "4mThpcB7x6qwGTpYKYfHM8phmdqCpWkoBnd8Qwf1iuP3DrjC5dRV25G4Udz3DMeQGM9Z5Veub1DwrQTtJqrLudmn",
  "key23": "3GS8NYD5LBNWEk8sNw8XxUgahZxp2EwNMkPV7nXPmbkog5mnY2cuHUEoCAVyoi5LJkr4cBzNZ9Zxf7Ee8czDxmXg",
  "key24": "5H3CsSghSLDXcDN2P4HsvY88avdkF9bmiFrQo7fVE45fAhDvYX21RVg2T8iwAaLTahkzdFqrrLR4yU53M8o7DLhk",
  "key25": "2TPJZx64pXXagSSrwZWxwGXb6h3Dw3vGJ8HYVCov8jrrGdCeZ4tCdPpzKYtq1CMYXaYPDMNJ7r9xkiSZYhBt61p4",
  "key26": "jWLEEtJjaKUita45GMuP76WBDMwDZHe2jsKxD4VjnCgTYrefg2j9oMMQHthr32EhiRdTZtEq3HnhUQbq84uogtu",
  "key27": "43KNGXUWrWDZ6hAKfaZUn8K3bv8waa8xoQup18fm2Yci5TZ8ZzxYhAkwiVRNQ3Ufu4G2egECdbvJa23eg6rLhX41",
  "key28": "2ycJwZpry6Wv8zpCoKUszY7sbzz5bGdcC5bo66ckDBPBhLWGM6gTAqHm6C85617y79ny9TGjs7TRQTXQUx7T76ei",
  "key29": "3jfpNR5HpMJiLYR74L7taCULoeGUhLaAV4Vf5K8i7L22ZxunoYfeNVsH3C19guB5UDvtNdY9Ft4khZWrip42bXxe",
  "key30": "4W2ZfZx566iTm9eNygrkhvfeJzJK6X5BSMUWYQuW7LpJ6DNQaxbgH7P1BBK8kYmSs5pPG6FAJARYjGdZuGEGh4mq",
  "key31": "4sMAEtA1ATM2hCtvw3RJMLSbqxMwGCCevXs85drABxeG7Kb3C4cADyWUX66FzLwL4AC8y28J2pQNTUts671y1KGz",
  "key32": "bSkTjTUu4W4oAXHh4sAc2efGVzN7Qoagvt8zKApDwut67ovhthpB9XHNURThsyCJPTJcxKt2DqjB9vCT1mLUjpW",
  "key33": "3DaZvBpFLZWkFy4LUxiJ8megRVJBR7Euxp3yWFZH27tz1kGvFK1ywix8QVtUFk9aWQkLtxaB1ebSBWUbJU2rYYc5",
  "key34": "5uQCxX8V8rv5EJqotcSHLM8neQDfYTVb4UsCaRPaiHYt2GUMbQoxx89NuwdjZnF194wfP4wLEkntMT5gnoJnpYJD",
  "key35": "3tETGKWwfWYN2DXaeyxAbgV2HpsPEvoXxyK1cuZRpV79FnrB92mCRp14VwZqJ6hEYuyQTPRSriwvc1F4UECuBhGF",
  "key36": "33mQwtNxvHNEMymVqeoQz2LEVfTE2Fv1rBZ3qU3y3ggCWdDRojaHJmRcrh24geAoHVA8M6UoUzBPmrQtSUFKJNcZ",
  "key37": "JmVmiJVTtRxGGNZWgsrrg8CurnWEhoK7YXVn6Dd75ZD4GnuXnBCGGtXs6rT6j1sGtL9ZjDX9AR1zsBU2RuRfsmW",
  "key38": "5KDNxBFtHsEmfC3RwqVvGvBXojUrTcXMX3FMySRq3CgkfBj682X1VUQv87ejRKzpmdHny7rAkaBiRyH9Kc1U2ds9",
  "key39": "3sAfLJGcNisya2T12CEYeZaXu3gXbYa2XSL43TN7eqdttZ6xfNwCRGUQVEDua98myn2VnN18nBeB3xFso68KuMnc",
  "key40": "4Fwgcy3TFdLisr5Aasjs5LfpR4Ay86CkR2c5E985QELMeTp4T46fYNiUBL4VYrgbGo7kkgHpvgyYXP3SpGcJzJMf",
  "key41": "2rqs91NqhGNT1DN2m2atxqmp2LMeeuv73U5c3KHeWjbUhVFH3Z51hfa1GSdh5mhNixVp9qyyXaKMKmTYgNKoRqqT",
  "key42": "415HB7Nev9tGni3XoFwRSzQb7SyrBLdxznGWBTjqeWWRRwxCB1pqGmt4KE6wPaPZUonnXHs51Y3WfYKeWkySkn5j",
  "key43": "akSJXQVTozPb2CDhEU3QcExpXQpppJDNMtwvrUX2tAkan9J1QZrm1nqb7q7BAaEHqfWDWXsaexZQr4rZ9ZX1xYj"
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
