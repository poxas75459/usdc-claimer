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
    "DmqRm9bER5LXEsboYw13ajoBSC27MQnDdWHLnbDxvDqjRoqBVnVHTapvJqaRX12uT8QF9wqsYU92g7Wv3vMCtk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNvnBUQD5NCWvgNmaWLUjrqHrMT4xCtzQNnMzRmJmrJKzp1iyjyxNdXDJbvpnsEycL3at2KNyrS5Yu1b3NeKiF4",
  "key1": "HgfoniqRKYgSnkBdQ1qk8L3fZ1uiVFapn88fYcd7ja5a3xRXFqBtmaiFKwKD2ZCSJbG3Gct6Q1uU77FLwsovpD9",
  "key2": "5WuGBpf7otu6XsQW6KKuMoTB9FM3w5dGMmNGh1VYGW8G42HZ27SBjN1GsM5MkxCtAbfKF36Rmw5BkjqLmb2x9P1k",
  "key3": "2PvnyAw56dnQP5FuxiXDgM76it2UucvM1Hx2vPokHpixEde2TGRD59qggs7uypgefnR1SjK6kSodYmfoerttUyn5",
  "key4": "3wzX9YnzqiUUvYb7gk9rvATx5ZZa1FavEm9dSV4TJwwn6DFuWWhUGyTkZJYPqZJUprqDcqZDgyXua83q5HY8UfEj",
  "key5": "4xAb9qshdAjYZxVFQf7EQaj9vuf7edNmbb2D4iKnHB2nRNWmmGYnFhBx3sF4zwEf28yuYPvuXzZQLD189KjCjZs7",
  "key6": "UPwFADiTH2XEgeqkTzuV37ojHNr4KGdb9H5dP5CdZbaYyQKgeNsdpKvLG1v7KsjxxEaiCBA4Br8ocsLHfnFWz6M",
  "key7": "39ZB7YbG328Wocqopsz7S5xyMWsEkRWhaZrsLkYX1FLpp3BxgxoEtZVEmivW4ZNRUeBEERLR76phhWcGPujQYVwF",
  "key8": "sCzt3f6BF4BZ7hWEnp3bPh1dCxjRjHRUE6qXyPUtXrCqUsNuFWfWgASwrjGxPX4ozqXREBEjFqWPWcAnr9Hqjcy",
  "key9": "45CJQmiGLS7ViDtUaPuXoEshW5nvo2ers5F5yzajJyeJdQroLzukuwPZ1pXk5iXqLTBRWMc88bG1KFTPHadS1VNr",
  "key10": "3j9uyfJc1MHvkh8boksEQ5kYGadz1Sjc7UvfouL39Rh6Xc3VVEa28W84fmZ8yGCxkDG5JeTJqUX6q4vbq57KG4Pj",
  "key11": "5gZr9tC1VSbdY2NfJ9g8GuWb9orBHBFnUoT8Lc6M7VGSc7A4JwyoVhgTapkezPL32Ef36KKDFjSuLge9xE8RfqQZ",
  "key12": "5wQySrjwLrJTzPaXMeya3unLKWi8vuhyvfusrsAbphqsskorepMCb4kJXQd7spHaRoHpXsQjGcs6v9mvoKJV8AFq",
  "key13": "4W35GMwDpxqCtCYM37p81ymbjiaWvLyyNMPGVQFhX6ki44XxSZjoo6Egxh4KU9bdza5GdHeJPkvBGqRbshd84FDJ",
  "key14": "4KRL3rynLfgtds35V4Jz2GeaV7E1bVssa9tccNkVsjfP66f3JEVQvAVqdk2pZJj4voHqfpZxRv2MEL3SVoZJJFe9",
  "key15": "273XX5brb7cA3JkApxCewJx4m4q2UjLsvrBaqoAR7ppNo7M7DvV263GJednzvkjxq925rtyFyrL3aYtFiU3jKP1p",
  "key16": "5v2BhxhFg5fmmSJmgsCxSepwjydwYx8qzQT6mzqeDbDmUwNVCByMsMVYvDCKM1FsJKk97hY6HyAp2rPttUBzhqw8",
  "key17": "NpVUkyjwg1c9jpX55JHw82WTvNkyX4vWn21w7HU5UkLTdZJD3oMzX4fXPSFiP77KpKZ8CyPRwQgudV4AY3pVauw",
  "key18": "5w924gZwMmNv8nD4aK8L6eXSBVmgqHonA4u2b5FdLYy9P3dFRyhh1DATNxw5DnDRhXTsG6F1Djnqx7JtUmqP6Bda",
  "key19": "rkdTvAAYfKpEm2QShV7jnubigAYBSHaF5g2WDJquhiw1LMXPAmwTAL7CBATbeicyDLMnRYNXACLh8EyXpnnQ8vk",
  "key20": "3SCNxEQhjw649C1z3ZV6W9EcdpH6nMgy4dDjumvXML4ndbqgrh1KA7cAabyo7VTAu4SpdX8ZAeKkxKZejuPF3DCH",
  "key21": "5fvumZgRPCfvn2NPuXZaZR1NKtVhjnn3d63JYBSpdSiYKSqdA2XVhUcCSbdvKogEzfAb8pj57qZLT6MVPSFNtAb7",
  "key22": "41gyrnCyfeny6hnJsEA3KoF11ezYSYk6XzJUPr4yBtARhpHDEFuktXaJCu5U4FQqiCWYpKFs1ZEKeMGjpUAVP8HU",
  "key23": "4sDxe7Tpno9QhB1bbnUt4JtUBqBDMq1Kninf5PSpDJWLXkGdmQKJE6SSZ1y7zzqUFj7J6HY2Yoanax3cL6BSwW1W",
  "key24": "bGG7bPB1y7vdjAa6b17YUeCxwxgYBssXeV7bsmCWK9nPPDnSkQbZ16GVdw5YGMYsZZTQhoPjdBMU4ifSVHN5dyD",
  "key25": "4FadCu8mj4Yz2Zd6GQnrCGTvEvEHwifmb1kMg1A3MqtZftQfYxu84LrWptvseibUviwV3JaqKjK2Pe99jnj5w7eE",
  "key26": "2oHd2uZV3fF8FxQoP4cMuhkE4DCS2SpDrz27V1psgcTVGVNumJMz2mfxu9121WfofMDP1xpnMRKhLs2hcDd5FeLM"
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
