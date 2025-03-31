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
    "2Phgu7skytXkDcMJoBDA1vAYx2t9J1R6xYKPJPECa4MehJynnEuV9Y4jurDURKyhjdxdsPeojNqKW3UdaBETsBrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vittVRDGnweVWAx1Fk4NonTu9wKa8mPXuf2qLz4bqLKQcBbn3kM1FG4EFavsGtzVVcZ2D8Kd85xS2jmR3HKoqmM",
  "key1": "3fVGcsFLrbUvjKDUX5r7q9SKmZv6t8RgdT1hrhreFucgyNFvQ4DCRbBZBcod8HRekbid1Ng8QDT7ESx6YpDrCHyt",
  "key2": "58tfVAcDpsr42FuwnVd4MpFTzoWLeKJd2wSyCxBiH9DpvfvZtCHAsgsA4uEFhkQLfvUvkV54Uay5sVTPoDtFwBdH",
  "key3": "4JFca5nFP8TbxKn9m2gjc3DZoRKyfKteGUhHfxsXZhXqUpiBQKn2VUCVvonEBgZpCY6Y8PFd39ZrQ7uomivAaw2A",
  "key4": "27N1J89DbkaBVhjrNeQBF5NVuAFjYFCy1mrifzRhM6K9JCD7snhBb4xSB8Q6JqgAUdtBJnjVbmTKWttG4wXasvh9",
  "key5": "2CB3Gj62bmpaKZ2uERFbGiYZfutn6S2AmZNBsSLzDrE9PDCkwQ7bXrXSY1hpvcYVQMch5ojnAGMFbksp86SvExbm",
  "key6": "5NvGnVj5mB1stLKt9jHTenTmdnfH3u96wto9K1AG4JtJcNWwk5jEVNcQ4sMJf9D3VmQDBCovHoG5zfoEGGativS3",
  "key7": "VXvxz6eUXBhgttSwBAbHohKYEDTkoVaSGsAbjFyU96NZiYRkwK6EKds7SZFgtMM8T6JKbK6ujCtMuBctbsTbYgz",
  "key8": "NVD1yBCdgrdbow2MGRRz1hKwhx9WFv9tpjG1GD4NDhmCvQVQ37433FF88HpzZew4cMj1WVQh5abTZJmsDeY6xP4",
  "key9": "4a8ctJUAWuQrYboC8287YFnsN76wHhR66S8BZMj26UGpnPSQphpf7MoQzkvBvSjyaYQFaZ7N7PZ6WfVWZt8B3yNv",
  "key10": "cashMFxT8cXkU4DPA1xduNpn2a8egb3GHHuMp29Ask1K38tbjxxfP4ejDSdzcXT84Js3k1ADasMFhQ9SSahGXPA",
  "key11": "3BGiDiACewwR4RjHwHvDZaUXJ2SYJwgnJEw5ehw7XeUoJaJKh3YiqEp4KxnR182xseaYAMY7zvqczp2VQkXNu92h",
  "key12": "5LCqWxaB3Fc9MHpud8FWp7TFG5xgnCQTgprzhcvsZKSgtc1tmvkxf9vRgyMuJDnNVCaEcLG2oPtNkeqf1qJFRNLf",
  "key13": "57hSyHxJRsBBWtqo4ganmwkkwSgvPC1iCk8LJiCRNwcopxABkeUykxaCCANGNk5QzZbT3aNCHTGYVZmrMZBDWTzJ",
  "key14": "3H3wv8vkrc25FaBXGnJmmYVb74918WZnYkC8hVs2uhjLp3S2WaXQWsZtXUZSGh2vz7RhwyreSkHASJVPEbGcE2sp",
  "key15": "4VC4SK8LzPaCkuL92eZCayXJv6QnC3yVwcFnZPUk5XWQS5az8ucBEWftDpgemFr86cK8pSSiQryuhfXcsgH3s15g",
  "key16": "5LdjZ9pL3nfthMWiYy3oRZz1Q7jEKhs1tvNpfWVdtXWu2MAfjFUSP946ftDWbv3HRWD21tHtfnuXU34Z1ur1NEvC",
  "key17": "3daGbERBiB2e1YKrxm9CWCLU8eYQ81Uu5NnqcAMvuLSyTWaLuGAbBqZ3gdsCBnrUMN2owKEvtQK9YfVSs6UUcz6K",
  "key18": "2rJW56yMPrsQKHLCbY7mx7SxnTct2vu8SSCkb1vGuzm59R26dY6YaWP1ysAW93WyiKBPUsy3JVZMvFmE6cB4uo87",
  "key19": "65FwonyjuZCniaESL9Dui7mftib8FhZEryCkTdupg187pPEYwPDzMassEpiByaVgg66xQP3bs4v2AqmcD6czhEdg",
  "key20": "4nnEgv3QcWgvK2vrjmyBuY13bVQ2f8P18R2KFtErvotTSjrwfBr2rCk8y3UCDjLJSpBDVC4KT5P3hcW15EHdfgHr",
  "key21": "4Hf1wWoZ7yeShtUSx39ECBNJfWrQWC1Bw6bNm62sbQk3yUa8XvfaywMiuWu1ntDNTsZ6FJcxQtXdHUu8FdEQWiu7",
  "key22": "4PcDteotEXb36Gxq7c8urjRAZv1Eu4kduGKMDTU3c491UuB2hJZes9EExJH823sVhMun83bo1ttzmRPftovP49fd",
  "key23": "4pGx6rydmdmiiYTtxCcbMcRqqzRuHDkeCeeCi3VLmiDZ2nbgay8mQLqQiJP1ww8CXQhcRKhYFE53PW82mEosoo6Z",
  "key24": "uXJKi7xg6Pdqmu2Mku2B9vSA3tSahLqG3xf19eHomnMkYejVYCoMkjzsMtH9Fu3CTyG44KsAeUEZj8DsTzh85HE",
  "key25": "iYYjpudbNHdUqpwYgZG9KZNeEK2SEHeVKQLd8ZpGbM4MgjFqLe5kn9JVyNR5h6u8pv2WB56bgCLmQAo5Tyyk5mp",
  "key26": "JeWR2sXGuSbappN3N4MhCRwfnzT8i3SA1qDXfM3ton2xKEyTJAPasd4PNb8C6ZoJL8Jr8SnWtB3LuoStDPe2d8D",
  "key27": "5kQsHQzjXhCCYLYabKW6JEGfre59LJyQfueBroa37ScZQZGY8eviMxcCc1pEmuM5EjDB3psTYaQqBtamfbsjMiza",
  "key28": "527EkeR2h15o3QivDbU6LEb6B48pdBV441WE421qjmK5JvAy4f4UYMErVchLa9Eea7CLcrStTbDrZ77KwN6o5SvN",
  "key29": "5pf3zr2W2gx6Y8zWoGRX7X8yqTJqzjUyynkXbLgDcUNA1T5EHb9Pc6LZmNULjqeUtCsYj5txQPPVGdTCZHVYB8Qn",
  "key30": "5PC9WRxhkCgAP6WD4nGqRpNrVgpXjwPVs6BywGW3qdK5e3kDDo1U2h7UZGGsm93S4dPNeQnsWo1iUfA53Mpp7X9L",
  "key31": "4sLk8F9iA6DyDTGSmWcuzQLxVckQARv8HGhhn3DsDdRSPUYrtoe3iEKzk28nsUWCBHSc3JbPpycgrdBrX14VJncf",
  "key32": "3LHBQS51Me4ZhQKe2tak2iHzQDTsehcznCjDSrGSMSY9haPYHV21aCFMK2PggMvB4JYQifRVuK4HMQo8rjuDFx3i",
  "key33": "2hBfC85PYFoXRXiYpixT4R8RdJSahFQULXdKQJH95HvTfCWyv1kUYpERFCtEZRNTXqUf7cJVnaAjqbV1ZfxZU5sf",
  "key34": "AA4RzUHbcDsXzYqVKsrNGE8ka8NwrN72bmt7zHiAbCTuFQCUGSt813TtFTMsbtY2rkbNao7TWb27YGoPmqk6BHy",
  "key35": "4R6DFSCgrCc8xpLMifFoeyvDUiFFShPUuhmeb8ZSyjHhUgP1EykEVGEryNwoskVRxvD1exAYQrbQ2HKHEX4g73JE",
  "key36": "2bA4UzeiBuCDF4BhePBJxoL3NMTkp3QjS3HEA4tmFRShnLUVy6iFWWdFDsUnatGiFnfouP3yCNYBtvgEJeNRUAgk",
  "key37": "58GiiRytzrEuczRjsUwzekKrXejp2opZPrepuzgoeD5gariQ1CXyF8GNox2yJyR6wd2EKX75mWzZ35JQZnMMKSEb",
  "key38": "3TsJeuZTbmk2NdTiE89xH9yvfc2Novj2EZEEiaPrUzecuCspMTGLbCvLBdKVPXM8W4LrozfFmszCZN8WBnomf7E3",
  "key39": "4GEVKreZXWCGbQfc1raxRE74ZGtX2cVivNVXt58Dke73cFwJPpUoSoVxFKQ1stuuoQ26hYBSdTVDU5novLbcj4pF",
  "key40": "3KD8D9F2qgWaDR2x5JgL3PgfrTCp9z5KLVJLHWVLEcvNFsUwFmq53kXzeHiAPz24inV76Spt4ZPAG513SYzVZ3D1",
  "key41": "5KSZR3TRUTAzhS4h7YEMFbZirMX4yVDDGRnAfoW51fQjwbUwAcVAV2eUiLtihdGy3XPxwr9ARvafSMYahtzrxHN6",
  "key42": "4a4mPSGsninxSiDXhrSacueU9b59e2mnioH9kCpF6TEnrRUTavWGHD53GXxb58L6kjfj1Mx2qmJCeF9THbX9oqth",
  "key43": "Zhx4RvTeJHH4buQ1voh2jhvtyddMzPPX7krLL5QFMxgtkCHxHryhNCkxaYrNbRDyLh6UYbZcfR2kzvqHTLd3CTe",
  "key44": "2CTBzcfm77bF6uJu8BFtLPjydoEenVWMVbc3SemMA74mYpptUri3ao4iBCboAKc2ZS1EMqSEQCVJGoNCfgygL8Dp",
  "key45": "2sizPhqXas43o78K2C1ewYK6MT4ojchCaXFXgBdBB19ZegSGL6sNsGnrm1E47CvnYabLvtRDAKAx4yZmcre4iwys",
  "key46": "557mvCkEaHLcQX7hYgGuouiXRhXA7B3pjiAxc75D7t7Q7Q4hHZF3b8cZgBZmpEYUogFnHadYW2GQUU4u8RSgxX4",
  "key47": "5gkPy3P5Qf3cW3DJmot3ytMbbQxXch66VvrmPo3DkArjEKq85qCd7ThdGRQymPhuQ7sAixPDAKzg8U6dJJhUPqXR",
  "key48": "2MKW38f8i9552CwYR1CGpn41i5NgSHw8mqx3USrPtRcjxXyrYMbKT17CWtRBNLwBUKCCDGbEKbQRvtGr8oEQdRx1",
  "key49": "44LqDCfHSuDWEHWEmwMj6ZQ437AygAuqxQa6znm3FR9aSfU6cWDCgs8h2p7N75ZdZbZHbsw4bXQ2cgUW1bxzKdMi"
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
