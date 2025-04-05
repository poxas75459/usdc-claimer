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
    "52hS82j4R4Z9jJmkigNSaXFuGyVqumf5Pd8HJwESR1ApszTsA6Mvs5sNdKtErUkem5Nn9q4MDKHfYqeWeQWxTVpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfAdeNHUTrTn3s4129qcugDt42STCeyDZgB8B5domMofBqpErpLtEQfYpypVUir2o2icAmtjBpQpFRuT1Fyiwjj",
  "key1": "5tAf9ZaoMqRxsYevJfqfHDYAsqo8Zez5Lk9SrLVfiga5NFomeNyBDyTSjdDhMNkUkvaS4UEcHqNK9eVGs2HPoyyF",
  "key2": "5o2W4wA2cWFoRSfDmCST46iZQxPTYqKrZohuBzKynJeruc2A9j1Acew5bRziPeYTa54RTBM2qwj9WG1EpgYfaGWo",
  "key3": "3eDsQF6a6iPwgUeEBrkpstMg4fkX8KhbJqfFFiwvDy7SEuH3digohEfzbNLgTC7BKGrSHefsMv77MdUt4ZCjQSLP",
  "key4": "5VHJtwoXKzF7Q4xLm8coedHXGNM9Y5LKvYXHwH1qg6KcYxPsq5L5UNtcL3Q5zBJ6wK9ySaxRie2XBkBV5dT5jvQt",
  "key5": "2v3G4on1ybVpfDkeS1iaCcZAW9x5RAcrfKvu2NQhAoJPppfMDSibeAjaiyc3vHtWdNih6XvRy6KUit4s7wDDfLhk",
  "key6": "3GRUf4wA2ojuAjEkGhNzUqHkRXZze6h4ni5DYQiowLUDQFUx2LDtZQqvxTQo7yUk4d82sQhaT33gxuH18MMcergG",
  "key7": "5tAVYnjG38Ho9z3ZH1GDdHPJJP5BDovDmJNkdkArfNTZJRugu9Pz3YLF8fec7dbxy4exYfgYeSF7DR2zcJY9VUJT",
  "key8": "3VE4vJeSZFsgu7DKuSXbvn2sgfJoGeotU3J5V2mUsgByLkdpZTsoCusaBjQbwuk7gwLyWUxBQAyEAjLjsBrjv4FL",
  "key9": "24SUGgP8nsDhjEoV3Bu6xDRw7uAFTxWGybx2sbj4oo7GmGH4tsBttbC4mSKqZZYbZPMkpmiy6D68zw4snFLjpMG9",
  "key10": "KLnKBqMiPpUuXwmveMPVoDRZaj1TGWLXNh3JWUFE6BB5RekAHXLnGMDWvXpnY6a1bvddjk6NhJnST5HTh4Vfxuz",
  "key11": "34cjtdAkhmahXq8KLJVN2Xyt9k99yjLi9NJ6cFPknHFRLGH3ESvp4Ncv2sFzVbSuAK7bVuj9E4zCSEZDWaEAS1i5",
  "key12": "3SviGNp4P5gTnQdfEWvmu1V3AKdUnRhuUHbn8oN8jtwvMcUqXhyCLrwBSyB8FXrtxuirCneqH4AsfmeM1hWkocdC",
  "key13": "3uvkk229i2qXu8ACsqDEbyiDPx1HE7mzu4zpbZL1cZ3N1snUvtuh9b1zhEHVR227zrBnNXdrQmFGN5Q3Yu928a27",
  "key14": "25pYP8DRTe6adZhZWQMesRFpPK1SfUFkUWGG5SLijXqyLAxVFJEkFAGaRN5yc6rTAyPNGy6uLWxiqJMdnGh4dcQY",
  "key15": "4JAZdcES5tgzzoY48xopxP69atcZ911g436W6T3PZoDSeDmToKyXsnuDXzdyQg61RQfsEz3vhf7SLHffEfgRTYN4",
  "key16": "3buuqpvd1NJnZD3jbhRz8gppSc7qTuUx47rxBaa4fzP9nKQrFoH31jZycXRXaoNSVFvRdsoVb4dUKMzH2wAfwb5p",
  "key17": "5py5CqrCka3GJATvw8bprk6FPBG1mxzfkFfVyNEoie9vbChff5qZHVFC4EezeQxwE9U9RMt4umdBPMrbcUmoY7q1",
  "key18": "Auyamdv3C9cbyGq5Ld8jbuVnrAY5ZhKatvK7uNQeaTrGkiWBZLFNmjHps6jrBZ3oG84RabqfMfmYdHQGo8hXDMS",
  "key19": "3ijGVseuVF5BicWGorZqugM9ZQTe5g7VposCqDhwogfVzeQn2AgNxYJbf45rfP1RzdHNDnwRa2aSLjdsFvquWPfZ",
  "key20": "4CwaqdXutWDNXUo17n192nbMTrSQ3W5orJs6YgHTznYddYCwE9TMy9rsb9rYCqv3verd6iAR6LYjcTNSUwuzbGZb",
  "key21": "2qLr8TboFJuPcsWRkEND1BP36BW3UWV4jhQyQQcqPbiXqPXjzhwCVEEbnhoZU55GxBTfXAoxePRoSMx51fuNskxj",
  "key22": "4JiDsvZxXuq1XWQ2oWGyF7cX9qDZZ8ZvYB2LwjaXAeVAwFt2QQR7mzmh6qYmwPp9XDL2oEp7Wk38bjqqTm4vQcqG",
  "key23": "PDmBw61rCUjHvhrEs3B2DCwsEt3cdA4BZWcYZTxTQo7CxcDKAwY1fEzkVzRUBbVRVDYCmPbKA4ho2EiPNC2596q",
  "key24": "5jGTW1rfPvpkkQiYdT7xkvsAA1EifTcLc7fo2zFkxyRn3cAhtvknT9cwga9YjzHSZsD3hTdq8kdMfB47ERnWa1ex",
  "key25": "65GhTUkgDMfrojrn1nveb8ZCfHgZofUfHwe69DD1oqR4EhL52qXNzT3kS7JQ173dYjbmx5eaRDmdR8o5EoKpFBQ7",
  "key26": "4ySmWpsb44QBzHECW6p546PyUsb1DvKoXpguvgLCN8ohD3r5SXU814tk713RPqbEz89C4ZwzLxxRwhw1wMdPe9rt",
  "key27": "bJBqwf3kk9Aer9XHQdGnTqs611rixSHtT7Q2iAzAQbCsPFuYA388FWuhpKKGsZjS7n9h8WZLFkF3ohNyCVNR1Ur",
  "key28": "2PrEzQNWrnkwANcx5pARTXrvmnRrqMj2WGZcU1R4Mpghc6gjV8uqX1VPW68UwFmQCtayAyAisGPemN3B2Hth4MTt",
  "key29": "5mK1zM3CnbipMvZgrASB8HVQ6UpgA4vXnvnSdhwLRPkwJcdcE3C37JmWhPjupVrS5ucWtr8z26g6vkbqLNgs8emf",
  "key30": "33wZBh66qapXjFzKjpVEWiVsACmDbm5PHX4iMYnxrdoZrnPX8AGoZbuebVcMRDxDMVtawFeEPc9aD78i45TTtBbq"
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
