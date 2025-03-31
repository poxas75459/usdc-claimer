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
    "2n12PV9Nq7H1ks1nAR8Wrp93TgozyahVfEztuftBvFPfr14Q2EXCuHZg6xzXUTjX75aaLiFp2FxquTbhLy2ctYbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTWquh5DATQP7AifAfvSEwiHLpfL5RTUjwDVxV4PP3KP3EPYceTohMofv9JaqhycS4TmNCKdsAHJGXxjVZV947",
  "key1": "2v61wfeNpgYUEazoPB1B79477BTEFV6ifq5WDEWQENsbPSZhSvGi5AEaB3nwfeak9aZrJTwEg7k1Ri4ueDk6t7tU",
  "key2": "3Z69ShjzffbGJZV4NVGutDjw2h7DQBHnDrvpdKLs3QNghHoiSJ1AH8iTv22stHCfzX8vMA3ju6K3gCp6FwqtS93d",
  "key3": "2MpQY2k2BUiqnEE9NVjxRTWdqtLLosbexhU7579ohyGuj7gzGiAghUbvEHUND4vWAhwsfJK4XSq6KFRkx3Ppkxkw",
  "key4": "4VxhrCFxjpah7od4mLotHmmcaKcgez4rQwNXS5J6CpzycaoFcjfCeS4SDPe47qbBh6RCMvUsPRPcpcTzPMKRkxAP",
  "key5": "ejPoo41RbcGKVAjo4JmAxDm6JfxiPtmFY8rCK6EXhm9YTby2v6QwLDbZMY6WQXZxkkG6x9wWCBXaqz1Txe4mkub",
  "key6": "38JNXJ1AHPBvztBaCbiNeZZnWLgHQo1gkpP35XF9fVoKTPMHvpaGE3W3T9Zqmrek48RwZ3TALa3NqwPUc5v6EWMx",
  "key7": "4NTdewif3i1zz6maRsDa1gLKHoLs3GL4p7wD1dziPfvvruDJSVyhUpWHcG39m81Wp7iUn2cBkt56xPm8QWRU7Xiz",
  "key8": "ExgWJZEHsyFw2hpZLd3aQuV3rJWZZZZw2rF66piMdkTgh5cj4pZvDDpsvi4BySJCogDcGnS5bP8qSaKsCQzBxqt",
  "key9": "62LxxWhDKtx7XWiqvbc1XVv6WFfNjaAgxD5Cdj4X8DT6bXhLJUpqDXpqktEbiyRp4gsf5vB5cHATEr82FVC6hsG1",
  "key10": "EFgt5RzRkXgWzkHahwb6Jj14YyNM1xu4VbA12JBoWyJ85DPbpRSrEXyAuD1isBKk7BKvtePaPnr2MMg1iDsu68n",
  "key11": "2HNtDQSVKa6FMLAXkuDBUMzaZMwoR4XmMPKVasDAGE7LuTZGb2Nwt19VD1Ra1oL5WfANRVZskRKyqufVRGks9Nrx",
  "key12": "5ZbxZ6TFtAkHETHwcNi2XoxypfKMmtPDMbqQBNFQriTx4vkVStBynKyEjRGk7K8rrSDoSaYx4NhM8HjLVL4h8tq8",
  "key13": "4DiB2Bg78QoNpkGt8s26YCKcRfJuSQrYQji1c52nhYTP3XTU6LgbWbhAr6Tm1maGuzY9qXoxnMAvSAJvChgvDVAG",
  "key14": "5Egq2W5SRBGgjrKnTzXkzzavXiH2FxB3c2KzagDGAEZnv9YTdUhwXiWFQ5zCoS9xrvw12Dp3onhUU2CYgb8uvStQ",
  "key15": "31ZEWFHGpEnVEXNbtZgYWQRvTuDH8y1KbZpcAg85ubCB8Stof3QVtkjCqckGNdxvcyY23XyedCFnTHNVDhX11ioH",
  "key16": "2xvmXHzFmDh5Wm4Sdu5Hob6647ahjCSaNKnd5rzRVYUt2mtyAZedXwwZqVpdKPQokYjfnT9oP5B2WEb8KG7p9oSb",
  "key17": "3hk4FikGA3CiKqZbvDrDh2FembTTS2AvGTurifFpqiADFqvDmtnDHEjgDPXaFNyMfZgmMrQgE4R3FtfbctcbhNaK",
  "key18": "W1x7E1fnh68MfHDjmDhaXmXVCBQgLM3gF28aqCuRPrrThRHr1yMYXZz16Z6MnjAoNEyZMeVpmX48cenxQN9FPCi",
  "key19": "3vGztoU6oZ7aWoSWXEFMpCPoBLypyc7avmDdZ3MMfCuh8fWSoeGnES1To9qZ3TRxApv2cq3cYSWK8sB7kuXs5zRy",
  "key20": "3DeiCzGxUvFVtFPGVwtocAbzZXbxR7cWgjMDSe3iKSXxLAU4E7fHvXX91GghrkoSC4bn2xYSfuMpNTi2XpRHHMRZ",
  "key21": "4qSXAemu7C9MSeHyfVKDABbbGcVM4RfnEuiVTqT5S9LAdG5u9gt7YQVAtEXpFwZFcegf1rmL292iCEZ4uq36pDkT",
  "key22": "4md8jKiStE6rkPHLLRZLdPHQrCWgwra9AaLKc35JaCuhh5eaDm1ntwWuyuwwqvRbZ6UhFWqhwvhTMeRVC7c1pau3",
  "key23": "36eLVyAs1gqVdDQ7kkGYBBL9Q7ZCrZCkWfPC64794JvvT55aEiRA9q47XjsQbKmY8WPP5YVcBcbBbKnvKuuPMCzi",
  "key24": "5kg2Lw7sGaBhzxT3ER1At74uSKJXfc8S9321qt2ozezsrj2ZGX4rpQQk4J3SfYS3ehMhKVwmA5pjVLTbCVoq28ik",
  "key25": "2fVoZbTDWRNLauKEXDKmd7p4t8Xcjd5aPJgvVhHL6JnH9pgwM65osyQwScNDcDJvVYzBmEF2jaPunoU5DfiboJKE"
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
