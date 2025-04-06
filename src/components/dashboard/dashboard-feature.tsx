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
    "2auPW7ig4XFyF3JQGwgCSMiM4ZGN4EjuJMFwAWcKLMqLDnYaXwpgNxLtsRmoAgHvyjEhe5p6AWjxJxf2pi5PcaTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsMBJaq4PAem1j4Kpaw6HbuMdAkgeFyZtLkcY5fj8me9m21hAsfDzTdgUGJhjrAvhruE6QvKziDLL8wc9xcoVRG",
  "key1": "3TPMPhSz7ZGw4yvHCVx7qrFHD7MMskVug66KDhckEk7gmN2qDcMaonF5EGNT5N2PZB8uMiQDJ5PqPhEQN8u6wKtY",
  "key2": "674Q7fGmPP8K19RxWwShopvxg7QRmFf6vyLJnNPsBDrr8MbY6PTR8uSiWdXJ54moaj16X8h6AG5xLjQ2PrqJ6Cp2",
  "key3": "3wXByWdfUskvNpKTrK9d9zkX4dLustAFUw77zDeKdv6SGGHpU1aGoefDyWEfxCUFVxKToeK4heATURmCyz8BzA5m",
  "key4": "XT6e4nZa9ZSdAvs9wMVRYLuSTQYF5ggNNNn6rntwnwjcEaC5CXcbodZs96Sb1o4NpF3hXgCJRPhZBygqfypJ3uH",
  "key5": "5aF1on7y9fX2Cq8TqNXF6q5gBjqPP3VY2sXndHatSEQjWhDGpWR5p1k7bsw18BSzLuD2gZ8GQhrAYMQR6udoUkqo",
  "key6": "29wRzo8zsKmQqR26m4NKdknFQYF5WJVEqD9eSTF6vj68yqapyf8faRMJzmi6BBLHkFoiEYyqYsWuNhKzwymfwRW7",
  "key7": "5hVtzXQwjtzgG558ftUhphXkGYR5KoThi5t7qpwxTg1fRQHvXnfZfzMjE9CGAmkUrzAYjK5TwePJMd8zNTy1SLSu",
  "key8": "1g1Qu35q6XWsQyX39Bmx9Pxw62PGcfC4o7doj1bf5iuDwbx1szdpM5apyFeU8M34STzxBQ4aG9NyU43Nq39jHAX",
  "key9": "Ux9QZmLsAufBbcSPkmX78JvxKQ218gm93n3C814RPvDY49RMENpfXdP119R3WcJZBQwrejANT1bNAaR5kPQZ9Ds",
  "key10": "4CF9hgLSEq6BVTKCTQDNcrNpBV9iBiSjuNEcu3sqGYRU5gbX8nRdM4EbPWgws3vgPZhnC3YMxXqz8nuQJom2HW4f",
  "key11": "2P7MBXJxeRj7SNy88Yg8eqfL6nfSWM3YMiQnPw7et6w3588uuwa6JEug7sfR2acXh5SSEf39pcLNTEuDbxfE7F5",
  "key12": "4b2ERrUGSEY9jBqtLaL34MWRFuP6LU9p13jTsoW5TRcwK1CLqKnj35KXPGYmdKMVNEA8mHrvBqdxEQEUWZ1K7E7i",
  "key13": "JzFW4AmuvsFbYnDjsohLCw2Z8XhtqN8cdxHwhyNiqF9pQ16BYKACb3nYp9rnWyj5JQmDmQ2cNzMDdpbyEAu5Q6P",
  "key14": "4vdsVvcGXzbnueywKURpZ3C6Xf61TXFfxa1A4x8YqkdWhFtrCY3adHXXm17mHsjyXxEkcnCg4xmMRN3vyp6ga9Xf",
  "key15": "QMu9fdi8r9nLVn8j3LJVQBRB9cEQv3YGTisqppKWfZTwV4JaF97vmeCPeNqHf6Cr9jArezYuSsedZ7HQmPoCZc1",
  "key16": "5ZEMMPVLeTBdJhm5DaxaVgW3gv4EdTus1gNdCJZwbekbx2PS6L58wai8Tg3aEKZYbVPbjpfEcV5PRHBrU51avMCx",
  "key17": "5HPvQPgD6Ly2GXrXskCNuYg8Kxad1qz5Q76gVnpN9GndMoqtSqJar3i1FEFZPqysbThrTonqN7HXYV8nCFV3Whfu",
  "key18": "3eE4VAzkTnf79H5ZBz4wbJcmqttj82JByXKktombygw2E9sSVEuCzDk6875aoMwMfkPNLET3zPjirBj8F8KsPqVm",
  "key19": "4oEpdDb8hKp9cjZMfj4g8vSexJB2M3RfouWiKZa9iY8N5F2vfFNKJTgUo3Fy9PqiKJ2qRSrToXVGFVdmaMJUCWqQ",
  "key20": "4gsFDMwm623GH446saMsYBfdoGEiNEtURrcxf6LKP6bDGi4ecCYQJk1XfGPfY9mM7JjkBpgB3rF6rcp9722JYGnQ",
  "key21": "4qnmYxUrJLFomrD9XNZ8NCDDRLqszi1Bn4mCAPMJCKFaMjUCpFbRDuiGUhHtQZo6WvcZMuQCCdY5hYkayyP9TmiY",
  "key22": "9S5X7f3BhTBe5KvrXA4QoT49hVhGexg5BcBo7t5XXSxpCzEKjYey3ND7tqJHZQDxuEz9yeiWfH5VxTTXWWpcgiE",
  "key23": "5YuW6UZNht4eV56PN2ZFJ9Vwqd8aDFrSJdYorTpBhn4T4G3FwNP8i6BzCCJUd1dHzNtSDkqnPHF4jR4AfGTebbsp",
  "key24": "64vR3SciZLoirJYbaeLbMkenGZ2GRoEsB1VDYccE7w3GRjtZiURkD72ZMxHDLAfFJTmUaZhrzwm7uS87NZsJWVJt",
  "key25": "5zpFvw5Px2Vgxy46sVYJ3Kv3MzpJP9jGHcKEKrhnmB4w4eDjMVx9sKfPTkzNF4jWTSyrSbYf3VmWJueuPVKZZLWr",
  "key26": "5bammXBjaTVQ6GyuNHLzHEzuz8VCRo2t8txGfofgo8iLLvP6WCUKN2VAg2WqxXvDyJJ7mryM5fpD2AMHtRBXJtot",
  "key27": "2xsR6ScdQw3T2sE6MEvh22ip8R3TnGwrVMrV8ioUr7s3bppBmoP7cijKgzHQqBBAkwb5qPnHRGkzjsZqQf78KsDP",
  "key28": "3Bjzh21c9kbWXWg9QR7RHbGBxfdoQ9eULNyGDc7V6uJ3rQEeXNrNgyuNKPXdtPD7GA9XzYwSDDZLUTuhWcLadpPH",
  "key29": "2tSZYVSvALofKLRhyYAWA2FnmU49moHebRe6HBKGafrtJ2Ha5jU9xRra5ZBi3sFxgajvast22o1wBX117vEvAR2T",
  "key30": "2NMSupMrTCKUS3Wk7dD1UkHqsTUsFv1oJ1zVK5q54gAE7YuPd4zJwfFP6fnNDFVDk24vMP442hRtPG51eVTHHhaA",
  "key31": "5jahszZzroAdyneok5W8S2xKxAQM4ZKBnrtwe5UoRQhiG3pva4L7i5XKDXV9h7qBgMsCwPqChdGjj4bpHA5SRwQ3",
  "key32": "2ou4CJ3qhsH8q9NJr98Qwk2KVxBDueSTW9BEWeb4NRAPBYYVST6k57iex6wcNmX73um3UjyJjkcy2nUUJTiPp6wQ",
  "key33": "52xMRVSF73HhoE4189wYByQV73hR8Y43uKH5BdNTsSXnRbjztxaCd7E7a1e8fwkSWxbA5PygXsHmjjevEA29HBHM",
  "key34": "oupGk1F4y7HyN2xrz6CKfCJztSYffewusouwVi5fKVW7NHKchtUnz4R12bAF5USwzRi875KGe24e6EtaLwFocoX",
  "key35": "3dBvnwa1zkHzX3JhUN1zmrGjL94YvUpQ8S6jLvP424ygCuy1BVDHS9uWAFNUAzYaKjU5fP2ZfDQc1Ke84fS6qWKx",
  "key36": "26pz7QS7ZSmQ4FyL2oYbXaSX8PJehUWRmzTxi9L2su3LWYx66JoejxwBDDDWaRv8xKDKe51fobcZJKDgMVg7ucMQ",
  "key37": "4XDVhrsKnBDtKujgnz1PibUhZpaD3oWMFx4dXPQpHqgQbAMd5RDHrE9NwNCkzsy9rfizH4ioSAcSv7Dx2M8i55Dv",
  "key38": "5M8bi5k5KZ3X2QwAn6KGrXj5pyJnwgpmxrR3RpyohTNyhqM27fhi8rpJozJ9Qed2DRsnq8Jg1tAt9bSqfV6qBxav",
  "key39": "V1rUWxgR3EQajt7oAHU7fJe9JkVTNYGtShoMNhw6Qu2ScM2SwJNvRSHGa9kqfcwnMyWRuswyBTESXEX28fyn5zV",
  "key40": "4xLDWQuM5iKMYTtdwMLKbgmv89nsvG46mCuNXbuVoKsAQY21g75jXacXkLxg22Uu9b91mRhmGyzASHvq9PCsLa5j"
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
