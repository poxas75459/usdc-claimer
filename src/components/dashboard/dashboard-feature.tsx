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
    "26BbcHynBVwjV4E7x84d7twsve6YTbFjhEG6PxUbynrCdmuxPBsBZYi6FzQKJKi9F6kr9MEFHUwxSsoezRPyqmcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gHhFFRo744vr2pL1zFtSZWMzKD8dYaKNLYW7kPdBzp8FGd1ohiDPrGTP2rxzZRaZGPDTtM8zQKrAUBCVnsY1Zxo",
  "key1": "2y589UWApdv7EqTGRxByB5KTYQV3AkVxgGpMe9uChwDpvKNKYGS5c5y2jwjnqQM8sd61inMoeivVrxkS5Q8SimtS",
  "key2": "4sRo52Yt6ZjFeQ3t1G7qoko7GJbzay1R6Xtd2j42byA7JHPkZNFi9zztGGV6uWJMm1xGPsvR3Smvmd3cfHg46s8w",
  "key3": "hUMNyzgoJMDrbVaEgnoJacvwGH5aH6k3EQBEagFRj8MVxMpugq86tQ8E8Yd1CH6bNEAXunMX28zZPuSievh9GbE",
  "key4": "2AczWNUXCKiNAdp23mKpiDpgsYoAdrWeeQe5XVQEmSx9AbbhwHheicY3QPs4MGhpF5C5FLAKeHjtqkEnBGcvKyQT",
  "key5": "5xsTMt4aFCHUsBv1nbkKyrAsu5W8UzqLXtgsgnhetGwHehwBhjP2DBgESzfKydaW39yjsSURPxHyZbTsbWptU6mZ",
  "key6": "2gLCTzbi3RgMvB8tUEtyR1v2EHF5UC9Ugbu9QJpQ5prkHHgqTbNVkfAP3PdT3yeHfrD5xbFJuWiCxmSYHqPD8Ak2",
  "key7": "3jVgWAgHtRfR5TFiTdZ2K8nHujWTDhvcnyXbhMd3sZixpkXYWhWyQAeXdpVFwkfo8A2Q7MoyFQDKKoChCLrtoDzo",
  "key8": "5YB9wnnesAoofmZkZSnwTdt8QdNJENVKBKRdsLi8ke7c4DiEjoL96GHrbqhqKReA4TqrvLY8ApEaEGkDoQ14hB8o",
  "key9": "3uBkvWrpjMczjdYvTMHyhCwv86AasGNKuSdonH3QZpp4vrfhENxExpiiiD8aGqaM3zzbhoJmmrVcunsJ3ZGxD4UL",
  "key10": "5NtHztR1BEpPdMkHLsoWRoBboEdqHaDsECAR9jkyutnkiX9eNGgy63M99Fnhu24twUVD94tNLPoyna5jjnMdSuqM",
  "key11": "VCmvEi56ZYfLrEyCug1FTAcaHuN8mxSh3pLcmEnmd6zLp5y2n1j8KPdekNukZLJVLjR1SvjsdADTKhLemTWFfGt",
  "key12": "634BfdedCc41P7pu4otUi7H7kB66WXC6nE55h4WSk5S7x3P971Uvar8ojJ76uq4KjMjrh2hMcaTo1ZEWgCjV7SJK",
  "key13": "5y4qwcrcLfPGgwpYJ1GSXLgEJdygUDq9eXB7LKzTqJxTDBNcq6PaitVWD5jejWvHwmjNhibzbV3WpcufA6Dw1wfe",
  "key14": "4aB13tJeuv3U3zTzBgpoMdVPJNzkE8J8JJmCZXqK3cdDyB7LiUNqU31X29h3mMStiBeVqxLL9DVFmtMW3cd8NHdV",
  "key15": "2jBVXBXz751eiKKEpoRtNr6pajVsmoWT81gzQpYe4iz8JcTuFJxCCeDEnwuAuBCZ92VxPMRgzPmxLLXMTLAMQx2w",
  "key16": "2cxraTq7qgmk2qkN6uEDBKX3N36n5FZNYXt2Aa7vGddA1ijxN4vozhhuz2G7nFLZp5R6qWs5EFG4vkKMQHvBbx2B",
  "key17": "2AoqFdtMLaWgP81PJ4JQdQ1yeZoXKJr5KjWCegsDx7PWZMekLqtsjme7NGvxirYKi8v6LPBb9WXu9mU9W5Hd2UvJ",
  "key18": "2dHzugR65MGnwT6tvxvF3yFz7QgDW7b6h2gft4r3oLJv51c3Mby1pxNf2XbYGLpwCHJUDF33vu3WH3zFZoiXf75S",
  "key19": "2LUmJrvwtERf8TWJxJPW8nEKQ7A5bC9d6xegKWSi3Ba4iqaAugCYJyPPfbQ9ufRX2BrwyWDwofFX5UpgSDjgWFvq",
  "key20": "4rKjxuQVgS57AhxKfWGP4Ajg6doFhHD43m14xf2KpJywbvP8KSqGWteVEm2GFwhtnrQ8eMvSaogSFXE1AYeYL7zX",
  "key21": "5fmRVLFhsqEMXNCEsykWa4ukiuvTBKbr24Ea4UFQDoGgXfYPxThLAMuYCa4M2pKdNvB2SjtqiZQz99JttWi1cPD4",
  "key22": "4sRjHzbnMjNgyVjuyMpn4pSpRf1U8EayU861oniqXULjq7Q86CfYJCE8BNSQwACxre2jZhLHqJ9bRBPBUS7J3Ci6",
  "key23": "4WKuDeFba2fNqsDD6ZuvNTwaSk8VdbHnc8LN85EJ7r9ABWqWBPueSvLAF1Sy2b8VGZ5v8t87HHLQBb8kFYCP3cTT",
  "key24": "5yUv6B2oYQdML4EkJ4P5j1q8uYUQZt65FTAM5bRphtqb1AewnXyhraDMquk8nPo7uotNkuYCDwdJt7n5kFZMi1wa",
  "key25": "MU69T7uqpvwUNS6AYPVosgT32FAW7zu24L8nuQ3AcNJfMcT1obBwDGi1doxtbNtEYKBWcbBo2QbCCWKWyiPZekQ",
  "key26": "5Es2PveDB481N2tLqNBe3TRkwLQUuh9vEtwcJABgd4gTMw9CsGatjFKmwLp6g64Vfx2K2hUJDJqERLTAheRhvsrt",
  "key27": "3NHoqX54hoPeMw3PR9Hfe2REEoZi9uzyGdhaEhPGtbM3Pm1WrkqgALrwJ4zNNjbR3Q2wVU8VwpWtBBxFv3vZo934",
  "key28": "5FPWYJKyzn69LasUF2gmpYv6B7Q1KsokuCuGmdSbYcuP4U2SyTWN2tuWmj5B8CZKj66ojJG6CVSmSE3ZF5rEWJNj",
  "key29": "PZFZfZxuyPYH3rwq1WrKKPh5EGAfUtZ5ShhWdRYNUwxFh99ETuCgaK5N2zUwPX1XAHeH8FuSY2CupdfYk5J1zkE",
  "key30": "5n2KzM4cqmtnE2c2wyNxSxvHFCULabEkpHSF5xd4un7jQzLvfoB3WTDyM9QFN8Z18YAdNZZx78C6JAHwNcWmEGn2",
  "key31": "5afD49ew2CTVfbgfHaDaoY9T1YTrcKMgdtHCmjBP4httLp8d9FvnnjyvyVAZXqWFAr3qMVxaF5vkW3eY2bXpqzq4",
  "key32": "AjKHDGc9iajpmo6X7AVg8bfA5VGDKsZvaqZi1wi47CjEZ2Ecu5sQRpcpjHTWFLcvFN11bBc2ogY5vP7ojAGEQAe",
  "key33": "53uz5jUzBFpUFJNhZWhjNupWSEFv13mY1W1rsBkV4CwCEak7nTXQXZHm7nXKRuummNagrNzoPALRYBSAqRtnkSRq",
  "key34": "2AtnY1tSmekESvNYYdyZFofUz1mnLwsd2qa58qjS7grWDP75yuZiHpz1k1Rd551seMGzN9EQPs6KqqBhKBZYEFTY",
  "key35": "4XGz34nuAaAzegEV7EHk1gKNAddVo4Dkivf5p2XwBmcGc2VGbBNhZPSJGQBuRozHBRjUQs31STqu7WsVhy6RWQQe",
  "key36": "4CC1mQHvAyaksvuGW9irXiBQASk64b4Axz86NYatfbPWR81rSJgVsGWoD2Bqx4gN8KTR523TQzZKHxrjfzAkYDxN",
  "key37": "7KMGtiP9Cdwe4YFC5BRWmtH913L9aeumNhD91JGvYq3SCNpUE1XR8pdmshQKics8yTPifa3DENiknoaBfYcyAAy",
  "key38": "2tEBHa3AdjNGY2uSqe1dVupV82QRWmp629Pu5ai1SVZ5xSqv95PgF8KNXopFhztfwTdGxWqEMyDufLxw7WdrTGCX",
  "key39": "2uqnPfwaVosP2BwZW66G4jQXebeDfHozafDPRSGCLDDtyjhXe948NombTTbtXRETbKgKoRxr6Fy8UscA1StNcpVx",
  "key40": "4B97aHUMeMwkv5xPERZ5sptdrDKp87SF3sFkiRNcQ3bbtEzec1Fwb7LUdDLUqask8KRLqv1hxWWiyZGnCn8fRnZn",
  "key41": "3XWEzAkJWAr68wjQBVFeBQX36xTzrJT8oC6WTLfSWit69HvKDikUJ3ENGWVU6fz6uZuXmrBR3J7T5v9QFJ1DHaAg",
  "key42": "5zL9FAn8HjVwvfna4WqkUivLXgZX5DnpMoPwnNX8Y4CSFjrfTNpquNjbvW7x5LVAf4Pep4wsxJcX9yhpCeuE1reg",
  "key43": "4svdssZtYQwEwB7om8dqhS2L8U5YK69WHmYWcj5VSym72u5PAJyKyT3zDvzpGkm4Brwwngmny7ipQcRiyUp78N6K",
  "key44": "56iEuoK8ij2BCGXsrturUaCbUc5CANMmvy55XA6aX12wNe12Uz85SUWbudfSEtYEiaN2WY51u9APFNKq6ufGdvQz",
  "key45": "4pW6nzj2CqSrS8Cs3GwUHC2dyBo6PTMEhcFErxKMmRAUTnbnMZjaLspTyhSDttAFNPBtCiVSd2JrBopCMjCaoNaw"
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
