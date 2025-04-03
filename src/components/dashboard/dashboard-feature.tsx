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
    "4DLyjqSPex5jdG5d9BJYmSYN1GfkTNegusbNKx2zMjUPLV7nrEYpRCvdGKmkZjAUWdg2Xe48yuk1oxNH1zeK4vyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJ6FAJMDBgBmRxRZi6cS5GZk87SuH3PnUZgyUoS9Zu8fEdqjy7spCbdyk8xk8nc24aKvv1HzT8KxSN4TSTDmDrd",
  "key1": "2iF3tRmUPdgmSSK4nJwW6kzZyfV3AvmWPYzYujXRAv5XrTEHauoauUuzdk8pATWAZ47WVCZwjhw6PYwwJsyfU8qs",
  "key2": "22fapNdodzGBm4tE23kTRUWNFLWX3vF7mRzern5Ru8S8jC4BbXaXXHEfSbn1kjh6KWvR4NEfUzEefBDYfGSjRfHP",
  "key3": "4TwwJXpSqYRZQmXuk9byL1N5hEPfE4AJ7odb9AhtGKqQpHxGkMazQdiXxSBQ5TLevKpSLQmUT1XTWTTLz2P4tBBy",
  "key4": "3Cgh9ZmfYnchqMFD9kPhiwesgjHy8JZFbF3HWZ78GPDeQ1HuoQyb3f2sgSdDzHBrVwRNKWUocwdZSKCft9yuvmca",
  "key5": "637e7pT6srDg3uQ74cNR26zD9wb7CqUPucitixzXAv39Ps8M3Pb3m9jQUewB78qqv4zptYpyy7HPdmhHayHwYAo9",
  "key6": "2761n7EaNT1ZcoixDjeu1n6EhZRRtH4nEjxnU5PW41o7XttdVGV8ijpMtG55BovJKrTum2fkMybSb8dPiggwNXz8",
  "key7": "61C2ScAHqp6Rdyvwj4MjevJ6xycxBrst53PXDnGDCrzZR99fdh3TDAhyCKEg6JnfN8jCs7VLXYQYmUcCkAJ3ACrM",
  "key8": "3JxTsysSghvd2bwPXKK3EoM1tXPajoW5FTAgNHm2jfuebaqXpDjvoropM3NT9hQ1wMYm5eaQQjufjmrtUi4VCJh7",
  "key9": "4UhfXLeQSaf7QpVCHVkJ3M3S7N4J7XVhqjoVmWwhsmBYaJKWcQ86tGs1mdcNFvKnxekyt1YR1BUZKLwPMG21wHKH",
  "key10": "4HDD27n3RjYGU75e6axatQQ4VczHcWmCvR5XmrNStQo38ACL7BJJ3NfBAArMib92fhnGEqGDMpzFK13zLGvGicdP",
  "key11": "3aThnH5Ue5qmRhUrw4X9qf45MDMxkFZ1bibJ6sr4AFTdyXzGyUXQuxtz5uh8YhSbKjhf1zjKRHkSWKg7u6FK7jC7",
  "key12": "5syerdEDEMGE9wuytkF9Nk22vEJefsgG1Ge9TRRCkcXGbk3E2T5cfA5xFi9upNyUB97JAuCeKkhNVxmjsZK58tCu",
  "key13": "3cuWPCE2dC7uvr8ACrfxhPt7Q4QeUqgr49yweQxXFzmq5xEKf5uYxoLYDyyCjvfS23dKzfXKN1WsZfQ978QBYbcq",
  "key14": "cGjj6UKVbkPv6msS2p3Kzpy4TT4veHGvVRYL2EfTPB2y2DP4VFKAqDBhpPgjfmXCSYT5d9giLNnSiNcwc6NPn2X",
  "key15": "2umsJ5tVbJyobuqy85UVLGQvhonFzWpZZJffinseM6AnD4x2pbM97mV7GhK5NyKrTQKSJHxS23RLQZSixRKgdrRG",
  "key16": "4A4z3GWJGrJuw3LKhUS8zGqbHX3ahTKycMuY5jqmNCZT2sboW6rr93GBLGxWxv9zRkjCxnpHV1tYoBNb9r6rACmS",
  "key17": "bGRfAS64WHbCvAapikDkRJdMph9ebsX9h4Dyxaifn7LPsbJSx4BaY4HDZ15ZsH2Zvk4QzzwCVTdgJTFtt5BSEu2",
  "key18": "3jusHBobcwJvYeArSiLRW8RpRmaTeBGiN831rMT31m8LpoXYPa57D7NMpbU1NobWBHzF5q2mmtfkRhfA5rwxAexS",
  "key19": "3WJ2CmsLsAZ3vhTSvq1D7h1eM66e716FBtp8eRNWcxZvF6mf8neXCJcFdPkUAwwvUpmxC24RjUguueZDzBDRk17h",
  "key20": "5rRPEXCkZkGyScdRKyZ4dhk8dLjxLTdAn3yj6aCkwTYohZGyJPLvH499G6BagXNg1NSv9BbWLbbSp3MxaGaJAcdr",
  "key21": "67Rivys5gKrn8Dnsp4pGWasMsRYsTp6kpRYeo58ZVcAHbsi7jYkLNVuUPq5gQx2X9kE5hWbvg1wDGqXLCx8qwUwQ",
  "key22": "43o5Jv8RD7TE8savKDJsctvvJTacoBbhJCJ8AeZaAganPZ1Tda44jEqtjywuaznDeCrEyAmnUEBUMDgNuwBb27pZ",
  "key23": "4AWbBU2Q2UTRMAHN8LYgwgNwVs2MG7coajY5aqiF94zCyjZr9CnHRouL5xtmNx4y6GbEEk7DXapjWUo32Dfpg8yL",
  "key24": "5CTao5GE1W3ZM9NZqsm214scJHkUL5a6Y627RLMmGk8NfoeLmbzbhSriWiGftVKGB21bP4eMat7Fps317w6KJ77d"
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
