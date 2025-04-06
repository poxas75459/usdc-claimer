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
    "hQfQQ3eui1LNxuPxQdM4VSMkDDT3bPkMChzEjmr6EExD7a91Gp8rjiT35Yd1UpGJ41q2mG8Bef6KtNbr5yLSCZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AcAbwM9cgi9NRknj4DBPYkvWB3W7M8TLSh7Lp14N8CEvK6VUBkffnPP5qLCRXVbYyvxnFwpMYHyZEgKNZ5gLeY",
  "key1": "dpBKVes3Moj8WNFGjGsFrdpi1hNuhDKNWfffnJUyFRnkJkgnhJR8eH5A5s339p3UV4WgMkADAvcMWRSBu4vU1oM",
  "key2": "2weJK75e9yfua9P1sNmrc4NgPMzKeGTPLppFJ31gQUkckXeFU6zq7HrjcJ5HCN3aWznwyuUoyWEUG51TjH9KKY8A",
  "key3": "4sgyFji4C8caxJ9dkcE18V1zsaBeyTXkqJyY74syQgFWWdT13rFSQH9kXJaCenXJrLnQtP4zGQMPeUNMsdYF6Bcr",
  "key4": "5nTcQr4XHrCmPcma5XRsGGehZNPR3X3gMiy1AkFwTT7gd5LSE2ztftxnxNbexLF6MC5sssdVrNcsmBaGWWtk3en5",
  "key5": "Bt2mtgeq1wEzfaLxKZHPu5vcVRnL7C4jxpdZz9VpdVFY2TFu34nAYPosJoG22xduZDzaFmFgWSWKmRMm89TP2cX",
  "key6": "4HsAF9biEE4CG5h4ERFuuVMyHS9HX18weeG7R7cSAnLzGbrn5PjKwPKe6mp66Q8aUaX8RzBLzQ67xD7MRcsmqEx2",
  "key7": "3ETBccALQUS1PnbjfMv8FLrZo6pPvZkGe4vJQeypubWKoTRUd62a3VDv8WvcgUcsmvkuE1XDMMGH6sXLXxmEjEAC",
  "key8": "5Nvmi6d5WTEfxeHiNPpbG82k6FW8dFxf2zhFmhbSBqKxvxgDsQsfbfQpDQooZqVUKoBDmYDvaDSUjUi13NB5L947",
  "key9": "2sNPJKu7CCNyn31vn8eBP3YHBHPZpEwAx8vyQCNMZUmdc42iFApEkVX8mXBn1MmWkqynY3C2hgURbYweyzZwjjQn",
  "key10": "w9BaMPXuy9KaiPQUHWKtmAw3N5ajEgysUCnhff7WnBPUDcKGJZjuxbgMH5wph9ZuvNCad9rTbQAkiQuMC4bGbLP",
  "key11": "5CLTKFSJQAzBcjHqFbRJxT7xiaErrstMSUYomY4Yj9YteJrFP5cFBtyedJL5dS6EY9Ra9mmKfNCMvGgdwSp7C9Pw",
  "key12": "5rWJcNw37VNGU5NnasF8MnRfCbZzmevqoL2GRqCHWoKzzcX7zd2vFLX65xyYWCUnEYmi3cC7aeuRjiK9Wm3TuYcf",
  "key13": "2Uu1w2Z2iPJPejg9cHNRCE5CBqQUqkavMod31QbtkNRar2sYK1cueLUiMt6C5zgGoWpDorbFbqhTZ7gQJhqhAtDZ",
  "key14": "37oD5477ikgsjduMbHAhqFPZ3wwkidBmqSRY9sy1S51Vg77U8js6NKndsxWkFWj93zBvKGpaKaJYCX7ywjGxEMZK",
  "key15": "2TsCaCKngvp7akDYfTXRiUnfi8Tuxf3mpjfGoMSzWvFBsRKEkUHuWaTFgLMiSB1PL9jyPbvAFocKanjJ1eKNHdRm",
  "key16": "4xpP44MQetML2FFRBsE9svn2gGPobSanPMxJBFbyLG2gYu4TTzncTDyBD7PSrEH2Vasd4DVYBZzF4TaygczoDSHA",
  "key17": "vbN1DbU7FgWca6qgyazeRJ5tzV7w1VECehcjNdfvWrKk3J7NfqdAqyNFnkr27FQh5ntSiTAUUjnVT4uJRQ1Xxm6",
  "key18": "2LcUKDjjvC81aWMrgpaRUnLwKPeiCzkN7VkjV9f46tojs1N3NFvAEU9oxvnfyusGV3brWb8Fuzyfi2gjAsDY5pAK",
  "key19": "3ssvw6QrB2Y1443jRsjixHxZvkoCMJLfoVUyY46KzpDokvfpcYgneW5bvpgRYgbHvcxKFShicMrr5uK7csM7h1nt",
  "key20": "5tstDje6qv99ety5rPJZxcJDZgNPnZo41yq2ZAW7kS1t7EnJw88YU4Xkd9MgBMc6bi2hk1Wj8DyufvpeeF3mcdZi",
  "key21": "5cKv5oGfCJ3V5mEQGExGYx4h2AUNJeH5X85m8E217K23dRoVbY6V84fDacNMHs9zJMKFuAr6SDy1MgEQnFxs6gyX",
  "key22": "5adHK2DRWHcWZqwJBhnDny4gVCREGkGmAFNSCa6itaXBFak5iHwBApaiWRBaEP3mM6CCTzyZ9zzecsBkasG2yEuw",
  "key23": "2fWeZdhufGUycuqyjBHf59dBkhLZivDwhbYuJ1AMnY1ewUcWhYjpmX2fyoXCQ1BTJHKB1uyypZANmpBJoT8EwPo7",
  "key24": "66AkjahMyXPciyEi7KoN6NShGCCbXNGr2s4YuQNLrN18cscwA3Upsuu1H8kyM772dY1efaDG4QYhhvK6DFTGEVnB",
  "key25": "5F6HFG8A2yrqSFaGkjehmHANs5U3Jsr6B2gWEDv69g4Esbe6W8CRpoVsHBw3PiobdjhnbcWXeMuY5CCaiCnGdER6",
  "key26": "z7kZBJ1Gc5KdsAT1qJAWkjdB8CoJE5kUZgteUJvE3i9oUAaDrXvFv1uJt2MiRqP2J6vvViv37sm5syvijT5YTAE",
  "key27": "5k47AN1z8YfnFqp8zeAcAVYXdVbZ5cHgDgFYukA8vSuNZSVLqe9QeHvH3XcHhinmKciFzLi7AujF1DMbPsNL9prX",
  "key28": "2xqD5uocamWCzG2L9Rmfostu23CxxWDRx9KAcYCjsAHznX6Bg48eqAoDV2nhGCtziNSRNNXHTatWWGDGkDtYqBBz",
  "key29": "4iTxryZcGAtVxn6SCt8o6f4gdaacA6BhGHhxakS3D8CG1V8PrvzU8PdwHDjv5mwYA6FGtMJwfWXZqr552C2Kvfgr",
  "key30": "2eLGx3umGEJoZf5yhVeKV4XEtPWzK1ejukRXYjiKpDm7fwTwL3Mr6MmL5W8NDfScmqxVs8BUbbHumNfQJUmwu2ki",
  "key31": "3BgqEc9n7Q5kiYfqfviDRtL2zT8yGCv9UJ4d1NqPFPJ36ydLDHvRWqQ2XsxzroW9PsKeyDMjfyPZA6yJfRFPMrw1",
  "key32": "JMxpU3DNojGgnU2ZhDP3To64Ah7QY9skiKRi5UdMVHdMHU9EPDaFrXZvMt9u3SSF7c6edHjFBBe79LWZL3AZ6tN",
  "key33": "2v4bRifMMzxwaWK9NfZzCiBCcAuHBmJ8mBnrGbDWQ53htTcL2RPqeJDxbBwQwgjxt5tF1de1hfrc35FGEZ1qSQP7",
  "key34": "2Zqi9CMR7JW5eMfM5vjBBvGoidnZw1PhFUadJnaa5TdvWiYfBsJBH3GeYnsctmcYmcLFkhRgC4Ns3KG2JdkTffg8",
  "key35": "55vVXwWBMbVCBN8WSpjUU1VkD2winmAVPQHpHQcGUQUQg2BtJPhSfsQzdrkApyKqHoL63Ysbw9PzoBcCibPSZfY"
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
