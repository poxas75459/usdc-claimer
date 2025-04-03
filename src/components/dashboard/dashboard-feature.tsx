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
    "5Ehqf3HwwKWmHRyrie7Q9DLJjcFKTALUoutve8i3aXDFQpC2nuh1EE5gUjPZUZnkKXL9zfUQn2ijQqJBgWRGJkyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnWooFEmu8S6yf56wzULcLKUZXXnVYmVvj3feaFMWibdFk8STY3RbChHJLgvaggDw7Ru5eSdrF8wE1UZ766eR77",
  "key1": "5jvkFkmQG6dLYQLUYNNTKEeq97yeLXFbMCQh68mpakMuAk2jN5U7xHWYgP9CC31jbMeDv8EEyThmq1a7qpB6hr5z",
  "key2": "4tpnCqrFQRg5GJWaSSZQMeiWKJWYCm4SgKAyzoC9UaSG1kS7BuoWaji7P9AUTpWPpZXHUtDHENa9cvt8AgMPWV21",
  "key3": "32m2thXZm2nsqcvB4uckyAYHiarEf25LUtVhhuRVTiECu7k4634TjYJLxdDmxe5mF74M5eDaJGYoxeaW47uHZRhg",
  "key4": "3eGQQyaM7aAB2e9km2yUeyf4R7T8dHoGJajTU3h9WR1a9GP2cyiRTPt7paQwLZfMima82dxPBhLLjWeEPSxjpAE7",
  "key5": "4EQqhfigDqoA2CNMqeaEQ7gQb97wA752PfbkNpBaymACA5ErDXEQ8s5gxFjVdXsv28La9KuEERxdjYzLZPgQrq2q",
  "key6": "5JksCUL62oAiRq4ajKm3dgkvHqLbm5a9nxQhADNarRjooLXCazwCVCpuMaAiw4rf1PLeD2KjDmypu9R8uASY6ct1",
  "key7": "5D3vmsqBRXtt9kWSeRn1bbYaA9gkniPV8WeiTLk9mLwCZsi1Z5BurCPvok88zyUAQYUFNGXZaZiYZF5RBfzQLNTo",
  "key8": "3jTHdRaR7JfP7knkMzsPYXgLsoBvvmMqVrvsRmhCs2dsZRMGigKayvF4iNiC8MKbAYuTvMxNbe5CMRsCfPdkDUDX",
  "key9": "2f8spNNk9gDqoC1r2B1cqfh6quy5kTrZLcfCeXiL7SQdMZfaauzBtBzVtEKSFouaA8srYswtVwytQXbLxX4JuYpC",
  "key10": "2emAM9Hg15tm33Xcs1Lq9Gihkq7Mrx89ZUzLZfD2Mdf8DbM3rpGZtSdW3EGVHJpH11EKFm4mGAmtV6esUjWGrWsp",
  "key11": "4vz1ZZHWrfLgcVaACBSLWWgYasMRYRtahcwpsHFEQ7r91VYb968ACMUHGH16BfWDEaB3AWRd69xorwcSTDs5LD3W",
  "key12": "378QU9eAEyU1vSvv986RXSvFhfhBpLkbWHU54ruPi1qq5zAUQWVETgMg1rRNAzk4cKtNh2vgbqEepGPUtPMhGwPr",
  "key13": "ao2C8R6FtCtAT1vABhQjPC1tUejrk6VtXv5XPESYnFAYehT3gkGuSPHGHHJhB4BHqgURTnNZaQ1cirRqAmD2BCU",
  "key14": "2etNEHgsBaVwQvwvatvHJT1r2ymdTbSqbYxXTHbmF3iKDKEjWc9HUjecm2KW9EjCQ6Z5NfHLtWHu9SQAGpQkR98K",
  "key15": "g4G4UE6YN9E7H3m2joPJeVo2JgbiGHNtzpG9qnrBQWUXubV5WRWPz56Y35KmfHaUsTs83kDdJ15Ur6u9d7Nd6JE",
  "key16": "3Etfws1MyxiW4qRDLvKmWAmwPvfk2WstvDmCKjdnv6fzV3UaA29xeDArAeQAFWoxSbEY2jh1CFijrGGK8DZ3M5a6",
  "key17": "38QzUsqF9m2BqJz8ECWn2iEww7gBd3KxmypzW1BS7o9j5j9gFpTWAqDddauhqVPMxAeQ5WznwcXuMcAu1nXLo1tJ",
  "key18": "4xWZac29BC3B3r4T4GGvrDicTD3fkm4ifziWuGZ3Fju4XXJPmcsvH8muHih5faoeAB4odwczdtUPAo5VPLppvs4B",
  "key19": "475vHrywKKacZgiyefFmYaMmbAG9MQizSdfi1rf8jpGWEsihWrn1mieVVtT7xFfR3FKGvFLBg8d5Vapqjr93RYqj",
  "key20": "vHS3HAxkJVcSQWQKY8N5c6WgSU9AnnVJwmbWYNTHnMuS7gdBeryyJextw5KWQKPkiAwQDiPNNE4eJkbqDKKiJT3",
  "key21": "5sqqrxM46f8DMVoYGm6s6y3CmhtZBKjcQtm74dtYoYJVMcxVeoDQa6f79RErQsNLjsSC5R7GcX7qkjiDCLJ2VutE",
  "key22": "4y1ug6U27afbe3L7HdtjZ4uabRAvaAoGSkGNWN5jwJue7FEyi8csEHKvA2FXSh1DbdzBZT35dsunuELwuep1cqcC",
  "key23": "5EbiFeoykD6bJCpXwVSL9HeABUEAHtHZ3vej2FRuge2VLkow6tTCnagFRLTrn4cr6LCPNz9Sf86gjMDsjNgrHvjg",
  "key24": "4iNbSh4spHyiCWH9c5MJ7avS8RRFwfSPuBgahxJfcKcpSoQUNpHHbSPC7dpuEytCVPgZMG8Zq1SYWkdKDY578wgf",
  "key25": "2NprMziRYKw2U9an3tZAoa83fzMk49dfB6oWPSoDAT89rzENTuPJD9nFtsigy7vz3VE6vbitwixGyF8W7qF6e94A",
  "key26": "62jf2CZN13Eo7LbZdXFuBnY4rFQZY8PHoiMm97fXKJqZJeBxYDSyQMaC8PbDbZW11rTmMCJhcPcPa3xiVP4UZb49",
  "key27": "fHgzm7HnRxfmjQLNaRkeANvufsuhSgkUpYztueDNt1gdDDJPd3sUTbUAVCsCc4QDN92i9SActBscoto6fUDxQrm",
  "key28": "4GuhPgtKDZuD3YJJYc9BPeFS5fiBeKombMmtDxKYoP4L7a8ptPV1BeMiY5okFX8VqZbKhaTVwVr71SHVg89FD6TJ",
  "key29": "4V2ZZRye4R7rCqMpEDgmrLDkKuLbNeiA9QLm5FYwYRW1aGLcQce9orjW2kA4m4RaT5KixqHP9PRNcZdhLts4dw6f",
  "key30": "2PE5BMpCT991Z33aN6FEZD93hArPeHS9x9GTzmcuwMtNJvjEQnbnVZLqJ6PDNTvmRrUtHBG8865BDYHZceYPwdxv",
  "key31": "3Q54frencoGNpFZU4ofci432JHC5q5sRnr7UwNK9eRCK676485c9e2isq5DibUEPAzkEf65hNn15v8Ru5X1xbAvd",
  "key32": "5dVdTt536pUPDYCSpVCJ8tZc5GYsyS1EHMFukJ3JZhHe93nhCJMGgsgGuaNewdrP2zxAinhUNigNe9CHWG5rrDYB",
  "key33": "5GQwT8SzqCoa5tdnQnf5pTgb1s83D6DUcrepG3YmHjoWHDzR3tEJMbwxRzpU3GwALpukQtPC1K2wJTQKx6pPGCRt",
  "key34": "eBVv7TVusaFC1KUHAuFJGxaohcBkWYA7jGAtxopM49UfbGy3paCMhZ67td8CnYAg5eg8baL9fAZZNtS6W7roA1k",
  "key35": "2xveo94ME7ZqiGCpRBBsL89c4z4LV2tMDmoshj4MNu98wCQqZt2XtfEwvpj7XEW28WSda43jGZPFkgbKj9RstA11",
  "key36": "3R9qEPZ8DqncirBibAiwnwhWEriUikSQWSgjt724pCYxsLFNarmah7kkYoiiAMmAqkZnA9DsgsuUn1UAAwULKebc",
  "key37": "3FD5AEJEgjsAeAvzcdRd27tHVmFM1FqWSeMYGQsNPV9FR3ANDZFhWxjYKByx9x3g9TsSXSvoxbtmB3js4TgFmuoM",
  "key38": "ueK6YK4qUQtNDShVnb3RhQ5BrJ6cY2bS9R1waqNbFry8ZkAs4qjRwviLZRRjMnzXb8RNZTJaAJNPJZq25jUrg1S",
  "key39": "2SG67dGPTKLgoGNxMLNSNsJHBibRwSBZcVQaVeXwCVrXuSYTpXe3mU7x2ztNazKL5UC6nChwg5BYjfZ4aAmoFbhn",
  "key40": "4s8LWaLEA3jEHamSdETSCRvAt7SkkjXUJfiE9JDCFTF54FPJvQ1Y9bo7rC4wm7mbFeHepn5JZdFkqXF1Tx1KVbWb",
  "key41": "2htNBtJ351woawfjg8ahXwDdFugxMqua3giRC3ALePAanE53gUXznxqWB4t9netsRP5QxBLBToP4Kn28pv7VVPnG",
  "key42": "5zdS76uEkLAMBgD7gjbP2Lm5d6FS3txDPz1b9Yz93RdPBXmYBSUT1Dyw1QNQVKfukgZh9wNVYZgHgv7ZVAnj9UzV",
  "key43": "4wJhBuKJUUS3T2sQXV7nVzgXsHDXUyeg5hGsnL6sEm9xGX8G7oDrFi6jjpEEgspdXGHkLJbaGgS5tubNx7apLDHM"
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
