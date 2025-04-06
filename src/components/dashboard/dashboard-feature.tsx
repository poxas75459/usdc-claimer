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
    "66etLdGVWuqWP5ow57AdfC9cqH4rFKFKaaJZY13fZDGQ9tZGWCCpvPFzHxixfEmUoHVbzLc7WRHsawi1H7kaErDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yieZUFUSfaLUNfhWj4b8iAEw85MSMMD9RB9cqReFsePuLWh6uvZBN2ATWTLXEKjCyiym3xVxD4pFRAA5PBCX1oT",
  "key1": "4dUvyH18xuhS6Cwx4SES65Pn3mitzDUPiSBkkSib7DnH1kUmJB1ubQUWC1S498hBvZmWgsqiZvZXFxVrxaDizpBV",
  "key2": "4Y322HgBaKujiA9w7A2Pbpj4f7xo5XKRUbcv6fRumtiyx5oVjHbvADjPwEcJXqTuMS8fqhwBp5x4PcGqgsvWUNiE",
  "key3": "2RXL96R78xomkQxAnT4uiq9HSpRL1GTvJWxJ42ZZLMa8Lwf7tpGNNKHRHaAsJcPrcSL3kTdoUmj2FjRy7QjU8uNF",
  "key4": "29cq3gyyuqYVXXJWuUttycQvviJV6BukbSpQpdmsyPXhKgSSCUbbCvK66Ngr5tpM3T4iP3LQKMhTnHgK8vfCW8kL",
  "key5": "4dLSVeWjNg7VD3k7F7VdsWQVNXnkbnXrYrMdPZgM2BWu8uKtYqSCAC2ejx3gvHy8ecXYLjiekctCYe1EGGQY21TT",
  "key6": "2tTehSbAUyyefDMYFt8x61KBPZrBraHFWWrMWSn5vjSsmsHcHEX2XYLnf8SxoyfQJrRbtFu7H7nBEhUP9SdYv9HU",
  "key7": "2nKndjd1oxFdYXVC26uYKuynoFRrGU3iZQErNhTBzsmCJsrVUuKgiS7ucm5Nrf8J9zZQfKFy7B6CqfWhU8hWzKMB",
  "key8": "RJYPqhxEFs5p6aY4rReqTmEF7titXERxLdqMVWgoW4uP3hJiUVH5i6E4EwznFZpzywRV4J1UtRJ9oB2d7WDkWiy",
  "key9": "2PPXuUG6byiM2YJTXf5pntF3yPH11yw9psGMDjM5tSWapQ9SeX5gbKR3crSysnLt3YRLinATvwaLDjD746wPW6Lr",
  "key10": "2W8Nh8YvucXLPK1U3vFoAGNpQCnCWsWS4QZBVpw8CWxBBzFkCYEpgwWajowpk6KJaqMpJ4sL5j1Y7qDnApmJpcH4",
  "key11": "f7HGDgM3mF4JdCXGYo9gjXvqjHF3A8HDZp2Yh8FrwVspKjY9WCGCJzZz3nVjhpL9oKMn4gVY48FYJV6DiQUTh9X",
  "key12": "4ZHTcAQHjvWqujRSjRkYka155cWhFa1MNiHWnoN2gJfE5fNgGDfb63sXUevgZmHL9E3scnd8Jr9FhQQf7xuLVst",
  "key13": "61MDZRc87gVSFbDuAjq4CULxxYuhcdaqxz8nHxxPu5Nosa6uEJyeE5JVhPau3eiLBQ67Qptyf3ncTd7eYEz46enz",
  "key14": "5pC6XtdbvK9QMMrTqS2TLrzSBVZxY2NwGUvNUYSWk1hrLEyrqqRn6Gvrt1KjYvBRtKAgoQ1bSMdyDTBrXkqYjPXX",
  "key15": "5GeyeTMrqc8QoX9Ryg7CAGk98XufwEVz6h2BYu94rYkswiX7Zx5NgHpLeftjFinPLD5jfBfcxi5vXSB2WwhMDUTM",
  "key16": "32djUXrLvMtjz8TtVV8Qd55esX3Vdymvm5TgiZ2r9kbknBUZ9rjX1UniDytDehAbC6TtnLVevh3vPXTTWV4qkSYb",
  "key17": "4Pk4uT2nnq75jJwbGbfZSDKwA67BZrZYWbRsDEMR65zRizQTBraovWd8rqFU6uf5LaYu1mSvmseEq1v2NSebPuYv",
  "key18": "65Thq2ttWdjAhB1aVFNwftGeUAgb6koPE4BTK3Jy9PHt5qUJKR2gawS2hW7nMU5CBAdXqzCevgMfkwrzW8YGZSVA",
  "key19": "3rsfyGwb2c9etiKzZu3EMPuEy1kGUCR5ym5Ts36ygeqKaDBr4DtaDv5nW6z1ZSQqhmP8yVdbo93R6Ur7kzDDLTSV",
  "key20": "4iQdrNny6y1amgBhww3qn2ragvtFA1YbdE6iKEor5DdVam3BfNRi49jHnvdGM5EB5PkCgeurFBfXLQJ7NeZLYkoz",
  "key21": "29trpHVeQuTNFHdz6s8cTkfTG8JjWGhT9Ctt4AL1gbDAdmJBiQhTMEjk74uZxTnSPy4RSCFJEDM5TYkv8DzEeVuR",
  "key22": "PpTUU3xfp7Zvok6tLdHDZGLUjT6DSzEzHw8Ykp3VPVthCuCfM1HjjV9H3ovLPk32uyRy9hMhsqebfxvRcFDbee1",
  "key23": "5eZieZS5gttdMhUy5xcUrL87eFgsc7bf4nebK3gnnBHBbcrosSeaKp39k7XuHvHRcsULYhbVFniD2rb4TdvzUcbN",
  "key24": "4h5pd5Q372eQ1Qpy4qbaXQ3Kis3AwiVwtwgM3wYSsry4MXtbGc4z15vosd2iwi9rCyHa4oooEdmCKxSNFnrH1v84",
  "key25": "QojeUKRjcb8aA6FTUwSfv7R1eYMaQwP47zSZKe2zVxeXbRoJKNTGcgLdS6iAhANabDHcxmCwDa1Y7zrypYaqZRr",
  "key26": "3QbQ49Zo9xTLMh7v7YDnnro1EeuTVuADgNEJbCwChPpw64EWPFpx78975zxQwM8XuNCQDG3MFFDTjGRHniY85VA8",
  "key27": "51YdkMgEPXjE763xEvzUzMjgwbtnsuk8D5aqD9dH5bVYfmrcgciQe2gATyf33DdfbQJ2NYyFvnvwAvzFuC8gzpGc",
  "key28": "2iCtL2LqP5NC66cPCbZRhUFQkA7XcL4f99JwkWEbchZVLsRwBZBnwmcNRBcAXKXyQC74naEtFYw2s5igrWuf7Rjn",
  "key29": "31wCxoWF4sCQKu2Y4RhsVbP2xDPNn1gzi6F9T9hMVPTtigZQoJsr9wtVfx2AtC9eZQ2SzaSM39uwum1TPWzknJRV",
  "key30": "5Gi1WXgjrEQowzBnPH2w6wpUEDXdwwLMmRs5M3ec6XWLGZ6ZrkETtvwA3f7PvT8mNAZcERbLHF4GN9CMRyPFopto",
  "key31": "62kq8MAL4DpesmbK3bTat8q5a1NdYWd6NipEiwdKhX8xRPY282EBiGLuysutfxNUCCbbsZXiLFMSicSNMgFqE8bF",
  "key32": "5Hoet93AqNmFMd1CeVkpeHGaMLFXsAmnaZ9Cr5cQoehi8tZUNm4bf6yY1QfCmxX7Wt4unBc4z784R6xK85GR5YMv",
  "key33": "3pbbbZNr8tZ6Ck2zgqDBXjj1uG89pesAcSB9WLBWGNkcao8vVMxqttNfRCgHK1Tdnu3zB9UEXRjPriif4J1u4QKm",
  "key34": "5mvbjKzvrTe1KvkJzGJzsydpc9PzKfPrNKBKBGShWV5rYg3wMm8F4eJQ2ekXtLwU7aWLbCpM1JyEdU9LXhv29pK2",
  "key35": "3fUwTbmeWDhmFmpq3EJz8ib2G4FFCbNMceXkpU6VWYfz5rGiNW4WNqMJTfLPuKjwRpCUn6N8JmgRAs5Nfuh6W3ZJ",
  "key36": "3G39AX7ngwFecNrgTm35eQvok8LBSudkZ4vsVwSqVZzVKUMVAXJqjVzLeT6ZNP3VY49XoCz9UWuXdcz5vCkgbwHt",
  "key37": "3v68KPD6tVcqsi8GKqibXjUkMGjs3cuyYdJkrjTd4F6kzyVY8FHo2TvJZuEKqVNviCLkPfsUCvh7Rq8L6UTHgsu1"
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
