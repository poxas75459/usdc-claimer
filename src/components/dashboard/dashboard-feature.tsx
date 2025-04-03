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
    "4wAeBhAqHtBNSpWqscVgrhwRwzH3shqVQTNEArAMYxNFUnGwRuWZDwtW8nTuqhTzB71Bt8hq5Hts3nN95Cpy7Hjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cd44kra1wqj3tSz2U8z6owmZeGiGrWTC8LQNzWhvrMUbzxURj7F9jFuTEUtnHAnBvyxGGRXpv83d4cNKzWZdVMF",
  "key1": "5SUZqXyhJGtBEDvyhDK29L9LsJysuGbeUTm6fnDCBLTHyFpAKMR9XiV299m28Ttt4yJgEfNHzstns9voKbfcGGPW",
  "key2": "33gBrwnLKGTQYfm4HVeMscy4MFxNsZzDFrkuW9vWdz5koAiEdR8XR98DCyZhhiPgpaGxYaWPFS7mtqxHZebuxsXk",
  "key3": "24k3n2TfkYPjQhET1ZYXr1YHTKjUpJiJReHPJxZ2kzg2xa3yWp4XA5dmA776m1SVapUu7CDRkpry5YduUy84EpPe",
  "key4": "4CnC3P1mzHQnvmmPR1Cr7Biy5T97Cs4fuWzzH9ta4kdNnjH6xJkn1pL5gB5edGdFC5tx2Jd2DNYhUwtgAKQQ81Gq",
  "key5": "2kTpTRYXp7QB2bH7pKSXKRNgiR3ummV1vbhGCsxdZkFoaNZpp2u5y4hhofh6AVJtXUaL6FbZCFrtJGtiakqnarC2",
  "key6": "2V9Qg9HJ4tGRiRUYCsV8ADKZgj4ERY21pqm4vCsDMpJEdixZmUFanQ9S2NzQHdyTkBUxbK81mQghQt3B22o7iGbd",
  "key7": "4uRrhG9gdaZPPQFzFWdMFYNVstUYcgMvwk3wK4f1MQxrffaVfM952nvyS9aJrY4KaHC6d3ixQu2BFiopgwqqrqHE",
  "key8": "2aUVJRMwhDuLj5g1mZuPYVZssNXsf1sVyQt3JJ5XrdMwxXEegQDgU3AR8k94QsBiVzdVN1aNt2PBfjC6a8g2YHTm",
  "key9": "4mxSEAKLGeNY4v9ZpnsaedtFcqm5Do2z2Pm9yHK4axFkFgzxkPzvuqmh4vusGY6t1NVLSt3GqyqWpeb9mN4moc7n",
  "key10": "4XGhhQ7kxLGDCDW3ArWmbTb3fSW2z8nenqJY9SSFvvHTU7N1mKW3XyTW7TjhZVhHQ5sthtcXGTMJu6SBE8b1Ej4e",
  "key11": "59GnA6JpdtiSfq8SSHTUb7EnRBsbXhRmu2DVQUUk27hSRi1SJzGbt6RgsqbKiiPXoSd1XmxqWY3T4EkQqT4WVUSe",
  "key12": "5aVaXAaxvhPUAjTbBsVsncGY17ZMLP1dmzfbfQksAN4ZKhhke8KFVS6pBj4vwBjWaGyNEn4NjWrF8yfSFnfM4JEL",
  "key13": "QKVYWdRYXgtgERsVNF2P2ZVZ3FWGD4cGQsQ2NU7SNyF3dvHdbnA4Kq8x7aV4ZDrGSYjZtCjwLDhdoqLYU7kYDLo",
  "key14": "4MwiPeUUBySAHrWZHux6YPxHwW8NCJnSVWepcphhFGB2khcXDttk5KWYvmLhmrfy6dNnRymVgCQtG8bg1FfeHYjD",
  "key15": "2ckaxAQsDjo8Njm4ofN6ofZ3jQWHXhGJA81bHG99gihr9CuXR5YAiChzkVBvm9jjQzaWL9Y8ZWSChVv139fZG1fe",
  "key16": "4CTz4UQ9fkoaWDqj9mCVCzx9V71UYquyF7VesFUeUgTVmYcNtJvHbLWUG98NfQC1onSv84xmYHs8qBgiJs7oYYxf",
  "key17": "oKUSA69TXTYiQPc4bh1BoJEophUxLoVTG6iSh1c31G5LtaxrLQ2BZexoZjxzrDWh1fwiPx3hJNwFrE8Lum1V6jW",
  "key18": "2ZosKR7FP8JjCzkpkcSA6TyDDEXeaY8hm8KeEf8PLG6nwrBdBr1cZFjQh7PbZvkeg7TGoA5idnrkGXFqavjPE7A8",
  "key19": "3iL4fTG4cwFarTwsWGakzDCGsw5t63Bz9K81Fg9A9rJEU63kJ3AfpZsSZxMaYr36DehJWrRZjweGfjStFwNdSMLJ",
  "key20": "5jo2kNhb6SeSRhuLF9R4EqrecWoEq6NtXHyJEUsXJDDCLTZ6VeoAkw7JU7ToVA1GasvM6jwAQ1EM7PQqgpc39Tj3",
  "key21": "rEKm6zqt4AzZuoEV2pU4RWSjj7aVVSMWiG23kqTGEmiaw5k2UkQ5D33H3Bgj4gtkAmH1Atd7LmZ4An8Bny3e5Gm",
  "key22": "xLDzHKaXxVbBAUWMLMZAMJFhZxGuadZmBNfFwpBkCSbeG9L37a5pofHuZ1CkLcdwMjBmKKAoNUuRowHP1xKCBq3",
  "key23": "3reML1fNXCfgQNvWGJZ8CN5n2mGmVwPAZ3WWHPwRgBHLhSUbd9vhTrQkP6cnvP4cB6WAcB6Fpbx89NKPk7F2XXJ2",
  "key24": "5BiHWfdmdymtZyLT5RQTvtU8tPd3RyLNwJKRzoeHm7xFLKkLTRAxD6K81xcDGDvSzxCLxmc8ZNrSjCKgJ9BsQqYM",
  "key25": "61zjvxcqWShCZ6naLD54ttY17HAstqtWgrbW1ZnsLTGSyqL96VWf4PFkiDS8N72kuLdNXqXXkT8tzfcSKUjtLsmE",
  "key26": "37cXHZfbEf1SrJWetqAvUexHBMHUArpnwmAYNSLXE7RsUcS5G2jVGnApQcJEpzKfScvpuTJUm5XrFXU7a6Emg8r8",
  "key27": "4cmKzC66y5xAE7BN5pZ4VBfEuJfkWTWHYhujNHS5tEsGBrDEVpRyYz3w1rgykibFytjNWjyYqJyEWSAv14uesJJM",
  "key28": "5y7u8tnMwpwN2ugKG3botWsaToVKn9MMEKuGX4DdqD26jjs6nGR3kg2jcpespDG2migY8FAkP2ncsHg74h1LnJWt",
  "key29": "4KstX1YSf6PYUQpRpMrxo6Qr57sHa7o7LPmDYz17dYmEPgaG7JQvUbBpT2MD3ZaeRjH8PwHHZugKKMURfdbwitAB",
  "key30": "3eA7uL2PMZ4Zi2b3cTwEXyWvf6RT6aMaYivWK52bWjPBfeesqPTvvEgo9o7VywvKbBcySDDgLM7YXD4TtWLwmeEZ",
  "key31": "2Que5Atpgg3NkeKN8vwddWXVdmN6idXNG8Ue8uRsQJJR5qEAvtyyFGP5ktL2DQxcPzURmLWY3iFwMXa2jDWjXaT6"
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
