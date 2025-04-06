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
    "4gKcSWfTG4AkbcM2be2ksHnbj8WHFWoVWk6497tkQFffkEvepv3NaQNuXfXBU49L22JKwVjaWTbTNqKuXGR2kqKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gX5FGnGfubFS8gF1B5hgdAPgc3CGUJQU1rt2Zeg1fHh4mUg8qwinCEs2EvRJrqg8ZpHoQKmhfZ2h5LPHuJqQyN9",
  "key1": "yHsLt7HivZtDR32ZoDx8P6SCMgfxQP5hi1ByW9ZhDz2eYoeWkuaGsfagcaYsUUKrVoZno4R6CJkPWB3kkP4ka2u",
  "key2": "2xzuXHTbtYwcFj35zz3gB3PGhAdKwEhsiy7kd7zKjekEk6oVSu5pWu5PboVmxrYTPQrbaW6LWA4HN3XwYKhi99Ha",
  "key3": "2Ymzjm2PkrMo1E94xr7sNoNHiXk9htCxfuFTMAKdqK31KTex3NLeNNCKyjTFxLofwCxW6CEveHsMvXdBcejnGp6S",
  "key4": "5eaMExXL9t2XasQeVPoJzxohjfboguQBzJmYyXT1BRUjkpLU2AsvRueiFCUJtRnVxRqwLrh6QkeqfDmZbVKLh3vC",
  "key5": "gJe2Xv8deGcuyDF7HgbCJ3jHWhskmJMU8gCnkwwfBPXiraHBydxJ1c6n6uVzTfpLGKGTNVjK51nx4vnfWczuQai",
  "key6": "3JQaL2S54mmL3uA7UJg56188Ci6yJoTDxwzf9Pcxkz9Pgsm7ygfSdACrmxT21JfbfiHdDxxSBbyEJVVyrxGi1aRV",
  "key7": "WMN6csdUJuabx4ZkBV4r5EvwwpKozcH1s44LGnfhh53tXQeAVvxL6393Ut9zqSdCvrUovDEsSLcjamurCBnuoHn",
  "key8": "3HbQFCqZ6ykDvXrVd5UXvZTmFzSy6EUeNNPGGk49UkwGZe6HCuAo99Y3aJSvLaPVD2gWWurzk8h3tEBsEnxHsXdw",
  "key9": "47beMjE7TFBY7tqjBBQFz7vGjW8ad83zDtH1oSpAk6k5nVsd82uebvewrWs9XagcUQYP1XCgmnuNLDQ2Xs3DCA8m",
  "key10": "2fzAmge6n3aqktnTXyajcWWmk9wmCsJ1jMgn7AMx33DZc5zcBpyjqtCgPEARAyV1He9swAyjRCi6WFjLMZHoB7TZ",
  "key11": "4RffjNj1RGByBd2K7hBTacJtPQfwEN12WaREFDfmwNYdzHevvpWbHzDY3QFiL46MCRQmxaJbpu13EpJayNuwkQMq",
  "key12": "3J6Du8dCoU3sQZRB9D26qdP88XBZZb2sYNHquWLRDdXuQoBRQnZLxtcgwcCC9Jk9x5PGv7C7hLHWrsrsdMDvf9jb",
  "key13": "2V2bZMc4XpzJXKyrM26QHi2Jug1uCfgRHLVSFHZ47ic1ppUo9bGVftLwqPY856839V4FomX7jcbiun8mGBV8rpMq",
  "key14": "3C428sLhNRrNrjf3DJhRdBZ55rTDWD4KjvxMJM3Pu81YWQE1kdVV47WR1YJapySkejCEh1aWLiqQyPaZUpUyFQmy",
  "key15": "5NbRJp278wkXTrot5eBZTcJbjLNK9fyBmArGEopKNukPKhFvH2Y13PxnDQmFZ74VkWrRe3hfHzBvP231xNVpEN8Z",
  "key16": "wH75x1GzhnuXiGX2gnzbwhdK913euHzZxiZ3uGRqBsRZZNCWo2Ai7eadDJfEemAGF6ATy5doxSkgXi8ghAYgQgf",
  "key17": "44S6hDKYK23wm7v7hxKS3Rkfj4LkcBXV1mMWbbErrzPChmUcLVjRcMfyNGst1ZZTgMDshfdyXY4sgL5AnjpBXQs1",
  "key18": "4k6YD9Px4WNNzhcSvSRizqwA2N3qi1B5AVVKHA1yUdP76xTjxzAXG3o26kJJdyhwuB7ux54RwvdFqYFhiMk4ad2m",
  "key19": "3R1zZqxmwHka5YmHB3W18zMBsCDdmTFp3cWkrJQtXxhYZWJD23pCTjHTS7s36nFdTHemBGQEuupER1TwF9PFFQb4",
  "key20": "3diBLhjZA2U5SKYeHrYSakuAVk8RbsfpYMqyEToz9498WDCpxSUinkaStDCWQGprWiSxqb4opokgjbEDZzvQgoyf",
  "key21": "b4gzQfbxVtV5SQyHoMwz5Np3QabuLbmUHefSzS3LjMsnR5R2cTJzEW1zSnFt8A2XDijavccQ9drhqvJjoVuUUL8",
  "key22": "3buWtDA2go3RvGXQtDEM2ytreUTJH6V7XNcxorSn2TZoiCJz5QmqkfnkV8wuJ5TJMJrn1XhMDzAqd5Gkz7iv7qbH",
  "key23": "t5TLDPNnNrSnv9p7EAGHGeFgPARSfrqWmLM9VHxyEuczqayMpxmCrsJRxHNz1pEc2dn94nugFbXMid8odQ2vpD7",
  "key24": "65Vaq5KLTzZsGpYo3UGS4c2CvW4ELf7joBU8Ujh2PKe56xTWH7M6cfQpV4XM4h9krmHFA6Xafp3YmMFMN1oF1AdC",
  "key25": "Cvh9oUQm9TvmieWEBBFuDZw2Six64gAxjeigUdnb4XhGctswVtV4bk1hBWBUm5HUVKsRYhHve9ga8tPkeY7ZZnm",
  "key26": "dbMLaqfKy9732xcMYnYGWPnmWn7S1syXikuLf7avmuq8Gga1qRn8Fnrfut3uCUAEkzfoXYmRdcXfSVbBoERVcZ7",
  "key27": "4zT383VnQ5hmnPjM6Ricr8nV3rZfAfENnH2pPFjjkEeZbbX6gByjaVt7VsXgm8DYMbrNCb4rmJPnyL4sEy5Uy91q",
  "key28": "SMCiMgWJSTzdW9XKFnzgSQoJRLh352tYqh6ycQM79rnpvB3VSGPD6fBXDNEZPfuoFXSUDMqQr6y2grtUApr78LX",
  "key29": "HRw2pedjsFEtJmRdRZnVWyULo3zxp4gN87U54GN1arB4Jsbus5ETMx958MM4JKrnxkEQNiZsPzbf5TKBiuVcRFi",
  "key30": "DD6fbZuU6RAq2SCZQtg2xXpTQottTv7sQzhy1cRTFSuvUQU5fNFCvsZfKXMbaP7uMubK2QWRc6X2dPspoFrVSMb",
  "key31": "3YQd82jsJh8HdcmY1GzHTyesYe4ECyuDkAgAdsgfduVENzWz388PeyaE2jFHw777VBGp5nkynM92MfyAKLdvBfx1",
  "key32": "2UEX9js6XQdwPAt3XQVknrMCjovYnaD38ZJb7EAaz6EbZWLpq7AmsjtauMCX3MR2hK7b7jJQhscj3Tx7ACzEYDNA",
  "key33": "KT4HjhJ1RgK4C85RrmAmXb7GMsrD8sHJxLvQ7n4dSXwBr7WYDdKAuBjUBRE2n8z45B83cxcXqamConwMVxJDtcR",
  "key34": "3d8oE9pNVXppRmB9qqaz1dh5auHkPDLWbkD21BFHADWjSV8jikwAtvU9Cd1ZpDrNhNCa671KkWsFRW18UjpwqXnE",
  "key35": "2TzbyfpexQ8ZQ9qkhjMiun512pVVeyNwx1b1FK4Md1gkRtZiXcp69AW6C4xUFpmes1hkZUmM7hN17WGVEcwivE71"
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
