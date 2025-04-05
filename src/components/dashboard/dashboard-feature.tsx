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
    "5PDRuTyaxT9Nksp2GYiydp36xaj4YuX5uH2uBvK5MSDTmj2UMJazPhb24p3Fn5TTriJMZY4a7XWKfsVpjTijGcRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4WJMyB5MsKg7Qgxrs2mJ5n2ikrmXeteda3gN1Mhf9Yo2g7s3rMyxtJqcrwaPZ5j9RExZK4wiXUFDnBu5SKysMk",
  "key1": "2wzS35fzXXJwTM3Jqt4FR66eaGUUfH6qw6wzi1MhYYGB93NTLQf1HxPfCJPjbC9W2UZA6uwmJDfP5CfHCHgYgQq4",
  "key2": "48LiM1H5JZFEBcpXe6WyHQryQwbYPgizqYSMPWX8jHvKFk62qoTFmESh4wN3cbNd8b5aK5jQmhtCHJW7iCCC4Xy6",
  "key3": "61mJ7cSqaF3XQa6VrCUUeYRvnxkrUMtVLfmtkzmnEzFcXnyGfNyy9HDSTrthyE5ycDS1eSBQoikAwA9n7kimbbAz",
  "key4": "2XMohpTT31vFF9UCk1pQcPGiZUkzELRLBmi6qUBMUunBH5gVDNfyEPXDoDqJwCWcrXs8UpDvD8QW8Fo3cSXYAgrz",
  "key5": "w6HLgb8ZnTio4bLxKJfAHtBGff5NrBDRX8Et4dmnnPkeVUhV3QFg22EooGQGVQTTWF92cn34xe1pvFNCuw8nmV5",
  "key6": "4QU4dBzPoNeCbGHVBoMGgZHM4P8v6RTXD2hgesdCUQHpKHGpUEaEFRY4bGB3DvWiuwBsroDZbsKF8NEqLYFhwQqM",
  "key7": "5ZFwe3PQHN6Z7TiCYPTgEBN9s5ByEcUqgaQEQDUjTgqz5VrNxvGXjsxjxwzTyvapXhPPoc8pkn9ENoYaL1P7F2K3",
  "key8": "58Hyr7ixNMzxEb2DVfXHCZKJViQFNKp5xQYpRtv1u1nxsTZniMu57LRrjg7rnzAjnjZSsgzgnmDDSjDsPgJgWtNX",
  "key9": "3SuEJBkXRTSfKrGrjC5HkNxwtr8dupcaMFYyDhiocwAjWvrGT2p4CFCK2iCEF1H68n6ZJ1AgHYZtXiyzPcx2q7Vm",
  "key10": "5cvPVJhq2AMbbVq8ottXZuyKypuHW9c96v9bG8A7MWFHEyqSzMs6wjAzzjVJWMzR7c9dTPraEyoBnuS36XixPCK",
  "key11": "3ysP864gnQ6azvJFs79o4eyJKzvBTy87MZuZZAXUaka5KJwZ1HyzV8wu5Zzx88Gi1V5CW3Y9YtCxZVCzqAm3SXdp",
  "key12": "27uGg8HrQYz86uPjGqbiYXRSZQM9Mv8knRLMoZj9xu2UdNhzMkuZHFMKinhsZCY6mqcot72WcnP5fqj3Q7paMam6",
  "key13": "42JaPC3cWv6CczkQdWd1L6gPmhxv3hFwf6Y36sXzC3Mp1byQ12giFQrgPY1mPwtQPjUW8s87ZrPuawSnYsSAN7Se",
  "key14": "5bUemMhuAMg3UzcX9MnZQ2o99hEcHkegDbnyreFN7Kd88xirQQretzAiQ9WA9Z8YSzfWcrQpkgTB1hj3eYbVFpFb",
  "key15": "34MuznQx9XMo5MULbzockUGX1JcZnQsTkJJsN3FSxehGttPjab6ykxeH8VCVhiSrFMQ6R1ugKR7ExoD79WQPnypY",
  "key16": "4ZgYdbqXX7znckFGsMzFajqFrVsVsP1q2V9MYgdfdQdbxVBVQT5uSeFaD3raMcPuL9rHR2kTJQkTtMrdFLkC5PGx",
  "key17": "3JoCLRZu4XqmasewLCMEnWGGChn2Av1NmzfGAmTheJLLSTCateWjKCbpeH9WdunpvraLVfxvK1vcUvQKCKQrizXC",
  "key18": "4tJCU5TGehMJ8Efjaz7UNo5JA6iYUXXteAoDdP2D6S9snsF6KThSgVP4LmBDv8CWp2BRDUZcxpDvakaQy9SQ43sa",
  "key19": "2JfJnUfvttn5Bjwb8B2eHoZNnNPV6vDGkkB3unywHm85tHeHg6RbYhon2p4g5JcvcS9kLDgK7UHzDhWZjkA5vgpR",
  "key20": "1qMWvhqPv1B8tDdSoJVNdRGQeeuH6HDhc1nmMHi8aiNZfZfMynnf74kdCV1eNR6NNFksidAP1dPt57GwxJ58irz",
  "key21": "2GxMaPHQ347NFSw6EtCE6yRHciaUE3hbwKf9Cc6bXtucYj225uj696EK4WQzwewyx1VTFhGVL7dLqUsndk3DYPSe",
  "key22": "2rirCQh1YZzSxHyub4AouZEPN6zc6T84e522aWk4j1YWPgySSpCbVVU5Po9PnHX22HWUZB3Ta1WgXFj4EYWGcVdi",
  "key23": "5BStcUF1B4JCHq6yF18NzfXZ3vBZcUBYgZUJFsA7tXV3Cepr2HFUgEgVrVaNrCV8nD6CKmcn2w6Z3psDbmamfPJf",
  "key24": "bqeEQKzpNGGtrNgaX75YpCnHQ8AiGPZ3oHtgCx7vVEaryw3Bu2WFDhzydWYwJNFZw59xgUUmCFbL8Uq8qcemPr4",
  "key25": "3SN3BVPSS8rJd829Qh4BZ5K1EGNWEJqdK1f5ZVBAah2CLP35frh5nbkahh1TGrMBjzWm7EUBzBF39ubEco87xJuW",
  "key26": "5KacJvBhKWfZZPUpebuEan9FkYAZLTHwnJsQJtNpaMia5EtErS3jUguSTnBPpaMQ6AyQZX89S7f3DE5VkLpZwC88"
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
