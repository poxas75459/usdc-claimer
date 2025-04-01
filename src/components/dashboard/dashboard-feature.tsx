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
    "2xDJdfQKUqP2HTrtYaa9AtRyVpKC9Fy3xc7fucwLwXfzdQd66FEhYsiSE4XSWP3gAhqgdXJSLusb8mDPH17Bt8qG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jar2EvGCXxubyk4Rj2tDArH1vTx7ngWgSrsitqFXzNMAHxPNbqGW4XvsGfMC44EgqNdF9WFqrAKAq3xo2aMRyTc",
  "key1": "4vcsDx1PQL6CQwxPTU14L5HRrLWoUxyEhZMBnb3Rr1LfUes8CZoDWSUJuBW9mYvBkLfd58pFQvgzNESvZZ4VLsuj",
  "key2": "3LDkhoRw96wDKK5UCWhYNYampp8MKjrABkJT9zv6ytZ6erGJpZ2WQobPGE1shkiTEBGfpy7soLXSkrdY5Wy6NW7h",
  "key3": "25g3akH4thfUfoF1bejh9zG6VA5yUn4m9cEX553BA5abEGujcv8BHN2aKUu3KVEtUnmj9PYzqHrCKtPf7eQVRJJc",
  "key4": "2CLMd8wovfQvvu5gswzzYLmG4dKTZZhF7yhoCNTbkQu8J8b8GiSMikU21LttsdhB46USD9jQfomSs6SCf7tm9ZLx",
  "key5": "3brDtuLu1eiwHyCueZjPFVVN9ibCaN2f1BovJx7PVwFV9UfxpKmS4WRRsAunXNvQVvsnUsAHi2ruaPp6odXr9PYM",
  "key6": "5xamAmrzenF3DpPXXTdE8crGmQjjkV2TWrXJyo9ATgJv5piMN7ew6LpqtgDvGscJSaimiXcnuBdkGiBu5KGWR9iU",
  "key7": "2Z2jp9gCf3zKx44T35RcnRdmJRdLbPffnxGoWE2fdRUpCZCz6653D7Db5ngzMRsjy4vuq9dDyoauV3WpRWWnhs1Z",
  "key8": "3NfEN9g5GFLsJsvKcctaxB7sKKBQPK8CGppSVJaEitPTewo7FubPs84P8rv7FgosubcTpMf2TknacGqNY4j2Qmch",
  "key9": "5LVq29zXzNykHwYhhRJ7SoydJ42i9Yx8xXpELvZhpMfASsb3SxQ8tA1QK4fSWtActuWxEBddHzU7sWH1sF2aZVsq",
  "key10": "6AX9GwUciMtzAE3vKqYaKrzHQVSpqHkzSfE1pRjf85N8QzWVXUL37AAtPD4u2Lz2FStgDsAjqbPgsbhD4FdpUoz",
  "key11": "2jNza62kYT8jZ3hJ14bkWhBQCLAdGguB2jq3dKMx468BTVscMHkTCQAG2VdMUVg35iVVuTWnPsUE58ibcdSUR1Le",
  "key12": "3LFZ7zX4xXVBRMM9wafwmQPj2HdFshqqaSr9UNzHXgrrKYUUNCn6eu12BbHw4zy7XJshfaXkyLuvMb37QDwxV1uq",
  "key13": "rmgC97Psg1G8iQvPtLReCmoGEvK6CPbbEDwM4MsSe67HqnYQGWj5GJcGgH5v7dcj6pxjhDZRtPCjzjsa3x4UDNn",
  "key14": "3N39gar2hrciwcePkow3Ezoxy3YLidChbUv5AU5NTHwgnsBsvk2TxFDxFVACU2j34iPSmWWouNyA8W2MS6ksprDH",
  "key15": "QoitAozw6uHmtKdgVfVHcdZfSGiz3Az9YV1F1r1VgWw6dJiyQZMnNzHR1A5kvze73ZvG7jstsGYiT7rSKWBVQYQ",
  "key16": "TZJm5bZ5fZ12v8NYDP9en1pxdkPoB6CQmGZZBxHhGKDvQxqADMF2pB2sXaKwMe7YyFcyV6RnkvgYaMADZNMa2Cy",
  "key17": "4gg4AAgiBADdxFkgzdV9Aqej5XHz6Lm13jkg6mqfs6W6edMXTEXwP5xW689H2FNgUsUFS3JzaPFMPywZtLrp3bdn",
  "key18": "66CsZXRc1RF9K76QZQ1crcng77uDG8s76brVbmDJqDPj8LapDYuzkrP5fwQrjm7TunaU3qrNqKqY3LD6bCSQXvTM",
  "key19": "5jrfMs454tcfXySMpwRXKxC1SJAZgwFMMhWLkvAgjCVYoRyxMvmBKK8pNC7y4uiHA4LbeyQizmRfAYxpgbDyZrcm",
  "key20": "29JBWhudKbynqjdL1FLsW1p3d94LosZ7cE4q8FD8xcVSJMQZFT7i8UqTi3icp1mJKN6RtCByzmJcdoBpSuseXqLF",
  "key21": "p1mqshEAEFCr4Tk6Vzcx5epoWkJbzontszWxsCpw7QxU91S6LXivUnSayaWt4yCmkZTgRrZ3nVn1Rawi7ywnkfd",
  "key22": "8nVvKjdMAr9QMro4GzvdH659Lor1bw6GCkmXAGQBaYkoQDUYpm6a5eoXoPfcQZZrCbqbgXqRSeGDpA1CHy6qKxf",
  "key23": "2TdG6wmYYajw8DHtneMMwoZ8aud9LLdx1L6HykVN4wxTmCr9swyR944zRwLHy38won9mG1Y1ijXhmYX7tbwsbFQo",
  "key24": "5xXWNiVNdTnXX4o1sSq7khH8ch5sMrEXsC88dkHyDeyAQyY9AdbqKJz6rBZkosdbYS4VH7WMBgdo9gR8TrVqvUwD",
  "key25": "2WeeCUPJaFtG2zFGi1TZbayDYAMwMWNwXFWgACeVpMSvvLCNF1jf3SRpAiSNHfejdSM9JLRzGHzBQiAkG7mVeFjg",
  "key26": "64Tot5mxJzHxKSoxKGrwvdv5B7GQdh282TBhmuSKuQkSLHMiZv2KmgE9m2twr6rbmAbNSP2BUrW8xuAHvfNfrGZJ",
  "key27": "3rMRyMcjHgjB44odj9cy3SxS4fNZLWgWbbV1oV8ccCbE4ciYatuVZK38hUJ8UA2RBAMotsEVs35j35CY8dZzMzAw",
  "key28": "2dQHbRk3ZrqFdZJxjaHWXhLdMXw35EQcMZx9oDDNMueK3hiXcG9hXsmnu6F3UcRr2xJraP7TiUxiwM7A5X6ENosi",
  "key29": "2NbRXFB5VLoF37H9rKFyoB1qx3LhcPQCH2FeqLeB11u92vsuPzTjtDVjQp1FZwMGxSPfUyxM4vyQcWUAvfB4Mv9G",
  "key30": "2XdiNAAk52MUtoEbZnxmhExJCwBG4ugQMgy2PxnSA7DBoRhyskHfSZ4pkdb1a73C8EDR8FhTkA4dKJxTPjeZ83DU",
  "key31": "3Ngga7Lwxk6vD9tt5xV1BNnmgLZQUHxddzUo4xtfffF5RF8H5WfPDP5LoVAtJ6b2dNChjzoMCrn9ACspEubV5ByW",
  "key32": "2LRaR2r2HW6P2uDgji6q2J5X6C1SrEKFhQeTmgy3VGC5DdqNQ7faHs4zJvfAmm3vBXjMJwqDttkWQEp3125Xg9vz"
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
