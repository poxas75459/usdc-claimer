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
    "2Xe48veJtV1qoH4gzgkj6J8Bw57A2DmKw7djFWai8dyi2VWqEDJSsDuUnC5eat3f6QjKttxvR2viijw8rjxH9gj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwWUGsoUSVhXVjUBeY5ZxNQ7eWXindkBvP4whffEQiLzH33xZhBE8eDYnmje3FeVaVk8Vapdzouy6uvrxH2vg9A",
  "key1": "6Xs7ojdoov6r3cNRmG5E7CoUhL5C7ZpGxJczswXj2ahgrBdioAS7TLyGEwqYvLk9BLjUtKjp8CZ2pfLdXP7TL7s",
  "key2": "xk89XiHxfTaYSikZsaxH886tVLTRjzUz2cALnevYZDJpbjgBusqZvWja3SsM7aUpXktArN2PCEEo1w1EHmrrxKL",
  "key3": "1cPE2zzHeo6gWfB8baePQsM5A1Cak4zkjy56iPh9oxBDN33KLbRDrLJhBZzrr5Lq2nYqddoDyDmEHZF7zvs86nD",
  "key4": "4eBn2NZwaFH5Zr4zagH2fex25MkYBFZ9Qf8ynJbHE721E1QScn83AkXq7mtA3MapEbWxCK4TYRYHpnsmNzAW1Ey7",
  "key5": "TMV6sw4aAC5hN3kWYkDYqeQcj2c65xVcmwLDpe7RwC6TA9cc21zoLToHXPUxRXzbukpWLJAsHURprRQGJ3UoFb5",
  "key6": "2qWDGa5uunWhFQMqsmYbTGBugRVtyJU9D7mB4DYLffoaRVVRjrnNag3KsiJbcDHyTxxpgFFUHMJ6AaJdqvyEedkn",
  "key7": "5QHSZVALPBhcPbXrn58CZUf4qFBuayaatSMiDsWjtKeDMnJwNBgWWKZRyAKuT612duUNkrVLxpjo3uKGTBLTx2he",
  "key8": "2SQzEbg1tCBGge4XE5dksUDLRjT8k9yLn4hKsMKWi5QhoStqtF6FX1b6FvZzm6wyFfCZSQLP22QT4aMniDB4xmEn",
  "key9": "32EMT1TTt23u7wpSk9yJui6MBmD66CvdyNvBj9yuemTWzS1gQHHp1njLbuVWLRMQUtfFuRgjYKj3Jwru49VmU6z3",
  "key10": "4E2YkY8gCAtEUZts9NGa8ZqjSJ6x8a4UAd5MBdykzyr9dU2QntQ5A9vdydtCf3gwkjLGBU6YtUv98j5uHhxgTjE8",
  "key11": "4A7R1zDEm4Vckkyp2ABaPkCKsLskRzocxVpgTxSF7fzvPbgnXB1UCSm3UheztgDt86XhQrfNTqwMnbC2rJLKzaZa",
  "key12": "2M92PQkkDqZorroRrboqeDbv1oFjfWT9oEvD5PNoh13WBhLU1LCRF8f7Sf1q1CvcQq4uraUCA4ezh9WcU1DQVeYg",
  "key13": "678mFoQr1hkGToZYZ3SsAMz2fEVe3625D2vcw4Ns5eRQiFRvxe3c9eGzEMGAXfExeioii9897DERC55QH971j2aM",
  "key14": "LdyReiHSdnjBT3dSBUo3DJ3pQ2QnD9nt4spAbKy2UuH3rpUURHHQ72Wwu2XBnqBEmLFGyXcsk96aeBJ4vLLG1su",
  "key15": "MfRzXXhbT3JPVyt7PiuBhKKMvcHLYjLJrwGoYFJe712dEPfsf4bWzcctJFQxDJnhfc3ejWQGHM7U2dBniqituab",
  "key16": "3bp3Z2ujQTKY61xEEK6qtbq8LnyJqqa74QSEji8p9DqzurAVMT2KrAPazXjvsNuruFsmAPQZyMr2h6dBBjZ585Gk",
  "key17": "3o6DNZJsNxK51PfGbUPkz6BJXxqG8jWMKiV6KGxdQdQKgaBE19FzipbpFeqN6epoCCUUgL8T3qexsfb6u1QDEZET",
  "key18": "2Bf3ZYoMCnWSPxjm76EgbPxoNQAReqzR4YDM3E26cobrdkmFX8PjjQHSjANuvteaWwCU2jsUJHaB4wnXTUG7WvLb",
  "key19": "5DTrKhAZRQHfWPbYmPkh7y2CiNn7qncyDDptD9xKT79jvQcMssmABikvFjUjHiybiBpmyXv54VTfU436EQXp3v2A",
  "key20": "5N5FG2mRFWsRwVd8WiHXth4ZWWbcgRzSvH7cAdzBPrgycJTmePZ2kBWdGJ9Zixa5qjE8TUe9pSfnk46kjLZ8wLE2",
  "key21": "UBetA6HhhCvuEaLWbSz6hm4jSxkfxA95kXURwQfXRPSHN1hhJxYoifR4LMy2hyba3wHXEPTmsHd6PMMVk3EnwjJ",
  "key22": "3gVLWdPVnN5CKmY5rPqGmsZj6rZWX86iTvoP6uS8AvtiXipn6uutpw7F8bQVPMUjRV3UYixYdJvUjkrWvqE7aLGQ",
  "key23": "5pfEdbuALWKK9fmu72DXEosA3Td6JU4b2t3aDRomG9bvZExnUj4qgeWLKN4NK1wKvtmNLuddzUsQzyUv7f5xGnYV",
  "key24": "4htgzYSSfgmN9LHHo1SN2Gz2dxAHKc6BNGJ4FMmnQxfpP7HikoeddwjNaZDAA9t2NBCfQdR6BLJ9dQZZnTiNVpzs",
  "key25": "Ln3Cn4WAnVezBKYCAoVWUv9RqE9pjK5k3v2pWs7c3KVqeuTR7qSp9fx8phaDWq48RDDyJQuewkk6HK7SUkVYUDc",
  "key26": "25LwQKnWJnpsSVErxLM5yyaKXedcdzzo3QmCERkaPhPkjNd8ck25LmjHCU3VQhXFXCvaA6BPZ79kiE2KSojmzsMT",
  "key27": "5arabFMXaoUQ7H5kit511mmTs9xMLQtgGigPooBUZMuQEXP1HHrfLfWmKVLqGHdAZPvgjkBTKjQybvd4ij5gzHjF",
  "key28": "4jXbhpPafcwbjPt9wMqSNwBQ38UxKQ1kxv6eYwZrWNmkEpRvYT2D5FJbBwaAh9F11etKLXkhBWF7sMvFywiPD3Q1",
  "key29": "3BSSaBdhXWfmDwck852LnH2sruTXNxRPRacM8rMdU1eR9nbKNPPHUuhinNFjLpHzjjXu9XjkdYzUbG2tWCL51eNY",
  "key30": "346s9THhG5rR2bWnZRNgBPrKn3MPK3Nh6Ahv7KxPKBZEoaZhJsEuXcXnvLsUnhaTMLkKGNvM7iPUz856j438VDBG"
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
