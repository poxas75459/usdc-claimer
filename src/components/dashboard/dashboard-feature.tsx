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
    "4wRCStKP459vCSXsfbFPoSkNF36jr2rR5mT3tXstgfK6h4ocG6nscqSKmovVMGERWuuwipXUBhPcGT2pp3VokxqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwbKuMPjF3HfbtLTCMDVY5GHDYoVponeh1dwzKxkMv9KsUuhuLgVQ9mNof2WPcxKBTsBuyaDuNmrnL5xk36KxuK",
  "key1": "4PLPgBqQMQPuiFivDhttze1TnRicwAY6q8V9mimXEnfjVKMbHERSENtzFLrkGHxLw7MLhnK5v3uw7Xe7URrocAew",
  "key2": "3pe6kWDw4aVFkVz3rLFEF2mCmA6zgbULppCeQBiSL42FNMaG2F2oCEisEPPY2F93mkXRJt9Sp9eY8NQ6Ut4ReGZH",
  "key3": "2grhgTf5NnUyLz3Z24J86KPRbYLh5SqjeyWQBFcByE6hy5FjpTX8QVGiWtLRPuvP5uAFacwY4w9xYTmGAAMCDoSn",
  "key4": "5WfSfNrM44BJfA31mBqGFQhqrkSjTyCnTVgoKzYqhuxsvzW9LequjLtQqz6FbAnZB7qQF4DBAyobRH1ksHiRkfd4",
  "key5": "5W9nrKYbfbyjhyH29PDbAfrFJ2CK3uQMQZQ96XNU1j5vHJpg4bsZFEh6CeskpsBQP3GQRxEUpCECQH6Xo9Nnmkj",
  "key6": "2py9riGqMatpBCjTVbrZczFskhZosjsrLCdQhSfr4UmquGNyWwSLdF3CgLuCW7pKqJjUXaHkbJ3NPRrvuagBNJ3o",
  "key7": "FbQFTihyoX3uCxNXDkQ4Mtt43Th4qe1QHfxEmaYrs6ZvYZgZrQTnzWJiwy19aKamV65ENKQj3U4rG5ZRTgBHrNE",
  "key8": "24xbsptqApgfVheuRuL5xxizxXnYuRAVrE3RtQkwmoMwSSgr8kJmkJxYmYkZTHqR8pzyWfaAU4ArgHdQ8yFPtVqX",
  "key9": "NrY6HBbYFtjkFQvPsXmMwL1RceuDCuZW9t3vN2FkUtb8pFuiNFtHbd1U9GxdbLovLr7mopeSvFXb2QGQawzueKs",
  "key10": "4ivBe5NHN9VYUEXXgeKSPjvrmTpRB9GojgEzXCyAfGMnMEnzjdxCG2PiBFx8Ay51C3BWEx9N8ircPGUB72yUAXfR",
  "key11": "5ptu4hRBDqoqBzJFniEvWbrNetYxtLcveNMbPK4ExRMrMoxwTwr7apAkyVbTpooQRPygEz9r55V5w8kdePtKEUvp",
  "key12": "4d7bPif3MFokunFhfNLriuZxj9VpTdMAFFpXLmes2JC5Qvdp2gCnx7S5KqYYkpbRh5ndrxkrAdSJyA8Dd6AtszK4",
  "key13": "wURez9fGviy16ktFjXnD4QxDFeL6rwJwTiJi5eLJ9iYBW9yHGaxjLTVLXYJvxhRbm9jWWLx5qyswrAtbTWUeuog",
  "key14": "3ydP9eyvYZSV6Sd1cjtyUqEE4ZmRkvBqdukxzToVGoBV52JYeodP4VknsMQCVg1nVGQHxZGNsPDsCMz2g6vDj2y4",
  "key15": "5qFqyATtzWQ4x1h12atR8QJuTJfSKMk69icnV7r1ZeQCN8zPHgq1DHWxf86y8vAhtPwQkKZXpFkMeTRApT3WjmEo",
  "key16": "4W65puWE6WbQsAAQnZM7j9mGfCiwE7a24n8CoZSV1wn2VhowY3VVSo4ckZgPwHrUUYbLM8vig1U2xxGR2b1qoWtu",
  "key17": "66P5reGAtv12dtMy8hgy5V2i78j27WUk4G1BnbjKQyn2z5KTy6bt95setRfufK8FfKSttFqioenRjHe3FCNUvRPG",
  "key18": "4sKGXMYXmzt987NNKM1qAci631PsxZJ7F99o87G9xe3Xj1D4M4LZFSAbhPAXV8uDaXDHGRJmtAK2mp2SKQ2KVVjG",
  "key19": "tNafNfrZPTQWyQ4VBXBuwN3SDPWu6nqtKMdwFw2LMBHtJ3JiUgQ1MwoUxbin4bwJpy7vpQBVPvHCVtLHdXPye2d",
  "key20": "66VrhJiBsBgNYvhmpNghLqdH8Nxxk1kiEeoAzWWTFums97XuaESKUpyARPKJp7gYRbXSjjBjBjJPKnfyi12HXkF7",
  "key21": "4ygz6hz7GyrypyUK9H2NdGLrn6Xru8fngxNhGGJLiShtuZUCBCjjaez5yVGUmZM87SeroT1H7ZQTRaB4Uop9F4DW",
  "key22": "3YCUQfvMpRNXA9P58PRZVdGXUmnvcV2asAoBbg9NJ25hTFkqxbBD1gqZn66SNQfqiyHLFKD8WBj62t2wFDDtepxx",
  "key23": "29BNJ5LU2dyb28wkwKTx6gNnWXvGUGvbFaZnYUY6xsg9ggbP2MM1kvpPW43gyjWkNX9yJhNQY8KNcoQvhPzfMvYB",
  "key24": "9zh9MVs3hdLxpk8dw1cbZtpNaJN2JyvbGjKB4kdwv99bUiHoHUHmfyuzppo7EBGpUYAGR4io6cgbrBfzk6cNcLv",
  "key25": "k3YNtrMua7DQWTYyrKKM1huPAmB1T6ppJXPJD8f2BLQRqnfKQnUHXPJdirzRQotsgt9WbKRdCTqnuG136eGs2NQ",
  "key26": "3c714jGVE5f3VDKYEwEVMarcJNaXxSL8sMb4vShFenGavayLsHrXG77wTsXySca9wkVK7Jo425yoyXVwxYpfWk3p",
  "key27": "zGCfuwHwuGfzcYjj5KHXunM4TfMvBtWkMsHs5ywqEsPaB8vDv53f3sQG8ZKEkFA59tQDXKZ3CG1PuSNGR2kLnXh",
  "key28": "4rz2t2zf7F24VWVQHh4dKy9zMLLpMsRsTWHwqqsM15iuB7BsJvgGn4fQ5EDrgRLLoF5p5Q9rmzDJgrjFCNHPajSQ",
  "key29": "5NGFdqNCdYQx34E3HsQ1h3HNHr8VXo5G2BUGwmjnfAwgQ8645kbTxvr2aZC1fmf4wufEmZbD7cgNxfGgJ6KGWQ9s",
  "key30": "c1MrfGZciKA1HMcDeEQbd5eyJJyhduxekq6x9GTPzBum3D2j8ozsePKSSDCNAoqjyNTUaeduF6qAWF7g38MRSLS",
  "key31": "3BAnNuhJf2oXoXS8Rm8zhGwr4g1Vzdwm2BacpMkhTwautTeKGJbXja6qNWgZiwLoF4HjriK7KQu8dH41LzRSbLZM",
  "key32": "4FD7H3pL7z2nVc8n4e6T7C3NYvsahV66Y5Y3tKhFeRoGpEeV3WAEj9WDPa5eNb7fTwvSqM5bmjKGHYq14at34ohb",
  "key33": "3NJTajeqzyLU25xzCe13pQwJeQeKeiLobE3CWdbkif1W3bHRNk6vA3yezPwHrcWUg9ig3AnbWNg895mtD5R46YmD",
  "key34": "2aBKnig64vG4vgMxKRTHkXzHUKej5diiFSxtodnPW5X79xVvGmx4bHzfGQhe293MDd9BMEsaBGuRDWvJW571CNJj",
  "key35": "26937a5Qd74azH4ssyaij6tQ39RMGirr12cwxj7Dpb38CCPrXrGfazJGdhSnhC4XuBUKAAiz6GJUjwmcKqpe4bJ1",
  "key36": "5BDHzoc8wdnS9YqAUQQiTgRvpVNdUZW1v1f4tWyrEFJdeVo5krcGrgeUS2rBkHQEXp7UNdAwri5anHp7tunZbiVv",
  "key37": "2Rh1qvHAB5NzzJo1tQmToPRLyccJzCmn8QHZ6F1KV6cQJX2YDuP6ovu3sWy56HQfbFBXpZNxGwPsxCv8DWtYEvSv"
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
