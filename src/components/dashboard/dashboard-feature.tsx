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
    "55zHN4i3CpKMiaPnZeUv7FcyTe1nDYYzALNVUD53gVpC2fPQNqL44q8PU93PCSksSiTUmFkqKdsDBwue4EBZFBUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHNWFUYVZ6gXnETLUzUCNCid5NsJCdXKNgPhhTRTTUdwCamYPFzgiF78QPhJtBMB4z4pGcnk33bHVBkvsHY5PGE",
  "key1": "4XaJFWTkR4qYEYzGjrznUTobVbW3NimLV7VvUQjhwoehFLDE8CzEVyhuWcdnaDL9owkU3oYG4Xrtj5rzte1JfQSR",
  "key2": "qKo7aCXQ16GdPn1Gx7qevyw5TJ7uwEpznmgXnt6V6pFZmCnUZbhHvJTBZiRAnACk4D98qMSnqThSgeGNx4yXzWg",
  "key3": "5hjqeofi9YknXpUp2daHM9vrvzJTdBtcCEYaaeg8TmzTjMDtbsXSJuJ8NuCiPkqa2ARcAoGveNAFwUc5x55ztRwb",
  "key4": "2KGpWo4Te2Z6FttAMQkKUB4EHgbqgWfTBr4pFKtpcDbGqjrvLpiQuECwk1ZeCRHbkARusbAsUNEUDwXQPmNV5q2Z",
  "key5": "2r8MgCyx9PQdVRbB2aucU9A7tXVnyrTuBuj9n8pjegZ9KuK2Aks9zhAadbGLaUN8kVa6P8x23q3jdApEL9HSLhxx",
  "key6": "2NxkvApf47ULSYi9fkQMKF8tJmyNj2nMuLm94Z1s17pC3xTTHZhXLyrGZQGfxgNSCb2z2sXengXb3sTUaxyez7dY",
  "key7": "7EEUtDxff4sBU7YipdYjsBoMSmPs6jyjBv23doQY4CcF7yDU7oUv771L33VXnPfzuQDHvrTYSUbbBhvxCWTN52U",
  "key8": "CzcEmWuHShZxXq6YZabZvBj5HxV2829Vm2HdUE678ktzgqLnQMKTUbgXUDeMsN4tQ2QKJi6mAcpB2rdfbscnrqS",
  "key9": "4oVJx9Msv9fMV2nkJyPFhQsa6iP9j8aaDcp82HPLz1jRzVN2EdX1pxwiNSWj5JBHkaxJ6GCiPcktEHm14sr6uATH",
  "key10": "5P4iDUAabPhe66ZS4uabCrK7xP165iKzE5rBU58Urz9xXaQzyyY7hH8yQPxrevRS5uDM3jDa8xboDZ1t7GSN7Shx",
  "key11": "4iUf5u6BxtRbx9cdsadTUuqfZfsU4Wn6ZLh8CFAd5QCqfW7Pp9tyuFkWmeBGjRbv1YxEqwasTaanVb7AaMZVYV7B",
  "key12": "3D2whBSgBSVEpsKk9jhBud1camfn93ZG97uanM8c94HPTdPixisDq5sPNbpVF7SUpng7VhdcjnVonZ8PV8fitBfm",
  "key13": "2kwseo4bpGtGN2sVJihSxQV85dZzksd6NqVoV8gRpEk4fFDwGoPueZqec6SRPavRb5AY7ru6bq2Zh8WXGYfderLk",
  "key14": "3gRSff4KY5kiqXX4uRK4pxuxSsfU8W2bnj1xH2hQrDSAQZQo6CE7PB98ZYXEGgSzYQxPqjiPkJkGqKjii66dHXnd",
  "key15": "2ToWperCs4Y6C3ENM2DyR9uDW9qExB4sPnBHiahcW7p1yZpcv8ZpekefYaawF7wDVJBhsNoJHAJepVwjNLicUY9t",
  "key16": "32B5ZKzKzGhigSwP4cMNjJw2JB87Pt9S8UoY3SUSEWFRSQcbVU6VRXEUDshYcnjEs7iFoS4yMVPLtJEUG5SgdSSd",
  "key17": "49BgDruCQdDL1WxFfb9rA3di6HWTaPDkMHCcTw16N7CFwBgUEaoHLsPyQwRWUiqyMoq2T5dPNneawcXUscLRNn92",
  "key18": "4bqc65SQcR8dB3y49Cgbt8M6RNPkCBTkkYBNBzCfw7TSc6TNbZNY4ekHo1G9epybkcphStNzLjjRBi1PrKETXRCG",
  "key19": "2QVnC4ZiQjinB99jw4LQB1DeJN3xwXsGSiw9TdXnA7i7v2AQsa2FDp6E3fqzkQn4xg8ECTxyuLi78oF8E9kxaSb3",
  "key20": "4iniJzSEC7QThtKSEEs4eKLFjSqgQs6neBigGaz5gKdFWK91SUgHgUmxCX8vBiaffTtSN4SXigDmqx7zHoxxGMGY",
  "key21": "5iUVTUUmR937zomhy48TUVr7qKGhXag5TctjF3BEu1z7T4yS5GaHPPojjM3D38b4B7WyobK7LRDPpjQqz2q6HLzc",
  "key22": "2ChJ3T7GHonTkSRKeJk9vyYrKrtLHqnSTVLVu6HM8K3ztuPNRQqBH7htzoCkbPW8TZkVYScd9rwKcngajLxzRxUf",
  "key23": "4GrTzGq2CCc9pzdvGLPpFK4uZu8VFDXtBgjAs1ucVacbzFeRrfEDN7QqmeA9j9yCQMgN6HuAYWFCeuRDjzYsF1k3",
  "key24": "1verhyc98UYpEpt5VVLPHvbBw3fyEvhZRQ5XEkHB57HVuErXSs75gaoxHF6WrLvTXT4Q1HHyywAx8THLxEoACFQ",
  "key25": "3eU1br3Apnngws8vxFXeEcow4rbBpv2M2jVmzh1vCazgfS7ncUgfrAK9v3DXEkWnFytCUkbwNkAkdHdzTayDe6ve"
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
