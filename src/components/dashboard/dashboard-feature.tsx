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
    "55ZnoSXnZKfNSsEMBjXD3h7z7TX8vevhaB2SpmVhTEa9r8kqLfnsRQs7vBRw6voxRn48FNzZTwNsfn4dmY8d3DDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGPXimfW6Wva1nFefVC4BYQaM15a6EgibJYjYxbLwn946AnqzfrhKxr7YrzUnUA1a7tfbu52yLBhpFTUDanwJBw",
  "key1": "5hVCREB9xdM4ww61briT3R1jjCxXEMcNVjmNzYRk31tjasEYtPAMCSVd5tD8KiD7S4zbEc2JNTGikpd4T4QgKZa2",
  "key2": "4pC6UeNLfXY5geCipDg1LC46CejUazMbkTbVQn77Vcn5JFSYQgJX8f3iYixZUqtbHcVsFiQNZmjUmSeHy93boaju",
  "key3": "2bPSxjDnb2woY5SgxnSYCxBnSTcZDGBMg1J63A9TMZipFkTMoeH4baDVRzC8Ct2CQyUiqqtM7sYd97wqoYKq1uNb",
  "key4": "4j9F5f31GZMuzQuNLWoJpZN3td81uRCXT3MzoqjmUTdqPdNqCZv2KVYS4JEszhZ5a6dNrn3DuqbsAg9YJJtjw1Hx",
  "key5": "59d7qMtfEYT3ZxTmbKZwtkRK3bKe2U5CxGJTDRbCfZgN4UnwFZiUtrsNG1Qkhqraz119sGeQHsP4bp9XvB4nBCAU",
  "key6": "4mdeoWJXKf7LUHzdayebPfA9MmgZHN1TyXbrFm4y4c7NnRpNUz2ecu2kEiYbKspEbbidtakSCRhxiAiTs3argHBC",
  "key7": "2LdGHTp2Y4TgNGTqpLEvvGS6tVSWaWPYh4m5XfSokaeG4GMS7ct9oGKCqVY9xkzBAHCgR5oj8AiVstdo31BfknWE",
  "key8": "5P24pFfeLZugZRKCGWMVtTwSP26zEv7amB5VVdee7QMZ6yEQBDip1bgvMesThUPciGSy3UgNudGVvwcAWg2JkX2b",
  "key9": "3DDs5EL7EpKKKBbbJwpKZrHEzuoeq5SLXQr6QMMMNzDbaKgtuerupD6rLNxz72ZTQa6sZCf95wRiT7BB8eJc47dD",
  "key10": "5eEMMkcpLLX52J6fzWcP24nh827ntXZg4z55vtakAuHjBSxpP7tThK8D2aLW69BR1BhszB4XvBnXyLx8Q8axT72h",
  "key11": "3nQkxXZ7kWM9VfrQUMZqKoVmRuLiLwMDASt2YLmbAKDV8qDbHJ4BZ3aLT6uwf3eGn2FCngkcwMg675pnmxpjELxG",
  "key12": "fkMpUib5UXJD3mrhLdYJ3ucpGzfspDmUWyChzAE9rGNctJRB3hiwG5R9YbDdedftyfQMqPvM1Rs4GbK5FBb2HPu",
  "key13": "4HQuLxbooLtrYgmbsS88EY4NXuz7kkkL2SZodtsPeaqbDcrT8DcPEc182phb7zAjv2CrweULhxZNQFUKEPgRdwUG",
  "key14": "38LfnZeVvpsqKuxFsVdza5wDkpb2XT5AEYWWfKgZgE6BiVU6Kkmd1x7391iSy1LPZFKmfBxJp1ZTWp1ndpCUFUyu",
  "key15": "2rQpbg8s4Juahrek2NXkejWQPwP3CBW2KCaGXRNjqsVfMLeWqHGvdZ2nXfQv93FaWRTSCjqzobdoSW457YXQCjXK",
  "key16": "181NGKGpkuN2AyxVQFXs1EoaMho3TEJbjubRiuAr8FgZSDP1PLcFafyamRY6qcbNfnVc11kSz2um813dhrwgm54",
  "key17": "2CDoSX4dMWZbHfvyj7qTAwE8p9Ug83c65zwdpiKs8G9Jtqv4bRsheD5xjBwDETN3rHxCKpzXmos8HdGYaFrKaRq9",
  "key18": "2Ur6EeC5RrmdhBEbHurWZm75sm7Xq47zRZp4vexsnAEKghVKXFfmXQRqGBVNo1VQLRaqk72M9ixkDdH9y6w5P6PJ",
  "key19": "5Y3zY9658J4dfLhZDY2gZ7txHvK195GoDUsbnGwztaPHq7MxVHATZZbB4H7aS2KPjmjYazSw21e8vGXs2BHLk79f",
  "key20": "4GCBbJmemqkFoekmfM7mfky6EVQ58U8152SyNLxQ8oLJvhHcJ9xb9mn1469GVUuCYx83T9KF596CZS25scvHMk4Q",
  "key21": "4hDQZCAqBkFvZxud1s5zsAtUApGrxdBdVSQLRckLH585FGWkhxyECPdCLJW9cTcXF9rN9RX2VjrhNH38p9RX4cCp",
  "key22": "5245bzipod4UgF7Z3xnr6hpdDEqm1J1sBPMsXcVAZWccTpkoSpk2SaHGPrfxd8CDY8dDFCK7QG8DKrFzSiRQYV4i",
  "key23": "4JrJa5USouEhDoCn3LgVparrXSyJYnZTwhnobxUoRQoTkNkqn5toDeqbcdUf7biuiq5Qn4YRfcLLQwqKWVR8Be1F",
  "key24": "2uB4yzCfVBFEdYUavBTKSpmHN9DF7cTaG88tEGY4XPsdSzKLA8XuYJCc6JHXx2YbgogUbqWzCztz64REZxpVwX5n",
  "key25": "DkowC2kHzCaeb7CZeubSCjnshALoJMhPRfHbbtcSyYn6YnAfEj2FzrmpucWeXR6dp5Sivj49GaLzijrN63s2Y7K",
  "key26": "4AzkgApCWUcVkBxFhLs4Uit445V9ScBSHJKH4K4JVGN2EJa9sh9KHAfxG4BztT7mUPFGXGjiv7RkyMgRQ3Y3nH6Z",
  "key27": "5ovdKjTHvEMgEu9zpBNwgvjGtrQsWxjRwJgrScJLCMMSxvPY9AzbHZHVNZvw3w1gGUimm3jKg7rvrnNbcESwXZDG",
  "key28": "2Byh2jTJSgPoMWdgXkg7P5AMRiZMZVWbJe1w9spW37wDzDKPEkRNZuMUwsosb6SaRy3PtPhX4uCLvbXNX4y5bZZY",
  "key29": "4np4NTjEcDe9pcEDrNhpmrMRgWPbUcNDx1eanqEcsRbqhSpcSvfJXerPvJ678DdxDCM5PCc9DrrWggWErD6pL35X",
  "key30": "27s6vmRHfNy7nPmMLbc9QW8vMyCxueNvkixHzheT9Fdt7EKaHqgdD2ysqfNSq3Xaz4MiXUKtbj37a8pfNPMKbUcE",
  "key31": "4TrXYjERqjABuMbS9LmSr3UraEHADVLe1BTCePC8XucqXqxJ73MBNjNW7aA5MjBPkGQKdK26p7QZoCB7hbe5XQQs",
  "key32": "rGre6q9oxoUXxUNcMmxQ9EjGroPeZVMQoXJ4Y359jowEc6keGVguEQmee19GPRjquF6ZtYYPmRuR9A8HA8cq8rA",
  "key33": "4jdrm9Zf3BronvZCsJMHSGdbVdqFKsaJ4wNveBPPmerDFQnapfYCaSUyfX9URWR5o8qy3bzBoMP2kRN1D8dGCjND",
  "key34": "2bM6QgWS9YC49sAV9Gc1mfv4SwH5ptGHv5KbKDViK5zmA3bqhdaN6aEbqE8xvgksAAoVS2R232v9SRk1kM4S8Xu4",
  "key35": "66x3cRjBUtJKZxZjpVQFYN5vZ1r8fzPkCouaRUnv1zSYxKMrJtbuyM5pvSBt5P51G1DjWgtNW5gE7DPV4wmocS5q",
  "key36": "tZFQzRGxsys8r9oPTdr3qtrfHcKrtTdcbLAShthtbhfYBQb5rExfgdZYqMYtCJyjnW8Hiyzdn7dAnXBcSB8CD9Y"
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
