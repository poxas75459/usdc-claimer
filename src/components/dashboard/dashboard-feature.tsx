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
    "3MZjpVDu5vnFunb14TSjcv1GALN7ptJVchfDYJqFSqHL2wChyRX8VcTzf4T6UtmL6E3GfYqLvuZwUBhK3EyTesdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53GbQTkCN5iNSauqaeTuNi5cE9qkHTb7DG5GYU4aHCsLse5odRvYAXrK4pgqVKFhjN1DYSRwmVU36Ff1fP6UPxVY",
  "key1": "4YXDniqD6EBEALax4njaaMbqfXwNuUv9bgnRFG2C2dsYT7cB7dwe1miyMN4Qia6ivYQTKZeQomhsP65ta2iqVTeh",
  "key2": "bPHfmStnEuD3tuBVFdCcNAjnQA6UbVu55ZhfVT7aGzkqJGNns3d9nCgLQVsnRBJUS2J6J9GQNctbSTCuCCPD9sx",
  "key3": "5zWrPRE8rhkN8XAzYb2ixokJ7yvxZQhWmFL7XcwtCjmaezbHAC7sJqbxzfc96WSfRdVCH4nnrJGyA7xnVaaUeRCQ",
  "key4": "4ZGYSSwhX99jqWUvnb9MgHYcobcWxH4t5eqn3nxtfET2PUXvnFA2y6Ln1EtEfmYodDUXogFT7xgoe9gzeVNNBqki",
  "key5": "3LnhW5HarJDSaVhL8hsLVrRiKw6WUGadR2XienoQXgJbMW1E3tTd1nbP2DoHkPtLpHvFvTHkumfx4Rv1R7NF1ZT4",
  "key6": "4mgGehq9VZmBPZkb6bWEMJbx9DdEVe9n5HQy382siV61pMJXnG8oHzxG61jVMctErmwTMnS4zukVj9sWuW2pe2Uq",
  "key7": "56dxXg6YHzFDzeaFBYS3KehRhcEsk9rsjuAiEv3xeuvzkBtCcb2obMpmxcnW31mk5twDUUBYoehZGe38F9pWx9Ng",
  "key8": "2YQqTZ8UTJw8bMre5sbdkfwrwQXivosjQzD5pBTrrr4Yodm2GqrsQYvWGAxqhHV1Qz3v9Mio376kYP22SXLqcJja",
  "key9": "3McJ6EQjhBFSvneg4NtZK82ruJKY9DHJuUEru3xDsARXnCKdLZUd85b4za5mzHQnZ7HPo4XMf57DxRrvb52Etm5z",
  "key10": "3PToTvgr6bXuF7FBPpSTsVYXr3Dj2nwRPuUxJXWNkEh6J2zNwrJwcw1RG1jQmwv74ZY2EwpQFsVzWLpDvEsk2ZE3",
  "key11": "4MBY5vVckkB7bKEC9K8NeTyjpaehnJhsDSVKYHnB8FVqQSXW9xNpSTC8uNfcGS1CP2eDxjGZ8Zv98QXTAwh3MuQy",
  "key12": "32Qtf4tjERf2j8uurnwhtfiLhM9HaKVbuALkUfPWK2fJERC7tSizhVfkPzQWWLJYGzSsVhBrwdyDHhfkyM1rpY5f",
  "key13": "3qn3GTazA1Er8oAW5PjHR7rsEhfH4oVxL2CYF5Dk9g6BE1pLt5zbkUZSoEWbKaWMZbzeuWMnXUdc34wNozhWZUka",
  "key14": "4H3obiZtJ9xD9RgGFc6XpeThLFUBf6eVe7QacNc15wQ6Sw2ow6N1EXZ5LNoD2pZ4AU8CiSwNKuwKWckMyedX4X4P",
  "key15": "4W3kAB7JpVLxdDUgp9AawFTCThbGBZ3c8zuoFDp4iASaijJKZ1SbqvBuY9YhufuPPAhFoNLJ5Ba1haGpkt9Lu7eV",
  "key16": "2dVJeENB9MccKedbjN6PRM3a4hviybQLyQNP6iKiSXDJFQGEzASDEH9J4HAmCxX1Zgsc9LBYtukBaYhmTuaBpe8q",
  "key17": "63GRtN2DVT61kNgV8uxKYbHabynByPCk9ynjTjxEbqD4tm7iW4SqGbGMtHbNLh4ZECANB34yZP5YDD4jzden35TM",
  "key18": "pPZfCQNqMsUFQGN2iocMdj6zFERGdxisUooqAiqh8EHVBZLuk95ssfRPueEMZEE5AQ51Cg7Nsvr39hSuru8jq5d",
  "key19": "51dAFCcKNojgurHVAPuizMtZ13rnMhCSxhWfPqrfRDBBrsiPbKBv22FmK5JGimKLXb7Zf2oWe1aYGgpoPuMJx1BW",
  "key20": "2sUmm9upBABuk6FVGGvYEwrFBU6NCmefb4KGdvHRZwuGj69TRPM5QaZ4ra32iKQCHFW4dYDF6xAT3AgwnEHWHPTP",
  "key21": "3Zgga2ccHgDNjSQH4CjMuivZ3BogVPQUVibAYR1y4eBf6xX3LcSe8cqb6KnLm9adyA56hxcgWa1pwYy96ayP9Y5c",
  "key22": "5qRWHKeWyEdWTbSoq6wz1RSEgrFzbjxQLu6zq2eUpW6XXwxS6mytJE6YriTKvWM8x8fzF6neKPURBWJN2RoguCb1",
  "key23": "2JM8BJDmwh1vcJSUCxC141SLbrhAPK6kbXuNfKBnBZ3DDSCVuAsJUQsobb3HF4SVxcSRafCbKiiu4UiMguUMQdD7",
  "key24": "649WbEJBcLGK3T6iVBXPj1NDvGyWfS53eBFXbLJ2rgi3R2mTYAxQtLFGKFWbWQmaUGMoQBU9E5CR6RAo9fNk4d5U",
  "key25": "2BevmJmVwJHY1mhwRkxvz2GfHQLN8xGk4sG82myv7dZ1n2F8z7L32reAwua6naCTswVyH9BWLjta3oANH5kGRNsM",
  "key26": "2q91gbbf5LhMXLy18YM2ps47yii5rDENftVPu5Gzzzd8SQtjiCT1RtfzTeNxAWYEn7RYN3s3jmCav8PzCbbzcDcR",
  "key27": "4oPQgRJDDznS2RsDmyw1Rb8RjzgV5BMMMthd65Qg7ydJNeUAm9tABaeswHG69KUX86PS4MjU2nxFXRRudTZPjZBb",
  "key28": "8bCYMgwEutRntNZYrD7qWFYjRBXRQSBbzstNFQr5EjZtMPRK2RWSzxBgFXzGXF5x6B8JJvTvdhZRkKKGcwrYrzm"
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
