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
    "3f2QVnFGg2ZJc9vBamvSL8v1vtnUaqtLK9ZmbP2VpecKN7uVMjpjjgtSMFRcBTgkTvpr8wQzAxTsckdd1LTiPtew"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2dZPnPxpRhHnAh7EcsbTXfTHTwNqn2Eqcs7k9FDHxVHYiepg4aFFUTHbHVkJjHwb9jZfqRPChrifC9Lds26JBdLQ",
  "decoyKey1": "PYRshFHKW8nx1gU4S2hQLXdEAYDvKW5jJEJLPi7SgsiidgCCYhbgvVCpenjZiavBhaVZMoxEoZkVZsw12SfenYs",
  "decoyKey2": "5TFZLEXKYrqYHVLFZThwXTjuMSAgHPedNmPuUhAtX1zi6pbQZ4hHM7dBbBxVZrkU4cPsFdXrB4Hz53YeCTuZhN6W",
  "decoyKey3": "3x45dzvxNJKxYagGymJqXehmwpTLQuw2CnbLSnZMVaBdN6pP3AZTJXSCknfpvVq8vP4wQNaWGzqkR9Feb8qL96cm",
  "decoyKey4": "4CrTX8UhPmUue8bTAkRyej1CGcy8DCEZmvbQpZkEFXD7seqPSZbjKe95aZ8RZFyrzUP5GiFceCDCb1GwTzTKs2oS",
  "decoyKey5": "5g91dxqQZBCLZro4Gyxauf13M5r3ho56Ufr1iVUeKZHQzdLXDeHXMXVwdYKrXV9BeRoZfzPfjX7XBPiQssJJk8em",
  "decoyKey6": "2csP1jBf1RQqa1nYWrHTJHqHpVmiEwBCha4JRfVh8Zr3Fvv3q8e9A1eEzU6iiFgJfDJyeY4ke8wLjuQny98eUdCv",
  "decoyKey7": "5FchbaXXahKGjpqy9VqXDZKkYWdptgakmTtpYFh9keBCufYm7jVQyFmp3hqnMoaYoeLoctJ2aKFubdBFAstTAa3g",
  "decoyKey8": "3sawDcR4p6oNvBt4vJwuHV2sBTxEzswiPm3nAtJKW3qEt5bV27opW8KKA4XXfJuFuGGcGQekkdYYCrSQeNqSGSkF",
  "decoyKey9": "65tswsjM4SSpKcuwzus7MW5HDhvmC56x5vgnb5i3gDo3aHeWenU1kS5PX41CxbAaZ2vagbHvZthbEKwmom2jrt34",
  "decoyKey10": "4yRTYFW8Vs7EZnGWZpPwtGLhhrLbArE2EQXLLQfT9Ug396GcjtH6Pt4oUXCkgSw5wqZQnSM5Acdrr94MKbp1Bn8C",
  "decoyKey11": "2ZM4QXoGpKUPQasaDAkv3tV2GLc7ygMHeF1FPGgEhJGRi9WrNEQNNJXb58RfmFJS8sMY22xrVQ3UqkmvMWCHeDHQ",
  "decoyKey12": "4Ko24m2qZeUw4D5jx7yzhynVH3sHmPDiwngCHPVVY9igrSRH5By5CoLGjquDVDYfT5ZhZQFNBvs47VemmeZZoqn3",
  "decoyKey13": "5MYgSyE5LAq6Z357NGP6w5UEANu2zFzNtzF2WPqNPVpLdNpeLyZb78hTqQ7YKEqABeCfsjUbA2Y1G4K2MsAZ98pq",
  "decoyKey14": "3p9D1CwjNaupq9EKMN1qmc2eT3usuWb2QTz4pmEDRJ34cWQEve8rymc9YmPxryzqwbhLTz1N4ZJyfGD6JPvwpFQ2",
  "decoyKey15": "5jt39sr61nud8CvzWFvbzseC2VY6mwuLbvoM2JmRt87qvuAtRuDpsiSTHfqhSHwFMWB7CGSSW8ffefuCR9Dk4ERL",
  "decoyKey16": "5toQdfMSpscFufSYszTqVF9fzvCAjgg6Siyz2SR55JYgzdNUNMWDbrDxirEswQFfhHdrjtBhfLauNQNWqDUZERho",
  "decoyKey17": "2QsDme9GQrdoWBqHPg7bbuoKwPRXJ6Smn1KkvZLy2fwGGmSS5Lgf6UmzAUM8LY9roBufdQa79GupbQC11JzAtL2z",
  "decoyKey18": "2iTggFxnajU8FFZFDGrtd7EPi46HUDmu8ZAf4HJ6o1fAtncY1gM7bsMcqNLCjp8D6iGM1wRtUbo8vhza4Xz3vV7u",
  "decoyKey19": "2PNHBBC3FBJgUERa4SAxyz9uiGr3wu5urHhL5fneJZALgfWD2a2pq3X18hX9GA9LvoqbEteDYPiD33nAcDjvQa4r",
  "decoyKey20": "gktZGmgmcgvJeRwCAoJTqZJQXaKPruEywDJ4YpQLNzCzHwhW7xNU7s3SXR5WK6Zpnu4bqqUAjET4HFh7o1eTBuW",
  "decoyKey21": "5kKAhjmq4v7KVtLPtcdstSiYZXKigs5qRNiK3toJBfU31KzbCWN7Ev3JjTVFDaAHKbZrVHj7UrjPJo112KzV8Qpt",
  "decoyKey22": "qpvKGxN6JrLdYKqYGo3mAQP5pZ6CKK3h2UVE5z9Pi7EVowFaP8oUNcMuJaMUtbWWWL9TZNhyBjxDBu4G64m2U1A",
  "decoyKey23": "2rYyBx37S8qyxwmJRcoxQBUUf3M9N2f5w2GHB7iJEt48pfCZ1QNjbin5BfwoVwmsYMDTEKBrmN3dYJsgpjBaqZtX",
  "decoyKey24": "5jvos42oGYE4NN2UM8Up4UaHJMFbsPEzKoJ32DBQHGmUJCTyFMs5Aa9noJ13mjUbSHXPHarViTio8gP4zxZHz7Bt",
  "decoyKey25": "4Fd9SnXtCLoApR87LGJrFvrXWsZt16nqG5Hzs3441dfrx4Pp7dLMA7U6DmFsTNye18T9gE6M9FVghFjf2w7Dkxq6",
  "decoyKey26": "PeHrMx8B3iWtRiv8NC3THfaPkP8ch94kiqYo1xX41fspWfcmBism5jyypbbyNxvwteYqMFLNmFsuGwHFh5dXRrp",
  "decoyKey27": "1tRU8SPFxLjZ3Kc9Pz2o5K9rtDhY6uCrxE9zf8Mg1TKWRiXvjSn4wurYDnuUMBQNyAmgZz1UYaWeS2BFbC8xxB9",
  "decoyKey28": "36rdgrPDHMTbnBXy4VUbrwz6vvPGs9Wu27xPwetaoEak9zJaAmf4kennbWMD5BeSkDdrPSnrJeA19uPkUCSRTBQw",
  "decoyKey29": "fA4NQCjyTrL4Zq3CiKzxnoSDrK9BE1UVw4KQEy3Stwxupy1t8HbnVFkrpCnXAQFPQv8xY6hUDKs2W2hJemx6yf8",
  "decoyKey30": "2Hbiu2KGmgqXsPXoKkfjRRPRM9vkQzXA6Kwroe3wFpiaxzDriUk7x8V5oww2xQJh5TuHRncFz2a7PxdWz394Aqkd",
  "decoyKey31": "65dkHabVEfCeoM3Mpp3RFf24y7pSNH5mohm5PWwGPxJ9s8TdWd9hsUk5vvL1qYyicp47CJY5pNnRoJFVz6eNSubh",
  "decoyKey32": "5et8hGtTQ4s6gB8xWkn8qfHq1XJW4ZkMqszuoHJC6SMBowmVYcw2iWvWPxkq52Z3KoxvCMdmXwZ88rFioMgPhBD4",
  "decoyKey33": "4ts91ffQbj2T4DfbnMBt8P3LEmdruM7pxUkpvZMhNSgcKKtZs4grbBdj18dRLVu6omSHMRz9tNU6iZsRe8U9agVC",
  "decoyKey34": "3SAgt6GHQHux5p8FSRKqvsQWGCWiFuiyineo9tFU7BzS31L4xSxWrDJDQwgSFGJLLEiLUWc8jWcHd7jPqaTN9vNa",
  "decoyKey35": "2n1Q9SQ5oTo5xFdfea3wzi3xFVmsuG5WdTVVPxZnD4vDxDfHtcVKkRLZuyYuWWibvJers86MRhcbzDZHryfTrYcM",
  "decoyKey36": "3u1wqmP57MghbUkvfPqynp2DnD8qAaCHicA7rSYmLWBHcBTRX3ab1sSNV2dPoJ3cFpsHkz9M8ya6gdYSvULYyHMA",
  "decoyKey37": "66mgvHozGVBeCYqKVdN8Kbij9E4rafbZNi92DEtK1nPTTHzSn7XgCQHXxQgRtumAo9yctZEPpg7RzcZycgUWzWkQ",
  "decoyKey38": "42gJVbY8KYSQWAPXpNK2sUusnF2zT6TmAzfokLzuYVt5WdSUmaFwAiA7MddZGBYVmRYx5cEdPSgYFoXip39vyYUh",
  "decoyKey39": "5JRY6qRpG8hwUUBVYWYyJcqPriv6SdKUak5boWhh9QLFdF95dEcYti1NfdN6F887CfWeF8Ao3s7HD7EERYrJqi2h",
  "decoyKey40": "23nJn5j6qVFaSDf9LN7zEStASi6VEWJBFeUVASY4d4c3LpwNGivuEtrGTM48Bogzmm8CzajLJK1GfddiaauBfrVy",
  "decoyKey41": "ypSFDVPtgdZsbSXXAJFF2r5sQc7jg7areN3DrggasbB6cDM7a2v7YL9Uw2nE9oExRhEVq1azQWaaP4ZdcEZdwrT",
  "decoyKey42": "3DSwmHkfus72Y4wfXFUwR5EuKgwDMJbuzeYrFgQqtuqm2Uzi6bXHJsCLJXvxmZ4JiKCQVKjFXq5j3wpsJuJdhK9R",
  "decoyKey43": "5ZQBjwhjw14pYEsnCRoviP2jBDjGt3TVkM3vPSv8qvYJKjnDVwBuMxgVFTck8dcifzHtFFA14XFGoCHKPgRzTXVs",
  "decoyKey44": "5LnZwMu2ZC6Dk6mBGJYARBSy8w7hpqirvGVof2DRy75sg8A91UXctvkhqsLCGFpWnCTsNi5RqUuBW5sYQhDfq8zN",
  "decoyKey45": "wx3KYqMfnvqMRhZStFcYtyECcyqairM2eAHidjQFKdc47i3Myf5PQURRLL6PPSE2LGW8tP9scnASXQDzLiF6oBv",
  "decoyKey46": "62jnUt9noH3djULur2qy9FrgwpiqTeDsNc91MXfdxMwZwvHyGhZ1txbacWrcEWddACrCKbuBpaW5ueDGQk3Fvb9u",
  "decoyKey47": "5JoGRJk26t9fgZ7FHkK5pGP8gjvzXGJGGoNbpZNJ6qxGiKaHqrWYYWFowprEC6APPb3yQuaYApTNyk1LPaaZZPfx"
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