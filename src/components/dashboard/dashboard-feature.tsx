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
    "31MMbrjhYY68V1NmV5wwYJSpMKz8Sw9H9V4VUDTCH586cesQnqCoNWLFtRNTdBCqGvQSEbvu72pwgH2WFdQQncFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DACcdZuyfsvVTKFbSJPV55iXShGtZ68r6xZSzAcAtifHjD3TQvyNRhTn4F7W5o2299uWm729ApgvGPkx6y64D2m",
  "key1": "3q2AYkSAvX9fccH6c4zLUh2RuGhzE4Ateo9bg4ZqfqQhurB2TugQuGGQFE2JVEtKJ4z7RwjsiMnpHt3ULsuyeZHg",
  "key2": "5oqbGBVUrELu6nyspPNPgq9iinR3bTTG24GDT7MEvsmVZVvzwvh4g3zGeRiMRdM7h8f9YSu33Ku3HWjJsSPSCUmH",
  "key3": "278g2md5okj42kANcoo5xPfsh4xWj5fcMYrxYHuWoir44qnoa8zDFpUVUEkQoUrxX9gTodjSoQu9PafxLE2fJDN5",
  "key4": "2XzuQ3m2dyZuTiNy5VayV2cSUHzPLicdvNiPVbcU3CNSQ5Em2Jfn5sjQLrGNiCrvu5QfdXh4ZeuZRk5VGcYZNTEj",
  "key5": "582TgCxcp8wFBvQN9W8QEL5uiNqvEbQ12wHBAZ2E46CzrPrFMF6dKtVFaw8LtQUVGvSSTqk2cGd5cXF9WUp35jEj",
  "key6": "FZzcDBYoG54HB8qEpSBxfCjNHsg7BifKe1D1tVZuDmPjzn63vknj8TiaupejRKLEaihnwrdvpZBAyvvD4ywLxfL",
  "key7": "rEkSw7ixHruRC6i4kTdWNP6sAtwDzrW8fXvhgUueM1GhckbLnCPBU655spLZaYEq7V18aEEmXgRrf9MG5Xt3381",
  "key8": "2bJ4n8CjmvpJARheau9P7pGSUmUFpDG1pVgSWKnPQBJkFGx2uvepMra236qnisvLxZxL5tKSnwYfiG4Ri2wJwVNK",
  "key9": "ThYYC1V62dzSKLiiQUvW2KLWhfyMXcSxu4jqEeS7gTmHzRx3x52A7BL5kmP3K1E8SNhJm3n9WBKRr87LG5anN33",
  "key10": "66UVbnevq8bZmAdUeBeTEwmSiw9Kr25y8ytPKAS9KPo9Cu6GjuV4385WeVD8wBmzLPSKuooA3bEVfyVgNPXGWDtG",
  "key11": "n3VcGyFF2EUi83wbseqazJ4SFPSfjxdTQBhZH1m91JNDCHRD8XFE1uhCsUtR97fNA65a9W58AHvkJU2dt5CGjvM",
  "key12": "gshdoMsG5k2LmtATpnTyzZYfBFTMERtQWo9pKfgCBXN6aCSKLrocvZaxmZuBL6gR1TEbHHXYz65nnYyrcHZBkWp",
  "key13": "3RMW1W3Mp5cA1PP83vVCMrTS4DvxxotXcZFB73B1vmWzAUgsXiTY5YYsckkyFPAFFCqbDawPWWqQdNvhZZbH52py",
  "key14": "3u8ePtYeFMmL6ZBYeWDAtE3LszcU22fgHphD1Z7XhmbDVj7g8VDerBR9KHwbbgoKUCp7esamjsHi9jrg8vUjT2jv",
  "key15": "2QeAfwTEZGZPcu6Kwprcvn2gBdvSmWLSUKXRdetBE9wLLCL9PH5mtiZG4pY4hAgRTAYeGj32cxXijDZMVuUSnKkg",
  "key16": "4RTPWmmD29tyNQ7DsCHPeUsaDCpRp6UdFFhzAXG5moU18F3Ws8g5wQxxRcWqBX1V9N7tdB9AJyJrMRAHkufAMR3w",
  "key17": "5BkaWnU71aRGc7VhoddQ2s3m5we4oQe1XBMDAGv4mF9LiQqwpkrwPcaAcrbGGVF4wk9zm1C6ZZ9qBGtB5fU519EM",
  "key18": "4GrEHkFUKmwFn2ZKPWZ3htQdiomQYz8TzDLSRG6FaXukTDZ2keJPDy3GroEPtGChDjNXgTMPJU9d9c4vjWbY45pN",
  "key19": "28GikQhJxYSrPj1kV48VDrKXguk9NdUtR2Po9LC56LaxGS6cucCNyVCyTofR1YCMUhDnVwgFjFtWwHpH4W5x99R9",
  "key20": "2hWWKs65uyH7BLYCax3bahV2jfTRXnFLQ28pn9fFSLNzjyYQfuoS88gXm1igbFiFBqKCFXYkvwoJTbNUfnJhS5qv",
  "key21": "2TNBaaSqg29FvLCpHrSxNkT1XTwzcfNsjpazZeLjFfBUQ1SiqrcfHGUXhR8P8dc1NQy1PXbDzqnwzmqCVvBVpVD2",
  "key22": "2P7oH1VZfm6mW5TJZb3yE6yDy1WCQJGCHRQVNaMnSovuKNgiPw4VCSAiobdvSjRioFVDQWhKs9sCG3YHmRJVoX7j",
  "key23": "3pc3BhVm68e6NXX8ZB4YiJ6WTQ5xTxLnPaEPBw7axsr6bRhKoP9RewGEqQJwHYoSCPo5UB8kJU9373Y1egbi5tM7",
  "key24": "2NZkrSuhBSgYGHWpMF4Wsx5UzJ28YmevVgwtNZqbTgj4FjnPTdf7bc4iacJZggDaZ1RrqBekt71wfcmbVwwBcsm8",
  "key25": "wYRcdNPvBt9AR4UWiR763KjJZpwVFRKDoVbaXfSuNnrs3mFNRbCLjdUCe8oGH1ZyWFLmD6M7qwV2LGcjnLQjpid",
  "key26": "5cWTtUNoeqihMeswEQs3LEXXtiMnYM8f5BsPRNgH1cCrhii2fYPsASgrHFaCuqQ9K4eX62q6TEwoAbzp2HZW26N5",
  "key27": "3zaMG3p4oua4grPpmmm78HpgNvskh8jtcPSJmd36NUB7K2wXWsCFm7tgsL7hKA7FWAqd51FCmtBGbfGiCaV8vyxk"
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
