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
    "2L6GGemN6A33ZWPKRCXKG4rdQoeZyVgaCeTZZFfKFY1Lzi3aUEdbMHtuTmVaeetLtkNoRQkTyra9BVHHq5uetMci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUjS3KZZBFHDcNVmahxCY8ciSbnRi2M3uxH32gA3YtzPfWy5K3LNg6nNh55cd437XSAnPNkEFQRi1Aas2uKHnhQ",
  "key1": "53eaEN6fS6kaosdm3ja8EsRKdA4SN52bjxkmRrsr5FDtcpNY5H7xkbFQJ2YRkvpD35V9gBbGepiwnGjKyy9nCNXB",
  "key2": "4LRUor294XciRb1RsTxzTw5iKErXHUM53cYPUogo426bTN2ZT6X9ijprfr4x2MSzsJpsddyi4GPWEiaFf1ojW3Hq",
  "key3": "56sBRv68prJP8oSgUbB4pn9hpR2dyVC6LMcJsaL5dgC5eyfiDL6LJ4kSCSZUByWgCELbgF9JUgMJXbPsGBW6M171",
  "key4": "5gtR97UmPReyfk2a4giDk5HJBmpvHSJYTqsuiw2NUjafLEZfucE1Ha64rf8vPLRgfygNXZ1qzBUnPFe3JYPRAkaZ",
  "key5": "3YBEUPSu7UfrDvdbGKCCbAtnJuwLF6sCmjpAi43JDfsMCgaRK33edQF4G9Gejxy1Y6V4gw8kZqbtDwiqeGzMWuLf",
  "key6": "68YKsUoZHdVLZJXgXsNDEV6sqDKg99kJ7faBxoG8kVuFQyNyZmnqdwRgcAsn3Qw69YnVtbUrQfgbobpV5dFvB82",
  "key7": "4FY88nGyQEfi43fSanTyXvxtdD3mMGhXMdic45DyrasN8A8abHhjMTcMXsH9MJG8NgENgGWf9Awfs14gi5mWqfmj",
  "key8": "3XVP9GUJDm49J4VpGy3PP8Dj2eBnZAUd84yMRBeSbHa8gV6nnMRZ4Qn7w3ovFycG2e3hWPm2GhC1AfMW1854RU28",
  "key9": "58MChZkhtCztk74xMMpnC8Kbt2yGw2AkkSu3XoAnrcu7fNy6oecjk4cpmAvtczSyiCwu3VqYyvCnyg5kLXepdMKY",
  "key10": "3JpzoLUk9bSDDtSFBu7E9PcMkkZhbSj4akchH8CLRPVYZr7K1FAyvTJu3JAQseGiEMZWkuk83sVWG8C24sboNoq7",
  "key11": "5uhWCjZrQ34DpNnidAtnPoHoSRbTwZSxZHBrjyYD6M9gTZx3GMCBQJ3WoBBj3BMEP7zNqfVTMstVsZUFF9JSRFCs",
  "key12": "2XHzAisEaStQZcsdmUzPLCPsSU1cqnmgMANgbg9i4JTwBsv41zE8T8oVsq19VL1TYGHHCJCScgoZYy7uQszs9qVJ",
  "key13": "4xPW1v44Y8aakAeDh2pqeQy5svqxyArUBPXCi3A8FDDzRmLFbBmGxDUEWBTTPeWNTNtwGqqtTZoaBKRTGffuGbzd",
  "key14": "4NTbcdsejSeers269PQU18PGwTKpib8cG38z2cxS6xSPWcESKsmdixyLKpfZnU1rjAq1iLMZEFBmMoWRu1mpcsuh",
  "key15": "3gBbVzPS5wRppNm5kaVsHEgvjNem6tZTwhFKNSFczopmjDyPmZkULkgSNDSomz9mVEWqCnqWDJDhtcrDc4ZnrQFN",
  "key16": "fi7bXeYLaEf7Bbqs4hgnefQsRBna3fL7j5LH1aQNHGcNWtkUqwFkQxZW5CEBYG9v4aDCV3fCYSMJ1g9xfJtWunf",
  "key17": "4qwsuhxnw92nVHWkzBJvFP6gjVMZ9nz7w2y2oBMw6a1mCCZBuBui5o1ZKLifagZnCioG33VK3wqN58sg3r3ZnT5x",
  "key18": "2qEZ6TawYDCfbuSKy63AzpGTsMegD7k3RL1irMkCdNhDf9pkBrqAE8bFRuZqui2hcW7E5SPAnv268M4ZSfij4BG",
  "key19": "4xAX3vUS4t9iKCobDbyxteYT8ceDK1tukofE3q8WyQKn71B3vYTbAHKqHjDTJfS4ffsEGNLBg5HNiMopqyiYnhM",
  "key20": "5DKTecVoXvtScQ41G1dtnc3dApSd9YqtocedVAEE5JaybogKYy9Srn3WRigmae4yYP76zvJw3NY4N89vR4dnzGAm",
  "key21": "32uVpDorT6t4gNPbGhKBn6PEsVEUhMiskLGQukgKZcYGbQP2KiW8bDNqQsPdYTJmKwfkaYDU5o5yQQNBRhXpoSyw",
  "key22": "24Z4jYXxEJVGFQxcpRu7wnLjzJtL868XhPETeNLt1ivGYz1n62E7yWRoBVGm7wEXAG8anu85EmcdLQx9E9TMKa5b",
  "key23": "2fxtskEk8k55xB9asq4pJWKRHxXBa7EzdTbERd2Vqg6pWFN6UubVgF9jAuLwy2Kdra8JU5QfsB2QYXUmJm16UiLE",
  "key24": "2WRfsc6Ya7d7jmzc9aDU3H71RX4W2EXDaYdUddZieV6qusbP3bvFXqyA5wH2sCHUbLhkjd3hnQTyX3RirtwSJWdf",
  "key25": "3CSvAbsRxZfzFhpHW53dqp7jEAQedbsEMiN2f5bbxJzpzGuNTdPGjRVAtgJ1cy8icZvTiP6r8EiTVYg5E1og8DGZ",
  "key26": "4Ni6ZV1uDfHURh7Z3yA3ZyuCginzmncCmCJDu6bvwjG42mtoTgyZ6y1PYA88m1RJaqLvUvDCsVBLsD3Yrq8gK5dQ",
  "key27": "28dRwXKN12vBPyeLruaSBarCUnhVt8PM5ZqeLspBh94FYJSyVCFnt8f3fGg2RvqnpCugBCHYb8sCRcqCbWpq76xo",
  "key28": "WFKknCr6kn37uvjHqVkytmBGb6mhLoiRTASgpZyixwj2U6BTc4cotxDmp3wmwgTfUKLaT7eaLwqLJ99fsHfzH5K",
  "key29": "62rhNm72L8uZrHBarTDG4xRGxuumjWUYUWw47i8KKTfNcGXLa4cKtYXTNkoHbgrThdHxa8ehwktWzhh8bqPm9eAZ",
  "key30": "595Q6XZ35G5w4U7TRaHPqPhEE87SXHmcNCw9bpAQBEJfz7wbaTgqonXaHvhnoojdm1rpDz5HnpLpexK6y94ZXXY8",
  "key31": "3aHyD5ibxpGYmxM7TBhT5oX6vr9FQAtVgcgtSMMDMAbaUyKRLf3fKFuakkAURVpeDkXzbpqykjc2PsT55F9AA8hT",
  "key32": "2KXinSX1FvCm8xM2ARUwmDnTQUSFdsQ3NvpvwVXjAZizkMXu7GdZ71v6p9siKpqbQ8QmR6JeC7Dmk37466PXPtA5",
  "key33": "2Yk6CdCzyyarUx9P5XPXutaPBQ4G5ozF128ZvybKPTmBbfrVuwvKQqqXyS6Xn4XLMSkExf2BALmK2GASBLhpVYNy",
  "key34": "5AUUU3Wze764JBYvaefo1Prn4wyD9PokGLALGtpepQ2n7g44n1L2kAGxcCjzXSboShCNzjobXfXnjseiPQjsEebd",
  "key35": "28XcAvjFRaAzUCBAFBozZzsTMbXhgoRwMaVq3ZLcbSBM17RULrbbYoeb6fiabqBbYEmFdBf8hRbkTUNLNTwRqcco",
  "key36": "2HH6cHEHDKE5886BdDyqQzrM6BQ2RJqC1XxPx3igv9UYxZLpmxN85AX57mCyjR6wioWW9vbNgfJTcPX2fyd32A3u",
  "key37": "48gqVEQPRYh3ZXgjsVYfHfJu4FzvUaQJ5tB9cM7Bm92ddcDBthevFCezSH8LErNtyPfL2DCg5rkUGLUFr4kmUXH5",
  "key38": "87PvLiAFnjTJ57xdMiEkS9qr574jSi4jdCkfT94c4cYLqCJKXx6F2h2z2YdkU1Ny4aMYbj5rMmb7vEiPtH7mfjj"
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
