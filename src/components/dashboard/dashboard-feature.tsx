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
    "4WVrjJJEAdqxjy9naX3PqDDHtmiv2ecEUzxet1EyM7Rpy13UsmcZN7D7ro1Y8ZZmvLEq4aqRHe3sMCR8P7ZbfKwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWR79n594LX7hvJfxXMqkDGVBpKqAo49AajTY1JxtGZSZtyHSogKRmSXr9xHZFwT4KRXt5LdTtv2r9n36rfkUFS",
  "key1": "2gJa3nm7rvdcXadFkQHEcHgftyF8ZL1kfiv9NeFnyKRvMVgpU7io3yDpxANJ8FYifQTDVp2WtvJgtAMFnvXA1Kk3",
  "key2": "2gtcWTuRWWspwn4ELvR5odrP6ANnhvQGELnKNs5x33RewaXaMDpZp5U14gtXw4ycKLeSE3743aLw3FdLfRsNntWq",
  "key3": "2TQ1Dz4YGvU8fefjLP3Eya84zFZv1zRLPATzDQ9fbyDP7JFupv715rd1DtEreS6SWk4gVkmq1njPaYge6UP9bhq9",
  "key4": "5UsPcFmyCkyJkFb6zc8RF341QnKcw6CawMrEnyqdFCn7JZNBBp5wzALWdUXthLUvwoAviFzm4qU81xzJBWUo1Bn6",
  "key5": "3LL24DtFx7BJtoPYpZQ6BiJNVCkwWbURiHeytitkdvJFMV9ZwZ5Vfzq8ZufQkyNdcHvkAumvqX2h7RYFo8eBaLSw",
  "key6": "Ne5BrJvcaign7cjpHxy3pCyBBw4H3cD6MrQvyFu685G33CqjvLzRkFzDPP1KoT6oneSsgpoVN9PLBzJwpFASVvH",
  "key7": "XSzWVEQp9t9RbJ7KsvGWKjrQkuaEFQRUWAWrBW9Tbmx73aM2r1rrRsqJ9JGNiZw87yVinK71FfJTcM4kpveUv5j",
  "key8": "2o66ihbNX5mWuTwtdEzBa1rw3LtvS6o4fmd8gUWsQqck9VjncDYW44ckWr9xDXDULQfgb4VmhbGH9c31G9CtARNT",
  "key9": "3utFSX81kxmAre9ypYe91gUjzCxW2YFRfNfY6rDEoxMZmJ6ygbnCyLLYD8qsTYUTBdCG5YscjHpsL4U1fZz4tCAR",
  "key10": "5mMipX5pBmodxd7nHYAiSyjfxPbWqEaV73vfPtXX6NsLHJEmcT9JkQhZ86s8E5ZTqQB9Ev9D57T1bC9oZpFzrbEu",
  "key11": "5GZ6zbMywA4TS9QddJhRnjbPTTDriQyxSGgkkSfWHzDPN5TrSbccJ6Jx736ieD2QiZzUz6vUeHUuV5H6zJDEjBqZ",
  "key12": "RtPNVNpcPmFaMkwj9HNPTYFKKKEsXGoaiYXXKparxqQJQ5dqWqvEbwMx9uoi6WtkMLQQ7PbTjvmLq6AW1nay23b",
  "key13": "L46pVLDawiA7kp3zVfbEqiRgDAyYQFCSskexxcg9Rzt23qGzso9MCx7zyQ7pBwaX3p1qhbP62QtSJvwuyVJF6m9",
  "key14": "4HQ8dubq8PAv2x618SCx8sUyhZRn9MaPWx7ARxfbLeV3kC62HYNgbdx75VydLQjKjN2Ft3oQcLV8FT54sMZWU4YU",
  "key15": "5o5KtWAGyaDzwC5bh5rEZHYe1qRBSPKjfMZd4m2EXDXAJreX6q3rUXD9FUTnzafcsGUfK6tmjt13iud4D3RXVMDh",
  "key16": "AVv7e2ts23V5pwAmBTejjSHsUQUaQAxsn2fiNFCTaBt9X8nqBZ91XKPEYA9hTUq8rcMskjJFV46FJ2rTUGfSmig",
  "key17": "3oStLW4Xcz6Bcb2mLzobaGvKXx3x5WNcQQxQYFnLGbL1xwdedWqPUHZNpH1gmKy8DvEArgWMEDn7KvhGrV432Gnt",
  "key18": "48bm5tKNR3BF75BzjtGvU1RajYRpkWJZmPMZExMpu6BFU9SVUjSfcE82wawzZ1JAs4dL4nBBocUBMQMDjsoXWr8D",
  "key19": "kTxi9TR6EX4UNm93nFE3WfoVdBaoiUfY5hxK4oJnYACiCiL2kRewtkqP5N2xh42w7v6HhuHv2znB72XK6wnveF2",
  "key20": "4SbXEeScVP53DXZuuPV11upyd96QeV4qNrd46Up9Lty43kHhKywK5mieHf9ZSvyxsyBVMzNnq2fWPGLNkDYrS6UB",
  "key21": "GeZrrZh2gBZtHNsPoHkY8F2Evu8fJas6Vr8EXE3i4mMRhS5VsTBsMGkupM4FwX5Lw4Ec7uukDzF2NF5f5YhBDQq",
  "key22": "ELUddzaKPxPvWUBWcW4y5xnmDHkddD1EsxhC149bE5fSzH4pEnjEy4smeYp49NrDtLsSZ6uxajoAoqZxqiTzgdJ",
  "key23": "3bZSUbF6ZYneqCFkVWgTsc3Lk2pmnh5xtL9KCMiqzmPYosriqwz8BSrChQ6SYNzBdL19JQ5kTLfw5DLR2LzS6Txf",
  "key24": "33oMXxTLHP6FVse8FyamsFNzUqdy6aSvAofmfX8ZccX4k5UZPtk7r7AZekWnVRAKBNFTTtUvzcYSpU7jx1ZaTUfN",
  "key25": "ZBG2ie5VNQznMCWNrZN6WCckX5doiwFq4L17m8iY4J2PSGkPBwie2CZFitS2Nt5MceQV6muKvbYyTM8n1JVnwRW",
  "key26": "3UScfT9Z7AmLnVHSJMESjuLWSpwqz1Nz9UCmk76jasf6nUYc6QXqQshnBWeAXbBenF8nrKCZBjAsKRScGYssaevQ",
  "key27": "DZGHNTLrPqAppe5Q1yTyJZxtPVxgCjyLLEvLQ3P5EboWRg55fvb4zofQyo9wHUPoMj748s7g1fjkg4MmRy2mhbk",
  "key28": "5YDrBuKBEY4DvBFw3NwUv3nzG7T5VRgHk2PJKC5gaGTH22GukcAbXX7t4FPcRN32QiKpii9zTBanSLkJYpnLHana",
  "key29": "3tKoHL2T3kAETZNafK4sMryqCJ4vmzQL8RMcdzoQEZzvaXiC4c9iTyfcLDbNKMXxXaGktnPEBq7JJhA7h6Gw2gni",
  "key30": "9PifnMA9jPzk49QADoYbHeUWYjPTcDSAa1bpu53mRnFYm91umNdo5fe8771R7w38kh3gigULgKym3mqzQCMECVb",
  "key31": "4LZo9Cgw4Bjt4CWbP8tetHGq2r65wt6Eca8Px6uYmH2tHCqtYCe17Uq54DrVzc5GYbfkEjM5mFJQ8fQbUktA3rWt",
  "key32": "2hdubv6Sui46Qa4dFTJBhXd5p78CovXFGKiGLjshnEXZ9zWdbdKbkKtZqLAVnW2eiTiKXwK4v5dMc4dz5bwiWaFh",
  "key33": "4pfJTUikj1UHbhWCNiJ3fFBSsWf9JUSYhhLrusPNNatqit6YAMf8YA3Bkencs2xWW35dD4cwqbbUL7ocFwrsyvVJ",
  "key34": "4YFwjtrwBduaDfjoXjtrPQdaTWB4AXRQ2CNdhmQvryXbf3EJcsj9FavEKiw5dYKbbAG5AAPJUmZ1mo3q7EqduAbs",
  "key35": "2gJFmYj221ydKYxethJMRbb7tEB6nxp3K8WJzWsPNgm6JGGczJgh5RUN8rhtwd6MsHsSHiRzgmDWpQjCvuDWkUqg",
  "key36": "SaC3AhfRmHFQZvLDL9CSUjwLfmz5y3dpj37DiE4Sx9WbPDuz4Evqv19GapTXcZDn6BRH7cE5zninXoUMmgtxMSV",
  "key37": "4kf46snZB6NiuFv6LbsXMQk4nQhZS9geQVnHzTVtkMCRMzyZBkPTpuCfKGq36mnrEzevkcshtZ2Kr3QGkFj9H1SU",
  "key38": "5zF5y4cfeAj2Ww5aWDKSpft7Pqnv1bKj1zuwAK9WtM3s2XMqnZYweNnhjAHSqeA75LjcSiJyqHY5QD7TDehFsp1w",
  "key39": "3J7Nf81QaFXMW479iVFEe7XcsFmypzhAuGJ61vVm54YAFxuGsR7F7aAR857vSYEUy9PJNiX4t9tqbn3K64hLAvDA",
  "key40": "3sYf5PttzpCMeWraxc9a218Ud6WSmeWoLGxNXU7TYXahgpYrqpYyGPzw4Ybz6VNNi2VowXpiyJBP2EEBfQjEHv3W",
  "key41": "37dJsePhii9CzHVkaAxyWkK181oKDLVgo7TwEHLfWgyN9zEzZPaFLjRXz2ak9feAZ2Nb6H8gtk7Ar9waugNL4wg2"
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
