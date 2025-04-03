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
    "52T8L54aPkFM2EvX1bDpHMgAjoaZTur5YfT1kQofX6HFGPP9mVUnxS14RdDAARtSWFsrhi8FPDNnm5EQxshxspB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEqvWqQB9jZS8eQpCXAs52F4ty9USnoCPvqrZhvwryH7fUXq6S7NMTnMHEiFPSm9N8DHZTLfcyycDw5jnKf2VMd",
  "key1": "56GGS9YGSuMGfVmnkaGcaECZyNqaLbshmisQmYdFG2R1rVnKtuHemv7VXuVwKDtC1mj8SfUriAkamy8AGxWWYrss",
  "key2": "4htxCcvFgnT7AHPipHZkXrxd1bpny7dRzMcopZWb6zQdV3vsVjXULn1JfiNjX7bjuMnh36BjaGf2xtGzNkFGXm9V",
  "key3": "5YsmXyocciQTYisfTENAy2Ve3JDJ1JqoxWr6t2XAMgBk3k7MzKtKYb9b9QdkSqrbnUYcJ887BAhiapZJEggtGgCc",
  "key4": "64iKBL7vEsnjLy7PwJnMzGYAeBWX66sUtK7sNLY6PDiXhGuRy9z4ZRDyobnveDTC6zpy8DUue7iFpJzX1LJSLWca",
  "key5": "33EzUAKm8yW59FnThbTYGrH2TZkJvSbBE4rjsw8vgGRXYR9arLgPvMYSNvPP2z914UqN69qaEDUfVfDmKpReBfPk",
  "key6": "2MsLXgk3TaLFkdBYSkYEHvqgYxfDHm24s16PNyNKQMVzqRQZGTpvUhADsdcMidKh2DTViXi7ikHvbjk3EE7QeERR",
  "key7": "4ybV6MygS8XEvdmfWt7QiMcj4wLLwLyvYcy6S7s6jMmz99nKPfVz5hU5fDKuMdvYf2SkrS95pmmvwqUgABFki2in",
  "key8": "2T1KUSVjJNF8eRcJB35BExFnbCXA3Huqvsw4N15NWqRTEPbGxwoYBxTj4zB3uPC8gNfZVa3qR8vu9wKgWrHh8XFZ",
  "key9": "gKpCUZhPAjofq9tz1nPfe3KBVhvdsv9E1dTHkiJra55fotD3pL9iPva2d8Qhq7351E4ZxBa2vzFkf4kBrT5udPA",
  "key10": "eXDQArWZHMhG2q7vhLh7XeAh5WGGsopqtQ5fSQXie2ovF8ssNqLYdRXb4n1JH3V9K1LVkZATWAwCdiykgw2MQ7x",
  "key11": "3zSiAEbsRtDzPhsEP48v9Pnn8CemauUmpqmkMbJucDmf7qqXW77rTc8YPeDLiHU4QvyiVCGrWRhetnb1kDfiHV1q",
  "key12": "9ERa8Ae2kBkcTKowUB7tzvJdSXT28VefD36jZT81GcPDDqRuXJxA4S5mfPWBsFbJ6B7ooZ5ynovoxs3dBaT4ZAz",
  "key13": "5FagRaqtTvq7AFoZmRHz84Uzg8VGArvsYNPpYNMvtRmYYAfgkEfyA7QtXacxraF3u592JVgsPq3VdcpapuiBsSMc",
  "key14": "9VZe64jyG6N64QGfTRM5JfhfxbXxdJG2sTixjr7LsGreCbNpLmnXHG5Tx6b5ZibKYhV3we44YPyivD7CoEuhGuh",
  "key15": "61GpnL5S2qBGR8mBRtbakNtx39wUGnKRyv79rr9ZZJGcHbggs8uTRQsZySr3TmPPNY3Ea54dmJJwLN9E84NHKWN1",
  "key16": "3gcBeaFojUMLmYy4F1viWm4gLY3bMqEh6cBcod8KRxgeZ9uXsNo7dVTSSr8BG31oFn6YXPtYRndetFJQj7pYZPtA",
  "key17": "3KUXeBugZD5cEooDyU5vkF7sEfvngCHZJtT8KV25RbYWYgRJp19VSNPMuTCb3nsMiRZeKdaFYCBZS5evf7RrQhHm",
  "key18": "5EehPsSetq3AXwHt6ACkGkeTm7hWSv7efqxyKdoMwwUtYxqy3bvryXAkRy9w8GrzozbZbdXrEEJw4BehNhvs8s47",
  "key19": "5uAQxvG3ALkA9mqVBPz8DJvkTSstnVqJn4FkAf8oJfQGMTQEFUb6uQd6xDisMpwJSBFAgrEg8LTDQea9k1ju5iq5",
  "key20": "4txdR2z9KRSE73GcRhJAXimPhZkTxVjSPKuQZ6snDft7P6jjT7Zv96pgZaEMvCmHwxVpnfkoQHm3cJnW3X3BBrXb",
  "key21": "4L2GVbfmBoUKs7Kff7z4c6pwG5HCkKwZg76H7WoMX89ynY2U58e3RpZsehLu4XqYmDffbVbAbAmik9FALnKy2VKD",
  "key22": "2tHNjDM8F1J8oam7gMG3k6Z5vBJD3PBuQqXJx88QxoNrLjvF9ny4RqEidZoVb2CXesrFoZ7NpVa2grFCKUzLhpyk",
  "key23": "2m6a6jGYEL4F7x9U6jgTbtkq9ywXmkVwvvptHujF1nTnt4n3DPBz6sJtuzxH1HZ4MicJ5PmvkDXJjiDwKo1mj5tN",
  "key24": "3gcqcvuXXkx1zn237LsTkJRgjQ6fs7pJY6eNUTgZBog94P99BFiAGWk9cBQFoqkJbv34GsqzoRNzGGMpXYYdoVsR",
  "key25": "DntBcMtwUCzPs1RotjmETdjoChwGAWWea4U5sCwiv9kgrfEoL4WyRSyDcrpZLVx2wdixXRVBvL8GUeQawReKLGu",
  "key26": "3eDqK8D8WMwS3DNPGxXqxmWnpoxrYQvSoaKCQpJ8WxrNc1UkRvBdwbSR2xyNEo4hMVTubqBJ8BMzwRPs35oH1zqs",
  "key27": "5ozos75pdzkZnEhLSS2BSLg1WkDiJvW6vPHxBmW6Fp5ro4N9GkgpT5BSASfVVgzFLKzSvWzqUpQ1nsuhKWKfa4UR",
  "key28": "5GaTcnPoj5yjCG9uDiDWftfiqFmNDPVeQfNVYzjNPvLVkqYCZhnzyYxnktCkt3Csz5RkiVhz2XUAf9cFcDNPtsmR",
  "key29": "JSgaAaHMDUpkHpGT6oiF3cVtRGxh2EcQLziwh5d27NmiK3CSePgo1JwmeJZUVdfFjJ6hpu9zX2Mof9kWRTcsk3M",
  "key30": "5waN12HAZJUYFwUmbWVpdgF4duSXeUK2rqz1uoP1V4J6MyLAN91MU7pXvb9iXayodMV9ge7AJuRq9h9oKJ6g89HM",
  "key31": "4nXCJ6WTG5cr5EoRymrFWEnCE1LgXfck27UgNeApxysWmrxVtggeauPGxEwWwgKvVeY4CSd3K59eMcRV2JTKj7dV"
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
