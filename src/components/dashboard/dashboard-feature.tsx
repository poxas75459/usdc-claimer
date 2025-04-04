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
    "3wjRFjTaVk66nuiWJpWA6De3zPML96QiCQ3eAqLhPSGo3kSnhJpYRHHjo9vLystUTi1H4NZZMEhCoScJCB4VbZyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGiv1nwv438P4VRZ73TL2Ejbhk1ccPL2RfQE3LTD9fyTCB7ynG138X2ThfrmcX4nUMyzf7jMK69KW129Zferpb3",
  "key1": "3cN6Servut7dXh9DhhhGdTTXQQ93dhxyTfEo8tov6Yd7GUiJkPN5vSkfX5uw3FX5YZMVVNMKfKZLLWFE8U7G1HNn",
  "key2": "2Vqot2KCu9gumnzC7pzf9wKt6s3GFcyEFdU5UJMGNhirFmCm5V5LaCyPDRg5aD9JsYE3Q1NSukNoLnzcSKZSa1KP",
  "key3": "39eayFnXsAwuvHCUXMTZcZy25WWtMHuMotfVfeEMiqj3htmJkydAGuywt4igJsxSboHnMvoPvDe5bw1Y8huXhsUx",
  "key4": "2EJ3QppdpPMN5sBRqS17VTtkWZMdgD4PQTHZUdoXsLveoiDD6pL9Z9HX7HUA1M5jrUnTivvZERokUwzxTx7tDCTg",
  "key5": "3fjFqHhPXwtXpgijND6vjnqaRzwrHRSiV6ERmJsvN4VDYASpLWixaJUPjhKa7Fsb5VcnepReSQepEpEENBaZvuJG",
  "key6": "5YSP6Snirade7aEEaNBfiKSydArsjSGwoCWL1Po6BvQtxR26DcWAgJW6zuGTJYwkxqhaSzawZWokjXHgghBAVMLW",
  "key7": "v5hpdX8fSmysiBzwW99xPBLUyicX2crmBpEVfg5Rr8sg6YkAHh8nppoZEZpjr7BctFs8ZB9cvy2DGGseppg2twn",
  "key8": "5T9FM3AKLnB8aNGEwXkcqDmLRKVoqwSJAafMk2vLFABcePKaUZATC3G4n6YvJ8pGVvsmtzTLmDk9jjUsh5nExMUY",
  "key9": "2P82mD1f53p4eDPQAdhNNGtE8gszciYPAjEU7GpfnacghGtNHZangTpYg9wTpbxdgXw1u3FqWGjb3j88KkELFNGA",
  "key10": "3fuNALpB9LypF8nfT379NKrN1aUaHnJEFPvfbP31i9AMWvTaH9U5JcKafzHp1FGd6dBAXttTUW7MwFX1iQHVciBJ",
  "key11": "5om1Jfa947NyiUMg5AnMwyfZAYX3dgYYaVSePSvyZutgHmWxaHzTPHwniB6A6r9UbE33oyNsVaSpKiq6TErvmg98",
  "key12": "F5tAStMt4KMHebFnHiSRss28b4D1PHJ6rXPLj1AU9SRx6kFTKfnqmxWT8GiqXbisDN68cL7NyvMD1uoP6DnRNx5",
  "key13": "3yW7bmFTVWkJiQ11RhebURacfWShmfY17PToqbTaxCwivnLufeGBJgkXgD8pPvJDK2tSPiXDLa9mfLgrgEhhFbXc",
  "key14": "455Xoyh9CZkiTUwpq8mX4N7S4qYLep9LA3EddoLkJedSY1hXRT5mwMN2NucdEb5g2KV9j7RaVtE8nLU57gUBAsn1",
  "key15": "3VBNqJZtVD5rMCuE9hTxYwfPKTv8PFdLfonHp1cskw7bvqe2iSqV1hCpi9aqZyoVU6XjCzYJes1khmreUnHy5jMA",
  "key16": "4xz2sDVVDTK5EPKc1aL9wzyavNNimJMjovS5UuYumosAtJKHwNut81uN1vcbvRKB997wY1a2BYhRvooPRS3TXDvr",
  "key17": "Le462eyaquGpPHZkp4BkWcMj7KWwjr6KXuC61BKJ3uACLbefyNSn1VKxbtN3GT6aoUfSHVetLR6kG5jTyygxEs5",
  "key18": "5KbTidmaBM3H9Mta8pCuaWuffUN7cqz5WqRWQupfw6pz9U4E9NVC6JceEpkq8FK6Pw9Ek8eRderEMDzvRJgGqsuF",
  "key19": "5sMKJLGYMwRLgUVxNbz2ttdGSxVEUa5Hif9q2oyp9sDYS3fpMjoChLL9CzvUkBPmnFqMwP8CEVBf4som9yHQqpD8",
  "key20": "5gaUB3q5pBobmvW7mGJ1vwaaHBFTopsvsT2yia83tSYdj9UrLEBrCHyYpFaYa71zPMW1jTJJ27zpoQ2fakvmezkH",
  "key21": "2sY7gxcBdJXuvjVv2vERkUXE1kcShSisAaoxuCixAzs8VxyTfBAJtdTnGjzxwjH6eFnyDznJLK24yXy6u73gYzX7",
  "key22": "4HAw1eavNyz669FkJGtR6aKmZUPxyFhBT9Xif9Eo34uAZe52jnHr7ubT4oD2vrJSbipShjNBC2dGv2FmZNEvaFtF",
  "key23": "Whpx5pHQmYRuxALvBeg9h55Y42aw9eTaCsb7VNYY7v9TkjM2i1VosmUaCc5ay2zg8mdAiz6mXiUwVgRm1yZjLqu",
  "key24": "3aHBzsheeU1ho26NebfFAsuf4oySsqo7X6yhtCHxHFT5d5iaEpz9m9UBAYu689YPTD9oqetGpq7uszf3Vthy22wW",
  "key25": "4F76DnjFFkfescWr6kZrxykgGdb22eVPoYYARv7eMFGLKCcGd5zQFivmNRdQoXBTBZn1togAepsoaP4TFgivKqYY",
  "key26": "5R2vEctWwWeFq2q4xtWmyJNoBXb8iJWD9GYGsuADbRcqBX5LkfjHfairaYXwnYuFZ9BFnF2WsQTpgVyQXKy4UrXm"
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
