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
    "32PyHLX5rJbxtaboBUFSpiQRpyo6tbZqcppartcHtZsTcDXRQAYG1rcUiW1StWxMnpW5oktaedKjLWGjvwrAZwgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Rzc36SKeVYoo6Mk39GBVy77ucqvnmYbHNmedQ1Bt8QtPeuJDQb1yd3Gf2rSGTUaMLA6pdnyp9M4FH5KTYGM7aQ",
  "key1": "UsLCZxpy2wR3xjptjBgHF68B5JE1wUMdxZwznVSbbELERnfRojsSpKR3Q8wQBZfxnzhSmLK3ret4VkfVFGMSG2o",
  "key2": "Qvirzxy4QbKBVxiHXLCVGk8uCsR7QLhDKgks1gz7Up4z3J6A64DprgtWvjyUsS5va5xf5v5rwyUzzscr25kWYu2",
  "key3": "3RVyEn1pm2MHxPeLZZNVZaJkR8KLtUoJWXn11vV5NZ5sJEfDupiUJZ3R9cFcP4qcFP4XSzVY55dAB8Qu6CszUjVd",
  "key4": "64H19VquTzWfWSZNNmZvbXjjr8fNjqEXS9N7jir2kxShvSUBisy47tSXUqbrRU6prg6DfSiW49asYyXZG4xH2KGm",
  "key5": "4e4mHzbHnF7o7ECL5TC3299rYKLfpGvUA5BQ2gmPtqpZZ5hZ2cLf2jxQgu2y6SyB4yCWca1VbevGJsLEnBSEQ8sr",
  "key6": "3dLmBX5CqXPZDuxPXnBqqfY25Uw7wxWpgrPNUpfQ5GmwSNs45Xx9hJByaCbt39unhQaFadJFncHfJjyu3T3UeB5E",
  "key7": "7DLUxabQnHF8vNk7pnmdfWGkxdHHYPXB26iHW6vJ2zgsbWQDJy6pb7QLNQApra83VNSxpG7dDiYnWmqVzbtgwXa",
  "key8": "22s43k7fWJ8xh4FmzxhrSwrYrT6wp2vNMzg9PwqV6iwUtY7mPtEfhBmv8G3hU4K51oq6c7y8bENYCDxwJDa78emz",
  "key9": "4QVYBaTRJG6grpjUPfN2m8MMotgstG1hBKkt2oQ5ae4SX4vpe7GLwMbhrN1ttcY5jMU97fc5znAseDvH43Eo7EYE",
  "key10": "2A2LmQyXKtn3v9jTgcDdaz1ZQTFSbaXkqqvZ2JW8mBWBvucBGmSJp3dVDkstR8nEPHjNFY84eJC8aauw44fn9NL7",
  "key11": "5Muk7FYyQmx9AhoefHVTLwr2M75RkimnLn89EJBV8CjWDosbkoEBHxTRGm4K4TRwqb4aoVmWpEz67xoJzKyjqoCB",
  "key12": "5Q5Wu1fiNc8LfDNn6Sp6xNDQEqVAxrSQ5m7LHCsKjhMAw8hm7AzTRmMEydfoyUcaBWSEwHfXRftpxTE7sDbbuAXZ",
  "key13": "2Mg98nLTT85DbM9412yHue1wYvJxngroZBGiv5uBkiDF6yrdhfJZJK9QkctbmH66pBS2A58PtqhSgfPWhosnVuxb",
  "key14": "37Ft4z6EozCkCHAxag5rfrYus356AChUb5T8XsLfB9oH6Mx6e1uhrQa37ySkuL8adM9QJFz9QDWmYFGK7f6Wd3PN",
  "key15": "DKqsyNijdVA9msj5QubCb8YPcoyB3FHgihGwPGHt4cxfDDxz7QhRc9pYagNXjmdMCcNxhnEgwA1ejVk9d6sR8eu",
  "key16": "5zRL3PUGrpkjEpKHjzzy5N1GGBcwFvW2fmuicpPALZsNNCkxr3aNRPNPB9eMin4txTYMoWKLxLykj9u58cJNHtr",
  "key17": "4n2R12EZgYKGbyJk5upnV67fANE76tAekYw8qL8AkdSsQQsfZ5HyFaPM2Ttcd8e2Tm3ScUMWSbiuJSZL3Sq7Lo8p",
  "key18": "2VugdrJy37khrQAyvEVA1XWgyCFe4PrvXMT4MsoHF84VtDxddXV8qzDQVy8JFtDARbTUXyKGPAYzdNP5JxMcjQaz",
  "key19": "2aP1Ab1zksj8qMBWoquarFtKcfpuEomhtTzd5Y5kHuhPkb6qPE5t3JoyzL45RBA4RiaEDnRrDAEXz24abPBNZbu",
  "key20": "yiCFbQUBMS8DjvqUpQtTo1nYSZ6Vj5k3b74wLxZVqxgaN1pAsk86EZwvkzoV35B5QBueXCM3w7eBZXBskyWDiPr",
  "key21": "3gPmobp6PjyDNyaEtjLJgdqnGQpTdf9JqXT1JdRjdyBXVmgJ3bzQhdsriiHVusPriTq1xXXgMcYVqriVuc4TzsXP",
  "key22": "5WvcXQ66rNuLRjY55sKkAmLiuDkaQcYC7z7CuCpn4kRxHnek7GiSEWcfhd1ypPW1u4gBsqJPrtLUqZ7m3TaLwFNR",
  "key23": "RF9PDAmkbtc9N6Pyq8Z7bBm1g9WmWqXf86SBNXcfFdHNNc2cyVqFtsNH28eKexm23y1GpGFXLWpqvNd84HyGjZw",
  "key24": "5UDchvveLiD11BvZaXHiRmuBy61w7JGKGUkrR2z13ywrbWk8MpGbZ1AfARJy8Kc21wEsVGsetA8WDyFS6ymJkGZn",
  "key25": "5D3KfQtXWtrNERazTh22jEbMHFhA6KW5wFRfihWEp9FiABeEarhmGia4uDsuvXBAf64PBJVTRNA6UKieWjQcJ4Wc",
  "key26": "13RqSi2LWo4CiLBomVqyQri3xBh3ukogVxcHqCPcRbsmSHGowjXwAUL5sG64HftBCnddLfyL6j1QxRg1xniMtgS",
  "key27": "2fXbobvEJLbi8xGLjexM9LLwZLrywtoS5ieU4nHVZTyziAnFo6eahTMC6rzQWSr7SohgVg3TADXFAXjZ5FKjRQoh",
  "key28": "3vJrwT9s9WvBXUBjGBgFDZZHQrQXyXsKMDyN1zYcUv6rQ1nHRBBA8qme7VRbdB6nSymWsHXBucVXyggciK5B81bY",
  "key29": "BveAFjKBpGU5p9K3yrwJs6Vi9TNUDEbZQ3fHn9sTwbntSTN8htQT8U21Dm796UG27Hyd5fgwVSKhiHNdWee9cUy",
  "key30": "362xy3JbghNWr3AoNkeMitNCyCQCaD4FgnGiec3nZvoBEJQmqpvtUMRf7ESaoch9jSrhDZMF78LswwZSqWwHX4xJ",
  "key31": "5UBwejY6DWai6AFCha1jmS3nQnQezSFu5GAfe4c3LMWiTaYLQBDmt6CaZYGjQqgLxWRsZj5WGUCxg2zmjhGVFnke",
  "key32": "2G21KF1bAxLq3Z86N88LjSHkuM2GWMxHkkJTYPkNFrcc3riK9gGYWSDuJu5BMBCeHMW6rgUhWRojBkVtnoEaeXfm",
  "key33": "3RxsXhbvakw9JE234WWo8AS8WVeRrj86NHnWMSfGnLYvM5YynvRomZoA5KcsmP7ZuwsZpCtdVTMv9UikVYnYRYdC",
  "key34": "zzWnju2GEeW6v2rFhu2j4VQc7rrvLW4G285n1BoShxdbwMqZGjVE4pQUHnyebYFrzd3i1KAygMTMeRBuFvsYAng",
  "key35": "4j6pWN6duSP4txJKo1d6akAznMTFuDb58GW4pYARRMXgNkQgZfk511E1FvEwuEjjberFjw6LSPGR5KYGJr1Gzsqp",
  "key36": "5nx5r7SXWhdHD29b4HYWNejitgNcsxXXirutGzuDWXEdo77kRTj1qhnUb5GXqoJ6ahViHFwCy14JAYTFsgAWbHDa",
  "key37": "4srG7FVnqhgu5V3C5tp9hp6RPgm4PZFtVtU8CTcq2huGK3hoAEuiLPHozTCUTdbzubA7kF9sWuoRqPKxMfyZfRW9",
  "key38": "fWsx7xfvYdS2R7ewUDfMv4KSS4xgqQMsP7pwjp1Lvw6yzQNzYAwH7SnYcsZPDmocpVJqrFddKkedNg8g9k2dzqg",
  "key39": "5AAqC1x7pMa62BRVzJn5sYrYsbxHevm6FSrPGSjdXFW9gLbRmdQw6EWLJe9vfFBzSJADLegmwaTjcRg2qhRQYERE"
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
