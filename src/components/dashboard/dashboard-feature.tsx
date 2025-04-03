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
    "49ph2RCedrJnqe6LaLCwMLokSRUmiBjkE8GquSciMJob33QEjftH5SgzvGDc1ujaKFmuJ4xJMYZFTWAanFDKWGL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53i2WGgfje39MgdvVvRwmwXi4pPAqYbThKs3gAyJk2C6DBWK1K3RPLjXVn9TCSL8n2WzLr1Mw9nGfQ7XGLyLEQ6k",
  "key1": "5ADAHjy7QhKoBEE6Lnim9QEnP3h9c5H2MiXbiTzpDom9cEV3A1gNDFqwnHLGjAkhWKeejyDKkzAWKYZzWAyLASyt",
  "key2": "2nVYSKG5NCfohUwSjjWRgiXj351u8AbfHDTstKHEf1bCAx9PtYL9pZFc9jvAAaf1C4Y7jsumBX2XrkX7Rg8JkPJr",
  "key3": "9fj2438UPDX3CHYsHNJShzCmQhH2rjHfvAH8KqoMRm6kniuzjdvWQHG7RRPQn2wXcVHRRtErpme57SFnkzwUt3w",
  "key4": "4GoRQ8uRFjnnPNjbNBJYqMh945iCHknT4qF4GCHVKcbooDc7SquqhUqnnyf5JxmyQTdDbwHV3LmdpwurgBxNdvv1",
  "key5": "3t75B9zKygykXbUpwpt6ezjVYcxBW5pMmPQyGXQF8UM1guHwQG77ZiCWxRXgpkKBR67svqT3hU7wKHNfFgA9xXXb",
  "key6": "PFVU2cmeM8dEvjJ2zzTRyvxLKdBSxrJa7Syec4MY78mafxg3rHuydGmXVqmmf6gyMNQD1qCKor6WHxvB7Z5q1eT",
  "key7": "2bpgHbzmuvci1APhfbgv3TNQt3M24tFXH5rNXhPVL9haK4T3nyd9wZHhtvPTKkjupUJhVuJjjm8yrGGscKnZJREo",
  "key8": "44Mk7GQ8ueZMcvVwJD15kD6E3b9h8JJAR21vQaENeBRrgbYW5EU1w69rf1NKnCgVRmcHMCyJyMVWqcmXSCQy2ZmY",
  "key9": "5Co4nPHLa2AJybKGsKiuphwVkD9rQQ5YLFQTKMn6WxhUTKFtJXnM5rGnwJRTv4bA7U76DoRQuvJLLVRK3whUUAA",
  "key10": "46pPZRvkeqnJUDsK7mjy5qPpAVKGLduHvpQ3ZhR448U94e4v3a1aAgP9WQmVsFmYpygHZQGV6VeRbocRkK4dkxgt",
  "key11": "XDdkFNrM9LWeJFSMbNczTD3EmSRRQ9mfmPpUBuF3YBRHuvudtBLpURS2R9WZW8Zf3hcYGwN6svcfXK7iiCRMeYb",
  "key12": "3ZSUjygiABZhp98bo1BMH3TA9ML4fNbYPX6zcfon1CogXNFt4JAZPxRSyBacF4EWk5DHVKjiF28iaZS7JMfc712E",
  "key13": "z6Byt4YUSynmfyzqZKHSmujkrLXND8peWvRMEfHn8ZKfcwicSovrLacrqVH7oa9fAp7mrbHxsWkdw7josvgcUEG",
  "key14": "WpC15nbWPv2f8amJZWegaFhCC4XXMoqukJm4qcM7joKs67nfysX3KkDmK3jNRLYhyhKfHiEMFH26Wr4wtPk3oUx",
  "key15": "34aMG8hBbaZdntBD5hxTc8ZPAKS88Hqb1kss2bp5THeHgmq9qLXvXzBKmEdJW3J26sw4ubpsaptmP6gqdDyfJQi2",
  "key16": "3aAniWn5mvWEoB91gAAbhxP9KTjix8w7KCdBL3hypxvhh1to1x6BnhbdSM4GErgRcgBysbcxoxE7qJMw1hAXBAmP",
  "key17": "BdDt3jKJB4VSfVyQQwJUy8NrF2RK9b26FGgwr9sTfgCA5waAqwhHtjc9zXt8toiqXfvfHVyei3CJSu2efegkMqe",
  "key18": "48YXEpEQU8PEpSsorkkDSFEoVjEzSRd1sB4UE75t8ayTK3M16AEFLwxaEvcwFdYyNgvptFTrtqzKvcnY9qqRG5D3",
  "key19": "31twqBwqWAe6iSGHSVstRVDpXZZGrPf2GeD6PEgMDDq1FDcqBpYpLv9cmZuHVjQQwqCMx8VukPAoJXWMYhmuGViM",
  "key20": "3Jy5oPqBoRU59KCi3qLTu84rvWCjL8CoQvAowYSAW6qFT3LJFtFxQurZBjPkSxt4MGN2va4PBEk3aHPqSFG2Knh",
  "key21": "3wFdRBtXDUpPYLjmU2eQZwrFfkRNP6NKePjjxBEqwdFYsW3hfYv2CpiBYiRh4LJtomesWh3wr7obaw8Nib37cubZ",
  "key22": "2cjukXPJiardh6LmKJXPvQatWu2Cf2dfpkPbg2X64oqfEDT8rpvsJgL1hRVL9mjByDt6yFUrnr1FrbuYX5yLoqSq",
  "key23": "38qbHPCtgpHnPvtTjAhUaEwQyzbXT3rpJSphYGrZc9UEPQykARSzJ6ojAMrEsDA4VYbMYpPy6kMPzN5whcC1n7xv",
  "key24": "4TR4UCJJByvD4SgdEzN6gdPECytF633RnggtGojUzSSH3zzvQLzjsZ2kp433dQQHe6cw1qQetvE5QTJnNudCe7Lr",
  "key25": "shGMfrWaK276znkfqt9C13DcfgrpBafu7rGFmzUxUfDJJRLnoZ2H9bVycsxcasuEj9bHAK8v8kaFUGgC1AnXfgM",
  "key26": "4PgxhseidLg2W6qeWLEJ9nPV5SEj1bT7dbxjeVJFkCH1QXpEpQaHW5HSzy1XNf84SxXotV7rJqSnSBht27kqbtJZ"
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
