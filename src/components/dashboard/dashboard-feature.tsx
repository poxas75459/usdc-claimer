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
    "2TFT98qE4H1tAvqYRbUKs13NRWi2o4kFmfGkptnnwEz3CX7hRxcg3o6qSHYUVYBEFDRJs1BqW2kWxWXPefYyfuVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvhUckbAwqAcX3DTtniXM4EetgbeHCtzt9sQa2ryJjzEep6hXncAyyPcz3f5c4UUJyZNxwHkQY2SqFywMQaehTw",
  "key1": "3r8jKyLy8NtM4QmcHQN4SWfHGiuBzNrmHJFP97AC5gGDxr7tRXPHHQKAhczCcoaPLcdafs23dZtt3iGeqYFZadqZ",
  "key2": "3YVcjfajakVcHYUFPu7HRXHbociHCPJYpuuJXVtHTDcCVTqSTQ8YZRfBAMj3jQSao2JGLVcsdf33hxU42xuNf3Ua",
  "key3": "3kPJiDxjrCd6niikx2qT9QX55sjHsFDZh499Htrm5yGawVBo3F3mkaHRNQ34ca93wXQBfrunLyCy3HepdaZBFGaw",
  "key4": "ejHBK5HYkVw5C6KPYd6yYBizpeKVuafFeykYEfxTmGQRWEdJK2HrzqH43VJw8HLHXES1qe2v7eh2SJyFoGzuLFC",
  "key5": "Zv9V8C44CDrr7ezV2bNF3Z749mgLeq1eaBrMnrkkRizSBqJJMErVnZdi3gorhj8hPH2jngwnj7ViZaQXH2eRANm",
  "key6": "2Bdvh3RA6fqkox3B6s8MoMaMJceWj4rQhvvwojfUi4P4g6qfzKzh6wnkNAmoUP65AqQrLJ6WZ6seHffBaCH7wB6T",
  "key7": "CfkX7FFQsekhKqUH49y97ZjZ9QoWaCd2ekphtG132f1iUWm4vU6xp4XWp8DsPhoJ1ewi2DZnBP2YkyQpkLC2Rfz",
  "key8": "3qFyn4AtoKHuLchFGf1UxUZM7yhENRMP244SgaDnEt5MtukunjKfn3k5eNZsPZASpYvZbb8A1WrRq3bGLzwK8e19",
  "key9": "39BtrccjmLYifS9PDBBHbipnfVSRbxy1Z8ixSqNTHeja3EkFCvokFZd8MRR926T9J3wdryjYronAKbm1LWagU6oW",
  "key10": "394yMWLuDoAGwrCGwe8Fj2jy6Cj92Sfrm4Qw2Xq4vU9dcDQU8APJfrCKjEWNkk87iymo5QQo3TVEWZa9eJ644dwA",
  "key11": "2Gp5azXNprQniu4WnjV4gW97mqshVMfyQAeKxyuN26g4QZqxaBLceVszzLyp7M39EbwnbERH28KfKKhFTAfgoNdk",
  "key12": "2QJbWn6pEvzuTiLrbNffWyzsNtfjDJ3S9haqP6UvuG7wBxS6AtypDsqtnPqpUndYbJUsH16ebrVzz4sojTf6cRNx",
  "key13": "54uJFeYKts8Z39fd49TPQouJ6smordaNJVp6ze4SHUCjetQgX3CK6UKEj9QNsHLv3r55z5ggKmcFr4ByJh9QE8X2",
  "key14": "WSNTRbs2JzcdnBdNEJTkJi4pTTeUpfVcN2ZYNRvgRzLuqYvx4NdL2wBarf4q8CUsEPEnaEqgdGBUvisX4R8cMdE",
  "key15": "128nEgLe7FMdnyZwr3iAGwvdx8WFa3TLBdYvHL4RrNUeF1yTJSGGWR4ttpqTiLv328cf1Q5T1znWaFCNC34HMy73",
  "key16": "5BKxoFzgaWAWuHJtGpCA19j3tmmXCMhni9yX9wzEJ6ipyiUCx3yvy8kZtEKBe8RUi7LkceckNRjyQ2qwF7sCkhqq",
  "key17": "jjusgVTcixZG4Cz6MMHbAeQzohxediYVbf1mcrvZzi7W2TBGNemgBFmoLttjS6Vmusc4tKqx8dT74XZH3RUnkcc",
  "key18": "2rSKDwgxrfYRrNzVJ8QNakQVv6A3Qg8n7dJfpwekaUdRbMESvfS2BW9757hWq5HdyzVCiyKK3d49Ss6G3LQoNXcc",
  "key19": "2aRmx8oYsu6XXnsL6Bh4axid1ywMw9yfbohR6HQsyimiSVVW1XmUJkFmsmJCyVkiP7WTpwsB7axe3HjvQuHuptdo",
  "key20": "5LtVcbfENbNYVSkLE9kB2Cf16EafsyqstFM5YaLiyhU8a8Bha6AkxXUUZNGfbUp8guNfE1JfLCpNwvWqLfcA2c7B",
  "key21": "4nAosYiaNK9vp7pPimCscHBWuAyViXedwE2ZzG5832ERcUY62qVWH5x2N2f5P1bEcQFZ4fE2G2pLs78DwdPxrrfu",
  "key22": "2XGwdEasVn6oXQH2qXpV2bPMkbzeocYH47roEjLHVdT3PjYWCeg14h9EHfRquJnfLTDGRBouf72vAY13a5mGT23Y",
  "key23": "p7FJ8zefJZcFwfk48xzkpncGdkrbKpuLo3Yt2Y7AaLtu5qfvLJTFJvYGk7y9Qmkv1e9Df8g61m9xeveVAk3LqAS",
  "key24": "NZryHq11KxYg3gpog3Bfpr2aHLXEyz77sT67tBCWC2AYuMdegmyEWvbQqTpndbwVPKPphaaSqpsfLcxwaGWABE4",
  "key25": "3dKUruY1Hb5mLmUUFEXt61EFD96LdNmnxtTFHMknXTG55qunP9xZFXpfUcMXcv8GMvhCRyZxZwP6J498NqFZY7sw",
  "key26": "2MMxUN7jTtNVQ8bTsYokWtvH2ioHf4ActS8ZkP4FU98Y7umkuv66yeaqxNFBkj9DMg5HMiLXR5jgnRT35oYerUCe",
  "key27": "2QTrw7ypUtiUYZkp2Sk6NZ3BWbgewAHmsuJBKeXkQx73djQg8TUsgjS2NYRuz4Q91mfnW8u2H4XZPLP8jFWVizAm",
  "key28": "4Z3vugdnsB8MS5FwGf3WVvZhMCpHnm6JJB1YuSWqc3PgMmQGMmKDFYZuwMMYn7qBbxibitQCkjEj3uo8JmU7PmMB",
  "key29": "3U4nPSLgGtZ2qs8LZKo9E7aMfUihMMYG29u9jpgeeoRXKeLftBvMhFyBJPtoZZzqPhnRMmeTRKthT468RHjMgoxk",
  "key30": "2moTk5KaenGBironTMgjpCtUv531nExQf7ioHqA6mBcKU7rhdKASmVVVConBxgBpyS7LEmaor35p2DKY4vTBFqb6",
  "key31": "4yDPc1sZxcJK24KLCL6j7tvYXUjpkDrXpEka5UNjwZ2LeaAJ3kofdt6Qyu4esy8LkeevYU72Tm6uxjFQFhVb4EEF",
  "key32": "2pCiNsbSpGb6itiZz5JFsPmB8Ro5bNDsccRpgM2myA5eja2FoTWFarp4w5x4QUa54dnju72T9y1sE1f6SHeSsbmy",
  "key33": "EQ3F6YuvYtrpQshTrov8xbnDKCcR1Xr8RZcnr5PzBWUpfwRMbSK9HmJz7gSUyFTXMSgwAGNTrHNCsoU8RKTs978",
  "key34": "3rKv5Uy8GbS6iYPZEB2xBuy2mnrgaYYMxF1Y2V9LxqPy1N2ryrY1vHggCX5VvbtQZJ77CdtbZKCqjHw6KDFwEN6T",
  "key35": "3cUJJEK9wqnqUvqwEf5bqXrfvxDdGQKkcp18UniCyfFMoHvgSkKpVuoVionokuZdGiK3tbEpYHKAG5f1UDrZpwJh",
  "key36": "4GEnF5ykAPUebUpEzUMSYRnEeY8PRYJG5bFYwDP5WtCu17Evd7ZaJodYWY95yEaGq5FwraM26YYLiN4xiyYBqhYf",
  "key37": "B9DLfZtWfPXgfoFd3BvHMZTMwkmwMidZkQVjDuddkeDXgSdCXFtBi3DM5pL5GmHgjyvKsHon2Fv623GtJCLpQFL",
  "key38": "2N1trzwwpgicPoobeVj4Ly6e5sC4bJ2WzgYQf2WSMqoQzVeyzq9XDxdkzVfnBfBEysDNefNGQvKksSnFaCh1RG26"
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
