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
    "25v5STTUgS57qGdvyVzyR5QWeHywfUHPwP1dS2ZVegpD9LPoa2VaCq3YSrYSLYE4KNpwoNjv4aFvPjbm31Z3mpLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awAMc87KCdbZUaoBbpkqjmomBpFnnHBcAYJgHyA7qWCotapH6BwGi7DCv4ogbfiMZmwMvCmBYp82HYg2sMAMan4",
  "key1": "JWSVejTFjvRZAoQiEk2UufPzRPiy6VTZF1jASCZcrg1iiShWzLH8h1xAaqNAo1UcLHk1KrcdoinsXUiHg1dF5Qk",
  "key2": "65V2Cjmsy2NQpn9E6kzpZogfojVsCSKSjGuPcRa7rFVe7aZzqGEC84XS3PnRcfxKrPujSaKXzDwGfm3noPKCQ728",
  "key3": "33in24M4g156zFj29fzcVZX99TmxAphnA9A9CpgDckqyhPdgkGeQ8BaFn5j6uhmpPtM5c8h9Ynyqt4HxxNJ4BBoT",
  "key4": "4s8icQ3yENsb3i6uBTsKxmzgzLSbLsiFU7QU5cESRaURzcKjmbHhmRNpCa4ph84YXaFNFnGHwWM3N7V8fadryvK7",
  "key5": "Vr3xb7c3qUAfHbzw7CAUQn8eDUupbJoJ2tz5Lhy5iLnfARHXBsFyA2zy4hmB1KGhEvhzbtw3j9yVfu6taruBWbm",
  "key6": "5C62h2VBH2YZ1iZfMJAvjN2P88WrWiV5XXY4UJiPWD3AFnbMbjJQwkBM8hUqQ9KASnqk2TBn79SD8HcXjaWnxnpg",
  "key7": "3NymNS5LQmKQfN34xJ8cW4p4Zi9Z5PRRA15145RNY18nTF3Q1BjRWHkwAKaAFdaz1k2c2U8VX3TbYC7qRi34Pe4g",
  "key8": "2bpmiMmUZFUetJtwCc8Uy9HxTfVSEXdaLmKsucQk216pYN9HYTxKwSzLpVBzPmrhzyk6xVYcJK5xYqm2dthq5xsB",
  "key9": "2XjNxwgTg5G79S98PZjYUVRDX67SGB2ir4G8NPUQjBW1LWA7uXCb6teHpArWUBKdNwjWG4ShNV83CFe91qGgmW49",
  "key10": "2YuhRiVRzX37ustQxr79kH9ZRPFo8yRKiLUx4vSBU8Gnd3Y8BoHhFSke3PidSN1JyS6M3p5ytiqrktWdQa3muXje",
  "key11": "vvrnVREY4MzoVfARhJzWkELJXUEKrtpBtvNiW51SbZstyRQMwT5u1zGfNGzvtKpWCzaznhCck3SaPydUUGEaEKs",
  "key12": "AvRbvpGhWPp2fFUn7787fPkdXKLtEGkMtxByiJZz2cZwYmopr7BQAJyczKMgXL2w3U3Sdf7xhxjazGctSSZMDrv",
  "key13": "5Zd2cXezYV9UhxvRf2sjMJyYuafY2xMMHFnCRFZpvNdmXxLgULzmHeNXBUvmKQHKVVLmnUeq9Pe991DQNn19B7tu",
  "key14": "3exyTe7JUJ1B3hYdAEDtDp3y2SDTYxENt5KUMgyByUvtQNuXP956gupZEEggJCbShvm93vXChdxtnPDa1FUoGAsA",
  "key15": "4x1JQHVwQwzSQBSfRNj7zLFnjS6st9nQgpDo5HgefFFip8KbCJPhzu7CK6zruyA97bxpis4mUL6DXjVuaR1YTJND",
  "key16": "4jDCarRq2MMKeFTtoq85vxnEZemvUr3X176xkM2ymZJwueDgPkkN1JsDT9XoqXXJkJkDx4rjVu9v8RTEWtdrTHLV",
  "key17": "bGqdVCD4HeGdFx4vLkQEvSkcmhMCnnXuWLwRjc2iDBUQ1pmjht9oEw7ZH9GsYHvPoXxGSCHt252V65xnbrWzQAa",
  "key18": "fYJ9oRtZN9ZgaJ65Qp7cAXyaUUTzDKKTFbdzjxaSy8Dagpi9WvVgMBLtsAshLKHHgxLPUwr7T24GWKAvKUbVRrA",
  "key19": "5ixraBH9xC4aUh2oeF5VbCim6Q5yuUzheWrDvWLqhWi4E7sFdzLdSQT26zzfyCfK1xJgfUX7gNH3HMLtBJED6u3w",
  "key20": "3WvTaK7WJoUxwUjD3EL7XTKLaKk9psTaRd9prWSMEjNhATXc2ncxbw3pUgG4hgyimfjXqpHtFcLtUaxttxqJa6LA",
  "key21": "5vSmhELYycVNKzzKvsSNi6TcbmhxDQy9HWpDj62HC1eYZXcZQk1i4Yn4ZgiCN8rp2EK6Lc8yr4N7vxyBxDdDtaii",
  "key22": "3Ms5pADwxXQQMwasVmuySdy8VG2Xj1MPs6oxKeeMJLyS3e86noZ2gs78YUCQ1a27K1je8HSqR9uG5CGaaoHs6kUq",
  "key23": "5fauxQoYAjSPHwZhVLj9YMnoDeVPNQxYn54MrbTnTXpvQgN3vjydw9u4dgVCXuogQePA8ygYX6RPw1nr168mYpUz",
  "key24": "61Xryetdbj6zThxRP1dafsthcrEczUXuEXSyFYTgHUNkc6qfecWSxAuWCYAtiyFaLF1eLUjpz1DSe6tswZdhB4U1",
  "key25": "49QtKYzZS5q3ocNVt3R1WXnT13N5xBQ3T2GCe9AR9c14FZr84XeJJcijEGyFg3DRkPL65psMMT5P5HZ3uYGJPipK",
  "key26": "4FtfDCrTPtMoHoyUH6aYMdZV9iXg4P8zRdisNM6tg4KRPTSF2QDzmEH8a8XVBTpw3crijrHHrXVnU5oyqD3dPY6i",
  "key27": "4zLNhd1jndjQgBM6oVAaVKhsrgYN2QaXiAYvCzpLp61tZseemJPewrsWwN2Z3zrvLfuVYRUDHLmN3JH8urTYUCEB",
  "key28": "4aDu6e79iFk18TU49LBcWteDQ6Ku2m8Z3V4wJy9rSWtsmUC7RLtNKSPrYZW7uiq6YPydrKArTPiYs87VXupCHUnD",
  "key29": "5ojsgnJaLdfEuwMc5bs34a4VaGdePvjwVZhWRKJDpAwzRuzDUEme6qPiWb16RcspHZaKXTzS45wJvVd7r4cTrb6U",
  "key30": "59NwEuRvqpSoL1YkLgRBm5vUs8ZsytD7BkXXm9JNkZCqPHgonrurDqfCovbgKWFt496F5q9P8b5dnFEmT4nBCwMs",
  "key31": "2r9f9bC7vYZDsrdWkMXknn54Y1JHwEHQKWUQGSUmmSSb1AGTKUxe25E4HPwgBir68KdunPzc9zoWUsfp3HdG6Kbr",
  "key32": "2bm1Vr3zjKMcApWvkL58LisRf64a4SR1HVot1WNes32b63fG4eMsKyZBeMW3egbdz2e4EEuTz9JGiLVU4XHUaNqT",
  "key33": "ZbyiMABqBV3ixj157mTu8YxVvehXNRbHNCYviKGyFoFtooWZmtaBCayaoTNkefGJy8vJeTfvjiBokmVQ8EoB2Zk",
  "key34": "4fjaPy9iL7GtShwqLZNWbWPm7DVUXdi33Z4jJJgorkAJLBtSKLNyFxXFFdnGvvZ89xqVcUFWkdnAKAxh9Ury7jGB",
  "key35": "4XQp9cVgd5o153s7z1xWEWRHY1tfUkXe1BMBWD5gV8BKijUzUdEswk5828zgJifAXBL4jnJSqaK7oQbdnqxxyPhm",
  "key36": "dj93ro6s2iLaPPZs1RrhQ3nxCDRmn3FxM7UjTJ5BdSdnUNnyTimUEpzYGF9N7JuSm3BDHqBNSvPXYqsAEdHqs9E",
  "key37": "31EchJDMpF6JBgdUdRi6Uh3QKSXAt5PSTGc7AD9bzdmiRPmLCaUbxpRyx7pPqeafoXg3XAFrJLon4E2YX93BARCz",
  "key38": "5JTK8yATd3H3Pm3sWGMS5xtxn5nLExs7MffMMSiWtypdBjiNrpnhbxbq8i2YKnbxbHDifsNjtuvTsM5YW11b52A3",
  "key39": "WSHyqLfZSV6bN1DH1xPrfHMYeLB7sehnuAqdf3AjoxP8RPSn6kTbDptrkTZ8AkXQGbzyz7tbV6ZCoibNBRYLpse"
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
