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
    "3cWdmMSLuGDNA25Kys7RAJpXtpkZp969bKwXKaqzoQmgBEFLuqbsdp4JvKKxgv4R23YbdQLhypvqj2cHzPdaV9Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzneDT9M8uCaja2uF9xDzVDtF5aNWD2MFttkxAV1xBtyoNKwHumb9jxSztwbzSt8AoLyc67SRbk9NVGY7PevK2h",
  "key1": "5pPTWCatkEgXa9T2mfmBZQbVrRoLXt3UJZ4B435EjpoCHRsxAS4MDBrjvuymCQdT1u2XY2LhQrjf1YgEandQZYCn",
  "key2": "5sJy5KgiJQLSzf8HmCXx2cnuksuBaZ1wc4pPzMkYzamDtS1vDmMatZDUPgoGQ74a3M1iniwXhnZC5MFmVbgAi9Q5",
  "key3": "5SaPUppp2jPwWA5zvhLa56kHGfqfT7v3fQAQ1JEq4V8aLRm4v6YCFF2Y8nCP7uRuQvEYLLpmyUS6qEoE5WdWcdhp",
  "key4": "4vozG7M7KzZ2baUJcQJ4H8AEL278nqffDxftU1WN8C1ZrNXfGJHfADRUM3rP5fUVWpMmbVe2qGY9EuK7XNjTxAnQ",
  "key5": "3i7wPsmkW71HjFBYXDSvqAgbgpg4mR4vTRaLGGnPyNvYCdXkjLqyV1rhMgXVHCef92Cfj33GXk9MxAYfe4wQTwjM",
  "key6": "3GALXQZLr5uABxjtb3aAtakSXSDcsAe5vXaroJHd1vB7c53DsFutRtbj2N8eKkV7ejtSdCggSWCD68UDDoyr9aN2",
  "key7": "2wmC5LRoEcL5mkKfAucsHwkYZxHKjFdzQCUJXdZu6Jp3gBokD3pFb9JQB47vXrPXABoLkxv3uNPvuaT2iukVJ86N",
  "key8": "2bWF1j367CKvFtcQcS5kW6J439GRuDN123trZz1ukQe8eh2JScgAyU4W2jMBHTCAsf1oAXFj4YWW8ffwVDjQTR4s",
  "key9": "61H5acwyB6Uoy4wJALRwj6Tr9AmnZUBFqGooj8QJiraBf2qL3MLn4r1XPjwwcC8jhRW7br3KyJ8CNbQxdQFX4Ft6",
  "key10": "3maxh5GdNsTdDb59oYjDTcJhUoC6CoG7JT8B15VxzPGuMWPj96GjSrLumd43HS8uTbAUwsussDV6XLvj3tXvUrYw",
  "key11": "5K2MnwBP1rooCFPN6TZasaTZwwv7bmwPue89RyGZgPQrWGXxN7iYuPH77k7gMnWNjgNkfLnP6r1SZxAo9BgfJoKL",
  "key12": "4Y5WLsXg9UvbkuM1gSzvyg7bjg7XKVTfAWrReeg6ujbtyoNJoFCBrbDHRw5iBSUXQ8BxNKgRBPBUnTKcu4Mgdgf2",
  "key13": "2YTkPRmH8WJriisBX2Bo5qppYrksz2qWMGmXNNXryDNimdVqLVT68mVkzbEndtnJHZGMB6nhbjj47gPLa33LyfCD",
  "key14": "5xiedEdrP7qHUYSxMA5T7Jg5UAmZ7QwdQZ1SbPgxzDsqriVgrZ83hhDVdPt3JhKw1fzbT5NHk7Kqxchii68A7A4F",
  "key15": "3Au1e813j2qPNEQiszVrZdso9HgKKJpv72fQWLmByKunBPZ1srEYBk1tFEf1NDRdSGWW3zgweFhTP6on46sVwm56",
  "key16": "554Wj6t3vL4mPM6TY2UrTkiPnnfEHyhm6j3Fr1gowf7BcNSWJXAw2jDMXWuvAvENhNfRDhJW79f3nxRidE9di1ng",
  "key17": "5ut4RDc1ECwBFivnHM85cFXDud2kzZi7y9QK7eA9p7hCoYXCtpUH9DTiFj9xhMCoUbBdnCuAEV4hPCRijHCi8rPo",
  "key18": "3LUWQuaJbJFftjv1z3Am7hPZsUhH3dmcFRZScytbnTRKKjLKV93kyELfVZtH3qTUqb5qSPCUM8T2TR1A5hZU87Zi",
  "key19": "2DWdTfJ9Vx6ucVMWtqDLJuBNhk6QgsNz1r3gheMKiyDar1DtbQ7JURrdboeyycJSzspTa61RoX45Up7F4ntpi1L8",
  "key20": "2FXGczx2edTnWMRbrAPxTfRuvJRS8D8NqvtCT4zBTkGGFBVT1vCKrxcZ8aVVvRKqVcvwHpuJvj92xcNq9tNP6iEP",
  "key21": "4MbdLDq9irrjbgTrpL4uvWGujNMhgvGJAmDmwT7Qe4nPVzfLC79fsgE6pBTVgNw8czS1RfYiGZfsbjqEzikvBhLK",
  "key22": "2sqvEXzCteB5iQaSPQRM19ao3CpdJGDaSSwBETrgK8Wne9cxYRaz1w7bzZ7jARapgPNLk2NoiYLieX85bQeLqd1N",
  "key23": "D9PRuNmDuaSEH28w5hdGZugMhR2b4kQCbQB38qu1sjBA7Ft1oueGeSzTUezjmf2WRoy5UL4Zvunnbep7LGFak9b",
  "key24": "4eKenEjdEd3Fxd533436zJL6fWftdwYdoaVb86mSfGChcE38ndqCHR8H99XZzREk8LmaKAoW882aXFuqGs9EaGUT",
  "key25": "58Qxb7WADZSe8PeU3jQDEQzX9Mp3MghHfgYuhL8RLdg11H8cHwdajUB5j1eJmuN1TpE7tre8cjCihQAFoDjs2F5x",
  "key26": "5QKum9Ev4gxKmkyzvfZo87ze3rqxjwGLoLC5aEvRUZkqngneP3g4qHKiaJaq2WZTuYb1S39N2V8FHBwJz49JqsSu",
  "key27": "5YY9ajTRaAmw477CbgXxSNxthadnxYnA41DXT1yZLY9arpA1SjUgQNJ9N2rBwwnpG88C43Z5ca3QRzPrWovGadjM",
  "key28": "eh5C99aeEP8erzv9Np3PmgVedQS2pSAid3JhmD59UJWPUb5A6VBEYb1XXTsn6SKZTrLNLcPHQt3xxNBSmatW2R8",
  "key29": "47LKkGTTiFUtNSRduVndUieVmFqK8sJhTsmQYxuqyrie47mL3T6be5N8owYjNd4RHELBctGAcBbrTzit8ec8gUQz",
  "key30": "4Q4S9MRKijEBAUybPC5YCzupNbdE1ZwJhTG99ADeMU3XiS1DnbqxdhgyNpc8MgnuKjiVqjLqSLQTVp2WDLZu6V5o",
  "key31": "3b1TAEHu2V6NjwVsvXWszL348yfUYVGo61vpgkN53a3v6rJcEcqPVGGHtckQDbdtfbCJnS9mmEfH4o22zvtwNCkj",
  "key32": "2eTkhDKTjQswpRpSPXcP4B82Bnxvudzw2qZ1hd8FwkLYSfQaS7CV1Cuxd7VSDrjD2RF7AJGWWveap3MrSRuw81nj",
  "key33": "2Q3hZ5zbaDngt9xjpvx8yTeZiBA6UgVSuJC6MSZbYBHnwc9UZYFSqe3WokUc637mzGBPd2kfevXrP3T6sXNwEnDM",
  "key34": "5yJdeesSfLQPhN5jEFm5mFwQtqaGUG4Kfj6d4X8hMPPM88kWmesQUALayhvZMLS1qqxEtxmb8gfoCdQAWTk3odQb",
  "key35": "4j1Wduyf1QsbbPyic24cpq6H2jbxvES7SJ95kTsaLckTn65K7XZyGuhbovxmdDmWKWtuAjPzuoGHjrDMRnNdrGBf",
  "key36": "5FQkWQvti9yGJuQfWW6uxuLDZmo9yJpp6voScLmKHhh7RwviSs6C1nhnxv2KzPTwzc7Mkaai7aUJS4w8ZV5ajxQ5",
  "key37": "Y6HKCJPzZPdtLSMgdM6tgSey9UskmxChA6XxXQ5P5xyNp2pZj7HkihezXXWUn4BsLoq8sBPRL3HcjUsoMoFBRZ7",
  "key38": "5hmi6QwoVybVesBw6Ge1dD3ojtRkBpa3i4SoPF4PxRF73ZYwVZLkiFR6nE9ae1Ex4bLLWxYJqdQQoxPGxUR8euow",
  "key39": "c5HnQ5qrKZeLhFXJXw29gCeo1kSinrsvbSqnMGMioSZZcsyk1yfigtPrn6GMUJyLfiVrr1rpsPsSWaNqcccEv6X",
  "key40": "2xjFn88EebZZrQQkny3MavCxtEGQZxAgeC41o1L59qiguSruqpFqA5UitNDXxa7xQX6ZgKHfTkx2FextnMkEKLJx",
  "key41": "479KgfTEf9AGhdGck4Nm1WqZ6wLpr7r2SQjxrxpwUwNZ4hVqySaszdqwAf49aETpmn7VNA899CYDoQXZ3DbT5KGf",
  "key42": "ZuLex9mGEUytcCh9W4zdTuKx4HeesLoBNVPMpi5jf7iRdzwUy8HkkdhesqhPgoRmmbV99pcgp62jwcDoD7kvxef"
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
