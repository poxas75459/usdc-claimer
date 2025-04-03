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
    "2ZyymSWok4gRh1Uce1iN69bdKdzLAMfAKge1Z6FCWjQCNu41oAUMPTmFKz3jsdEZ3ZYzuYwQs8j5MnmnQrkDkZ7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BGVQc5d4Jcm3T1dyEmV8YhvULXPsEvzyFrHhcUf6Ki5kJoHxRgyFPpWmNbz11zfGHS5P8591dr6Jw6rZQK3DAcB",
  "key1": "4u63rR7ZfXAYJ8GgW6NqeNAzpY1CSA79CyM3bMeUpCNwfmKqifvJFTbVQc9zC2wJDEVAuUe8VBpXrtG8o4hEvCDX",
  "key2": "5szrRg4NgfoXUdkmyaCwkiiAgpTxQqBsWgQRY6bh9cJXkS1CaAZMqpLt8fQuiX8F8sDbCELzJJZNd345gwSvmsPo",
  "key3": "4CH6SsqpmKjiDvaipZ1W1JGnVo9mCVT2sPnCSW2d5RXRbzzUsZMv9MUcsP1ayjdoN9wShizRRKTgacpEp7i41fLq",
  "key4": "5w42vJuGYWa7DmSWae1om1qi4DCZVpVDBjwg8Yu5tXdQJsSRNSV2YzV1ndNDczTQg5SnAAVXZXggZEMSWC4nzcLN",
  "key5": "R8WEStpnN3wDcTC87UeLBGjngEXEeeHP45FfeDXpRogj2Ye55SKVx7cCAjEFVkrSLHX9qghxLme6FKZNHnmP3oC",
  "key6": "p3FbS6GCutASHtuFmVpCEiCDPsDssssjSLu9NuZqGggUoEcrjJuta9T3DZwNd1Lkie4CfhpaYSq8fCDMmKFuiXz",
  "key7": "3tgjQp34ctEQ7gBjjWtNVARpvdLFkQ4GbSw9x6dFWdN2w4H8b1XWLoT1jKqNdSANQ91bxJFJyfjca9swv4hvor1",
  "key8": "4tAX4km5eBCimS1ymEtBL1Ew99KJmk2rbhRsskbAQnyNt9NhVkkwxJA11TUQCy6ggHg9xjruyx3iRCWStVMSdSYD",
  "key9": "2MF3QMWnoFoF9v8qfWm3wbB78YpuHfErMoKKyAx9LSyNN9FQFCNst7Dd57EVKi5BkQQYjUjSZHEVqy6mUN9NdnYA",
  "key10": "3vuBTPBhgHpS6KhTttnGDpba6aLDkSbDmtsUZkYUSTpWUmEDasNZNaFz9udm5rwVzrQtNUkvC1tgZ9K7Km1QrRvB",
  "key11": "4TafAmQVT8dnhCnaw7EndJPx7ob1H3b96nGanvA4eL7mn2PAy2MM3QEZFGrksJp6dtWCerJyW9Kw93id321jkqCm",
  "key12": "2z5bU5mjBVPR1Z7Fa2t9QY4R4dEMwcg863H2mg3L4zwDuon39bVwVER98Ffc3V21HvTazPPPHPWnnscDDmQL2V8d",
  "key13": "3xknzbbEYnyrWmweddVbn6YGu24mRDsZDdhCqTnDqJGRP1xzkxsmR4xFdD1PvXC2WWSpAoivj4bjhDVYsq6itytf",
  "key14": "4ZJ1E9mrnTArRFeyhpcwVJjNCXhXYaqY63ye8yv68HxhpNLAEoUzb5TXNKqSqMJvdPYiBHK8rKuTaS73XsCzkhz3",
  "key15": "5XCm9vcPV48jGorsV1xsd3yZMjdZfTthWu6w2gR27SDuRNrgjn8M79GTrGPp27bY1HSVVovMesqK5EYo8X5nhXxo",
  "key16": "29df8xKcWnQac2hGmPNjrvLbZobZsHumnARBd8oXXYwtQHASGYZxWmnwHszhm6mtyZ1FBjVQBXJwvF4sJLN8yNz6",
  "key17": "3KiUEGHxMWjpS9VaWo1bLEdWTBGbFYqwnw1YRexAD55Dfm1CCbGFSYov2WzLSb6XomTdjFS2riiQjxDXEJBpUhYL",
  "key18": "4Vfr7S8pHxTqWCdmDgErc35Azbt2d4ZCrgvFsc25aUbiRftcW7Go1PhSJijkTHKJNWVXNwgQrJHZJ1fW8V5sN8wW",
  "key19": "2qYStyKm5uymzNRbBS4D7zAgN41tjpzRzJdtoLxSYREiYtPDhZidjyw4WQKywpLqwmJViMnAdaNSbrN4rzpHQJGF",
  "key20": "4iuJ8EcGMbvahhucdRSBAZXmBvvej4hrCHFu7uFXdKeEqfRDZujBn3gtEt36GHZ87UNQe6nUgCNwftrQkX5LrPHT",
  "key21": "3EVaQ7YdYjpfsaR2N9oVDDkwwLJoWJhcdzqn9yBtFPiavxTo9KbBX96u4f5vJxSKHzgB6PS2ZHpZSVfCKFBxXMqM",
  "key22": "8VopCJ9qnr8ku7gr9YG6FwRrDuYoNHbvb6koXeADAJdFQHUmLwiMpRnQyzr3nK4VZyuyeLF5RkrA6oPobx4dcid",
  "key23": "EjyRwtFZbqgfs17Ee78YD1kANry2AsLGQBa6A165BXwFdKpyHuFuisTXXSGpMdGEv1czz5KGKfUpSx3vXZ2hsBc",
  "key24": "Xaso46N4NVgmcVvFR1tsJMzrzt6D2vmJJbdCDJPWyZtYs5SCjbUZ2ALwNqrzMUTaBfQRG53ACEbr5hSQvzfFp4c",
  "key25": "53HYqsoqCcyN6LEvxuNoabm7uCMeCJHVCZwtrHMEN3UeAdJGNh7kfsv82ToMxWPKQSqpFrsHsQDq8zfhWr3XUfTB",
  "key26": "5uDcWhbcmdqWhydn6qH9Bcb3S4iTXxdNfpRwHigHgeyw6Up4GC8QppqA6jGo5z5H8bHLmy3GywPZTddQeve7M77P",
  "key27": "4D1seikBnENJmNuoUUuYiuwxzXRAZMcc7J6Pw8qQ8b2vaRpXuwBcPwygpZ9Dsw4NemyJqM6sKBpTAWHZ5m2XFLGz",
  "key28": "5jK1ZgwdHaFTTfdjJkAdmTFHDcPNJ664ZY3ziwFXz2rqmPkUZFcwGCkX7V7ASXgeGWgb7ES6A35XnqWNM95qAL94",
  "key29": "2YJz6nVgcQeZN9w8uS8dGEcM6J1uVkCzk2tLCGEMMpnDiMAAEhYBrPESsSYBuNWmbTxm5TT2CBb7Yxa1FHteB6Yz",
  "key30": "2Y47NWH9rovg5vN2ir7CGEbynPhViRqRMoZkLvvauS5Qyk9Gvm48CCyBwy4VcNCVBdHtV7uvHsnuVALnje6MzcUi",
  "key31": "3j49jeymiJyABy7ofkRUE3nQbRn13PVM6LxYzRrHE9qxN9i54r5puKPpdPeypVUAZ7BgWNs8QQA5GBjfbMxWQiCN"
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
