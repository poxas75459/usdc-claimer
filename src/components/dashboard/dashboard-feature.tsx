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
    "5DYZD28bJFsGLqMqgMgfG1WDddicztpicqTSXqU9rZWZCaJZy4TE4cSuqhgCRiZsBFuj8ehNLbQCqtspCVrTLthY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsGJuuhs2Jy2Gds7AduPcHYBmHM7W9xysFkgQYxmksmyaaobkza7RA49FBeuAc56WFisCu7BegpgYFQkFujg7cG",
  "key1": "3dDyqBj5rREDavXf3PXCTKx8SGNSZKTRDbUtvp3ajozQWf9Ww2Wj7yB2PaxmZwpUZCRHorHishVagCHizZoVEDxE",
  "key2": "zn51axvyNmQdpPo5ngq4jymxK6Lvg1gy7FdXCq5HUy98g7j6vavf5b3Hmsmdptg6BaRLeSEjsbdBntdYn1Etfgk",
  "key3": "5T21ovDURv1vi2CiaaEu3tMksVjzWq17TtiRVKvJ72Kmk7bk6ZNkAp582TGAaHUze9q5jqgHFNP145Zg4243Ubgy",
  "key4": "4MEyadz9DDzyq8MkmpXzE58AHCvWVRrfZNJ5WcTxASMhR5JDzacmeanm3ZUJsxC5bh64kTEcauZaDUtfzR8ez97a",
  "key5": "3sR88Mm6DsKAXZNGtHdejf2qEJ4EFaPLG3yLFyvXZQTr9YoiY5Wzgh6mEd3iDa5N7FWTXZfvU4TnHp9Z2sn3j4e5",
  "key6": "4Vj3o9QVLCPPLAdq8Q9SLTFFZxQJ5JWwbPqSWCAibSsFv3cahLFkjg4gZHVxfuQ8p4qm7ekvGwCjVJqa2Hqw3z65",
  "key7": "2HeyfJfjfuaoVj6jPcEUyp4GSArcdVcdzAsoJHPJGCFMmqBq3nfemurKeCgNRzoRa7p5wVzVWbdcLsTEAAJ5qcVX",
  "key8": "3gaSgB4rD4oc8G2r4ibwg62Tv82BxhFSrsn5MKv67e5sG9E8dtNH2LcjvwhVJ37cvzJhhTBu5v1j6puce8fVyrRG",
  "key9": "5cXPVmaZHM5BcaqqtwJQoH8X76MfyaDT22z7WNMrS7dy6tvPmU3Gvm8aghCGqUbY4jRFGe8APDD2xzjBATafDq2k",
  "key10": "3336K35BNtbm7XpVEWQKws2kkappUsvVye1CL3vqqjLxDhsDnVQHfFKQFVHjcBg5H8pmQ4fTgWVUCckmuYJyAfdu",
  "key11": "3XbP2pEfWdW21gRNcha5i2J1ps483n4tggrpsyCvWSjwD3SgnyG7cq54xUopr6bp6iyMjSFS3mvHKE83rTLz5cvi",
  "key12": "5FrW8dPpCTidf6EZLNiJvPDS6D2aFd7BLdvqMDkFcMAYGebaWp6JWX13b6fREPwmguhtChsm8f5EGSqFhfkj8hdS",
  "key13": "3asQZBB2jP9r77CofApXyev9CLV6xvRP4CMw1SScQxLQhSvsA82BKWm4QEtHMmv7jAA3CyvtqWBX1HSoT8Fbxuas",
  "key14": "5UbcQDaSQVusmHQ2634oohr9BtSnqXL8gh58AQ7JMdHM712MH3JAoq9RCojSpbeNJLsVKiwhyH15FAckFVi8fD18",
  "key15": "3qccWGDgXQsjQomCb6Y2th3fnwWht1Y5ReW6BAKfYhn5Dt1aC2aTKZgCbhjNr2QhDJENCUFko4NKinHViaus9JyR",
  "key16": "4MoYVdDxhpWJHC4rTHmjDxGheyHwWY5k27AW8eJZVUYy9AoWTziKgLoB5WRETHG1M4fM8YTBM4fKTpuud7rcnm2j",
  "key17": "2VyEByar5kJhQi1U225UjDoauDeCMf4V1j5EbQzmCgU1CDkFQFa4V4vibgDH54bmLRZqCZPTeGSQGss9K9MpbN1A",
  "key18": "31RRgK3pFB1ms1Tcg51BsViKm5xbWA1bcaf7wdZnz1PnhMZs3Wp26uMX8Gc4xVqaaHrR1kgPqWAWPwqfZnZwGLGK",
  "key19": "46Aju7T2ZBzUekwfJGWdr7vibVAvuGRKqLA3FsHxzTRVBqT1ppvGkz7FdQhe5xpkGsegAEYNDovdZAYt4qkpN86w",
  "key20": "2v8NejZLFzy8jwXRRfacVH3RWRPEqjhv3Qmb5vXhs1yeZXVvfHWtSM5zjLZsSGoWm4cj6K8byQm49CKexkwMtxu",
  "key21": "3bR2kLptkC7yyXwYNGJPK6cUpRBFuPPmPJmwuu9sAc9hUqAheBH9jZG5AyWfoiqiTny4xbJyc8Qe3ZHNnjoSMaaE",
  "key22": "QaMi8DTpAG6Liru6p3ffE4qRPZzsbbaqfg1XNwmRzS8E5DVgmyYb825M18D4HzZign12bG64dFn976AmteUihQJ",
  "key23": "5d4R8TjojgaR2UQPP6VGPPw8CkdD3aZ8pZf3zRiJfQHQ5FR8QuKVo35YAoggpwHwiNMsFoPmK73EubqH5ah71GMa",
  "key24": "3Xi8k19EHcnMhsoF4ASKEhdgvoWnX6myCCdD3kuizmNDehtxGbCSidQgN2Bo9kagZthpAvBM4MJiUmq2wtErKfR7",
  "key25": "2odgAyyYJFMm7QkY5m8rt4R3g6iw7gD4zqNibJDHYaawqoHf5Mseof3zgiBQWxFn7gSvoMqVG5kazSBA8xbDF479",
  "key26": "5vnyfioAdAF4H1DpiNw94TLQUZLyNnegCTZDC3RvyFYJYHnsZ52SVZVw9QdK847qxgagdcPwujZCbyfxjnAeTfKx",
  "key27": "43eLQB49Hr2qNTGdzaUWksbUKFMGqDeXDEv4VXKEHrWMXsoaWJ9aDHnmcSm1ZvrzTZnJJijuQTbq2UxF69o54Ljo",
  "key28": "3NoW7HBzeFaTS4h8ppFbQrpXorxvuSJzdGHPwRskRCC2VVMi6rVWvhNb3c8bAB8v9e6vYB7ixpCtZgS4tH2hkjGH",
  "key29": "4JTyNo9ERkJ6gGjq9oCuHXa8N8RU2PbK4dXYV2cB4Q83vMCADQFQxGzQ3WWuhK4NrGUssb3bjS2vsFMheUUGsfMK",
  "key30": "KQkAGFLM3FGrfh58XfFk7kMBdHnj7ZCbAFEvArn3rKdDqP9nWVVL1YHYKJ262gdHthGYeRpjfeP6zW1TJJJdTAB",
  "key31": "4fcKTQKADHw5BGScZmUokDvEuwfJw26Z43DPmU4xi8AvkZTThFfD2Nhznbmp2gEAkS6gZRcxCyGraQLsZ8nGe6K6",
  "key32": "5wWyytvVGca7izJ9qJxwMMMg2ZQ9WrYr3TUaNjcqN8A4KyELjkKJYnkUM7mvvFRpRPUvpBSKoM47FDPEjs9LTDfc",
  "key33": "4NnnfuarDCPDs1jxBikxDCJGwbRsVFuG9b114o55JFKU87aRtNceEV7uUGksDudKY7WpwUhVuEhk4JT89FtVZdjd",
  "key34": "3ZpbmA4Rdy98ge2K6DVCQgbFXNbgNqUJW9rtqSuPsoYR8T7SBUnxuSj8TcakTzvGfJKLjexGzRZV572gX7VKitWS",
  "key35": "4wpU4frKWdEAL5w3JrVi5PNULSejkdrHY8kLFj3eXSBfv2Dp3zLEcAeQjnYPquxecUJkiLKYSXDYteRUowxdUAer",
  "key36": "51feDMvaKqzhxKCt2hshnUjiX8FTT7c7ciGLe8gpncmwwuXv25ee78nDNtfAJ9RfFeqheZYDpRAiqEmPhFBXSbGq",
  "key37": "2fJMiyLHMS6iFLoD3VVRRf6RxbARaoV4oHgoSj3Yj3J8gtrBtem3aotFKVd66LwZY4vAyLhmJWA7LQ3WqjNBkeHf",
  "key38": "4x5gn5UW4KYnv96a4JdwZchC3Bhve7jSehX1YUxd8Ufv9CWFaagejaxEW5yiTGhsLZBzuWsrhXA9YceLRNZS74Kg",
  "key39": "5LVvCvZ6MNtCuScQXkeM6vVdxKGsfUah6eDYQ6Cm2r7UopvYjZk6xk1WsrBmydmjTSsmwzhvQBjZTcP3bETvYkzD",
  "key40": "5dLbB9jqmxMfdEEyi6Py2NFKYVJpFAk2FmWoF4Lt2fjdK9YDJ3WhGD1JfTKP58gNndy7TjVDrgXkS6wSeY7Mnjqa",
  "key41": "L4MDKgoUy5zkb5uP8konDUA7XzDjxbQnVWQHevKm38kMych6H4XxVNBsSiXiESwauGJY1scdPeFhbeL8LpMGs6r",
  "key42": "5MUm8RYXQ1Xju6LJ5xpmBBjwP7xkW3KVBEsQqv21R94BsnrvmHP2B8GeKzm87ESde5kUtnVCY341SknYY72ZLekB",
  "key43": "35TZkzHN7SwPvZv2iA7oNvytSUw4BULsR1EAserDQTsq5Xx4evcnGhLLZwQifvqHyLgoR7ZE15LUbMuZdrKub7ak",
  "key44": "4ZF55KUpYMqS8aT75R3HSG5sbQsRekYekyCFU3vCSQyHNMzUG38fNkgzWSfnqqh17pKCSkbksyrgjugC6TyxwTjh"
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
