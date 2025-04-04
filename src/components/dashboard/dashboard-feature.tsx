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
    "3KaUMihTRsSMYQTc4sXjTthRnmBdntKicjvAM4D8YpocoDz1w5pZ3u7D2DzK3QHbn1HkGQWXAg8gQgVLbTjruVmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PiB56MEWzqFZdu7iqUrEMTBHbEuFKPRNUNH9kJ4nSPWm9E25eAqAUvKt9vtE5eAX59BTmGtFkmLaXK54pxFq1Kz",
  "key1": "jHL2Aom4Qf1y8qShC8zTnXw89exRQ4GxS6AkQTpArMHmhQTnbsPfwZdesU1q8aN2HR3Qbsri3aMAbsQjZHXmuZd",
  "key2": "39YsQ5smLQzNkiA7dN3eFp7YJGVUAU6xaz7VJRSniAJ2XyvRg7PL4yhUqyXadueozNw7snyiuTQ4Mz2Y2ndpazBn",
  "key3": "4Fd1TmGBcC3FsTKD398rj3nvJy4yoS24WG9s966NaUhtWSu6g2UZDTqfWCykNSjwhv7oaBqa2y8L5RNTrQTUifym",
  "key4": "53YSFJhwjyV22hPCcjU7ht5S1yLeL57gTraESi5NFmnpt3XkUfHqHyGYKdteFgHshBKKYe9trtA2DxPrnybQ6W4p",
  "key5": "5LYyPaGBTh7X8cDiKeyy7rNynLFkwNEJT6GdPxGYgrfpM4u8ftU3F3YpfaJ7dUCJxZ3C95UPusVn7dxjLp12TPcK",
  "key6": "GoyeKA7tH29PJu4sp1Dqp8RfjYBrKXwrGqM5xt932UTsssHMVffcGv7TNXb8YKUBmryk2VTWnTDVebEhwefzBPh",
  "key7": "2FYQChzonqs2FZTdqDDZiA5rDhkZ9v3MfnX3tdB4R3Zs4z8mtEJNz9wsisVjDhcthFpRxX35RfQBdypzdMFRYd8P",
  "key8": "5JMM37utpFpkjauAgJ8eZTo7NAW1NiSGmX3TCosCgAPA45RMVNCQZ6wmPnJwx9i4w2aVERuAHy5zwES3hSpFTBp2",
  "key9": "5ZA6m5SUPCc9pSqoRxYpjVYzfJqTFtgy1NRvJTVsWzBcjs7e7vTuSXgVgYUbxTGqKivcBnzZueYp1zarDM28LufS",
  "key10": "mepQgFbTq1wRd5uAQNTHCDAg6Vj6q4eCHRgtUSFJGDjwgSeRR2wNSFa3vzRj41DU9avcvPBTKnX7UXhYKwFpB4Z",
  "key11": "4VEcw5tsAmgNuH1TEYFLGooS4Lv2mxtvpKhkaHWCQBpyQBFMfngVPB6Vbip3jsCGdTdK79SnnHSaLy9MM9XJ2kuK",
  "key12": "3ysoknYaHNifbx1K6AHG87aefUmZDDYorKEW4bdEZqBAMn2aSubmrpXbJhmJ7Svg4B5s88H6TVyHvuXJEseTPxfr",
  "key13": "yGgnAZUiyBTGbkb25ZohS2MTvVvyZkFeBZw6YL5zUfB7FbjnMAKQ2QshMZ8mbJfnkAxoBak1C6yPHGgCVEy5rNY",
  "key14": "2rcL35J8Be1rGZnJVpbLn25bUiWEUCEgCpiw8KEhRiwu1m9CWVR9QM2te9YVkpZmxpCb1vZjnKN24TfSpiFmT2Ny",
  "key15": "5f4165CuLToUSG6xBpWYg469QE9znQB4tynvCBwb15iuGRSiGKUi6ccb7GHxKPQm76wn9GYoUPCNEE1qTzGQSPqo",
  "key16": "3YkPo11NJ7DntrbggNCN5RLu1bQ4RFkU4ZqDWYi795FNk9iVcsuLqv7PT9PsvM79e4JsCrhVtwm9gg2EZabG7njV",
  "key17": "5yPYUAen3mZG8z4N1BkC7ee27Nfxf9xxNDoRTMvatVEemWuiGeqM649FHfp3Y2k4cwjiM7Up1aWSgVQdhHwm4wur",
  "key18": "347hrt9ex3vqFzpWYgggDPUJd98qTMpHMe1HxcLDJihx9QD5tGmppT9NqbRjpMqZ251vRrsKHGSQG3ApAH6rH671",
  "key19": "55TaP8yx7egRTRdN5R44kwgz8uqJepSBJ1nYam9cV7jUao8wFzBoPFzJgJfUKuHuadtmb114WctMxzyouRZ5XdXK",
  "key20": "31mjeVeF2MjaKrUPP6WsmjJWizq714vwA4MwffMNBTRcL9fAm79QP6y9aKpKvFMCE6x1GULeUZ69hYryeMjtUkjR",
  "key21": "2EVnsYFcdk4pUbJMbNMw3PsYZQuVEawUnKHSGKPBSHydLhvUXAcvENVM5Bo9Ng2BnrzoJ3GkLCSsgkakQ8fE6onF",
  "key22": "yzkCPfacWje5nzLc7WM4Aq6173bLtHuia1zTC4cSXGaUh9FB49VtGdJ7g6btpWhEmHVMDZj4Fe4JyyeKoTmDcgc",
  "key23": "4YxJFXWZhMXtVquFs7dckxhBjqejP152gSXLwrzCBnUuGe4HnrmGFbTyhMBQFNqBAqBF2cdJzRjQ343qAvvCwxSC",
  "key24": "4c7NzyRBxACKdsn9P3VQY6XJPmGFCa2CWQ58SQWVezCivC6556DZSASUGBszuoW1tr2tnZy6cxy1wsvNEd65RSBF",
  "key25": "4qJbu7sfMVzRvQmnRTMxonQ1hJnuXCLN5JpJ4oyQvjeBsXsV65TjcCXJVFRXk3fK4vbUWasqCQG82BmV99AiATRF",
  "key26": "3Khe1SVwTA196xi3BoJoyqVs9KZoMveAgj35A9xNnuTetqPdEd2VwNw4L7PrV1KxzHRBJVnjovsyhupjHsDCQ8Vj",
  "key27": "442tXtAHoLZBeoHfGgM5FdzKu3p3LK2rjXjJYRu4HWrihjzujBFXgtmJF6Bzvnvbq2dzDiz8uBYmyKpUnN1o2q3G",
  "key28": "2toxmMwPYNDR6AiGHmdXFrWK4QZ6fccJ7kN1yCEUMSwvgyfNKVXKavQ9CsGNzTABJq2L5kZnpMXyjXMTpU3H326H",
  "key29": "4MyBCfAwBkevYRbc38TKpp565HSRdsarEbbAnqjTy6eQi6iXqPmV5VDKUcjFYuPnDTKFbJhx7MguW3VTBBRwcDgt",
  "key30": "3YW9gffHF8viEcJjEHCSovFhgbo1SeGSWF1NwhvqBLqqByXJJ7AHtsn7XYeMmh23qY6Rmw5UCcGQh1MyjdzP3f4Q",
  "key31": "2823eeGBYKxDXTZ1sX8rv5Uu182WbwTkCU6ZpuUeTCBdVcdjxHePFFvJa7n6gm7kVoVSqesmJeuVx4daqHqh8ztx",
  "key32": "SMjHsRH9AZbzmRe9yUcoiTxrTTnXkMF3zVMtcE3xz6cCSsS96NBzwidbE5Aa5KuJC78NUCKncLiFLWM1TiB3i2p",
  "key33": "2n1U1URAp3f4biG6raYdnG2TH9T5tEdoHSN9xQvzzpUcjGQMd1gxH4tSdRRMEJxDDkGowDsf6fxuvBPcgQedpHC1",
  "key34": "24Fobvzsc5v8qsbBhTyzYc1W5dAuVFkcDawsL4KoWFkzfY9c3jAP6B1xRKWmyrbfX5Q5L4jXw5XcQo4oLq1EXaZP",
  "key35": "3dagn54CZGf12XsgwosoT4i9zeBqiRDukP4rdJCJ1SdmgNZvFPjhDbRjieW63P2uD3ij83PhoYp4gJPjt7Dbwf6V",
  "key36": "4oEE3KH2TqG1ovQiuJkSdPPyW445qW5gmyzr1h2eunjfDdtsFxZCqf5NFBua648Udgjuhi6AWqEXapdKvo2qdJRr",
  "key37": "3ce7tvSwTrMzYVfAnQRBwUbL3g1tDbu8PZrqzpJ67vXmnosCAdm3XdDHyZa1oGxPcJwF1pGJ6goaixd6P5aVUCuC",
  "key38": "53Xo4yrjNmkSUuzJp3fHCU5qL5N7csrU7nTkERZrkEPXLoxa57L9cvrpbDzWSAzNANs3HiWVPn3GZjRopvAdkFsz",
  "key39": "33Dr7pUkHXh6u9DRE1Fk1xdv72u2zKVpSWuoPQd5yVEi2yoznPQ9cdXuJ1zVfgFT57DKTzbxe9E6Ljjf4uQB1AF1",
  "key40": "zNqumEdzcWhSq64HdSeQh5ea54TWYJqxLW1MhVyVeWwMmHGiDb2e4HgJHiqbdnG7t9eoK5M2e8WarF3feXWxuxs",
  "key41": "4FYwNKHoVRz5QA31otFZ1krS7Xnt9LjGRZDBVjBkyPwEyegQaHBEV7KYjrT8XijUed4LRg3NYLFwddGnkkY8cyyg"
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
