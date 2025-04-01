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
    "5Sd9chnZS6WDEVmdgCpFnAiwM2dT785z2gT9YPqb2iHiq8xdoHUUxMYhrYHgUKP3nYFt3gn4QXNs4htVpzTmLL6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tW2CDgts4nQqc44tdY12niveeEppwAyExajgRdfpC2X79XS8Qo8AyPuWd6PMq4RSccqjasiQ9KKcaUvA3TAkwYK",
  "key1": "DV1GjwRrkuoRcKrXJUwWVHg6YVQeAsFS6FqBP3uo8L6zJvsx9SeQMZJcgcQUQexCn9eLAHLiMDYHMfPN5iQUUmA",
  "key2": "48LWdS6kW7YnFNcEfcc5EjzjmkxKvj8bJKvq2yuZB1FNpdCoNjMbBWjEukUQYvhW6C48p3jNvBsztWraWyK8UhqF",
  "key3": "3ogp54noEVb7iX9S7NTAoBhpbppYNJ7gRno55g3DhvoLeoZhWzA68Asw3GKoxQYgHXrcq2Em8tBesTWE7DbJWiDm",
  "key4": "3rJRWkgaYfWjpURVUszyFwq5UoUBCfGQsjKDKevuGLXomPBYLdtZPLpUpdqtVVpVYYMjcNBPZuQh2vFGrXR4jHhM",
  "key5": "3hHMSBD8FCktwDukkQRpzBfV6F1JvkBqvZFY9gMK87U28jheJjsxd9zaxAMhhwjJyU6SkPi7D7E4EJxDrf2tdDrb",
  "key6": "467m21nVkSN8VLmvczvZfZLkeqjpdRcsSyzn9onCYDwNYEj7Egfbxy2wa6cjdKS99Bf1Li8KtukxftMqytwm13EA",
  "key7": "444VxDcLHaKZNfvS2rt6P6obn9xsdB4eKxHhi8wg4bbFAzCVkKVrMnSvSeQYycNMLtxLgB5EYqDsWMTAeTwCzaQ3",
  "key8": "4LVaCvGggAWBNoWH9WbXojGDKAirHoyYaZMsxbKCmtQXVboKHi2KRDTyuo6HWEn4a9ZGCL3RRieHrXu3Bks1p6Va",
  "key9": "2XDvPyjCF3Jdbuash4sR6RWGTSMsgnx2QZJ8N3HbLsfip5fXXrzkxkAMZojGqNv81L3B7kM6bBa7zCZGB2ENT6ca",
  "key10": "4QQxgeAJtueDCyyfYrsqyFMokzjbYAyEca1CC36BBJRgRWm199WkyHKEvuoQVaG7pattBtZ2WYAj9Wtm8iUTKPvJ",
  "key11": "53SKR6hsVRfJncqvVi8ikAAAsqWhi3iuNXPL1NeTQQTHEWssY1GTF7SkeRwtpvb66ybgnB2odQTdeBV4JRYiPsZg",
  "key12": "2MYSsPw84nnKX2Yf8Swwuw6uciJLYe1AdHemDYXoyxNqCx6uNViHWtPJ3dcRsPPsb8MZq9D8kJuMuCgmsbc4tUq3",
  "key13": "3d5c73YaHhbQhB4arxXbSS8RfrayCZe5BHkBdCrFNcZK88MVRuM4TGjHP4BoPDvBZsPtHMCThx4teTWcYZphtEWQ",
  "key14": "5nG7FM9Kkq1yWjFjajAyTud7sZPByRcqyTKoKgWVVuE2GPqNTJ3ebZ4rTiXV47wckTji4zJuryBVS7EmDBYMg1vY",
  "key15": "447AAeyQFJvc54ARZEVhsn5fnnowFVCSPtovhH6gGtqBtQkK4gX2aU1mY3qzFCYRJLnZXLANbQNVxX583U8XXsik",
  "key16": "dz2MHS1PbALkUFhka3rtXHi1qnSuboAr9EWP2zdcH5qXGPxzkKGysQjMyGZRvaZ6XXiX5kES6cio6vp7drVAe2t",
  "key17": "52tuMwnkEfJPjZ3pXdN3mvpBdX4D3hmbHPdbA8HDSXvBitKTgikZg2pW2rEc1u59pxUQ1rDLXFqaR72D5kMNnrnS",
  "key18": "3njnzwnDg654tiFgpi4Ksmuxic82Rh5hQLS9NrXe3fjiYFNQ8F9g3gkUPtyywVL665aFHaeVFbSh7UdwhyjZdpYJ",
  "key19": "2wZywKdiZgxBsQSP7xBWDwuw1wNzDU2Nq8pudLxAcaPZPgeV1SV2Q79tNwtpzRGzv9YgDweAvBHw5nVD1pBTbvgt",
  "key20": "ayZM9M8oFMtzgniHnNX8BFQAT6ET2UW9qDanekiy3nKJ2oqwoY1rgg3MSnvet9sVyrxkp4rr2fJ7oNbNJ1EbTBP",
  "key21": "2R8X5nofbSmUsxY4oiRueyvYaee8ARZEaRsFEBi2LjapD3XJN4TQrKqYGkKyC4xEyMyKnZzFpXvaeuDNzqjPJ8JA",
  "key22": "4RQDAZnz1CfQBqJ6eABEdnZSxoJtDx99AuMZYdJ95rzorFvmpwZEAD2DFnfsA7QZV6h8qfPXuEUSdQVzJ8UCoH3K",
  "key23": "4eNrR3hnVJAKeMPCLXDNqcq8Wda3jDtcJmtB12Q1xDgVejBUJJiycp6T7WTgRY9vsAdsdYUtgR3eQ2AXBfGtex7n",
  "key24": "2dTxVe66efsWQyNxi4ZDyu9R2nB8j5rgE8W6iWrsBiiJ32HDT8nPAyrqEvk1JLPJFL3TQ2eaF9Nb4zWM2bPmZhzL",
  "key25": "hFg8c9htpuSXsPvDtNSk5y8KeywdE6FWgkx9A8j3xubh8gru2eFBARjGdK9DXQzqPccK2JmaFgA8KJRsscZQFAi",
  "key26": "v3sDJR9rqdCVyfmjBGqKWkMcY6adVtKZtzN1nDQUUFXthC1Yw2U2Z1Nfn34eEVmRNsiF6qo5iKHLqTQujZRzur9",
  "key27": "3Xo5R8rJFYQHJnRbokpMxrTPKJ657LaH8bPxMHdzhPFB3gVzhMMfRfER9gg1m7sR16a33j9wz29pnnTFcD7ChicK",
  "key28": "4ahQuyRpUqZ86cBr2cnkyuyDH5DHVUYnm6LphSQByzFXZysXEEyhrN4SqsGNjbMXaQzMPMC2krvGmV1Pf129jaUr",
  "key29": "2ympmrU544fvbnH7skANDqqDvGH2zJtvXA7SkDFrHUnK27wtEpYBmWW1M4eRqEjx2VMnfhNWLVG7JhVh7Ua35qX4",
  "key30": "4FAhK4ww4ppQrRqJvSJbSGnr7BYiv5Hc5nYFh5Nv9YTTmZ3GZj6kBnkzVAUAR2LsRKqUQUntJnkFe4F2V6FhRFR9",
  "key31": "5fmFCWmye5D82gfR8T5Ao2Yk7zhpaRgV6fphfcBKdejZJ6x7yo4X4xf5BC8PyWTuFi22j1SCkwbpkKbWjkrcrvLw",
  "key32": "56yE2174wCGeaZhWwHQ7CDoZZNJuRNUHMknwzGov1V9RUVF9vK8qq8KcHunvRjUvLL9bH8PPQ8R886kWZyucFvjt",
  "key33": "5TTdzyDqehnRJpUaT1Wq6PwfYBiksViwHPh5rdMK1Y1Jzc6wFaj5ZPAWteo98XcubtmVHoqzstVPaHYymoDUPmtx",
  "key34": "29ikfeYzbDuRrwdrfGZznsRpd3qYDev3sB1JSTMQ98TkGh7qFjjVstUf81v8VqDisAeB688UMxu9FmQQVnp2uQWN",
  "key35": "uUb1MGBs1YAVAzrtGzhakRQsByyabGKRT7P1uJ3woQ2itkx1hWdsq5EJeFMME2Dp9Fp9AwofJGdwt6m4MHKixyJ",
  "key36": "5iQcH2Nkk8yZHJze42X9QD5yk6k1kVd1qsXoWMd3ii5VfGRYEuy7zs8dyZsVDHwj7hVNkopHcEeiFa4d9DySA6Bp",
  "key37": "2XEKyUFCbZHqPvmYvvXod47zhzzc5StdKHZCumsfDs7KhHJ9DvhA9wn8K2nqYKPPM7SHLJ9M4Jr85GkLuRfW1Uii",
  "key38": "4KK5EoddNwfZ5jvPJ1GTvJbhmjrHkDCSb4QCYmKu9CnPsFp538yaw3e5nCMYmHjU4pcF1Fua7aqXwdviCCFMgEQg",
  "key39": "4hh8GH5xcifEvZH4gLceX1q75HEkEast9TB2mP9rytcT1DbWibN4rDaDgwsR2bHvqAK3LGeJVeBMSbx68HBSQd5z",
  "key40": "2nyX1tinUFCqLTuNz8A5UisnWeztsC45G6dRCRraKXzsNNCv9QGp6vzLv6KcGRE3L4pExKvKoLW9ZFjwSP9sWQb2",
  "key41": "2JFWnDyouLniaLobCq3KaMxB5vvY2cRoRiheLJ162dy8JFiahnakkPpNTDfc1DAuDSLXamRaYGrq4fuQBN8gS5Ab",
  "key42": "iBzFuTAxD3MUKbvYVfKEpbQfgdCPLfMd23Yrs9R24jkpuuF83XJLdoLV6RG4dEWszbmmHatCgW7PRiNEJWZifrP",
  "key43": "4shzaAAXTHyJu8uG4vi9HrZrAfxCPC3f6wtKmNY4KPWt82v5w7MaHgo6rVVHcEGoWqUADLDEXpzZm5kVXwu62Wbv"
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
