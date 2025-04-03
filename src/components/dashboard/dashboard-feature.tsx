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
    "5eAYe25k2c6zjN3RVD37iMaWm7AheEWuBEvefm5CFQeDPNBHVyXQNYKbzYJSyWAfghJcvTZxywUizZRehG1d5fT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTArR7HdBqNgx9B85Uc75RQnuWL3zzHhyS8ziEKJdYE4uuHNbq1aFLXtizqcwMhkvr42LSEga6anH2f9NNL2eaP",
  "key1": "3WoAd48Jnmfw9QKMMfyws8VSoADuffK8eam6eq3qrQre5mf3VxjLeKvxZeEuz1puyb3Tjg7qGEM4xug33b9TThUj",
  "key2": "4f5UwyeQMFFxmt9mT87TLdGW5C3Qg4XEkuFsobeaTpnLkcz4ukrTBFE95urZkWWUEFGs9nanEtxu66aGGRoyAxFn",
  "key3": "2kcTa8DZgod5Ur6m3tZPvCv7EhFRWws2eWy47b5yUoZkG4BXibBeb2cCRabkqf5KGeXJ6knMC5DBJT2mMsfGuwHT",
  "key4": "2oC75E32tV2pUu6koBL74EF15q1RD59Bg1rgqDiUc7dfgpsorw8YD7ySrS17F2BkdcGeh9m2r89SH5QksXLNAuzC",
  "key5": "53CfRZYXdNzfVxc8bjPFVgNmU6b7R7To9a9iRbQqF2g4k9VaSWNePDdjSqpbeKTuNHUTtnr5aJMeraMENmHSuKrR",
  "key6": "31e6XN9kEcMUQzdSWWbDGm4SfrTt8HJZmtwQbBrgzjmED9BDELMhcn8iyVe2wbX4kKfEAgvEXjfJJdkioaKNonfS",
  "key7": "2u33uBkTtAMBLxkHxuRVYW8K7ZVsP6r6BqETy6G5hHnUbz6A7ZH7rd6sTkTHrPyZSiW4pEesQon7WtivjvVV6xmE",
  "key8": "4rAEggE3L2eiDmVmHAhQES488UquEiHi1Ua8gJSjJSU7GnhjNEDx1KrUMzUjyYMbyNDZQJnoQa7GFD6i2vzQjnv5",
  "key9": "2QiezSwwTz5pW3Vfxub9PDx9F937Nzwzs3zhAZQBHJLwzboMvQPozmrFTKAPNW7pPWHPHL623DJ7tMfLM8BE4ZYw",
  "key10": "3b8cW6JMbnLgE4S2qfGMhuHNiseWzU9DGPNgRwPuff4UYETPVXdKvn7tKM3o167Sv8Kn6Zsgsj9Md9aWoS5Fiyz5",
  "key11": "5e72wgZ3fw1VHCn2vtasj4a8oNtxXXkub7p7SS8up89CERBZHiQ3g1t9xxL7Qey6P6CEQUwPkAjWmTx29U7fpvgp",
  "key12": "2USoXtgNvtr4iZX6fNzT28WLBsWVqXYBb65xdGKbiCEhnnRmAcXq9twmvnPFwxwSd28L7z6Yz3vuWSWwfeD3CseY",
  "key13": "2qdgz7R9Bf5JJBNvr7H9cTzDpLMdqThtGAGJ7vvLHEE8xS8J7f4nYu8PACMzMNWzLTdjXhuAgfQbvFz3ZcDYDwQ4",
  "key14": "5deLLRQQ5HA4CAjnkSBMyfqktfhvs1u6mCsbyecNp6CfXTBskwEDU9oQiC9SfACLrJ58CaPxtxfJbJAHtWk76EjF",
  "key15": "4Ciwdq4fuABDwP9caYPUpU7v1UZpgGVvPNhKmNy5bGK7QyHfAK66mereNSKPMQUvTcLeMB7xxc83vZcoWRsHqSyN",
  "key16": "1C1p35DkG99BYkZKa2RZXtTx3gapx8Kwf3oLmzGZkP4dYm5FmdSRg5Rb3Zbufpg9X97bitbX1D2NkcKkJV9rpxs",
  "key17": "3L9RiBXKkAM4wKFCEbeue8chfqu16cpeCGwAxzP4VW63zaoZvagTwW6Jpgko1STuT31YRTfejmWHNYKnxQVQNhS9",
  "key18": "5TGGQPdRF2hGDc3T2Kd58PQUo6NVXFu1JtBogrSvi7kXQ6vWexop4WVXZEwLnKV9WjjutbMdZxBf3hzBZrmjDegx",
  "key19": "5SiywkQHgMs9rr7g43ssNhCrzt4iCbeTmJ1q1swRceeZVZ9DtFsufxkpLKdN6qLiH3Eb9KGVmf4gJMe38yp6qJPB",
  "key20": "FjS4gjqowrZpsr3wbASyW8jwUfkci3Yo88XrVG1gxWqFaMjGZ95KAknMDYumPijyWVVgJDRczuqKkKBvRp2Smiz",
  "key21": "5AWbvhTNviguttjQo85t3Ugmd3CqF76LtKSLWU55yTdm6aPL37famaGM2YfSwACjLdKDTfpuBvDGxgu9rE2h5yd8",
  "key22": "3E2nPt1uF48wUuZjzYTeJmSKjhkxSM23FpxPGmJBwaLsGztKAVjRGRYYtLbWJ3wzvXy2M62g1KQ7kHNfvtoEfey3",
  "key23": "brfaUiyLHTph8HwRrrgDZn2CCvLDKeyGEzXyM9KgLWaUw16RqNWWP9thr1ND8mo1FxhV4qbRpBJRANSr7HGwTdv",
  "key24": "2iDGtjHGrzAjEwtnaQZUrGm7fpzGBTeEDCKy4J8AR3JGRF67bccPdicb8vWSnkAafNx6ze3cpW1SZFxQuGK5K2YV",
  "key25": "5SZsHygcKLrEwbzrmjpVcJ1MNmsFkUVXxehwULfz4ToL6VyhSNgiNgUGdBzQbgMzf1j1qa3jPrxkUBiauKwGbbFV"
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
