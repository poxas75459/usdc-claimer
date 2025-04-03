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
    "5BnKe8ZZ3MJN2JLdHE7HZySa6RSQLMKo1oVgQx5e98qRL5kEeaWTXdeeL5mq5yRLadNm9Jgy98Nn68VQzciZxRxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395Zt1CAUsyrx2FYb8pkE3qwUn9ZREmaHfqo6xb8dHam1KZA2ZoGRJQowykh4jCCEiDPu4XhTbPH97U6v4cAuw65",
  "key1": "3Sv9WGsySxXFsmTCnV9jnX4z1VkuzD1HuiDBRemMMCqyspizUBjUJcbQ86VdSqMPkuypyC2m6QYnF8Hrcrbi5tQk",
  "key2": "4JFETcFm3wzGSvF3rhQVjsaLFXDgdWgWGuLpaxVFQsnZ3kh97V6rkvGc9RYFUDVGfCG7qbX4AYya7JCKKDqrWvFw",
  "key3": "2D5oheAaEZGBcmYH3YcvYgEqcH5mCegStLugExXALqLWPWSewx2DGdGuC3KrBFUG5oxBuYfThYKnkzJvmaVyCAZM",
  "key4": "4Ng3D631b3uKdvWkd2Eiw8gYEj9miLqx7X6XhdqogrRXXVjgPMPZ4GdxwtfMY5ajc6HLNimtTPwqBQX44qbh72c6",
  "key5": "3XDHLLDWTgW3snZm3p4EFytAP9GsgqQscFJWpVEgcjJTGbixdke6zSQpoaPLyxxpiFdMZ9mN6p3b3mZ1sQhWTBCo",
  "key6": "3JyfT6rnGvBmgrSioNCeRDgPQycyHfqXvvsh5VsR7fqrHARxDzrs4BWRGZY8itnVNrxUTX3xjswXs6dLS742nvUo",
  "key7": "cz7oCogNLHzrUuHis6ciKbXmCW2fve8pX8NqFqPDkAEr99fVvW4XDUMsZrM53KW3hdP2yWzKDc1VchKCD3F7Qnw",
  "key8": "8eNEKiVoCaFuDxkRNBR6CcUmxnM9yvVkMc5pwGhQPfKBnRMZayusQsMmpaRd3GMLjR1YX8XipwJxaDGDyzxnGnG",
  "key9": "57M8bEFJ15xhizbZMbtA6SNQDiJdFkBu1R75TDY3cVi1Z8vGQVWGEmRvgrouNVae185u8pNfurPjJZkqPxcip6Wo",
  "key10": "5PTFkGzDNo12NJcNMGXNTgVMRsaRZuMjBsfKjtZzEt1trbEZEQndfLT676jtBCdmFmGygSA9f6NDMeF66McoAniB",
  "key11": "52UEooUN1b5UpWeDVaxjEFQzgj8vAVBwD5Kt2e26KtthPBoJtLMDYmZYMo5J3hqf3248rze4UTny68mqBzRGADpg",
  "key12": "2uaEpbgrL3XCkgyCmeLTMykDG3zCe5giaZChpJzMBn9MX21LLuoCWi2mSnvmC355cc2CUDkn2ZUE3RcvnAZRkGAx",
  "key13": "3BdRnGLew3G4n2UbSmg82dVmDVrZ43FTA24RGG7MsyjhNsA1pB893T6rz9hMVihroY48VyPS5gsxc2fwKs1Q56ia",
  "key14": "UdYs4648vPfAjrnKwHN415RnotaxTr25vz8YzaRVk4hhMeL6fknejivKcdzoLxAASPoJG5oKrjZwNirgHRGVJsK",
  "key15": "27PXXHEWHzC5pSaoHifVhX7DgrEUFYcynxcQqbZXfZvJBstPSX5gxfJEYcr4qqvPfB2HGFf3f4JktLN7m4eUhV8a",
  "key16": "Qzpd2Rzu5YFm8uGBakym7Xje5PYmh4NUh8RgmNi2sytAXoHyK8jv3z9KxtcDzyvw6bFedyZyuojXFGBUC7VE6RL",
  "key17": "5q4SffPd7AsqWJrA61H5C2ZDcLJwaBVefzCyEZTBNPVePpwCREgwpE1NPsdbin5j8A5LFasRZFz8Kc4qM3vyaF5n",
  "key18": "5AKA7mVdbPEJypDz99Bgj2vqekVJFhntBEu6rqYp2Hb8KgdZaVGm4Syg9fZgyTg362zgaWUtoP2RcpdBL6GdKH4Y",
  "key19": "3QPxBiXLtSaFDCwQUqmJckXHH7t1tC5yazcuWN6NpPQTT9a6tpb4Y5WgLQfz6ZeavQh5AQPrNeebYFZ2nftG8mCJ",
  "key20": "2HQZHbQxL7VANcL8EfKmQXMH4p6D3WuDjQrdtvxPDsRKBSa7wQWYVerB8Ai1RqMRM9kHPdVo3q3Qwskk98AZFBz4",
  "key21": "3xtWQi45AwYbsVpypJBAzLkh5Z4eJRMGSsdp1z1x3fpbg357FSaxNCA7Bui9GgDR9HotVn34py6aFWJeMTwRQ2GK",
  "key22": "5aXoNmux997CFdDvqMmwskkZxNZnnmr7TWyQ8N8YpJquFSLMX7A8etBut7PatFWHmaxR63PjztwgwJg5z4TNEPtV",
  "key23": "2wrw9WM1CLmyvcQxT6YwXGmmcFTQjrShRSXccYFcU9SKk1RkVoaFuBdUbxNWZfuSZV84pNWLWMxjGWNWTBp3u7HC",
  "key24": "4FQyRwnhZDm1gck7v35dzfXTrcYv1qE1c3K3NLMT7fNhPhvZHCLSau2kJ6YGQhAASorW4txdoybNdBTL4E3XGaKn",
  "key25": "33aETMzcL4BK8Lxii2qHLhi7Xdttno1hFqorXuVfzVrZF5KPWQQSsAN7exy6axsyiTc391rFLAaFypJPKXKMSwXq",
  "key26": "3xRjDXYK6YA87Dz17Hy4G3RQHRgrCXUNruzGBVkhgGZXvhpsVwA7T25tDGAuaynaC5mQ98cdLScX4ZeGz6qtBG7T",
  "key27": "5RJR4xq3v4CfdsxoBr6YA6ewBjeEny5PdVPX7z9CmF6av1qCGCSadw4fCGxbwyZnDqxpZnLNA7vuPs89edttAkdA",
  "key28": "5nZQWudEWEWTTv8od8FDZNhWfGw47fpHw27MfpEKSx3TiZhzAuMaBru2PCzpsdatdzWwUyFZTwPmK9cFSxaepV6Q",
  "key29": "4xx7hsErKq855Pb5Xogd1fqiZdx2NYMybnDFtT7qktbcq1uXsrkARSMRwCqfaJEsZgYx62Wa15vwn9Pm6rhwptHu",
  "key30": "AsBN1TAF433MY7qwGzPwjtYXGkZZ9nhdU4FGDYPpKmCtwWecEdUfx18ziuuqmtRLaXffoNiz8MADrXmDaRG2RDU",
  "key31": "2kURTKfP6LsUMHxinitWbsnSnhTgYd59DgvhmzQKQLwFpGPbZgFnsjK26RVXoRUiSkGqwLCAy2hFpEwUsBZTXWve",
  "key32": "4ywA3ZE2vBjXvNMXqfct9byPc9vcbifQ9qQHT4xSz8zkSo5hme8ucBGy4qDyGA5rNXastEBAogSQaF1YSbuq9mt3",
  "key33": "4wyvAMxb7HxRqdNGuGn78roP1Ne2etk61KtP7QqGf6hBYDHdG2vYdneAStLMb3oMi8aAJ2s3Fi8nQujkwUzy7Lnt",
  "key34": "31y41ZdRvNNaQLRsENNouUMmNXadQQdacRSmyFGkKyebbg1iHZd4R1YysrwAi7re9yEF4tznffLR2cvZ3GvPJ6eW",
  "key35": "58vKUNRCggZfdt25WNsyW4LphGrCEMzogZKyFNTx2HCDFSrFAERmcZTycQ6iqgWuyXGneuzGrgXu8XT3RRkxEeKH",
  "key36": "1FNwGoQxZaGEsAt6zEQ74ZD4iazvhNKDyNXM5qGB531i156eEc982eMBG2WG2Rr7bNAfCBMC6xHXswRsrTcZrEo",
  "key37": "2jBucGmKC3157prP6SiVS3gNjHvNuGJCNsF5heUd1JWViDE7x1teLW3uGduGhgaJqXwSVpXQNz8we4d6sAXaXNwJ",
  "key38": "2jpMohEB3nDeHgNezJQTNPKdep6xAaNAKzZp2Z1yzR87GDcSyc8NojFStMxvvNmuUgZ19PbRkAan1bTVKoRxFDB2",
  "key39": "3CGpn1NQNtTCBDXjeqZNCwB6oLUTHVsbJS3SNygVDT92DUMUW5syNeMomrDfB5MmrDnZisN8AAGoH4BFfQRpnQtZ",
  "key40": "XjxVA1cbk5pF5tjjGoUWkpQLxgSJAMxUcKJVtHU9d9kGZNZUyKKkupqacuC3o12YfBGH2YUV4X6GJURDwq3wpSZ",
  "key41": "3esvRiG8ECfoMxrg6ZNQKwSJkQpBbfCUwXrcvRdwDMNn6c51v9TUVNH2akPND1VVGLFAKoyKaHaYF4kSn67YkLi2",
  "key42": "e8pVpdr7QBGRscAvZ9xG13f84zxomiVQf1o3LFJnGLXL7oeeUeGvQCyZX4Pj1VKMmz6XeiZbvBYDpcYPbcNe982",
  "key43": "5hjUBnPBQRCek746cNBrvzRLvPq2sNHGTcLweYJ6YvXgpSNcYhVS1hYdMyqcah9VQs2N5JbQEp5KFpLPeX3usryz",
  "key44": "2fgaXD4QhyVmxsi3AUD6iPHUEPMWtoTjGrS9qKntbCpKetm4fez2LAL7M8Svs4UjTGNFnM9uFS5uULpB9TuJKVFH",
  "key45": "ioZEZNjaj3Ck28jnbdG4GWgDpNDnKz2q6r572FHzczmDqAvS5eA79sGQzqkqetYGDuSCDSwuySsSm9UDX13Lhd2",
  "key46": "zMcena2wfVYgrpJUrDknV69rSXM3E4bqss8AKcqreb3EmetZtvsUtKuwhBQZXZssvi4qXuWFnfBzmaB5KCYtTe5",
  "key47": "QQmV64vWLDwHVnUpJHXTVqQewk6e5fY7qCqX8BWof6sR9dMkNu1GBGyhLXPmSpBFm23PdF9uQHeQx2dRsq7GeGL",
  "key48": "5zfiSEf1gwzTityCJSxk5rePeJ9hKDdhKAgewR3qden4aAcaD7t7GvT8E3zQfh25JhnBzSg2kvsae6vptnzSdENS"
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
