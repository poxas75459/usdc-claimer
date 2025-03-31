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
    "4GG6gu3vMkkiUYXJQ2kCuSnvKJStJFts3dhmy9ttNr71QUtmGretu5M3GgwkxoPQeUgepy1wvHibbzvxVq27WZkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMQrnFzxgLeu1vPkupdXBxho1imPpYoJxuQ6Svj71nc5bYyo4UnpQwbXwHfqSRrzAm4XxDxqReEtRw6aNUyfuPz",
  "key1": "3rZ3is2SUGmPJpgg3qHAnGisaZpSFaP4b5UHmWyGGrpNHXeYQHyvEqyQGZwwaGVumRW3JP2MaCuL6qGXaT2qJHFM",
  "key2": "28EqHC4wVs3faiJHHsgFuAunCdLz16xz9Hs4ZFbGMGrCUC55ypmRSZEdxQqG37AE7HXcuHmukpFEMHV6GnDEtEvG",
  "key3": "4owPQd3VCj65nYcNdgrZYBbwyq4eMQF3YSiUf2dpy9PWQGuu44Xu87SNWBsxbRYEnJXqCUwtyxoV1NpRahDAPiYh",
  "key4": "2UDx89JQb8F2TKmXB74JrqjrkqrsAvHFWzX4fVTMTLY8XFDfwaJ6TN43A7ndHQ52w3NTgFbETYyN2LzSUHsmVHq4",
  "key5": "5n7X83ckGxss9BMCT6Cbj74r8W989CjLC9Qs14dBd6DtxJSxw7xk8XPKn78JzAhx3kqxouHADuCFNJYzpaBDYZve",
  "key6": "2BSdzLjrckyKfQcZ6zapRDEfZxb1GjC7hHpYL8MbesuqdZQoUAbokkAp9ujgEThfmnmPgFvcjRtERgBTfRyjnSLg",
  "key7": "3i3uaofu6qRY8fzUPTj5MTatZMwQhSwbagKNftyAyQ6PQ5iz7WfLrMmg7zsFG4fVmVVF99DAWiqMiD76qWxSqPZ4",
  "key8": "2SXetGzNXyp8X2C5b5j4wyVAKuhMVRC2rNtSxiPWLNXEBxk67aNQq3t1XmUQH1LgqkRwCVaoPG9kk9aesgyRY41b",
  "key9": "5fSCL9ZMn9J6TQWZ4CLe689CCQwsDFrXnL92KDJp7fqdBT3xbbPfBJLSwNpfGDFah512EmYurG98Yj5EuK73YdSb",
  "key10": "2dVEn9Pdr6z2q8ai3UBvipA4c7KrWVQV5hsVDeWip4zAQ5tcvbytuVziKuBQbkVckDCwMz5iCqEJFzTj7N8WnGjY",
  "key11": "293ygsU8cuXZuxKjNhVFjRUES9rhBjtbuQ8pLvyk5yYzuLxpvUYZ73TUBLUofuR5Fvww23AsZkqiHm2ADBRhLm8T",
  "key12": "KCqL5Vd1fd7dCQ2q4mbUtwHRKxuVPZYLBQGdgNfLyQXXAQy8v6oAAkqD4yqu74Zn54HertZBL3QD6LKsFHnuvP1",
  "key13": "2XGVtkBkbxzNN1jTvJzfMAawhckUFis8ToxxWgyhnQHHHFYYHvaqk1y56zX62BwK2bzpaLSFWvLVqvWS72kGCNqU",
  "key14": "2H7MHuexipAkPx27BAe12x8p9fkYand94s3uW19Pkb9xTvT6j3cC3bLPiY4ov6DR8CtUGwrT8pHcxHWj7VqDTT5D",
  "key15": "4HJ97sP4KgHsH753CXmZuN8VHZrrWrRqdpWMekxiR73ihzBwsacDao9GaygVGb4uHPs98h5oeo19KKmipZ1bDK45",
  "key16": "5y3FyAYyAXgBhXnzFM83iTVzY3XLn53WCqHu93fvhR5jtgEYU27zNxhpmPBnLSqFAr4dyX3zcZoj1jouBj5zkpZN",
  "key17": "2goKZVhKaYjhvyCtoEn29HL7LBi5XMcrA6DTTgcAxL1rsVtZG2cXg1DNjsBzy17TUe2FTvYzNVqxbJX3TQYvKrR",
  "key18": "5cVgSvbcZekqyEUmz6zAE2N29QSvsq3qaRwZnZYYCZU9a9HVMGumqSDN2d9Pd4KRrep6RQDKoMdj8SycgCL2n9JG",
  "key19": "58XGyjFuxoSBBXikkKG4QVBNFv1HgKYxnoTtbMHvh4PFy8jHR7buyjuQdUm6KAqrzCMUJW6kJucPg9xuFbeBgSLw",
  "key20": "WKStQDXZbieKiY4RzJW8nPfKA7CeFz1ebEbtfTp5YWkSC2grCbFPVeAWTtu5pGkJREN2u6Cdkkw1EYwN8RVWrL6",
  "key21": "3vxgspQWvwPBdtHipJbH9Hpz1aSp7vmcx3is6t6qDMidi4vvtAZ6owfDfmTRYz4cULf32MjxJeTUhAKvhbDvYbpq",
  "key22": "cgx4zQHwV6CKoTsWELimBNoFi7iNBRHkCjBs82eQeBWSzK98EKmn1h89xBc557Pk1kAhgkYc3vqiKMcUoPsirkf",
  "key23": "2f2cZTT27RZHAk1TUAXeBM5TNtt99v3JuCbGre1FbKLwb1ZX1qcEXjvZ6wojPa5MxBCMxbk5R1AUNKGrrwr8Ab6D",
  "key24": "bCCaSwdrKLP6uvAq9optQndQTLyfCVSD2CCmQN2rPy7iuhVgPvfRmajzrJmzLgHGUqvKEuKfMzfFsMoWKKfcnLN",
  "key25": "QjfG7S49mKPdsUYvkspbEeWwUo16gQA24SJzSzViCJmd5fbVivLb9y6o1n3zSqstguAKvMAf1qEqLGSCTangeMG",
  "key26": "5oS1ywMnRKZi9rAMF6682FfBcqyQRHuMEkGu9H3t6uZ6fGxs2vMeMpCCSaG74U2Lsm5uEuBt6Wmk41XbNNtsAtVo",
  "key27": "3i8voZJRNXUCV5k1ptzhrHBaf6pxXuSUNh6cFTc7drH6XPhGvHvtzHEDaqhgyeTeaqFSYLPBtNETYvwTGacfu6v1",
  "key28": "QAe81JyQjfviZSY6kMPLmNz8rN7nXAkA1wivjqoHkcBadU2rY3hkHVfA7SnzZEUZaDSf9LkC8j1otQjQngL7pVM",
  "key29": "U9fcYM9ixvYJXSxuKUD1TzpscCJm2MieGH2s2U2UbFcLxxZBPjHmq33JdEQos9cs4r75mMjGiDpFLSd2fMJCgM5",
  "key30": "2Uo7Qcbp4Hwyc3K1uj4Hyf9tcVdkWUE5i3yQBbqthv32CwmtBPxtT4jxHKLRVaAFpxcnAuj2zJg6ZcMU2mpcUTEA",
  "key31": "61vaaSdHGUmjXXQwqHBzNzoifgVwPi5y84phUQidsGv2kzbAR4viWEJuRPMFwscBSrTmc9GXoPa8N2tWQrmR4AL2",
  "key32": "65d8muBBLbkRF8KGhobPLANwE9f4CVs9H8V2SNVjMjMBa9xG5hGSxJghQA9Xk4UyEDZau2LMjEP64ZDNk2osjkx5"
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
