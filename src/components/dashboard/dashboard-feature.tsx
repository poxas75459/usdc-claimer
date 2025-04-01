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
    "2TxLkJvGFcYw7Fv4FCwdgvC26xCfWdct3Sv41KfRMeQ4JxSGeSFrwfkTkranFTYaojNKrTnvNoVW8shpqoUXMET5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxCC5WGRPF2vHeHA9LvNTEMKKW2hBkqQy32noLEh9x7aX1zozoHdyxm1rt24Z9Nnb1r9LTTFYufe9H4ebKYVdK2",
  "key1": "c44Dzy91eZhwWx9hvjJVjn1t7XgTFdW6yLHTYuqHRDTzTWtkiVmCJAhM5KpPhH2jYR7dcPinZVgqyjcFj91hZPp",
  "key2": "5e35fc5JYb8J47vhTDRtuGjvqC2CvsYbuBTPYKPyLWfV7geGTnZ5GZN8emo9G3PuaXk7k7GbQq9AmYesNuqeaM5S",
  "key3": "5zX7SneoNhwzUR925CwWbrFZ4Lbbj9ypFCg1NpcJCQRnL4M4SJkLhy9qy4J7EDJxWLSnTkMHykMYS8REAnYSu9EB",
  "key4": "2VbQP2p3Apb7WiNqUnhG6hsD88EJj2iYTdeDkF4vzEg8DeJczZn3nSfP1oiroA39yTNZeixjT3PuuAZzpS4QRaVK",
  "key5": "4ZZfE51FFk7LKnqeJ6n6PwqS7Hksk2n2j1W8fWrzbipPozS4CmZKQu7tqUiXKZNtHsjG1ojWTcrgo9Y2kq4F7Wxz",
  "key6": "4dZvLQteA92J2m8BEFsirfAyqsGNjVrD99LHxN4C1zuAeyJ7f3yGEvykpVENjnT45YWAQQrgkxKpykLdJRoaVHzL",
  "key7": "2PxBpMD6BmLiBf4sWhS4vwhBg3P4kRKdQw8qxG8CRD6AhU1ppK1nYxjYfANLNvVCfPLPgFRbYKbDgC4T23svSF9m",
  "key8": "HmYSqWyQjuxvje3UxkEvQh3A1ywXJNCbJmDLLRia3Qm44v8aYZMJp9FYSTDJ6Cgc5x93gmauM2wGM3J7Ny18c6R",
  "key9": "2chQbEYnni88gocVCdJ6RtkYt27LnpWSPV64hUNEiGWAQBX7uAjs16vzCE2ikguoKYofRTKnBHho8tXEVooSKiQy",
  "key10": "2D1zRbgLEzWXU9gfztfjVwKxsNYtG49vPSus241tEdaVRL6w2Uzbi5fuZyWh9tv3LSpaWf4QgKctTdnB8KhwsXdq",
  "key11": "zoqwGAoo9N9j7J6uek6aNWWEMDe4ak5DmmCs4bzQRxe6bVfM2LfoVK3xoG5bTUMDYTEhUXJMPsUGe7qnC7K82Bo",
  "key12": "4aazERXHkT742djgEmgAC4yK6pZCxSpebTSLyZ5eK8Lgkf58NPRpgMbFwCMjPPxLzbzoye5qgidFfxs3sBJSmfNM",
  "key13": "3tVxrCTb3qjYG2igKSiiKZ7ZTJbLDvLL3hY6snT1ZM6WXTToJUuXV4qQRPA4hFFDtbKtfzw61DRfKdPHF4xzPRDw",
  "key14": "2nCbngpJ95Dm2uQ2qq8zZ5csZccPnUaGRJFhq9t11wU6DmmiA94snqi2vZaMbPtyLW767QcmXWnVDBAa73wqYKD3",
  "key15": "wsm4dSyyMSnhKfgbUBJ2cTrhDKYZFHZjZ35vV4KgWVtHPS6bqN9u3Ms2vPjiES3zyjA8QWU7ugUNozueiTtUsK6",
  "key16": "37JuWpK5MHsffYewJ79CJFyc9fvZt5Nsg8LzG239GqcXTR8qAELdCAj353nvEniu531VmJXS1rdsZqBMdj3PqpJm",
  "key17": "JAh7iGGYpuPBmEY7V2gvgsyLXDFg8momEdgsMEBtAYZXVREpSkmEXfr4t5KNSxqMwvKhns8tYA7WnWXEQvs7meR",
  "key18": "3kirwCns6JhnmpTbTWAt93FMN3voE21wnBXm7W8AKsRjUwUYGn2gHAYUH28p54gx8irQspLvb9wCdZ2Rh5NsjMej",
  "key19": "5awkU5i8i4x9aU7octb47gCB1XbkpvcH8SJiau1bTtk5U69C6de7xvbR1Lc8s9JQJ7PfL4nz5oGXMNtGUEPsojec",
  "key20": "48f38k4ALQAXMUYXDLquNbCccU9djo4gEJh8cbyFJwMUhd3heVj88xHUtfLBbVXxELwhX1QWXeDiHyfckgkAEqG5",
  "key21": "2UeaYu9YHYhM6T3pjspxgXmcSRfDAU4p67hAKyvHczUH9aY1tk1mLP3WUhEqQXpsioAajAqxcr75ALQ9uzt7aX8",
  "key22": "DASq9WfHJYwbQEtvn2DLKTNoTR4C7gKDzqtukx9Ga3i7zdySxeanWUAj4WwQmHBjGW7ZEi4Fkj7Aed4RxUJTFGV",
  "key23": "3FQAW48ANgP3YUnDvEKYUoRhszT6VUobGrnRSY5Txtvbpqo9QNGKSEfhcV97sZjPBjFNsikwdCLgq8QdKJ7uYJnY",
  "key24": "3xf7MQYPPPE6vh78joWosELGw8KtqYfHRVJBfGqBa9Nwwwxexn1sRzHW7tuc2MTEbuXFFJw8UmD5q1G4uexge2w4",
  "key25": "BspLae2xDMBhC4XQwMTcwUacPaKNUvCinCLxAa3tRYEoPrunVb1GeLkbf9grtdxipqa9UuUj5nrGNiqPTixxris",
  "key26": "489PKUVScAVZG4saWceBoTpiAdaVpbEwcancPz6gZtysy8wPvTfmqk9vA1whDhjt5q78pTPJVPSrrGZAf4dzkZng",
  "key27": "W1Qa1jgVUCN1ZmVeffGCfMthqm6Z2reQDo4cuFEixr7pUrc7oZ57Qawquk79CAsdpL74cFpLbRY2oRi72xqBzUJ",
  "key28": "4dqQrneJpJte5QvfaZUp3pymp3DPtdJUxcTU17gorPR7G3QBPZj5vUSPoJetP4A2AjbwrQKEEJQaczGhvYzqDbDG",
  "key29": "2xVBgHvhZysxPaeXmssmjVFpqY3pBfuZc6RMwAgTiFpe6bBpMFrzjoxvcdpJQnuz4n6tp1G4qbWM5e7cdFoUfmWD",
  "key30": "3mqTrkT9HSPT2A9XrwKbeK3ee3Ats9EbyUDBz6P5dsFpNRC1auFy5rf7dRrLdYDHX9U8WQX7WMonXWHfAmKypZJT",
  "key31": "eqLmfoUwmowGDX1QWbvVbMUupXn34Nnga22gxGyfKKUWxGXhSbDtNkJtmxy5b4kpicx1qA8W4u2eZoNnnexubnM"
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
