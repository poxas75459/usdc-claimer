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
    "277zgZVP2i5fDVC9kP695tbpDKvsUDaxJK8nHMaPw1eikX18JVKvfzp75rbMutMG8G3no2cKi6su3zNVoYKCnbjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2nS9QQhWshffJGuZ6VkRoKPuQZMdrENbDeDR1LyvhR6XxjamtuFVdmvUDgYpbNUnxxXk8JodFHHKWYnGjCPk6X",
  "key1": "32n6fP97r14b2E1pjdzktgtTfCG6gf6td8foyPybPbcVXpov4c96kmsgzPpvYDBNfs6q5LRPx8M5h2GNbCGJyeNw",
  "key2": "4RPiGzhKWznbkSDVE5XwPeyTYGcDCYvVMwoUSCnWbSJL9eDvj56JUCL3NUYjfCEeZRCF6H6mqwhrT7nWurWsex7d",
  "key3": "4qb2KergGU2yMRnrSNAJz2Lhi5zCyQjXiJHoVMZmymHcCdUyYD8CwSBkzGUHKEJFogTdXnNCiFNQSwFkF4cc6Nei",
  "key4": "4zb1Hi8phU6UHPhJZQtRL2pt26jtqzddPPuKAkbbHeooaSTCH8Wey88LNxtwnxoXGxzqh5ZqbV33RfwaHBf9djWP",
  "key5": "5pD34Hi1FJMJuU32t6cSvnoFBh51KaqW55T3Uri6vR8w7AkjzGtdo4rbMCb12NeKA1qzM9Mkrtx5m7FLn8Tw4mGX",
  "key6": "5GD1QvrX78WUWL1u9pxEGwFmTVEU8vdp7WeANgQwEGwdLsZ1sB2ccZ2DNdkNqvEvCnHDoqoQZwwc8GHiRHPMmJS8",
  "key7": "5Xhf965GCDQSeDwhwULD2ttcuAufbAfUGRX3412pc1UkLoAaBi3fPdJF7vnfCrpeDBMmkqp1f5Po8eA6YjBDiKQd",
  "key8": "385bZfL69T4eFVLtyVQJjd6AiwE9mJ7PbEqh6TsJqLeMNuS7wFnxH8V8LmYvEXUDZQhmUcveQ3g4rysa9RELr6Hh",
  "key9": "59yJekYWmhTVgdWYT4Cv8FQ7CibeL84aSXVjatzgGnpn2HWAdfr4mFkqfHLKSdnx15vVU79q57vPy8wVhj4qe2U6",
  "key10": "8aida3UUaLMoJzkDvNod7pz4VPn8hbJrrUQk3MvKWy9xLQLscfL48pugq4BX5op24ufHKibgoHHmxf2U6FMV5Sq",
  "key11": "4438jgmWPgHom9h91JTotd7yAKEbLbb9yhL3Jg1EUF7FsP1gxceknM9DiEFfgcqfgL5BS9jLDJZfcyzMqLuMC2a7",
  "key12": "3UtZFQUcnKyyudLKtkt1xHRrUoyRNF7rxhvSAmd9TWPeLTA4gXKWa5Mbz4gnAUmTQqkzM6CTN8QSDLF8XHTQF8V8",
  "key13": "4mcBwoXoTXwYP3CHG86mUpnPcrJeoWcMpVro9EhbMKDGWji3yajjRu3zyjR5GU6YCHXhed3Lhygrss5o1uUP3394",
  "key14": "3cQKekqsiPKPZHniSnmcL3DpsQSt3wLwJVEuZAqQ97k8pSkcVYaMK4kmNxbp8csjbdsppafH1YhvGGUubZ8UqVq4",
  "key15": "3v3PLYdQMqFmzRRmZRdAtbMK6JLsVsXnR3cMeKGWzCZGaRfK14H9iDcvbWLgCPrGusjBF4R5FBdSxZgiAqb9DcMZ",
  "key16": "xiXiojUA3fbNAVXk5YT2U2wJbuY2zUxFTUzWmRwFmC5R4EKBuyCBZeeidWqxsB5s4F9FzbKKft4u4XVwqFiV6L6",
  "key17": "3XC421DA5BtAVQVMPzeteUKyKRkg3stze7YcPskbN7ZF5X6GCa6GQAwYKtL9rFTZsw2SAiAHufi6ZWfUfCeR887v",
  "key18": "4dbWeAAzGJ3BXCQyqPtExZt6Umkyka2VeX82TBGkYfom5DneNynas2TUne5RimLM4mqpFJaD3PLbZUXXVdjEF9mT",
  "key19": "4ptF2VLYgN2NJZNW2p2b7xbDcJzoTg6PKotcmNWZpVnWBtHZi3XK4bf9gmVv5mAdmmUEC3vPTjp7YiVqmKrJZJwz",
  "key20": "4wcxAS4oHnN19tVyyZvdyvUDnqmYyiQVvb6BRS3wetssGkkUkbDixZfjfM96wpb9P674XzvJUCZrxUxf3TDuLQVq",
  "key21": "3i4KekFBxEk9pKmKm9RvrPfKnka97bSG7an9JxBp2u5Wy42WV7ouVFYvQdRtmfuN117SPY9RpPPxAoqoGBAvMZD",
  "key22": "3CncVzAoBWESKm9MLJV9KbacmgzzqKpgKh6mQ5GpXv7gPyX9q4sbHnYW5986q9tA6u2azuxzV4RSZH3QSu88DrF6",
  "key23": "2gCxXNSZcXTofb9sHG5dkTNfoauSqsnYLRyWMuyW1xuD1xzT1xLgMZyD2jRWYcqFZkUnVz2uKcRDDbCshog4Etf9",
  "key24": "5J7CW51FQeQ7jzHLtJX7vcMN8bPbqEPX84j8dmPZoMYNPxMeUgntZNN1EXREChiECCARVsUJTBuXVhPP1MPNySt2",
  "key25": "5MsfQwu6nS5LymBdWZyrqcrNUjfrrG8GSurM4aUPaoTxm6mKMQscdSXRWdvRMaQteoE6XpUy6TyJP6JHyLMdHCTg",
  "key26": "3dGzePMXjvEFX615tccY7LRj7WV8o3zzNjovYjwzcNZPqYnmze5aBc6mjq8Aa6Bt48QF3BzcPWLyCGcD7FSyinAB",
  "key27": "57mRCn7wa2Q1znzgob35KnLwKYDLVcaiiW5SBidVGVzuUMbRJKJbytvVEUeLxH6d7LgrgkVDA4LkoLttGwfuibR6"
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
