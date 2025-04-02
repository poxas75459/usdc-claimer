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
    "4sfatbEsaV1yBueE45JfxzjY6Bv8BaJ7PrkizbSdqqh2exNA7ueaGX4nrw42P8dRzrfMxKtgvFnkBoht3ugKDt83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1uunkD2WxYmxP3Vee1j4RRPciTiAVzd5Bzjbp6jRnRqw4UrBPRBJTPuPJXSLwk8T6PHzQG79wkthvHbo75YrpKZ",
  "key1": "2aptvW5iRUUiE6anZisoYdkCnDGqkhCzcdH8s2zmEmBBd9DtNH5cmQkAoAWuJByLbhdhamrig3RwFBu7P9MB8A1k",
  "key2": "2B5W2fJFVETDhguStHxLPCSNuczbQa4TMwGMJ8kj2pMRaARut29cjeALUX5XKHSwgVsa9wYbiieisZ3eUbDk9A76",
  "key3": "5n8gbv2PLJvWfyVFdYjtQvyaGiP4br2TSqanx1Bh6KMj7vjoP7yZPf8XqKFczCFX1p9yxsHrdEfjaDBpyxJPUgdW",
  "key4": "4gAmmUeah1ZmiggkN7PCsDN34MNY9akPyHBYTh9zLSYfvvaSh7Ftojv5eK4rCAyDm8XWuPRZpSppnXzL4ACA5mTs",
  "key5": "3YAmqGyHpw9QmUK5YvgCeK8nw47Msj47w98LaPaRRN6YfaBiuiLXQa9meWUu9otLo2XCYKXFRQRi5zCLqHH8Dj3e",
  "key6": "2JGvQkgBfxZe53LMgAmmPkJ9W11X5kU3apBFdaDfpULExAkQG1FrTH2ug2tuFSu69Ja6JqWcM4EhgKK4kPVcMj5j",
  "key7": "FdJ1ZJisxfWPh4PhWnMBzMyrqnXquXh2eXiDwfiYR9VRz4sKC6HHcB2tWfcjFzqkfYCCmnt6VmCxKyh5QdCfdsc",
  "key8": "53gbyqtB9mENNgNtxAbE5JPBLvcGrYtoVSs2Sazk6nBhiJ4gN81CQwTaKHmzjLTNcAXodEyJL9184rkG1yueS3gL",
  "key9": "NvGYxwrXUytKY6qdCg4ZRgmC1YBsJWPHwWMKdwmo2LdFikQRiwnQTNm6763KyA6Pe3ZcpS8NjrE8nqhxrhPDMii",
  "key10": "4oyyvXYezgPoubvT1BAunQCdM4pEBYaBjv6r5kgTKZBidfYK1RwjdqCAtJyNe2ZtJeJg68kKbzKoYTUZ3nkUv27a",
  "key11": "57gcNz8xDvQt7eEpxynD9ziWVmRopLQSNV8dp7c9eWcMgcxsuWyZQc1qvjgXqEqzmLGFKjvA8zJVwZGxED2CkWfK",
  "key12": "dmbaBZYbTQyueZM1UvbDtqbNZbRepfQB9RM3SWG3zSLAwMgQhgrwByg1VHrbiZ14ruDDRBUDtgACEnrMfibBxT3",
  "key13": "4V2pRcH5FL6pB295DApGCCP3JXWt5yzRebRs8t1C4jctgNHLNVUxgL7nRrnS5ZufZ9RAQMC9m7nW37mBRwkqudQR",
  "key14": "33weMV31qsWjqLDVfUB7CqBkafbqjxiL84jpwEBs89N8YyvBkSj2s6DnYwL322u1pU1wqahuFMUnLhJBa4Fjte3L",
  "key15": "5S6SpFZwkmfFnC6AAAWp9T4sSWfDZTsWwUAMEfnft7tWERBb9GP61uMjtdqBXH8YbbQ6xjyRB5inyWG6BaJubeVo",
  "key16": "4x76Eb2WUdxQNEas2KFUHjVqt3M8vsuDN8tBSQuRGaskWma9f16YuPvVxD7KoLM37R1yB7FhrDMUK8hz4FynyWNL",
  "key17": "3z4pD6BuP6a54EVay3VmkhSc68fWSN5ZeWexeYHeHnXLtotmHzkWTZJS9hznLF6NBmPJTPq41uM1P18iKDxqN652",
  "key18": "3RDTaZa8XvyxY5e2vzijgCJhrCVNZ1xPgh787XagcbCCafWvMXpEhsX27vV8GW9Dec4PLgdbsifXUC8gykNdKYfA",
  "key19": "3z9U1bQYzeHoNdxh5YkrAkc7ZMtDBNCALumcGbTZeL3oNgD5ZRNzBknPB5tQXdKJ4g7Q1VdFjMpLksacgh8xybEM",
  "key20": "BdYxu9qoP3N6E3zitweka5mXBajvgap7dijCPebTzd74o3YehHPegY6gyQZFJbxCmB1pvSeEr5JjsaSbgpZUgRd",
  "key21": "EPe8dSeRTeTLcdQAVF2FHz7fyQ9NMeNmcy3UksLVz77ssNd4AFwDnHWzhtWN6jipS3yXsa3rKtysuMnJkqXWyec",
  "key22": "3XKdBGYChzKdP7LCEpMvrBHsvNK6zee4M7f31jGrEqsWgwU6hTT2VqgUTzbYp6b9hsez7oKiMxboi1nCBUneCw5r",
  "key23": "4jmPiZnnVpRgXbPuF9h7oFiZLY6cYwX8Cv3A3vyudy78PAEPo97m1tawFA1riPp1DiaBdAMCUSZBCTbX5oGvvPCU",
  "key24": "5hZXh7M5H4BT7oY6HPjqdhzqTA8q1HdPdQS64RxVCdxkSPNpYkdgqpQyDVMJgtmS76dPgmnciZCkLXS1SJkDgqyT",
  "key25": "4dmuANskYq6FywUc7gwD6eL1n1gaGW3KNX1SwzAR1xMn9YtzfF2f7JQGpP5hfbEeLnFybxPnKTdfg8HEdomYX7mq",
  "key26": "65r7fubhzhJzNY2wGAwFj9NmrkL9MQeo45Gy3EX3S2ph1Sxz1YW9ekf6UiVpYX1k69wxgGGwNBiovYihqSL7rPiR",
  "key27": "3GnbHPikjYv8ZqeqT9T9bMWs36MPUrmbru156CTi94U97Jss2MKD85WF6Koi46fe6iRHW5ziyzHxVYi4K4txPuVU",
  "key28": "2yCmBxePZdaR16i7BSKpUW74dfjV6etYWXjuSTrk33UMwHLrQj6w4b9nDvQLbdvBRag7cAeToyY2hoF6TkQVmG2K",
  "key29": "3sJQjekSdyc33ChiZMWXLTtQuNtqBM9LM51EU8vhnVcaJWmGEcrbrPbiC2Vxb27UKJXuwcH5vJyFRAK4U66fJ47c",
  "key30": "4jLPf2UKwj7rDfYbntrCumJvvXpSjUCRc8Kw9XjuFUajkazr6mMTZhZXRPNLPuWks6xBnCNaTenUJQBThgUMN7Av",
  "key31": "5jDZY9pnp4CjXciKSdvMHzXpouZR3H3qGNYM6rdrFPB5eEhMGYjBr1EUcd8kjxhZEkRRJ3moN66VQtGHq6hy2T1K",
  "key32": "62XJ11m7SwSVhGivt5DhFRZQHanBHDGoEtyhNuAbruujkxj5hJqPt26Rnh1gAWmdgWGBShLgmyoYpGfsWFNBCJbt",
  "key33": "3SRVgJ77cZHbLqj2HnkVmgQa81PQXAhSwgEQN3WRPaMgY8GPJTteW2qPgbgoETVnZC7i8Ps7CbBUTL9M6Uha5gNv",
  "key34": "N9yhmKVzdijWEcNk9QPZhbh41oj2NBBqF41g2GCJZGtAJGMb1GDRJrTdZzasYmGYJExZr9HwweSXzKaVpNQpZ6s",
  "key35": "2F9kYu4CBkbGdLkrCQKRJ9ndo4Ck7V1tNdmSq1NhAe6W51BzjN7idgEtpnA3pG1dJXgtLqWE8jURFrh6jCy4woz8",
  "key36": "4UpHbDTigZukzjvYFSdeYzdy3W7Qi7xSmHyotvKx4MyfkDTJXxUozFB8tH9fd1KJeCXsVhS7HGiiaFEgmHcRRpZT",
  "key37": "ypu6m6KDtnpS23ez7m3JmLF6F9pA4kw5i3NMuYvv4LQTkNwrkqL8jYXNksNi5EzXPWjcccpViYYFoTJL8euC8hE",
  "key38": "5iq2HxMFLMLnFjQ8nEKEiMKJno5XTZqEYMtswLVeSvvUjLjTGQ3iVc9qDwd2xUMcMe6KTjFhF3dsaUjjxwsjteaM",
  "key39": "3WL7ZuQLpH1U3qeMfxuNWYhBK1qwNUihABnCQVYUfbP1jzXgSFUSQ5u5eeQittu7TuhdRQ4FYy73mU28PLjAnZL4",
  "key40": "24BbVqwLV931RdTYisAiyjtX9xQSmU3qGkGxF5vDBn6NgP93d8cCLhd12L8eD29D1gWHZpNm9RoPPi6gYbRgggkv",
  "key41": "2WogTJGmyUSzGdx5VRLSwQJ9VBwNDkQwB6hDmakZV74TPCdyv8rJo95FqJaVP5ptek1kerPmTCSftZwZW2WtTLDr"
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
