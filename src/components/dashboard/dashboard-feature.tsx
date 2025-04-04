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
    "3wac4F4WCPptjTxBAtxydLV2xbQk6pBEPMWTx3Yjwqa1H4MmwvGxRUkeWMj5XMHYj3NHxjb89xLwbFL5WiNMXYKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEyHajRDDeztfJfbghnBepKdkY4JbLaUaeN7q9jkDmd5JTHhaBjY5EYb4MidvzHHY2gi1w91HGkJ7ohyBCboUrv",
  "key1": "3aWcCoD828GF6muCUjxq1HT9XLxpvT43Y1hqgkn5vWSmVEWddR8PpyRvcdU4XCkZ9oGbYXeVKJB6KZgJ5TTAcSDX",
  "key2": "2a6Dj72MgTSYbRxPk41UgJXJmpbsdVZCzQfRozGBrnozLPKcE3Awh8Vz5imcLawuib19o2Jwd7bZyroxML9duGHu",
  "key3": "5Q3bZ2fzjUvuQUBq79Vfd2QEcZosehpJM4ee4iUZ9mqPmZHsidzB2CkABE4v9iwR2kJArAucheUKD6zFjnL3VVLZ",
  "key4": "4q8Mhke6uyansY6jwjvYEoAaSUkE1Z9p6weeZA3dDHUPhctmE4ZWnj6fQohVStZYvRZhgHQL3tSnDCAuFHEcrCJL",
  "key5": "ZH7NyuM2jWekgELj38YGWpS2jDZu1iPuTdrfcRavfLsMtV214THg13XQNXKxNASAyNiy6Tqp2VjNELkvuNobZLB",
  "key6": "YUe9shp4Fp91Zr6JuXjhsP34ERxbUB1jYRQLCkkViKnXa4xYuUffxFpp9fUx81axeokK77szKKRzrmdT4RjH6eN",
  "key7": "2yQHQLCpyq7oZLW8U1VG2fjyhkPAAnsFNeHt2NWao7UK9iVpukLyQSrtkGY3Mea85RD7PEdMoh9uuz2jJo9rS7mC",
  "key8": "4Fobt1iedc27r2Zv5k9z3im67nVsyxVUjKPdP7E2xH69A36SdwpUXuMHGmCQTMzqzMzjpWEc4XEeWm89Z2arbGkr",
  "key9": "4inAWuTSZ2Gn8GWVUBXVCCyFUr7eYaFLDJLj5BcFrJRNRJ2v9wwgfFpnLpZUp22ZNHVcu3gPL7jxJiz9VzXVPv1X",
  "key10": "9KfnY1wbPsRVk6qAzqu1rj3gMt2jhhYBJa6JZcR1KR3XShV3f7C6TdVQ4mGYUc7S5QDVUZjLsznyyYXYiqvGtBv",
  "key11": "47Fx4fgoKReAgP4vNCicaVxQBAjrH9CUkdGGbxZHv1L2aDeNLB2ZcdwXzR6L4b368wWefLfdszaA6NvAAjitYxYq",
  "key12": "2RQYMDSzXVJYK88jKmDJMazGYvfpw7yGy2QgWXci9AxeuAiaFd6bwxyRCEr8e9bACEbbx38eNfLz8D23xeSFYpun",
  "key13": "qb8D91ByeoJefQSDjAaWEEbSmH54Q768BNjUPja77UGyoaBk3H9KngREi4zLL6sw31wveWDYxGPra63JmHr8HNY",
  "key14": "2LXn84tFxQ1bzQuR3hmXikhdwRdRj59oApL7PKCD8GyEiEbLfzrGAzsANK2RMDrw9DF8W2CtdMrcKacECUvSLyqV",
  "key15": "4Zkv1KPBKfTwaJbk6wbmgRedMzjVfPSuEk9m3j6LYDtk3pxbe74W6gWf7iYc2TaHJqhbaeYLFpCKiVH16zmJNigW",
  "key16": "5wx1aKHKXAtrqkQmFGU5bzM3hdTTpbGbonBEeQS4nkvNogWHaW1VzR3X7mbAYmUUJ8tq5tsoiMrzimshW3yqf77u",
  "key17": "UJJKEYowbtM6JFRud4JQVZecJL66Urb1SJDTodc4eypqr2GEDQLwB9cKxk6bLDSBdq9mqp4ayd2UZVr6cSM17Bz",
  "key18": "33LhYGH4jXxBN4fZnvuJcPL7NenbiazTBxbUvmnSaZuncb8FmmNocjxRGhbKw8Kei5KbDfKmzowWCKa4Vqa7Zwas",
  "key19": "shZdgPd2TpEjjSsy6dHcre8e2MWCktWDSxqfDmRvmNzXxGEviNXZ6jHPqRU8MbWjf4n5TGAYzdYrvxj9PBamVaj",
  "key20": "2HoQ7oJgfmmRHejn85Ww4i2G4jTfLRKMTD4uDisP83TSjLThnfZht7ePmigUGd5ZySpHVNHMW5ZEVHKnRurp75ak",
  "key21": "3XpsqvcfQFjExtx9aEuS1LB4sGrwsnQi1Bhjc17W3VgdCG7jhibYpiy1SAAwtMEKiV4AMaYszN9tdjXnjk1DzLWY",
  "key22": "1zCWk7cnoToGXTb5K5oAUtN5HKtviGg9H55iJVozWaHMsqbBw93JqE4pWk9t4xUre3aBnXPeLwW1moVNdTarhgA",
  "key23": "4kCMWTZwkU1keL2LBAtz3M1x5sgbt4CRZjJFRZUY3XaxNXHCY8BAHS7otcyuhRQ9cJ7hDxyqhxNVyWzVyGZdAash",
  "key24": "4U5v92BgmAyhfn3TwXfMSxAjBpxMiBBuo7ff8LAkq5yTAC5Vcv1qGJ5u3v3FRMYBE3bhz9AjYZA8h69CXoFTPGyD",
  "key25": "VfgdNJHADaAXwqvT52fRMDXJ9aWR1XmAgjPnvhiVLKZ9NJmyDxUsWzytRVvU5nZFHVt36trvZ4LLvEien866VxL",
  "key26": "2CGQSgeeEQHookoqQqvBoVsKd1ic77sBKcUjHNrr76HgBPkpYACk3E4f27AHQW1XtkDWhsx4QKrF8SWwaBnpYCAZ"
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
