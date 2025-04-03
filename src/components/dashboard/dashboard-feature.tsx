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
    "31MmfRnm9xksMa6cTahB6PVySnhpJY1tcE53jYvcC6z4q6xLF4ZBJBDSFCewEG7CjUCzSNNZgca4xPbqsJ57Qg4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLBtV6tWYrxPTsGVHQZLCbp27UBKJGDfemmrj3C8A6muevf3u69BJKEkpLj76Rp7j2nw1nzGDXvWZLhWiRvXyRK",
  "key1": "5WiktMZXom6n69paGh7mRRUznetgU9q3Q8E29pafiWX6bdZwjmGtTYES5P82EdCeSBfTMh6ubc7qGpJfwdrk1Xtt",
  "key2": "mfbYLKbFLif72yoGgJToZbSXenwsBKQL4eUhwoBYEzaXa2xP6ZBPv7GBpC6JcxbyQi5mNP9XcDT7nVYuzqGTQ7p",
  "key3": "XZ35gXCtigCXb5ZzJFZ59P31uCv566oh5vH3x9L9H6QQPWaaCE5Hvicks41YUdxdsmZCB7jZ6rKU8sGB79Bzp2m",
  "key4": "63nqxpmPKkRgWfA7cLyoGimTXFxZsvxiDDsSkhU4a8jpUVGc4BdP6e5KwTi7N53KntU6RU83kVmJKUdMWLBocbzn",
  "key5": "2xNvpHYWjhPNjjZaaEfGN7Rs2Dnc4HiqzffidXdN4TuDxsooZs4V6U4oBAwU7g1pru79gkBEfh1EvBWm75o7e1fj",
  "key6": "4uADpKJrFrmaJDjh5zq2jtH8tdXNmdukjw8yf75Shhv7TcDqFNYJzZfxPYba6CVeh2uCDjGvwFepWGS5bxp5noek",
  "key7": "4zxbgMUt3q8gjiAmxhFmHGWCUynm2NFvwfuGqRvzhGNzAUoihXrCAYCQZqmyCGhwgB2jT5BJSQYWh2MeatqZ4t3C",
  "key8": "4XN6YNfYhBjaVRdoXYcqqD3FPGjfkj7pHG6UYmVQyKYewZuitToW1BQpb2vXCfsazZAroH2fTTFG2usyPBdr62jE",
  "key9": "2LjfnPLwjqfKpYLZqxbwGG6ammwfnK6N6TmDW8RYwZGCbAstyKD6VRV17wJ6gMyeuGc75TGD18QdjR1tNvNQDm6U",
  "key10": "3bD8QBXLRqey4cVAfnTZsLMeXTaV6aHn7iY4s6eNnEX7KhXhf9tem2EoyqSPfGUpvwH57LAjGh9KwZJAqaNWLPp1",
  "key11": "2oBLjCuLy6MA5vUfkTqkU6AyadR4htYjAgYUD1VFtGSBPMZvc33sEXrtnNKSBS2AG8tYD7kQPDbjpAP8F7e3X3dD",
  "key12": "oMRyfAbwFk7cL7Am85YiRD39GL2TVRG7uaprxVrZNczGXQUPinFAH8mfYoPdMi8cLRoWFSwUzuaQwctYrdfrr8p",
  "key13": "2GCqfqz99k9rXqZhEzLa2HFodjQxuwVeHKQL6PeZJXFg3hf8vDwNx5GboFuiompHYT1gmxyZQAwvHBp1pAkwmdgU",
  "key14": "3pTi36uVZwA4vqiwtpyCmpqyTUKJQrPVDLCxfP8qa9uhgvxPdLs3aPaA2mUNNuxyqqhQgS6BYgCi1oiwjB3EW4Zt",
  "key15": "3RubjGAPek4NMvTX5ehsTZtmbfTHpM3HgcyzYcsRPc1m69E5e4uRFGc3NxvVf6bj2pJKTxmXTCFEaDyQXomz15i7",
  "key16": "aXAd3e1jhBD1GEnrgFXofeJxjmkRNvbM1xijVnf2oZZVX46fohvFJJZubv8u4DHGHY7LXBa8ZVWEwak7PaJhr4a",
  "key17": "4ueajU3Ao5L5MTs3qUahTg2myp353cwMezvHovwiUthB5H1hQQh2g3byebnd4VhjWxAppEaZPXFTvcCqzcAdK7Q",
  "key18": "456WzGPebjTLvnd272f9vECKFZzgTNGh7oeqFEdPURGDba6go9i6PZgYKMcKA5RPpoX9Ja8gXgYMKYvbp1fr42Ex",
  "key19": "4DnDLibW9UcAMbBJdJpqGHEEYYRYR7Jn8PUUrUAFTWX8TAGDsHYaWf3bDdB8pYpn3EjRYzvgKCft78pbutns642L",
  "key20": "26zsf2M7jQpn1yGmeyMFmtLzgZvvWEXKbwzd3AqBtUK5fHjtFSPXYhi7BfPZQCpjreGetUmriYw9N8YABcCkHErC",
  "key21": "4gh95FcQapW1WkzCQFLf2yraD2n3Bdp8SzfRkLbDfVMh3ATAYYurgKVa1yWri7WL6KSa7x26cRFwJ5yqUptuF3o1",
  "key22": "4HfU3R6NF7ZpADEtcFiH8rAUyFWW7PHpjq2W6ZqS5tGWbjpQkTtM7VMhW6Vvp5N5Mh5GNcPUgAPXThtZ8ioWGFQp",
  "key23": "9f6o15BnNo9beGvxdFHQ9z2dgMY1Qy1pSrdJTfazxZXTfujMY4L32iBZdsHrt4FtmPbX3867QKMgX5PqjEQRYp6",
  "key24": "4ZCvvGPVUw9CRFsCTGu7Qk5ZtNXoJMtjB4pfDH83xK3bdnnKeUdFufmc7dW2gEQxzY2qiu6Kee6GC51fBJT2SXEt",
  "key25": "j4Zcx6bbnimi9vEmnrt1nCofYnG4LkCLdWEs9rHnY9xsckNHuXiHD1PWSN9FgTRGWJ4QzfGQmkb8FqKuozJ6jEC",
  "key26": "4XA9iJpv914yhbQHX98TuhSVuz128pGXkbA9gY5GMwP76nCvn9hHyxPbLEswrhvwx1yAMWJyK1jjHTfa4BSbBqpH",
  "key27": "4aNuSoi3L5bJdCEZERQ9HkBCffxCVbViXGyhAZAMAd53oz8ejaxDcVNLNFbZcBtqNAS8zLSsWsVwSxsUveFHSf3z",
  "key28": "2HzfunYAMt43WLBpxj9meEKrBWgyvXr87i45e7Sfp68pbaygqFdMKUm5LWyyLmvPWEk8Sf4xQRhyJiexeokqrYTL",
  "key29": "2AB9FBvBdHZAVJvJ7VLLXKPALx29ACJxPkNEj7JVK9CLJreC44erYJvwNXArbbSj1ZzZc5CHSD6kRJKUwRqmLkGh"
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
