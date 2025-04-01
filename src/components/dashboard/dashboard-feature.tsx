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
    "53JTFft4V7oUSWvGTFeEwTiZHS6gLUqe43bsM5tDEDXdGurSqY8nHLDbAteqcbktV53BobJkGjApZo3iFWfVVpzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTvtoZpj3P5Mthn1ZFoRCGSViD9tB2AiSK7uCBFqwGQJv2697qsgZXxJypqExsBN6AaCRjXSC5wjNMdyv5oMtca",
  "key1": "4pypf2J2MXGTA9HVLJuuYVLqm6G3XSwKgjsR81smgyyx3SN5UbdWUPsaeQpDEsU3mGGcQ2TpYctcCHmMFtw7hYgS",
  "key2": "2ebhabTHd17oWKT8hgfDWb87ryAnh2P8EVY6s6SkmoD5kkBSPBid65ybMs9jZv9FJbzAWwqxCoKH8yLwziXCiJB7",
  "key3": "4p7WPXKHEjc6hcSpVPAz5q8EXgGGn1ZJP6bkXmMjcD8aGotyuAnaAMcDHjgo9BsqjnXpaV1EorDVuZiAmvxn9yV2",
  "key4": "2tfauvGxLQcbkpxZmA1GEsUN23payEiLdz62Sivq5VWKkeQ2jL6FjAwQNJ6zRf2EG9YHrDYsUGfEwQBQGyKgJbGY",
  "key5": "ey7FiRnsjbSEUrXDoH3WknXGjHaF5pZ2no7Ffm5ah9Ec2rBgbyLABMgFi9SjUxDPza8o1rsbiEFW7MzKQ1mbvBh",
  "key6": "YqbV829CfAVzbJsqESjV7zx1gaSgF2CFHGXgXqJ2jxdVYnokFJtWgeuGbzqsAzG8p3UXZ3wNNAo7KMPs7oKPCq3",
  "key7": "45aXNshgHCk5LKr3kuS2ZyBJ11kVebgowhpTJ7QUdw4CujdGpeNn9jjwH39MvGHQENJwypFmZ2T8XHnTxnrd8DY8",
  "key8": "4E66iC5k1ZfEgjv3soEdvtwjuXFVtgRqsSjcuird5JLj82zXBZPd6k72ahCkvD1fTRZaiJqfa6mRJnbQirZSjBm9",
  "key9": "cP5fBfrjw31dhxvPBc4UixX4FH8cACvHP4QGx3SJnjLXCJqGGYt3ubtnAUAfp7iUZvbnVYAYJGVCv7kzPftAbr5",
  "key10": "3Yjvys6ugFwJZWJ7E2N8M8BpmNvdSgFXqWWzMQPzfzsk64AfsyyeWbSbKPU99SD7k4gq4RqBFYLVnt197zyYqDjT",
  "key11": "2m2QQhZHnWy2pSbtUVdMXJtUpozWCdC8e1Uz2mW8XGbMnqy2Sf7CxN1JwoW3bEYyQhZFTnJWH3fwCsNPTqmdUpHB",
  "key12": "23AukqWuRhXRV2VCbiZvehytgm5pXY8YeZmqmDDQabASqAtGA96ti74EUbKMB121XSMXQheSZjxGxsEq2xFb5ioj",
  "key13": "3ptascYgBbEGjVzQrbn3JfUwQwnG4rEBSKnpaWGDZMaeAzb61oWQS3GwHYCnPXebwizV5YiePD6Thn48WAd1AzsK",
  "key14": "33dioDFzYqKJZhnm3D3QYszLS8ePGWxTm15R85PyquSkatS8UNXfbQnrzbKLgvUWmUC9zoFNdVDyZGp8tVRdfcG8",
  "key15": "ifFahHsfVGXSjwQXNAqjnQ5DX1w3jhmLALZAo6FoiBzap3LDpCnK87reuCA7MMx8XFcqkAXA2aTPaZN6b4oFkk8",
  "key16": "4ptj6C7nVE6LhkyhKoavBcGWpzmevCNU8k8TkDjXh6EtjBQpnEv2HmbHy4V8JoaMTqzQLPexsxjwxiKsNGmRrG1T",
  "key17": "23qMmxmVQEig2HYBqS8LUEqj4QExo2tXMCxRvVM6tynKyGCpivEPh52cuRQv1pkiYFzczLpRJo7M45xDkhKoLqhx",
  "key18": "5XhZDuW7PC125FtVop1smHG3eNTX3AMpb8Gtk2a1F3C9PM42ujG7FQ4iSQJX9Zn9FYJxznpiaXMcYADZJagwWR6f",
  "key19": "4EQqU5XffCkyrkBNZre6sZzUsMQwV8WR3khp654tw9SNord81UFbVHYMwFZfBgysHdSv1mTeVpFxPZMnQzLddnN8",
  "key20": "3FVin1uFF7hX8QHyU5cUMa6KxKnhTLqYy5xfFGCmM4rX88UgUntzouk273uyxdk5pJow97K8K7aEnNfr21sMUh4o",
  "key21": "32gXHSCeMiVVKAiKNUgL9yrbpbk1Rkf8vd3LB98ySZtKGCsBYu8qr3u7JWZkFiJoa5p8r5wiE2FHbMCHXaPCBZq",
  "key22": "4Ycji8yb3QQ1PrEVxrQW9u6ErnaafbpEFSWjW9iGQ3yBb16qto47aZpkJi4xh8mTtxrzMFmMa6kArcpKmy3bcr2u",
  "key23": "22vfY6urvAMxd6m8oqn3fBPajB7zhZZiECwkNZWUXUWst36MehKkDiMqPVso2sRC4nUobYf342Cv2txXgnTLuqw2",
  "key24": "23EBor32K4SXXTG3Gjw2xAxwH3kZ9NnQr9n9nPBi1j5gtLpV1FuFb4jCXU4tK6HtKMAjwRDpRfLGtQFE4Rbrzepw",
  "key25": "67S9e1zRVmWcSzXAMnp2bqw3bPK49aMSx7G78QnTG371j5T9zoY8wRwkQrKZw4C9w2zumkkDsejtpmdt7UExpyNd",
  "key26": "2nuFVPhuPjsh76Ed5JgFHKYU8gFFsCFQrn4wdUAf8K5P6iHY7x5SCscjRLepzy4YzwbncV36ZiN5GwfY1wgnBma4",
  "key27": "2MHx7U8HHx659PX8UKVvvWumPGAcG19uhU7jQBaHBxLfYmMtodC5G5an3AJe2jZEfBZCkpGUtsWgR5zJT7Cfioky",
  "key28": "2naZaGpJnay9Qri3GVqT5bPRhizwG1Fv8tMNRZ7PW2TUxCWxyfiTLLM3cFgs5TtPxKqGbjV3gt4XixyusmdDTGkA",
  "key29": "5FH3Gor9cXMWfQcZGmaKR5R7SQrZTHRa8BVzimhRncPzmLrQ6YVZbDuNB7tc3vVhSXBt2HA3eyQw7PUVtbY39Biy",
  "key30": "5qD1RM6y9FhzdHUbKsaE1abKVMZaaLEDTM7yjwGHC2JzhB9ZLXWaZUbbZrdqmq9oQEDKV4kmDJB1bpLo6Ww63oWx",
  "key31": "4fznUf9roCcbHVdhyiab9kXERbP2QrX3aYTRiVkHqKXzVs7btWSASqwqrzQiNtmyzQaW9AySmnxcuE7kvkA4yuAh",
  "key32": "2hJmDhBu291M8gUT2VkZxpMWvbXBFPYGrmhwVWEZC7iBWE3uqtD6BtinJecWRPhbyoeH2ndjTkUzozC7piDfG1Sq",
  "key33": "5fXcjFL9kEoV6qsPgjK8aQDQN5fsWaJsCGbNR14ktCK22hAQ3gjsLphjzosudkaZnWYkhrMYCg9r9z1u2yDKTSfg",
  "key34": "2oFruVDzmrgFjNkCHriwrPSPFxoyTAHTmvqc9qFfhHvWMbjYRUDrpZxEitq6DtzrgUnc4ZhjfvCv4osEe4xEAB6c",
  "key35": "3dC1t2a9y6FCbiy4C8Qk4N7hhQPekT6886etxLSoC4f362TZVd2WbiXSiexzmbN88z9cJaerqv7L2aEQuABZc6xp",
  "key36": "3uZ8EgV1pohMHodGu9FrrxF6qnZsMun9ugAxYC1gxmeeYVCX6eFVn5Ar4XyNZjWPgpiUmhV83hF4fWbpabFqBN6H",
  "key37": "2Zz5f1vziBKQjLLZv7a99FYjAcr8hgwCwySjnEN69jHH9bLNvcjkTrF7Y3iFijLG6WepdP1o9p4t5bTFutRzuuG2",
  "key38": "5AGdfZREVB9mMMsD25XKmc1ojT5avK9R8nE8bYPLHELQThnN9zXpNPxyrPEJsG2ZQXquY6rm8E2uNYhPbdVUGwS4",
  "key39": "4bLxhQXrQpDM7N221KdHod6Ub3KKBWEbDAeJPc2jm8hfEP1dFqXyVtwcNV5oQ41TZ9bzWEkvMpLHwr6VMDMEdzRr",
  "key40": "3QdE5etqCYTwksYBeCNHk2bWMp4n2LzQfXAKFNfVKa9n89H5ApM9BKzwAqQepzpF6AnTdzJrWvfswbdUjZkqJjqK",
  "key41": "3LTwvQUiVZYd2vbzWZWcapuNRDbb4gLGHao1DoGZ7FQNmwTCSebUR8oqmEYZVAcrJ7VgaDNrjRPKTS6EAiExAf27",
  "key42": "24JPbEeYZg4jYqGyZ9M4WMdkoqkLC3NCBqZad36dWForjmxj76WBFrx4xXhneUpLunRqotusWebLKrrPYMACYYBt",
  "key43": "3j8CjhfiQMjk3mDZjHQRHNEsByW8uRZmeCDMzQTYDe4ThyAVXBHZCv5uKwv6XmJgoybHcqRB5ZwvnazoMSf9Bssv",
  "key44": "4Ny9fU2UM8pcAQP4bzD4xGagmgYR8Uf3SpWRN3C3qTahBR21ySY2kg6E2nvNia4FT8aNV9k3Zd6MyZW1owPbxLJu",
  "key45": "5XdhPNWJufwJMEe3zzcUHmAippQxdyKXfeQta58Vf3N1x5d2otaDBRe5oy5DuHcWcHsqFGdUBrc9ETWVNWdrKvih",
  "key46": "2T4NAubZyZBSdTWxv1rcKPZvfLfdCzVhXoZpY7ucETNZ8q9yN8aVxtzRmjiaRATiHdo2SsCwQbbDGv1Sfk63EHQv"
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
