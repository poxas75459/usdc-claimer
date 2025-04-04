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
    "51wGZwK1QGyLXbcrP9NxQESQqTQZnhwVAmvH1a4DLvMq6Qc3vLFLpjaXza4iar8k78j69Xhj2h6qXJgxpo1AUtrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCrJm5QsoXFKGXv52n4ZAHAA229ddkQBfkuEqYBquXdNgT3TzW5bv42D8djUtJjSqwWyqG7EfprtFeJ7G6rnJ3E",
  "key1": "63AxwvKdi13en5am9cSoGmEbjooCBKR9Zjs1rB1CqktSGPkp3HaTwk93PvfsHVtdiiEnJU4KdgN7LdthtBe8EsWo",
  "key2": "3n5tFC9j4moUGArDivx164xhqtqNxq4zNrSqpmyGgkbmcVA6gNYFGW7aQKPFLYhRfimm9axWwjsmPELhWX3ocUa3",
  "key3": "3yzDHgB3sy1hUP8EvH9oSzD3TWHQiqRnEdgkaHpXXyj8At2pa6AtpT5g6KTv8HrJ5M1Vo2KsV8ZR2xrFmKUcetHS",
  "key4": "2KJtajjZBrMTaBzfjDC1FKU7YrFW2WCtypMLZs6Qyn3dzoXK3vuHP9W6VCANaugCGjSKp63b2EEVCUhx7dNhFJpa",
  "key5": "5dTHPcwN544JkufQp1MMDorCfT6SmxyQ7aMiQfVsXt3KyYWSNsHA1M4a9248oYFeVio588v2qSHpayEKNFBn3Dfr",
  "key6": "23SHiLhycrg5tnHDoGnCdpL1SigP81FR1ZwFbwg1vF2jQXHaTu5n5VJDBuqYxixovqpKrVX8Av77PmhMsSSezPRS",
  "key7": "5HbSprwp6AaUN5BnTLAxGcydbYYqFZV3ZgQjUBGRmPJv1CmW9rV3kfmZ6sCXQd9qXFrAkjsFst2wKQ3HaB7FPNNf",
  "key8": "4bKrofFpBxkkRzsYWyf9zy5gaADtfJ9bVfHCPFYxtbLMcgrLYd9PhuNqXYsBJkRW3iQKwcN6uNdT4HUbbpsnrrQm",
  "key9": "4TKMF36ztk4mQ5LxPw2gfuAyS18XwAmNw4Yoe2eXxgLamwQvrTE7ZhjcanatjUCkA6onvyVFmoPhaQTXnkbVu48T",
  "key10": "5aYWFR1T3xVspP6yHS3bcMhgMyMQGjRkRaDNoFDp5m8PoNtK2u6QmRhko8i94g2A1jLwFQwa4Rrbz6DBT2UUoGP5",
  "key11": "35B1P4SWRp56bRxCqhSFSJZNzuyXtohWzYHoTqZSxsvTB6ktRjaGy1YRDRNZeAFxXpAaRAz84P4ZbQRkwR6zJ1DA",
  "key12": "5dtYwqbVg4SPu8Ld679raT3C1BMpzX6ySr2wXoRqZBxhtMR6mz66n2LLAy9uFXze5Db4dstBifDRrMHce7ZQ5zLM",
  "key13": "27f8suvLidgZENXKVpkgTcHwWbvESsAUyNzQX9UuHcB186n1HHR8ouBxabnKMb5CAczDGsMXkbv78JU1C6KFjRyA",
  "key14": "3a9oXbnajEzmQNN8wCbadDvf5WisoKzyBMWwa1HMoiNokpRkVaycdkUqs7PaeRtu8TentGx1r3DUBGr1DVV4iKGt",
  "key15": "4FK4oJ6jVziePKrNEqpziDnz2SS3BvCMnStaVKX2NT4yxR1T8p5B5YFpLpLSpxba83QgLwbSKuv5iZ2s172Ryvc7",
  "key16": "bYVAH2xYrWLTEybFd3ZX8MJi6hJaYauZrVjdoAvx7Wifwogeh4vy4xJEBMcejHeVc5tV3xzjxukq1nFBwzR5WvJ",
  "key17": "3ishuEXfiRxJAh6HB8bUQKn1pGSixuTPzAdfre4PSYyAnzDSg2MC7tVRWugrj6NpG5eTwGK9m5dTY5xrgBvsAC5S",
  "key18": "43fbdpR7HCSoMVZTy64cF2yTsJbGDnVVgdsgVGNLg4r5UsJ8XVTCEbCLh5Gpiyys2jjdZPf2cFfzuTeGg5NdNSyi",
  "key19": "4HaT4eSu9CEYhA4h7UcK6MhBYq7RZUn2tHfJUiszSYPWHD15TbwzijcjmXEjNagaGExm3QuNnJedEcSaZ4hgMXAr",
  "key20": "3DVKkvdcQWZkwAbwghsPSoNRCGzNWffZfAznbRNqEnKkv6uCYkqUpBUTvqxMy7cLwZiPA9rVkXksVyB6Sb1Hnm13",
  "key21": "5taPs73eVJFSGC6kkaT21DjBtT4Fvn42huuoV4KD98mCKAbRAin4KcU1wqaPVAKPbNyxtqP435WqSeagXAFa3XTD",
  "key22": "5E8m8AkxAWkh89KzouWj7fHtHfePokpSysmY8guzTzUQ2gv9SUowZBb8iqAPeFkLMiqwAAjfbNUCCWQRXo1epa2P",
  "key23": "4ezDv8qcwW3QiuETaW4kYzd6cpCMUXQ1eQ5FZedSzRa9PrZR88qHXTnvafAXqqGvwAJKcT9EWgNHbmzdMnHbXFkT",
  "key24": "41fMU9CpRXmL7HFBodyw3NowsMzfiP3Nm88bfCCDb1oXbEZYMMYa2X9QQxBn7hjXU4pFQc9ENakva3Bp4DRBkQdt",
  "key25": "5vDyHxj5qkqwB4SaDBMYqtKE5hNQWsQduht9yEVtVCAet7r6EC2SRtkWVUpoSuFTxL6fzbDuXRcNgeDeszbxd5hU",
  "key26": "4DLCWSaAYv3rp6GhfczaxNkUAJr5xWYVHEgNzfgawqLK8qPaTXwcFdeoFKfqtNQV71jvVkkGK8f1sDcnUuQ3EpBm"
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
