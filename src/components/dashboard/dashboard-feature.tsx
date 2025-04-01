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
    "5R8LPbvKfHdt8TbcyS2qt8oquVJAZ6cnBzbe1jCqaYkZ9UpHPGFPAWya4ofBZZ9neSK5cTzq3yMoVATYmSY17LKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzSfmWRNU6mwyq7o5FTzSpayLRNjNjJpmPjr5ANNztouTTscc4cLXu4ZoWk16xLtiF8M3q85j5KvTp59qXkp7Z3",
  "key1": "5SzygizAj96q6UgcFCQb8vcP5iTE3L539jsyVPj6bQb1858Ug8eUmd4scX8n24cTpGRVUiKxbHfbXcU5yje6i9zw",
  "key2": "4KPBT9SyKAyud7HD5ywxUnkczvYuhg5SSqLph9hSmnRqCfpndB7aLihemw7f1XksFJKL69BroDtMKJWFo9h5VJEf",
  "key3": "4CGwYUF32t1Mg5dqar55vkCpHhifC5mwAagXVbfzmH1d2EoJNp1CarZs8oTSHSQH6bdmqUG5mW8awC1pJhAHUNY8",
  "key4": "wKEcTopbrc1dHgxJ1B3ZbkShTEmfQKqcSob2tbSAPzeeVyAn4zdHMpeGBYS1z2nMuuWcxuM8oi6pGPHnSk1GPMf",
  "key5": "3RVArPCSLDYNa61ktDYveEDMfGkf1ZjYpV8XcR5Mpgy78J4PHxHuFaxcVmkvwhEXRz2AuDvqeKqaVLY71BBTtdht",
  "key6": "qm9rzP7D3NKg3w7v3HeGNEwifCh12EnziG8bV5JkifRXNP9gv7r4fmxPZycpwseguqWqyn51TuSRB5TgKc2ezVk",
  "key7": "2nWZbM2JEERPkJpEo6CEmS8yeETxR73nxd3fEre2vWgRatnZJoL31yhhhTpo53PS7s4xjPQVnCEK7Grz58F9Dxfc",
  "key8": "58ejgaoZsSrJpVaasr4BJvTrZaicJV6HeVYQSzGpvp5Kk2HHgGM67Fd84QX4pHwuu4L9WrA6a4YhXvvFjTFfFkD1",
  "key9": "3EEskyeASvzAzG93D6qGxwdRZVfZUTkTcVXfCPqQhWaBy3S3imee5JrJFYKGd24CkhEDfZRZsG28yPCfUCEYbr9U",
  "key10": "2pB2ppiLybYE6H1EDjgKMqwKYYGzfwKgeE6BdXkmKigfiCGAkWKinnadu9qjXjbUKeSigXjVLYCcp67WsZ8sukFV",
  "key11": "5iFnWrGJZ58Cb8jNXp7Rtyt79pqHSm9gGpUfRugAz42ErExWWnDdqu6jKw71JQfTKVGH1F1VLSPJeq1LcsgydMcv",
  "key12": "2xkdtfvXzjFZzsszzb68JWC5m21b2XkqhFx46r6a7A5aGhAeyVmUVNkvJcMeif7ipsbzPG1gHdjY3QR3M8LCYQzk",
  "key13": "33kHKftS5CpAoiDAev8xQoQMHHUYTSYmjKJsydcZFYuGL3edwUfyA2J4SGTPTyAiN9VzpuYw7epapvP62DNBezai",
  "key14": "4jzNELy5KKR9idbPUzwdJpUSQqp2t4yrKNYaMDxsVLWFanTd2wcwf4fWEdHs818iQzYX13ESat7vEBbQRZQz1pcY",
  "key15": "oiRLzEU48PLA1rjLDccAAjsTqYtx7QSRAuCfnAkFt78fXRaDuJ42ZiSgQFWdym6CjKc8E4qdzXa5jw6T6DbQxiN",
  "key16": "4xCrdvuXbEA1a9dFkuzeHJ9CpXcMKXv8Fo16xZmUcEsr8yB7E3EFLgCPpgfT54bifKgPfgHiWhLZttPjz6CuKrDM",
  "key17": "28bFJ9EhgjdtgrhshpcMNwep8zeukx4HbdNPMqACToHeXLzgBEJ4wX6XqQzTvK1t58UBZQBimugCLG7QydSiGvUc",
  "key18": "5494Lz2wcv8XLRKqeZgJbBrueTRfHJyuz9b36rJJ64PHArEzQ5pTEFSbaunnmeyqZ1zUuv9inyYuU9EHoLJXq5Th",
  "key19": "65Te71toiePMQaokxgstr2J9G4npWMB2YaBRuYqZBrGmMS8aWu1uMf8MKGrR1hfvjPz2SmGMQVFRRK3dLge6kocP",
  "key20": "26DgcfUEY3RnRDS9qAnuVway8D9QYbEYenPCMgHcSUNhEhLM3Ag8ce7wkKeZdwxY1jeTeD5vqjzuxnpcx6j74yFu",
  "key21": "3qiJaxpoAsSsa1D6ii9efmPMHhm1ZrkYoNkrSboYhzZANrNqojzM4F29LL4wSvs1AVM4Wn3h93FmUtWYHmNNy9nK",
  "key22": "upYfYbybT7BazDHt3Dayp6kuAMgM9Ezd88v2iZStUkbnUgVsU8AeW2624JeVjHJbj7QhqtuNK1kK1N52fJNpnZG",
  "key23": "4PFSHJCUEq2ZXo8pFQ6kqWGrXGE6jUVhqXk8SoNfvTeHteEyYtwaPit2CrCjtpgwJWmAcJcos22BsVyBpfWTo438",
  "key24": "5MAKeTLc8Mx4R5TtF2BXqidpZ5Jasx7fgFAZTPCE4QviT5QFsWMEAtsK88kHQznmdmyx3PwEvhYpaaz5WB177Swm",
  "key25": "24atG3aTGnQ9EbpNWoDhFpcWgRFMJ6w8MBYVzYVk8W3eTUdcJbEBpV7JwrzjkBuvdTHNkqjX1U1phU8cwkLMBuDK",
  "key26": "66nDdmEntrJ6AXAmvgqi9HZczVptXxR7hREytpRbu62Asas1mHXZzgNE3GEdSScK75vZLYPKtztvspHChHQusA1n",
  "key27": "3sdTQnqbKGoghWW7oWGJoHnEUGYT2zTt4PEZzsgatCH199zZMqBB82t3o3CBCXwm711RZ2TG3x1XC52VUXkUvXQq",
  "key28": "3kGqiY1fQKPd27bvqaJcan3jfKoHfNJ3a4WLJU4gTERDo4Z962H61tUod5syUV6LL3W8YeffL8g2MBfs21yAgkgQ",
  "key29": "51RAbZ3iysXLqyz7CPTcNfjXjZyj15wS4Uo2PKHyTQykXsDTsPr2ah8CMjvqxkfwuHg2AHvwVsn4D28fysfYfjBA",
  "key30": "37dgB5p3xBv4U5kAfijWwZk1r9akkfaLA92pS55SAqNYXHqUMUVr1CQWyNFzjMWHLACaJJSW4uSa9rQJkvdTq9VV",
  "key31": "456YQ2NTFHw221FN8wLp9bufokxdpWALmKYkCdtLnaVRiJBdR2o6rxTYTqCisRjwPouRt3zphgCAfnwXsiCA7U1J",
  "key32": "4of7GAJW7fKzcBMQgQB7bK1kcMothdKUvnav8uwYSUNn1jUU4YoKv9wdoW7apCchsULpqMyUTYm9MB7mZXWHPLpq",
  "key33": "3HNfvsYK3azZGfqHotbDm9kexiqmZTRVQ4hS3NnPFRBB83GQZpgoEZ5pfiZGTc7PJ8nGamjXiEp5TH14R4HqYa4Y",
  "key34": "2iwrXH9eecnQzd5CLc6tRrMPa2pCwCgnqttyALYzbYRtDkzt3eQhBDZn4skk2TZyeag3paza8f8wfFDi2mXqag8B",
  "key35": "5Q5wz11CdDr9swPVWVmmkEeN9SkNiJ4ZPFQNDEWqx5t33KRtXE8r21tq8AxucnVrbR7DKheVeYD3KaVuYhoMMWJ5",
  "key36": "4ymc9an1g4K9vvzDKmny9r8xKZsjkLwbE5pHBq4KjQSo4nz6YqPd7grT98w98WvJ2QQPEd9Bu33K5LwhN9RPVUfQ",
  "key37": "4x9BkgNoTKycWP9YiYi8sgv32XApHWj41qRRX49Mb3U5Rdg4wbeSBdkpfMh4aBMbzmxvmqyeUCkhDybCfUoPiTve",
  "key38": "4CpR8zHZ1ZVSPK9QTPANPt3RpofJPf6ZgDdKNkcwDAnHu1toMGABv4owMpPGBEAhDKjoLvhUaPNK9qvAGA2ZG88P",
  "key39": "49wY3wndoDk9v8AhCXomCjupNyzLTSdYis1QkuwPBjwfaFRJRWat8meFvQVoAnVmL3EcNKkxiGwdfruLxZ5hkMt6",
  "key40": "3uapR62psmFkR4iC1F3t2aDYTsFWnWhzdypJMgktdnSVMmKqzdoV3sJFrPL5zmgvszDrGqD4h6Czkro3kyEyUWjG",
  "key41": "44BC2t52uwU7aQi6DY7FDpVUa1EP6TqUXRv9BimwgSx7mX7F9JzrogBSvpVkrDEBPZG5WgpHg79jLBnPWDMtVQJn",
  "key42": "4GZJuCJqG5rVrpdEhtVvw1qgvJcucd7L3BBfqkLbX9ZbbHpPxWQewkKJD13bGNoVnUVX1UokqtxwamVuX7r7AFMy",
  "key43": "2uasbWo8WD1jeUq93otijqGTmnJNUd1dKPSkSS46RJT4skGZ3LAeZ9qqdHsDY1q3Xvce2zETFpi7uoQg5cPh3EEF",
  "key44": "2U5qdPAnXTupndYWCzu6Y1x4CE6eQZLTk7HLa7o9NTTWHXEBcUSkF9zxXLRvHhusH2sEx2YjaDmu4vbBUMhmCopU",
  "key45": "3gDK947wEmMPY64wM18UdGWxEvmVjK1tHkUa8S2URxpxwB5NLb6JtnrfWgMW39Jo6jCBeBhK72qRAx8BnTfQDBQo",
  "key46": "3ERqBmwXZHHT6sD6nVYhBcd4Luu1reJu5D6xBprHpeXWvg4N6JxG9NMZyw3mwf7w8T85btdgukNRWX1bsVvTVeXo",
  "key47": "3QDN8Qw8NHa6cAyUeu4R4Fnmo72TZCTtr44A4mtsULf3SoymspQgunoXZGzrYsUWUfwhhYhQ7hhbMGXcfPd22kRR",
  "key48": "4atVfcNT1L4Z9TgnBfqt64kwbBDiLPyH71sMdzo6HBVXL3Q4J5cnpo5hMq7RqMEJWcJSR9frjfY4NjiVbJUW3eWF",
  "key49": "4z2YNF1hYSas9knZneTTnXFsrtia5dpYkZ6d94gWbAQ5axAAN4YNxPguAZX7RQtXLTmA2N9DSxEeGE9vspAtCtu8"
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
