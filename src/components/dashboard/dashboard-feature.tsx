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
    "3CpYgZ8UzZVU8L3WbGj8ez373cvyF48LPoNXwQCvmkC8oWHLuQe8C3RpxMx3wnWNV2T8rf2sQdF4nNhaWqX7Lxzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1ywfY3gRccjbMdQRaL69tP4UYz7wnbNuTEiGSaUUeRqeXtGYKQ7ThL6NVc6UQmUuabzTgCjEKqEHK6QsdddADT",
  "key1": "5JxupqUemPu2Wend9Kh7ftWg6siaNycKGtrQidZhgvTUocfaLT4U674TTFD6keyW3L5WSP22Sske6B1Qa8N7Ev38",
  "key2": "TGBEAUTCShQpFA7JQRK55MA2T5vaYEsxjB1WY8z3WMBTpKVqod7RFwAPH2YuNphVkrZC8aFp5K3ABR1VRtYUsLY",
  "key3": "FAjAonTSxXEfU3kLyXSB1epTyuWCEZjWkNbJGLd8WZPKjSBAChsf29CPxxzZPZmQPCmQ1Y9ZsE6JMZ3VY4dwD8A",
  "key4": "66vamjN62ALQztQ1HoxGJhZQyDbm4B6bBBLchbDeo4KjNmCSUjXXZnfHXNgPVhFShdqg7gSsxJzUUGFrq3YQAq5w",
  "key5": "5XNwB3A5LTMQdD5LCSQP1x9ELMFJSvhxRo6rAwHLJZih4sppQHZLeZJQi3aiEUnVjL1qr4BqVu3vqVNFgN272FMn",
  "key6": "2ash27LpGJ7K2wLfzLDrbaFA58bde75Sj5bgWxmauRr3BUqSmtm8nDecq9tNiMFj63jyJhkL4Ci6verSzNjqr8ER",
  "key7": "2qvSYf5kvG7M9ShjyD7s2Avpo3VL5M39ndDkEHc3PE9BLX77CA255MHorEnSaZLHB9GDmNA6GJDrnaUS95BR4kXB",
  "key8": "3icMN7pPzwdHBrHzuVLqTEZ4JfHGPa9r3iD5F2BzQujNiuXbRunx19BXsfGdi6g1HcTwHZfgd3HhT2t99c2fauVj",
  "key9": "56BjhoFbtwxnQND8DPeUhkfyJRdmpswiB4EydJwo4d5UsgKt2t8moS5SCascPFF5CKGGjput4bdL8LYgWEffzPPD",
  "key10": "3hMFajsbDwbKTdJzQitDv55LGVeLU3wzrzL6SjE7PAEYiVdxxVJ5aWL2ftdivd7H7JuWRoMsgFFvKL2QE9MhQCKB",
  "key11": "2JUViuYDczo5fDS91eXzzRcmnNkSXD26YT4KoFp3G23ZdTvYWV7Xh8AibuKV39CwuLVsvX3o6YRrmND4K5tqAxiT",
  "key12": "3KmBdeZ1Ba951395Kwms88JUbMEpaWCaht7PBuozj5mEkkhDB6BzmwjSYszaaKZzQ7xiV3XPq1qwxEdaTt8QK6vF",
  "key13": "4Sp4j4t18f6VDxLfYGVGoi5HWGqyoTtnW6Jw7nxZL9RMZgWXCH6GBMAshgGQ92K6Lc6VEZUgWGiuzCfkktnLPT2m",
  "key14": "4NRnp8JYiUzcdTJg3Av5MeKCbe2LipD5BqUUP2bPHSSijZMNPmqQ8Y64FwoHJaVd7w7bVi5tzefvRPUtua3hjLrU",
  "key15": "23Sjoz6asTpUnvsVaP9d4EUPf85KYzTjN2kH6e9oV3t1iU4Z4253jVEMQPXRBQ8Yvh2frAJsYVg5FHRxVXeGjPEZ",
  "key16": "3uuTALZKBRcuwptHJUKV6wxf4W86v7DTNWzzSbwSGujrY6rzHVEAQoHy6BnDYRvAsyVQxSTokz91JWxvhTR4dn4y",
  "key17": "5vh6VvqmegBPvhp9bjXrM16JJ8tbqzjrJq4vCTonrhmj43byp355bscJRKTFoGZg6S4gAt8w9sedZwbueoMJXSv8",
  "key18": "43PZnr3tnD4765rSe4q8G8USGN6CjMAqNQfDPNENnMQg37UQZQ99U1JbCQChdQqFDc8XZid3QhyGYfxaHwJncWLC",
  "key19": "5GGmcEUATyUKSrDABEZgj8QForXNQHXiwqviG1RowSuujKGhJVNNTNGqVRwVvNtzWPUEv3czmS9nFSFLipgzNqJp",
  "key20": "37XE8BTLCzjPZ41pFk8itMHdq3TUfQDsDrNAKxuXmaeHDiGneHuLZuAbBw3N6Nrx7e87EcmUbjsStky6nNi52KBj",
  "key21": "3Mepmguu24frZ2LhkrsVGYSS8y895kgPEoibPGGQaf4TBs7CKpuB2hYqmDWGRrUfh8rocFptGD5C9QJaiX9cjzLY",
  "key22": "5roUdFmNEh6d7fQGSxPHqVjeTWQJZAN6fQ3dguMeXde9VFMMDEtsZUWCFw4CzkSuo5KuuRCtCRLeyXRS3hBaPxKy",
  "key23": "56SnGFiwUnv8dGxQskCGJqvssvxRhbJT9zCBXq4dimRGUk3wWpBRbezWaUQ5bxRipkxGJxH7PmzVmMjoHHU2hckZ",
  "key24": "5dPQLT65ZfdvknVtWLD3yqGyYkk6ktNUJ98jsiPVP43XR6yPMV7t7LNd7cHRBpTCkRE5QYawiKQ1JYH978o1yyeg",
  "key25": "LGsuzTxxaAFaiCRpAiASVc7L295wFGpx64SAkfdPGYMDjA9xG2Q1RAQS4m9tJN5giJVMkCiPWef7GpxJEtse9vA",
  "key26": "3eAeQo2ikCTVqSA2THK4c8pdqqZkx5T6RxFccMsZZSaNPooMbBRDMemVFN4S7J7TYcMYeeWsLCbicHPi78tauXqP",
  "key27": "65JiXTkH5wvZQQsww4S3zcLxTtovPBMJj2DSYyn2wpuydBvVvwNAJb5iMLi2xq1rU7Z88LBiRj2zjj9MKFroEHk2",
  "key28": "3ZCgpfBGe5kYJppqTBVmtGS8drPtt31ceKCYeMDhjxJyJKS7Wmt9mFNGEqE3A7dP571i1jmjtk8BZ993gBogmrLN",
  "key29": "ixZcWzgYPhPGeNhWobvfn6xXAfuQSuG6Z24hy23n8iyp581n6v22TbSkHeCpHsHxFjThq7xg76VLmdtDHnteXmJ"
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
