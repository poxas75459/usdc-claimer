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
    "5fbDhMLy8oHxLciNtzKjRxqRScKuivkBc7PoHDVXViZGZxyui2pYiXjktVjYqSQ4pqiMCVgLixp7sL3fMTJiz6BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8fjQEkYFU1xx2EixXx88YjSniZQYqUNJRXiJdJAoHNABv9jgyHmXLGwCwCGeUzC9K7NfNgHHBemiJCMGm7VMd3",
  "key1": "2fBySqPSTBrCvPt47s2mkai9T1RPkjpkBbewVKn9NFtnBRPU4gq3C6iqWKJkEnQxRFasgb4UgwPAC9tbZ1fNSq5V",
  "key2": "u2u3vsLkesNbHMVCPTBckZ21G54zfFVARkAHg7PBQR8KLbTLfjH63jNGWF9KeGQb7VkudmUgtGyoJghpRLTNjrn",
  "key3": "2hSjXP9WAteYM95QBqrwqXauDorVtN5nXetnLyGLfSE2FovUR7FfTsTh4gdUSVyLXZMJxisAov1qq6V938gE32Fe",
  "key4": "42ETb2Jq8ZfipFMju4SLZYQafjQh1cUmjoWzwhXkNpY6JiAhvuhpPm5vWhCjsuK5HLEUHHv1mv4m8ovGefqgojEN",
  "key5": "5BJLDxgpHu1YRnTzeiihppG3wrYmtomVvawxKDDqD7jkoATyJktJhiZjzdFgf84CjFu2y1ZNqTVXoPVPJynzSbDs",
  "key6": "reRHY1icgXnMnkTuhbh4KcNmUpJBgPfhpdRrS1MXxKg9nG4aZzLGrMkwTQ7DkysXwcQvBz98MnUsUaHHN8z5J1u",
  "key7": "4CLFM3ko1zyXMnM1U2kEK4Q9awNCzZew15NMcQpsk35gbPc827ddfJM5dFZ73mWRaH68xWaRGZmN3djhMC8FSiVv",
  "key8": "3H29bUBLhjHY7qXmvPizJzBnTAXSDUdL5A3s58ALhncn9cLcUKtm9ugMLQz4ck6kpZy1DwYqojVVm81oxD4ctxme",
  "key9": "4P8K377UYVUwwni4B1h49qBiUdrT4Z3hzsMBmnYAkt2PPH24bpmbxvFtg1v8UQ9E9KHvQX5JLbBgJDWukh3K1AP5",
  "key10": "3ym8SZxU6Dr7TBmkhtTfW2iPeAhXNyEfrLTugiHHKp38BkJdT15zXRw3f65wHv7S5WEK91HSZvUSYnTEzbjVM6SN",
  "key11": "4WNbrwkBwu3jSBQxG51VgW3saeE9KCt3D7g55BvZeY4WDgWF9scdZkVjHftWZgdQAsouonsKfraGjg1ZRxVkg6PR",
  "key12": "2T6bFpZ6eAGHTCsbhgh4MT4214X2EHJs13b6Rp7YaFC2xNmrqdAhuZzLtkQJtnQeU1xGdRRDs6oSoTKK5bwwx3cX",
  "key13": "5fnJiHf9SmnMFyRCvZfDmTL4cQTkkrsvQtjkgo4DAogPnWRmkKXGQT1BrkrKwde8LvikHHpD8tXg8wAKURW1ctfw",
  "key14": "5S1qJPq9BkpBkrUxmiRaXEq86CgVjmyvThyR1rT2ezQt6o5xT8RhakjPHaSg5Vq5RCoE8HGqGYbVg5ZHpWtCB5xp",
  "key15": "4cHSkyDY2RRhkpjH3VgMeuwhAcbTp4zQxrkkLUbC6PjerxHYJzRbQkFBwRnj4W1KYT246PJBqm7qkCBRfUswpffi",
  "key16": "DUDturknUc2gyai2AZtqUcVBC7mwhjcwm9pN4CViXQLTL8nNvqeUMXszNQ3QJvj3mBebBkvgQryfi4bfV5V8d3B",
  "key17": "4YrFWgjgjmmcua8Z1AvUY9qBP8TqLPAGzRSaSAXYcAhwDjv3yLnjvwC4Z7Ghu9KTs6ZDJpKrqhrjyhnHM34gA81W",
  "key18": "31XNb4YUKjBA7YmGbCUuAnJLAU1YpvbaTntZMWJLCD17Pad1Ydo3cKRhwuWXne6BQZjs74fPLDBFRiG4yAVDDGqw",
  "key19": "EeyEeygLgLLC1dYECPmP2TBop8SR5qun5HW1RbvK7rJ782hqYXJEEmpeonB8jndh829Nr7fdkTgcBovkBVB79Qi",
  "key20": "L626vKXJ2s95Rap1jknzfvGthLS9nUWJtGjhB8ZwH8LqfroepmzaLJ6C3BCT7SQRiPmXYa7kVjNYhJLPh1GXQuX",
  "key21": "3JYsiYcjPwYXKRapggbdchbwYDWsfeZKFpyysqvNAwWyXFBa16ZWVr39Pn2uPbQQh9L4hB5UW8JenxZxao34NBqC",
  "key22": "9CwEZKDFYCA95bSJ22AnQcuDhq2Hptx3ACbd7pwjzQ1gwgrcb3azhUNF2e6yfs2LxRPeDCYbnzWKintsQYzfSvV",
  "key23": "66kV6iaZ6FY2irX6zF1JZaHR5sY6HHdDVfLgayebSBMLFWW4ZxXfY98hSZbnZoHRyprdxyHpUYzQBLiRJReJAEQ7",
  "key24": "4PUgnJr1d7VzMyf4LerogWfXf1kvMDoxncNodYdthgmEbiByLuscwPpLPNMS1kdBjc3CQuBChLgM46xy8m8p9QoY",
  "key25": "5gaLwaj2dV2P2CF5eMuubdQYEFXdhEYKnFQMBMPcidfw1keA17YLdWpu1z19fLV4huTZxn7kvyXigdNkVVDki7N8",
  "key26": "5aWygsnER17oa8RGwNEWFq6UcWGmaKdkFuumhtQmMZSsND26wdBt6f7i8mFmuVYEnuxcze6MDQoWEb1rk355qKsw",
  "key27": "4RyBFUY4CXoGeMq48vjUM4Wqy6U5MmeLaDKDKrGC34g9WgGPizoVXipPJMW2raSUjSAm8R2YKkR9drxRDz5o7uBC",
  "key28": "4MuerQWsRnPa1hL5MxRPBssMGCB499SJ3yPeFhmF4Bjw4wMeqAZN1tyhsDvdmPXCe7vV3Z4SC3dYV9V5maafiv8K",
  "key29": "2Bi7vmKWRNbZig3nPoRowtFHWnBkKEqVzKpkYBvLUeEPWGjpiZtR8TQSLJsbDtSjbiiP3devudG2KWDdCRUqjUTs"
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
