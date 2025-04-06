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
    "3prRSwaoVBoU9c4SQdemHqJW6uGDB6GengZRnkPLML9Rf23PHMNYnSBxdif3QRpzLgqo79FdjyqkzuTeByBY2nmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBBWYPfCfbLspqaU3y5F3uZcBuiKQGBtjsSEzxGY3ZCcq1gbr5xWPB2T4SDsb8z3aSjKVzCtLyEuPfxfh8nTszW",
  "key1": "4dTyggjYsBHkUYNaoN1emkCSZsd7fEoanS7AL8XUEd5pHvhG6Q9tghAV35hSq1t1tqbNX6pZAWLWtqzPQTScBcV2",
  "key2": "5RfD4x6zS6MhScAZU9shgDu6qQzGLnE442uHs5QoAE31Vg1Vbxe7MZBBAQG4kbKZaKPicXRi5YpzbGJm1umVEMBW",
  "key3": "2wN3PY9mhuW9YLmukaK9LAyiA68NHtAHipSwNoDGxEQKMSpDBPLUUvLKDaJ83UwTWU8m6QX3cMK6zv8FknB77rfm",
  "key4": "357PLDkcAc8kUmoyRxtFWAR3AgbkRcFdoqqHFmijwe6Q9asy2quHyZ1aH72g1DBjmUFcANYgw5tWsFjehQxzfkCs",
  "key5": "2qWKP9akz3pdB7rZWtKmSFEsXpHABNqYn5m6YDPWU59zHFLD2F7FNAtjR3NErnckW66aEcxHTG81y5RNWkqA7QmR",
  "key6": "3MiNFtot9pfccSG69i9QNMCd1qwoNjFj4wesJ6z2yUnA5wuPDre7eg4HxtM5J41NCcZX4RQGJPUB2GWN796aFGhM",
  "key7": "3hhuMJhgyxkbD8fMfgiRfbLeVSLy4E1NpMPuz83GdB2quNrTTAvs8uj5Tvrjz4ojBdTdkb7jjUontBHidMeyTTUA",
  "key8": "diXsw4PpuG79K9WTyh2eBuxBjRJTvfTbQA1hDnc4USgJh24EPL6QuwtCgSzP57F8Au3RZorgLLo4fX1LYvhDNr1",
  "key9": "3FenJVuyJ3KVQi8Tpv5NEeyjgfrUc7KfkWR1mwz9GepGsDqULHvqEwCWZzP2XyKNWAtk2LZsDxm8357LCWJ3vxn1",
  "key10": "2KiR6gPeCksep8oxj9CXRVuuGrRDgxDs68YWijzHu3k87QBAKRKDPQZAWA3gSabUiTx8T8kq6xCkqvaGsp1Cvkh3",
  "key11": "5DDVWkceZ5n3qDGqoEFMLPMXjxCvTEkfpNGjaf4W3suqTtu221B2GZR8mfxS2Lzo4fdFHEDPH9J3eyw9jmCnmHPw",
  "key12": "3AG812yD7DFex1EZL7dELU5nXB7zbqbmzb4usQZywnjBvp7n5VZUssoNJ1hb7uiGrTUnANnsMNK12stKCWKzR8Y2",
  "key13": "49yokk64RSviU36mu7DWrPRKU35hYf7DBzAonw2deiBPoyRGmH7RSjj1MnXPestvAodD4B1PWy9qVsf63VRyrUcK",
  "key14": "3pSGCw4HzeVXiy2S3MyvFBNbVk8BGL9Y7GeNdHe3soC3y1MsQwtiMNuaWgz7EZ666rMEH9fyCocHavWhSLZpousF",
  "key15": "VgVMTd36JgKv575yb4z93y6knmHhh7eTDABhtF9Qu5rrAcaiNfQtaUjh1CCbzf1Dc9JRyYqXzJmBz77nNPfDB79",
  "key16": "3x3ddnzgSYkt3E79iocdbwP8gyXbqzK1aJtp8PqVrTakArnstH1Pk1AdYfSVpqJwpXJA616djdPRrVdh8QzxHv3x",
  "key17": "5LhJCNN9R88rPZjZjJniqYXK9hHswv8UhZCoo8XyKCninmkMNW2EPM6ADrpffoDQSwZCjrfdS6cX1f6WNSp5ncyB",
  "key18": "3Wk4NjTciMRjizCZJPKHcBhqt4vqCrZtf9nEJdLAKNftuauFSp2fbSEXY6EYGc4UsezsvUzMXh73S2728ERKNR5J",
  "key19": "UmSeSmw1vK4Z3kmG871Stg2HYxRsYC3xr4TYFq2TRDoZjk76ZbBY3d7Lt1M2qDMUXjVrhNUVn5qaDmwvf67St2s",
  "key20": "4QTFcjGduatD3ike1xTcjHshNkorBdKZ8guU7mxGYhXsX6QLAEipPLyD9L7SVy3mCW15k5Usrmah7fszfRSXviPn",
  "key21": "RX3Gbjg7aaMEChRv1fzGp5BnxW1zKiokciGn8xdhAvMRLH1sEE5TbkzQTCeoDumJsx33akPeUeM4EwS5KCD8Fez",
  "key22": "2HENoYc2CRJrJwEC4NDqQZzvfcjogy9BLPpwnNgQxR41EnQoNpcJqC5JGm16YscmHNURK7oEchqUfpnmVFquNHXg",
  "key23": "2ZSzH6NFAZcvTWQGVifJWHBgrRr4i6L4VbygBmpuGEJvezGCXWqLdpCVF1Ax1fnxoEaGkRAUZnSDbyoptjq9NvMv",
  "key24": "42HmUzDEpW2uhnRD5YjD6wapwrNkAh6MKJoFu2oMqrKmCkgp22emNFSVRTiCtApHPAN5nUERZPpsDshuDejkGxJ2",
  "key25": "fDot1kTj8eUHmmKZfR2sYw5cx9xt8Kd38iEbaMUypurAGJLasqRgd9FdThG5eqCno9YJjuD1DWe9v4mtbRUxMEV",
  "key26": "XVL7YDmRpNRt4epMbF2PXRm61opXUSjNEsyjSq7dq9eyy8QfP5pJetKo23y9MRCBmVfwQeA6EfBctGBhVQtMtCy",
  "key27": "4tM534Cc9oCaFKmLE6kqyuiftivgipMAhHey5MpKmRxr8t3SCSTyxcjeJZwcLpTuxayMXQqp1Weg4i5xCg8r3bAG",
  "key28": "3vVmANuQgAzefAbLMjhyXKFB6hHVFMrsyJ5XTYpGeDTwomQuDNZQ8AKLBbqVYvynAajjHf8Und93LxY6vwydenDg",
  "key29": "5ZuFgvKUw7LeBdaqbdhh22nmHbBXshJ6Jitpv2msmSLem1jzWNKzKv1ArNUxPNCFVuFqtMRMkkUu6CuNNHvQn6qN",
  "key30": "3PEkKCo9qtp6DhbMUWE6yCQ4D5Df7EBHr9C8e1XftL7usJiwWVcPDZxZYgt3mdJ9JX1fsgxKxEXD2qFJMwov7wsM",
  "key31": "3EJcuXqAPiZMRbgNXWQPRTGTJCzzVDXTuG3gcdpq7zpZua1wSZQetYnqLoVy76dkuZY1miqEKuwVPZY64xrt5MQ7",
  "key32": "2uWFbpaiJvPoMJEifDcSXhRYvd1h1nG1CXduop663xGsiZiTHZwt1dNZkS9vFQ6jbCv48xkXWmspGkyJrNuAUXjv",
  "key33": "UsDVDJYGyv8DoxXGhSDdp58zKG4KkrqHrr8Lsr7Rm2JqiMsTMcidPHA5UTF19MP9x9UznEKMjfKnPTzT3g2CCpM",
  "key34": "24MidmZxk7abf8jJTFoxFvRPpw6fpzEPywB6DPQqU7veg6qJTdk6ZXDXTaFxaYHeHijrq2iadgVVcFBHbGYz7ZV9",
  "key35": "3oo4HFfXwJzWqxm9ePoxTHHxUeGTpvvZadwZRyD8ML9e1cT4cBBc1hEjThAAGsV24mSn7dkx4wz7pLmtiYY9Ltac",
  "key36": "3iMDgD1UZAfQLSKuHPQs4kEyZLDRSqxtrWygvxFmsfHWfFPocjQsjBrtVcz6sudHicQfVpBjyaLKn9FDSNzmTVrz",
  "key37": "4pZoh5op7K2df3qgQzKPKNUUA6C1LX4Dkg85QyBL6AVpMLJSMPeNd4hXraodBVPoPggcYknSHVD16CubfAWksc63",
  "key38": "42Bx6YWxVrTgno5ijt2BQYhSRYCrjDriFcgeJ1esp58Fhwb9HMJkZK3hrxsywu3ktiJZSWXT6mFQaTkWgsrsv6aG",
  "key39": "28KBN9q5RNQUJbCNtqGypWXZh9u3Rg5ux2zPdwjVkh8vsZbiDU8CxGtU4ZnTznKEYtX3SCKCbizUhTCS9eAEhTSq",
  "key40": "5ZTeFq6Hpnc3PQNKZW4EwijKxannhPxfvh4nhgFiv2wJBpmvMPvHuNXWXn1XqMC4qUMyn9mNCLRT2xUbXGhMr51R",
  "key41": "4wmexNFBASVDjtyw9PEA8spnW11AqqDTy32nzZzJyWbB5hyFDyLgu9FtLzGuAxYWLrSq9anW4oRNJ2YjhGYCJK8i",
  "key42": "62HxS5xft6NrU4edErEczNvq64mHcj871P5iGz6tHGVqcTLdJtAmHaSoqprg5iVFD4rSKdXTXnrQVhmBEYNNVJdy",
  "key43": "5LnPDhhRx35hKA2BabdLptAUGZDgb7jbRPfmo4k1p8iCka9gUo7zmbGjcD9YnwrguD1x7Nmz3kb9Hip44vCXHCkX",
  "key44": "5aSVjcbYi28Un8uhKhJtkdfUckPEiAh4XZ884B9GDGwH37L7p8EWH7wPuK46RbqwE3ZDxLCMuuRmwVqtAtQMcKWT",
  "key45": "2jGQQhpUKgR8g7YZt8boJSKYbHujChkSLWkeL3FYbLS5s6iqqFKihVoATAenYh5FEEFTGFneCb68ThJNKRUUsnxD",
  "key46": "4ecBv8JSGTNY7EyLKGVRDfsLsbd6fHuQp5c865Wkqh4qAc5TZVcn2EGK5QTJq4avQUWo9JyXzHmufVWmu4hvBd9w",
  "key47": "5ckTi1o1YypU8su8DBvBFgriaXsYv2bPGuYS7A3YXhgU9iFvQMA5xZEbTx3A7zLiDRU7EqCufad5Z3f1VmzuQyy7",
  "key48": "5LszsRtF87dkXV5JpB8cdotFsi75oi4wjFcvtwJZq5sDrftiRUfBECK4ouwMAfST5uSGpDSqeT21aeg4m8vdUv7J"
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
