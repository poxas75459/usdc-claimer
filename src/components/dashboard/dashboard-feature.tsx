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
    "5jtzPyjpeFBemG8mghteozv5NsNDLGmBnH5REFTb2o5s8mHwmvRVoLvdjj6RksAR84oxUzfCx9HxpWxUNJnSGxvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT4Uq43tr3Usf6Nj1JK9T4NtobUFD4QDZFFccYbwqLuEyFcvNF8TP4qthyvUZrKQdoXCozjeuYh7zBvUuVk18yk",
  "key1": "mnYU4FbSf36aRb5UpupRbit3odrBDtQuCoRbTvbWBUgcQAvYmFCGpuRKJA8rdzt56L9VBmd3tvJYtVt9bspjRoo",
  "key2": "4pNSneBrfcbYhAo8AjXWc9NNnrnBSKWiedmFxHHBUwcbgqRGpLPkLZpMsHV1RquALcMSbebpJv8pSjWvCbtYSbm7",
  "key3": "378mrBxXkUniPuHLdd29PncEpybgX5GCXocCvqgCgVpCDKN5JoW6f2vWbEgYdABQKZmweHySzUYAWsQZoVT91RZf",
  "key4": "65rnE9PhkbUs7fdmGyDoQE5K8d6Av1omXn97ykSFXVYnnof2EZJRuJxmWQRJ7dcZhzxM3cVm5N3Ef8ApdiQUaDyd",
  "key5": "3Nz2cgvW5doX7Y5oVyECRvMKFCCvEZAsNkYgQo9FZW1nFGb9sQsR5wDnL7aWDogsioPYFH74Bf2wTTEZWUab4MkC",
  "key6": "TokUxrUB2qXveT327mNb9CpVZ3q6kizzhD2TbmmBxL2qkkThSXu4Cmify13AjscKesmzkzpvEp7P1oVUbtAsZTw",
  "key7": "W9WqRCZ4GToGAKBQcRzvnx7S8aVpjrWRPFPGtdchaJ4N4ubcmgJBfmunV2eS6ZC8K6RqzNbpGMom5u9aSb9Pp47",
  "key8": "3qURnairGPbk6q1B2BATwpXiPkzqQ5JDaU2iHytCeZWscoHjRvyThDxUAZgqfGHpYDNeMde1PPVaNxit7UnUXrad",
  "key9": "235sauQwDBkxw7MfHPNibCsxznsoc511G8DBpLXj233QmA3yVkBn7KBxqRQFnBj3Fge8PCU24gf6Phu6343VfCfW",
  "key10": "4Ls6dEf9BC6FRnrsc5Rki5ZvPHQxA8FzB5xRZiBayGmRk88bxGZcRGx7Ef6SbCR8VY1rBKNwtj6X5Y1JH79ha41A",
  "key11": "5aq3XWAxDHBLQwJyGA4xp39TGCk28Laa8CxmpB6C4JHHfdP7PYbo73oRkK7RGJEUAUa2JHxHsfM8GBumVSAfQ1Lt",
  "key12": "4tnsxnPdoFjsX7p85hSxFPn1ix1SLKdtdrk9Dd8MaysQzzVvxCFbKXSRYBZUq7UdPC3DJWjb1kXZ51pchdmvVoY5",
  "key13": "53mcRMnE4qAHvmvQkvQkaS8YvBSqruYa2nJaW4yRajByX91TH4U8XGMH55uPKJuheaCUjPEWmi8mt3DacZyf6BVo",
  "key14": "RuteDQPuiudaCHtDiEyPxDex5hsHy974ytqkUuFz7Q6xVc6q37ybiNSJDpzdQngA2nTWCbupCPEE9MSRLA1JQ4V",
  "key15": "2ipQdvaF7ZuJd6pScaim1c2fPcZJ3Mg8NBXdVwQzpih9fUikca7eTcpwKeR14bvWn9c2ycpYTHoENqbAnNoM2pYT",
  "key16": "rR6yf95xmQhcBSxsciFkvVmkhLuni9gCmWrv2TsYLcoG4D2i6kesLkS9D8ETL9kWz9DaiGb2Bue64JRsbJQiw1Z",
  "key17": "5sy7kVta4DiYfbTDX6o4pknEjtoctMczXqTBcqw19NBwtXaUohy2iwSnJ3s3a9M4hyF3jwzmNxkuDZ4BSg2jJyVA",
  "key18": "5cHbSN1dnqkj1mBoRnaHJj3v5DjYbKLuZdvEsnczUcP9718xUuRYuwB6B6uvsnJgb4L3PjmGVpUJbiviWgNtWcDr",
  "key19": "G7L9EVew8pVcfzP2M4zQVgyxFP4rcNQGUaU9dJsFxg2VJt1o6rUM9h5kvtw8efjtjkiKj3day3aGnpk6qjS7axi",
  "key20": "C8dy3UFqaFXx3DAM2Wwia9C4Hgd8e4GDrdjQ6YaYSWiB2eg9zkR6NQ2v7cTxDWpPeMCje2zSDX6jhbEKcLfXdFJ",
  "key21": "2i3bMFRWgSbHSimejkx4uuCQRa7BfEyMoYoFXm2WKtNBJFjHAQejcvtWFQbmpfH7Dwmx8cuiwjsJgzxVhUo9h4W6",
  "key22": "3ztNnUx27oMM2Fjo3KHe1S3KBRudypEnsDWJUQbH9TPVxYmqRNqrAEZKCHQ9GNkMGGt2YbuQ5TKgiVEXEnarrmXP",
  "key23": "34Ub4z73i5VcaAgZy5ToJwW48tNciEQxiMTN9MGrPid9EZhi1FAGPbaYDq3ivh7haBPG4Caf6Luf6eJoA2JkSW5A",
  "key24": "2q4nXG3GrjnVaCMK3aEEVvf1rYHCqRX6LQ3EUgQqVUrrDkoraENghiLJYo3wdANwmbkjuxAMvaXQKUBooGdAnJ4R",
  "key25": "2LUteVhHXaajQxpLPh4W7KJdQbzRTqfrqWcg3Wb9KPiixJAueGhcLrEpU5r3cLWZu9XYqqeaXBDtTZrp2YRKjjnx",
  "key26": "wmqRnSv5vHpojWsNDxRbmNKFPLh23SmPjUHBtynPunitaaVm5RKVj7yDN1j11RA9nv71yKfKC6gSYTmbS1QfYa4",
  "key27": "5iGARUPQkhysk4Mrb7VkPJP4nPPY8HRbRtA5Qcrrj5bCpkZ9YaftjM9n5GCERo43amBkxmETxLLBHFkMa6pP8QwC",
  "key28": "5pUDpQTDwpJH9kbsYNjrCok4kScRV6EEMqBytdN5qn5EbX9V4hHWGVVPrhVEDP8zBXh5oE8TG46s2dEvxPd67i8c",
  "key29": "dpUZwb3MS6MgVjmMV3v1HGMTyr6ym8SPqKhFsUNWXBiWqqadGmnb77jtM8YubK4v513THBAvxWgL5JzmEGj3bwH"
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
