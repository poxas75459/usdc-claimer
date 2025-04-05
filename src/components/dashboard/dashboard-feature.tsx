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
    "5NzsbghMkqNWPY64weLNg4NAT3CDZxAywAapWq4kg38cS79YjuavDn4aqH2Dkh78gaj5gbRP3EdaFErCbA3j9P7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKSy6Ba5LWo8UPZapc8yoV8XGwut8As3YhduzMaFd6pABs1TXaNyPSx8ib4srG5TxtfV1SzPEe8E6CGKMJapGnF",
  "key1": "5o4iKcRaa3CLV2Z9hr8KSp4PNuQNUcm4D2wF7vnx1Baud7xPGtEAGpN53jsX6P6fBGoyW4HhNXT6Y8M3PzARbLRc",
  "key2": "4ZxJ2mMNh4MEAdCitx65T2Q74AzHnixqz4J2b37SprEcDSvBFpkJoGwBkWss8upz4dLFTxds5GZoM5YzAVk9MYvf",
  "key3": "sDbdgdJeJvzenUPqNXQYNB2uMZgpHswP6MXo2cEsGnMZFqo3doEQfNdcePbGMVxhxVh9HPCjSpoa3MfZLKLChXe",
  "key4": "5FJHQNn4JEqhcazeYzKGtn5QpxkxQjkc3B9JeorCeKKToJVfcCRYb2a9hA6ZvompagMFNNykfXZ9w2tEjYrfjREW",
  "key5": "5R6YEecvFZT44C4SYxuHcdxQ5Yq6jiL5Msxmj5M9ZfYCxMQvDdZJmf6NTkAdUBWoGQnqs9DJjBk1PRiejhJTYax1",
  "key6": "29wxddjfcWhsuAnx6J9w5CT4UeAMWitk4NQiAbN27rFsoDuszmPeNpwetHUGVSVvRs2Pc1jXkfmvJwtzk1otpU13",
  "key7": "5MT1ftzCcdUWimV54ZQcKoYYsp3KCi5smeuQftWtE5eiNxFH2bjvy7aembrsHXbNSFyo5sK65q4Wu6tF65NKb6Ta",
  "key8": "7NT5Jc71DLMmjQ2Wn9TVPquJA5avpdRryFa1f4nqgM3y3XvGo4XemJDnWEvVg5pc3Po1TsHFwKGpqo9SaExviNb",
  "key9": "67dZBaxTsXWJgDFJHZF5EaaHY6Swgv6LeUjGRK6FY8fesM6REkRpV6b5YrUHGDoy9XPqz25RaPkzqdnyvKT2Rnyp",
  "key10": "2KF8zVoBZ9PMEzxWoQnETB5g6HJjRt5Mju9NZv1jFUSMzrXYSBvQoqnRegQgnohRzbP89WbNJmimravWynUVU1WN",
  "key11": "4QHyaTsrvdFcCcr5fxQv5T5kqiYCu99A4TsyEVGmLL9R4LZvCG2ChnzbDBdKKog2PpSmQ2YN6euSXKttvsyYbArz",
  "key12": "Q8eZ3SdQxznQMMnsErU8MAE2CZhnsPi4xFwLccdm51Ey2k296BUStiBefhocb7E86DbpD2WFrZvM7HosS4xLHrw",
  "key13": "5LixBwh1tXeav8MUmNWx3Pa7NJ29N2unr7JG9mWN7QJXUZKtiqo6B8f7ZwyGSJ5tGUsBFsk4Ldo786osXBjJqXDh",
  "key14": "5GMiJxHyVkJ3LvXf6rtMXrGVaBB7cptDyBYvrN6dK2uRMRM4nNKrRBriRZbYaKkJv5aNtjqcVTyGHC7qmC6sekee",
  "key15": "5NzDgkMsV7F5ZHNWLMcyXna8sdBZuFNLYiMae7JA7jFv8Pro9YSr7XuiaDvjw3gUji62rETSLTWoZTQiammm4EhL",
  "key16": "387x3avs7idTRYvbs4gdZWeqCaYFW6XadefNGupNy9naBfLPAjKmQkVqbwMzdZeH4FHDVVNvqzA58i4mB9SFY1hT",
  "key17": "5jffgfvYYZUxqdWuHCiK4YcqEpUQ9CVCeJhJ8yvc1jo821iwHomEfXwgGHp66ATw1jjLFEF4LZkvFjYCfqNfAL6L",
  "key18": "35cYiUXwJ77nBDbDNiHxLJUtEyppqXAZgAkaSu2pMLhd5WohcMb6CGzqPhapRkRokLH1qVMeARwT8tTvv4NFf76H",
  "key19": "3QfAunRv2dYHzCaCVHwc4VCoKt5NYbLkbu8mqjbn9M5S4KSxvv4owaeCkq98TMSD19q1MYdJKHF3JiBPPqY57t15",
  "key20": "5y54WxMCcv1DvqWGjKbGjoNvAiKLdQz4St2kf7LV5C6Ben9NHHPmhqdpCcHwh8vkARBpcdF28kGZq3Lvsc6SxMxL",
  "key21": "Ns8KRT9cNGQVXqMCRT4jrdcPuDPsaVDKqzQGs6pRrPdzzq4nQKpcw7Mzm8xQkwVN7qbWegaAk3bZRuUQvy1yr49",
  "key22": "48cpfUXYtkK3zxieGknLFWQspzUw1W6G5YAiF7FofpGF5kU2BfeKNRJC3SNCtqa4cdDcryNNGN83RgqnH3QJTiA9",
  "key23": "2TdtKsNsxGMW5yYK3EGgtZR6JzEuy32t3gqdGfZm6RWuDiZLExqsDomvgYdabFnANGQXzdn9gnpFfQaqTjGDve3m",
  "key24": "37UATVEFVjGyo78RvLcB99wwzCP1ksFAja25WFBuKro8t8sfdauFUJR3EDsuNVExup3czt9ri8MUWWz3xoZwMuyi",
  "key25": "4r3vggzNdP9Z8F6MYccv9LdrTsKDpV2V4KbTEEVmomHSgZjnzaLJopmJdju7SYSjajY7XYv27Ufia94tzjTTu1ms",
  "key26": "Sym73X2GoY3nzGo3rZ5HcyNboN7ZJe8cw4A4t3yFeh3LPjazWGUvR5ypMDYDzRGCbU3QDimrgLRGByr1SPbxsfg",
  "key27": "wuDEHssLR8NDsZgq9xApSNyi6V41D4jTLwRPR8ESzp4wKPxtYmdGDZJcMGumijwKjdB1omUBdJN4EpnZR3L6MEx",
  "key28": "31zUgR9Pvb1nua8pxYrnE76rDNACWVU2fRMjspv7saj2GxCjsy3zAocfFz98AyBpE9PJmnVSaDmrKJCamYak8CUf",
  "key29": "5WvFwmeqHk889TdHVuxDwXm39rKAXRgqivMYVnXgrgstiixTPFaS4S7tdxAQ2Fsd3JLcbD9KvTgR8sTFvKUaXnFF",
  "key30": "5KXFzX8Sn49eFShxBfpcUFLBQC7J9XqFoiJnHJwbNij6VMaXUxojDmaXgXCP2WtJ3jHc2GHZRLVnhBr5PGN3bCfX",
  "key31": "4vtmwVKSqW6Y4dYUUtUza5C2hFSnHaGEhuAQ5MTxbJEw62DkbYrVw1SeEqWbuN1EUgmdLEFb7a3qVAPCa3i68MVA",
  "key32": "46T3PSh8SChfTkBFQ4Y3iuw7WHmhnZZ8SGRUrjyoChSuUfMv4a9gZJpQ83Gx5oVLAzTEeMzUCQ7kWhHq1YB34Zw2"
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
