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
    "4Kyd1m4qmtSm2Gmc7y62qqeDsY5TkvLEpFFmx7PkY9kYay9q9yBNj65YucazPUV81vYSMX7uubVDGUe2S3PLYAWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnDeXCVbwwqbR9oW2T44NjZRNHpUzpWBViKGH8BwKH5oXQyRfKUsda14KL9LqY7ZmLeHdRcGtFLt335D6WSyrjK",
  "key1": "665Zd45XNCat71ZsBNDb6zZ7xVjxG5vXBL5LtCmD2T5iRaTDMxstu8sMwjPQzu9gNjpJt5ZhLXzLDEobkakrhrLd",
  "key2": "3QD2iECt4QzSGf8RTyqf6GMmg2uaEXe3QQsmx2heqMgXJ7RAHzWYUH6jV1dHmt3z8kjC8Xj9Gftn2SvkP3adjehw",
  "key3": "bHn1DUgYNidBmS15nC95swmmaAzNjx243fAX4rXfRdyEixTJLxMF5Srk5TpWmd4gQWJC81zR44KM5VSN2VGcwdJ",
  "key4": "xffrxeNrxQm4Yv6a3fRPSPwd6hQmhKpzRKvEYETRs6ep5oeWp5yLkvYJhq1mwS5qFPL9jKgRjR9AY89oVjuzXiX",
  "key5": "2kYb1cQRahd1trN4EyeUScLJ8DgNCz275nYWfLTLSYKdkCCHVhPUjgzubPRkMfwE62s5bPtSnQdVkM5WPHaQShH",
  "key6": "CkW86mU7QCqBGtkQMqGb4jbihkUipG1s8g8hCrp3wg2AT4LdV9k4KBDHxCsXUVTjK1B55PbrAVHyYvsmt7qvtSa",
  "key7": "gnCXZCf7boSzvJ1T9eLv62xWXv2aJ7zgeP3HZGAmZBigjkzgh3eB8ZisXcHRskM9W68o9SftntbFZzYuKaEof1k",
  "key8": "4vcs2AxCLbJaqfwN4aMVx3c9kxJog1U8DB4tGq9CXNR7X1hmC9n8vkUHFtjj3nxaTXxSTV2xsJ43zAT1bt2913CJ",
  "key9": "2hz7MJvoSJwrLycgFo4RwRkScLhEvjX1iQNBsDtFYZpTF939NGpNwSUeMSxkdCPs29hV6TAjHmG1vwzjV39URpzb",
  "key10": "4ooSVkcbBeTPL5spxY1erf2JW6gsTbRvd3XFFi9bPohNk6YTkpt7WG1QqmiNK194J8FMPqM8VPkecwX3QcrGbNxT",
  "key11": "4JFWo4UEnon4UsarMw4gipSxsNaWfU5Tr2vhVE5HxVws1dXbFP4vALYLi3aDndmmBYsa3ViK5xRkdXwZdzvLgD6e",
  "key12": "33mRzrvypUccFiLb46bDkJEMLDzz5pfbVwyxtbawM4FotaabcNcCNLkNbvAs4usoabcVvMCLnAggkfTRD9u75B2Z",
  "key13": "kDSCQq4E2S11cnUhScQLhFZPkCsKKM4a8E4pePgvFQbTrLT99swcf3DYtT799WkYwXByL6uEn2CGVHC6VwgCh8z",
  "key14": "24fF2M3W3W74U2WTmBs5ZbsVqbKjnc8mykkKUb26pPQgcKq3BxvqDv8VjqHCGFHyUDkkXt19h3LAb9Q7HwSXZUm5",
  "key15": "2n2zyDEhNiBgCNzDBMYTuDyPP4ZfWmf5pyxX1EuALgrMSLWpuZmKURxQMyDDE9ftjvYxxQw5HXQxtwZcFMWrJvnU",
  "key16": "UTXxqgo8fSajVtMzG4WQEHaTbFk428X8s43hMT3AF4kM7JnV3TLCmpFFS538b6PeBZMMK6a1HWd9PcJdePp1vBu",
  "key17": "3utJW5e1fuq5J1nuprcQt1P8KJvdgNr7Nt2NZDtgJX8uyVm2sng2imLRHeXKxa4cMrBpxcE2AVnk6Qwou4xvG8gP",
  "key18": "5tKAhDa9Y7TxBB55AEprASF8JU8QuYFNQjr3TssUDiq592GKP87icxY9gNyHqt2wuKQK9tXAuJiXAG1H1Mwfasez",
  "key19": "5q3VZEyCqWy8UezknFaSV6hW7onge92c3UbRAKCPzBZffLCWHggi7Ybyo5RV1t5DoYgkQ6qEznvtywRPKRreUhTw",
  "key20": "5oWwnqRi5KCJaCf2SGYuacKu1UXfAks9FGNQxU2BBUcdQVyoEb879ToJ6UZmqwGSR3BrDHFjKK8KE7KHrXnCRygp",
  "key21": "3qtRDzGe31DksjtqQCiYPaH8yH19CMvxChMxPkNo5Comyxc8Hj7Gt3CorNhXoYkMJ4B5g6CPzuQtJxt94rEBCogB",
  "key22": "ASd8ho4HNQtasvY5a3QP54g6nHmA9R5E5Nj1JFe8SX9ZAAGnpnN3a4QgBta9HYraZRqMU2iAH4dJ3t3YBPZu7Pv",
  "key23": "5b62sSNthBGyZ4gV1KVMSa3exDfxk6Ep4MSexiQRHjBFdMbvrVPJ88b6MpF9ycXSt38aHfMkTT8MyUeDLUJY881g",
  "key24": "5ht2ZdMn9ByjnJn7uP4YxoKTU7zP8euEYkj2FNoPz6z8PPanqoH1ZXCWkHxQANE4mn4NfMegZAMY8fCHEAyRii6J",
  "key25": "2J2FpLRtoQgfx97ufRUEnNosuspKz1ESq1AJgZFnknEDW38g4TrPsyAU3WVANBoY2duR9Ye1FvYYgZzTmfeZJSwc",
  "key26": "5NsaYNu6TQ7Wzk821iMG6gPkM6333ncGY6T2im8XY412aJjCQqWL6uBPC9jjsaihv9M4trtkyrDwyc89ytPW5pfb",
  "key27": "2SdPtrBPBoY7DZCYKPkaaf44xBa2tUecyA2ZTiVXrASv8tMPb8VRuMvFbnzXyCCnEGifxrcNrzLn739aYC586kdk",
  "key28": "22VXQRcjdZ2HeLQpoX8x7UUPZbnBZHAGExcur4JPDCrMdN5tCC8iFhCML9sCk7FXCSd141hGHxvDQM6FVFBPrNR3",
  "key29": "2NQhvuofn16pYadPdiRt8pA7C5W7kc5o2zRn4HLbzUt56psL8RvyFuLKtCGs4ntRp4FECr23WnKAbEoHj4hd7tHe",
  "key30": "4ZL7sdb9LejPBaYehaJHeLQGutzzYwDTYKbwSFh5BZa9ohzPoLLu5khGEhenJpEHinrv9XUsCn8vvqHjobEAgp2a",
  "key31": "4oW7EYdKYW9YFKTopFfPkMKzcrdFLQgQaCj48KcRbMTd3mb3igpE4A5GMmafgQLM2p7gjmgb9ZZhGW7Tbb4ct2qV",
  "key32": "9ongM6k3KF2yc3VTeLXy7BrXvKjmcn41PdHbVPyDNwh7g7eYEFDgD2GVkqf8TSoe5n6X7bGNDkGtfQhppMKddGA",
  "key33": "376Pza5pXAdSF6P1vViqV61kVz6eYofiYEvNbDFqeAfrHdnKNA39VtVwen69PTLRookCbSdvoF3FdXG82rrfj1s5"
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
