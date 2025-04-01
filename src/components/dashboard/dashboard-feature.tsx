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
    "2vrDnB3j3GVh2MXhUMAWmsPZBc4rxg11rxAFv89tUAFiQ2jXzYLPewa7wzEdCVnytZgwNCBzdZ69K7CrkDRz42BT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scwcNkxbSStxbFLS7PoDxD7V8KF9NfR9MKoqGBKETdkzcgUFasyTW9MBbawdJ6aiiGqbQmhadWE92dANgiy5gmx",
  "key1": "kXJe23mS91ayD2J8KFvfgiiMyKWgX6AeKvdqEeaafFQMVDmDJfRewx5zBP7srTNFmdBQ7YmXGKyYxYx96Kz44o2",
  "key2": "4q3mxdqYPaoa5q5i42RoLXVpU1AJM5s8DUXFinmXFRuVvSgUW81JN1tu3NSKhodXTNUDRCYjrLNemNfHbykTc8a1",
  "key3": "CMZvniFq2bR4BJF8ZGGP7f7Hrx4FmPWbUFSMbSrAtDe3RbEY9DkDhPpSAbFAB5eL4zY2j1eWqqjAqdFtoqPFrh2",
  "key4": "M7UfohWJ6izd6ndCknmxaU2FKCHjhzyJdcybYJcWtkDn1tYPGVUWiEXaumK9mJoFisC5AnUNhtFrqzRA9syiqvY",
  "key5": "2VSF4CoD5iLYB8Uvnt9ZunkhaPWGE9gVRkqrEo1D5rjhSXoUrkLUSUMMBnPzcTw6rzNCxwdXCtBa2Wzz4B6TWqsq",
  "key6": "4JCZBDMGHYL3DPmHEBTmnD2juGp8kqmRZbeLhDiskEdFZLxvKhY9BoDdsWmjawPmfTYBwASuTp1JYzLzo8khoWUy",
  "key7": "36F8wuo7G2n6vxrWsZCmaPyYv7N3zpZZVNxGLm1rrcJyNMVNCLZPFwV5MwgHJCUD9f58goBR92T5JRXk5HRKuAdW",
  "key8": "5pNbHDxru87cGTyFrJRZN5M8rC8UVAC1Dq2WCsxzd6YvUKLztsn7yxxuopVQiFV72yxZpknTqhGpBSRrpBGWi2Yo",
  "key9": "LZL5BgnXikJbn2YxngZEQ7Zfq65vjfxM3bN8kWa3EQyczJtTu1ddrtErU2MU52WPR27TXNWMP4jTUdrVF3CDKk1",
  "key10": "43wabX8zcJkB5oZLv8i3Bh3P5LTQ7U4HfbskkX4sUq7Kh3mLPXUVWvNmthsVkKBU2DEgsZaMxC8GP7AL9GWg72Lb",
  "key11": "Fg6WVYVtTyPvNX48F3ECapXfv37STKXYUfM56mcvuTwH2jvLCbey4jkrvQmtFT3DuEg54LB3f93Dv8n9qUtUVo4",
  "key12": "4159TT8cLpLAeQWFE678LGp9vQqoAqJZTWQuRrPPbheexiXzLvgbkhS8qePqCghETAZZkNjyLhgd2ZsCgUrU2ph3",
  "key13": "2Ww5XNySpCGtre2s9yB7TrhKGqX1eWMQ3HK6h39K8MVaWGfb7CGj4tecFV5PUgcT3tJh1dkYsZJFdNcPiV5gFzmo",
  "key14": "296akay2HJoxhxa121FF5L2LjD48RL7Cxq9grWe4Ltomu7vmrRdwmpDYDdQra7UWJwwKEgFd1ybp69BeYmZk5pbw",
  "key15": "5H65UxFYwsYgLLWQvRQLbAPpiDVbFnsrtipXwyTSu7tfzxvEt4YuQfH9pjvv46GDJcb9u8ATPTKKpKqthR8hGVfx",
  "key16": "2bpZUqD9PDWMPMvNXVNGyWjvvjYAadUqNyMnPmREiMkUzqVvZNerZ6qhMcpmxMsh9N7BM7evP3qggjFLDBBz4L69",
  "key17": "qmKdmMALRNWnb7d5FR8eu3ao9UiFBDuk99q2vuCJhREMGSaRJw3p8dfaj8TWVd2qLcKACSr4xFjKq5WvGwN4YkS",
  "key18": "2WPev58xVqoG6PpDg4ryj8g7BeQ9pF4VA7fNipkqLUDDmEaxjN3M6UKgxULU69wZ7CJ9dLzhMq8DCxLYz1TcHSzE",
  "key19": "5WpaiQzMcnam1nxh5rwvF7XAD9cDecoDywtURSfYW7UV5gfDWepHBw29Eds44D1Ts8CgETULnvBb6hjLYBy6SaZV",
  "key20": "5mzhBraryqAmNwmc2vPfySjwg8ootukvqxGzR5mPcJ6ZmKibxzKDq3aXxPg4CirV4sXTgRUd866VknhGAprr3nFe",
  "key21": "494Nyx3T4VtwwKLZdXsdDRULcuhXQamVESobYycSGLSEkd7oUcpJrEYH2badSPaSS7QzqWeNE79hcCDqnANXEFzN",
  "key22": "x1dK86rZcjjB15ycorn65SuCwLoSGv8joS8wVduRWEbf1j5aZq6MbKKDcUTGhrYMa4YQQW1DnZ92q3mWjXmNn4e",
  "key23": "4MpndXbTrmdoEmmdnk7g3iwmzSkSD8Ccy5JXDFMX9KFefPD5wa6cFgAo454Kjn7cWss3ZADuvcjAdgCcSjoJXbkZ",
  "key24": "4ZLAU6QAVosUaMb2vR1UHiADZi1wqeHgyci7F9xebxm6y7SyiDT1e1ZP5tRpT8Yg3ECo9ouqRrojiK6t4fNcLR2g",
  "key25": "5qh1xrifzPrQnG498nQyDoabnowDHW4ymBvAAkUhz4kBqe7eRjhTL5eH3GHxnmmNGgDFJKKWeUQCYhq37kMaFczW",
  "key26": "3yNkGU7atXeSJCSrGK3YrvL9H7CGs7kPJVLMvnBC1JNcn8KctCsRPEX7rht9XDCpFFHooN9RhNSUieX35Qaie4yT",
  "key27": "3oGyefr4zKChzyXRZmftR98ECH6wRse4UFHufU3gfpRnvmgFPbCfGFvza6kDrQ8eXFMwRQyW66eUSg5TJknqaSLx",
  "key28": "3kg3z4BgKAxTXwAJZweQzzUMZuaUcWJvsfkteAzEvuw5HjugrWhSExc58mBHFDt2D1g9ac7UDavHWQ5yuGFSgQr4",
  "key29": "5GupzNwkYhP2EDt8F8hRYAoiQ1mxvXUgsd1AvRusUVzssmnDn9AgHnrEcyAGCQjdwsJqNvUwi3mLKZEC7csbNort",
  "key30": "3xSVQaWvLp4QZ6njvvFHb3RgwAAfT4H6EmgNgw9Ewo5HC7nafG3jUVgHuy2NAPEGnMrhgEZCT4LX84xHTVbNVqp",
  "key31": "4kht3VkD2bSj2RZoqvAHLbk9ntszsfcbiGSSNfMJKQFtAB1GhEDjwXcxrtk6exs2DXy8nSLxQepzA3kt4Vri7Pr6",
  "key32": "4k1eSeKPEy3cf2WZ3vDJF9JmYMFyqGvfgVrLjBtJATeK8ieYN8eeVBjG2HBPZSy95e75ykb2ah6vnzJrrbFpWe4b",
  "key33": "5iqQWNwgsJnUFBko37e9yYFmkAdo9ggiuuGx9Ns7hpajwrGCQEeu42YVct6iDav2DgpoC4Coor9cyktMMDEZS8sx",
  "key34": "5CuwxeLuoN36WTHQTPDTFs4wpVkTmoiCTq8wkwk4UbSRCH2xwwoRwAuZK5sA5FPnuuuXFrYUqkicoEvc96dtA4Yp",
  "key35": "RhdUzWVLXXy6DETpHSnpC9MmqQSTunSmnRTdZZoJEH6VDFaz2Paby6ZPt3zTM2tpBQqevqK2y3z8PFxytx1K5Ci",
  "key36": "2GvhBZyM5dMRPZYsoKYEFYoFUuFJfmCYdtRq8xL5ohVZvBvLMhM2NpD4KbnM4XcvFUKUroAwGapm1sq6efQ5b4uV",
  "key37": "5qo5r8QxLMByGUdUMAzvW2sPMV9AYBuBFGUySEEKTfduui4hzhKjpmQzhVvyEdQ1gKZxAWQMw11pUUk1u3JPkgVu",
  "key38": "5orgsJQJshQnsvcxF2tturuanzU6sN6TR7AimNqayFj1Moze8p8FYgRw5rTByUFUyButvgwdPkuvv3z6sHX69BZp",
  "key39": "b6jXzTAYPAkX8dUhNYTLjiskKZvGbix77V8rvWRQvZG5B964ctcphYC6Pw2bwR4Px9myjrYGU8aD8M4bYKfXWoy"
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
