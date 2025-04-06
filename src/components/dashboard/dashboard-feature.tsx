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
    "41j4AKramoeKcuWgwdZZbMSemdiQULgNhKw2ai1QwZ15uhEezfgC7NWajjkPJ1VBZ9VTmzv2Bst6KXPWGoKXXMJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVCsGMUnJbnpL3JBjd9P2BFR8SG26yDR9TpeUJ1vPMaGy88xTcKpoY7fNZcFATWK1ijAMMj6FZBhZ1hSGqx4qx",
  "key1": "2sJhUXUNVxyQmF8d2N3oip1SmjZ6FoJ5sNBk5to7QKVt8upLWkjLXhRzNtiQUMhXrjb6zaXnyCwhg6VDJiyS3Xz4",
  "key2": "35eo7fw5Hwr1npwzSrVrZ1mqHJvxi3vPNabxtaz9FXAqjhLhJQcgqPYm38wT4cn3uD4xjNwsP5xRKXuuz1Pvi9af",
  "key3": "2b8YibdZdL3ocm5XNodjjbkyTaQ6bjPnNSBg3vLM6c5HtYS2Lc9nz5REVpJwMrx3oiaRMRSwYedH6wYshfbyQzEU",
  "key4": "5yGntPUWu3rxCxyXy3RBqUxwbbUYh6wm6ybZQyaGxNtVQ2cdR2p6SisCLt7MjDpjL5Rv5rV6rtd2SdEvuRBZ5W3H",
  "key5": "j9YbdioDPCaYHVBDm88myS2EAmCquHJpXZQ62zN5sEyHEUcjsagf99wXGmdPFjJUPTA4ppfMLhjCkVrS74Xq2o8",
  "key6": "56czCP7bUkdLchnos5PLFw6VNWNbKgUx7c1wQgR7P8YuekxvPrj2kZFsrq1GvGPNrQ4NnCjQDg7yURVxNX84jdBU",
  "key7": "xB3digTqMQ1xR7bPXzMH347w369bp4TtLDCLg3pCTVV7HYxGHZmjeU7SuKU78SxLDdo3F3KsEpMQqDX8atg5kYZ",
  "key8": "3rnFoMvGU2kgEukkxFpNTScBKFaCJsmbQfESi4rAodPr5fgoGxyeDgCwygtyrdD3Wht2yH9f8uxX6vAVunMCv7RE",
  "key9": "2dKwxtNMA3uQLMBzziuoZdJuc1PpwekTwm8yWVHfK4R2tYcZRzTNCEnzJwmcgtyHiZnRpDo9WNwncr5tZEtEKppS",
  "key10": "5FkyuMyjpupJXMSsJk6DtLTidAADv9qxDhufCWkARss7DHmcd77P3vJSXngiA9PvMhXNzrLqiC5bcTreDCFr7Kvn",
  "key11": "2w6x715UwqcjiYCUTny1ezdTPii8DCLtkGbSoAGY2NJZ4BzgcpZ2QhkuN1PLxhqdjgMmyQ7Q7cTHq5RF7iQtg6WF",
  "key12": "2633wc7zGuKH3yvko7G7RoJLQHkG19LdvzfgFGcuakCHbT3MqhVLrcfeKkisyAF35M2ezS8FACRmW62w6MjpNQrv",
  "key13": "2mHua2QfZSnqep9of5oMRpm13dvT1XHCHKeJSUSdG3ueDvoVcZ5qBVjgNpy4ZgnjkTXkUnv7fJzsthDjqA5meezz",
  "key14": "3KGCrW3x377s8p8cazSy9kgHB9o67xSRXRw9MMbEfVkit1dU1E54FVbwu9kjykP8XiAw2SjM8JuJArWGxzT8BkSY",
  "key15": "5VkLDEuAs1uxgzwkGYJDyZbdPMXrU9cHFyzFbGpy2fPz1mJSkqzcPY9bSpAResLE5KVD9mUdrTbPTy2fYgreWHoB",
  "key16": "4mTGaB2sfosC2SGcHp4X6tnWmqrVN2rCGL18KGcgBadtTqX4TjHvRPNjjvtUHa86GAhzRUstAe69KCcfRFD7HSVE",
  "key17": "2TvU9Xu9vRUhtehSX8D94tWmo6u7gbbvmKk8VFQQW2SNcWWxZrHNb6cWTFiap1os862EqmYDKfurpYG3d5Lg6gPh",
  "key18": "5GvV8bGWyhwGfMqVDU4TMzKCmB7zEM7LHkKvgeMtZbfupG4nkx7pKx4TezZw3fr7GkDyzNvncvwaQHUYKUsmHV5Y",
  "key19": "24cxK7EaNpWbea6MkLZKCKGRTwmQGmKdfeynHGg5NcbPLc2XiKVN5P8X5Kesxpi5niFxryRCUUVuZ3TR5dQSdbpM",
  "key20": "3qhUwUSFeXRJrzeFTX5o48vX9h3YjSynn5aenvZZT3ANU3GX7mNtHU5u82MrZneQ7iVc5QorsPAN1yhfKZkwXaAg",
  "key21": "5iDFmLq6atS13zn9CcmDsVXzLht8NqE8v2ZMDe5r88gzyM8y3bzF41LVMrQCkGNYKJLqFJDLjED1sa5xiucVtLSG",
  "key22": "4EcSzxk2om6M2ajaYqqrzSH6tZVgxTSfsPAfWqqTSjEPvaDXjnWgwQ1xR4fhMkzS7LUsbrW4TeJ6Z5Xaur2eRXYF",
  "key23": "3wXg11rAA7w3wDnPKLbNydKpHbuwWjHdh7z1S7RTdAUuPwj7RGwNsQi9CZgsgemkZ8QKhtRzYtfhSucXBp1Aw2ei",
  "key24": "5jZNkdHwbKUgoRdgXsKQCmynViqVyNwYaDPxAxUaBxiMGRDn6qbCiGQrr6X3jtTq7EJ57J5THfLHtAZziFQKSpDw",
  "key25": "3wpJGcrpM8DoSg5Bnmk1bGizc677LuaXgCK2gTGfJ48K1AADh7dyTr56DMH5XSExssiDSt5HTEk9DvZktshnzgAU",
  "key26": "5KXLF7om5EECXn5hUKLUi2V2e2zLVcHFkD8V52a6S1pG6jjUSazx8pYALRxkY3jyxDnmEM5iTptvr44CuRqHrpeF",
  "key27": "3525VrnGpDZ5TVwt6Mwwk6LR6eBBWGYxH4tQSyi45L6HpKEzTevRDdvztbo5ck5yLTYKe7KFthkEju11XCtm64ui",
  "key28": "7FWRzHa2BYeiTqW6MQQbczgRC1oDYpeUNJS5mKvrvD9xxofUqXBhKGutasMnSafyiwzdJM6qEhvS1GB9xJjTfvm",
  "key29": "54Gjd6o2j9mgQpqo2oFvD5k8RQKW2bKxHugGVs1AE5zEfyPhMUrDVgnKgoNq4D8QfrtxUqaipPmisMFxQiFeMGzM"
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
