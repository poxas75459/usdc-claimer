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
    "5UcHkQULwKwJR3sS48Y9rU3WaRmmfSnm34maVneBxMnUY7roMWcoyeCWdSVcNeqD2V7bbQdHkZ6UdL1iuqdCUr2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pnmXVVoH6rfcGnMX4Gn4sbV9q6ug2RL5GMHbxYZ6cn46GKpEZ8jq8SdNST2VpwBPHkxhXU61ZN8c2ztN38fKaW2",
  "key1": "4pcMeMKBkxNr6LYzBinYeWkGqbnHEkXnhRYnsniVBKhmryLtLTAAWzDg2i8A9qRC1N85kAWuD4ggfEkwFhCjhysi",
  "key2": "42Gpgxfeznujuw9HvezGGhUvNjZ21UF1EQKYzWXjH4tvcKcaf2ghBaaaxZ7QZfBvtoVi3C8xxx1RrMhVUEpsx41Y",
  "key3": "49dqm9aCTu8CQkuYw7UTZcf4SL5f5jgWuwn5YJTrXwE7hQgYweYMhfwDRBk6bQgq1NQjXmtewD8je5cpwEsoJo5H",
  "key4": "iiKavFbU1FCKj7zaxG6Fi8KvJyhpbe6QD2Ee6oHXDMZub1T2j2zhyhoPCKmdrMdP6qJ5YJz1uQDqW3LSuZSZWMf",
  "key5": "2LCD5gK3God5XrmgK6R2tSAvuUzKeFLzDy7kEKm94LDetGxxBzm1Y671dUL58FVpBAHUx4CwpkrwjytPqYuP1hap",
  "key6": "5VwxoNXmwGWnQFo4X796iy21Sy5tHvj2a11dYXiBNHgmKLt8vw3csi3XUg2G7gsEZL4xAVqTX1KhSUuQrJgHctHm",
  "key7": "3UhpaeParLhoiuEuFget9ukK69eew7iSKSEbSDKWJWm3TPCzr6EjtzRVU4Q8FmS6SbEvJ6VXro75yMGMhYyXZKnx",
  "key8": "4vNecqE2E9d2f9T4qFUYsbGmoYSHFsA51Xtc2PqQoEVnpiNiFapaKamV2oAuHdj5svG4wikaAk57F6UBDK1wsuiE",
  "key9": "5j2rmKjaV3d4uEaiEnEZgPD2WMrJteKUBe4bkShugooA81bPuER2GAnFG2BTxfXyjx2roFMnLbJdVsDazFedDH82",
  "key10": "2koedbYrSkhYB99f4jYEVSSEJy9iEow2TTskr8SuXgfRbVtvJrBh6vB1c7dj2B8mPAaKAwjzPyaRMU5o6uWAbpak",
  "key11": "3sHhou5dmwTyCFeX4Kf8WDRQw3QVqxMq7BXRKHk3HZcC4Tj4WgBvHsRgti5rGep3mX8FFM8mRwz4kJrYhZ6zEfBN",
  "key12": "5ksYv9T1mLDadzk6PVGFMQkSarw1JCtEkCeRWGQ82kfu3MnsDCNypBBJ6YwB9MUtn2WLM5Fo4UTtxXRg7Bq9AjAu",
  "key13": "65d7YGKWnhdhCobaCNKssMNJN5pYqKtuppbDNR9M5VswThR9iBdMXxqr2aYasnwf8QJrFkGFMfrpTnrCKqhLQjr4",
  "key14": "3VgRTNZmdo8pVmKb8DqLX35heKQfzxJZ6Urn4FovwMz8Z2zBny6urQUP1tgxPNqsamd9MQoaMNkFYsepYBdptyne",
  "key15": "2k1o5YRcTRrswPxbgiHrjdNY1ZhMCqAWKETifNuQdBxP48oH2iwfXc6sY5aS8vCfq61zXjMUzp1e23gpvCfkQpv8",
  "key16": "2NvUL9PZCKuxmAUGuWVXM119zBiZzbsodKarJpGBbhfdWwSsFHbARfhWXxMsjdnDPQ1zuFh18QyhY6NtMnU3udtS",
  "key17": "3FSJwwd5ioEYbNkEAbb4AkNRcQN1SfN46pWULSyfewmy9AAwNASMq9xLVWUpEuzFL6Ce4NNc3yAoRKJeG96fYAK9",
  "key18": "DYyYiEgBNwGcQdrHuZnZe49pXvwCd7XABCQTjA56UqN7TNypwGsrbr2vPFbqgaGRakMFxSPSTCvT39eVUwFnfQr",
  "key19": "2dsGeFxX42ZJwMsHQgYXpAi9K6cU8F9LtNJMWAUGaQ97w2dxwmjov8SDmFonnppBcD1r1A7ChhMEQdi8GiN4Dgnt",
  "key20": "3oZPXPtmGcDsvJJn73qwwouCNYnrx5EPswoKx5QH48v4SDE3FQEYkFdgf26L1EPLjtskFp7n1UExk1MG2TdowPYs",
  "key21": "5kHf8hyajipuaBzScAPVzGENDBCCTC9JbZ4LaMpU4CLDzQNzNMC3evD6mBKX1fHizbduRiSF2obL5jBdHQGRZ4h6",
  "key22": "24VSxaaPmXaxccq5DxrvPeDQ7RFHGT8AUNVwZUiErWufq66qoBKVPc3ySRBp2WAPG7t52bwtctmzxotuUQhAxHHF",
  "key23": "4ovXUmmVUpcMwWrTxM9LNpDVN9NYmPeXHczUzEZHDGNKwT96FU7jgYm6d6WkQVGoc9ZewKUHWS7b2LWzN4JkMFie",
  "key24": "3t57L2LfULFpBpUzVp6qEEjSqtY6mcQGD3W8VEHhhRRBvy5Huhu6ZzoNZWTQNyqsB4tdXV63vEuqiBGkzJXi7ena",
  "key25": "5NpfEgjMcgXA2m6FaSNpjGXF5TMdSZkFUQNsTaWHCya9n3cZbepEcemEDZxVZ9W6SQVR595DJcvm8426isqjK7Vd",
  "key26": "2kkCD6W7MGo5sRTCcZFuYDzw4hyVuuwwoFefC7q3sP2HJM5MnavLxuwdyLG8stc7nPCQvjHnJyngjpzqDcK49Zrc",
  "key27": "2UsfWz9PE82tm3yjMwJWhSgeH3dqhMURgB9b9F8hVT1pSe44inZDiUtjBLt747cvewPqqw88qEHWXbKz1zYduzua",
  "key28": "4k5m6WB5PmSxfLJW9AYx4fxGaU7hvRjm522ZRXhwBpYeF2WFviqBaFsXGQtB3XHuFkrpT1jVQhu8g1eESTtyDkSe"
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
