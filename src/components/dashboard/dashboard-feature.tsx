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
    "4ULGxSNd34NMeX34r1XpSMtFFYpWwCPi3DkybQ3Rnvc8p1i4LFnBxBuaYKgiyEv2ks7Jzoi4cnFvQz2feVPw8Q3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iGCGk3CvHMYdhTckxPEu9Cx1wz57vAWGPbS6MYwAecjK6g3MuUgZmHfr1xPBHdeMHDRsH2e2zgNbYdDHKS71oEi",
  "key1": "3wYkr634kcPnuTRCftkF5pj7CnXRPpR8XAGRW3AKs6EiZybErrtkpbQUUuVg58wgzCbPc1ZxkrpmE9hCXDLgMWJ1",
  "key2": "urcZiYLAC6CcHJS4GCvYyjvPcPRwtPHo6HEuzULtY6dMYjbG1eWfrNFWFVHSUbNvLwoYqsUwePHfAEeRo4fU5EL",
  "key3": "4o9AzjW1HQyDSbSPjhjgwJi5ridfoGNTVXsMn9UpPWKEa3Y4h55NTWiUfLM1nSjU32NSVKDpdPw3aSPzF7JJci3v",
  "key4": "3EJ5QJotSqzceANNNKXdURkudn59PNeTRLpTiYVxP4ir6uoaqjaoEccNntdtGzruqEyKYWjXZCNnS6Va9m21gw2x",
  "key5": "2whLSgcpKu9pSPKjs5iZfXDazUguY9YJjXyEjEjRPem2Xui5iTDMXNjUR4PS5GLJUcW64PYaswMSzGDgqE8rXTbL",
  "key6": "546hcYZqYxsZpPFduS3CEPs2FSRAhgBiPvPGGHauQxc76SmAPvBeTTJ9SzNncdJrBw3Z3qfKM9eqAQTnp4SiDFiu",
  "key7": "21wSqevbTYJQmSWM2wYJmk7JXWzteC86uwW11nRKLgXE2m82hLL9DAsvqCGQJH4dQTTAtJiJjiwZPwTTSDgj8zGg",
  "key8": "57nM8PGMeL1mSXQc1BTMqaVeB45cQ7aSGo4rdEJyEmk8b27ZMj9fuKtHiWcoNWuxoiXHjALDPxfUPuH48x84pF4h",
  "key9": "2xdGtjiyBf417dGSABdf2NZY4cgsGmfP2iT5gAUhcuRC67wGWGT8fvmnVv82T5r3beKfv8GHXdjnKWgV69p7gouy",
  "key10": "3SvGVPJ73YYf1HaggbyoYGdyt9GGT8trpUR1Q4uLinp5sBTrwYoV78884axSSionyJzrosb1hwcGnRq9janPhXwp",
  "key11": "3aM21jyejaLtTef6dXLhZnALcnXwVdwJuun3quKzYExdP48kWrCH5nZc5KXkMwWQ4keVmMGS2tNDLeAjmxEoAWv2",
  "key12": "rnTAy2kDHmYGABRxhdU5NCpVETJWXtnGj5t7y6MhjD7uaAcfxnbWLX5ENYFth8GRfkedxdBFjoF3irSYK1cp3s4",
  "key13": "3b3fk68d81m1TnbzCKNPnrrd1UoEBDQmLRoNjAkVKMHD2QDm7bLVZ7aDX6G36CXWd2nPczBb2H1B9mePRiQhAjim",
  "key14": "4dLwjxzdA2ScAyzXHAWoDkiMP9RWqxp9CanWaKBZ8Yi62ENsNbztVk6gHv4JCwRwWqf8vaWRLZXXVJUsvARS57Zd",
  "key15": "hkVu8m4W5undKvu1GVKnkXS6ifAixqanHQJqhoW3N1hfszAjjiV9u72ZbiWrmyHLWWpCb7Awc8CA9MH92uhAVRf",
  "key16": "2bESgr6iwAGJ4Ky18sTfVeMynv3bEja12tJS2tdCp5pxiADs1SeWacqsNAuGKbYUmDEVEM8CjMPwbbSUJJhpNZ8A",
  "key17": "2yjkobTbNQ2fsAALnQ5rWNQnUFqRCsJ1nzNZZRM6LfvqyHXk5LwueWwmdaZcWhCBbF9RXBjFoqj4tdzUWyqrSfY3",
  "key18": "33WvD4kuinJnxqRarkZL1qTMwvLj2CWpKhLYvz8Xzrkjrgys2ANVYK4nJemdovLELNaDD2q2mJHkZv5Gfwfvf9o7",
  "key19": "4gg2jMZpAFLTuA4p8wG6gEXGsfvLtGnkKixZcogBLMxQGDe2dmFZnzNHbDqya3Wr992Qq6oUSF59zKzBveA2FZ1M",
  "key20": "HYPArEPDMKzsS5PUzhCk9Fga6o16cEERKew2ihvdVNJaM2sdVtV4BDiPYEyvcF4shcPC2BkzmtTyayktmYo1tNu",
  "key21": "4qeBQJWGYfgHFhJaAke3w58prSgJhBCjgFhndU3btgf3qM6h3qWeko4qzDTQoR3ucdhEM8kdZCSBUZCZB3ryZDc7",
  "key22": "3cytQiEAGzxENzh2SnE2DrxgAGKeorL2Gpj7kxhtbNi5HxYCjbBF7nAfeC4FZgAVekEqds5vwqdonBv7iUSnfhUn",
  "key23": "49C4GqU3hdPLBuTiCijYBVSA9rd3vUJnKNy59hJ9r81J9b3T67SfhRzx3BsYPfR6LJvs5gpyznYBXD7DcWs8Mkjy",
  "key24": "GL4ZoWGh5nm5ELPMPUXshFaKjc5TuwgbTTeYMcxDAqSkuTaeEs2vMisKexeC4eVYhMabEWUt8EDohQZdkaqUNGC",
  "key25": "bkJTutjdybp6rDtAZXUqT5dPnXvUpDQ1q5t1krhbMHkZpP7YpUA4YjWtLfb9FTGQwUhQdnsjPCALCH6XZN6fnJv",
  "key26": "2JHYuDK9vZThsv9eri1LZDs99oeG71xUL6DxfiTY8a67bCxWzFbka8HZaxcvYZUnZZBxHDYvtFFYu5EYr4dmyVGL",
  "key27": "4ReeGsX8nmeSamCKMNNgqbym3UAEBFNAcx7EsmifNTb9i9TSbbJjVnfJKJikEKJnFpZCys4cGhM6uy1wr1ijTVnF",
  "key28": "5uvMC64ae2D4bVJvetNnQ8uLsCpS65MUrBTHoZUphtcqd8uVVzd2rDtZ6kYWFC7wV4X5JMyTnqbxCkFjakTjnXNZ",
  "key29": "548HdZ2mEt1nhLbi2yNN2AnBGgxfcVSda7H1BAxYity6bjcNJYBY8iLyQmc4WP5XSGJqcsCMT8UFtfNbtQF6vFqp",
  "key30": "4pNzA2kG6bzfvG9GxpEQEeC1cV7Ehpc2jNi9sdPGYPNn9xKoFEK7jQTw5KxvcSm11EnHPUb832iR5hL6wcWJDpr7",
  "key31": "4VjPCBGwhCX39frHnE3oHVKNrzmykZRxhLPfFLQ4DUBQvgyvSjJPAYuFSn2m5PCYbmXqo2ABC69YM4sAVdEVXzCY",
  "key32": "5yhzFiRxqWXuR5oziyXumdpgUoJPLRj3Gme519RRFtFF53pAQMYBQzpomYzNuuhhvtddE4xrYcaCj9C8dPSSBxhr",
  "key33": "66KzhPVA7vSBCwMXbB9pXYxijRxPtAqWBWjxuz1jJdeSj622JPsXvQd6QhvWNxbbqo1CFBxY6Vz6QhN4zxKT4fVE",
  "key34": "ANTeM4CAKrB9jRz4xK35dedAZujT2zuAPZCnCxqTwfXXs1zsbs4NUiCUNqdHf716nvAP8E2nEDKsTZrVX4sXPd2",
  "key35": "k5yAQ6Q2XteRwEqVAq5QhXLB3GmdfAyUynLJgiQnAowZGhCUTeb16XsHmud62jLtKTVf1ctidq6nURMUYnEkq2d",
  "key36": "4HCzvniBU8MQwPWqkMuaggShwmsVxXqHy2zuJ7GED6w8LBXU5fnJCWCA8QVH6j5NKoAkUR3y6k5YXBZaKpnmDkdJ",
  "key37": "3mq8MK6uwt9ioPS9NtW9sU7XkXCodgCaREmj4DTacKkbFyjqRRYWgNSakyg4ZAN8FAR6ivgiQgrGVdHyWa1dKvoj",
  "key38": "3JMHfnSNKxGzL4gBjmHZmgJNMMmhYBhhgvo4WMSWBZpdvpgaEMhnSWM1AP9eR4U9hVHiEMrCdmGNrYfvkMwE3va8",
  "key39": "sxHjbUsTYZK5nhsFZskexjD6wAn2RpYNddG8dUBfVcdguMrHd49ikKSzd63MWEyGTP9m3eby1Ex8NV3BFqPQG1o",
  "key40": "5DLkymeaKgiovfwshyN682iwBgVrrUQivZLTr9CVprgtByU5JPyTTiBdYvG7Kof5GqnbHXKcbiVCvARgEw5DfvfU",
  "key41": "rMJ2LEhvtqnfPDT5heGdAuJdiZA6AizfmsANjYvtHU8tT22f9WyAaMjdPzmR9uG8AgHP8mVyZXDEovBCNAhKXbZ"
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
