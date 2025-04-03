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
    "3xNBwK4hhaEshNbAtbT3G3Qc3GGKKQzPrfXR2DXY7Wqhxo1CVraZM3DGDXnnhx66CMqPRZECTeWkcz8sueJZgyFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FLRjeS9be5rsS3Sv9RvaaLYcZLtnZFwfvABbf5hrBZc1R7fypYgiFxf38a6Y5u1hcsZk5U87dLkdveLMN2GA8o",
  "key1": "3RsSXLZjYZd2xK6JcA3ex2nd11mYdbD64gf9wf3WheuV1UftLqnDzmJcCanBL4Bb7Ukr7Uj4kgL7bE3adMhtjiwH",
  "key2": "25pn8nT4V9ViUgbxXLdeqKKXtMyn6tuVv9wA66FA4jUZVfG99fqGHRpccXQV9wSEW6G2dj42SwK5szDuW7YV5qhd",
  "key3": "5PYqxZ3KuFhGSbckx5RtnHsmh8RMmY2DDLw9BrDirqCvyZ1K25cTrWdTQjufeJoqe1LmiD2W45Y4yvL3FkAARwuf",
  "key4": "4SxiLR3BnUWvd8G3phcKFwQhBV7rz1Bz1rtzg8t5KXEeAtAASPknAb6Ng4xZHK2kgWnhRyUa2WqAoSf3VcCd6M1W",
  "key5": "5m6rjcRbCBSJUJ9MwNkDkH48Q8seSCLNyfA8cHWiqn3eFmf31fW3q5QQ2H9MD7uwLYtF8DABbw19c3TVCs36urxq",
  "key6": "3w7hPejyPwCEyyauLj5e7KGNiYWdgVCeSjwhNf7Q4Yqkdg1AUWLYVvAS47HkAAtFZBZ2HuvvwrCnGmfhuWoLSqKn",
  "key7": "xSvJi8966RGSnjAUj4P9jfEEbmvKGzxDfxFxXjkJ9vPdN8mg4SxDM4itFMjQ1b4JkL4GXhXrD1ZsqY3LSRaCUgE",
  "key8": "4vt5hPYKqu3N9znYFHBVh2L5jd3iUYSkVdtJjqXboYE9XoQv49iqg7HBsfU4xs3WREuFW3sdsrmNzgSGQRAe1hHy",
  "key9": "258CPRi65wPDrqYBm9xf2nN9wC8hkVDTCm163o6GsjgAtJexmyT8V3AcyBuv88HFhrsJKVhDQNqtkhz9imk96Bh6",
  "key10": "24qg8m3UyKS2N7HodWpJJeH5RzNpBnK45fx5SdRvNncfHfnosaUg2WACFWLkJKSPNHGQ1DSEB1JcYXYcw5WEY3NC",
  "key11": "2aTxbD7tU8RdJmPnsGqh6pejJoQtcJySi59aKGY1EE6yAL3L24YLq9NSMtq6DjPzMJxGmUS9S4ArkStCr99oqohT",
  "key12": "3BA5b9cozACutdRuZk5SGvLaLY261q7ZMFtKbuPvieHbXYAbH3UNTCUjknyqYtry6bD9XaXoavYwZZPF5UBmXJ6q",
  "key13": "2eijtUjfVEmuDXLspk7WKJhUtLa3Uj3n1rE1yLyupH1maYwb5NQqEnyHAFVjRP41ZzHarUkvRNXBkNydcNDu7kge",
  "key14": "pD2WRM5gbg6MpnD4QbUeexTACF5uonBxpRdqz41E9Rr4Hy776ygpyBDeZcyXdX7xM3qxGJY1qGcZzRWbSkUw7ky",
  "key15": "4pnVnqWEZxN4Ub6LTq5h2NmxxrQwcoA35wrhWQf9ZJiTPfS1o4EYDMbbaDRyiNX5vBzyXeoccfnDekuYNU9EMWvU",
  "key16": "5YpmS7rTjU8hPDigXsSUprxfzV9nN1ALhg8y6ivC72cWp3eT1W674cwuaZryJ53inHPt9BJZyMt32Fmsk6TNzxyA",
  "key17": "2bF3zKit5WiyFHDVYiP8kp7gJJnB5i3kbaUJeDfWByWzJTVb3CwzJGHBh2h3GxX3zpAZtrH9HCwAYzDEeyMbLXRW",
  "key18": "5V7xDugvieoHCKk2XREHNRAG6xauqESBnpriYvuB2EuVTzUgjkL9FCPJLbL9SUoZ7BGnHjMZX5EYGR1bh4oQQgew",
  "key19": "2ZSDSobLGQfsGWsoECCHyGi2FLPeBMCzCNJr9RAK3uSDde2fZUPw29uwPYUn1xYG5HS3LSaGPQrMxnR6XRz2M1RL",
  "key20": "3RcSzjKAHKY1pbQvjEsNMheUnXe3broJxhGp7eNAqMy2QNrti7Su8EeL1bqm6LSw54RS9VKBfMTHAK2PYZ8FNess",
  "key21": "2bPozNQJ2tckyEJ6NgmEyqgBgAc7ZdVN9kxU5xqWj61gehXGN7UNnBesckfh6QehbWajkfJgBYhzEgmV93SY3Ta9",
  "key22": "4CaMeQVfx9AgjKmZzWTgUoY7aJHTA2jrJG5qtJd68HnDYoBXUh6w4A3EbDm2Q8RUbj3zGNew5HoeSPCsVCzMCvyh",
  "key23": "2t2cFQsKf1N2t5RqcEVAPNnMZ8ZsgWb5bb1yyCcdtcymWnauQHPu4MMSqeKVLeN6k5MDiz2LDVQGhXBSzEXQjvED",
  "key24": "2RYRsmzFtjBAEyhdGAo28iKp5CWKGDtMzKemxYN76rvVFcpcyQhZ1pknpHMUs5kXmn46gMoiEKEMDBova8u3aFZv",
  "key25": "3J95DjjpKn1Q6ZnCS1CxwurdWVC9m9zfsSHTPFwBkzxb4ftLM7wWEmZ35uupGftA4UJ8bpK3PLqGUZFR17GFT3Kt",
  "key26": "4FdroyeiBae613rGwYVXgai9i8dYeSoCxnPExNv3F3veu2hnXHWdpLAcR8zpFhdDEFZAH2MEgb8sPPPQPVN16xzp",
  "key27": "4EdYts4B5rYV7dQ34Nxd5Hgopb2pLMNVYo7WxnWKSuoXMzC4ScbQDmqEbg8TVXKmRVohfQuZ4AEr8FAThRN8M7ka",
  "key28": "3wW57o5GoUhKJAsfLxmG9PNTWu6ePAxE1YqPjoxx6KjccnKEAJa2GdnFGmwWRSgr8ndotnwET4Xo92sdjZhtupU6",
  "key29": "5BZxBgT2FCuEV2Pm8uQuv45oaeDD7QVTG1y9vov9c4zaTMHUsoTpm6jxQDq7gTdzFrnzkW4hhTyoKUSJKPzwQELF",
  "key30": "46SHxVnSY4sU8Y5q44hoFf9igbvCd4aJwokzmj8Xx9WMWqe9EatYEvTiZLBfjP3g938DUqGzRWTraNvu64utg2Hy"
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
