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
    "3K4DiFiuRjVpe9dpjMqsvqzRWp2K2Yto5VzgWKPQ4Y3N2sQ2yAHKzZnXPdUkT5xpyiZnRpy1mBb93m589mGYxx7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6RyPgjWXfbJqXzYxEuxEacjMp8S6KKdPqKnzuV4jy2fcEUXuHjRsCgBTUpErxWm1ghSyE6U6CPDeyCZuaMw9hh",
  "key1": "3A8p6Pn3CHTEHxjf4YmW6FixKJ29XCrcCHU5ogLAbRh4nH8tuVuZVovxwa2j2DLgXWCmjw4746gf1THt1v7eJRCT",
  "key2": "5M7pnxwZQTJjNrLyTgfVJ9iTgKhUGPBZjnBhD83YdTNQ8WqVdayUQsknNKwqSSMghdjMiBiokkQBLg4B6gd4gT3K",
  "key3": "5g542AsD1ZiGELjdbULKVjkd13s3J45hM4Zt992ixYdLDzJsQVwo2jDQWbSFczQiCEiHDdSbc93XJ4cJ5b1BXioC",
  "key4": "4rVQ4qKyM3SwLLNysZES5SxuRtKTizC9uQK4ezy3ujsudfpLnBoCwoBV9z6eiYGkE9LztVHseRmo89NDz8yr3R7s",
  "key5": "675zabYX6YztMXkbGZufoxCaWKGXfciuGFMiJPpajy6XhEf2QMuGm52CSfVM1t1YB6HQYvCeK55L1eHV1bBS14EF",
  "key6": "3gh1VMjkL9FjuoQzRZCshMgGqNZNUiQadWVXgeawb2C52UiahtjEy9PCb72gjpqMW8s2NDXCeqURSpgsAitKgfsJ",
  "key7": "55h9HLwHcEAKHTJCHdJh3CRj7Bd5F5epCWp6uqU16QEQEU8buPyGpi9TYd4dzECXr9NTMWE7LcUwXBHrMZh4weXH",
  "key8": "dEszm4cxtf1rEGCfADJJwXTWpQ28GWdGKXyfpNFfVVrqEdraKzGkgvcehL3TKS9tsXqfLaGqAFvNot7yxDcTo1y",
  "key9": "5PtzYM5VyoJ8YihVNWwgD9nswQ715bRjGkRHJWeFC6jCP1iv4yNtNPPvzUMn543fNV76UrgMtcjH9vGkmQtzqziJ",
  "key10": "PN69eBoNCKpUPNvR6hxBp3UsUppRSfHpBiBfcrmg8eAHZ8VsAbT7groNgQ5Dj987SoBE6g1LivV6kZD3PpgJKhR",
  "key11": "4z8dtyQo73PLthg9s7dom6GmYFhSUjPRZXSkrvMsAqRHByC5kvwjLhVqZoczA7KXr4nEDx5Fk3uDe2bzrTmMqRr6",
  "key12": "2i3FkzEuoLwfBJd571PTqykthcLRpsf37LJee5RxXdE7q1CkvBn3BpFg6LHyrHsmxCRrwBFFKCeM1EisAbALQM3R",
  "key13": "3JUkaZNiTDVMPog3bxgsDREep127MNZF4yKPfj6WncAzggYwM8VjeU8sF7xpXcGEWYQRAvMXMma8tjymysUPVXD1",
  "key14": "T5rM2HBo3HUF6CdiWN6et2zYs24bLeJ9tX2jw6DoXZTvnKtYWtvfD8jY4CHMhADNmaXrmXFCv6ywq1BCcox4PAz",
  "key15": "WgTG6FqKVCX5RooSxTEKbAphwgrirsaLTMCW4eXYw1EMYaSJ3tPKYa6motc2M5Tyg1dXUyiGhHm98aK2UJE3jbo",
  "key16": "3gawTDDLG3FahHwygoFM7XsBFQoppCAwueEW7pSVX5RFaokkH2LhZAWo1ynPD4X1EhGDxdVJL9VwuMGT4NsLpjro",
  "key17": "3v4cmKLGjkTyanrduKcM8G1tbgTYZX3TYKD6dgcUdpBVxyBtKHucxZAWBxmNPe1Xrs1uvH2Z9SrNCv8yQkDK2MWm",
  "key18": "2dmgHtrB8TWL2YS6U1U9QperLcP48p5Rn5hbTnbfhqVaZzcatAdNGmUSo6mTt82j8eNk6EdhV6A8Wuze2sTYhu1Q",
  "key19": "3NhxJVKFhe47V3aYMKf5v1JwocNWhAojVtW5zoS1AvaAkcNW2aCG4APPF1NtHEMPD4KrGuEciNBQ1QtoF7rbAfBu",
  "key20": "65vmNFWaxVnEPdaFXGp5Y8obMAgiphwN6oSuoNVpRXwTyVQNihNdipyyunba9BKF7adCeRGD1Y3r7ZpguWrZgdVN",
  "key21": "5DxwTv3DFrdp1VSsyPJ55Cvg1bDz9xaVowEnTRx8E4iyBMpU6pxim9MUb2HpPEJcDWsschCEfE3ztBWaG7xotMZE",
  "key22": "3FFS9KbBzrvNxsTRuk2uWEK7Pzgjfzy8oNYVdxxBmb2aCrmU4pvEergCYpuZeH65mv811LiRBpWFxd2b47RwzJiq",
  "key23": "5GFKwRuF7cE3RY9dCrVovqna2eNiUZfUJRhjLcUf4jnB2oZNi3PiZtAgvc9zb3KGTurAj1RYMt3BMfigfgxngxeU",
  "key24": "3Qy6PJmZ79umvm5mkKDj1CQrHixCGAmhe3qX8oqPrdtQgqfEENTb5zmfHar6HqVpCP4Wk6TyNunhBP1Hs9GnKsst",
  "key25": "3r5rV5Kwp1hSEd8VZ1LiSVQAcSSdMLZbVXVsUP7mT2spXX5DUkLqBbsj5HauhocD8Yk7ssNbeYfVy8qzZ7ekXSVa",
  "key26": "3ytnZJfoqoEn3TiNrmAXawEqh5q8XNW6MTcNG6eG3uC2LSgkZMqEbm2mmAeDSG11Gq3GCwcWyMSdTQAxHUraN4pf",
  "key27": "3PC2G15gnXhYtRzUW1TJxYZdeqTXchcGdE3QhyUm6cnNbtFCsppJxdjZ35dA3K4aYP4jpg9d9SLMkQyrEPoKDKVC",
  "key28": "91nmfSiQskfcgPPK6muhEnFdzvkyMhdmtebE4CfBJNqWFi3nMxjtvgWS8kagMrXr59KCqVkZgohHCpbeJiL3nKh",
  "key29": "2pHYY6aUMQVhMz88MbBjz1tApauN9wx1Ey3kBueDBG1SXp7SMFCPCEeqFm2qkpHNuoxBrEwzQMWcWSi7gotNfama",
  "key30": "4LMbZZ4Y4vgBy5WTg57FnZ1MN2HCo8LNZMR5SM5aLxQ6aVZxYSDHc9RQx84QQhdVCUkeuzj8L4JJ3WdTb3v6bEfE",
  "key31": "49hXirv4opSdm6iy8mvAo7U189UDUGsnKPNmT6eCdaKXNDddcgGJvFUbf57SkBrsNhwfTj94Q4jCT8fAcfReWBYp",
  "key32": "5x3RUdrwKmWDPCJZeCh2To1eeSuPu4HxDgsB19YauoyAiwh9b3JaAK2G2aHynqakvo6xZaeuZ6dLh5My7oH6w9ob",
  "key33": "2ZnFRgSN7irgNqBkMB3kSJcUzVcS9rPUVRn4jhZ3RQZUzPtaMUs8x323V3QiKxaB6Q4hgwGE4fCLux2bStoeLAUZ",
  "key34": "27q5N2z9jq2Qpe41jck681MwXN4NdLEXNvDJYvPh4ipxzn5mJby6MkGYK78NaraSoSMAZwbHPVReUVqRddasEMCc",
  "key35": "uDhYskduYWwxgVbFYpEAe4sVynzkjw9v9X7YPTgwfoVWL6Wvh4kkSrHTQLes4xMh31qugz7HQkuzJQiW2VSkCs9"
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
