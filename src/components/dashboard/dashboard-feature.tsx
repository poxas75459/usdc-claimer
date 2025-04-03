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
    "5Du9wyDJUn3YJkzA9jd55EKDt8iRc5q2jCXTy3adQ1VJJZz4eRbNQXzt4meMCS2gLqNNsTZ8CiYkUaJj6s1tcMSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqCSagAkcQMSbFnnHDJ1oAep7kvyVMag6hnrgLdhtBvjpMSMrmRXaAGWtCrg7cKughKtnXFtsFhaJBeoaLJt3Fr",
  "key1": "3VP2KQB3BtvDmWEo1RFHia6hsbHYzbeJW5WyLnQ8PDqMXteF7m78kEk6HNSyS4bfVuTqEVQAT8ERG1jMtLZfTc6T",
  "key2": "5oRp5suQ4LNmoQ1X7DAmVwcCJpbRvPEJLoQHnm89kM8LFBbWZzhUeP96eB2EY8E4AzE9oUayjJKRh7d1TKdAHGof",
  "key3": "37BxAtZWgkCBNHLYHbi6oQ4t4voqmhWxAJQjzc6Yh64L5EE9FLeumJJtSfGNpARWMyaLasNW5a5EVYrdCYEk7iR6",
  "key4": "4VqHn16oq2hDmPGTkPjBXGq6XUMkLmP4KiznocMiojHte5rwP8NQAoNW3mXYNM7sdBKcynqd8vZFDRwL8X4MAE6V",
  "key5": "62AivYYBRFEdQMmBnc2bMaxjm4MX51UG6f4TE9WaVNqdLMve85cu5HCvrmCVyNLfrsEocz9xnsi8wjaehGxXQw8A",
  "key6": "9bfMGKL3H2rM5MmPtFLesFPydYD2AH58kTw4ZaZqs6jYeZya9qWtSLUeGrAjqjmgWyPsvzfBg5XLssppvf9B4UT",
  "key7": "41uxmvXVVLDWbMdCWHUw2setg1Gs4Cb8LdaToi7hW8gEogPyMzT35Au3E1doVCd5JAwqSgHcduSvA2jf9zUFow11",
  "key8": "4jhifkoF6AjEyvXbFt4QxiG7p3T8XT7oPLT5GNCgL72MrHV6NzvnDX9XusFJGJCBFJ2PFoTZf8FwZqyC6qSBam9p",
  "key9": "5E3KUCy3KJsbt4XQN4U5Eg5pJpLzPJUWphfzxaiUWbiUdn16QpyshSBGA3yBuuMRnait3YYMa2Jn9qEAMEHjMqPu",
  "key10": "21mNG8c6HXQxqvZuACqHiXfpkMYKygPC15V6GkdDLb4RJ7xhj2TpCAiK4rQzaguQfPUceS71zEDdw5gPyXRYeQTo",
  "key11": "388VuQTH8kFqcn5xhvt9xnbG5U4S64o7JrRhrzNNkJJHi31Bc2irJJKBHYMg8hmfaMGKoomYkFx1iyZKZCcrS17L",
  "key12": "2Amm29M5JHjsks75aHz8jERXiE9NTKuzepQSWHu7ogsyCSPNKdyruNAQY3MbCZ8tXCpKaqkDeMFZN5pWhjFi9gUi",
  "key13": "349XuEE1YLgyDQBYysRGEBKLciyifvwgsqA7PfUwiV2iFwWwDPoWryNm7N9Z1LmsuE35abTF4QcXkFyn6492cPe1",
  "key14": "4nuinSbB6vZpFREgE6fLqeYf6Kz8mEL8RvTz68cb9BULCsXKo6RDVbvJLHtr2rVLwbrNSHMVVZMWXkdYxSmDLuon",
  "key15": "uAKcRU66aZrA45dtpQcEtet2LCUP6ra6XTdnqLWAzYWRpeLEjaJM5frJMNVL3ABC2PBrTYVa2mZSiRJ7PZC9hAY",
  "key16": "3JYX5sTfsm9hUy7YUoqNh74euG79FMYaH4GWnM5Rc31nASkgWEzYoMaeAnsmPv4GkiFRT33q3i6XXEErCC8Ko2zb",
  "key17": "2Vj2F2hfLKfjiBYU47M76kqDJU8aJDmU35unsHMAPEVVieHQefUN8cRf6TJgetthuFNc2xqErNQyjr5FaEX2bsty",
  "key18": "2MYieex1HfDSL1j5UWv9yozmKdz9UAWSJNYrfhvYRsfyjyjqyTSsgQWH6oobCp7jWNiqcTojdXP45xbxEG7cJD8r",
  "key19": "3J4aTdZGrkdrET9KmjhKGZ9CxsZKqiSAwy6vfE6eXbcv99vrsNFvuhf4MkDDeYGBq16dCyeXQt9TxjRjq8pYY1G7",
  "key20": "4gBQquCwp7hJUfUnByNfsvkJzCQEAQTJAFjtLAZY3m9jZTeXmSmvHaEyHNJmerg9aCVTA2W291PNC2QmU1ksY13T",
  "key21": "2kbJCJLSQF3YWj8W5VV6LY6wnuorbQimBEFXHF1d7n5hTPZbmyJP4KaF27NWpiWPa8UsHgrUopbLxKQRZYfTmuLa",
  "key22": "3HNVZivzyUXkmDEB4tnwEYwwHPDPTQGSYdy7172gCbEtmGrX58MdgGsEme1BRyKaPns6Z8GPVmZakVKGByAkn5C4",
  "key23": "2NNF8EoNu9Bas6f8KThLnt2D7UEeW39uavbSaZPgBtFjpz9U4CYwwHRG7kXKbKzBHG9GpTWBTZz32RqudAAhgGLC",
  "key24": "5fCzZsbqwGCVZQBGKumcnwNRzrMyeNNzXMZ9hishC5YVHCvG8PAavzKucEfMqSwURhTsGkt3McDfwEtURwRpMKCe",
  "key25": "hPb3EiCErEmV58iAQmXggmWEp8TTLJu3GQJxxVHFjmnDtFtddUqnmtH3nuSi8CD4z1qK3BSAeJRmyEd2VftpSDs",
  "key26": "4dpmNT6Zf9HCdoDEzHqRweE5Gyenn18xZ5qnc8hGwRbmaFqneZzYqWvbGrKFFkkknTRGEf7kVYR1kdDdjzr2Ggkn",
  "key27": "3j4dKeNzN1AHA3RmJBkcEp44hECo2Ln3RkTpAjQtZhBv9ducUyQvfyNXtWVLMm7Lhv7qJQF7m1JCoXAiFM2q1SNX",
  "key28": "ZPUhg2ejVzZ13L3JWp1XKCESbdvitTU6rFUt7YECpzhBxXNP4f7NassZKPzMJqiuVL1mvn79R6v5BKQ8nzWQmse",
  "key29": "h5G8F1zGkfyFHJQMvxFqj1QVkFmMqGzBCZue5GuQU1DtheyXussBeD1vGns6GLbSqbzPE24GD3LtGHbowV9bb7D",
  "key30": "ikJJ39XhtXoGefFebF1RajBfRZBZsg6Cbz2AjRoVggVN8fa53xz4tJmZ9G55aKxKv5rcn6qjAwG9mU45EUyn2Pf",
  "key31": "3F1E2Xwi9Exv3wETSSX2y7gKnrKSPbwt59UPxbZgLvSJjzdzT6vPhxDQyLyqXzaFpkpdCD2DyhRajdp4LHB7mhPy",
  "key32": "2zXGsuDrPPnnoueC7wWxewMz6uPY84ZBV6bQpMMwH9aFj4gd99Ui2fTzZSyanL2GgYtxUU2rYWyFiz1FpCfTXaaK"
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
