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
    "4cxLhhad5UpJ4X975GdBkLMsKoZ5x2W6PqPoYYYhZb5dR9GMR9r4q923FkJZ7QUn5ff2afLFrV9Empjhi3PTXAPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39H4izVq5xtYSxmtiELFsBUMwGkyyE6V4rw9vwyFi7uGsadmGumsidJrBYkdRji6TUZgwZQTueDG6w24rpGHPq1X",
  "key1": "2FVP31dAALYMqcZj3BcAyzQmMgySLsDA8cKa4GYQnKWVStxcDvNePTJ3WUbbeuYYnuXhmd8y9NP3tYcNwyDHJcar",
  "key2": "KYwaR2pLyMRVHgt3HRQKbfBG2SU2Lbxvgp3D7c22gwXYaYDhjjwcJmy5Ep8miFYCm7UWMym98UBqZ5vXkDLMouj",
  "key3": "59bmAQdtwUbXRwWW3qgpNkCnqNqo7g5VKHBCuB9ghN4ZDiThPc3w5TVZtNfvS8BbjTVfzJZ1Se2N981U7M6FnCjr",
  "key4": "2PhxRwpbn1fhVu1PUha5oJmMDvXtffSczU7Vp7VVYZcgaog6ZpyXB6MbKJTBcG7iAEaUa3scncJhqazQmSFQ8boM",
  "key5": "xrE1DcZMP6ar6Ut2ChJRH6QtKrDKD1ro4LGBz1PDLXEbSyBR9r2gv3jiZewc6ddCijg8FBgv63vCcF8rbKKeyHB",
  "key6": "yGBxju6MWBeYfe6fEo85tL59p1LcS7c2KTAb9zaJuZqekSckgGTkoSw9UZwkR4umxmAji2eSb7hLrqz5SFz2a52",
  "key7": "4FSmt1yReYFX3iRgZBqibAjQG9Fk7PMy3WyhbMXVx3qfAEC7bRWWF3WLChY6dLjkyQatdE1t4BcwWJNZmthM9JMc",
  "key8": "2fhsEGjBxq2iQUboBR9K9nxYAZdpBdUJA6twQV23sysPbucVmkPuJ6SbBxgTBQrCsFppYW1rGza4kELPFwhb56Ew",
  "key9": "4aPUtmjtMxtjmfZff7ALc5P9L86z3EqkFbsSYqXqadnqQC6x9yz9FCmSUHLPWVALDi3DwbWW1pkGaiynE8LegCgt",
  "key10": "kmCTuxaCPNDRp3GEWE4Jj58i998RDTuVQmWJo5j8aEJgWCsjviBsf1vf6h7eKFYWgHieqwXZxkXC9toTTuY8TMA",
  "key11": "3vx8KxQJRhSqb3Na5RgJtWyGtqG6T8PfGHfTFe6429Rv2Di6HQNkG9cdzt1QCcpnU7v8YtBTkCgCtXkMqqAbG9Sa",
  "key12": "RqLjbPupVrUVtarhsoeBJt3LaHeAWaUk75SuEzMzKKVdWW5U8X1VF3ow3Ehu72sXLuehAaS5oNCPqTQXYtjQpUq",
  "key13": "3vPJnFmsm2eU3yeq3Rp6uYaN6uLoAST1MbWR9BqQX4kTJYEQiKpACGMfTUDkYCfcuii2jYy66fMzaJA6vhVvZ3NS",
  "key14": "2B2opRU6vvbP7D3DivdzoEKW5Kx3iCShGpZ28TzPUox8UNT1npG9qZFJ7DwTKdFfums2F8eA1DMWGARtZ7Bghbno",
  "key15": "eLaWP7gyR8Cu5WN1g3XXCppTMgEaV2AVBQXtVD8jMLLLRE5btAp3YdsTnFvB15ZNEyh6fs6eqeo7zxNjPVG7Ta9",
  "key16": "4t5ELRPGTLXnX7DU2ghyzQmvuZpbU4wNE9Ytw7pHaSTuAaqXFgZwWYWwYfFEXdBtLCEeQsyNyWVdrso8b37RVRcX",
  "key17": "5euCu7UWdUDLGNv51MhQGCEVZLdiDUoJ4dj1tpRspT448goDhE9TuWGGLAxSiuMoRPHGBXnEisi1g8kJiQPbQFbs",
  "key18": "4u9M3StKpT44tEM5VPmMUJJztWzPK2mq879SiSKT3fFqNh4LBo7UjMskbseAbRdcqbk3xfRcEVT61jGBSdeFrt7S",
  "key19": "KqTk1FS9AfDZEVvF7XCmXNv3G7UqviwLy48dA8Q1vqEM3wR3k7PsqLvP1Y34ceGynBNzdR5ntzFVFs34fgZgtA2",
  "key20": "3ShNTo4DV1tVikpZTZ37e8XEub9CPELC3NtMkkVkCCRZNCF8TAP62FwfTMWznLuGxSDxkrb4VFhrWDb6BfLvy3Hg",
  "key21": "4XDgPwMeWuWswn8pgmhhNDd7mrZRE7SsCBfzDFJVXTmJxvnmPqBcKx9RwmY35barEfSaj8LTbgqAei2Tr3D5pcck",
  "key22": "2pvT3ZN1Ssy3xWtrk1DGbyyj5SBGPyx4B6bYjKgQ4qS2C45G8aCDr5c8JUwUUERRxYerXKkdNDKjw5RFVRF7pExf",
  "key23": "3b4QxQ7Nmvfim6BTVzfFDWvGWsif1kLha287PzyMKfzMVVMb9K5KMHQtc7Gan5Askqct66wdYwxydR1JMXv9pLuJ",
  "key24": "3GoRyQ3Hobg4LHBJykoYewZTUbfuBU9dLEmQ7CZkPWLKsLwsDYXwiKoK55DvSWKMH83297L6q45LCTHV4HTq12ut",
  "key25": "21YKRCetiwxHrjwC6mbosFRzVgTgyU4HjFcsmvizE6PLMs8CY3qowTGZgiaxDapKd3wh7Ms2yRPFTf4ATvJ3FGGa",
  "key26": "3QbnQG4HizrsHfmoAE9Dtj3Bpx5Z6GdSGtE9u2Zi2VweGsHTYBv59CoHLXH6i9YXHubZJRscjsQ8CJAhnBU9wFhP",
  "key27": "srCJZNDuhGF3kYS15TQ7LC2cRcxe52MSwSiGBWKULbcNCpUcvTFsmSh76v8yuqS1nCt71kSFXLrp9FnXLrMGwya",
  "key28": "3ekH9j9ywYsQE4RwfVwwPt3EWR5CfqFCeeXhabUYyShMysq9qr64s2W2vYdom8iKACScwoQppQC2KZVxYaC5UDhj",
  "key29": "4Vb7QCfEkbq8RQsEhGdK2shoCJapwKuiL9TxQtFuMf9GbvxnPxKAX1htYp9JAaQyqRPWPdkJp6en2yxMfNnkWS3Z",
  "key30": "5ouqTRDKAap3fZo1t8kMjg7Mi5btjwv5vHuiarRjsU95FVPuoCaXXhrP7X9uFhKFiEFSi8oKL7txkN34Y4DgNE6W",
  "key31": "5yQi3xYcCByeKPCd2wzfYgRuCbQPRazpAjrVP1xtQYe9CAVZToy7iwhbg7FkJAU5qmcJbuY6i6L2BndgKkdAeuAW",
  "key32": "GpqKp2saT8Rd3tsyRdsQw2mJm6EkS8zJNLxqjQ62jGp3oPZ59eXWkgSA2Y6SA8RSoTnSXts7pzJvm9NF8vvoaeY",
  "key33": "4aMo3FJo61iZRsuHa3bRUgPRRePvw49xBfUtB3UC19yx6SdzYwSCMmhTT58ShWK5WKYQQPGYLnEhuq4dHQMTs3aD",
  "key34": "4pXcdqu9wFAqSYc7HhYdVEfXFSX5LZCM9RJvJzqNrWE8wSNimRe7XwoQLj8TEZWuuJWC22kAojk9ysEUBGUsZfTN",
  "key35": "2juBPC3MYLg3yvEYArFXTQAw7pNrcoH9cvGQfNhJQhT9fkssrQsjBA5zFj8hXkAux76UYh4h8sqADbtAPkWMxWoy",
  "key36": "2tSUdkxADXaDuvyi98eTTJPKwrEeXdUS5dMBgxUbkEeokQ1sAzCo8MV7mmbQNZ5a9BUsKFErhe5hQ6JquEk9rx39",
  "key37": "dXVsNHJTYFyiyb1apzy5dSBqJTAPCw1LzgeH4hxybCCyTzZF97T5qh2VS7aFmQqJ57jMjXwbMvwyFdN5FiwVoSt",
  "key38": "nNU7xArmZcMyCvdtQPC1EQwzYh6MFY7pWe1VsXEyM87xb2PywwEfmhV6RHuyFnodNXCDrcVJdnbJtJwnfNgbpdg",
  "key39": "2WLamcem46d5kq5DWbxLoBjCvSVF3p7tJPhpaD79iEqrv3kwM6z8H3feNaaZW5UNSnfNf8auBkWh4zj5ZSdH1gqc",
  "key40": "4JjQCmgbd41L3ww9QNgRyBiB1v2zhBktEfg9ugMSzfWNyTB8DgZxhjsSKeSMiaWzEQdG3UrvTti8nBJFvNh19bd2",
  "key41": "65JPW9Ek3UfRbmVe5QTbid4n8MJVaUMwkRnBYrX5fdgrFZabmJBky4DetYwoTVbdTnojoFJrxua8zCGDHqnUj8fA",
  "key42": "k27D59U6VaVHDuHdcL1pLmGDdT3k9QNH4rog45STGSnkbCLcZpdw3po4Sy1JuH7edqijMc5yNwdUVD1fA23No8E"
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
