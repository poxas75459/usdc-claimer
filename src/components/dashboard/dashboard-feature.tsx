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
    "uSthLznLQiqo54QDRUDgEkE43gxuouWroPpFizZ6ivHP4mFs95BPtf9oK4jjXdNt5VGMwWPDnsWfqziaSi2trmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DodGNbbHKWfa48AZ1StVnP9Je4VyZyxKsjoNcbAZjrRnN1gUWRYVJBnxGKG111FRuMbByJDmRs9BgnA6Z4CSkjd",
  "key1": "4oPJy2ygNJ2Mgw5cHdz52WDKQ5oMP76MK9Qu1jJqWvQg922U7Y9AnqCf8xG8vLvUjb4Ht15rb3QMydBruYmH7fMF",
  "key2": "jdnsnR5qT2aEuVTTPtWbu8UNkFZvxgfaPj2TLwUSEgBQ9Qhj6usmyXW8DsfENBse5cviQapM2Ga2Z5zx4iQuM8B",
  "key3": "5y55rSGWDsvTUztTCoBMvcSpMTbf9RmX8ff5FpXFq8PWg67mGGuMHGc7cgbvvfeD3JC5aq5KF7aKa6CgaqZ9RgX7",
  "key4": "5E6vs5t6wpDC4n5NzLvKEwm4x41QPFsA3tBkb77CMC72wTB2BNatZb96sXTzGFmtCjVYbhQf4srMrWXK3YFCWWvN",
  "key5": "5s4zWmrsQuyFPimekkd32q2hE71VLtoFEUoCW4zk9Z3TjHm5XHvHuMdnjpLiMXun3KbJ6TVjWoCJeoEADmVYiJ1C",
  "key6": "6Hs6xTQZZteTzCLwyoxfuuf4eNRJ2jn2F72JniUVmwBqSdEZWajgkFZbr3s7fYCMZJoAXdqTKPXpwtwCJAUdWLo",
  "key7": "44UhMZBySERXB5zHv5xxvyziNbjHXxNj73BwXwc8vHJQnqbHCeex77GBaGtSr8xGh4WmR1CqTyocQGfniS5ynrwY",
  "key8": "2itetLnx3D3ATKwvG8GT57bH9sP4PDoJ81xAJh73iPbyzrssTXaadHCsXACWXcCBrmDe4T8xxt3VEw87dp7Pay3i",
  "key9": "5tUJAmFi1ZnTtWMghxVeXSCSuiyzNBrEyCGAJ5RdJ5Co4LA6S3JxPgVe6bsB7vShZvP3joGNLy8GMPuUdqqYVMBY",
  "key10": "ddSoymjCi6USwZp6oa3AKxrHefSRCxutDSvLuThMkPPgQP9zt8joxFVhtxxvcAtpGJ812BMjsTSmNK9vQK8AEon",
  "key11": "NDLsJKiqiyKBqgDj9jr5A3XgYaVnqF7iHyfHrftP4ohpKeXLgbhnmLmDkoFc9weHGTwiJK5egMGEQuxLYkkAz75",
  "key12": "2fCg7Y18nengPwx37d5haRn1xoLLH69KwZv9utVxtZHxB8VT7rzPXKGtWjLbN4t65QYCcbBmvQ9F6GChE8xARjYA",
  "key13": "5ETwgNvhm6dAoUTRZP3myoVjKD7xicRDmBHiM8HYbzNd5iGQVFtLopeSfPHgAeGUqdqQr7eXgtjxt7UTzFt3gbby",
  "key14": "2WpyVucRXoBvPpvcBncwa7GFUZdbKW2MMW95R6arvtuQj7UKKhBMCYCARb62i8qfaTwa79QvXdS7D1pydwU5WxeN",
  "key15": "4Xx5brorxCZ5AW5hdkY9rSCp7oHj8GA2kBxjdiCS2RQoWoauYSaP71DCoaANrV49dfHcTM9aw2cQejT67hkC5ZPH",
  "key16": "3UVA3bukuiPkt1d29u95Zsag1cz5kJGbgYadhcoeuJQfswTnPRDBdkCBUrFSkLTrDgHP9CsswEmsF2ABpQbGbWXd",
  "key17": "2pxSvU5rHY8xzJ2LuCv2oqSc7jrSEHH2oNSYf59RHhYnz2vwhno3pi5EZsHc6vAEhYi1LfLZueuwb2TgzoXKUVLo",
  "key18": "5YSNGFmgGi9fE12PnNKryfRHyRERD5PCM4UEtzNXZVoMaxaPUWWX8vzEXPQG6ecot9xWTUBoRAHUzYRHtpLDJobE",
  "key19": "5qSjiEh5HRG2wFUE7px3k7gunU5SKQqJQ578M8BL9QtNZ16BBj7vSc8RUDcuP9aT9KdD6CvV7wVK9387FVgd9Uoe",
  "key20": "45LDR6mj1FV2WVpC8XgATbJfJwFvoSCmY6eudQ5NQHcLdS65DBqH1VQFr7wANjxnLt1ePLcx6vV2nnHbUBaVatmN",
  "key21": "hYn1Gck9UGz7Rkkr986pDF2v539S7DUvsVojbLXc93nP7iKRQ9kRq2BHe6jmMqNdnhUvAbkH9xLh2Vo9mwdXMwc",
  "key22": "AWxXFNbiVcyZhELvEcHDZuZmZ1hg58TxsxodkEgKxT329YRX9GBTKHPQMJwYMUzBT2xbzpcPoNoyxg84cw6kxZE",
  "key23": "GGEZtAShpy4hkrAsSnfhMZsroB6WLtrGqcdeDueH3RxoPeBasa9tGjv1dxE8vM7ME4J7aDQJN5X7LJcCxJvrHSE",
  "key24": "4qaehqQNn9Eh87TrB9JyQTojkFEDB7yYbxAfEM2bEim3QinuNCBcD2QQK9v9FsaVKdQQcQZMwHEXHYBkWv4GgFfS",
  "key25": "2oXWCoxcCYjTqr5nQ7tYtoPLZVGAzmtB5gDuYZv9Sruv2ds7m9v52rH4HUhKwMyXppo13hV9dj3xFmqRQVBuk1A7",
  "key26": "2Giod4n7TUpb3ACJaMzS5Yfo4ieDdaU4uaBt79H36wcLUuv5JGRv9rNRoSN887nhJ3PBevRtvFxfm94B6oLcAxhP",
  "key27": "59E2f3DPvcsupVgdWVswhBKtBNwKCw3SURUtDTLnicQ9sAZhk85Jyby3uVGJoSMss6eF1GZjhDGKUxKDKLFjsGMA",
  "key28": "KQ9kd8x6bHfz1DRndnnEbCuYHCYnXqhFbqvaePAzqrA73hL1ECwGyQA214dykCfCasrXAoYxSy35a6Bctz94Pnh",
  "key29": "2aHrB1YK5avw5YQntrPx82D83sCVeiMJ1zvxnd52Lndhbo8jRdGPUQrc9G7SP8ey8dD4Q788KJCeYbJLGsJgxX6D",
  "key30": "2zVACYZApYHA7rKmFRMopk8mhdMBMp6wu29pQx35K3jGfZLu7nDxyVyLrRbanwmKSTpGsW5tzptSTa5VCbu6btDM",
  "key31": "3soutNWsP373oUUfqnVR2YETL7vhqKTeVjissZH19cxjTagEHDWRh3t1zqL6iHR9NJkKBDZcr6nrm15wP4DNdFSQ",
  "key32": "4E6RK34q2eyqUZpFUfqW4NoTTnkkRbUxgjmJFcHvKCHo2R8pxyqJcmYtDTTNoywYP8s44wETw1MeyC8aJeswBRVp",
  "key33": "5MRs1PmgndE8yBvVR7ocWGUgaaiHY9VKznmaDLmMumzeTBoj64CruRbkvHhTrcrBjNg9ceQYKnxkzDgru2BQ1dmP",
  "key34": "2S2dKgR7AXMSbx1QUC6MzTPYPCpKeLoVrMHN1aFRUhPG6uum4mEsbMdR2nvoaeqXaVoUa7ASkkQ8K7BLPYgUUfzq",
  "key35": "3kSxjagxue6zo4J7DN3oARN2FgdRXCY1EFpdow64UwvEuupus46ddKf8woyyJD6jUqLxfS5pc81tgaRd1XbNVHxU",
  "key36": "36SrRKcZKaf5nMnw21mLM1ExSPcNUTiUNgawjt4xUabZ33x7Y5idcoufTui4fj1yKGyhxsHQ2JG7Uh7HQtjdz7V",
  "key37": "zanR9SBC1xCimWS6mhyKrCijzJMk6ftWcZ3CBDv7xod7nkNnrk7icaRTfnbrfY2zgyhqYDinyZrQSdzqr1w2Db4",
  "key38": "5cewM9Ket5MR5VdHWrrMpptzVvaKEFGJGTf82vVghNs6g8AW24SsB3gQqioiArxviqq5seHdwkJs4JgYVPP2hsHm",
  "key39": "TpT2Lu6G2MtpJRkmwRU7a2CdVPs37LBzWgEzPfsiVtTwfP1JXm7wKrG8CLJgVp9RWQof8UEeKnXMsUP3VCvGRqm",
  "key40": "5XJyLLmeUF6a2U5ruSp2mJ3sSjjxJibu7sdY3GcpEesuaVe4eUtuZAfT6pRu4hENecJDQg3fPwNTeqYencohgZwm",
  "key41": "QSF8C5uGo7CgJuqcCCKK1D15cx8J739AXUorhAbE4TbGPy4J19PVEeb9BRQ5APejTx44ZKD2CwZsyw7Qp3BbAwf",
  "key42": "siyT2E3bGzKbgxBPzrciUopvSZtj1Vv2MtiEPHpzNFbiwzphWpxgDvpPZHwYjhQ1uypcm7TS3gcGrQNfHAjsmhK",
  "key43": "3KvDk2vhZ6PRzWwtyKtTYoTuFV67FDTF2fgq1zVJZFdfk1wY9PcuVeSTZVDDnx7B1eHSP5czt3qbQMCaPWMs6jt",
  "key44": "h8vhQiDBN9YDTYrVbqS82mGXeypPyC5koS8ENcTZdy6QcLn4QwD6c1kopiEPHC6muKmqChrbUwfZmuPiaABFpt7",
  "key45": "2LyggsjzU2V8RJ5ZHAc5Evuapb8hEpgahbKY7p59rbygZLAipXmxJZ89XRPmRC7j4nkV416S4qiwjbXUGNAHmw9x",
  "key46": "2DGRSBMTetB2gGzFs5LDHKyVsCCqmvK7uPzkAk8dwiEnY1cgeZx9Zn2Um7Uco8MG1gtc5A1dryGJoNM8o7iAgKgs",
  "key47": "4vQXyCPu6GeBSGVUNkCMUujHBKZVKQtHpaNp2nb2CgAAd2vHAiJ5EBN9jzgv41aBuvZtuhyf8FP2PahYQv9qNKjX",
  "key48": "TAhQcmqHTR5hu2rzw8R1SxhqSYeEyWoskRAAs9C7Bs4Qr7B1DLxMLXytQe1KupHY5QDiRi7nz4EDijEzDwHR4UQ",
  "key49": "x3KuSJ39vNats9wSyCSQvJeFoC3s92H4914CCazw5WQTZJ1SkxcfcL71oDppxiHT9VRzXmTuTXCqy98Fj5gth1X"
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
