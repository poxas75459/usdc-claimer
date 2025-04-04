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
    "3BYKbyXkuFRXGqQmQQph3JLYRx7S2hPsbFngRVB3zhP5txDwHaC5G4co1hEF6paoqiniusfr844RoPDtAJ54SuMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8Z6QL5z1KyjXjjhHHKRDFwRMCfj7JNBsvkaUKAUmhg1iN5qo31n8BRHeCTughHHwisCLdEtjGG4YxFL71YQz7x",
  "key1": "2EBLritRRxziq3pMqG1DnHi8bEVNigXXPNfR13qc4VRC4HSsoyujFjC7ewd1U2JRR9k4s6Y3cWQYR1eZ3QK58hkS",
  "key2": "2UhZ7Nfc5r3rgm4eMAqNCUAehhba6dE53Ri83Wc9BcezcPbSuWFa3EFLPHsbZ9ervfK97JzASHwJm3v9yznKSjc7",
  "key3": "4XNw27cauV7WpBPAQ4BFJWYVbrkpYWYxv71qRdkT6twwt11Yh2QLAYafFUriuKNA5JqkBtEvSuiehBkEnBMDJstL",
  "key4": "45FGisYDXBzLKE1PDb6TkMhNRBzYoFBeLG67ZAns8SDPjKVZmEiBd5fbMjDaavjVJsbRmQGXycvP9KwjZ6Ne2HP3",
  "key5": "4xus3ykKxEU8MVrcZj1hx5niekdLxge6mMev457FpQBU8UXvuqHhLjLzPRKWjAcMNttJ8xuyBc3dKixQXkMvduk4",
  "key6": "4bmgYxzHsQa4cpEraK37JDF5beEWFrqEHSNhgRZXJTHe2xaXuci5A7eXx3YQAppWHg8ypkrqKpYu5j9cZ4pYRVj5",
  "key7": "2sD2D1MC2cSH89xF5eKsxBCpxMaFq4SDvwyAepJTzDqPuDS1ZiCrTTp6aZLF2qR583GxbTwhwbSKqRG3evwYSPNb",
  "key8": "2d4kd3eULuy3gQQqvjDieRB8PbmuU4wY2kfMAjgKThaKmjTgfWBoNEs22xPyfbMcajYsmALMD8kA5WdzbpZE3Xf3",
  "key9": "5c4Rc8GTutX7EzkozxZG71ScLKvUxnDRkp2ozYQicCLur9bxj14SgNi8RHiLwP229644gQZNak7jstYdC8TPxwAq",
  "key10": "3sGCjNeBzWNEXTj2vFM884MN6YgMMppWtjpTT68d7vt8cWWTxjL5HdUHZ1ZzADvdoubaN9XeK6QVyi2ynZNfiHpd",
  "key11": "5Cp8fM4esc5me4QZjY1aiW3YBMPV6bwr8Wj8yPjmwgdBbMwZVuNGtJ3dc86PXa22EvJ8ScQTA3AN2frVzNH93x32",
  "key12": "5EZM5DTCycMag1x3ioMrSaHhVMmD5jj7EtGfRAZJn87kuynsQYbZdV5nV8DaAYV14QC8hAfc4EKu6qJ17AgiWZ1L",
  "key13": "PnHNZXzTiP79KKxU6SAC9JQFA8W29dWvfFmqh8Y9s3Rz1GYQFn13LeVTN5hZvUwqNVvngpE5fJazKEK7szNBvC4",
  "key14": "38fZ8fVbCpuXQ9vD9BT7kvMHfeVDzbQsmRx4rEapzSy5Bvn8pvoenFYSao6HLuxCtyS1qkuaMgqfwmiSgaahhb8H",
  "key15": "3fbPhp41CzYiMjsQnhNjJTNXPAUFGeWzxceJwNdcYtYjgRwSfNGdRW8rPfKinnG5s1To18AWPkY17ngMhodU2ZbS",
  "key16": "5xDSULNyZzJWSWuGh9fd8idRkQQGL4L9pdLBeCAfMgrFDdhebBhPW9Xi6EwUzEeGZ5Yhr4M3shDYF8aCSzQQpniu",
  "key17": "3bJNky3x3m8HDwQtma5DiYNvtF3HFmys1SLWr89iBguFtaWZQouVCvN7Nfw8ycKMCYsiN8e6sWTCBz5mct9SyJxu",
  "key18": "W343hKTMomMJQUggcUYY6VXHc8cshgdkN4wyUuXP9C3Q3HVkAXciorUMnfTxBwuJkSjyERf5FxwqcV7vvkU8fRs",
  "key19": "2jDx7BoGC5DfTixoqfqW8mUezrxcWR4Xobm3BKyxjQUX8r1gfJPTRdsJoWPANaQLXgBZoSX9GJe5o9eWkHzKRZiS",
  "key20": "55fMHJfjACXLR8C1epE4GYygG34Qt7oWdMQwKKQAuywnmAHnYw9bF6sX2GkMkPsDY2enD8VBnEbY5bGtA2DQ2Yme",
  "key21": "3RHPKkUZqNdZuWUm7XURDeCDzw4q81N3n5GKZiEa8aJPh12MQppU1KCtids6afWNjy6pYeSVZ2e1L3rBtS19XuSm",
  "key22": "5sz6CyWgiaXWQTJX9SjtaCc6XRz9X1yPDMrRYhrN7yDX9Rs7ug53o8ee6g1vgdLDMc3tiKu68arJTWhXTZX7kDpx",
  "key23": "2UUmZoFYxD8kiXPo25SQ3NisJh3aLvt5KBDD2nY8isv679oqBJiQobfE46xaZSM3q264LgeB46q2KMnegDQW5Kzi",
  "key24": "4g7DHUWbow9pDKAkhZ6uYEjQeSSF5NmeWrXHh73vZ9tyu5QGfSmxxTvT7YbGdsxVSDVABMDzjvCfBuH8o51WZrUP",
  "key25": "WNX7ezJ1tyjVxzFpMrUAN3yiRmfDm7AaYzqb3EozbhzrG32eV4dE56LaAbmKaVrdcGbFWkgmAhctwF2PK9ZrAFW",
  "key26": "4e55n5SZUwzofYCe3zB3YUgP1gqPL8oS2u99baWBigrG8ehtxQXsdDiS5sAHV125r3TCNf4ofVrDV2y9uenLu37x",
  "key27": "ryyoJU9NKhyE9tEg8rgdiR9TLjjUZaq85og17Ypi5Boy6Z17eZpn5n9FzWRtjk1sSypomgqRimrEm4oyFvQaTvF",
  "key28": "3oPNrN1f14JXRg5PrfdCWcF1EJGQGHo51JAwu1PsHx8r1MPaM17tMnZmdzbFwmgjF9JBeE8kyuwM7JC664Q69rrN",
  "key29": "42XLhin4QZqKeceuzPCpw7AroEtc78GKLzVJxNJG7apSfVmvKiRyqFXSYkQU3CH3bnNTJa96vtxrfJUgVpUHGAbp",
  "key30": "4UxTuJ2qBECQ7W3zLjGeU8YskTXTXooCh9GZPNiNGy8VPnF6q87Wj7a9qwBcDQCmp5DusWiCX8BE5RemYfRbK9qa",
  "key31": "f656tL2HHuzvEapFkygd1m1dgjac1dhTnSwhhzWrCcJknsGbRxqZiSyu6wDMurL2nxgPBMWMuAKiy8eXdCYGRCA",
  "key32": "4Vuoq7P2iNBYRZweZRedpLYm826qtKeCSe6qpSwqPkHHMtgWiYDtdqFhnD1aPC6CLtGQFcJ3aqTGM7Uyk1QXLSz4",
  "key33": "yEwpanaiF4rxYbR3adGYh6kz9EwpTY98zUzBLGALqxo51CC47YtN7BmoTqvauM8TGnwoyVjtJrTV7vku6znNtjC",
  "key34": "4RtqG1o9uXr8YymRR2cGhojq3wiiCjdZQwYKjq9Zu5ctf9ypKWJwYqfLB5aWiK6CpZ5BggHiM5mdcbmujcYXpm9C",
  "key35": "3ytzPsJpcQKottesDsj2jiREpwY9GDBCQF76cscSEejuCnfNDR6nvyz486xNA1bERgGDssMMvcLhTyMwKZ1oXnSE",
  "key36": "5SFgHMBoPYNAj4sZPeSBwFjhrUyKzKFKsA9aV6UPT3sNBsDexr19uPifcuFUs7YpLbaK6oTQqvZaxRTwLbWRUcNT",
  "key37": "4goPaWp6bmyxHgcaDvwA8pxJEnnc6c8W2sWSxq9k1S4AdrCJKJqZ4w1bYTB7vf5GDtQjzzKQt8DWnWGKfC3g7j2C",
  "key38": "4i3zwJrYCPQJ2SPzYqidTWJGgKwik3Qzkeig6GPennfnwEFvr9ZvauAQK5VKMBG3Yf7C9NAikQ4T8Q1bP6gThGaY",
  "key39": "2WULxBGwv4Y6p9EdyGPdzGMT96ENqiAj97iEBnymvs5NtdaU1w9srpbN9FGzsVk69GMjQwCjg3w3Tjtv33PaLN8Q"
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
