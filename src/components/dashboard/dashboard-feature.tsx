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
    "5etyCgVUPdoqT1fn4HwMYPor6jFYJ4FFdT2neCjTjR6RiGBnbDjJpqSAisgBnbS1mXYHaKxJSB1GR8KKCRYrtBAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLcgRWYqSAJ4L888T8crLBQ7GuFYYv1D6RtYJGnVbevP1rVRc7CEKSXDJf3di5FFwJrnCnbuhvnmKPBpT3Kpofw",
  "key1": "45mMMsB34zd3b3o8popBGva7DcCRj9K5xD5tXCFVvbMMx7WQpdac2AFyNBALgAx2LTqHtxFVVMBJ2SGnWZUSmYFd",
  "key2": "2ePu9AUt3PsL78ktcQUm6rFoFFSTJGYpzhFkm7TPAcMYvjSqNsjQb1sG7fLnKsgYUBWKnj9Np8wtr6fkHCopQbT4",
  "key3": "5q7i4smKNSVR5DkF63to5yFMT2vXHaN9wTQN6yM9XTfrgHRM2jTVh27oZ1fqp1TaGMEzcLdWkhnu3HwdhhzA1DaZ",
  "key4": "23QZocVMftGxSLJEjdBzhxH54pHNyMN4avmX6mDBFLdo4gXfVCxCUYrnusdkV1dLAvYHS7SCcKX29FyiWQBTTzWz",
  "key5": "3v8TkPu8vLj7vtK58Jr9ToEQc2VmR3AQmMJhGSoomQKGcVW2EPYfdc1wwnxRcznb9b2A5kkzqaZmtnnuEjrg41p6",
  "key6": "3bJmbJwjJ5YgE2sTrvEk2z58HjSwcTGMqXMoSTvh9h6xCdqBM43dogABh33QY2kXSwa5of2QqrQHfNrk6epvKGhM",
  "key7": "42q1whAqTefos6u23SYnCPyX3k5YYKovPeJMpUM84q959ofizJvW2TwVa9BBUJwaHWPEFhorZGekMswfHHs2Ezq1",
  "key8": "KWRcQp6VufBdNmYPt4giYffphkib42KvPr4RLpCcqyqmcdKU53DWiRRxCuso3KAgRVBHZHrVFxTaz3NUV8pjXPr",
  "key9": "5VC3k3sHmwkAK2qcXQQJE5SWb7eS5eUauxdaazFLktmhWCsUuAxMZtNMvFg55t3jntKfWGo2jBbKB8kR9uDxdkhc",
  "key10": "2K11AqE8JiUkmft5kUGfZqKDTDfZ1mCg3axDshKFfxbJXAA8RGU7y9K7daKR3fVAr39Q2mEjWHcXMK9ZcvRKj5Ty",
  "key11": "5XGG2P85Cg6RdHo4HgSg9MmAPNcCHDeA7ek428g1VJEGJHtFquFyZSTnT7azM5GUhUkHSUJhocZjMD6mbQq1q8Qc",
  "key12": "2SfTaqmKmN8D6HBidd78LbcPCgmSdSrw6RU9k9FpFPxSAWa8EzEhh9N1De2E6D7JVrPCcheHoghgkp6EsHuRnDUD",
  "key13": "58MkrX48JGtyFMijAQTDiwHZzBpTL7JqD7KJQPWuvVzJgLw8TW3eQZLqi8pm8FhnKdC8V27hPgaDfvSp6ac2qJAr",
  "key14": "MS2NCY8mRj3h8LYBcJG1irwtoHp5ygHWQqP3kGYuadx21Bseg1m7sf1FDv9YgsZ4auktz4PvxceyoavoBmm7bGu",
  "key15": "65Fx2ak43KiTGziACbzfB9zBdNceSLBQxQQ38XrvYFuiuoM2nXqXo7311SeNHvEFCd6s6fJWjKsgYFHomQnmVMz8",
  "key16": "38UCcj6AxzLGfHbn8kuC4baBBd1nDfDRSy7JK6ARPXg4X5aJMuQWLCKazQAUJd7kyYZvcgXWHkXTRcshwcH7SAhf",
  "key17": "4FCAU5Pkju2McrL9JC24dCGPwhGoh1rMMNKr1cy3C6wMDyYRVxkkfeTqiswrpsCyquriXKcCuPJh7QP2hFKm78Yx",
  "key18": "5uaXipWb8jZoST2yXcPPLciRsDvhQpFWjMv1qth7rdRejLUmSPEkgdhU7cecY5UUL5HwPkL5ytMB1YMT8K2U8TpB",
  "key19": "efDxchx2DQQhPY9cQf4n2aeaZzRTRpvA1Yte6jq17i7b9naamKzmD7j8LBYfmMNMHURb1PVNgSCb53e4wtKXqmT",
  "key20": "5BPt1bkinC969x9FmwLxGXAiATww8dAtju16rhhrSf9sdkmCm7frMsctUkicmw4CF5qtxaXkfjwfu3MTXXQa3aF2",
  "key21": "3durZFCobyx8stLhRDdWBQouSmdgBop9htMcpMNJara8f6d8EV6VtiiVhf9cXicL45fuWmxdEbF6PKGBZKmFEUDS",
  "key22": "2GuV2VQF7s79nNpgUWdWzrsG7Jqowr38GpTu8gmDSC5urNNzE2GjuSKpPDwcMYdNUcUXCriTwfLuk2Wrag49mLN1",
  "key23": "Lk9AJTh1P8i2ADLcSHJt3McBGnu73LX24F4KGENUFWxcUhiPntaR5zsHTWw973pKDQMjpTShmCqVMbj5CfwneWe",
  "key24": "446nQNL7hKDocrLDDBogRauJrDys57N1BFoimP63cPQV6CP32GZBruGihDXx4uphu82B9BG2xLRVyV3WT1X4gKhG",
  "key25": "Vwi8xmfvUcQSYN6mQeBjBAVJ6uxuy83UNTBCqbcRNbGJXX7LW2tpBYazEbQCs3PRR955s2rnVhL28ZfW4tio7zY",
  "key26": "59dSEbcHtvmdoVvcHxtxQohqfrxXHoWXxhJg6uBvB7jJQMwCXJrpsVZN7yLdVUqpVbMHA6udFrhfJxVCfoTe2Ppb",
  "key27": "V1jaq9gikEqePQu2fYnKbMUEq7nkJfTu2RwHQMwU9rLZfwqiYEiLqYzHRPyzXdbg7sR52a8Rc7wEGvBwZHTPYdV"
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
