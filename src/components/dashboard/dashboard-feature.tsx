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
    "3Gqgu3gxPkmsFGikW7F5UpDGBobnpN9fjkLDJqSJj9Gvr8QdbdA4tYSffRSATbG3vEGJWsfJeHjMURP1TT1fxuo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J94GePpw7JAkF6By6tsJ696qesrDjW5BcKTDJVDv22ycV1RhWu6YU4EMimGs9a2Qn9oF8jorVrudton1WpkvYKG",
  "key1": "58nPvnnyHMDbSGNCwfZ52UgSGFUxQBiWJ98MES9wMYz4HmEyRWh8bTmMywDiw6DYfNKhkgqxkgLHX9zJvnBX5GFH",
  "key2": "3DyuVtAJDYbnoZpbENvEuWtcy1GY4WPcQMt3JZgAUBXEqZ79JYJUieUjUZcdaWiFrAybHCPrAjkrja492jHxedj9",
  "key3": "5cQQVVyzMgPQCR1zPeA65ai3mS72peKrbBomYYbDrGb9q1JEYRP7nvxMFTP2dN8r1dJmsc4EKW5DLSwFkiSfWmCV",
  "key4": "8qdVRrXRi7fqEvnX72gVgraQB8jpXzMEs4SzNwDZNY2uCxrhv9kDE6ecifFr3dNyNzB8tksJCpz6qY2DW9eSykJ",
  "key5": "5zMGRnHuWzp5yPtmbJRCDWM5zCySnWzxnaMYfa3Sqow47TYkBRAPRWj6sRr5Yp73gpBr4nFCzxJyXKe1kFMLXXJm",
  "key6": "3B6YiDQ4nmm4kCxwKEnHwDJqZTdebk4Sa3T9tZn2Yu5XHBm5EV9YUE8XcemUaN57SUuCQ1YdoRwE2e4r6f9Y5kX9",
  "key7": "42g579uzdokDwLPzExiEu3yC7upLgVPPLZgYTQoXfhcx9NuShyWEhw4ghTWJYpL2SnvK9ZsR81AVu8GJ5s67qNi7",
  "key8": "46YmVYfqeQLWQM3UdrRgg4viQMTEwq3NQuxsHNTGSDiAPbYaRzhDk5YPtan4dHCGsfPcXJKFFNJk7Qy4ygtS9sUx",
  "key9": "2pNYBdvYaT3pwFiMhjz9GREjhqpWu2vYTbAmZGnM73NxspGLxumv6viMePFfo4HHSFyTGB44913rpSDpZjebKAiL",
  "key10": "4MwSvUVZ4xGyQ3XMMq5e6n1zcQqY8zdcr6pdG8iyBKM9yPfJJc7f8FTTk8KwFJZetPrfob88ygnNHa25AapwMAud",
  "key11": "PY4AQ47FB5sGJjMwx275vNZ4mRZcHLhQGMFjGAXx83XqArFNcwraocKuUYHS6WcdRkRSX8deFa2suNEc4codyAZ",
  "key12": "4LAx1TQ7uJaHeQj9LNFam8BFDTaJBEEn4qssdUZzfwvJaJ7EZM1DZruG1iaMe9FNAdUMhdw9iSxvqjeRdTVGZvPi",
  "key13": "5xTSoCAoeMqZgkFS6ZTsEug6ubeuJTWGUDpJwvwu9WMVGtGXCVxMq5FiaoyeoASpR2ZSjTLWEnC1R1b7xdn1pa42",
  "key14": "2nJ2UEnD8UZQkRBknm6fwL4bRBBGumqYEc1DJdSTFV3n47ZtWXxttM912UdgXWyRcUB8nmqFAJnJoNi4Q6XRRTK",
  "key15": "Ywhi2NMwoFw3Ty8mk4ZrzpMNNqNNDVNw5DukkLeQVfwd3sXbp9FFaXNU5QHnCBEhce4e1qdhDDjtV5qMnTdJb6o",
  "key16": "4FbfraXTc7AM5JdNAb2ntocqMkdyEZNtYNd6XCZGDA7hjHvpp4oaUqsS6D6vVwohvCh9qi2fbNymNdyA6FFWBK6W",
  "key17": "5xjUQ8aaAtxUVuae9gMcgW46rEaa4YF1Hnow1AK7fFZV3qdNjqNanVtrT6k5zgV2fEakmx77fffBEHTkdsRFXAL8",
  "key18": "42XhN8CDKscsUVHch3dwzNxpgW2D1vu7ifdJazbAsrzSL3AEvPwyFrosANMV7kxn6vjAVu597MYSvUKHG9CiwBj7",
  "key19": "2vvSayk9gdhiUTwkkXHBXuQiFwJPqkh1Gne719XuHhT4t7hCX7Cx3mWnev2X95NkVVEh7sfawd13HoA7eEC6MkPL",
  "key20": "3USZgfevzeQZ47Sz4JFpt7Mia4sNYBtUoWxQNBoZJKnU1qBqgMnuXYZG9uQvCpFhASxXskE7kivBWmRNGGAMqA7i",
  "key21": "2m5gfDKcnJAfVMoKqe8KeQahZqfEgHFwZMAut4y5Yx3JFAu3zfaPi7tVt3wGDi8evyMGbNGoabP1LjrNo4oAPoJV",
  "key22": "2HkivW1Y7mK8noZ4bXWb2YjcMzzhwzzR9Pc7u5BjhaKg1JQuazbRkk1Vt9e8vfDP62vKe2dcpCTVYXmyw7rrB2t9",
  "key23": "2L95DRHR6dHFVfA8rh9PbY8JmszfdHRvJpDmwvm8HfzjF8zPnH8Cf9X3rMHLio6uggQdU632CpfmM1fcQApxz6XF",
  "key24": "28TrP7eaCVGgtfDFgQyToYGvj2czroCtswtTSwGMV3ud49HqPZDFG1qzCnRaG44JTihfVZk1HABasMjMLmsYKxvs",
  "key25": "57WZSv6avhBzrc7GaSoGrnRHSmZ8aYstPvCaShZREf3RnmYRYL2NKJ3jc5bvqEYzc1vcZT1sUmkkDxMKwwvUE4xo",
  "key26": "3iq5B2nPHfM96DH9rNkXMWSeoPDF8TiyoaBHvVuvJuiCJnwrB84uhxSuAAitrqeefr2Eds7svRRmF4xdQ7VA5yGM",
  "key27": "YKVKCkXFgMAsw6FFJnJUbhkLtKFgxNrtomfgMxMC2XmR81Ris3EtYuUmPLUiNHaCLCXBVm8tCFR6AK89EJxfxKn",
  "key28": "sRnEiyRm7wgzjBiWALQsDkEr7wP6oE5pFo9g9XVQL6aThciB9XZWCWfGB8x3LCbsjaJhmXr46ZcEEXUseFkfWgx",
  "key29": "4Yu2oQjWFVKVGfoS2t3pZt5EmtCSTQ4dMWQmEWAG8edmDqEtWuAtVdJ8sDtCTFN4HoViUH9fofAhzMJttbmWVLnq",
  "key30": "4PSeRCnrer7pSYtb3iAbzBnruWGno8qw2UrerAU65GJk8tCHrSSVaKd41kEfdSjGSizuuC9RXkbeKXZ1TuRaR3NA"
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
