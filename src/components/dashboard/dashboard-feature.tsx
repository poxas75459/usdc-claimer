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
    "2jJKwwfyASu7hGuLGo7rrUM5revcEnPv2EcdWkxQgbazjQXXszFMErzCgV4HuM7HW8Gqpvik7hwpHB6CH9PoGGjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9ansk79BufPLDFfNgUtdesS7rZ38NMNo1oBjf5g7shzStoUbT4wYfxGQM3H5MWvsczajzq3fM22f6Z2iD4n4iS",
  "key1": "2cGsuPAAGzagY62cGv9nsFjqEdPyPsFvqY5KXGrw6pH2Eow7obXCNz9MWNHQTfw7XE8ohQMqu5XVXgU4Y7FWE4vt",
  "key2": "3w2a37uoogvDodWKLi2bvwSFwwioxSP4LrQftKXEk8q5uxLSYAWW2fxitt1sND4epGLDd4Fwt3fNij86j5B37zjN",
  "key3": "2qhUinM3YtskF6vSbmwAWnhD6DMNzhB7Btvpf2MN6sbMhDk1Ch6sc4yZtRkp7RLiB4GNtTP23QJoaWo8UiiKup9X",
  "key4": "Uct84LF2NECHsCoJg5BjNvEjRHB6opzGHf4hEMm5AES5Age4HdBk7hG6CTUvESkTSdEv2JQYrMjGyhBLvYX9VYR",
  "key5": "4VDXyFRjwnqjD7ukTvhw3secr4e3rVPhCRrvQv987dHWHzR6LDpfjqpXX5T3TLZJkLesDU7ve9TVAdHXNrvRLrMU",
  "key6": "2nN13C2LL3wW49bZAXivnvX2JfyvD6xzggbgWhrV4HrV4obs3yBrinR8jGoxY4h5qrBtVbfH2gSKd6jNdApAErcT",
  "key7": "3r49nnJ9d9uKvmVa5ACxdx1meo3rN9CSbtkhDZPBoZxjjdDZCH6FvXCZzy1TBjWagG12QBxijehXxhNty3suwJDP",
  "key8": "5spVc89CcTvN6RcArbzXdnJ7DAQyp5c5bqoFnbA6nnhAr97HEvfbv68GEHynn5bevSFHHBcGZakn4Fmbmw43A5Eg",
  "key9": "2W2bVyGVwjHanm9NA5UQ9MTzDUkyU7Vv5k9YzmoLw5Lq83ws4nhsA1oceQWjdmYehn17tu3Zq47qBFptjKfCJFEn",
  "key10": "39FFiJLXjqWyUSNwMKDuM3Jzh5JxwAxF4qQQud9tj474q84wFtGL1zq9vuNw2k1rhpmQsgbxGerVDKsYjB3qNVYw",
  "key11": "5rBL8wB7nAeGbrpHQDRZyKueSF6BMncrPhHCqPV17PLYRVQWVt9EFbnaNauFZnGcQyRe3YfeNdQ6FqWBTQ8rGQmR",
  "key12": "5a2upQwLezt9y35vYHRfQks9RDM1ySkZm4NeRAasqKRKNL4vBuywjC13cXiyk64G7AEpARSR6bczqpsutNj2yHQP",
  "key13": "3N93u4o5U9mE9iW4pemBudFPn1zq2nYCEWDnVdZd6KxYWijhqLCM6fPAMNMfv6ikRmNTbCqAvjQCGkTXcHX8JkSC",
  "key14": "ZZQxzphULF73HMPAJcW6KEfVVwTHVxP9LNfL9BXgJzZDYQmRZTP33LDqzDG1aVuVPYfGDh3itiJRcUyrjSPK57e",
  "key15": "2sss38a93Nbw8riJADDWQDb67AZGpxQFvJ97txNqTjfaZjEuYUHxWcLCgyVoiydeQ1MBHY9J7e9dRMaE7faTzRYQ",
  "key16": "4uLcGJTrWjzrZeZ4MqPBgvFct4XJppxWPJCeSbshVn8qeVKTgP7PfJHD56pbvPBRW58nFPrp9yFPSDGwXG4WhwgW",
  "key17": "uv2D1uy69tQoq38oKygd4sLghb5uH9CNQuFX6eCPcXEmK9PFqo9LH6TZxbCafKVKNuj15osuahVrb1fn59FurEm",
  "key18": "czR9hRweVPvSA7g4bqgRaMNVae1YDojPT2PF5EZBFfGKUtFK9xFve4QZXfzEEQnKwCCjFUhi2eDZB8rgq1Bam5b",
  "key19": "4efnakVh8rfYzuHRUkxSybJL5Wh6LQvApVCP7CviSPoiMDGvU6JixkPQYbq82sqcvMVxRZHpwa7FqjYe2qqNHufE",
  "key20": "5iptuBjGYEH4hED4Hy8s8LpybiwUmNLcx6odHw8V5HGuoEMzMUwwicBz6cwxRiXB1b2r8Zj7XtZmGQJG5Chwg1oW",
  "key21": "3Hic9RLM5FbKhfQFGdwuhqWah7tsUiQGVzEymQy8mHSSMrF9RKPGGAMBMbaLxmLQYbx5uypN5C9YyeyVf3SvrVAk",
  "key22": "2uKRM8RiKHy87N3X3Bv35kvUkU13C2nxMezxpZf6D2AWPYzyGSqdvy8HUtdQmYbuD56RCCALSH7zBEQ6Wh13iXcb",
  "key23": "uHMZ7Cexx5ebsDLtyxqA88NN3Y2VnKA8QmEBJSR4z9KnmytRoXDbZLFW5uvAkZuxyo86jPa5JL8QuXPgs2KXPNc",
  "key24": "ZqQBD1w3WcXBAaLDS9X46BL5YtRP1X3tS6Qz1CghXcsVu5XdCTrGdGES8JN4yQL7sW3Qh9XNB7EDDfVuVKSyC5S",
  "key25": "4fWe1sv8rvx2Uaa1a9qkTSVYkc5vsc6sCysFYB1MP6djx6gzcU8eyzpKxsyxd2966JBGoaavp9jg45a2B8NTsJuU",
  "key26": "fpYYipqoWEGDqKTC6eQ1eN9tM4Hh5vUNAaiG4bK7TXYxF2HZUUeuKPoAwFNdBbCyCciaRtLFtJAP2vuY24K3CeS",
  "key27": "2qPYG7Ys8iSZsU2WoMuTJ5Urh4nJdMqxucx7xEfbPbvMtew53efyHeFPprVKhTyU1eQdwQep92LwXtU7yaPag5F",
  "key28": "4dEEmH8TQepweMvBXRcm6SVkdxkhye8VFxqeNXHVy3F4THW8Vft13Q3rRAcPEXTV9ncp8nNshL2ym6KFNd8gdz8R",
  "key29": "44bNE6JtZFeGqdwDc4Psmtjfmj3Yttj7MSXTjVjUjL7XbhutujzYTztCaSfx2uhPcnbj1j3pdb96fe1K6MFhY5RT",
  "key30": "5CTPpgkoTB4VTrRc6fZ89FhDyzmZtnGo4FqGtGyWaFWswnJFcF1vFpuJCkCYuc2qzoGQSxwW5YeAweVfza5pZGwp",
  "key31": "5wTSAE6QJR3mkR5bstRsqTHJex8MArVi36urBE2CY3Tpz1qLZJBNqjyZBbMvuofeHSwJC8uZKo342d7BxEwzQSwf",
  "key32": "w9Q6jeo2dzYWieCWbyWpCP3E1WCANVtBmjqxB8DA99nTx8Q918L7q8TAMDvKPRwdabcuQVWPmdcG7HwTN6QP8Hi",
  "key33": "2xEjLad2eyJ4SuSxg1aut67MKDFeXdU6r2VEwxQ4d2U8ZfbwSaJ1QZ87P4Amb6s4wWDTcN7rTXGz57HBDoZLAYTc",
  "key34": "42FDj8tE6b525eSecpTBwh3xstPEBmdFTQMG1SqiAHNc6NfNH2BXL1JjX3Z6kMuZXabftonoTsnC4MdZPjZ2q6iY"
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
