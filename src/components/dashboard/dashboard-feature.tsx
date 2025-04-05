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
    "2LmEFjtuEVqWRm84HrgLZKHVSuEJg8THfTzLyPYHN2Uw4BqN4GQUv8fpT5dTaV2rwcnj8WcMU3jg9gdxMMv4nQpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxjfrZPfMWYLaSxSeCXibttzCAZYbqUmHhWTqJqtWL3KKKXrznrmdYqTCpV96SjW5Ly1G2iBFW25MTX83i2K6sN",
  "key1": "27dpMwmUwkaqmbZUjr5svjHs7mwu6edQWAnktujDwUJWVUsQu39ENZJLsUnL4kofzFzP7fE2FhbJ1Q94dQ7ArH3J",
  "key2": "2GXnrZGKDpHAJYFyqBQPkStJ9oZ3arCauCMwjc7VMVxD9HJ8CAnTbVwKTU33RNzGQzQw4UL3htJDq236ULvyBYrf",
  "key3": "4NRj2Kypr194Bxcdt1ZTqq2CFNRiN1DfXLV8vdhdZLyHxvMKB5gSk8UVeP3XZWH31y4WtvbZpGQHvuhj92HDpakv",
  "key4": "RnRdN8MAg9jjnk6hcPBNCZuh7tM5HQQuFSApnC7AxfqNztZKpbxsRUwTiMjiRTF6W8TtCT2wsGbzbNEBS5jrdwm",
  "key5": "4fryNJS2qX5WV6ky3DDtxZ7LzVPiADkEPgvfXGGmeZMsAGegXqamjxMVymcACttdPJpySVSjHy6TG4n6x1jk8Kef",
  "key6": "Js4ncXUTh1R9poAriWeWuQhsxvYcVckVZXaUR6cez4K3R8EBYzf35zXZRPyPvdDtAVKrs6J6ih8XUvTzvgt3GyY",
  "key7": "HExMR3bRTEC6ckDLLBgg2B7zFACYboTehvB9BrfHf8vFwEtkkrNSka5R7zHiooNrhtSnaH6nYvq9b8H5HJeAnVY",
  "key8": "4sp8QhZvUtsgD5L34X7KYGeyW7Vrgzmh9JAniDrnqoQMx5oQ2k2kdmXZWoFxYHSFff1zXQhCi5H52HpZWydJ6MYT",
  "key9": "24wEF1BR1W76yTtDeezdRcgFUpURnvpFhnccbcKCmVHjFuuzWcmpGXC1aFg7oqKaCuZzL44G5UHv1a2a4mL5iiBQ",
  "key10": "3q3rNv7EcaxTMrPdxDdAcZA3D6X5y2TetQ2ZLCHePB91CMhnjWit5nAZCvYbCxJZGt1R64szipToN7ACowob1ZoA",
  "key11": "3BUcW2sPiRsajaBAT7FZyHRyrfyEQkxSbFWkRWzxzAug2fprNiJqCQRzonZXkLAKmokJve4YvvPVsnvmMEuYkmMs",
  "key12": "4sHSpMAJ84U3t5s5kscckVvLx4b81PRkVTcH4fVoeZrT9wnPdQrNqfkWMyi44Ui86CEuxnJaG35GgzcoTcHrZKNm",
  "key13": "3NxTgRJQHswf5tqP8zF85EkCvjQQAasubNsEcdtWBfWWMFR2JYNkkrn6rpGoRd3RRcL7zdPfdDRiLh6BBcTwGvCy",
  "key14": "5KkoLgrPmZDnwsJLhWqFZZzYw76vtkZ2Mo8w6tuo6R5XHMv9UpwZidkQXvGuEJMYX7P4DPivmTHVXqxUAuQ5nhQ2",
  "key15": "2kumLydyddtCfwEbMQeupt4d12RA7Njrzg1pP4mCLU3Ze4csZ94WEs938hc3rJjwcytJ1877szADxoE62Ymw9rCP",
  "key16": "5KfbkrVyQnzNpJWyds6c53tfmx41sS5HBbcP2hgJBgKGac6LUrfCWQ8ZhCMq5pA6UeNFgRUQEuCMG2t31oBRGTE7",
  "key17": "2Va2X6AnmYRgDNmNazvtm5m6Lkzj1Ggca97aqhMrshJhfW6FGbZK7sGgVUVprVSeqfhNmRN6ENByFbjD6b41a1Zo",
  "key18": "4fQT5MYrnu4CqNcnqGJVisEPaTWz9DuDV7kma4xvV6jntUaDNQHVuDGKewarVKDWjc7caYPMyjv8Frgh9MW1CaNo",
  "key19": "5eQ2jDHHWmvJwH8SCiAUc2zk1LgcgdpiaGsjPAhSbbwhceWA6yc921heB2zmHZwtpshprS42uZTbhtb4Pp9U5Xwp",
  "key20": "35nJSsy5Tk4Hw6uWcjMXJeZGtSRn4SXmSSHxgyDkiWKyHuqE3mAYExJyAZ3y6kGZBVrATxcmXtx7V1KmYYVeJ55F",
  "key21": "46mTdQhcQzPMzDwpX8tt5Yq74pNzAYBLuHBQ3DmV4pcQFkAoRMajAZmVz6shTuD5HXZ3opdiui1VKC4Ykgk9VWq2",
  "key22": "4XeggVgHu9VzU7T5k4ouW9iryAKRoQmQKVWyu1gokiDYMdine1yj5hmWbo889hn8817JMZNUZV24NseJSkfPTUmx",
  "key23": "Fc4deXPcsLDP1QV7DhUTPA848qtYg1wbHHqUW6oHxyY8aQBaAC6aSmpKTPHPpNemhwqdfUaNa5h1Ya2WXWSWuGM",
  "key24": "3ayz8EAD78quyuW8QgYe469wTgCxb7gG8YkcBq3KnXqXpdMRF3c1gmZALpuRLgtaNLhRAkFB6xdt6uYKAMLiwGo4",
  "key25": "5CMq8czqTG72QKvVWxdxPp7xM5iCHuMsqttFkxcrdgRk2WKqj5Hvj7SfdshsyVhcZmQGQM7czM6jLfqQQq6mee29",
  "key26": "2i5tNKRP8bHwfN6CSyJLEbkRYGGZE1YzT7JwgjWXRA2n3A1i45EhSjC9R1P2z1b9kv8xDFtsRRqpWAXCRCJpT89s",
  "key27": "5LKJDV7UEKv7UU15fkgFJw8XMAFmnoXGeXdSSSKVVi2xqpMwdaJuYbWkBCX9BKq7STi3RuxdBWWZvg9PV3YXuqu1",
  "key28": "MNFd5sXqjJSSXGNegmYEZ4vbXdCYCNUtGrjHmyDtnHaJo1FfHqLvfFQCR1dJVzeUnvbAFNyT5vY1faAVH2YvhYU",
  "key29": "4Ki3XrhMLynUjodwn7DTyAcZqm69AZ3BMhkjZnvVMLmzPsGxqeKNo4jKnmBh8AsFrGdFNp3PWCHDBN1mhm5vpKLH",
  "key30": "VTRtxnvetay22kunvVa8GLY7WDqkYNW1gwdKN5Q6PpKvLDG2U5DSF6ZmfXT2FJjyJekJdvz68LfT2CadtZDCBaB",
  "key31": "smGFhn4XgcRtXHySjF27EasEGNp3Jdrk5op98xNVYTdrEcV2ggyAHBYCN6ksp711NGpoWF4uJWMEyEuEVbxpHam"
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
