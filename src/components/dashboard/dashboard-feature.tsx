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
    "xpRACyKyCWwcsH6iBjyPcsYisE7oFDTGaZdpPGaZXw3tW6SzWhQsupHEr5YRYnyiApYDH1FNsao2jWFyoFYhBJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwUGSKJBtVDhg7kpLCzXGJk71ACY7GudiL1WtbQfQPyp33ChgEiCX1bhvHFFyC5pFzaRrdWkTz2bgF5tCvw2Sfw",
  "key1": "3abW1WKtxwqvuiwef41Jg6RxFBUfNkzyNDG3RLgk8eULBwjtvqEWZ6chT1WoQKctKtzDRY2u7p7GosbZqKf6cPse",
  "key2": "ic3U8dDNBNZdCW6gpbbzBPRaAmrMhpWnGutnA7bHmrN9161N6BUv2efN74MWECx1PDJbMHpSGgyXqa16EeS4upj",
  "key3": "2NyZfC9Sx7ccnjEhdiX52dfGta5NjP3cNzo5ygWwRHhVCETTykvwbMiWKzqQK1z9cr8yVFSDXmvmFTy17aJ6Rc26",
  "key4": "36YmrmZiq3cVfpraBJM2Kg9FAzQ4wvybXtwN9YdRfhmEqxCens7kAV1ZDPbkGp2ZbVyuGTjPeaiFy1dFcmMF8f4V",
  "key5": "561ePF73m4GdiB8jE7ctqMXzkowJ1HfiMxKYewbNzqgZVWCFJH6xRFgD7SSNPyADBga1DPaYW1FkKyxJmdnJGmFm",
  "key6": "3h3XE9KWb81AhghfzMxPE77Bsdka12cXPr6moC2mGt4Xy2aP1twXHteVSmUDY4L5LXevp2pPJY8UvHbnPt8DNLG6",
  "key7": "63P1s5Q3EYuNsmKAZk6o4N3DuEQ9G6cT9LCUBmR33mtb4J1Uk6x5GrtJxvAKSMKcfecXjf3E9UZVjwMDWwWboyrX",
  "key8": "39gMGxGjUy6gNKcFiccKoVciTFGAhwHKDFXyLGp1U2DhN4QhXV8VhQAbzMVRwiataCPumK82JTF5rJAomncV2Rgg",
  "key9": "5TPQsLotEecqaqy9jPy1pXpLughT92e4ScUpHp3JyNKy3enCPq9Dt1fDEapQZAhB36xYCwVEj6MH9G6G3WBHCCxg",
  "key10": "2pjqMGK8NcRLj5Diy6pkcqaiMuXDWiPZppw8NgiM4Mn9JACgHNbV5j7iW6XK8RAFfytCRb6kiNmB1j2fRz3cvc8L",
  "key11": "4sNg3SxnBb2AiLv1ej7pKEA4xWvTkt4bNVjVbauHWQdSSe1bCnR2j6qDLTqMryDEUXv5ATnae9mCwLrKoTUV7Rrm",
  "key12": "5SJdk6PJjuiZXfnq4aywcb9uvCgtZY8NX8yVtc1XkrHJ7nwAk8YWw8EtDUaGpXjGduTKN1uLt6KkwLDvQjH5Yna9",
  "key13": "X6SkViuZey4UoQuCxRA68QDgLCZsD7ZCwaKwKAbq34DhnXQJw6DrfaoFaNF2RxcWs1vBrnD6tgfPsZyQu29nHXF",
  "key14": "2fkvqq4Tn8D92XXBdvoo8XugLTdzCaj8dZ3bYKaidGaDE35ga6AZ9kdjwT2HApyPwVL3tCndFKihSTdDa8qSKivX",
  "key15": "3ZR5HAut47BLuhxbSMHpNKmnuRvBTMD6DQZr5e6xYR2tEBRJ3bfAw6kYLSYbK7kDFCYF4M9qLF5pkGNckAjJ4u8E",
  "key16": "2rEgQ2cd57pqbUdybHC7aC1iQxtZnjxNDEtc3XFYM89AXYUxTEZTRr6cGJwDj7hKtotynUTKZuryVG49YNqgXtig",
  "key17": "27zBkHXvwaJYPzd2SggwQUH66ehvM2AXvuJZGvbfmwutT8cC7mk5hcwipA7MdvSvg5fwgUAmhWbr4dKf5r3yW8fB",
  "key18": "5k34QTJZS9cFXNNj3VRKrKMg3QVfUb7AHbYKGsdRJbFKBXWUqV2tKvWEJqEvEuh4WmCNwHjb2zmZT7PW5oQSxyJm",
  "key19": "vRjyzCuU3of86b2oAtJYU5g7QhCgJqvSXj8gKf9tgikcL5TKvJHbxGqySiCszZhBRktWpsVTcL5pAjZ21eLHGy3",
  "key20": "553ppMWjVNXgNqR7KycYk7CfkrSZreiJftsWwrMeya5xyPsesca7cSeHpqQ5dKjpBA1MUrv8e4iU5PKsR2kdmzDh",
  "key21": "56PSS1JZBo61ivq5Fjqhj9JQHJnT23DGpT8zSmfP79bHpFbbSpzQ7zD4rw1UsjkpRgoC6gJEEzemuXAqJCxSASJD",
  "key22": "5bCFjZPxjzSUUtEV8mFe7TyzKLCDQ6anMhJra3MzNqF8859XyxxzC2wQvQFzVeghy3abEGybzzC1kD8go5wcRo64",
  "key23": "5ohWRVkqpMNyfzrwQ5hdJQtRXwucbrbSQbAbhrXx5s9N2icFwhGqNHKUgeHJboQ5QAK4EM8SYTS4Ka9MeqSecxE7",
  "key24": "4STXvANiTLjxqQS1fvuLQ7hNiChrRCjiLa7K2eXea7js5JugYb2rVg8r4Re578iVeQhfMRwLSUZCpQEb8Mdy5kLc",
  "key25": "4RQjBk6fzD44XSzYHvuy268oEMeMiHpACYA9Ts75ZDPV1bCJ5fBBP8akkJq3USGZWwhstQCExKX9JBvMpPq9vxF7",
  "key26": "2xyoCu54nXEe6YK1RKXYFBEQJvfDA61T9dxKXZHSDSVxx3uCs1MZi1K2Bf72AAR6ESxB4tkcfoKdkxsriqevJ2AL",
  "key27": "h397TYtxnkyea9LfB9VVk7yqgGqomF12fPEYybJpG7vN43qqezEjfqSVQSVcPQM6Hs4zqHdcf8EoNbtfqC3r3iE",
  "key28": "4duo77LpYfCakMk9gP6QiFTLq3b9bpfYWz9QaGGJPb2NKAtToBRek8DuMwMpd4rNXNNN27zDSjYVuWVX7W2UrBFK",
  "key29": "2pfvxdzqciGMStYj6kow9jteZp8UBuwLJ4mjtNZW6NFw36tDGDiQC6LMNmDrY6Cb51wrD1ApCAjSLKXz4nDu75Zv",
  "key30": "4jciqtJ8DYgsqagt3ZnAcC5rMM2HhSmqpZdf4aJcUh4XuX1R15aJEedYf5FbrqWMaj894Jnbem2AYT4t6NtGB7ea",
  "key31": "3aok1CXbpokZ7oaq72sCim77gcphRAK4oC7b2E8KovvyMpXHsSmVtFS1q4YhD2nHV1huiafRqVWwk18LJvE1HhcT",
  "key32": "2bNN99JxuguSSbnK1jcGFGi7ZcfCMxVUEfCvBUcKB12anVZTe6WHbGdrZHyxPm5qxM2RkY4XhN8dSZ3YWGAqcLBP",
  "key33": "2RfiEYSrZoMNRcvJiKnP6BkvJRnjxizb3fmguDmbpMTJsDhDTrEMvdfLLfer9cyamiAdyeyFP9UaFFB5mB95GvRc",
  "key34": "3YHSXjeym8iWNQZio7rf99ZboQ3bNdvcTY4hQa6mmUud2ocXBxE9MhbLfCwChxR7cJRFdefEzW68cdyY1iBTDhNs",
  "key35": "2f1y1qWmnrTQNYv3MTsq17tX5Ths7upds8gEcsvCMgLcir2pj7b29wASxn8ARPhGNAkvYiH8pcC4atiaUQ31scWm",
  "key36": "3KP3pJRwa3L1Fq3qpz6PCJMSGYP5H82NQo45V8JuarEgcoDcqxsvqoopS56vVmkznd85h3tEgGhTYTmmtuu3mV6K",
  "key37": "51J25VZGZcEbhuFHuLWPZsURZzPGRrBk34SbTLkp9ZgBssHXJ598PVxy3w1UotKuff2E8E2ERh8FofnUGBPv9wQq",
  "key38": "5h3Jg1T6rpgoM8Cswssvp3Qo2yPLvWY4TrC4faUtJ6sK8Uu51zHpc9371sPH86oSbzXdK5aRMVgH2yjuWYNSMuk9",
  "key39": "nVGs6MUufQxvoKFsJTsRz57c8e1hM6xbK52fLUqVM6GmwrnoSzPpBXbTz1J6kyniZnB3Ak2U5xv9GWW9HNe6qBD",
  "key40": "5ZNJjao6mVC3ArJBwefJos4e41gWzaLeeCmeikofsjWwVfj5oFtB38gqxnHZZSsG5dr6LbJQY86nVVvuhPDqq4UH",
  "key41": "4YuVkEAkLVbPf7ucH9SWsm33PjTycogjTYeZubVBZuAjrAeQYSjVyc6RrTcB5nYenaGiJsVYwwfoozsGW8nR15L",
  "key42": "3z2r98c3uVPsUr8uxzv9w3VmWepi4ZQVhje8AZPoYkJrhBeqsnRhBFVn8vfzCwZsRKHupjrwXxemxf9YKXjBo789",
  "key43": "2iz1kz7m1d5Q1YiSxnJnFYuBpSom5vowMVPeNGZxdWcM2VyxFR6apL5aLqbeUzWkjHHuiswTEY2FJZNT5kCGqZwe",
  "key44": "3RhJnBLjbwT7e9xZftXVcncr6YDPHjBatDw51Dk8Rj1rwdgadqk25FNFmWyLkrXZxLsJ7R9G1hujGbLPkysaUwZZ",
  "key45": "5k4cGw5J33yr5unUPLsgWSQEmyLSxcuMjTcYwgELPBaRdfS4uGN9cAjAytC2cnr2iM4Ygzbdh5jKW6vENmaHPVcx",
  "key46": "4jna9irjxSmfFawJMCdRmdtZEbCTdFgWsHn4LMYiUJVrtaXsbw5mvGKHKS5mfJqDhdJT1UmCECUtrV28fNFoXVpm"
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
