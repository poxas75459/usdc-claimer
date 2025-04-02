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
    "5ZMtCUmDGkvS1qnVqUbK7ZWjWFetnbeThrBzduLyNFhmFdPWipGQFAThiy83WMANuxpyFHafRVS6FyujRK3DTPHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "441arJ2JRzfkfUbzyAmsKYfYWr7jzRi7FF1kPQBFcVWfiH8yeAGgCbe2gygQ2At6CTvPMjK39Nv8pdRLpNPsNLFW",
  "key1": "5D7B8dUHUxfXEXazEUHQv5DmZhmLNC44J5z1724JSKXR3TQRguEiGH3n6PrTGaCByt25BpkebixUyZGA4H8vnUkJ",
  "key2": "33JTJ7uYkJEKMh5d6jb3UhEhqbbQDtYfiqaUTN8GyXTukvccHgLaVrsDX8x925jwZvQWVdJUc52ixSvfxHyfA7k4",
  "key3": "4XiFCLgoze45Ez33P7NWx4i9iHNBd9N4FhvTGS8GE8MnpsQMGsCka6Hi6CCP88N1zUxLWG4d2rojd3ic9NUqtGu8",
  "key4": "5FEc9u3fn3EwsptebETMwvmkvXHdW7jVFjvB5xBXGfngeRcwFF5kbVKrj5C9TTGYGnYf2pXJfiUswVX7jJfUE721",
  "key5": "212Wb48avQjFjQPdniEBAWHdRyhQau5mJjCebfjb2njj6cdht2ciPQ9kofGanA8rTD8PyJ7UGdGFVA81zwRdweRb",
  "key6": "4putQuQYcGTPQNYhc225sMjo1t39GU5BjaMzKcZ4k7ZGeTRnPnjjouZfRk5UW1fuh8gsuoL8fdKkHSXyZGYtyMLP",
  "key7": "Liwaq6bD3uxJT3vnXyQ4nZ39AViPH7179WnTzQttyHYssRGrRsV8bM9erXn9UxaUPJW7dSYaszS74N889NHHGPS",
  "key8": "2QWCfHPVa6K8LoxyCog3Ew3khH2z1mkBny84uH3M3hVEJY51BnYED2VrAWe7j6bBk8Wm9sDqnTztpavsjt7Mqzto",
  "key9": "2dUF6uM7PzQNs9i4moJnNKBiAbMPskGHzDwuHKBeLtKtcLFhpNtHwFSvshzAtNmqZ6fkjoLt36zvKQgCqWHj6Qgm",
  "key10": "5UJZpAer9uYzt9FKCRtDPdagXLatzvGUE3HpDp6mggwdRCLcJKhs6isC2H8Aji66xLN5F1q4nTFFSfVpLXZFPRpy",
  "key11": "jLzskV1pxoCYgm2vSX1WqRE8cwBw6RavR97twQceU8xg7zdBfSYUuKaEePZuiLtJwjTb9QTqcsDkxmjwXcbNK7B",
  "key12": "26buA3uwHnjtpRwaJ8sTnezzDfQwKYcCW6sLfGDsZzBhQmBkwin3bBwN8oHWDmVAZtn2jKehy9811LrmjCvab91Q",
  "key13": "L25guUSczmUzpiTpEoBmB2Baf4XvQHgw78Hm6ZerX5urnqrSQb2oUr29oHGMBR3fnk8zDDSGfSHU1AWXiwKJJQ2",
  "key14": "eLQx3sdJJ425vuFJruG1BdNY3heF8hrCkdMChz7f8asFntgYaBBwRGYfB6rL5iqwfS9ujUatw76nCbNfk9tRx2e",
  "key15": "5hUiLSqnARD2sryQ33CaF8mUPAQYa9qgkdbDa3V7vMUpo9WRkP6kRUpm7h2pUMkpcK7D5iYj9Nbr5TD4kvMbQjpZ",
  "key16": "bRW3NZS7ZPKyvyFQcqpHQKCTxXALwacbqH5s4uLMktmKTt838kh3HsqscgnAaSMJ6S38jPgYUcUqzx7ZntyojaX",
  "key17": "2NMCKa3PXM6xhqWjgjsk4qyF3Y83b5JYrZk1UkEvLNXjJxEDL6pfEuNUHHbsnUnSJTSW4im171Wh8YGZ8vHAT7WE",
  "key18": "2FyzZfKSno4KSgzbQfaauvVBrXT9aU5eDxXRsFbPsbhz7GbW28tTs5CBPe9rFca8gGTUWG76CvwT5ZS9Yat3ravB",
  "key19": "4v8goCAv8WFAy3ZXuUbf6jR7jh6riqkzYZBDWHPv8Ddou9vA9XjPnESepM84fpFKVcKKksjoFsEvSe2uByrbVtRL",
  "key20": "yfgeHaiw1H2aWLtakWhMbqFBcsBrVj1VozzE5crEbi18z7nAu5aJZbPnCmpVaWqx3srnNMMtXBAErDc8bh9CX2Q",
  "key21": "3gjY6MEiBtgetnQmF9cExbqPVmQFV5JzEedRyHE6rFseeTEdJdHuyK6s2kh5Rgtgx9aJ2AzeAM95FDkb9ymXLVpN",
  "key22": "dBVGq1BEcVRkAcxdoXGVbBXHue38DugaVtC3va8vefLjNWAEyf7Ssg9rDxBDhGZ3h3oR56xUtNTL1ZxqQ1suEUJ",
  "key23": "5JRM8TbX2SAVRPgEkFwEnejtNocfTmzo9LMcTVod9avPqfyaoyjdAEGwATGqrV4Tbs25kdhCBnvwnoye7Dus7DTW",
  "key24": "4iNWut8pAE8wSoPjXUHscFvTUJJrz9o7wqtksjjxcuHiLsTSNFacAUQCU8Egaoo7zC1u7Wc4UDdQVfd52Rnc8eGx",
  "key25": "FKwuPaiEcKW7LjBGJQHM4Qn7oX3e6sNxTfyctL8ensbUSt5mjUNMxtbpui3r3FViokt9Af5a4fg3mprKqjizxg7",
  "key26": "2vaDRjWr73jo6yctBfToCKygVjTLJsW9C4x8BJsWgoY6seB7XnE6shAVk9HaiMy8gHQZeivNNZS7ixxY6HZ2wKLL",
  "key27": "26Xz9FzGoEApV3XWaFDj7sRLzfiHRyDJVoG78FCdCwWhKXG4hbTFng2SvoomxMUf1Yny693hHxU32iao6jjh2V9w",
  "key28": "29uswAyvTeHjv4YVVR6CA6976wTfPeiqcnFKmTvSa5c4c5ZqN5tdbF5xFxmPX74mmPUzCaSY946kqSkVKXMNHN5G",
  "key29": "3qcj9zf1YSXwccN2F2ppWn1bq5RS5rrQKuGX3HwWw5Yiweazo7EscV1VXEyihnMWFYXjPj2D4kmpMa9hghzX6yvy",
  "key30": "KnsUKD8fvP68iyqiPCC1VhPTokpsMhGMVBgmXvVz2uq48VFafzdd92UjUfjf78pAXwNhMrLfQWKHg1N5e4vEyht",
  "key31": "5erYTrTnH5jowvnA5r5sNV62m4MMe35ZtDBFejqdKYTDM3MrjwhB7jG6BcG76CmWFLuvzjEY2CnCsRsEke74hhsj",
  "key32": "4kw4bs9hwCPv5QLi3httjXw6oCiGxnCpKH592LEAbTYwQqJBz1tLAJ6g9XFeyRfTrzqumu11JHWHZzukBboWuwt4",
  "key33": "4ZEtKmwe3d14n2HPdhyQVpQbmMszNJb3oHrhaaTQXz5swpzDP6jF74xLzoLTTNtsyzsDnkm5bUp3obxMCdf6Lkow",
  "key34": "3FdNWuK4Hcf8Kk9RAxEQTarCXHeFmHWZxivavE5Y7krQLHHp6v4HYaSaXdyScRiwHtGTgm4pRJCXYxsTbBJbzV6a",
  "key35": "43SNYxgscxHxz6Z33S5zwt1DPQ6eCJXMmfQ1UGRZJzFeMmPgtU3d3Abw5odBB33FuochEyqPH55sdWCvPzpj9sMw"
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
