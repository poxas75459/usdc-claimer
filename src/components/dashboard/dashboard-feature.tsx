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
    "4YtCe64qt7wRbtcAF5GvN4YEpfTcjPvYrTetYRiYEuShovvNG8m8QqJqRAFXrW6gnATqB3GfEFNoHJZbVhKUSMST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3fXZnE9z2yMuAX32VWK8sBqUZSyyGaUDJUc3j6hDhXahgjJLtT571XJM8r1pxFHSPBCxq8hvokReFaNA9U2VLD",
  "key1": "3tJQ4dJbg574QES712JwyXqCj2qNGEm7CZPVEUtnB7Ds5hiqNqoANVuVvaJHDDoCfnUiVLvyL4J3ndJQeyoJHh4i",
  "key2": "5A2xSNHLcizQfms4h2AVNCxz2fm7ZD6cqmYkdkFBhr3UQCkma7V3kn3xB47DrRPhyoSWZRUSe4q5cKUQNqmDVtNH",
  "key3": "5xapxjfDi5NMPKAD8LFkP4UcKQ7pw9mWCF1EQSrvGCMBxv84mdn3sgteZ81B5LfnrNwSg8ajvgGyjfCDfYvinQQK",
  "key4": "55aizRgU5PyRKqx9qZG5tvnzDPbWrMoyerQhkrp9YTsnhA82ffosdKtA6RpXCfKjzoukL8iiTNQTKeHNU5NxhSfu",
  "key5": "5dfaNFBugPwCTwkH9m7bkYYy5YRRSqeGBo69qREgBiRgpVseEe2tGqNS5Cgr4Um1Lsr1VTUue4kCM5MjiFwf89pg",
  "key6": "4iwBvoM87GR3bqGDj2hwSKmE1mVjukscQVFDRCy2n71yA7fVqQBUk3pzrUEXo56t34LshiA3cpNFFR5DAmadLxu1",
  "key7": "4ebVf9AfcUWxCpoNnxBg7sPjxdAM2AQ4amFBfeTynyfE2xPJiGYFLrVJxneYVSrycb7wAjJgmHohcgZTHGC7XHjp",
  "key8": "31TcrcHajcWMXdsx93NHeGQ7bgukncUrSpHWNPvPTUM9Ck8AwPBB4FJiCA7ioQEwPnRRTZWAXJBTtvTmADMGxpz8",
  "key9": "2sYuguvtM2jeZWSTmAXwfa7UNXVRj7mcH7KMvXkNaVmJ4yXjetiQ7AQ4AJLaiVx6tpvmJFtScH48hBLDUhKVUuwN",
  "key10": "8RAzrNmLufX6B1v3HBqUNNRKe51fs3XS1xJa8f9uWoqEDgEQKkagBPcNyzUtbfzsP5SULnDQJ5WWtPMkajgJDq8",
  "key11": "435oFwydxH5FecWyr3JewceES4EpyDHJhaPVEDdtjZfpaq6LdMswV57dW8XNDAPWQGkpARkp2fGDagC9anzaZMNW",
  "key12": "2Ppv6D3zQbv5gFz2KsvyZaG8voZKVecZyQgn7FMPhHT1AtTy1AZGe9xLxYPmL3Pd7d9DcacgCVgXYH5NP6NpH1fv",
  "key13": "3V4RSbExJK1mFuxEfJzZXnEEMywct7bozcZZ5ZJrhxDsGKFc49L2KQyveq6mQBwFtQKfmBGiCoLfzkR9Gm2TGDc",
  "key14": "2oNBf8A8bNYeoeJGzMefXWGx5PbYi7FnaJxKA72u9u6EMMYwCKvSEHgAtdncyLi8znN72BHW3k5de4VTZAs6d1Aa",
  "key15": "4nYiaC9522Es8ea9AGHRkcDWRvpeKxw3CERSDhNkE64pgMy1hrewktgfCVJeVTrpoWNEzqKFgddBkyQXWVucUXqS",
  "key16": "9p1it5areBGJPUr3rsiZRxhKSXUFtgxTyYWNZUJL1ZbeJoYQ7fw9q3BSMTSq8rSnQAqipJnu44zgFkhG2wow7RT",
  "key17": "61UQN95CgCB8M4kWDK7wCjrtNTckpapVQYfmoZG9vXoeFJCQU3VKbWKoe8jgHHDuBNdsmKBTzx6Fo7pxYPqHGd4o",
  "key18": "254xh3FqRdxNkeegQ8haVxkRp8Q6cecjhqMSgYyYAB8XgSoNFhTqzr4B7DXqPCB6qwmRm7paHUmDMikmFFY1CM5L",
  "key19": "5zUv18EaF67qENv4mxzkeAwSutU81w8ynZkGec4E3e4GK6R3HGCBoTjZZ61e2iBJgKJNFQNBXwbWbbUjSnUGfRzX",
  "key20": "o5kKmehETgHgy843iUuunmKstKMpwf4dqnewiGY35GchHs4dME5zqzk5TRXHM1YvkFQUjwdfWM32o6547YEktgF",
  "key21": "4FZcdDk2AEV7HzhyppB8jnx4Q1rMpBsBCCStQpqRFQqpudGypsdS4NFZduV7455Q39LaBtadPdrnVXDxGrZ8A2P4",
  "key22": "552dbeJFe66Cz6big91eSX84exSss84KFy8UmSp6vAiTFGsMvgoqehLxDEFDSWDZ83jzG6nBsay17nECHjRQiyWW",
  "key23": "3gZPYM5ma4Eh7FMqnu5xNS6Vz24DkVNWfv3AXXmNVfVXp2xKX2fnaaeD9kA9Lc8H3BuknXCz6LPQ35f9A6CKHdGo",
  "key24": "4hkF7XxYfjncC3nrgf1jB3DcwLpzYuuFFFiKybHJGmZNFDVuSt3pB7k1od3ze9PBZ6b5oawB1oDxLSFYfQeQzsQQ",
  "key25": "4F7LDNeimzEj51TiaWBneMhjKd2mYZQfTxD2sNNRQ851JAGJKfYAAGUVwf3yC9swydLHKiGBxmRkoHosGYEgdqFQ",
  "key26": "5CqXvPNyYx5uDwc4svAmFWTt7oeUCptiRV2VjhnARXjs7Z6ay43Q23qj1dZxnVAWqLA2ro5fDmygCp4VhTpDp5bt",
  "key27": "5M5s7yt5vY86WHTQtZhtZW4YE1Htqo2RyALUhaJptQJNfngx83zEuzacH9P4AVeb5u6eVAQzYD9zaJR9aGzpvGoj",
  "key28": "44enAaLfYbGqDHWEn8CjVYKNpsbF7YNGfwuLCFyMRm2dmxuT73jsWDy9YZdApv9PVnwGqVt6kdSpSBpwiVyXMrTC",
  "key29": "2yrtjx88gXpMFbr2RhmbJstSVMusuhRbcVEeyWCkbRo5bLySBj4YzHhj71ViB1LMnRrvgE5ADqSYV7AvpX88z28x",
  "key30": "5RDg6phb8q21Jm1MsyKSVfP7aScYuA6Prf8LwTQ2SHLDzdWSkiDNsqzXsPFh7RwDcUB9KtJ8rX9gkHWmD1ewvKvL",
  "key31": "2FBWfsTSXzVBUpTK1puDZ4X1nByyc5SzetmvmpdapK3u1cQLC6qf3U7kZaePUbUsJJ2Fgrne2KsnTzouLHKF2KLT",
  "key32": "46GtVGDjhHJwcrNCBVbsEMpc7qQmZwxHLM9aFaF8Vx3nLvCbyJzsg84T5N51TPcHWV9mkEiZyDHz5eMEfFER6XPq",
  "key33": "DVK9nTUuYjWrpxLtfWNNazAekdtD9d1oy4ZypHrVPh1Bh267zgdi6NHaBYjLDM9eMmfT9mrHZXUVBGXwDuyUwi6"
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
