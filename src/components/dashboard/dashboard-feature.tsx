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
    "8ehgvmmyeQBQHJ658SfPz9djxfCxgdux26tXdPFZsdUt2uPofSFUBPefvpgeTAm3msWc6MZ5ozqhFAtLyfjGQuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uqU6L6W7B2zMixyki3NuHXrkwU87i1RM1yx17S8X4kSm5wrJFR47R8GNAxxe4sV2RTU1f9o8USPArpCA8aamFmx",
  "key1": "uMVJPodEkcNAE1AWN3AtM3b65KWHSJcSx7MRSq5yNvq11Efr2qnEX4SK1HaJDFNDzU9fqn4u3XSJLShcgJDyETy",
  "key2": "C54KxTmv8NvS5ScPL75XkXoZKC6JoLXmAP2HLx8njDFAPEQ2vv6zFYpc59RbDPAaMDqA3J86wNazMNXewXgBmfi",
  "key3": "4XZghNx1q6TRBpaRDQFfFZ3zuEA6ekoHuer7gRGvH55Pw1fbLJYLrPXRtEdUu9UpeYGf5m5R9cCiwiiNYSm2grQ4",
  "key4": "64KM22wpud6kgts6srAMoHUduQaGQmJZnBBtTFetUcBNKjiguFSEP2TE48w5HQp3fQV6nSK9fH9CW48dSs1is6fA",
  "key5": "3H3j254k5fohfrNFaKHVpcH57wuRmthcLiN5yLo3Yxv1j9n6jmm1TciHxTARGMXFEs5MGkQwyDYZ438xUDSLipjg",
  "key6": "4MwTsDXdvSRMZnciVNT1zzu94BCtvtZZguQV6xJZT69rudXzLgVSPhCYA7ymQHmFd1wtsCcUGXMtBcZYz4QJQwRb",
  "key7": "4SFhRa3XyvXutg2nLheCR4HMVdF6svNjiVVQFCMpBhEtRuJZe9VfNQGAGu6j6HcjLSyxmPjLd3qC6QnEG4Bbgxw7",
  "key8": "45hBTDgoUnB13ox3hbQzxohWhSCN4YvhR9JBEQugzd4Ac6MnnVn8JCDtHTSZcCEg3gHX1teSopJGU1xQioMAm74x",
  "key9": "2RZTM5KgtrGJDwPs1vts4xEmCE97MGHjMoscXHLVe1KuezTrSThS6j9uXrgtHFT8jeGdbRxj9JaeSX9Wm3jRV4Rg",
  "key10": "3bX29rwPrLisTptvGLdAM84pMdYmLAuRbLE3cKeRTXagRVTRZECPJVF6NBhC7W5Xj81Y8kufgWuzXvNEJwDPB9yq",
  "key11": "ucgkND6gjkqdvNjAfH38VRKv1BTpN1uicRJh2EmuSiTonwZMYk4zUKUr3uDRGhD5RpR731qBRnRfhxQS5v56YFp",
  "key12": "5RRioukPKhmJk8VRPFbk7U65CzKNL9sqB7swGtwpDCesDRt5qz1hjvKmpvzfg3tbvxxfpxRG9rqxsXpAbnvZ9dfP",
  "key13": "1aKFru4HQyaVjw2Qh8wgzuaa5rPwspToefu55nP34XbDWmAx4uqQsW294KMrLCYKtjh2arkSotU5hTFimA597tJ",
  "key14": "3azeJ4s1w1tvGgK9LGewSU4p8d3aJy9afEi3cwDAtzJ1zV6Nia7DhiEvcfXZDYA3YsYG8DKuDF9Atre6StaMxjtf",
  "key15": "5NMNrr6LK21TUBFsvFX3D2A1wDCST34J6AwCXdgNDun1oYwWGzav3p1y8W1VgqUfqKZZhJcannmFpiho1EP7TLoN",
  "key16": "5uUmMrvH3omsJ2ZnACZ4eCDpq1G6ToBBS6LiKUt7A5HQARSCpmNbiUH7FuT3v1i3g55XUm3Giayho3XDaR4kEfq1",
  "key17": "4yXFw4zfY9JTRiCGzR62EroJAVhG1oNNZNVgkwNUPozGLgbhWCoABkVQCZXn7aVr45Zyn1p5hW5XBck6mMgvVjmm",
  "key18": "2DiB4BdUBv1X86Pj7mc7WAm9xx5XKwe8xCoiAjHxAPQDA4RcrJcoZjgKcDuVq2bR2mwWNFLxzjdBhuYcPUszXJU3",
  "key19": "2WND6gDQHogbShXfgf1ms96MaaFd8BcqvqSt4QGAhdVx3eFkE9aCqV3GCsewWcWVWj1WEPJnj1ZAF3goh2mGwfiL",
  "key20": "3TPBbDwPPT2Dw5raar9YWwUb5zoVAXT247VDxQRbJpRrvDkpVFeRwMNK1pBazhK2Wnrg4iU4QPDMdnE3rC7Nigfw",
  "key21": "5ybZKPZCSWf714tuxWRvdPo8UM3YuWL8eXbEXZ8DNDFnLzQwbJQrbwgjt8D6L1EubohorfXie3bGQmEhMNfP4r9P",
  "key22": "Kp9oEfiT1zwxoeg7M7p1UNFB9yDEmyUaee1ZQx4J89St5N2Yo25Ja8g9QTJB5PipLbBVwXyY3JzBWFxNf7yfGKt",
  "key23": "2UqB7KKais3XcokhsbJCpkN2ty6wThRLWH968v1gFWkg3L5RrXER1T2TJxEbMPqQaF1wQqH3fAcySX39egsBYsxW",
  "key24": "Vs1WR3EenxUDyM1soULjTnP6EMno3QV74oPaCrcmz8ssv8QgLyyhhAJDL3XUG4LBXxSaVRskASfx6ctDBZBaqxP",
  "key25": "4n4NdVDHDTirmjU9bEfVqQE5zvoxcMohqBuM7pbY2P6ocoaEA1Zpq27qPNYT5UanRbueAbgJpYFVyRvhkSHYoYeu",
  "key26": "2XjKJ24DrVgmDiYNMaEJ8KnU13NznNRGx96exxq6YBcKsTLabMhbPrtXDKFKaSjmU8tVbZpV6q3onWoGA8eSNAmB",
  "key27": "282himt3rqfQptUsuMckB5kUaiPmnk3PdHECcRhR4Z7VdBVmYiLpybWTGNHkQE3AVuPfp4HkPwiEP7cYYb8dX8xb",
  "key28": "53vhPdioU8ojhEW3ftefsHoDf6ucynS4pQJ2iAjJ5eLVC7qNvB3jMfAjZnJPrPKx2z2uwfAbPXyg3vvE79Gx6RjM",
  "key29": "4HYv2WXDP5QaMfhZDRYgdE5fLyWaiuPKBf22X2UniPLSnk333SUUHb5WqJteZZuKT6PViY5efw8XK3B7dyzeBh58",
  "key30": "3LnJ1F41wX1XAMwFgf1wwRSd6PpWtiYJHU1NLr6jXU4vuc248rGjBrayvZoWsxK2xvmR5pVkLPvjzByAPKNdVaor",
  "key31": "2seKu5MGovRqJdfAmpEZRcjQ1AAPqsqiZMuhBfTdtYx3wGJT6mwWvwY5iGyg9KPwCHTQiE6Rb8PkdkT4YdaTDMH4",
  "key32": "VaeBJjANXZRBfdzYyagiJF8c4kq1v1qPqPNUBziPm9QEcjUMpQKQ7wLgH1DBtVKYLqTDx423AbaaRQ4BB5UNyjJ",
  "key33": "oZXGofNUGjQX2N3menABLu95MdhUCwzAJ4QyV36xLVuKob3HQzCc2CLacfRp29UALji5w8YcPiBqQbwPowcwczN"
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
