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
    "2PVPi2EbjEtW7Yhs4NQTCVJX88FBLC9vN4VKdc5wUseSvBgeXwWxTWojL52LUu33EvPDmzKjtg1ekodDbqme1zrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4caVeam7sWciwSi9RG9Ub9y7jyuRA3btyqdTKczBYCAGzuERorxCGs2L8wFwfBwJMc9vfSNGrL9iLf3wsj5L2q",
  "key1": "4iL8RPjPHz1855Zmb56wW91mu1jysdMvXwjXt2WPCtWWopmoqm2a7fbmDK3SALb8HTs9fA2fgj1PdiuTkU9RwdgV",
  "key2": "5pmP8vbhQGP4SeZhT629xiiW8T6o9rHnKiWzygx7x4AcsYGgpxjxKjcqCAhPAYSzawYiNtfGFemPM4P5dm49mEY6",
  "key3": "54UYQeCuKkLzQHCNKZARyzpX8fBxEAStvLNR7V4Zyd8Pmdthhm5usbCh9wkbAhW3185Qc3Fju9pNSkXFwPzCbvSh",
  "key4": "2qGdy29cUDB4x7Yv7tUrFMmcaG1buy5Gww1A2SLUPR2cWwgf5mXEPcofNrrd6EAGJt5i1d2bYajgawvLbftTc7e6",
  "key5": "4soiPB4wUnZTKHrgcCwntRapG9sA5x3ues3MXwFtdH7emWzc9y4ogG4UfjQzuALk9rPvg8qkyCbw6ssJnvS466sd",
  "key6": "3TbuMdjvrzGSMnqGSziG8t5NGMheakkpJpx9tFCvSD4kQDEWmPCSE1oAHto4qxuG5MYr6TrymDgDXsNqf1wGJ97K",
  "key7": "2KiTKnqG5Cvwf4R766nG836qRJPczr35aGSRAMzzAjCWD3TSjk2L1HMVjzNhPKWTpNkoJeA8UtMZTcxoJveQ6CdM",
  "key8": "dZVpW7qYNhoM5RmqdrgVsyXb2Ge81RN5hsoD1cVZoa7Tqgcgj2qXcidZsyYtNjTDWH1kfEa3evYxRRCbXo4WbuZ",
  "key9": "42pz6PHQ9U7ggo5TUR2g65AGaF5gRhYkJcNnLvhYwu5ns2mZFfww8mPQQSgbRZgcfoaNBExrEC7MxdDVUjcKZYUg",
  "key10": "3sSSmMmvHWsYD6pDBkqAt4s916wwHaSUqzEv8hDr1ndfH2YiJsbxTJJrzys7cbsCDLZoN5gw27v4XgEh6oERu4of",
  "key11": "57qrXLiyjMQpdy6j34E2d5ERibG7v3UjTWHrmtgnhP29RiiHCr92S439nrEDTRvNqeHB1faGfx3fojHKYXuA5zhy",
  "key12": "28r56Avz9sYS39BGefgmTuy3TUix71LaUqzTKefgxEtvcaYFi4zfZjLK4koVeHu6bt79bnk3Andi7gCfAd8Svt7x",
  "key13": "3LjEm3bMZaSswuLsr8TJ32NPhDBbQuVpzLf5QsiFq3o3aJp6aotP9rgmhQv9cLJVf2fen3Wud7xaqZ7XZzdEjXty",
  "key14": "4XimDpSTgkacpA9CwBrPzHrL68jsYdcjfJurxh7EKNpi7rYuiUbNGq1KwxK1nG9r6WuN71RWJeHqjxPsx9JxkLFy",
  "key15": "6GUPALKVL7p5AA4PLjzEsonxRskbD6gC3hkCSpkYfuPafgibXfrqN5ofYzNhTLgkPSUbuCkWjjoB4punKXNwSSv",
  "key16": "7fnw2K1bQ2hKuaZArKkFU6EsQYAVdP74WiCVwGews76XKgPqqqrEqf4A64wkQndKCzDZ4U22UDrzBvfhwJwnLx6",
  "key17": "3nHSrzXqp3rdMrsvgDQRrwuztL7zwdwdKA9CRjExirUwMcnZ5rFc6Lqr4T8sbV8yngK79BnYQwYehnuaUUSD7PPD",
  "key18": "3MaeEm6ow5CdZ6LtDMnZmf8o31awnEjUspkMv85PY37zMTkFH8AXHPQr7u6Qxj3CjtyF6rdBHSSNQbe3gnGX62pZ",
  "key19": "4BeTUae54wS6Yy2KrMxPeXsjABm6QKHYADqaa61M1oGjV1nYEzShvyrGvPnvARjWJn49tQA67TZqmY3Ac3kvsgGN",
  "key20": "hSSFXCJnJLsSe4S7bWMYwCjxEz7kKoLx3HhEJumSTT6q3qETrEL1a9NRZmvHaQMsQF77QaprjVbuLKszJuSEntJ",
  "key21": "54NTDaA4ydTVQqz2vpkVtWh21JxixQneMwJnwy7W2yvNEaAS3L9waZbQpy3a4tp21kTbupuvBMWC2wotXuJ7NakY",
  "key22": "3fZRM33MWHYBNrUq3eunAevdykHuggavWz8UfnFzFJvS8oMFaVLd3czEkn3kFkw7Dw2Rgub8eDLpn8LDKoSekbMT",
  "key23": "3KNRbyhUYWZVp5UFgQttXTodEqgzJ66zyPca6jV9UVxGbxUQdN1iDuPzx2kndjdmWwHS24Fzzj8NKpgZqGfsyF6u",
  "key24": "5NRybFMVHdbUkx4Ch7uRiYiJueL2pfSPr5LS4Yvudoiuwk2gHCmRrYqMxou52YqD8MqsbQFMCuUdmMV82VDXoxAW",
  "key25": "65ZRb8fUP99Qnrs58oDwBhMouSs2kNViegmstcUjNsThWh2VShMU6sfBbuk8C4ZMiX9i9Sqjj81qA7c5T1LdRWtm",
  "key26": "2Kpp8C6KWBFSHtV4jfnQqT32vWhxVuuAi19eK1i4BcLYbE21jUcsBK1XLh7Ks6EHvjEH6vHKLBTa7dPSqZudpZiZ",
  "key27": "48MkjEK3LQus4QPcq6ASTSpm1uyRbJt8BcMKVgEH1DtNmJEcbN41YcbmZEFEotWEXZJPfdk8PT9TNUdcTwNB3ged",
  "key28": "5NDRv9yhP99HWu9Sbw3yCxCdi2Q3fVddDutZNawLLNephJpsMG4tCXLTY4Z5EKdpZefRsuHTsEQWLnnviGDzdUrv",
  "key29": "4Xmhhv6nGgmD7ArL9dQWCw9zZWWuWL8F6iyFTexj6wZCw1sW3ubdW4Z11drTEyn2i9qAwEdZERXknBWQDcMyyNQd",
  "key30": "SzprszWX8ehy6Uz7iKFBdHdZL9EiXFtBPw2MhJFTZ6ea47MoQwm3JX27CKHKg6FGwjH1GbwE5kE5sn7kyUJBhpq",
  "key31": "4ofG9nZBYoGCRnN2oX6DJU3iCn3a18KXMHZzhLULgC5wwFvRfLJAPV28cG4Vr1xcar7oV2VTv9dUUBGfz3kjeyYW",
  "key32": "5hF9vbmhafgWfsHhDAo8ECnf3y9MHSqMBrRKGTbBUWhczs2fnsdYtujGFQZZqZipJD9KNB5quaThti6nf1N5eXbw",
  "key33": "4kB77s5U9bcTC9qmj6pGBR4Qp9bbD5umi4hhMGT9Gxq2Nyaxb3odjoFddJgmz3XHTVKCfoH9NGW8v33vz7TpGqyX",
  "key34": "3uo6V5Lc1WFUfDdokJxsTEeHcUwLk72nMTHYbnkbDnCcCF5Sn4J7qYavDmagxrMvSpqGroywi2p5nbDrVjBJWyka",
  "key35": "32tbzqb42HC7hGBCH7JwniHirzVuJ3a7kXLeRTt5AuSptd1DpciYUdAhjhBfaNkDw557yUBWyo1aKN3ephdbZsUY",
  "key36": "4khx7Q3bimnSu8BxAdGaEpUGPFe7hdXggU244EnEpEodwYvU3hDhyCVZix1iqGn2xLFxJCeBSsRFFaw1uMMfVaFK",
  "key37": "2KR93prvdShCfABHGhn6Wvz1o4587eUjZBjFMbqqPheBh3KaoJ2i1S4zNXtcvnfj3NpiLxMyzVFxSxxARBqZDbwC",
  "key38": "3CrJJnWpKmq7a1WsHV6WVKS7X92fm6MRMvEgvZx1TpkFEFkoq4rhp98wKAoTafbCWxaQLQD7B8yFgS6JkBN1Fz1i",
  "key39": "4WPW7Twzfd2xbD4JcHJPpwHRHicU3n6sWWTgVPSnTjHLaB2sj5gsp8EGoHLWSm4cNN8gEW63T55uFiHyD1dKoGXq"
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
