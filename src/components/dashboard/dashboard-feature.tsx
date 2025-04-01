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
    "3cxjg8FT9Y9xUud1qRDmZxnYuigKKqEcg7j626Xg3PHqAgMKso832agFTAR72QRTr3xsfB2j7TVeDWW4mJNg2QcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9H6x8ce3sNVL8ipdBD73pUHYt3q1gF7aTqLCUtcJZFfFGkpeWMnMY6qEDHejJXBPuygGgj7p7jju3E6xh6Ncy9",
  "key1": "24DUiWdwuqvmxkXr5FkMSvXcNnV12Mg3y7vRPnYYibKJJ6yKKkBjSd8xwphsAvs3EMCBHcwcvjDAYNyrXXdG6hgi",
  "key2": "VTTU4Mn7q1aSRkwhCNhHMqm9xpJxSDg4eZA7BFuzsDrQdSBDsorQFgZNoFvwj5akMDEaK2MFLgzaNvoqBFqrXNN",
  "key3": "LdsCaHYCXReUhiwU7TqAS89DSnMLJKeLiLksDJ4UJNm3WPaiunNi7JnmcyaZs99sBQ1PwbWep6jat5pyQt6hk5j",
  "key4": "2EU4gYba3B2kgRg4nuF2u3Ng4BtGV4Trq6oCDyn5gPdXUAsVVQkJ67qNwDa82QQDYbdAfykDpoKwx6DBnEy9Rqb7",
  "key5": "3tWhCaZJNn3is9CzBB8X3hXYMg46Ef1MLbRVXnwDVfnjLMsJCg4UenromP1VPcVtzXmP5iXmFZNt7mbyzboq2RxS",
  "key6": "36A2HAx3LAgYb7zehLcxgZeCGo3G1DdrLm2p7nTuxLi2cNjFLKoXovd6opCJXvxSMFjAteNavAmee9vKFxW5ooMt",
  "key7": "3f4XVD73kqGthui3sNUtLERJWrvckuP53MJFJNewfVmcb9nmDHsYJyeMVMtn8RwsKPWn2hHtPZKDRZcdtXEV7tiq",
  "key8": "TeABKHwoigNaZRzgZGneYuGwceiiXtCpBQkZEtkfXPum3zeVpL7gYT5jjr1kFbwGzyeEC5ezBBVWpeoVK7kF9fA",
  "key9": "28Vjya6Q5wDZUop76rwwGdUA55Y3T3bJLYBuFKRoNGXxhpi8K4rRYYrf8XyBeapyrNFukGcoGEJKfR6RxjZXDccS",
  "key10": "299BdomwxuLzYxaVhLdZaWETPSzc6EPEp1Wi53RgTh6yT2q2vxAjP8tT8R7vpoCVRsbvhYD1hyAajLk8qrRC7qD6",
  "key11": "2rDAZ4NB3RYzVV93CT8ymxT4ktYGN79kk59eauRNKiBwBUYbxoZP21HvKfBioXomwS2udkxZS63dnJQwHtWXxzX5",
  "key12": "5GgdQJEe8EKBkJwyT5HuSaqSf3iJ4GvGG77BY78QU7kZS3gy15Z39DATKPiTzcNT781Eusij1D4aDwD8FKTnYzD1",
  "key13": "5ND2NKJo7Bxax7n5W3ddnHkK1Z1beat3USzLzXMZiZ1PkmGFMpPACfZmRnzmC8QqzcjUFDDHnx7ug5g5jKzz3Vpr",
  "key14": "4HDfmYe7sKUpu6UDb9i5hSqMfj9GT4JJueDBMMHMdQhTquY5AMikyindcv1C7tzwaPLbaoiaVsBoUd8kBmzrUtE4",
  "key15": "2ongU8mWyLxTpNbXDjRFay2B3jsxoEmrcSQNecgnUXHgRoqXWMUQuDvgcNaMu7hYHrMw4961kLw87PaiqQAM2bjq",
  "key16": "5ty9MJy2FMgoNq71DSVxTSi6rXpWXf9ds5raDJSwowSJQ5VYttyGX3CqsqjZuqU3HaZDTGEVgcFCUBTvsYqNMvQx",
  "key17": "VeqYzXNg22MSFZqNGL1eGsRZLLAYKaVAKwcaucr6dQUfd54os5M5sjmAHLAC2h8MaJqop4e7RDDySrL7TrqwQTy",
  "key18": "29ohnQYvRtWKDBjHFML5LLQhNifKHmrFwurXoAwkLwgUPx336hK9ZAjnQgSFML4TdutWwM4CeXhYi4H2qB3ZoKLJ",
  "key19": "5EAD16MdCUZ6bQvxfxXob8Fhi1AUsAkqZgHZouPMyqaruczWD73mivdZfRM3cqwGQUXLCbAa9ET2XrtMh1Kk3WGS",
  "key20": "EiW7HQptKgzwLXzEJ9ic89q4y5rWcQiQqTEAFW6PJTybM2aovvTAaYxoAUdCWKhwGUvTMyuzofcjuvGW2h2LEjh",
  "key21": "2PKFonQVRMmaRDoL1RJwTxLhroNQFdiZAZDpkZ81WrxZ2ur1LHkiyeVTTWYFhftDfMSqFsQRcmnf3ipfTed4RHTv",
  "key22": "4FpH4AzfrSPD1eZtZjC2fesTrmT1UqCXaDJEZHcd39JimBAugZzR3oXdZ6TCXLwSuwMGqw73Ey4cCNeigkUFq8Tm",
  "key23": "3FUbKviHCyEAcXZqrTfvswTDAkkjjYXW3uF9WogjtvaH5qaZ22MnXvAVFAnTWEfsLGz6pkXwD12dT6VfnoJabWCf",
  "key24": "bcTjYzt6rR8LuW9V3PaTw5XwDcEV96h72eEbCQwZMnAnCHSS2PDvtx3w1ZWhU2q43NMaFjaB55Zm5Z4GL1g9dDD",
  "key25": "3qMLMzuAkZpuRNtCSEW9o8Y2W4HJembJAqbEoEHhh9PNKUGqrrt1dDcs3oJCwCDXWDjhva4FH5b8E5yqyrwcYqxT",
  "key26": "5LouNejaG3wdqSLnENeNAEpcvYro6akNPKEd71966ZLPf8diGMYcCqfUPC8srDN2eTz9kyBmNcipYS4Ey34wLeBW",
  "key27": "jurfwJnDWMerThf5iN5PWVEH66p5LVjBAXmpcwaRb67vW5UAEonVKXmZadM6jnATewcrYTNfbPrG65XKEw1mm9e",
  "key28": "3ypSS743KmBUe8fF6pkrgpDTgQcLA1byRubbaoktXuxpmSvP7eaa2yfEZSxjXPPDQ3tmNks7wTV3tS7vZCSGSscD",
  "key29": "5dEphTpyAcGNSB1C8uYtdGuyDapEfhoWUPRSq1TpZcX5Nei1YVBqhEkbaSCWywBwSQgjjgGLDVvdrnsWmKZXN2iF",
  "key30": "5nZpA6zhoXW59hAjt6R8yocKzitcwa2dpbXWwkQ9KqW4T1XgA8o4s6sUbHphjd1CgGk5h5jQKg7AzhdeESNTGzJK",
  "key31": "3TW6hsHcfb22BR2ny3VjrDUpdcENWnn9mtxdhcjgvKWMv4ieMYm4ddA1GMg2nWuGkTEXbUgYBBHGnb7KbJSAtKUx",
  "key32": "4tDfEVWqzTbXsqnH8tXNfeaqppLeNTiGg8UwZ9gUkWbTaeBQ7Mswji2exFhTyn6eyxikXRqzrBsMRidJqEFeA1o1",
  "key33": "59jWwc1udKDJ4gK8ucRMevGEXSZZxRh6nCZZRCEJgNXNRxGDig1EEYH5wwAcXDDD4piDT8pvsRrBjexXPrWBh3Mm",
  "key34": "3rkuBu4BzjHV8VNGR4Gdc5BnCoTYHy5rPRipkTxST4HFMRsWpmJtZGWgnco91A56KX9eyV4oXdq7Jr38dDdFV5fg",
  "key35": "7gAGpdtczJKRCJQTs13TcfeaeChKf9eDAZvugzVXuHnPEnhRVfRkf8TFSJp97fuwXgfW9nRSzawjsUFjN2wJzUy",
  "key36": "4SBbA8H6b8t5BgEjQ4p3gTHAvD888AFjMWEo2BqUxiGkHowpvueKr1HHZjEzamAFQNFFqCSTvp5w3A1DtyvNPtfP"
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
