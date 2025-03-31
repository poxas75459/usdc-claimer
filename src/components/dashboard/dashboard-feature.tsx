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
    "3V9dAXX44zCztEbKT3p5X8bwWktWP1xnJztJshtQnR6jiFguiPMZgdRT1MheuLvXDhyMYWdmfw8dDrKf9BcMfK7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674rvt8GQGs5W13xRmgGa5Fsr4sZEtFyqemkKJdCAMqkC7DgrE4SxV29LabnhtH2MnFaGdLnxpUeT5PZZ56YrHLN",
  "key1": "4pZiyWYbGkBNECkTgkLLZSiUrGwqKqYRCKTF3rd4JTeMU7ZA3xqBD4EUkfX9DajJJSEprB74HJhqJmS3djTrQ2nW",
  "key2": "4dnmLqvnDD4CbyS8apbUef94Yp1gwK4nz9kaXQ15ABkZ7AprfAZPT944YpMa8hQ6C2BUpHRL57ZgBCZLmjN2Caw1",
  "key3": "S9MWmmkX6MpRSt6e718HPvozepfRbpFVnt3keczDgynaRCHDB97NK3S4k2gJP5UnUdgLLzvtqBuNSzLDydXwrzc",
  "key4": "43bondQGssnDb3NGVLudYaoczmr8JcPxpQpL4ubNzkBYna8HyQWmbHh6uBXScNCgJZ1uEqop8YaaWQZpSpCv5VwQ",
  "key5": "5yJ2NzgaXjyAM8bwvSEskVuNg4rFagzXxMXQ1GtLaCBoikwyRo3JFqHJhCSBqRdZxpn32YN4rcqMTR2itGjUxdPH",
  "key6": "326TdtRuuimUj2yHrXWqf8n5XncvtKtWYFXae8tkSdY5r2P6199npEQn8VVJY4nfsJ5bvGtE84XwukVwRThVpvbV",
  "key7": "wZSU6Umv9Rj2iTKorfe6YmYU7tKiYLmP98McFJk6RkrW6VxUtGvrrDcMUNT7knQmAgZtyZ2VbLVhWgD6KMEG76L",
  "key8": "4wW7TjdqQKShgFQgCYEYnPToGEwqA2e6y8U8H2tTB3opZkG1kE1RqnvXWr4Wo67MthziBfb947Re8vzpYLGLBG87",
  "key9": "377HM2csmCj8AdVYz49zEve6X2xGHRMzvJkynxtkLvtBFNPag2uzexzBhK6Gw3FVhC85AjnareB9nxSAEgnWQXV1",
  "key10": "2fRj5jZdRLCx7Zfk2Bv62Rs8tPLuznG5uJLqMy6QSPuULirDjqRePF93jGCKyLUqctE11cjaCU3oULQGMikU4WrC",
  "key11": "5eUytYGAczpxArrBursRC76Y3pg57Ar1XqUAPqNBFa9R9gMTSUxBBJh91JvSe96DG3rtaJEmWq799SrC5juB9y8v",
  "key12": "4tPHNXSffh1QDyJnxyofdFxwL3WgXamLi2C9DQSYzbmH3NLL2Akcp4WuL51As8fAyKxzwWibnRKQKMBK8RDWF1Tt",
  "key13": "4rwe5MpuQHwWd3GTzkQ8BLAN5ghN7W5KzdpAFuHsbQaRBAxRZz2hAEC6zr1mXNhkLnQ9DDaDBbjcNV16Xkg5QNfv",
  "key14": "45bSoN73HB1WDVd6jNA5SdooMGpUdzhjm3GXBt7fQRs4DcxGYiYJBH2ZauTmAdMs3oKEfj4Rk5MpqBsJrSezaYBA",
  "key15": "4JJsScvEwK4qfihzk6HUpdApkK6wpoFtafMPFBPcn5mnA7Q7UCWxQDABUs8nrYqDpitpKZKgsEFwG9i2tRWkm7ds",
  "key16": "3XpoD4JUmWBatfTQUyt9f686X4XpuvD7rsoTX8FjKTdg5T9UjKPApbbXdnpLZrJ6mgrfjEeiNyVng4YFn63HU84r",
  "key17": "4n5A2WZxuYbjSfknd1WxWZpvPPmXKFPMhtsc4Xawn9RyrjkgoixHpaDSnESctFptBAr5bsBUN7PErsEap32MXzih",
  "key18": "2RerpfKQ7WC2s1FsG471AsW6Uj3tponiqUMwK5DvkVwBgUDhM5D3qwd6paFUZjiacdZAZ2tNsN4H43JczszGDznu",
  "key19": "3iYRCtHc9EGqPMex2XsNHGdj2rBktjmFnrpXdxtkq8Hq4wtpvP59hbs7HnYswp7p6qV2hYwihjGkStADURTcJMLK",
  "key20": "3nHripo4rcoGS61cfcwz8Ynf8DysvA8EeJBXrPjAuKGsYH8Pen7bXQTEWH7jyLtPzuhE5ygUXnpLubzqeZLtrtaY",
  "key21": "3X8cezinjfcfVFaBYF7WJ9JqZBp4Ey2FKcMuAPNgy8THxo7NXk7Asoz6sULFAzakQV6vL5BF1y2PhznQCCZkJ2Nr",
  "key22": "5SZWgzJ4ka5RCcCLXxQFkvna7pcqSBgnFo7bbmrYrH2Waw5eG7XQECjBYs8V9G8w4g87rBQJAgkswmjSdmPWbScw",
  "key23": "hGE8LQ2Un13fqKa6ySLmeQmmEefebUJZ1nrtLLjWZukSPyhBQUQnuyJPTWLwjrY64fB7beCzyLPsCsYaJvu8pbN",
  "key24": "3YVrzJF4Y6K7zHMUeKQaL4vUTcKBvgx3khrMqJPv2UyD834qY5bXJE1KKKoLNTzFiXTcUphpN5UVBrjHS6Mgebvn",
  "key25": "5MAyVDfHRXoJ88pxnqYX3V3C6CB79VSNP2uwrwER3uWyMDEQFcjKVL8EvKXeDFnevvrf5aaEhokXUtnYnWtXWCuE",
  "key26": "5KwmPMceuxQQALnExtS9mDPrpe88C9Cd4krunZe4Wzb24t5Q4pieYZq7d51TYCd2gVoHhJKMGSkQAWmQHzjgGjyK",
  "key27": "2jw8zutEdiHtXnhfbwdLBrWiZLtzCSsADBfh2CR9QaTykiRUGKmV2hvpvYGPhwCdeeWKhZsR22NfzTqXULdR9KbK",
  "key28": "2Rf4X1wLn4d6Wdbn1ad5WPMujCD2wnKc4kXbU8KALDs2enHtDUaX4MRQT1h1BziMScx1P76hEujm2LvjVHirthSb",
  "key29": "mSuUggoGgfZ656B7xnFMQDohYHVM3Z3NWYaYatLGUS5cH362FkSCikEQaHt6r82xh8PxUCaopgsHTC5xfz3XrcK",
  "key30": "5d2MphywwPAnnkTK8eVggrCYrvpN3CWzKpwf3BdrJpr9zEHCnqxdPhEV5cKgaT5Dh6uvS1WA9zEsQ9W5vsutM2XR",
  "key31": "3U5XpJ5SneZEHBTwgAvitMHffsh9fTCkfNSskhHMAqKr5H3Wwtq479cSuFdPeoEQFVqZ2FQeSkLPttQb2MoFeia1",
  "key32": "2r5enTFMkvTC5xdMxRoHkGNERcpFXPd4p7baFp8tWHSi1bQmzxXRM3XsyDspdshizDZGDH7mXsixpQACMTEwLD1y",
  "key33": "5ErAFAtZe8pthhkj37veXYwhAAdkrgW38RQUmrLb9hQzKwQXLvMbeR3rWw9459RFE16MkpoQuSoyrfrzZvx1Kqgf",
  "key34": "5yUvtAr4WZ41SSumt2Gk3cDGcTp3ZES3MdL2JChRjrRYyg22znapQQpz8ngKjRUD3U6L5t5nDvN8Mk58JUUP4WZD",
  "key35": "5yTU6VRVW32kourmiVRBvYS7dTdn3CiFq1Pc2aPV9LA1J2LjfEAExS4SdppvriLoEH6D7yP2msW5pQP1jUKD2UaU",
  "key36": "2KAzmZW91q3j4XwSEj6GjwhALW1W5R1uTXeqfagXs8wJjb2DB14hrsU51HgGkSdJzZ8Gbkzkr6RHm2oFrztLBS91",
  "key37": "2X2VFboDXpStUV5z2iYF7UvgRRvFpxp1Y7V8tU1JqHbkdWX35SPmGM2WQ16mYR7sz78wEB2RrXMZEXdgNgJNsR9f",
  "key38": "iatgnfGsqViy7ozY4inDRUf6DwT5iCovEPdxS9QjpYGRza3Rg5jgfD5ddcx5S3fLhV6t45VKqbHABCcKRBbnRE3",
  "key39": "3vvthSc1DjviSRqC4qgK8L8yL4hbkwKqWXfVLkm9LPLBtdWx4FxYDXtNcSgH4xtmdiBjMETFkCeet6qJJb75Jain",
  "key40": "3hTn6PxaLbxgvRMfTaVvfuREa2TySLYJqckcHxxGMMUmTbXgD8xcmGEgPhe2FT26fJro67bTbDP6Wy1EoX4V76WV"
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
