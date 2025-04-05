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
    "63kkYtasYwWXxBHi8soA7cw389pEnpU1nWCnRnDGs2mp1hcXiCcKQyXg7h1NiBTAv8KGFXtDxYa3kUWMejR7TJPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kMF14ZxpvCj3W8KtJ7RRoF5CUHKHwKe4dTiP6VPZ1Ykfk9dh8hy97HujDC4hRCuQY4fGh4P7YEt52MnUQMYBzv",
  "key1": "4DXiauY9MAk9t4BKMYHDjLqz5bfBJxHAj8Q51yuepARVmFSR29rs1e15XrJCW8fgmFX1Qx6gzijmFANtkWqsbAiw",
  "key2": "5gEo5wP9uqwHCNGiWswWynJG27F4vmPdwWb8dZf8KJnMXPyT9Ke1aCQncSxKtwDHvPc4HUv392ZPMLwBPNpyuhmA",
  "key3": "3Y42aQRZsGVpvDy3c99eY8h44vBnoD8VdSJjFwp5V5wtCHEWQSQVtW7TyNckz2eywyvefhh4uRgHFKzPaqAdsmRY",
  "key4": "5TkvTY1aEUZKrSiz714hihJ2h39FhcoMhq8BGDTQinNgHiD82hFHAqayprEGDuSAAZ1pxo2UgfTZ5eKr8sZV6V6L",
  "key5": "3tHGuyMGcSnbVNsu44UdN6YZ2Fe2Zgg4fUrKs9iK8BnKUPspZJ5NwrRPQya3Et4uqosdemCtey2tdoxvvEyTMBEW",
  "key6": "2JnnjpMwyox9iTBfwQWGsgjkJCmtR92yM7okPWjFqW849wsdRwskqXsz7ZueAsUt21tpfBpuJbJhFfm8HLy2z2EA",
  "key7": "4ziUCGk912DMZG8HnKAYD2ijSStDkv34r1vFcQN4ufEkmcmgZzGYt36qDKiZ8qJmW1Uj5R9ztpn9sNoQRgdBwCXB",
  "key8": "2fcfqtxkSiymqPqhVT8nCMuRDzgKygeuu1jTWTDhKXXJcynZJfyKCB5VtvZAA85dKV135qsFTjBJAskeC2MKoKXL",
  "key9": "4J4UdTqQZV44mUjrvNcYhm2BYnivw6Kg3MbdYMiV2Nwn9RZcDCXrJwY2qg8V7JEkbfzQKUxZnsbtQfKHwL85dwBm",
  "key10": "3AaE5RQZMb6xXAjf9yxdAHPhSkgXg3gvGibk3CzCUsm5VFrvaQacThp36XKjXZBkN3EMkxiCy1Ny3sG4xjqXNtVt",
  "key11": "5fa3rjga8YJayvUAczqvfi6Woz3mccjcZx5BxfaBsfE6H3EKFCjgVgdA2i3iHw7WVQUBMM3dYTJG9nW31mMGp2qp",
  "key12": "2MR5MUfAwzQYGqJp9ULZeZVrxpVw1yRRBda9mis2mgNy9KFZgtXWUDxreqdAZXNZbUHkbwATGUGDNcchFcST3RyW",
  "key13": "27rhkCdsRwvyYnZ4DgcXRxCXXrg7mddcynxsBCZiUWwNiBRzxjaUahCkz45Na8f5ZqtXeZzQKYXEZUgfscUENbHE",
  "key14": "4jPEiUwaEbfyBNUwKWgW3sSFbVuCnHkzMcB8odwGewhVJUQN4fY4V6tHd2dpAD29n4K4HqUaRfJ5E6QqK5oZfXur",
  "key15": "4FsuNMwH9E6dU9XiEwLAaWjYTCLpBG4tAwRRn9CKL8A8qbcpx4kZZSUUCb9kiAKNPkgNvppE2RwXXZGrHEGQh37d",
  "key16": "32TTgRMqvJLAZAd285z96hGgR3e6bx5aMd6sfB8W493KB3MyFoDBpksw4BhFS7fHKKiLGQ6jnuxCh7hPvdf1VX7D",
  "key17": "2MzDBNkeocKqsiNAue56gXCN3xrkJcpkomrE1W8CFDmqB63GZdkheMqTMoeew5uuRwimhUWEQvGTn9gZygJSHd9V",
  "key18": "5hR35K3kgbmBjVqRXeBT1eL2FMVnAGKGuivQ2VRJwAbRzjDUvws1b1ZpZ4cFnj7gkvFNFvRcrMCeJouaSrzKw8mZ",
  "key19": "3oEEqV9oG4EqK24ASZfVQLdArYnGMdsj8Y5mTA59QBSRx6Hz9cCzsrGpisSdEPFtbVStJgof7oX4PFsuRcASSjMp",
  "key20": "2GZJL4HEHeYydZ9sGsmKijTZuWnorhaLVY5vkwAQobsFaDw9u7cp6pHDWWixtXT7MAYL2krh6Aauc6oQHkszErh4",
  "key21": "VfLii9zsEiiK83f4TE8nUNuRjBtY3aJnknYV3qaum9K4F246sT4Sdgro9whFPDSNXGSXJHJHNV8c4D7qZkCGWBm",
  "key22": "43PZQCkgdaF8q2v5QfzX96GzwD2gAddvA2B7EkvmZBkfkGKer6yUQnCHWgKT58DQ9mEWS9umHeWtgXfatA7tNU3D",
  "key23": "5G51sncwW3hEXdCKYzywHLCY7nYkiK51EG6X1y39649Cp8GH5f8mtjwwFhZdHVDfJTicJrsGdgHZtMZKN3aEArSU",
  "key24": "63fpknCNM1AncrbKUt3tBabhQLQiynkKySBRqvq6iTHSi2CAw9XdxmUeqfVZCNknUqkcMyfrExJcVcGrjbMuPrY9",
  "key25": "2j4d3GBUymYuYsJXxZ2fQsTiE9iv1rsGgrGAiLJoXnK3CTwpBwq66p8LoJ5h4SyqJaKZqLoBCd1LFtp51SGJd8v5",
  "key26": "3TqhC7afFEFKbJezvozhnqUJo4VVhF82pC4zA42wHitMCEBBHcqdoKaxtSN7oHKztPZwofwbff9aGSQGboy4dDpt",
  "key27": "2wZwwxHnqCbNP75ziJCnNPc2tWCfY7FPZUt8iKBca9xf33prEYwnEpYJgiFyqN77ycZmYZtEU7g3mu5QmBLJmMD9",
  "key28": "5Nu1jsWtS1pVz78QdpTZmVY11zT23TP1VtdAuTJHPhfaPmpsAyQjnmurNHWtnbN7e6D2wtrN99J348UDvZgNsrma",
  "key29": "xAJPXPaEXgjbsp9s5GLgs4U6TcTUfXfp8ZY9JTvPeqmEdiissxzqPakxciNahxTwxrHwZUUVP5gGkLhRmu8spNr",
  "key30": "5PcQhiRfPrPFiRxaqhJwu2AxrHV1h91QM2Dy3ipDcsT9CvQUSmwZ4ZUWDtZenfCmZ395erjdZQaZVNy9KWLx6LTK",
  "key31": "3JPAaeJi46hYXwy2yzVFwMUVmNLdsCK5NyozPUZ2MD3YfGKFoK2AgK2Qj4PFaujk9f6CuVMQYiiArnJ9HzdhuQ9Z",
  "key32": "5ukeL5Jj2BGq5w779Tg3CR5fY1vKhRqjhsLw77L9MgHBpuVKs4DDYeZS4RWqXMxaJ3s6cPQdiWABy8WqzevktjnR",
  "key33": "3TcH9GM2fmivrP1pm2RWtQFP28XZPxr5GptM9MZNxgPRVKcGh1yhqtK8Xfp4QGtkXfpHYVjKruzLrQ1NVkSzYTh6"
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
