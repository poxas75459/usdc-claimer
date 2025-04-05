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
    "5MEUB9YvKztuKk9yhJowZ4gY2JFAXdm71bK9jBdE5U2YQqE6nC38gwy3WPjertR1whQZwbCGp86zzGyRYLVZYyqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kacnhwYNnYjxjcQmVMz3QSNz2RrGghqabpaxZwC82JxUFuuEoe74Ldob7cLPpbYwSzmvp1oEBtMga34LN2BZeBq",
  "key1": "2GvcKotcVR7dqDmkUCkWwWK8Kk3qiHW3sajaTaYFVVNFLjhZks7rhHwUSPs1Eu8KpTizsfzXxH8ofW2xiWaVCb4F",
  "key2": "56WUJqrELcdqrZmDxgjQ8ashTnj3snFmmsksw78Jsn1UBbj7QpY7bdB7sp9i2sJ2Qq49JTphLnaaYRc9jifsgy7y",
  "key3": "5QsHthCA6vE9AftrxFo34NLCE3rydtVLcCExVaaEFaT42eQHdC99cZv5oUEC3JyFntMn6i8yxKMJ4z7XsYQMtAeo",
  "key4": "3HPRckwBsRtzRWR5fXE4UoXWw5dJhnChJZqdzeEo6FLX1EeBwc9a2NzXmcBQTtHb4wNm2ftARdQvK1kQi3yNuFKj",
  "key5": "5deBa3HSVLaox3epjGKH8GwXkhkqNBAiapFM4JoJU8FVc7Lj4RX97kJwQTejFh9WszmDygGhBetyNwE9Yyb89LUg",
  "key6": "2SZUCVxsFSZhWgSeZnvvjedYJz5bXAegdYKUATJWqvWDZY7LSin5dKu665u7S8JEx5QWPyVxP6izUhWcqYAE45T4",
  "key7": "27hSNdtf3ynthrKXHnSH9peq3YQ56wFsW3oaDBCLjggCNJZMzhKvdEcBdgcMPWJ6qZd679rPURWGPcE8xe5YTdZN",
  "key8": "4SGoweHYzpbxtWAtL1rKwSKSufC5Kh3ztRWGA6nCPRMKJGRLsErnxWjBL2MxJwkKVTPfQaZpEgGcfDvqsZRA9b8s",
  "key9": "5piv314wBaBUtW1xpcN2eRxsrPKhgPewH6QzDZ2tQGvpDwQmnD2XPA9JQLBuJrbX61nLBPTfQpHngvHkN9ReMdG6",
  "key10": "5nPfK4pvTKzuGeSUsof7gW9cj1hW4sdSpD4Rcyfr1ghoZh8zqEhgAD877xsdWCDkzfe4Y6UQyHBFbVQesYkGfBdc",
  "key11": "2C3qXDeedkTSQYYyGfAJ5aQBtENqLY4aMEto5VN97FZioJZhnVpCSbSfoVfrBGNySqUy62mcGojqqBAYLZLzjJY3",
  "key12": "ArsbgU8Zv95mgSvohbYWnnmv8dEtpMak4zdXMk9aNpnd8EdVHDpjMXuibnesCGTf9TfBDAXzZTxdNvT65DpStjD",
  "key13": "26LW9L21ZikTeY1CDrxXrZqFDzgaBzYda1ojAD4KZ6oi1orbjhrxLegq8hnrhq1m4rszWPZTRnZMGWN1r4tbA11D",
  "key14": "whQCpdi6zwLuFqk6rg3JpuzLvrWc8cXT9SL9F646kqBjWbsGufhaEDeLT351iyaqGP2Jsp4kq6eBg1vLvCy7nmQ",
  "key15": "5tCLsJ64wKGnwauf5ZccTkKUaBzUv7bb9QpUs6vw183RSmNgDgpmLVF6vDo1biuHWGdPa6MDHnUtpf89xa9GvCPT",
  "key16": "5gVidUxnkPHJTJkE9fTjGujJDhV7DnkrSgRVWnwYkBvsJLeM6gvHpqKqGF5L7htZrEVBJb1Jyc6GZCz2zArchXev",
  "key17": "U47zPSSRwkEdMhA86N3iME8QATseAkGnkHnzue1rbtsWFusSL1cpVV5KZgNerv6nVpvwukRFpWyoqiiyLdetXL5",
  "key18": "2S5PXhcCL6x9nFpAAuTckJscXgJk1N41d53Mhu7GxbBhGdaJJSUj9VjRP1FeVpzEepsSgWP3Z9BG6CcenWthzgZs",
  "key19": "2yLFyj7xWk9bdAWdK5Wc11bU5ZJ3wHfGzDiFgKsuFku1ngFevtu2e3cEkZTGMH8dAo7p94KywXp67aiQtoPUs5QP",
  "key20": "444d3psVgy1WEnKmuTQdhF2pSKtFnqNHoAeptRjXF9RPvedX4szBXFVKAsxY3cPrxjPPBJ8FGe4sWoGJLpNc1H43",
  "key21": "2QdGeWxr7VrmoU3hLoqGTMKtQSsjjCv1XivMZrLUB3dP1Videzj6UM82fjNvu9GpHf5G3ekv7yCMdMHRoE2cZsPW",
  "key22": "46nsWw61v42cDSTcx9whq1PWFPC1HZ88WSUNdZoG1KJWfUzAvwQ3HhZFxZs2GTXzjV5qsbM5SFQHCoGCvHZPzQ28",
  "key23": "33HgNHsgPAEK7YL5EGFpbgixanT3xopC12QH7w3B5KasD6NDfrkfaUXazFJDbGWrM1CgBGuh5ZBRS2P5P79yiKUR",
  "key24": "4pKqz8jeiqXEQhXeGayqDBerU2GwKHCqsGyijxPLTtvsr9k42z5cHitXeUPo2hRWZxfb9xj1Xi21METn4QhvSF19",
  "key25": "5UepGL7VA2HExt9zqmrEXjcD8HYixJMdonAJyvx4ypehWm2tTUDRNhmCtHutFt7QkpSdD4ahsYiwmJfQYxTbzm9P",
  "key26": "4VxidpYhm7yekD3gsJhng1KyLTQMBtTNQA6bWGtvDtSTC1A9JozGoFzKmGAo4j6FAi6fee4N54GtjHYp7KGY3dX4",
  "key27": "5rNeBiHzHH7BCAuAUF5gj6kN129AUoEVM4oyvyf3HJ61tQKJo2sLbEwwrX6unFDGYXCs7yCwsVmNqXswz4JTEFAF",
  "key28": "5ssLxNk1mUKXjDPJ4Q14zLHinb3DLCUc34fMiLWKRSTB1G99989avaLxgqmKpzwTGCY3aAv3mobUzye6TW4ctKGp",
  "key29": "4cyMtsSX8Hpzx2fDUW95pEk87M15rXBh1DKXLaHsqTQUpo9mwC9TR1bp2BiGSTcXz6MJSAXFhkgFJ9mXkpw81nxn",
  "key30": "63zP1DaKiS3KABox4u1Mxz8PNnCqXjhGdALiLumo4vxxsMQ991Df2FCxEu6Eh4YL4gJLZs7kZx4Qx49VqNiTj12x",
  "key31": "TiEMeXCEbL6ti1QSrhKeLhGX9rn8QVGEwkNosqzPRqRS5EHJvy9EvSeFEdphu3tzJQ7qaQ3y1BHExQcYQbJimZY",
  "key32": "59GkTJNMZJzCJzL7nYsAbwZj6dUwcbzW1r2U8j8BreVEM6TQaqGTduF6RZZ3zT8q1rTV7V7EtURQwDLnNYoz1MUA",
  "key33": "3aLyVNU3xEKVKkmzqKox9L8dAKU4j1WUw6RaFWXvTjYNucAdeUNUBFc9dGnmmbYkbEVAnswqzE5UpNM4vdJoYaWj",
  "key34": "7RM6VHj4ecEYgV8EnQqDiUWaP51TMB63d1TC8DSKApNhG73w13r1TPXYPP7nMCCngnLnqXXV4Jz5oWM5bQeq4we",
  "key35": "4pTRg5fRNJ1hNn6fc8Eo5mhsaqvdG5SdSbVTtuPRNLiZUMzHhJrQGzwH81YP93RBEm9vqoXf7UYKBD8R1iRHDEME"
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
