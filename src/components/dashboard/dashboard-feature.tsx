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
    "4vR9cpALPF5rmRT7BvWTjXhKPEo8NMwXRKngV5PS1keQSypVW9qMWtzRRLmt6bkU8GuBrswWzDwvghoD3486T7Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRkvBPcnDLDTDsmVhmKUyvnGUsby7QywAWV5yA8NCZEFLwadUyUHEVwaBUx35YHTdWYAt4RAMPRyhTPzA9vb8yQ",
  "key1": "3o6tTpJ6gadbBXiyg7dsCpFd493vwGu9p9bbEhaE5ZqyK3nUh9Vg1HF7ropYo4zsEzabpj3pfhJ1WqfSrVEStcFx",
  "key2": "5yVEfyEwUu858joXbqCedSxDoQ8C84mgfxa54K8y3uAF5k1LpZbQ4xExX5AEpEUcA8RLigEqvr82FmrfaiukL5ut",
  "key3": "3YX6u9QStwkw3rYL4NTsAVeR6duHiNjXHdjsZspFYB6WJVJyayayg9bGLuFJPpf5hTK5cYqB9Gqb5JB81jEAqF1Y",
  "key4": "4JZFhQsjZdonDuuSxC4o54Q9fAkRRWo2ennM4SHeGqQ8hEZUqTRiahKpKoXS7WzJavkLfeq5VZkiWsTTqziQoKyc",
  "key5": "3vy4zKHKH9Zoi7SUSmaCjiXS4m1R5fN1L8mBoTVo9jh2UfB7gfcKcZMGKdrjDqkzT3j2m1HieinaDeswCysUU5RR",
  "key6": "5C8AbfQM3Ynj3snT5Yt3V3YSL81exDSB8FFRGtjYKws6p4ajrgw292KzqtJEDdDyFGefJKEEkoKN3fmrM45W5zbL",
  "key7": "2UjVK6kwspNDEEwExh7kML6HHZpxtLehZeXi8Su1hw6ehUHMDqoF7g3uSZuepSkbNJAeQPChVP4QiE4Z3p7cMBhp",
  "key8": "2wyu5gJxvTnmAkDqNSxrhvZq2CtCdh9x5s5ZPzuTubvKs9sNLsJ1yGTuHPRBrsLivUyNzHhSw7xsEDn9cpJ4HMmH",
  "key9": "2Efrs76yGnsL3t64Ad64pL9uNpJRkswhLmkBEj9b2DhAwQNVJC2QkdjtdvMi8b1qbpHHbBB5QGMPrYSLZCnYhM4v",
  "key10": "2hwQQYh5EKDSt1pR8LXixFozzVVVrBeZ41mSR8EafCXLLQJFb4CjHJPBuRb2uuEuvoYEpsaGE45GHknr31ARGPTU",
  "key11": "3HsJU9V9q2qAxF9yX8wQoqjv7yZZTZjzMyqyYgWQUhgqonQUvioY3AGshLkGSK3xpZVxo6K6yiBU1iyrj4f3qSH8",
  "key12": "4s5Xmc7LPVSg8NQJioaktfR5ZM5pq5Nmwvup99WtES4fkX6CzaZctsnueEcyRwVrmp5pdLKanjAu5PjMLwf2J8iV",
  "key13": "4LQaxP3LmZwQ5Qye39x37N3tJLusp1YYpzPjVkDkYvS72SicU4d7w3kvtD8CU3PA9aGkhQd72FajwJt4NFun2BYY",
  "key14": "4df5C11J1ZTAbGgKNaYAh8rxptNvg1XFpEv4982BS1gVGKLCeCsfQpNc4bBunwcDBJ7JcR9xUkSBaiNvHn8CRGy8",
  "key15": "5idiUCDKNRhXksJfVNVCwepdHFRwq2LqG4W7ZFDCqk87mfhZmBmrVfNXg756m5w719FCuGKdQQBHSbtgpj9L2J3i",
  "key16": "3BEdkU7TGUZo69Ri76cC55axjLka6F3FRWJzYmY3YvTYpvMgvAkPTuWDBjZm9rRDyk8c4672p2UxRUP2rUNdv7x7",
  "key17": "3DKe5SUXmu4c8seg9XdjJb82bCjMvythg2tVbKN3LnkjgL5kx3NK1eE1rxzYkS2CofJUvqMxk6qAPiLuN3PgcD5r",
  "key18": "3P7rGAG6E7hBf9m1CkcyJZw9ErMneUeLApah2mpZxCav2GspfqryyPHYhD3xbNVo3ETZzav7CCeCK5Mhp7PWVMSR",
  "key19": "3NHTknWgaJDjKFpyZ1NXyqE2cGB6QGRmdu7hBZoNLNYAToUsfuhYrBvrhDWt9pDiCEhBGRcjMLPyCvaZHHJDqDFs",
  "key20": "3iLC76rT7hkMGA48yXtfLvnP71rbKXdUMFn3dMqG3w8oWBJTe1pBt83USYWXj9B8vDi7UR48ModHmEbQ8HaD6KsC",
  "key21": "3wfYtfbrzX7TUCWc2zHA8cgR7sRrwkxswo4Xbo1GfoFAu8Sx6JyerVpvQ61ug8EbvhVmeTNYDRe4ArHGgYeCSbJF",
  "key22": "3FC8Pza5YVoC3pH6Wjjzzgn3ndZZ1EBXm25yoyxyA4wfVPnB8jKPdSdodqMnViwid7q3iLEQSzndg9wVR6tNbswb",
  "key23": "5BHDpkp7BocbUECDyb123ZpQRDhC6uRxYbpZLeg5DD4jFBbc3xDZgNLB8EEX2tCnYDTKu7bCr1cvjwJ5YcQvHPoX",
  "key24": "SfYdCk2HcJkagq6wkkMBnAsYwbxM8tNBq3zB6AxY9LU3qrTKnG9t2xCxQsuJuAamS3MJ1AfxmYbcVoLNJoBuT5P",
  "key25": "HGVKQwhiFU16f8eVoeZZKzTopePc3rgMcHL1FkqmoYsbvKBbGPFdurMpVNH8C7K8aEbLq1W7S4rSCgihs3wGxhu",
  "key26": "3J11c89AjGzBLeRNMAunRoZtPz7yJ1a7UhHCe4Nb4SAdvLaHTW6U1kYwDajXetuNpeBQWnNJYjGyCw4vp8Yi5dfF",
  "key27": "4F4W1DV4AyciG9dhbyKeDii1WpGd2LsjAdRSQpP4Staz7Q2MGg7aQ2QT43PkBasRGMW7dCtu8KQFj6eba1n7N9Kz",
  "key28": "2M39Ssjp16RMLkoUvDFWYLRzaVGWorUG7gBEWw4z9wN7NLT5d1Vpn9s7iXHGS2h2X2r5zL8JyfQca3bWpMdDDPaC",
  "key29": "5ys9MkPqKRNSavph1JE4xANBhUe5Sfmpk2n6W5NrGQ7VQ8gSUQVSBRUbYrk1a3ff6ZY6RCBSiivmdW1YyZjF4xAx",
  "key30": "5vXLyjwe9ByN9NQMozAdo4KMZd4NMaiaHzUNs3XiEfhYu9dYMSX1uuzx5JsJF2N9k1ovqh6WQ2VYpupCorugexFn",
  "key31": "5S6sibxnfbsnzZ5G7SvfQsjppWAj6R8U79pgUVU5re8SRvnNQvs4RJcFXjpJBHranRNsDqZEP91KXLtxNurX4cFf",
  "key32": "5RkK3bwS94CvArSTLqLAmJnrv2MPipT3uVbMGSQsXzpqHvfCJpVMWPX6tPoBuK2zvk2PnbugpL3ybD6MUNxVNgRH"
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
