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
    "3myvC1KGwSTzP2PaTMSZtjcLHx3ZsPLJ89C22J3JjGWgzfnn1PDLHN6kMxsBVqkGdpb1szBnSW8FuLozjaRtGoUJ"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4K1JP8H4xFaBUjR6MDozLcDXfERdL64wtcxPbnVqPXSXjBaDDRTmKA6Gz6aTnWbsMj925koGRTrzrVaxnfiwbRuN",
  "decoyKey1": "5W5f2YwmvUTJbcjPA4tz9rRo8Lybb11ws1uQuvqfUmRnSh39T5gEcwFhsMk2qkBP7DSPNhvA4RyQcLqtXMTnPqY1",
  "decoyKey2": "3DEj1geifA2VRTfLu78eXbkHYr3F5BKhfbC5rVR7kEVDD1uo9GCsFtQrALjzyWpdk3rABBa6HBXyaDt2inBR6PZK",
  "decoyKey3": "2vAM5mDMxbiUMuknCzh8dXx1jxUCNA2MhtKMcu3iKGZsW8KebMwYeMuseFKk3GwQAtMxfcogKVexvak6dviQbzG5",
  "decoyKey4": "5hDtA3AHHmUT994PLoUivunDagptLkbvX9CWL363ZSvQBiCPSRLu3kNqsN2JsiJjebsscHgMhbu26H6dehdUW1eT",
  "decoyKey5": "63kuFea6PfVRYoqxY3WjQ7bWuefygmxSGG9tuxX9JZbq359t8tBMgf5eoV6dP315ZecV7gnNbjVYTsQGBSLvsL9Z",
  "decoyKey6": "2nZwsMvgzNBQTnZr7mHJSDGX94dwa4ZEUgiPo9KqUBLgxBZhTBwBYiCMAxpeuUVFqVpy3v24pTvCFQr71BUtQSsw",
  "decoyKey7": "2Ephne4YW1kzsxq6iJQjBdNEQFYpA4q9vLVvieq4kvPLVT6ZfWu5eigqWcRqRTmEodHip9d56AMzSGhNwRMLTbcN",
  "decoyKey8": "2XPymFahc6sK4WhxEcHxP3fFyoQsHANnY4hwN8NBbqR56j4zCxFpcDTqVt4YUwfvDtVmjovzDQhaEb14pXmcYDjN",
  "decoyKey9": "4GZrMr4XBWSu9o7qyfZs15hfYuvzJRqDX5nD2m3gKjjVLoMv8FYmXHtwByZFqxKSAHJgvTQAMmuK5kbjtsDokYne",
  "decoyKey10": "5PZTBVAtNwxRXzAKcAZdxdek6efck4nt1VyQDz5b3jjuse8d5Nrs69cCkHr7bRjmq6Mrdnboiik1gTYC76B4pdkV",
  "decoyKey11": "2QDJfJ9rn8qZKbFbi9sZBiczXYLxF3pq67p9PzWi3HNPBJvpfeGsgk3Tw7QY8LWSRkBvLwupLUswXtgx13uUdNJY",
  "decoyKey12": "2DuK7SifwSD3X1QDzGeyoAhVMi95Ytwjj1zRSZQzyZcGotnrKRqsDgXymePsXfNSQnRN19DFHUhYzrCwUq12y54d",
  "decoyKey13": "33NHPWT3Czkcw5kV8DvGZoAYsTRj9qXUdxL7jR33EWXJFK7pfdAxXDuNZ78u5hoF3WLd6LBhxGtidavzhRybgRp9",
  "decoyKey14": "4Usd7RVLAEpw8ZKKt5zvdt8XQVCLynDeWq9n9FWMUeEvS2KLJUAKnQhKeVwGhg6F83KAce7FwKkvhWLhXj93Ti1p",
  "decoyKey15": "2ydTwU7U3eYagUdBZTvSBFnEBqii75z5ssbbL52A4JxVv9gbegr2B1ynBkQxfCMvtHgD7voSWf7UihZodCLB8mUQ",
  "decoyKey16": "5ppT7S9MDAKWZMHv6CCMTvhGgYZiUYDTq2T7MWsiD5aFtUDf5vnS2AkdF97gz6sZW42PoSqjxBDZBdsgpK4CN4Xg",
  "decoyKey17": "4MZYhNwL5w6MkwNUpPFZQeMfVzSy1YgMvdsRduXfV6eTGf45eSCNMEAX1XacnhhbhrtKrzFBhSefsByoiFcz2Jpc",
  "decoyKey18": "2c8oFcx62ezfdeXjC7CX4xh52eZdp62fNpRT3eRLj4tJ6BNrsz3zAGs9T4HoTkUXEVzxmPGQ5NjvSJbNgKmRMhAX",
  "decoyKey19": "2EjoGQJht92vJDsTTUDWXELFJQa6yY649Nbm8ye2yFe796rmhn5coYfsLcCuwfoT7XrFTtPut754GGjZxvrFCsHe",
  "decoyKey20": "PB7xYUgvbKuLvG8yYk2nA1PR7TikH4VuuDPRpWT2vYwEwvZwjAM3kb2rGpFFWvEnx1eNGbicnVVwkThdZvx9GaN",
  "decoyKey21": "5QKfSo3QRL5yKPH7EcTW7DkT24VNfTfn2hTsagSeZBPs8zJ4WXTHPbnB8xn8VdsQJXhkbGASagtRgrvBJdyJEftk",
  "decoyKey22": "5pV9VZ7N22ppnmtJSAnhRsKSsCWGEX9xGQa17KyKrpMsGqF1QVpc7CGHRTmufPfoXpo5kTqazwKhioayZd53Qu6m",
  "decoyKey23": "2Ht2C2ForpLnVn49A4Qr2jzRdz9QjNznQpjZvzLKG25ndfMW5YEMH41GspkqHmYgeGx46JCnQChyPtRUYT81xFN1",
  "decoyKey24": "57uYiwAAssRFFAx7PFyBed2QN3U2qN6qrPYyP5UskTjmyRHLhRAJjW3gF8TVHfRaajGTW5aw9nejgUWKsTxALXni",
  "decoyKey25": "53ZNiUiGKjQ9K3V21Z23e5t6Z6sK2SH9NFMdKMFo6g6Ze8mUPnVo8mvnGwCeXh2wwWXfz1rxbcTVHj4QVr7CpbUp",
  "decoyKey26": "4NPDQq1QT6ivTodRnaQaHZXJgg2PV7wqANh7CE5GasCKjTVbVbphaf7J4bafEvTVwNsGUcbXPrJ3QcXfMQpjdK82",
  "decoyKey27": "5t6SpDFsWeUxNGrczhighMC11PGE3x31hd8PvZ2pjDP8GFKgRQfuLY97su4DLvMxKgpm6rVnjQS76TnUeS4dPN5j",
  "decoyKey28": "3oD6btuYdsS6MqrgepSsz3kaUwn5e9HbtUj64kJjpSUjUAe28q2NmK4roDiZmoa3fEG3ujjrc4UtwwM4BkQcpKQj",
  "decoyKey29": "5sexVeKBBAX954hbbNpqmuYPcnoogMqq5KQjqwQ5nM4Zt2tRgm6fiX5QWdd67tDvA82bHEGF9SSdN7LBn5vRFRMy",
  "decoyKey30": "5MYiVvemTAgHrqCuZTqZSwQ5g8T8uEyTzqzm2jqJ5b2gKULcTxYKyGx5LGEm1QgAzFULnu7vDMU9FiP3WJf7ynr",
  "decoyKey31": "4DZs9iLsDstNzVzaB89VJgxCHSqLhSkKEhk3GEyZuRtA3Wffofq48JhU5vgNstht7uVEmY4RX7RgqUDkcC4pP9f9",
  "decoyKey32": "6oU6bXWT97dEstNubM4RUnNnEMiH5t9KCECHVmUjQppQcfvPQjzYsNpgzAp9VKAvSGNbzkkCQkEVwzqbfpAtvdV",
  "decoyKey33": "5AdR9ESMzTa1GLwFTE9eavu6TTW1vsVi2J54Ak9hrCpk2m4oDyRqheLo1yhyjhJhNawMgszNcxoGekwJ129QLFEb",
  "decoyKey34": "4zdPpDN3ESFvLjuvYTH8FEDBE4GwFEPbkBi3aadumTY5WTYx3pb9jy1TAkfemEoybzfLb8x7zZ8P7agXVtzju4h4",
  "decoyKey35": "4zBysZBfzxrbzZRw4gRaji1mtLv2vrvcPr9BHnnTQJWCwpPMVYKU6RrwecbdRVRHXSxtFjq6zod8M53UVGbd7HmQ",
  "decoyKey36": "KkPP9CXK2LKt4AP5LYMHc64Bq2AHvmP9iwPPnfntHg89fLkHx1aVkwD6RPksxw2XgLDhEdoh5qKMWwDQeRSjPJf",
  "decoyKey37": "3gJY7tGckCmwfNGfzQ5Er7EoDrUPmvtLKM2uVRY1oYozxGdT3EUH2C4pQRugY7Ps95TcEx9w858ByacexdD5RmYP",
  "decoyKey38": "2iBaoterEX98UUX9tGhzxwPvYV1aWowbqwgtRjKV4Hb3We3S8pXBSFcFJLEorXxH1E2phzY4cnbg9xb8w6UJUPeS",
  "decoyKey39": "NETrsgkURo3CjRpwKqTXVDWYyvWtKE2GQRzNqmps2Vh9qtHijGZzsSAEkoq6H7xZcgRCC2yA3dH1CWtSaEN4DwE",
  "decoyKey40": "3FDnksLWvZ9KaQiuH3U2HEE3i6qWQgkqdch4EobakZoB2DK2nauvfuwvf4ncwtPi4LzPLDXKrJk8p2Gu3yQxG8E6",
  "decoyKey41": "3Nkhc33PbDrEodxeq895HXgjmnm9RrsD3cp9NKUiWHL21jb6UhucWmNJd4vFdpkpcoAmAwq5g6icwKq9DerAatad",
  "decoyKey42": "ayH3Q8z8cYYzpHiqX8UF9j15puVLPeAD7XV2J8GwgS3tFhJFaPQUQvF1eAGMZRrj2iFRnyAboAbf6R9zfE6JX2u",
  "decoyKey43": "53UH58tzcu7LjCxms7kQx86VaRXvu432C2vBgdz2uKE9V1CduW23sqQF5We6RYJXeBocrxruFU8o1iy7o5EEHYkE",
  "decoyKey44": "Ks9zaJ9gbP7NM7j1ZnNNhM4pK4rcMwwxCzHV17WSXUakaBxjxHYfcgpSxh3QSk3BevykgSfKoA31xiBqzY6yh64",
  "decoyKey45": "3BG7HeoyiDEvrP3egaiC1vsGdvTbMe7fWbMiNvkYdh466zqFsMdjARVhT7PMwg6Lb74UWRsVNZBc5sCXf7EDBW7T",
  "decoyKey46": "3wArNTFFFJEjgKuHUqivb2HWxafrq64Z2yYUeAfK2C1zwdiPvEkRkker99XUmU16uMxjT4gdshwuQe7jQdKiQiCh",
  "decoyKey47": "4SdSiL3zf6VJwSEUewoMwM27ietf5WbFh2i89k9Gr9LizaeCM81NypH61peNCBBUtVyB8yXgnb6dZC98ZMuEWaFx",
  "decoyKey48": "xNDs8caFFc7FotYW8AhmkP4D2EN51A9qkJDCLgv1wD4Lys3oQNqkjHL6ZSHaUuqJfmDxrmYeoE4NAsMN9ftDeGz",
  "decoyKey49": "5NtWQNBfp61oBbYV22RWqYwvaFRNEqAr4vWQceG4j21pFoU6zZaNW94kAXRyeSWWqC8Vh36KFBcVy9oCd63z2CnK"
};
// DECOY_KEYS_END
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