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
    "2ZwLkNkw2Z1LJFTKQ1H45ohyMDbFa4pxQKj9LeMXth4rkhfUmBdE5ouPBP9aoRjTxe35nhsvSjH7nhvNhwNAn7Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzgFzUJvSNQgwn5BdZPmqtmSLThm89e992k4DQiR7zSLSkyQq5chpZbsbPgtE8jLfsvbKNP9KpPB5Fdi9pakGMC",
  "key1": "2puBRAbftpFMMKYM32jVRFdkEztYnNVG7zVYg4PRHBRe1H18Dbz1YUYq1gbvLZcH4X37jnf82PdCNhWtJSa3NFAE",
  "key2": "2bTYspyRj47bJq29g5xWWXu6bxmj7u9PFehS3mND62QVmKHgdLggqCCQfmE7jmVNYdKbA7NfXMY2f5AoW2kcioNs",
  "key3": "3DeaExQfkdCeqiPRadEAZYPAdojrgp6vvtynM9cdFn18Huhhe4TNdmb1xT7dAzmCFGAJEcRhoNLNRQdwYXPoCsQn",
  "key4": "52zJWMFEN6QudrqPFUKvApQC4p6r7oMS5ndgyG2gRwkpp8aM4q8CzJuPSL8s3wTpjTfHeJH6vJi9na4Z4C1MGToE",
  "key5": "3vTb4KtP4gQa1Jbpcycax4jxFMPnSnArxmkiXeuWnEnYSgEGkj4AAfSLETGM2xmr8v1rqseoyUaYhbt8fEuTF7jn",
  "key6": "5UZgtTVMRUbixt3ZeGS2B2s6EK51jd5ZV8KmmzQ27Ws3Nx473faUa7rVMc2rzvYphzzEpqmi5uzGMkD2RtS6FCdA",
  "key7": "3an1jiQ7Eit42SQJ4d5AcwzsEi39oPPDAPqDUarB7RDkZD5yQpZE9HgS9vnruyTM7ksQYFfA8HJ8m5ptj2gLAcaP",
  "key8": "5KgvivDS26SnwjmuK9z8Cv93iBu87FVPjhhWMG6qGkxm9PPyco3TACqTdTBzzEgW3adzyZH6NdNQpWtSLsfXUwn",
  "key9": "SztShr87Rc879zTWDQGSTxfPQvKdEdQcC5W9TpiAXDWyUUi1RZZL9Gta7qK98VRFAiiVYidL1ZTjjJG9j6oCVuv",
  "key10": "GzWziymeL95oi3gDuaSTRPRxDcts1g98bFNvyJzXy8rHCwpnJKYond19aibvwMNfyzqvxJFoTMw1iBz3Wi7Yn83",
  "key11": "CAkbpJUnkgJP7Qb6ajfvfp8D8FpgT5iMEivhQDKWd6PYuDmk63apknvMgDmmSWV437HKsJEGAyTccj76vuKgZK9",
  "key12": "VB8MYn5JR4Z76fWcKuXwSME49LWWSDSgYLEJohpNR5BzMbsuFFfKWL9wtXy6AnrdYTD3uUDv6SA2YN1njoPhKpW",
  "key13": "4Tu6AsvYdcULWnrqUnnxxvdy4i2nZ2q6Xo9gc93zAhP2Lxp81bXWum5NUYb4vQAPKZ1Q2uJf5nxS31NdrH8aSYkE",
  "key14": "3ZzYUs5k6ff9YtDzf5BK4g2vs1tyAxicuRzhnEbWW8sVFJ1Z4JSNWv8i7yaW97o9cmJFy6C2hgdC9EeRrHLGAKW7",
  "key15": "42hiwxNEZfNiiRMLNenZDdSFAYvmpUHJf95WsNM7dHp544zECct2q6YYKaioRjbh967XvPEgotp84iWmWcR5PxyD",
  "key16": "5BKrVn26jkNxeZE9gLog9pC3jMj2whmerVW877TfjmPQ4w4CSGJR6Fh6X1GEGT8txa89KXbbHgB7sYZqoSjnUyGL",
  "key17": "3ebDrzZ11qtEttxtQ6cNZ3KZaLvvMWTQFdvkHCMtAwMdPivVYQwp1oAj92MiP4j9wfmpv43nMUDTFBGLH9KQPaTo",
  "key18": "4k7jWqJE3EpsP4EvPTGKMNHYCZ9GHjrvJTau419EXL1JcmRSeMEFpQdPSfVNoU5BbAb2n9Je3hB51BtN2ADLu7yi",
  "key19": "4tS2LZymzPdaxxNJ1oS2f7RDW733gX7fE7UGDvPL5FiSbUF8jtbZFhJsjf7Pw7oZwNQRCpoR5A1BJbdRskc9LGkv",
  "key20": "2aC9evTLwbSiKEGpLe9GYUobHWKqjRNM4seakPrcaU1Aji334auW6uAmBS6sMEt6nFNWQiQaMEa1kTMQyGpruPhq",
  "key21": "485EHiN7QjwRLTf2mj1oiDXq3F6ny1ZZUsgrbiqhfDpYbFjRL9Cptj4gUJ1tLDZpp6quSCqRuXnXp234FTD6Jvfv",
  "key22": "5crDtiaFYPAtFAiecM9cGUuR6oGGpwt1pbuVze7TTDvNcTDjKWtaudHdQ1n68Apk9S6wsZb3L7qg5pchGdPLDtFU",
  "key23": "3xhDQwGn5SaQs3Mz2uv1cTUYiLttB4WYEw6wFS39qTerffqR1nGwussPbE2CVS4Ux1cqWzV9yBSBgKGLE9s51n3R",
  "key24": "N12kSFz5HLwuPJ3xVftAdmZuNipfsf6M73cuCYPBwunZMrK1Epi9F5r4fS88pnzeQfGJz123YuQsJW8EgR5LnJ3",
  "key25": "5DKipp6RbfVSAqHkVWV5T4WaZrChnD7ycBQY18UGVhLXN3ASCXyqScmQxdYFunWfo8craDY8eMXxtCZaVGYW9Yhc",
  "key26": "2R4DJggVDRqAM9yKfKuVhWGkNUfQa89KKK9xEzeZBxuKe7F1qYaDqhHGfDU8SmRhHiYsdboyt39PJojcthdKUTyj",
  "key27": "5EG5teSoSxLdcemp1ihSBvYb3RzGPYkmEzCwWAgdjcbpYBTxnWZyGCBnTbutWWorFcKihof6S5qjymMNCmMUGSkr",
  "key28": "5WAbeeuEij3zqZkpd5SWPsL3io3zbNH35xa7dA2uG7dEqkHG2wWqwdYY2AimTgMTVzUuHeMpPrMYJeputVpN12jc",
  "key29": "2dTtAXT4hxg1syVELUib9bNF1iRbKPySXBvA6vGS35PQk1JuKQvppg7Ybped1gGQGhuSZfqP4fJLzhmZdwQrqiDc",
  "key30": "43XgQ7DRzeXdGTWBcvmVtABrMgUonaLcNndvM2RZ13YGHH3u9ke3oTGUnNTrW9cQ9nunJmAFrEyKVZTCJV8YjJ7k",
  "key31": "DfFy3gzL7JUXSLF3VTAhkL2ehx19mVqR1HCPZyDQJEGHt8BNFxkgS8Xkekb7n7xizDENEp3xZ23jtr4aerkZWDQ",
  "key32": "3sXzpvd8ttvFmaF9GXqrgCuPohpJjnLQouiwT3cYzybgTtULLrcmiezes5r5Zgjv4nXUhxtDdgJGyPvbCwSsUXB4",
  "key33": "5dmqMH9vSkh1tS5T7pW4SnVnvPYvye1hfgQ8aR8DhDLTHZZnncDS3UzGtv2HKL59hxkFCHXEBo9A437czGmZjJDD",
  "key34": "5iiJajvJT3MwkXZyv8xJmwv9o4jug5joc61VtVCwtUS3WKdrgCHtmEmfdEoSGebhDapLDmxm9X76jK1fciw9pj7K",
  "key35": "3EiXjn1p5ppKpWKqLN9X3VDuBwonN6FuCWntXZvEiPCFGLcxWNWaDazMmZcbXCVKW7B99zmSGDrnMb9RoNsvaBKX",
  "key36": "2thvxNviEZgbfZfBwxisufuuEaaGKeodSJN5dEtZdnMnMaToorhzzA8oqUxo9FjQTd2X5KKAgeBgzydeuHhv37ja",
  "key37": "3845EmsvXTQZKTuFV7g4rAoVd2iKGvENnZw5972PDX2cMwnkNoEBzQu7rWdgpPLfJp7w4hkk3jdoCbtqaZVKyp3K",
  "key38": "3XgihVVxq2avHt9VSBdWfRpV8MB83zWsd63fn43Wk5rd8k4QQ6gXsPhfteEpiu6UcaLbmS3gjPvg5n1ebbiGNEPn",
  "key39": "239cH1Rh7xeyRpGQcruHgiMS5vUAyi9v9bCkJwqoXXjKcrP7Bxd46s4q1jUrv7w2iHMZYEaMnRg4oJyZ9wDRQCMP",
  "key40": "5QYYG3wHJCA2HDFrb4MoY2Z5hx1CzmnrdMUBKJAM34W7touvtdDZkEorWo37NWgHyudspfAtYAuUB7HERBP35jkf",
  "key41": "5MxryuJ4g4Zj416nbYhm3Dce4CMUB85S1reQEXVW5ZfEYubnmV6zPHqdutCz8RYsWU3nGDww6tQv5rRzdz65wYMV",
  "key42": "3hiPdqcZnnTSwBxypsCf9wcHi1UjYodNFyhEmkgQ7oGjDjEBtaDsWtegWKjXyb3u5UqYLncKiwu2Qxw2gAM6SNvt",
  "key43": "3KbbQe2tDM4gW3cLrMVqvwpxF7nPoymYR2w3wvWdCpc9r7M4Boou4BmiiQnE4CchKQWPDTFz2au2SN4W7fFyL8oF",
  "key44": "2hddGQTeBuRUm1GdCM6LhfigvXHszCv9QLDb3cqj2bMd8aqqUiJAoHLQb6saWvLKeM1u3MsW5K9KvazXKn7KgTfD",
  "key45": "4pmoVjZyAPfc2XkRzUTQoBZmmCgEnYYhhtBDn5XQuMMmgsQQwy9tbsJXrRdGkivuAua1K4UN5upwErA3L2vhJfzk",
  "key46": "i1NCBWXQdeHavTJNVhHrmuZGyC7bemqoH2DpwyHiGyfvTxNVP4RHABWMUKDcqQCoB41qfdAVnZDuhjnUPhZ639U"
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
