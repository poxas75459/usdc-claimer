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
    "2Xuyruphx4BH4767hjdmF8Lf4QcP9WVu1d7gDuMUQapmij7HTXjqJ9pxDb7WCu2bQcPzB5K2j32wTq2ExnqUrvuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbnEDbQXdWQ1jV3M1ft1k3qiSUjDbjCjqMqsL6auTqC4kWmEi5ATGbNajF8mDhoAo4qrtjoPkTBgC4dbm9sHKJk",
  "key1": "589CKQXmHqDRUzUWNrhaB45GUEF5kUMuAgUiUaF7zJW122QWPStzqWTXKa7QL14mT5tN75WptwM81QJjehiEEkYN",
  "key2": "4Ho8P2WTLomvHsnEEXzgfXboav2xkCMYeuEqSMrP6ukKGh2L98g4z61fNm6ToVbAkyeATtEUGn5gN5fAkupkffva",
  "key3": "453UTdrgHrde4hjGsay1w2SfvvVDbZCtbbqHqjHBQVu4NiCW5xKXFsDXBpDvAQqaNtzAH5pNqyCKPgm2iWzxUV49",
  "key4": "3cnvX84DuDoa1LVAPQoNCpW7BNv6LxdShucpqTQw2QQ6j9TCaVh9yToqBSp2wrs6GA9Jcyz6GDB596VcAZw3gwqq",
  "key5": "4gnfUaUmb3ofjbCSbGhiXBVPDxhY7kqVgxChvR24jbGxZVJPAjJyeM2J2Jys8Bkqut79JKeyqVRTkX1adPpz6tBw",
  "key6": "2EmWUvTScpENetdk6m2jVpeZBg6hjLTD2Q5XWEZdYvMkSq6HSFw4LoA3ouEEWoQGmHcZUHFyM43X6jYV3QWM4LcZ",
  "key7": "4jFsRECWKX7tdm87uYkTDbzECMJw2q253wK85vk3QpKjsKbwjwiaLXZX65bDpAKLNTmBBoMZXiMSZh5w7p1Yhp39",
  "key8": "5xM98EiRemnV4FKW455Cog111AVWXFF8WZZRXsPY9RTLUw8xx4DXbE1W8n5R1KyyihnWDJkTEQQXk1uuqzBcb5ku",
  "key9": "2aYrFA2ff7nsWow9eApFRfeDoJgWinBk9Muj2M16EjjahRMuvuaSdddFZcTmZ2V3tAmvp4ESK4SDY7tHcUx2chnP",
  "key10": "544oBShXuWXfoJ1vx8JWCeUMCtAR6cGExrsShhuJAgEjZvWaWinsy5TXWPNEfr1KTQToVMEDSCasuWL7zerLmG2X",
  "key11": "5GMDARAZws5prmgpnSyG3W6ZTneuNrV1Vmgr4ohVttk7LRjarkdoCwoa5TX448bVCRgfJ1YQ7P1bdnBXMAkWRFyL",
  "key12": "4GJEGyg15fqrxCcUTdt3GbLgJC4sxchygRPYESDUjQMn7Dt2qgFkL6q44YJJwegHTEqAdBGAE1zDoFiywfyYBzSA",
  "key13": "3mQFhyWcwLsPaKuqRo8sSGFFgz4MQJYCyiBHwyW9h8qoNyzw132RF3tXGH3VaFtatQa4nE8MKrU6WF2eLp83kcC9",
  "key14": "5FAWxLPWYmVh1wiUCWQGmPnfqfV1YDvdYWVWF41dTgdGbDmfiRcPRiTBwo3dd6Dwjfgns3zLJCWiayq2b7teoBcu",
  "key15": "436aLxbF1MfVTiqRpnSKM9qyQRMntuYB4pEfXGZS199SFiwK9vfYJ1uubHfzVe491nicfRPoHhhBP39jt9SNz39x",
  "key16": "8Cw6H81g37QKQAVVUxspPYJrfkpGmT1Qtc72VTyx3VRNMAkLwTqR9o6W3NQHtkSXdTEYvsBdQhcxM7bqEk4kytc",
  "key17": "4DnXHhk14MdkC1vrm1LJjY4hHa76h9z62KTGrusToWa8uZewH1rcevntfeJ5mAYUQNRKWmhi5tFCTKaXEeMpkx2N",
  "key18": "4iAeYdFqFBZokaX6LTjgnUbVfcUvyJ9icEWTCWvKr8wHgwVNXu4sDsALeoHLsEKeUEsqnLjBAnpomoSaK2N3op47",
  "key19": "CX8NQ2ZNY9bQLnkBZU6U9E6DWPmkg7D3NvMSeDe5ZjQLXCf55CrYB4noyVnqbcuTZH98ZfeVwi4UjpAeJ96Q5t2",
  "key20": "28ghkHxZMFHmAV8QZWakk2dkUWErq8Dq8AMN61LEJ4rPG7k2KX6sNxJ4vpy1tbahNcG5XHniFvfv6uWb7XZ2wNhQ",
  "key21": "5CfatHHbg2RsyHfxxQHKgvqS9oj1Y1yivRjeSZFTNJ6Ndh53w4NXuC1int9fYcjuoreGnSqJ9y8GZQakpy4yBYNM",
  "key22": "3SgWRgqw4FM45bL74YXzGb4MZcHB4AnLHvsVRNn9BEwt36JFf3dtNVAY1uWrRtCnGtzLZANgsT8a1Tm5vZBy2U5v",
  "key23": "5sPRbE7TVzV6c1v9L7hoB1eLZpsibG5z3DXMVD9ZBdVukEqrokYMrTk8kHAitab7SzkqhFiZvcKknK92mGHLvSr",
  "key24": "2uLixhd5cr6LXkNEiVDriYeVqWbmqsz6t4p12fjbizbx72o2HZtsZ7fhmPyfuZWEuMo8KgfvDENRZckPboL1tWCW",
  "key25": "TRkiUoQ8n51dD3HzLFMkKau7XUBwRZYZrWn9Pf1rfxejzbf1CN4yWdXJN5tm4PPnPTukpLjJLuBCf2u5Ku82vmr",
  "key26": "5DbfiZji53PZSHWhDYpxX43JZ6GecZfSGQuTFDTF9RBuvLBGgeickjTkdeiWTTjKioHm2C6JPMkK5sjQvwXsdB88",
  "key27": "2ggpLdTyaWJQ3f1RNnhdukpHdrGKR35fuVxYrGogme9kShzoZQu4U7cLZoeTquf4fh76WdYc57UgjGxTdAtfTYMw",
  "key28": "NqyYs7xMUmx2KWn2CZVCSmuw8iMqKvuS2sMNT3fd3fNFLQhrgKaw3GogZL5zJroHWE2NKJJrgydMUQyXpBXQvoZ",
  "key29": "3383ycBq83ojkSR3Ke1sf8zcG8dM4PF5rQWpktahrbpyJk2wcyTBTdibXED5BW8gJCPRkgr9Vmqzi2WdeZF2TMkf",
  "key30": "5Ug7dbq5GJP3jEtnG4MpQ2MPKm7c3ZcfqRiv5tu6mco1ec2JdxcTYHwAVeVCMjTkwXK6x5qKARi26v6MXuncbDth",
  "key31": "33XScJGfKUtetQbNTyPghLbwwYPKsTKPiwW734a74rTo7dSh1qmsVTiEp2vxZWWeh8nSXNg7s2vFL8f1gbHecQ7n",
  "key32": "3n6AJA8L3dRCJ8w15qHTDDtx6TGB1zuSzj9MD4cMNLhutDXAHkzk27VyJu6Y6CzYzErrGPWPFmudQraV7Y5T7dSr",
  "key33": "4EzXKGBjKn8QiPwjiwbzh3iEyFwcU8f5cTNSXgceS1ShaCnGponBWHhdj1jM5cWcoDUiJdF7q3wQQTvEkFVF66Ja",
  "key34": "cY2ciqNYxikMjTYUrivzuKGu568oDTJgENAfXGYwHBwx6aua5Hvsf4dZvbZSTZCacsshwdXZxeqC9zMa6uPGRk6",
  "key35": "3tM1YLJnfjaEwBYxTKXJ3Wj2DVrrgrUjkN4Sd4CULghwxu9zDEtSk5Ki4vSEhu1sf4FsHrFLHrZcVV4iiGTtvsVC",
  "key36": "4YJkNmkUTaCcNknGHquvLmT8fw8znVJyqqYGTaApcsrskQKHKs2ECqR1LUseLeWDcgNXbhWcWEp8MGQJXGREThu2",
  "key37": "R4WZFGyWkGov81exqisTVYurjYMxNQ9dDwoaRGKUTLVdJUBJFrW5twrbuaCk9bEKCF1HNVeBrDf2u8BMHKvkaGa",
  "key38": "66ANxUpai4bup6cKjsLSmdaWnpeSkx27WEJ5NPnzCP73udzSTKEdgd7UYCZfPktoxUPW5sHAoHYWnHXT5Y5kCpy",
  "key39": "3rk1a6E283s2i16f8fj1TWGRvHzK5oVJ2oQpDFHEgZcbVZKM9ePCwDnRiXmaSPA3tfA9vw3SSzf5uauqxaJTuBMR"
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
