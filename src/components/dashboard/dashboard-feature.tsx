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
    "4yqu1sA8mxhvSfk196wmuR2u3e3s3A9gN4xQdbszaqzXtuQkashqEZBTtPZLahhywh5Lg9KyyS6vgWcWGMTGLW3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mu3yUgvJTAZQxHdVi8CYxowW4wZTs3MpKjeHuhY3cyvQwtyTxA8eo6tQpP1YayQbWx47y5kQkb8ypqac51v59Wo",
  "key1": "2zdpcbmxLQpp8ZpfCiQjdGmt66moNkoGjZgeeQ3n4Fs6RgsqejVKSEnfxX3iCkKXDxGvauhboPRSdv65YSeRqmhu",
  "key2": "3oXebZoVymH2Lg93VdzwTKk4RQ9RE8sPaLepDGv2W1L1f5qZBQmSgHUiTTZQXb2kTQ8K5Z9iQMaPb4jqasJw2w2b",
  "key3": "55CpmJoen79eqcmniKfk3LGKGcEJPN4hkhxo5NZ5jHJAjzf3Xe2pSTPgTXEnQcDiToiPA8eqHXVkJX6H2YDPDYqD",
  "key4": "5DG3NA6gi6FxPvafeVh8Jc4ueXd4DvjBQSEjS3uN6KTXteKR3wWwLAzdjRi9hLi1xXD5d7emUZNufU7zG79msyyP",
  "key5": "5BfXY5tdwXqSM2JTYQ3xbpY3z1uFs6NjxjsLCHFdVo7T7AJAugL3mCsU6CM3D47tZ9tvPdC9pcU4YrDk5PZRPyCA",
  "key6": "29BjXsid1YNiM3vvby3L6j8TAk68ndX3YFMxe5VXMpGxdHVB8R2PRQoeGoyUdb7VngydShuwP1GzqtN1ciH1E6y3",
  "key7": "3QKEbBjaTPDpBJH5FybxS1iNvPLHXT2jBDLndX6FixWxKVuoUZCcFPibneE5jWiKcAdZeVLtaQCjsKzGNmGJHfhz",
  "key8": "67mYGjhLFdHg9ZRt7saim6rwVjRXAwKUfhgeJd5bHcufH66KYFG6KXTeADeEFLGgvSu55nH8gT8JgGtQZFrsGJu8",
  "key9": "22zZp9aXxp5Ee1drCkWeqYqQUUcsXTRUcQkW5vumvxduv7h7JRCgv9ZaQsroFbZ32Vva5XUqF5qk3aJvjLjdSpzJ",
  "key10": "KF3yqMaVTiQhMgspToLgkX4Lurh5zgk7s95FLjaKXSeNfgT1fxhAU1hGzSxqf5pLgFY1Q5eaUtrSGW8wHhbp8RS",
  "key11": "4LTyZqYfHmX42wcMeSUHXDPfjgMkb2RmSZ1idJZr1vWdTRcGxxstm16Qh4KNDZmwXA6UDdH52p2mrNfHPtryNmeZ",
  "key12": "4zDZk9VMPpY1gJM5LjzTN6XRhDRsZEmikihkPftDuQfbw67JsdwgzzDxCTVDRbtVH6BBTEExakn9FNBmUCHFjTGu",
  "key13": "oDazQ8AV6pNFSm4DHDJ63YX9dEmWWVSgt2wmKRX8zLutPFZjb9esNHfn1xgg1aNptnTV2ZY3HP8gsN5K5uB8EeN",
  "key14": "4YaSMNtiAHWCZ9JSgW5LB8r6CAP1ECuEsV9ZyA5VKujU11ZRgg6GBCcATKTmVZMdyVpN32SbTcHSTF8nEPwW1H5K",
  "key15": "22QE5uqifoxezmCMTaXbUwfwao7NcrYYaRtYbid38AxN95oGaaQ6hxzvtZBjgmKHEuEB57pAp8i2C1yVFUHSjFAy",
  "key16": "4BHcG9XRGsME6jK2wffQVJNyq59Y8f3SP8WbCNiAQicLv4WKTA8djzS1mxN5fvff5yvPaDYqDugVz1rvjMhwQwo3",
  "key17": "3YT4YmnoyQ8e5FWY1sKeiiLC1nR8qAhgt5EeNu25RXw6xyNugpzDgFrRdADaP4A8wzcrtH6eBH9rX6q2zwXGUcjJ",
  "key18": "2TrQTzo7g9C4hZYetQ8S6JuNGL828rZgKGuQ6khyY82hyh9rR7nW8WRrkojL81Ke2VCe7VcgJEb5SCAfAdbjFtAc",
  "key19": "4gKZV6243vxN5dCjAu8sKP2pm8V4sHZBrJwV2xaXW7GPsjDX6URQ6RaLq79RHpHLn4tit9hgnByM3eeAUkpGCKbY",
  "key20": "fwpG5XsrgKz21dXo4DXCjJggXgLMb83617Pn64u3VaSHD8u8iQivg3XxGrsUwxGaAbcxb7mFxdEyjWCXQR8wT5m",
  "key21": "zpySDf3vqLHVaw2BRqspHLg5zk6UDstcbuqYUSWKFMRJqRP4RGaDg2bGLH25B8oyoUKBS7UohrsEiDZ6KrdLVuC",
  "key22": "2pgJXWUPzsjexoYnW7nev2rGAZGy7HztHcxSbjUnRV5mwAprRGMPAe7wj9RUzSejqrZ4EXDKJmTCEmCEeVmLcpwU",
  "key23": "2pqnArYW1DCCerDQvRhh47eBfh18A5MVX8TUbcT6gh1pLRqy7jjSBCrUpPPLQMD4FEuRnfodiqhxDic1yB6Keeck",
  "key24": "E5p87vhiYcSbLKsR3625hWKN5V9WkicfUJq8WoEKL1BNamVNuzAvT9HLTvGhBNTjuAbKbtp3rH1PFG9Fp1daoMz",
  "key25": "5PYCGFcn4fDksjA2ZWtxeYeUyVtXU2peopukD9cbmbTU9tuaQY6teGmfdKCgCjstY4hZvLbFcBi8XJJWuEXGgcoE",
  "key26": "XEYdZbrwBhenxgwJ784TVXdfZVRu39wLHHhfKnm2Xu9FG7bAQvP8d2pQHHvqCWhtdT6sFKni3Dzj1cRhFcaxnR7",
  "key27": "5WmznwLwRAgX1YiexY9hh6uJj67x2nPR7UwcZ1jqyMRddr6HNqbFWoxGXZhYcM4aQYrpejEY8EfJ83KEBa19kQHe",
  "key28": "f4ndFnUkawWmFPbYcCev432LcBz9idMAvrCY5JaH33taWxJwbtaEuRi1a2Ne6u7V3xiWw5kHNPbXsz1Kq2zGAXF",
  "key29": "jzt9AFMXWFUZxp8TmJLWXdenXM8dTmDLUXjqgPU72SYkYiAgfXw1DtkpYaLHttutcpTVR4cVoobt7qRsf8FZ3PA",
  "key30": "3THNZYwdvfFE1TKdDY7Mm24jTeKq7hkodPbKjjigQyg6FxvSDxxYRwntUuedFwrCneb9wDTD7qpuUwtWLjp6tUPa",
  "key31": "3Q6v2gSP8kNALCggMqicEyrK8FJUtXBRkri2kFYMuz7sALS1LXyUvVTc7AfoGJtixyvYQsk6TB5Mmu4X3TyzSZhE",
  "key32": "4Xi1RXdGqpA4CWimpL1kjmB9rxqUg92i432Y2uFtqB99ye2C6Et5nKUEBcGYiV7Rw6hS1by2zjjw2xdbDgt3YX1X",
  "key33": "498PDA4GF3gVULsyEZu3YkAnFAB83KM77BSKKvhENVRkZZ2v6ahRpWJ8LNSHgAhpUEXDrnxQYDGcYX6TXqq9hfvZ",
  "key34": "4wsyFNBJcqhaiKTBbuzYLipWwRR5WHtiFgJ6xaADqpUXMhgWpF5anXk7EcJAqbADnEixX1oNoHLCqMXdjjvzFzaw",
  "key35": "5uN3ioaN4zMSJpAq5mUXUjKt1sSLjDwfpYdkTqNPxAghkRmV2zeXQf8nBwYydj9kDmmUPZgA4zRXsJMYhxaLfjLS",
  "key36": "2pC9QECG367Jtin6gM4fF3nepR7C2iBUJK2Uu3ZBcSaNSvDNdvGycfPZqg91mAXGbMHdwSmvPUtwge6QpD3TLVTD",
  "key37": "4wt7ETFSmY4dkFPKZMzCosCiYxw1CXgDLdrkH1WC4z19ozw3EyJQCgPj3AYnAixs3kSRcXCD9uNnXM6DYfQC6owv",
  "key38": "4vRMkZ7pqL3SmHG26Q5ehLFD3iUiusVkS4Bx2zELt7YW9gRoa7Wiu1Z8SpWTu6TTatZPvBQCHhyn5huUgcqzAA6n",
  "key39": "5Td3sjL1xsDP2kf4nTszmR1U47Jw8De6rQGi2WGPhSCoF1EtfH48VmaH6yeCXn27bby8fhZGr6mxYKp8quv8P4bf",
  "key40": "zF62zRT1k51Cf3vibLGPeyBpseBUfHzF8iZystQThd6woJBHBNmxJaABxZgZCaomLrDm3bUeEMwUpZCJ7nBhjyH",
  "key41": "5LH5SAo761idkmGySSfjwSWuEt7Cd5oHWT1aqNMTRr1SVG5ZXVGUzKjR9pUwp4u9b7w4erZ18AqrmW6Gobn1tFV1",
  "key42": "sYW2cTM7EdmNEGjYLBVvJNQyuoA29WrFRCUuPPiS9qo9TpepxdYbyfALFAGuoJPtwDNpA5SiqjwMt5kdurmD5BM",
  "key43": "4AWnqbWrKDk5y1Mf1YC3aiTzmMWDT4XphQNrLecwcbuLtqiGjXDoV2bU4UWX6nakmhsDip6JmMk8ad1kP94Rhb5n",
  "key44": "2LCEdBxR5BTV8hxQkUd9qrEXPSqywiWdseqVCM2ZSBdnnqukX8noCcCegNXi272obpPryg8xPpiCSr3hefwBVKtu",
  "key45": "5Pa7jB5t8vhsZKCcyfmZqtrXFELekBUHKN827FWo75VVmCWRH15a3YKRCemrrzo4BBDQ65p85ZvboxtKebt4358e",
  "key46": "DQvrG2EtCp89dhx2LiqotdnbbY9SucDL1N4xqL488aJdBjGNqaNcpGhLpTSefr56AMdac3yyhdG2TYepS23j7kX",
  "key47": "5tVcGZf56JVAovkjkM9qaA9mErZh3yMGXUJM6TqfV1FDWHkjSuvfi8DU3Qv5R9C1dfENcbwQobCx5cAvfrtqfbwY",
  "key48": "3HHHvZiYCp8Gi9akZkGYK281GZYvYhr2mNnH4gmRUFgSAzNtit3DwACmvPah3ZfTzEuAKesRCCbof2DEURjdZbei",
  "key49": "3T7gvE28nhpAg6UL6K9P9x97gKNHMWpQXAp4kjGprsQqRCogJDusAz3pXNSeDd4CyLa1MK9ipEpvR2sSC6n4bYQE"
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
