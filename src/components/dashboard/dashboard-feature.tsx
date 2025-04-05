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
    "3FbGhZt4ebsAhxed7yYwpzv3CjuRZ6o5uShdauyq5V5iSiuSbfT7Z2TnpYRwqunA6aNRXg3zxmVBiP8PpQsjhfbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DM4AZW4cZ9v5u2bntVf4GgqDSkQidfnauu92ikYr4MB6U1J4qU45eumxnVyLR5ESCkmUyeUUxQ4dKsW4TesRTcd",
  "key1": "3DC9TN4TMZ4v8RcrxCHJwBTtejsc7uAmStApzLVYU9YEstctdQPNqqYifxQLt7YGkMdtjDFDCt6zbwo8SJshftZC",
  "key2": "5KnzBC7Npto5x9j7nXxo4xDgEYPQMJ2pXNuyQehgzPvqRm6GXYCZgxAmLK9u36DmefwmcgwD7uPrFB4j4cPxwXg1",
  "key3": "8bw6nBRS29tGgBQKfDCukaF4o1fa9PK2SAJnByEJwWex51jFq7PEYFUPQT48PcaDb2TGBSSDadaXus3opKCRvj7",
  "key4": "2xwab8z7SzDTDQWS9J1mowwXYqTDhtacKBzAL94FhY9m9icKtYBoihGGHHzx4JyaJ6fuFjy6Rn1WAyqHx4R385t5",
  "key5": "4k27JKVrSoHkb3UCbnLsHi55BxK28WQMwD9vPgw3vjKvoRB5pzKUSCoE65vW75EwvsWbzMBqCuPvFPvEsj6hGcD9",
  "key6": "3UX7jhWGD2xkb9ngC8ZFnCT1QRu5KPoqBpW7LxvSFc5bkCxmHPxGW3cjbpRL5F5iYv2XVNQho7Un2c8gcDz5scPN",
  "key7": "2YSdYT895Hyz3JFQRUytKZmFMmQkQgLnWLtqWXtJiMMDS9e7icr87zYeDAt5necr5xtQb17onDYdgtQcerE5FAXL",
  "key8": "ELCL1YemjVLfWZZufME7B8ViuGvZKYbXhvT4sE6H1mySoQP4Em3HNFwBhNx7JgXttNKN6tqyVV3igJJS6BE6CwE",
  "key9": "34n7gqz61bGc4nAFFitd2XNEz2tw5VdXsumFp3FX4Kj8UfMNhDUK8bAYRsFJJB2ccy8o4RoHC9nj227RRF6dPLk1",
  "key10": "5j9kdGAXNY4DtoUL2Cpo9MzWiLKcXDe7Z1H7catNQ4vZdVH9ZU9BuRqtLB9N2xVRVWYXs1CEeyR4CmaVAZxCcK7T",
  "key11": "3Zt79vDdcuemqQEvm7ykZ8ucQjTcRgp1h3yEFv6aJA18oKDs3YL3f3HFbYyjjGda1JTNt3ToPYL5ombrHraTQvUA",
  "key12": "47tMC14yqpeAs9xMmsiHoYKqSbj2HKxgZiEuh7YEipBaprvPAafWSsq23jCQYaRnjcAy1AM3iRtDe3CtTwF9tBo5",
  "key13": "4rWRTjmnVkqgEh7sakdvQKUbre7XBRHNsZjp4V2JU47rP23b2ETyVWyDsHDMx7jCWsB6fAQFW188Z4nJWiEkTcT6",
  "key14": "33MaTejC63LhvNeNqpuxKzx3mo6xeXGpP9huxoii47iLGaym1qAD8nydmu6iKLG7tTjVNdfHpnvvcsZY2iVSzjSD",
  "key15": "3Xniaw2R5HtwhZWtWsf1ujRv5zKAcTbJvVqE5w3n1GiG8QkH3puQ8g5PuvPdnyzVaqe2iRfySYsWDwYFz56RBdCy",
  "key16": "4aTqCYaENbUfGa4siPwLVBJmk5kZbtoVLbPJTppaeK76dMtqWeb3fdtpMxoCU4Qhb9Y1U9dEzFn9EhJha58KkqG2",
  "key17": "4ssoJMJxSSy6iqrFAqCoVuXN74btgM5uFwfs1wesB62aVzFzQwJtGW6PpixHLczNFe7guFHhSi65Aca5x2PKurBw",
  "key18": "5RZ6tDavWAybp9adQfpXQ8LaPhbdu9vfpfQfXhwYEkRDeY9op8eSK7t88mWcXuhRVo9DTxCuhqS2N4qiVEp3xuCu",
  "key19": "5fucWueAkwqgeSdeWdFfV55pWjTBPLqoNH1nHfyBa5yrQ4fmAA8WeqvFPWwpJ39SVeMuLF3m9doXdYAeDQ1hQ4Kq",
  "key20": "3QdqmVAj5Efxes1RVTsU4i6keLStV6v83W86ZKSRZFiqzoxcSNbbSUkLGhLVgdUTEYTSy1defjGFJXP7sdRQnr3V",
  "key21": "3rGkbyGxAY47Ur3U9E66qQG8GQqz7nbSAP4CC6Hkf3ZYb3bGfYZ7yaniQVA6euGVp2k6mmotpCXaGM9UWodyySmP",
  "key22": "4CLJyXGBwC7sitW3RuUxCKsvssohHnE4d9vk16hWE8rLD3Cuf55kLj2zHqMy4exLBM8P61bR2eN7yx9Rro75LQeS",
  "key23": "59FnVUyAeQtjDWx5hzx9sCDVFKS6vPFjR9w5j66GGgAsjejGTUU8ja68fCcsKSBq6bSkb7odvvHrdm5WB81zEeuP",
  "key24": "3WCZFJr6AZJQSugNPrN5v4ZVu19H8QqrxkTJdcdkY4ZWbuwot2FRSRKNGAaBqebZqamg7qttqgZ8idAKTFgerZRx",
  "key25": "5XtzhYqyRbnF1BLhRwc5W6u1tqE2a5D8Az61ABcrGNtVPXcpGQpK7vSbHiSaaDm3uL3iJAz9dBukoBWA8CMhyvFn",
  "key26": "5Agiu544tMGNDKjvoSqfV9D3W3SArmSR3c9SKUTPLjfAWTXXb85fPfisJBQXCpeEUMgd4NXhawQygzEZB5X51UPc",
  "key27": "3WZofMEVJ7z1K1v1ds2wakhLG4JnphFZdxqYuUXZVmcNJXw9nwBTewayLWBJyQtkhEbCHQZCnRfBEDWbYmVGPjzg",
  "key28": "21QgwUzqYA7HDAJsfxtA6FNipzihTc37MjkJQ49P9WwsMboUNUsXayyY4BbdzEimkevUwHGDkikhBU6gL5TYMVhf",
  "key29": "4cFpszQXdXwvvKH9sxdruL96j5JnqbgbmUjo5moHSzdh95asLPfpShSTr6FVhtxmjoUvQLk71f4MaHhXyr9bjm7N",
  "key30": "2ATAeuTASBH6G4qEXwtKNRoPxdW2NxYkHqPzVMetM7575iL6yiDMSK23F7zbnp3Y6oUvKPExQUa9t4vwYCUWEVcL",
  "key31": "4ZKXXnTj8jzpzt7vNG5YZRUxsB6R75wdKxwcNBbqUTGAj4ezJ8VwWSQuX7aSeeLM66ARBYd68Q1qv7fWcCfYBonY",
  "key32": "5uVBWYWJnhgo81gL5JKjZe9CQig24Wgph4u7gBevzUS2AybmBBbc1K43Zs1FQYDKJZYLqMT5HsiaAKRC6xuH4jTc",
  "key33": "e6wh9Z6Q61z8tBS3BvbGjEGYQbVzRDNMFqP3ZehQJFLxnHvTLuFH56zkn94R21tqavxuze2LQocEc14G2fZXAjR",
  "key34": "4yQFYQm7DYYaLtgyWSQqgiQ5obZkzrsnzQ65KFJJMe4eWvLExAoxte2ez57mvkazYB2yPiSjWs8WRt5xhuHTK5sQ",
  "key35": "4R4Sv54x7ecGyhvcm4nsHJcCyXBqruzf83xXTMoJzRwsZf9959SSZCGFsiefDQmxw67aPSkebQzQYfcNPz7gNRQy",
  "key36": "34annhuvKLrAtTvaBrLREDTfUbcL7vBLck49oTnYB1zcZMcTh6bmhB4R6LzMKHhezkGaox4fH7if1x2tYATBxXFr",
  "key37": "34VEYTSaWLugapi67Ewwwn6V9amosNHX8MtsYpDQhAuw7BQgrWwDppMniUUCdhyAcxdvQ53EKSz3iCfkvujwBsDc",
  "key38": "iPbh82UkPjruyr26NVqjL4EQHjxpD1gzJXjGDnzdX1RPJQRZ7Nva1L2oZWD2qKAErX7jYQ4fHuz7Ut1o7vtsXCa",
  "key39": "21e5NXAcEeu6m5GowDQRpaiaAX16PKgK4Zxp2zH9iUvvgy4dcSaUD3NMUgX9PguDB2dfuwrHRdFRLT2F6D6s1HL8",
  "key40": "WSzALXYgLEfEt7GRxmEpMe2pEKt5BNGJuXsCZKXVtub4wk8at7TytB8ZLunHjD5jo2s1ZiZSZ2EFGWsWHu5gMYW",
  "key41": "31NvB7DCJPVYauCsFUJdF92Ru9rGUuw4UYNjKcUQ5NLYm9qbh6SjQwhgYcLs8ZyocHrhAyxQgCJ3wCFv6TsNxo4Z",
  "key42": "29BcDGhGwsFjpC8eBLubtsPCJmG7sjqYwNBdCSWgTo1hhMKszkskHGJRXcR4NAgKeNjXqQrUe2SaP9uDKNA9jmzw",
  "key43": "331EDwSksrREiWQ9x9MAvUWj48GXnWSRALgsuCc1skrPzrhr95CP3dMawMmfC3NU9YuUyWAYA3bZhCCU5Eq6Nsmi",
  "key44": "5rteVeHKVqHyRBDCyQTqUVPVsZzvRPhmLfBGLJLzAzP2zTSvuwFug3SwW8387v2f36FDs5xvB4diGisfQtbXYtsf",
  "key45": "3drFRCra9boVXQ8c4pm3GQd7midZhKyESCdL5MybDESwpogBddXF9hwsmaeAbfhSL2TyNcmR94SWemD6V6bWgU3h",
  "key46": "5vcv7YMu7Y7UsUU1U8PtWH8VzfDiLkZRfLKq1xDqMeQccB1UHPjPUgkNEA3LxncZNAvPrCzgEcRQnVhF7pMu2mni",
  "key47": "4NV7WP3K3wMac1oNjqgnfK5AEk7xvaVQr5cQrupaNn4TE8PRguAvvCrhGb2SYBKGVaH3gULiKM5W9e7XFtcqxca6",
  "key48": "2x4ULAMfb3WjfDHp6dcWqYtYgoQWmNLZxGDDsC3cwg15JyCQCPT8xbSiaqGPMdsJsBuwXbv8eoTa1mA9aAigG3sh"
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
