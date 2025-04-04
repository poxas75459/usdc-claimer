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
    "2MFnN8JB6qJz6EY12BH9XVTg3y3bqHiZFToqWUzqR75qbuQZXqTmatQvqJJu7ybzNbHDNTtNPWpYjEs41GSQtQiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTMKqnDi1Fbe8R7MXtWR83hZoBdNk8vCWQ1jh5hEzne3wGptt42bxZUVUgoKDCWCYRPcwaU4QoLVUL8MC7tetgC",
  "key1": "5f1ZaW8zi1SE211HV6sypbeRRPD6cJ8jxsd4PVTf5S8h4ZAqRQ7Z9ioxdZRsEoHYim9vugk38HQ6y6JgAgFbTyZr",
  "key2": "34Ygu7QrvZmEuTK5HmzYZNnt61nUQVp38gzu9v2wFyqvfA4GoEqB3C81XzHd54dJMZQKjekCW3iRqsVDMRPJDKtz",
  "key3": "2fGKysMc9UDyoiUkpRDhCponq4LbPiZ5L1Ltp3ox8MCPheW5QD2xjptYMRXeLVeftuirsgMDfewY98JsJ75EwMb8",
  "key4": "2MVmMTvhfwGQtLMwHBCdwhp3y58tnngKrwF76zwzogfXjneBvfmFJkpvjDjSjm6VXRXA5mzRzQJDPZTT3WpGFCyg",
  "key5": "4dua8tjnLYDmQHYseoaZBrpeCqRpjCgitKGRgWwPkda9qvuG4q1rYvcwVkBUkmcmTYwkyHnnN3RMZSe6QLjVb3yz",
  "key6": "5QQ6UQVmMcKoxvXAWoUfF5ViTdLBrDDvHf7yUrREG9E2iXu8G3NqtgsKTVT72pLezogJuQVD2an3aNtZRKZaAefe",
  "key7": "uMCoa29rrHJUQfc5H7NoeGp4TDb1GhcBxv1qjKM7H55GeVzduiYW34tx2xyKEPh48N3nJCeqajLCj8D4HyT45dP",
  "key8": "4dnrYXupsD4fAwpPvKGpn6S19h2BbFxiC6whtsPQoiQ3UdUCCSjTWJZBACJpsYbsMbT1Sx18FSJXXquttb6nXgLx",
  "key9": "ftNQ7ASuNxrzpz3wZqCQ1EHLbuaDB9ryCivLDVSoBPiVkThYrfrXkQYHXeJN5nJRZ1195t8Av1JkDhudadNtsAY",
  "key10": "4kz9Ury34YapMe3RA2pGEYDZs1qDzxfs1kFakyegFKKgp1JWghBZzLboiPR2noS74LtbZJnVmxD2tfuRWTFHoyEW",
  "key11": "4EDiSn8jPxT3tRVxmuhkLL7j8CPkG9ygtu31stNNonMJ24hAuoqXVCJh9zRTcc6Esmfpmb1X1FyB6DkDAPkUx39M",
  "key12": "52P1v3q9CWjxuF8FS49EHZSFRWvQxgVCT6nM1sGENQ9q2551CNpkxYjydiusS5Sio4PzK1x61HotDQyGJm74T3UG",
  "key13": "2WBSALXajZNSs9ZtVFqXdMKWUVtWLq6T7B6ita9z51KyBa28faLXFLZCyE4JDajLdRUGc39af3jLLfbcZmbL8hvh",
  "key14": "2NAna9XW7431BBrRvbpCpJPXU86k156nCEemyPvfqx75i7cUBWQQz8o5y4UCS4woiuHdNciuZwugufepkV97A7Sn",
  "key15": "5twsHh9QDrdm9dQ4cEzpqAtLHw3RmtVsgZ2MfXCfEpa24JGHGWBMg1eyMBWu6gpnN5pNGj7oLDZkUEymf5gZ16f5",
  "key16": "4WrFwev6A7a73seA8Lx6GuYKVBwFWyjRaaFwf4n4CLDK6A31Pnw9NqGNEE7WBVtosvhz6fCysJYL8xonFBcsyLEs",
  "key17": "24PRYfSD7x4yfvKgCEZPm4W6JJDTa8pxjdcwTikqG7iBiMZVvrJjrGAuZ1LCnrAtJYdbJcbG4qXKxytBzhuYa7sh",
  "key18": "44xNZ9Pw31i5byTUQ6yQ49fJFWC7xdV9NUenssxP4sHZqm4ZnJMzUXceCnLSu2gspjcuhHCYmxtHYTpWArYNYBhn",
  "key19": "5Tyn8U6zmrycSqLVf4vGbob5bqs4UrtmrPcMfQJW9dVN1MfojczKbKXvNPi5q3vs6VejDomJyWR65Nc7W3EZWHzW",
  "key20": "cPEg966yeH9Nx6qry8Kc3Z2UeBB3eEHGBQXsUmx5TZ2HCgtHQJrHXCNUVTprVcrcbFvrjoLHjJkYgSQ52ptSYQM",
  "key21": "5iUBNDdd43HcZYZhZHP3AXbEVG9tVEMZtnUtQGB4rJN3EoHsdTx6LHjwEdkQkr28hgGKCZq5jkXhfFQWYQpBkm2c",
  "key22": "44HUFkNteinHUKya25PaqKp9SnMGLJTuLKqKJ24eAXJUUvEKwFTYrezahSQDKCa4ppjVgUa6ghtRX11ZPQFnPafs",
  "key23": "FiANUDcC7GwwPNpixbkF1GDKqjYPDnnDaRwNzm2WwmMs3HM61NNVZWzuL4c5cEfdkpoJpXz95m5DVCSQTvrLit8",
  "key24": "2ZQp7z8GGtnfqJKdCMsq1kpchjeE3hWR17vy5BMjqVjfMiPkZ3WkNp3rWBjpcRQkYoZDoCrEHcs2X2QoYxsYKvGL",
  "key25": "5vrb1UTNyyVn3Loe9G2NKcXqxSgBSjBarbUrDz8htoDoaUXQYiNSZJrYWXMqCn6qnwNeheqPaWJcrJyJP4e5a3QC",
  "key26": "KwgWb2PfdvpPZMgNteEaiMk8SCbJhjoFeyx7Fer2dTSbYwYGJwicQxEo1rfJvw7nVphe7EZ7V5Ww4JTWeaGwBbT",
  "key27": "5qZpJ2vk2B7n5gifFfMguPmAfpSUR7wCHt6CmcrTDLDRKeVL1fYR2JmfAqBsFM5WgaQC8EX3J6ZMfdN2HdxmJXjh",
  "key28": "5c2rf2XVCaW2gcUiY26QCsTkeZRBcLhUB8WXyTh6Dxf9DDLkWsBdMEuaYhNvWH8m5pBa8UYDyGD2odrPwfw9m7wx",
  "key29": "2jfdrQxYRiZLB2dTYPD385hDs8r8fnd9Fi5uEkkPy8pPqzofzrNNGeaXrAo5BrEb55L39VFcFsUFrQWYQ1T2ie4L",
  "key30": "5nT1ywXP7gxda19KzAX35FJdkoaEfLiGT2DwJ3B4mnKaTu6B4qq8YiBBWG7naRcgoKDdwaPNz7hnxL4N6a9nukEP",
  "key31": "5BSa92ATKkGQUM8t9PGaVFRgoysME1b59xEgwyDaQqNhFeTvcqDACvZHYv2ixJnS8q43eGPKhKNjozJsrFk2X5x5",
  "key32": "53c2PXQSssBQcUjQ5FJoeUj1t7cx7P5NWBeFoUFMjRCu8XV56KhwDPkw1yieL5j7itUHP6cTjCjzHRPK7UKXzfru",
  "key33": "abxbmDffYUfg4GDMWwdnghkjaarT3cadmcCkWWjc4uj24yJBFmfezzUttkzAgWit4chWdR2LkCNxcsLhvkE1HLq",
  "key34": "2PEpAoTYhRtdVSLdXtsw6Jkdr1EdQGnZgMd8u829GMw9frLBDvcFxEKcrPcx3qRVLLAtLXCHN8TN8xbEogK7rHcU",
  "key35": "9sShzURbVQQSzGus8tZfvzdEjhCMiiBVLRzHAM6CrhYFXRG2VbEH9fQGTQ9VzMijPhAdXPgJeANiLmJTUkjvxEY",
  "key36": "49uYyFUzUpQqFE44ZsVWDbH82D69bG79EJC4BS2KgvvTUZxAs7PXvymZAeQhqbaf8XvYWKP6mqYxx28crtH7Z4zo",
  "key37": "4YbyCNMLs8ib83LPtm2PK6dHDgaajxtzEdjrfDH9VjDH2sMPNynX1DmFwx9QGj6mBZtzUD2YpeREyRXDmVdvemfo",
  "key38": "2cfvWs6DiH7iu2eP1YHoZCFijZBffEZdx7cRg2oVubHZbmiY7D8qGzwujtAELGQXMMCiBCr9uY71TK55svs2RcDD",
  "key39": "343jg1nH7frJMKEqeQWQuMXaGd4SwHZRv8utWS1yZkoKLo5dpk9fnPB42if2MhN7y6n3mwqoGyw2w9gxGuETJYbj",
  "key40": "N9gCiLK7Wv7h3FCRJB5iRWMoAt6mdG77nDpfbZAwZ76wHmHVvdWhdJUQWi6x8ivaoRQ2PVbqLaDN1tYbigL6UF5"
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
