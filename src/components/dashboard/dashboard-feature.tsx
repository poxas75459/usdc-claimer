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
    "21rfDFj4KfzB5i3mo2AZQbh8z7D4QUR3jwJdmBie29rSmUvsBKaLucNFLMLmHxZCHKs2zF8euMsKM9tBeHuPPQfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDGTKd1BFyWvGUYE4mW7SBs7qMf6cjanhgG4mRATVCSVGBxkjNdZzEsX9m1B8c53ZLbGxAAJWwHf5xzfD2kfGhC",
  "key1": "4UhdhtnvV6ezMH6psDgNZ1Gm5GeuVuSbsuJq9TWz8BKPRgpLp6DtfYByBKKf7Maeyhc5hosht3hNCkkfP7PGL9jy",
  "key2": "3pLwQ3bX2GgYASu3uxneofF961A7sJqvaVL8ft1kMAQTTSdzKPLjkQhUQ726FW7eeEok2FtQCxrqUESHxB8BMedh",
  "key3": "5oyuSY1Q4p834xfuKrdUsYVeMk7tGPKsgr2XoBKy7nmoYw7E1aNwNBYEMp6jxxUDUXz7ut8F935RWK5d1rJYHbZE",
  "key4": "57sZa2zE9ziG6JTwdhqHvospFPYAryWHiwSq3NL3LM9sZ37QVaH7FYVsvRFXvD9Z4mmNjwcirTL9gQfQWnD5Q2gy",
  "key5": "5BPq5T5vYHQvCAtK2B6M7bxfFr37BonucHc3RhYLW6dc9uXNip4chbye2ryyUA2rAUc4DZyC8Bg6u9FTUxG4c7Lx",
  "key6": "4v22kYnKnzGz6qtGKii41g8UPYxBmmG4Jeh2XNNuEkckpCcpxto9wqEnw9fB3k8RZzGwQAB7CRVPWRowkb1RZ8Rj",
  "key7": "HKaDEYfGLVopyycb9M2k8LbUGTNnhxsiS7zjtRuvU62VcK8LDxVLBDDnmEAhk9HRMYBaWNCBXUimCxbF1vRGbLr",
  "key8": "5QZaTvMsEPRmKpaRh42pJTYYTKXPK72taFQbxdaW7w3Cd5tXjmMRALWt5bAhnkAtWCgpxZiRgyCZwF2QwmnuUSQT",
  "key9": "35UqMJiFWo1f8QiZVPNSxy748NXHGnBQeDnQPAqK2LAJDQivf47A8MvBXeaNdGsrD7E87uin6RGWzWoYwCftmbKv",
  "key10": "4BpHea7qYGF6VHYfFKu96kajcQVYXuvyRT9uwsHEuoPANWHh1AkgwayAjktuC53CAjeoYFwrSNvsJV1JWm89cM4B",
  "key11": "MCVtrnvEJRFyQ1U7NL7trhuoxqLUiUcndurU6u1EhPpBnD1rAbvjTuK2WFx5vVLvbDXdaSj6Zk9myLKFKHbL4xn",
  "key12": "2oxSssKCCUDNjo4VdUNVq49jzfpSrLUvdKXVFVCVVbUhSYYtag4fBdRjHyhmABi8ebHtyLQjKjLSAsdpGK4yaa62",
  "key13": "4e3s4VBVvgVWoeVLxpDPya4vuHekWvKq5UQJLbFE5wX7U7KqYkkGYxwzABDsZvLAyHFtGsBNyhUq8An36GpGi341",
  "key14": "xVUEoBvz6GZisPMvH7KRYonqy5zTDUJGiMyPJVg4jyReG2owR3wmHV6RSqeJVfDz2sFn3zJqPy6qGYXQt9pXoc8",
  "key15": "24AhDsVDLuDmDEmfMnzHD7LQM8vDhxVexDMvegVJ3C9sT5U1wqSdjQnLW229ab28XkrFjxibJSMEWAtHPcoykW73",
  "key16": "EtZFeo3xtFnEmY6JEyPCNfkNHj68BpcHvU27hSfK3gLGKfhXHe4PDVPejNMNQAyBwFPwLnfQMdmcUu6TfbrTNHV",
  "key17": "XK9wTCkGwGVkdxYvKLYWfh4xDfV5ppNYZHiz5x1pXFhV9X7wKtu5jhRqNiwj32ML2jKLfyVNgMTgcph9oszAA7W",
  "key18": "LdTv8JhkYkeaJFUQvTSHH7mmWy5eRkWqCSuYXNKwQuLazHTudcy3cQ9AUsrwQ7SQPR7f21mVMEy8ipqZBcgbjwN",
  "key19": "4wAq7SYzGkr69Pci3dRHjCYg2pRRgaUKLBgrrUo3cyvRr7tGB4TRd4rEdg6BEg9iTv8c2bUKRqBumfeRAU2UdAn6",
  "key20": "5PmmazbQK4toLeTXNckdVxXyfjRPed6GCgJRwn2G1dfJyie5CW9MnwLyDzzsuBdtbcgSqunHMbkt4K64cGazQMhS",
  "key21": "3F1aDfQXUPuGb2jEJgah4QmfPGgi2AUjKoa12rbz4RqvSFYS9BeEj649th5bouG2dgRC5ttwaiSysD6Kiycg7bKz",
  "key22": "5LXm5F8wAki8q94X7vdws7VVwAWNjrSVuxrrZWfov7ueZ29HPHVzJ4MqyzW3RGfJipwp2MURJ2k5ek7yBkwpdEak",
  "key23": "2MRUoQq6PmmQm3EJbKGn9Xoi5GbFaiDck44n16S4nirb7qJuo6rFYmanvJ1eD1eCxnAzbLFnhaUfPFuhmM8c188J",
  "key24": "bgWxBwQD1jrj7QqzzMYYc31t4QiqcGX2iH1LZ2Db9f4NLdbPSeK4mexNpbro8RwB6ArcYCXgWXeYnmaAN5ZdHR7",
  "key25": "3Hm3QeXLufXPR1CxHNdJeyqUdL8dmoMGpNnLei3nEUWVXky9FBUtyBWYQK7MDitMXjx9vxjDbCF9jnhv4kGYhvjs",
  "key26": "5UCYZuU629gkzn3Mi2Apv6mNiQUJWo7H2pPCzQwqY9LZhJX5pycHsuCKNYp6oLhDouR7hp4jXgA4wjrCiNaNmNPm",
  "key27": "xpGLzhyEQk1UA6XLD8QfGeUJUVrXQTNu9GFYJh44AjiDUCXwCScwiy6w9wevbEz3Qp1Bg5NKNzQ7g3Htrvsh9z2",
  "key28": "4opczdxcGi86RCPcgMMTArRcEQGH2CbiDdXgYMgaTbXrsJwXbEfKrgWhk6H8CAUnpgidwjwVAbjkinpVnGPHM8vX",
  "key29": "4fuMjxZz6Xm7faCWLF3Bo7pp8Ce48rkKErNBt6aSTqEkSH4sBqGDUPSs5mQM89KZrxBADUuuMBx8UrvSpV3YFSw",
  "key30": "5U7U2e8pP2aeK7hXqJPPdezMRDw9waZJ9rPo2z2pbjURSHzSaCpQMmoFMsQx1RHTpoE2Hh89C9aeasZsUUsKYCUe",
  "key31": "5zXEqzUTC7Yt5x2ZUEfX8DTeBZSGpHmNkEDuABgT1mEvD6A2NgeXNXudnbqAvAQP74XoyQbQyu3mqM5ooueHgsi4",
  "key32": "3zAnXg6bVZmA2FWyo3vebjnRY3g8cZWPBsNNTog4PWBdetGG1ZZNWnPx1mrBYwDsFYRNvm3H2622qAo366Jy7gDB",
  "key33": "3aMS6kE4AUNwpW35YhkXGMS87QP2uxNBhWHtTBmYU97buQ6Dzvp8DudHesvxXwD8zr5J6JLcDadJz4dW7LE6pXVo",
  "key34": "3sCqZyudEBYQrf8h9KvY9o9UY82mr738LjuTCJH38L2BAJ6QXPoyTEQeWJjFmgFQeBU3QR34Xu5v2URbWHuk22H4",
  "key35": "3bK4EZ9pdCxr3PcBh1T4rg2gFC1sCyVD9qeMFFK4JBMqWPdVzZUzjmTe2NKqFNH4B529r1b8M7J7tGV9fnHzYjpK",
  "key36": "39SDez7MX876GNAaAsaEqxuJUXxvYT8LAq28CYie78hswKMp9sbZHH4CMdoRNBWrhmw5W1bK1wJJKSaXv511tdxV",
  "key37": "yiu7959U1ouchvLXdPerHhA2Mrit6ENxBr7HSPc7tRg4e6RjcwjJpbNT74nUToUf3TjbYYuiu7MSEqNpmkgBYux",
  "key38": "5PusYXDAgiDLMqF4yHNAcjf3fewzfurLUjdQWU1pGQMuqkWLUNbmXoQe7W3B7Nef6BUg6Cw6ujxoWLvC4tR9uLKS",
  "key39": "3oeHNsmdXr5M44tpqAcgnti1Lf9JZfvN6X1NRZv5HJ6PdLkjxUTt46ZxgtcW6cPccUtmEfuYNDLfJ6FNBiRa8XSj",
  "key40": "2Ezfcr4yhtsRRcuTLhd4RXeB8KfxuY4L8Ac2yTNJvSkfHE3chHvLFQHSRDpXkVJjP11cbKhmZETKzSMdbXuWDTV4",
  "key41": "2whHTrD2YfCqQqYMUXngW4G1HjdPSpB6Aa7qQh62vuSnm5uqrdxQJ3rKohU2tCh5RQJPmLThRdnFRzCxW46fxUeq"
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
