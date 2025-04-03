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
    "3d8XXUrH7379cJDXXGyBah11mzEYsRWUcajtHhqETE3GrUqDnN8gGuRciU2uTv8Jb9cUDsYBqcLJAsmAoBzshFBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zubzXDriLSWjwiAVV3Gt5FomMZ9oTeAG2PQTe2qQcy792y3VnFBqfSiFYgV1Fx4CRGjrWC5pSgQA9sanUae8MRQ",
  "key1": "48k1QNm6HqJeZSznQ4uXGffYXuLLyhEjtULgAxg53wnpyfQkbyCAnmQQxd5khCavzrnHEy129B3GDa7HirTZ25vy",
  "key2": "5CqXhz7UVELJr2rYUQDRwdNj19vGak2vZu1Fd2iBKXxLAKgtYKn6M4cn9D1QKHBDQVxXwkqdotvyERdwE2Lch4rW",
  "key3": "2QSrmBJicn3FcSs2RSbyR8rGHJecPdaVRkUBhokXGoU6vgVuPQQA1VzZ4Ak4hvJaBzJQMEq3r7biZog1m1qL3n7s",
  "key4": "wUovdMPpE4ZHsrKdQWpsCMrDxNeo2DuCPzMxYVTxwUjwh61naVXWeY63ojbjzE9tctbhk12SCZvRgCKjWLywywN",
  "key5": "5hrmqp1Kf887mnLUUf143sGRsuzwp4qj35yDVG3Fp5naqP9dcQPio2F8tsDs78XSL2KiVbw7bs8pC8Ks4oh52ouG",
  "key6": "gBSeLn4KLwv6LYQoXRaQfs8duN8o8AFsVUZchMvkKscoKaNLNSAQmozbRVUKajvm1jicU7wWRGqHU7BbgUHsf4w",
  "key7": "PGTqWPkfqEYfD9kAyJFDmTD7jH2uEdbR229QRefceEsXQzWJLjattdbpXu56hQLxWeMBRUJL47ovbafiFbcdi6q",
  "key8": "QLet4xBSvyNwS1CQ9jkAxb7GhckFWAsqZG7MMdu85stDuMD9BP6neeo3bQeFMdbHzFyf9tvxs5z8UUFY5UVLGgW",
  "key9": "BGSWwzhAvrnWj5ZVxRrtm1sunMapho3FPjoGwV7wnb6bk4WmdjfB3oDd83FV57WsuyznJ52sWmmMpr5U6mos8Sn",
  "key10": "4K6PkW5fwrjjtZuSwdz3qp8xWbS6e9LQo7P62WgnsP3ejHXNUYkKnTYaKLwmwiGWdZySzQWH6cVyyr79XLUVLh5C",
  "key11": "3duu7c9Tz4o6C6egQML4F1k9EjKrtszkFPx9cZVRERuihxJBQS8zhMeC2AGZsRW6HkifaL3XAL72QcocqMVHRpDz",
  "key12": "21srS9nht7btXtrwqQ6piW38PW6odkuuB6N6B1UwruvepkoRrHk9kk2K7ScBs4BiFKHHfqtdXDao4PYbtqNTBqvX",
  "key13": "5d8gMLkketqMKYYNeXaEg82ppW2gWn3ME7fVWxypBPjWe6uNnPGnEuWKGHRejxf9fkbhjibxLjdYoUS8GWAHXr2d",
  "key14": "MwUjVEbxoS5ATGqh3637TM6K1zMBoUFJXeUcTWbPBaWgMJp6nsSbMiC7dvWMdbivTUp2w9c1caiLRPHeuj3c3xD",
  "key15": "2wGFHNDHi2SvidnZiAqwVEd9hSG4XshxD7D8K46TEe8QAj5aGtp3GTbG8pZ93gHgzf2coXUkhoRWkY3PthMgEhy4",
  "key16": "3PeBBGwwGpDEnmYMGonnmSqhcLw4Td5t6PY6PSFPkLWvhUWsPXduubjMK8HhaDV2U2Vhts2MnSX5U7S2c2hwLbu6",
  "key17": "49n1BQDsMGh7yd3HqyscKBQVLguTwdRZeT7xZEUaeoNyEPYbiwmhn7FM7vLSqATJN1iVXNMtiiwvqV6NyLRDU7A2",
  "key18": "U3oSoXKbET8cDdsjkgnQDuFRg6ZEyr5ywFYJAb3xju3Lc8t23P5SDAoo65muKjmMWwMFXaKFBVQhE8sCpX9bJaL",
  "key19": "mcLmbPNpcHFAUAMiUWnmtijG6VPg4PwJnAedcw1TpXQc2kkgFNvuJjEEUvKo13WuqrnenB8GKZWKf1KddMZ6D8a",
  "key20": "26HwYr8s2PkS13qUTudwPaPAkWrK2XDHDnCVymfDaQwZ8iBcVXovWHNmVU1iFacrLZiBBBJNBWpbh7hcmwi9EA7T",
  "key21": "4yhUqgj6PSkqxE5tyUiG8Zud2nk3qYoqMQdFvGpGYFGz5G9jppQHVFpEzWDZfu9Chgh5puAYTuA8QfuTN6iingHG",
  "key22": "3Moj48pgoAkdsEPVcAtGny4QVcucqi1Pjy7dh1ASCsNeZaeyfjUDHV5cxwoEKFUPcWYGsqo5gEEoeuv3bd3hW1T2",
  "key23": "3dvtx68MJaXsBwXnEzWYT6Gz8wevCsTnKavgWCFuu8kmeXUpUUSykaK2mWBXEUzaAuLVZ18NeAt8GusuaS7CBTUB",
  "key24": "jRhoBYYcCpbosWvAkg2iX4x5LYwD5ve2rvHUTdt5i49ebxnyJA27A2m9DUjjXsDjLiUJScm4z3FX35ZuKpFXyPA",
  "key25": "5UZUdYjhPEd4TVuhhYQKfu9dfQd2PdBwgFfTdsjgmXgA53HLzyjphy6fPiFVKc1Eddxem8txRvBtAdPBZE2SHWN1",
  "key26": "5aZeXb7sCttckJLWZ1G91SVVi3ns94aVUp9SCo1QzvncXQV7GGTD1RHqRNFFyHvmoMVvuTwnt6g973tU2QaQbyAN",
  "key27": "3vGf1ReUppemFr9EYBgVj7Surmk3KtgsoabrBiWmbm3z39jqQg9k6rErEiaQfNTn1gBNvhfbkSx8WpyxxBLBvMyg",
  "key28": "3oYzt41uJn6yu7fDUzxNTgmihMZyZ8RS7MmBkzhxzxMKqA2fvWS8Y3RkicE3H4p5wjNx4vcFgAzA7mrBnovZX5FT",
  "key29": "5Ai4CNTJnUm36hLFuk86HpeBp7pvLYt7qugG7WhQo6eKUpupXMdgBTzsncDo1sh1pR9bdMvM6Nicze7kw8gPybiV",
  "key30": "2imj3snDKCiDMCrSikbj1h482VtDAKrLqqGBDcT7mUAHkxQPkTNV5RuiN4enX2GDGJz2xGMKFR3aGA4JCeMcQFUJ",
  "key31": "41YVAUmdA2JL1kk7T3qrc8fx8gT2wAoC1p8sWunNXcWVHGXQNojPvR4DBKk2RgvF3pmxUNv7QHBdikedVorF3y9X",
  "key32": "3SAiKBuv6QRhctiXbj5h2WERSGMUnVkMcbok29oNQzSHJS4MQVT3iEUZaAQ4bRQKfxRUe3oNzGCP8M3PRFxtf8ar",
  "key33": "5UzSSJGdurthNeHUTg4F3rcQrmaAotBngndjgGVtW2zKG2mrDQZgxRaK74XKTrVh37tDVRrgHJTkje1QsHBUQmGh",
  "key34": "34x5L8KEUbxyjKce4Qxcp3ufNkiLGoy4BSen6HJucaY7spnjUuMMzkxwwjqsKaEULvsrrABkKJk8y7wkXAf32vcq",
  "key35": "5DJT74TK2vRUb6ekZ73yGThUS2EuyQTgQJhwutriVD6y9txcAVcMzdH7mCfPgNLv3W6c3uPWN26t1NwK92CF7rva",
  "key36": "5qX3wSsaba71PcVMZBSwFKAwW44QE3Q1w6WJgW32PSKHBLdLdYFuJJAAxU6YYrRwD5bDqxqqznpNVGdyMbSssCZZ",
  "key37": "3KXXSQ4N5Z3JsuPA5PYAFXSX2D7a4mTVFauq911DARwtUb5kh3ADN8MVGvjk5cSipUjAKWau6WAeZV8U4u9VQU9d",
  "key38": "ZQpsKH1fHfijE4RXySJ6W1whmEsrxFdLRNTfXpcE52UHcg2YzkZfh5yDjXgkwDeYtvGs2vMghtymptyey791dYz",
  "key39": "2krD3HjXn9EhDwfBQN126oARsNhPFhonNacB9a9HSD84FVzaMULUntnTAX9X7DWtMvfxzhRyqqzG2kAnp4KibhPM"
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
