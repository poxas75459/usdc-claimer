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
    "25QM8CEZkrFMy54SynFDBvioDK25ttx6no7NtdZPZMg82WtXVYaybBmC2c3zd9jaJseLkiXu2qcz9nHHz4q5tuRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gf7wjHUenLNqRthFgKbauKHFdjvUbGaEiB9GTF86nejr1W7yF7XJXm5bvkeBdETYndLfTzyhQsWktaEwLMcduE9",
  "key1": "46Y59pV6ydDv39T5ePGqd5kZUUDcdF8QuxUd93wborepKTZcYzSexjMNRCGxGVZeFijvXd6Vvw7kLpNXbGeKjGDF",
  "key2": "56SKoUnyy4jwGwNu6CB6rvquA4JFuEUs4uTKAZFohWFAnTJyUdr3wRuZQbVuPXZJsqGsSwAkw5sKSzBNPsRUfpkt",
  "key3": "3gxVMX1oDG774M3KsTPC4iHkdkfi5sRRE4T55MDLzSTJ18erTTYbs2VtU93LqhcjzBhtmhGfVnr3rK8QeWNsFhgK",
  "key4": "2tGJWDyCW39vawBeRQNG9gRM6eLkPsYPAk9BwNUnV76vwzFVyechcvyNzxgyqPzQ7JtHkhtBqY91imyaHomSi39g",
  "key5": "DuM9Po6jxJGS5ri4evfKTUHD7dXiVGDFJMquRFMKnt1tsNYW5WMrL9g7u9ucsbWxoXBwMDNauXcQweHP5Jsyrjq",
  "key6": "271sABhPuGsasyUzjumS2zWvh7Qqw4WkjmwNU5qm9zxHWSJZ3GhGS57so5svvaTTB6UPWtXAawqiCJdToGkRnXXT",
  "key7": "Kquc56Xw1MHvtmedsFWfLQDKrnVcG56Vuap7VG949iQ7Zo9Vgp5f82ZcmW3WmSitGswupMvpCjZ8tpLb4nPAY2B",
  "key8": "iVAEQpb1NEdAi5mUDNepcrTxRCKZ3ZGJFXZS5MLce8njWXoi5Y4yoZQS5kHER9q2kq5Tb1srmwzq5KvNNT1yUr1",
  "key9": "2YTMqhwWXBX3EsdiUR4tifYzk3WBY8o4n81ozKAhJcVPF8EJx3MfeagQU3EAPyy7cwqj6GAkCYzXwTE3zeaZS3Ja",
  "key10": "2WJaTeyCs74UrtWMbVw1bkbzpXaBB7GeKcFxcsJdvxitAL18wv4bXqivEa61tDx6BdXw9DPDmqdGVV9Z4VpLn6zf",
  "key11": "2sM42wx2rq95m7zb5jXmWCEmv2xjGYozBf8aKNSZqviJtb3goFjwTxn8gSbRaKD7V2vEGZ1TC8E2AHaGoYvo59KN",
  "key12": "4fsVooxcsDYZzW1RQd3gY4xNPjatrihtq4XhSZ1QK6rmHbkh8inZqAUj1qDaeJqGysD8F6tkxQCJVZ4tr3icP3W3",
  "key13": "ndvyYQ9awAYVM6PfPqPgVNwpHA3z6LTrBhYRkqrzFcH481yAZmyLnXG2ujz8EXWdW9H6vHkke8RZf3eDbUVVYHQ",
  "key14": "4JZ7TBeBAkv9i1y25gqRfdwuCkyfUhNB6sGGEC2BN4jbSiCq6K5AB8jmBCDZi4Xq6iKWiEN2mLTRp6CT49atJLnx",
  "key15": "2f6UMFZkAz7ifQZeVrAZuLLz22ynrEfBVGfaopVo6pu84pNDks4onZPrkkeEyL9MgPV2By6x4cw4Uq25BHgEsmcm",
  "key16": "27RZuafdCvJWTSvKLUTeZK6NPN5VYA8QGd1e8nizSqiBHFr9Dh5d2GNcYy4WNfVPpamrkzc2LSXgm2FdBcyF3Kv3",
  "key17": "5WnNqZv7unQjSuLvTgVhBwW9sVYKjJMYBVBHLzJNwE5kBCrQM8QUfnVvxwr9NMdsFbZT3X7bfXDq2eLS1QxFLnu4",
  "key18": "9moQTHxZmg3GHcGSJBVbckcFVU6nLNR7UghDpQ7xg2rqkce9c7Nrum7NVCH2dqKLHbPfcm8CxWKJDqYKg1VPfHC",
  "key19": "4J7r81ZW4P8xAajWXZUf6pmRr8mAsnvXeqw1TBu8E42oCQ4jcXRxakcPCSnzz3sUESyR12GfUgvj9qGhpcSPEgJn",
  "key20": "ADizRmXdLxzrp1YotbXM11LgqvsYLoWh2ghQqaVhDvAo9ACeGZEt6sYzw1WpeVFi3SyL1vcsqWVSA1pCF4bAtTb",
  "key21": "6FoRzJLayHpY7KMbkLDXZbux2HcWG25kBJA3G8bDBGMSBrvjQiuYRPVHDFxUrfjHMoBbKfEYiu9yW8GmdqtoKoQ",
  "key22": "5hQzoqnFMjABXZrQWG2mXrhJCDrzDTbQyQPR55RUykzna75vh95dNuhqdrdW1bF9fe1XUU2EVJBddACfK84QvRGm",
  "key23": "KnWdtLvAyA1bt7LLtE2hZhjMSoyJiTLEHCo1nddV83qtWVRBhgt6TKxC1u2X6hxufZ5Y2wmc1qbfsp9TMW8qy76",
  "key24": "QYJH9UHQGEbn1CxkHqSKQeRcoJYSamTgAKFXUD9WkQwEDDVJfRoWbbjLskDkDJmFNhfHuiZVTBjNWxew97B59xr",
  "key25": "mRnj7U5g3hK87u21W5JVzFka4vQkhTYwSR5fVvGq1N9ksvn7Ebb2RbnDY1LTtqWND8BdGTuAFWomuk7Zs8jcCuV",
  "key26": "3ux5k9bvDBACaAJ7w1ksLEp6WqjY44RaXdJ8jDB6BxcYCVgbsEVGwVhiHcqVKCgRSSvj13rgSdDojoPbS3AbSe3z",
  "key27": "3v5QLC3D9cpfRaNPFf3kQUQMG1goFqzutXGxE21SdGgqigTR5Yd87FVZdMs5rdDTK4ta87e1A3mKjg5fkxjpZ9oU",
  "key28": "5jws1TsVWpXhsGLirFMAoCU9ek7H1ciwxwGeYQnk7axQ1VGkkXMsvg6T8YKZh6TisPebvVXxEiASqGAa3UjMNL9W",
  "key29": "2GQmBCG5coh3KEbuXKaPAXi4Q1ciPuVU7XW9ND5PjQFHv27EzQjZX6A6uc1u41UgLFZbUFqtkKgfoK2TMcUY9e2g",
  "key30": "5DjBhCVPU7UuBN4TJRvFcCkJcysroXHvTDLrt81fX9storu7syWR4hSTq1PX42eeLgcibtjHhsQT3W7K9TRVNLRW",
  "key31": "3wWXX2muSkWhLSove3Gnm2XWAv8NvtPggE6XjwkCY976JP4LEwRQGYZDtQkeYWtCQCFgieQAQSTsoHDmzHmwLMtQ",
  "key32": "5yREsmwiTPhoWDe3K2QjZpWiwR1hovnspAJV8PxXjBa7mVDoPmC96DtZTwzGsvVzMKKMPPGcgAp33wspGonoSjEs"
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
