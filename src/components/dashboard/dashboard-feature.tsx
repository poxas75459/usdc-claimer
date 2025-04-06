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
    "2Q9kGngpX76WZSSRtjQszXESpaffz7U5QELcFmoXCnqi1LdizyFA51NPUWZ9fyjcYkiBTMjaChxbrA52B9BZFYyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Yrzs9DS2YjWNDjkv4rm4StZ2QVBZCfvjFVtYewMH4jSLEfLHzAjB6RJEHoH8Yn7n6789oe87H9JYBQKpwr7fQk",
  "key1": "3qjukVBtd4egjTCNyAHPbUxZjYGBbjU5YH9DTpoTinewEVnckMekcUbN4kZZcnBv2nHuEnMDq2uft8rKdRWcipoq",
  "key2": "5WvX6P8NmRt4MD93r7hYE5bWtnDvczpfkh8PZrDmDEqZ4uKr3hnkNxPZLd42pnPCvt1VXhhnUZbf49oNH8mDM1j6",
  "key3": "3o7t7aDp5dw9DW3GWW4bT8UWJqqJxfHoLhmuyo2RpjtQbjG8YHFc34YPQayBKgpER36GgDEEk7wkTNX3xe7DRpNy",
  "key4": "54zTyk44Jwfa271ZVN3g96u9oeFgmFUbniBxJnuH24y3JNXvdFCjyqqA8FGCqtwULieK18DbwvcqJ7UTF7L3cws1",
  "key5": "3BgANUeju8fXkQ3cVjEEs3fHdSacUdzFxukerzvQhYvBnb82K1i4NbtY9rhCkKuSu9BfrfxA2XrYktRGAT9B8RJL",
  "key6": "48Jhpy9fhza4sBAf5cuik5qwddZ48wYo5pGNr2yPdGEwpAo6fGGPLNsTEsLGPVnvGpyNNpWFyiDHcLWGUCiwFB8c",
  "key7": "5nVw8YexXh3XNADsCBDbuCd6UMoBudeFafsVzbLYpWtKv1jx4gGbN4ipVUL1LvqWrA1cbh4tLifAPdGywKPxitpw",
  "key8": "znTk3RTBgDamXXkjhS79QCeBAQxRWxo8rKH2JEKYigXP94PyYiXzBXnQPgnYyXVbPmHzoZ8CgcC5u7memPkhWM2",
  "key9": "3pYzox61vwtUVCfYBpm5QqZfnugnZSr2ucDYx1nN6DaxKDZ42QvfVrv43XR1eS54WjSTYMCsP9rbVX7JWm6cKMmH",
  "key10": "3o4v4comf7qutarP4zpHia1tUmjMQLPedt8SKVTHD765nKUuuRJkrzMUKxH5sAC35EBpXaGp3WE9JQSvFw6cvufu",
  "key11": "2Ubx7A1RSvU3So5p4rSFU36bhB2GtFZm7VtMAMRZbz6GJ3U7Cm5Fycwnshv9tCcafeCuYLcugm1mrXYsSFHvs99x",
  "key12": "2ntEnQ7b1JkaduU9y849q6TdQAGb4BGs996zH5t99UVPcVDxJSxT9Nnnn6QQuHDQH7g3t9CB9oMrup3EpE2pGya3",
  "key13": "52jfcH8N2poCjfBNxBQwrSKcmMQtRdtMp1B8cfRHfVd6uCa2BDn7sWaRGnKbXj5tp5Hr5HrPbTY53Gu3iiqsqxnZ",
  "key14": "4LpzDvNSHBoro3f81NgqWyYna3Bw5Tr8m8EEC6Z67T2W4nD8YcvpTataVUZk2rksRADSBfoxgo4oShFZFtA8fr43",
  "key15": "Rj6TYb3fZWqSjv6BEWsdH2ERs6PHbN2YqfYaF9LSNY97qPCf9KFwR3VgVo3p34h4AkxF5fQGmTGHXeWrVgeH8KC",
  "key16": "4NGkTohxa3WedeRRnMJyZZjEpbz9uBCS3DvkQuERwxKbawTEZ6QucjhWjckyTULdohksSaQWLGWejeC1DJMeDVsN",
  "key17": "5Ft8ZnHNXkUG88eTxA7JGPoXayZMmXwWSxwAZoAaP7EBsdagjovjFpA2s7TfasmmL5aHrf2ce7JDMUTesWihwwj5",
  "key18": "3qEdTB3xWUiWp9M6AgpXFEG5aUTZRuhC9gm21qSbFeph75svqeMVdfL6Nb1Hk4i5rJ8JTewEYXZJhUUn4EG3vBZp",
  "key19": "4sukpbdZZjQ9c8578tYE36zeUoykHfjBzhoT8e79Pm2D4L9EmSj6MqErbT5N984KkoEm59KGPn8L1X4RVFYQum2Z",
  "key20": "5xA9emmHPhfWCGADAE32h5vgdoaEZKoMktwiVmd3oVY1DgHu7Cya4puhsRRkTayJix2DfKPLQcniTE6ZVacFL1EJ",
  "key21": "3MEQ7TrxpsrtqjMFeJXisn3jr8eEDbyxePRoRUcDnijDuQSxHXGB2nS4nNoYUiAeHEpwQGq8EeskeGG61acBfMS2",
  "key22": "4SkL6NNSYh5Zdph5tY1qJsnfB6hyEGmcBwP9uC8xeim4tAedezghsLmeE5vrYStBgk3Co8ukqQiwRf2XiWMdL8Ce",
  "key23": "2swdm64P6uEmXsPJPfWUVGmu9GYuepSxcHkmvnJTBefR35LEAFqgQ2878zsCaSo4AGVyv8TanZYNKSnTLwVStjT4",
  "key24": "4tWGUQz1hRzmaWYtX3gNTYm3MQnUCqpHNeQMDuXm8kLAX6kBrjBk4TKLiuSooRQuGuZXgqmw4gc5WrQkX2mpCuTc",
  "key25": "2shJgsEJKyPqpPeUzb43ekmWYVqhDvZQ2uAwKMZRZQNHveNbExbRR6XfG8Ff6gzdbwA6J2g3q2y1xjZH6EQdKnLz",
  "key26": "3KqeiAqj4RpFMJL8mEihyt4qirXFhkUHsUn1Y6GobDLArjAv69rqxRBfX8M6Eydgq4GAwzm62FK4VVoHKpjk9Huo"
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
