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
    "5htVToQbiKeWntH1V6ZBZ5HUdXqyfDhBxWVpA5MdKgif6nL4RkWqVMz95F9Z7NTZ891HHhtPsYWe3ZLzp2gEuefo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZQbhcYjkuM5o9Rzwfuf8TDMA7gV4MRjJbQjPtkP8fhPczA8BjKxT7Ea5eRNu8616f8ov5BRuTfLqLzVioJrAr9",
  "key1": "45PWMprwsNECjVE8KrN5kto2wXGbo6ZvUwnk2X25n84o1PtqUM8GiCSecj37oUS9VF4E1KNUWFdKLPAqv9XGgGTw",
  "key2": "2puR3kQs3fWW1FoU7PusjneMgAbHhTAvhYsFoTAhVoSjpWo3D5RuCi8aFAFgEFXD5DsvNUGXxCpLdKhBDS6oQLfv",
  "key3": "55FYPHGmPEUt566Apxvnh7qP1fzD6J1AUSCK5RR73iV3LVQgtfWeevCC5S5E5PXUFFA8gcvWB1fjKAv3JLskXAgh",
  "key4": "2mdnV1RcxHz47fiosAWfQbrN1YWEsCg5LAxG5caCbvvkvbsPUugBbw1EfLhbnXWKSvJciVbYZrnFkXtLAenqSVHq",
  "key5": "5bfE26v9fVJz6xUP47MRUZ1YNQmeqfXE1mLms33u3Ly6kJxL9JZrhmAVAS6tpgJK5VQzxafMk5HEG4psrNCvkFnn",
  "key6": "5JB232Lmed2djDU48eCBW814dR1uCa4gx5EtqC4G93nDWr5wHdt9ZMyRTBA6MhDRZRSgnyLEoyucxe7XbkDRxkeJ",
  "key7": "2Yts4B6NvQHmwADTggTSEcZCpEy2ffCzrv5GrXpwLfAyCWGTFmcE2zqQHfLmNSWVPd48GRLRaH2r2RZjeUAxYFrT",
  "key8": "5qeJD4wAtBsu7RTxYD9GS4PRhZqGby1P4omr5mc7y7GNZ13ijBbkbRaApRmxcKz5HugyM6BcFQ8W3FDWKMnRnzcW",
  "key9": "38M9MXDBZNPRsBitQEFEwqvPWUAMe3tH15NVbfCdVMfZmAZE1Ww8trDjfStdtvBPyrPxPyCEMdDJQ1MvFsKpeFnH",
  "key10": "3jG9k2FiD9rLXC5BA87etm9wrFp8rMswvRwydcVEwCewPobQPT7iuX6g7WoGqzZFdSBVzEC8tnRpJagEedoNMy2s",
  "key11": "2849SMhCBebdzkKVbQXVDWyvxbNnjE26ZNUVCREzCWvUBFwFaNiwrg4DpVE7UAuqBdo2tdCSFNQgD1WpivE8QSwF",
  "key12": "59ceF63MDwFi8WkDxw7GS7Hx3B6UJsZWp5wq6esHJfgFXzexnVv8xgyDJ44EaZLKgF8USJupBGHh1fZ72riCvC1R",
  "key13": "2iMzYiwQgj5PT9kKbQyyD5mpXMM2C9av8mHQP8xmWLVKxmR52xsXuhviZD5Lx9TbEx1zEMBEtUcp88GgDZkpu58C",
  "key14": "5sB6TDD5gCb5xAzMER61aK1xmK9SoUPhawJQCxeNLSTBBmH2jkpNHZ9x7MgLu1FUQ7krmZrYAgPCRmkVtwj5rBDc",
  "key15": "2EMXYBX3cC49BmP3ZKTbhZBC1tqkJ49wAZKKwq2GFn3Zm84vLtCfez6YJXogKJ9pvijLZ3XEjS4NuQrZnu5CGQut",
  "key16": "5XjvC3WkNGwAF7amL1kCwQ2zVzLgxEKHVJc21BD3XnNfovJKP6H5HTzRvK33PZQ2LmYELhoZrF2apXPvctmKXYSF",
  "key17": "47ubS8QNokDUbL1vUC14kAhN9P4uj5LLw4LmMcdK76qV2ss7J1HWuaP1wFw4eDnavjZdGbyWDcRvx6pXpF8SboJk",
  "key18": "y6ozpqahswCEqZqSUQQSEVf8iPQweevMfYXpJU5GwzUkff2rn6Gix5GMdWnQdUohD4T2N9V4moE37BxZ9eSjT9j",
  "key19": "28oA573pngpvwmGnxSbqPs3f8QRpAyEukUuUTsMbivxDPn36StgJA68EpgCVbUYSAVH5YsnapRM9jGwH4gKYCame",
  "key20": "5yXiek16QZ8asou1XK1AYGfGSynAJdySsY9ZwJkbdvoSeJd4qPyruxratBJAbLnx5bXgDCxb6TdoQ9FQXXKjzpci",
  "key21": "59Y9CA4wG1PnvFnXYfArguMewhN1GaKHquKviGXyuRRMb3Fjj1jLLXmN7emNRY1myx7pZESFoBzXZPmvRuHQDvzJ",
  "key22": "5JpSp1BaBha8sxy2UsAeN1iEu2jQ4816Sg184y1Mfn6W21rPrfZyjRyNnLyJrgrshU8NtrfZdS22uMbPyPSWbYGg",
  "key23": "3cSk5p4NLXKfrCAxr687FVr9VBVJDW1zRoi12Zj3HZuywMd7gX16f62ck29SNt3Skg4vYa24CeE15iTGVKZ4RT2L",
  "key24": "3tquwAvdzVJdhfr1iCsEzf9W7wFizspXFavn8xzKX4eSpBNvnsmBejrSUxRHV5tHj5rzBcL349Qejg2RRVCrkZsk",
  "key25": "32JL6Vvd5LGTuBMQdEBm4NpURgGwW1Lwownwaonsmk5yapYMepYEWPhAPmRwUZ1WQp4k3tnwHm8t9GMLKEbkdVGJ",
  "key26": "e4xs5tBf89qZfu7HuwYd5krkW39G4LujTgdoUJ4ddW23wJgoJC1FHAgnJsrcjJ53po7kZ8WJLLoGzRkrXHmZvQ4",
  "key27": "5AupEdKzyYAsQzKZyd6FVHz9MLHGSyet3RuaBDGFHssVbSWLJ6VSojnyPRWqboDoUQPABH3LguWt7ce13JEcjA1q",
  "key28": "56ZfQFM8JZwkaayVR1cXg3ecR5v1a5BioTsLdKN9W2XUemubN8NdBhgatirhvnpYedvsogTw5jHFtfcQjePcz33T",
  "key29": "g5B5ZUdQdrfmn5JtyXtDceUnLr5Zug9xYNtypqXgDoUq7AUkhjXm9pNBCxkvVb37N2HivyvBYkWEXoZoKHDT22R",
  "key30": "2teREP8jnmSUTrQcypW9zZvyjNqs3YX66oBr2GAJNc8vobGPooUJNfMe5gQ6mPQeUsThA78Fx4qkhb4YYtJZRDc",
  "key31": "44BajjKCxSC8tSgsd6MWVBjg59UubYJugezAyF3t3G4LafJ6rsM6zByGQQY68NhwWHH5cJ3ef7fC5qBBz4yEMxG7",
  "key32": "2ZWQHAFDEuF1ACJ9SZiuSNF2J4wfMjjje1xjWFh31PQHkLEVpQ8rKUDpXQD2rCAPfdRiXpY473ueheyEYbGN8woY",
  "key33": "2STNRJdRJaRZEn5r2JaEmDPxCbAhWiNdwHLKVNZRXFxfMmJMBZpVfEiM6uv3Cq3eVCAJjccL1qaZ4pcpLKro3BAu",
  "key34": "5kBKXY1ETe35x4agxct5bGFDmLZYnVhb4PQerZKP2XrftWk9VfksG6StGMJpVk7GQPknv5f2FpsuwZ6eKPxJdnZg",
  "key35": "5hM9cPVB9DNeyvugJtzrfcja33DgALferqcDpxwcDxrtnhnFqB9RGD2tcpmvS7yYkpbhGL9WqZqNPAMEENFjYaK",
  "key36": "4ryzCrB46biX9rkEWsZvHrzRLTAJgBkDqqkZfMzazeKdSTXhpV4NeJ4ZwieQy99JpcdA3mGdWzXfEydocWxD56aC",
  "key37": "6Gep1smceuAqZRGWddDtbFpopn4BdCq9YsLfd9K5tAzDUadnXDQRY1xLS2egY94TZtcUEaqwDmqEMpNFkozv61J",
  "key38": "5GN6Br8QDMu9GqLAq939CMHpDB6EV75sXdc5tRsPVc9HuWhEVVwr1Xbztiq5m7BsxcgDjJv3FkFYYkXVvJA7hEhS",
  "key39": "4cfjvEiY1Jt9mCQLF8rfLif6sccppZmnKCJoqfQez9FB3ZyUnaK8a28f7Zt32StXdxoN2Cadqic2sJXsi7ukRn3m",
  "key40": "3f9aFddVdBecthpzL3twn8vGfyys5eaCfDEKmQbyEV8otVenzHUUiBs37GUB81cvyrbSJFqKstKpS3JJHcgb8eBV",
  "key41": "2TwVPma9SHBb7tKQhr3RFFq4fW67xsSwCKy7YqBfqrm5JVPVRtZ6i5SbCoKfAxXw4Be6tJpJ4TDLNCMhEyxqM3Ur",
  "key42": "3Ao3txogC18RCmNNtg2657wmkp5CRysjB85WDsvEuJbypbHj2wiVrX1mFMTHTYkWekCcrjqAntgqB42suVevWgEa",
  "key43": "2MLkQuigiJgJXfzYUr45tchQX62jVKYawuTuPwHm7hFhtmvRZ5m4ZuTCneUFpbGxqBqU6Kd8nNvHjKLZYg2tz6gs",
  "key44": "5neWp8mNWBHKG9rAYTcjv784yviLtq2LL3se1WrU41VBYrVGymNYkDn9hRxudPo1Ux1KVu4qnqYQjuuu7Jq4VpeA",
  "key45": "27byopHV917zB51N93J4WL62FHeptJBYSZRJFhRpmHzupKMN3D5ohSXT7G1wxyCYy8VxpSgcaZp47sDqWu9c9XBf",
  "key46": "44WGG9ybPCHKHSrAH7NJgwSAJB5u9aU3TaRXfZXdUiymvy5x8oBtFe5MbyBqmiiQKs3CoLgw2Z1NT3VKK4RcHWNz",
  "key47": "2WBZBRvHUsf5qwFqepff354XyXnCxErWXQ7xLkvDCYaQe2VpitBdadzFxHkw88A3TTNFmtigzBuRLaqfhR4cs9Pf",
  "key48": "mxJPd6RPAGHag7UMurRVbnpq4evAVieg7PuziDAs4axUKmkganSj3AJVR9L7AtMHszsJ1XXpDM6H38SaTov8civ",
  "key49": "5jznGJNBWhxfuxF5H6aVTvYkEgYYGXgAi7wPjm3h5JPmZ22uCjb31cfQ6NCcdL4QqJSxR8DHH3t1fgaf4hcVXYnT"
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
