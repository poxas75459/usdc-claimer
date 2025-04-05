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
    "g37CPtNPocCvPbA74ryrgtoqYy7W5hQ4Q8AjgGC78RKk6R6PLKneLpcTbrEGU2STw2QcCwtMuJEd5VBB81gRDF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhqnsoEwG7W6w3qAEr51LpLhnSL1oXayXJnZTpLcfBnYPthAMGK1NwKuYyBXgPaXMVzg3dhxHACK63gi819qAnG",
  "key1": "5WH4avPxP3BcY2oFYD7yEf8VBhhszxXDiou7qtS4f4W9EtdaG15eC4Z43rwEdVGVfh6hM5heYMLRnpPNVNZGoi61",
  "key2": "4m8WfTx6tGP6vTbokSqNk4bY7TascPvG82NtoQKNGwvSg6NswafUv8P1wGcFDxn9wTYQXPWdkTX3GaTifKkRFk17",
  "key3": "2dfTa3ZNGQRPLbrMDu6NiUJqhT4s8FkMRnMRG5Q7EsjRXmvS94HHwLvyikvkUgXc8tfAsEequdg2D8FS9Q3SjRdV",
  "key4": "636Sc9esJX35XFNhp4iBfKcm5G6QaxxJo6cczV1EXsBLh7ydUJZJ6J2am4Ttwpx67zVdPcqf53sqoEYLgN1t9pSw",
  "key5": "2dpS1hMoyD24pBx1MviXXXwr5KX8pqN4CyRVMKUM92kVi1vKb5QKAHiYBZaVX3ZwmLm6g9mQhxNDHnYVsnWTQ5Gt",
  "key6": "5b2EvPd1SeYL7ADq5perPbgG89SnXBAU6KGFAqHakCrEZeTDNcbbVQxf5RLgQyHwaQFnNNu6TwFDc7MYdJw82TdH",
  "key7": "5nkwsQsjGHhVYYvupva285NQ9hd52AtdUU11zPahe1ra5nXdMvNJJ9SbHK6v6rnGr8gHmruLHU79hL6WvTZVwWXB",
  "key8": "2MGjpApRJR92NCvP2xEYKjZN77fok5KZs5PsMu5WgoEeWeJaoWyFj7B4ZyooLPmHbJJavZKUKAQSkDYmJBQX8AjG",
  "key9": "d7jP6SgpV3ZfNb158L3WqKESHdRPK9qaoU4RqDDMToTNCmHen1dXbxinbjhDbqUZaiSazVhGGkeSwaVBnZBtmhX",
  "key10": "3uGcnS8nZgYrHzBRecrPM4XR4tYYpHpreF2fukgJiWae8iNUBRXqjFx7AbzbbSYGzCgL6sBHTwaR6tviL6532gWv",
  "key11": "5xe5gfznnQuCmenRTJhT3BnfG8E1MkDX7VoW9nXBssvHum7fV1qjk9JsyMsLVvttFajfQWvjH4xpNaaMcYTXCVbs",
  "key12": "2sFC5AfB6Z1NJ9GQ6Pm4iXAZXyC7G7GSEL7kL4wGMxzoStXQfz2w86UaEdfd5AnuWTE9qfAezc96wgtdTXYw88fF",
  "key13": "3uzi59wPASxvnhART85GhwvgFbeDuYPEGJTYkcY1Qdqr1C8LqyHs5RysYusPRGgssw6Wvx6Htebwbtyhc3egkJMR",
  "key14": "2BKctwWzQSM5v4WCZFgnRpb3DzmVd2K6JtXbUuq9M4kAg5U8JjF4v8gkGspeqQoQHWonYYJHtVXGqYzEumebzkzm",
  "key15": "35keZfC6qkQ9SrSnxwdRgDGCFpr2tbNXJ3Zd8rY1tzLTzDTzW5bbkM7xroCi95NxPPTxdLRntFaTBySg2hkMAhwB",
  "key16": "3LhVkpzWMvtG9PVbU3tuEbsaHgXWJDgU4fsTsHgq91Rk7XxLG1MkiSQZUo36qmBxXoG5dxpAzcbDV1Qz79ZdaMfj",
  "key17": "4vU4WRU6rAPyn9HnrMg9wTgdjQiLYeQQTa9yzDwp65mDbuHvAgiZX1FJkRW88QZD2Ub4UTWJvi5SEjK51xAsGR9X",
  "key18": "54u1cWx6x7UJFShSX8kAJAUaeYr3hH97mNwTPh1SswJn9bJoSC2H7ir9B5Z6Grs2ea4Vc9n14ym94UZHc8DSuMSZ",
  "key19": "3pdj9hKw5UJdrmZt6yNZhAtwZSQTMxXLw4SkCaUpBy2WjepXRErd6o28pK491fMVwxmPYMoWhhe6mkgsmHmZeWB2",
  "key20": "CBzxupjMxpPP3XuzKCesK54v52ZPXJnDd4TsEYeq1bwL5vNRajdasRjBnpmks7CEWSpLuk2J1V2jqnFtX453ACz",
  "key21": "3J4cdsZgdhHa1t1LTzqQUt8N5Xe642XN11uyGZjt5nozffVgKPBqCWDevJV1XA2T7AML2uK2nfozZZUXr2Kz8MF7",
  "key22": "fTKB2guQwFL9UR3RMQa2sRZqg3TSZ7u36X5yU3FgcNtu2jRVWgSUyrp1P5CH3Ntxxp4MbCQwcoomQywdJcHMDHo",
  "key23": "cGJfy4V5BaxCJ2Nfgx3wJfYQPXUtoJatXqAJTWbAwojbFuSptU2nfaCjcwKHYCwkMhRCNqSKo2zSEZgHVQLhEVQ",
  "key24": "4Ugn5pndcbDP6K8i59UAfjvrJJopjR1YmwWRRyaVr6xdd21ebFQnMkpYxVBVV8e9MUjb8PwEpqoZfsE17h3NGAcp",
  "key25": "gGs8Q2bM4jdnSJLj1shv9WcacmzE7mjWmX5venhFFMyYaFYfd9FGTrCWPpoxPkHy6vGqUYaYDD8QoZyDM7v6TVW",
  "key26": "3rfHFSCpLeapEqm7R4SBo3XAumfUumsKkRzjcPDysL1kzvRPYiBmEHJaUwpEJ4J4CWE7sgtzZkg97bBZDMprT4FL",
  "key27": "4tzSU8YeTBoVTF9bVysoN3KhJofX4QLWGtTG6jWEe5zozBrFRkhJBZQww7itWK6PtG2Uj7yF4QYFY6iAv23MU1aj",
  "key28": "AN9FxwENXTRRS39V7BhqC6m3o2LWdR6i6CtLBATYdA7No4dMsCyru6HJ3effAfiHntLXfwkebxwqeKhtXtEu6Mz",
  "key29": "35A7EXm9CXjHSKifVhYqmbaUitUEKm8bHNUMadyoHXkucNAsp5JzARoG2uZW4X2jPF5q6ucHPtzgy4VKyyzy4fup",
  "key30": "TAUMFYXs3pEjtQuYKUk2Lktbd6cB6m7o4VFmskBHYGEp61DzsM2eZ41ts9mUHdcDb5uAS2TM9M6G4eYCJXLny3L",
  "key31": "2WDjhvVSYYeB8JsWAP38ny28CJsfaDzpqg9zj5rUwTtNvkAE4bjAFaWSg41c7dfF3F5BXRJ3fm2qrNjrsCosKaGi",
  "key32": "3s7Cz2QRjW1Z1h6iFhkFLXHaCftr4rxu4sL5A5g2gic567sW4iZydJuVG24GaMqsUB4aRDt9DAT5PbqzkxPozsf",
  "key33": "32sYHX6js1w7R4W3t8W9ZqN8JyDBTF1LzWWioKpZ86kLoysZw1GhoEJchcX1mMfmtvCvvdLSFX9AK57Ydo4xK6Hx",
  "key34": "28r57ywncac5sLEPbaDGJvuRSa6GZ7sSa99uMkrmG7gVqX8Hi9L3zvSRVAQLKrxY1WnZS6R477Gsf6N7N4jn7YAa",
  "key35": "3Ef6ye6Mtp15RpbYY4ciSgxR6bJ9roYWVENxZqknudu7AEihsbNGApQ46kutES8ENiWGaiCiYuWadFH3vCugh1AC",
  "key36": "LLAWEc5M4xMujsVSaoVsTY4npGJHTMdYagThoUaoesRUmbFgwKwc5iD3WrXVUxkViAUpQm3JRRLcGjgd3To6uak",
  "key37": "5WubEmYMBai6b4yY17UFPUTMqEfutHduqXVLr1sLWqpvFF79cqrfoe7YvJPcK77EVWz2ub1FEUnjbLGTCj5cNX3Z",
  "key38": "4ueMmnNtVjY1ZoHwW2CoH8UNbqiu4VmgJ1qdTGXRCumL7aeuFTHxeesfL8tKfGVBGMRT62n5QMHtS7RuydtM5UdF",
  "key39": "iwPKHDHUsDW4RJM2JoysX9unm9Rm4H86kM23MrLMRrfy9MkccVN7X4W3asT91SoW9FMXnEA333opDXHgX7xrnJ5",
  "key40": "3qFADkuezDtmGcCnMC3ewzawzJ7eazSrqJLduKAwLhV3zJZqzmviGHnADXYU1SYLwRun4QcB34wHSq56qb7gEjjv",
  "key41": "3SqaTrCsyj178N1L6KitgM5xV5wS9j4E25iGEHvg5uSFZN4dip86Bgh5R76n2Twc6GtaSg1HvpfFTVbkCe4hpYch",
  "key42": "5V9ehcXH1mG6CmcndzmhRW38youZf3S2EJD6ej3JNQFM6MpfbdurHHUhWHD41CZVNaHBD42uGMmwqy83mvfEpcMA",
  "key43": "27nr259Am1kGtNsTXFU52G3DNzaHr4TiUkqR77HYZVbgaUCp3J8WEeuyJVehf1HA1MRGRTwcDwGUnF27URUYzzKm",
  "key44": "3B5ogCzvSvPNU88ovzwUAekpSPmhyxhacDYXM9DehwWLi8bFaGZcwy8JkyQna2pyAqMmgGtMHuttoykEm713akha",
  "key45": "556h7ZnmW6ESTEMojwy5Q8hanaCMrqKBQhq9E5Y9mXQy7Q9r8RoWkkLDpWLEa2SvQQ8QHJpTKWVubkdevTmhYT5h",
  "key46": "5NEJbV1HFDZT5GjPAD82kfTAUHqiMd3foud91VrKCydYWcVdYRUsFfTK8SPeeYaa8VepZWZirCKGbJgDgneWH98p",
  "key47": "5yjtxyYGWWpZhM7Cxsf152KNjYfz6hrbsZGRexZYZR4wDEvAs4Y69RQDbLCP1uSYEUikkCFzPXSHtLUYMd7WJZSV"
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
