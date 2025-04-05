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
    "2TjJq4juwqFnhtgvxxM48qTsoqdZV6wXNpKXjdifcyyS4z5VuPUanhMQk6egbWfT2vQaw1JrzdQ37DNii2hYFGBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTpXjkP9S8JYZB1LStYB9Tu5kKKc2ftTizygJM1KWpwkVbrhUuHKkGeFWKuqNZoYbhz5YrngQND7o4Wqg4Mh8Hs",
  "key1": "3pCw8VVbxzDaDWP5Dip5F9jKqBGBaK4eBMWpv92QDTpJajBqaeZ8ynJWK2mScHZYTgH6VEdQogJw8nTkCQuacpAp",
  "key2": "5vX5jhZPRJ7KFbho5oAg1vAHtQfFxFsrVjmUwqDXpmw6MvXeTsw1dti2abzGJjdxNFjHkMeYGySKnDwWy7K3S2hi",
  "key3": "18bWUbF24MRHakeoDtpZKdA5Ly75RjGQ3ZArKhcqyrnz58nedvy1wZEg2U59oAh51YV9LdNcPcCyvTU1Pn9i8JE",
  "key4": "3xF7ekMtAzwEiiaNYs1ptHGGMGKf4sdymap9UH2pdWiwrwqLeGG3seFwCrTgVkM5bETQ3Rj6iDTWBKDEhmiwGYHA",
  "key5": "9JzCeBnGdb8c9jTSQXCAWanZ8hH4rJ4X6p1ZnJg2859sT7deKhbwMeGY6u6bNVYCsZ2sE2f43yRVA8QCAmzQsqU",
  "key6": "463VC8Z6ZF8G3Phfd51HZwRWb24xFfp5LLChX8DohC4jhxVeBjJ6S5dmMeeqvddgFSVXmUpUhi4v3UDkLNvAhbHb",
  "key7": "xdW1x1yJHnBCS5BAjs1119s6ZcTBBJG8Yw2izMR12EgHY7XDUueTCtyhKaf7HvjnzRD3fekZGCeUHMTxoqk88y8",
  "key8": "5Qkfx17WZpQL64WK4tdH1aGs5mbbZeyrqHKHvJ2Ndn5D43kpyfLKkpcnKoNXVHoHMVSTY6AGokkXvCEg3sUWzjmT",
  "key9": "4VVrpGrWXDASdM6t8H6zAnUE2Upm6F8RdSA4LT1C2iG83iTsT3yzYhJhFB2HRmaNC6xsv2aTri629uuorbZ7ZYtx",
  "key10": "3jfrz1TYWUtwnMwVNocr6Ewm6S67LemyZ28AbiMdx31HdnxwV7JaVnmiLbaM2JCYXzqcbavJMkR2QFgZW9HLCgCx",
  "key11": "WaPA2tQm7pUdhxZtNm6N8RBN2EzMxPwtL9wtcFUDwxKUPnMNphWqj6ZgLQeCBfXP5dqCm42htWBRqrpD6QBHE2G",
  "key12": "45mwYT8z5jpuALUaZJzfHEuoD4NXMRcTGwkB9gvUnSiNbJedYujg4D82RLYZPohXvvf5MRsmzi7AmhKvWJAoxsUY",
  "key13": "3HSagEPWWwTwDGGX6nJfz1QhN6FoSyghwXCyeiQisevBShXtJGaSUBnPpPLS1bFoNu2J8kmYsF1WWQjTg2vZwJkB",
  "key14": "3H7RBPB5o2mMP1mfBCvcF9CuzpeK33AsxAC1vBtGN8x2xQei1aNvGQzo2KMEGFvkj6Eu5gMnguu6ovuyhf1XXL8x",
  "key15": "2Fm2iD71xzSnuki5FB1Bw9LokW1r5UB8aLS7Z7i7JMga4BkSoHPs9sST1odaptrHwsybpQd8R9BMJGaR3M1BYYDW",
  "key16": "4Pgxjyjihctz5XoJKZ5gTuNkGukgUEFSztfHbcePpA3g5Awkzk4mVFQNqnJdyqyT4PPcVTkqij1UBFf5aHaCroGz",
  "key17": "2bxrQi1aJjXK2uE5dgBvaQVVSHFVmttFC7LJN1x9gBFBSun6AU5eLcW8YiSBd9pGkrCMno3PemVMjJ3SDk3toqPH",
  "key18": "5cWy1nXkghvYwBTAK6VeDcsg5suV6wZ5i23v7dnHDNsKE1t63XqWh1gt2Ss6tKZrgrKqs3JnxJRZUuF67Cfy7jsi",
  "key19": "2GGkHPFX3Gqr9NwMboa1mPX4eX2hCsGLLjfaJTCPiM4oYdSjNjfXZukjKEVPKAbPhENHF83WmMtNWBE7wmGsiKwC",
  "key20": "2gsohQcPFAKZx8BvDPmg7Hp8ee6FZaLutg7Dige6SzXCFgW9iWQNLHTsEAk795RJxEdMR6r2UMPirqheubZKirtu",
  "key21": "31H6vFLife8a4as9pRX5HRKWdKrwAg9QZeV4G4xHZMABgtrH6urXvHZLhnuiXXmTep4hPG2wckY6jufGTTgm48aE",
  "key22": "414kUMggEjCRwZkr6AbTSTB18TRXBQvuA4mhWC8Q7QQXjcE75DfatuML3LU5fsc2nzjrXFgcu7Au35692Zaa8yNk",
  "key23": "53L7UPqyXZm7bXt6ARNWFqGptNZMaAHfEQt5gRJDiaHwBo5XkReMxZCzsSpLcozBv5uAUB4miAiSzzjEs2fM8zD2",
  "key24": "3YJXJ89r1vuEBdFsPbG9NBQQrG5NR32ZFABdeLgFue8c6tQfY87RCkcg7Cq6Lw59gL54GrqULQWf4mW5gYR4f5DB",
  "key25": "GpHKoubimZBnZW3BxiKVmSkG58gnP2xD4xzv9y3mnC8gZWntcg47HoCjaJptj5Uk5rMpKxvbqMkPW7su2k5a337",
  "key26": "4U3Zo4XvYXynRDhmnPe7qcrBu1qerqxajd9cQBJfHDbVYzPzhBCdetKf9ojxTB9nu8PxRvJeDgUwNfZ14ED32jej",
  "key27": "3J7WFqgNfXTLV1GDSNbHLjvSfrM7Sw3PWcHUS7SRMbqejLsRtwZZJUac5mJprcpUsTgU2q3TtMMuwYs52prCyhYJ",
  "key28": "vNJYXyfKGjAMG6GYXLFuGy6FAbASSCGGuPcb5rDaSMCWo5WX1NHa6McBvRnnjkTeDQAoEUQJfSgDguJTNqUGdxB",
  "key29": "5CL5nczFbkv9VaCaZqZwad4iAgeZ7tnLTptReEPJMiMcufyEjnZougHJBjmo7p1PnLgt4sWjpxiW1dCAwZMhQtPs",
  "key30": "2YU5Lgu2TJsJVmMtrHuKSrx3PWvRMzqejoW3tif6GDRdkLwnLYnYxTjJp1giXoKyCxiJZsL9Fw3mXTvBbb7WuYqe",
  "key31": "zYugcyPnpgAbB7iGNbgA8YCHuhzuyFBHBkZAcbgPr3mEYYBQKGZSuB4qrPaaPLnn2Lst4d1hC6k1Mr6DxbznsxE",
  "key32": "5chyzBZk7nRM7PiUiHkNJGozh9BnQKFNR9jeJCRbqrwC2R2VgSez6t2GDTJ5CJDL3dPN4BAiBKM8NtvUdVRaNH1C",
  "key33": "5wKzUGK4G4Bw6ugTJjHPd2pcqi97ThLuVWsbVvMbLhmSvvMBbLuoasLhomS8eZrmGGZLuZ9sw3HfHGVLQw9HMuwt",
  "key34": "4zqhnFvGniT5BZJX2qbtXsfrfEbVZtv21BTQxNdiUrZek8twyUZ5u7YEXJbrY52Cu1xUYTmX1Kvo5thPWioCKad9",
  "key35": "3UmLT6FJ9b8tSnwThrzrLSxBTXjTacMthdo9TEJhfyTudpyEfwgVoovZUaj8MAVBng8CGwD3n6qvYGeMtYNn8bD2",
  "key36": "N29GiKHBrWW7fLCgkwhNjY6AhSqTRg3GMkN4RQg62UqvuamHBxxhXzE7w1CjF8DdN35izwYvSjiDfTUzp3VLLvt",
  "key37": "3xLwR1rkeNRPXTNDuptgkzfX9fchJLwCBX27n72AqiAhW1RgjsVgw1wRTQH49RNPGNtyEfKQ1vALP4f9TSpvRQK5",
  "key38": "5nbMYzzy9x4W3RjKSfwB4BkKotjJoKTXTbF2sCbkpQfwMSNZ1jEdQyuoiKaKFQsFpHxiVJkUqGAEPgN8dMtc8WFq",
  "key39": "4kKevLDfVN5S9Md9Wsxegno2H7Y1EVHkr6SYFR29x2GLfH8VrFeMRAEezwR711xS3zghR7wMdzh5wCiGoLbcuN6J",
  "key40": "4yPjCKzGfhL7oJ5SHV2JH1XPRqFvvmxSe1bu85XJsMon33XjZ7Wch2J39h3N3WUezmkD8yzniVpBAyHSyKbxPD8H",
  "key41": "46TTfjVfHmUcx6uzNfKZU9CkwzSmRSyMEK7jh9R396FLrrEp6zsXynqFzbDawBCdv3oVs7KomeBqGxVQJSc9hQrw",
  "key42": "5LUYbRYPUr2jdoYABYfjkicPJ2YYAWXqnL5KvuxJzaWWzUip3tTzbjoJwRwbognatiPXFDgSveogRXT61UTPp7aM",
  "key43": "3na1dAteBmt9Tkb7rdZEE1wwmmycp8amhyAP1Vj7M5B7RRcFztcpSRttsZrfkCgCH6YnioiGcrFVkcnCE5Xg3BAL",
  "key44": "35J8oUEBw39NAtZJduiu8sDvWmii9ayj2E6bWXdCGY8j86GToueZuBmVok6zimwbsLsSipEEiwzdSkzAuWbjv7Y9",
  "key45": "5fssqJ52LXmRKeubR2rAAcdqtbzia2aW1ZwTzdAY7cWSxzsrUPHkFHR7eZ26oh68qDFj192susMcE1zA98AaS2rk",
  "key46": "Q1C5Cc1AvKDqLYa2BFjBdsYoS5cMzcWsykjd4swvnC1j87Z13UZnTHSyE3b9BxWKarggk7ukuTZ2YnNxqU3TZoH"
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
