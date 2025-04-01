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
    "5a7dWzkSkXfLA8NxRLd2CWACe5cgnNQMzJVzTkRu5dk36r38HuVicqGEA48jE1hv65Ngduh3BetJZ4qWezK2UpvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uE7YtuRQbFbVrhGZXM2odRLpBKecvTxMAjGe3Y1yaQcNALjgyZzKp6rycGGQbypQq7GuGjVxTkN3zjWREzjTAcQ",
  "key1": "2Y2mb7R36siGo8rmxUcGWCNoTWuZBbm2xNG7iKoUqCEnwy9scv2Z3NLyjUnLoPvv45zyCNnJPpCNNrybRPBhaGYH",
  "key2": "2p3vN9W6TgrRSteSEa24x3XmJ826uwt63p9YrCRYBYnYZ7pPTJRtroXn1XnLfYQx76S6UY7ssSzLqJLTQziKMnTK",
  "key3": "UBATJHi1KDufGKSxMupWMMbMHBzrKUreG9nvGw3Dbw2AmwscSNgBBS11KGhbh3vLH3bU8k8Ja15JYn96cEJfcCe",
  "key4": "2FjQMk2Y4xZKru1h1hnaQb6d34NA547GRPx7NYDZW8y6owYwe3YpSPhUNeuq4DRuj4AZj9xMVgbaYkm66EkgaPmQ",
  "key5": "2j4Cjnu6AcR1Ncm1n1JLCqPbif1YemyzbLzmEAtG7nKpXvCy6gmqqRKmoStA5krUdRKwUT7Gn1iZipSoLqH4Wkbc",
  "key6": "xU5d1oVoHvgj6NG1gSdke2UUUq5wVahPKTKvUXmtxZS8j4mggXCRPCg53a795D1DHGTF2bnYnSgt5cYQhwojXrE",
  "key7": "PXTPSGkY7SDPby5UU6F4YTCbfWwNW11gHACS1fDovsbqmgecJeqDjREMN7Sz6nDtJK4eEfhamDtZY8KCRXQQdPY",
  "key8": "2KeCNkPx9qHn5fQ3C24bDSNGudJ3TWGCkHTW3W41jEFgmUv4adj2sZVAMyGySRbsaFzdWSwiGhjUsxf5dHmc6Ezc",
  "key9": "5BVjVSsiardGPhuwbaLi1c69C6dtb5yhNuDT7M3UVcpyDP9PedDH2aC2SKAUx9hbRHiNkL6h6keEnuYFZk9CyuKH",
  "key10": "5qwMGh4hwtjtJg5ZFj67q8xY75PJaT5ta8bjymkN9z51dR1umCYpCZmJjCAE7ifzqj5CtRgYX4SLFEAWonavzs4v",
  "key11": "2irBSPyd7zX1MnrYGCevnaFTmdoSmd6eiu78mA5hALAt5YYcMFFgLNY8vfjYmfLNQVGx6S7id4FvPqshAXiWMuWq",
  "key12": "29WfndrtAkKbx4etaXVNXUBQLtE9xEfKj6bn9H8UHDo1CBynhpiD9kccHwfyYkJo9CJprX2weh4NoW2u9q1ETAWt",
  "key13": "4D4J3YUaQtvBqvAMp6L6xf6fJVKGN67C6j7VhUHCgom4wk5aV8UZwKjUZKHoAPWWLFhZ3suVPNXsh5rcV7ak9JDX",
  "key14": "3wdrvZkkp3HXStwEFwf55EgXWnwnG4KXsmEcyjaJNSQW7qX6dzMLiYqJpjbrmByyMXTXLA1ZKMUhH4fRewtE5tK5",
  "key15": "56jxMGZdDF1n1e5LXyRgPRYTmL4HRiFoipARq3Bxr3YYeguH3zwa7t5JQgcWDfBcaE5o7fwD73zRuaPsZwrgQNk1",
  "key16": "qFiX9k6UdpRTWDGetSdEWtgGg8frJKq8JSso2a24YyWYsr19R6Lqhftc1N5mUQDbYodxezp4xjLw3yjuXGfcULj",
  "key17": "5G7W4rFw4sMyqqSBtPCFZpFTRzrJ3dbVemVcs4YEtg9jaCDhaHUNzoeC4ybtAjU437nhEsBRi3dizV88tnw1PHH9",
  "key18": "2EMDPazF2nshVkn5RcAxghAhRc4fuxr2P6CS2mutLP8CVZZTcnL5oHdP9VsC6LoLCNQWUAr9io3ZAo58gyDTEcU2",
  "key19": "GH9YDsSmEusTWMBLtRDnH8DM2MRw2DFVjU5xpqzgJwBbzmjBYyLGQWDNuheMEsEgAQQNx6X8mvEfWwyqDCVqvG6",
  "key20": "2bZNaUgTH9WdfDNfaAeJMsj7tjP3s8574UWrUJgCKyf6xL6zdJHq7z59fN5CEBupRKBB5Hy7Zqz3QzUzHgRhuPdJ",
  "key21": "2yyYwgfzLaZBNuXqQVbwcfP38kMTgjCvFMngHQYJSMu9ZTxb4NmN7kyqPLdhA4qdiwEWN3yr3cKtPufNmxFXLmtU",
  "key22": "5dZCgdGy5Jk3QF3HsmCMuQf2dpBpbepRHxx99esnwVYbcgmoeR7ch91MUZ8g6XWDTm2Eco5gTwCsCun1ReTWRdGn",
  "key23": "3TEsDsDKV5p2Yq1dcGJSVc385X2oCpub3Kdy81A1q1evP2FaHBYxHvfukNAkB4SuLbhwXvidsDcoqrv3ZqndE4He",
  "key24": "3hhqZu6rfAqe9kT2NncwEB5xBa2r52HtktjfwqpqasPnB6JuhH5a5AJqYxsqjqth7EHrgr9qu8RKcyYX4sgj9VmU",
  "key25": "5R6AcvZ1j7FYmPgwCahFC22qWBg7Ywr8HWcTiexKQUsusYH1by6nmm8ofA8E8nFWW2bvQZG4KQaTxHoFy95vWvpJ",
  "key26": "5fSdDNv4wFaPEfNmd2ZfeKKs7Y7FDQMGzheGQwbbkXYUkB1KbwQqj4GkrXtppDiUNsvCtWRvzrzU28RGoAhPhCCK",
  "key27": "4zvNYfp57qGMGQo9H6VbMrwdsPSZqSUCLQ5Ru3dvEdsgcMhPTi4WymMh5JT5Q2LGQGVCfw5h7BMj8EkUuSQkp8oy",
  "key28": "4uciL3ELSL1UFGiQntN8HegjLPyBj3dJkGF75hDJm6Bp4n68WTRrZXJMfkZVMPiJqTbwiEvwG5Kzum5TJP3QqMyN",
  "key29": "5wc8HupNR8P1323FdUoDxKaRSEqH1qYar7TeC3MksYTdpNNKT7HRmPpTBcLU7Hu9huJ7cpmCNfNfDN11bCUpfmXX",
  "key30": "3ApV5sawg77yW8WXNkhWLakhY5Ysat6c7qCKYbUmdfuf6QqLK3VErKgnq9xWscMjKkrtBBgfpYgWyWv11gMZCFxf",
  "key31": "gXhYJjXvdWvDUnbaMFwdj2tfk7P6QgG94Hw7VzcUpA2F84xdxa1p5jcswxgHxLh8nWwXisPw7jRnhkY2oruhBpz",
  "key32": "2sq2JQkmsytHXY6UK9R5saU5Rv1Dq6REHDtwoUqYFA6iRTdvS5ReyZjrkwaGp9WsbfkmvJiRooR4tGgjVE6gXHxD",
  "key33": "2Yu37xvg5rSBEqXiyWPhGkrdPLFUtrsk2NmA2Q9sgbyC4yvQUQF3KEs1JR9dBZyGjhNyWXBBGS6wb12nR39dGZR4",
  "key34": "4C3bh9dRmjydFhfshfZmgXy6wehGiHG8Zx87mug9n8ZA5oKWigRYTg2GLZmFGJTjUrXzr39n5Htt7jJci9Cq1KKF",
  "key35": "BKBGvqgJZ6T9NLLtRFDpGvXJ3y5SEMQTLvmJGUyundbLPzoFFD7pTDC58QKHtsoLZZLPi9VD47BAeGwhbZ7rNmT",
  "key36": "41gHzGbFJdn2sfRn5nMMR3VkUifs7pYwFLXzjqMzX6gq82Gmro6jWiMr5scfX3cvnPzs9anBhFwnNQjnsPSszw62",
  "key37": "29eYzu5D3wEw6cvQznV5MkXTva2TCiu2TDY4J9TDhrjYTozsJMzhbxJwXENPwTyRL2aaqijcwJsQpMd2DpTYK5ob",
  "key38": "4BKcCGZZ2pUgniaRVPrsZpyJGVZQ9N7s5uyZNNAXcS5UeRSMPXLixMMzwJD2DyVgJFMccgtWJNT15kvbPZfvGRvL",
  "key39": "3cK66AFFfkUTHr5UHLmuAnfGtn9Qfn1vx1LXUWRQZnbbPeumBEWcxzPk81BxAm9XmtmdvuqFt14xy9FycqP5gqMM",
  "key40": "3KCr471o3Mpm9KLjyCTzHH4JFjcq8pD2rKGSbDCEjFpbDSBNdqmj6Fw4tidJqgLTKVYpRVYUcFdA2WdQZ5rB5kSq",
  "key41": "2FhZ3smxocEybXwkedcDb21EivhCPmuko8cmUfJgqxeQ8kqPJV41qXqiKicC5HdKfh5S7WLgQdswWPPG5r2zboY3",
  "key42": "4Qd8DKPNPW41jSys3cytAwGBkUodbrFMvLndUAw457iRcmLKYv8Ngc5Ap5JcbVBPqAjXymdnxCMjeG3VoDMm2TVs",
  "key43": "5A6uXyerhjgmzLKcEDzoWzFSVZ15SKtgwf2HBvxEis4Z5q8NzdtqTzKdjxLujDuYKLRBeWnGagxKSuJfv18aAkUd",
  "key44": "5b5hpQVvykQwz8FiJsU4kGssddSgRpKUh8vhUCWPHCzzvWaHDAGLrGXpTC8ciNf5o8S6uGidnuQx1vHYPwMv3va6",
  "key45": "3mEhMJoW5Fu54JfeYwg6tvX4e4io1zcguMH8fjNJmQiYepec6z2kU34ZYjw8nYZ95zKvzxVFckdBjgB1j4Tt6pDy",
  "key46": "VMBDcF1hJwRuUNFeXbm3F9dmYuKrU6swAMiwtg2kFzR6ekKmBsu8JyGcgtPJjug632BLxcJWkSNNAJtMuQkbyif",
  "key47": "3gc6eQsCbXXes8ppSyjy4pEC6Gdh2tT8pV7PGERMmi6QQiZdWeFAx3yr6N2L2yVLAvUE7Leqd4o4mbexg6Qa4xry",
  "key48": "5gr74PRinkopWrJkYDUhD7LDTUgRBV1XKuRHx297fD4URysAvKsy2v4y2etd6pMfdvSoFp8yT4NvjBpUc2nza9aw",
  "key49": "HkW6Bmvhd6wVvCNPsqmSbJB1DVyiUwyejqWMTZkjJc6zbEioJSjwpN5TEvU9PHzSsWLPbwAt32CyqoxjocBshUf"
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
