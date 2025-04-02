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
    "4S3bqTqqMv3QTWbjNcoNabJx3VmLFrnPF9KPYNzuddQtqbQkjzMxMJd3vZyDPXjk7BT3CWo8axFFobTGaiPtuQkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwMrQSoEui73D1RfKo6a8wbQo2rHRTerATWVamthLvDWjqjRhFttgeQW1MEjxS8W9yKBAA6sTUaic7Ym9N5bjs1",
  "key1": "4vvvEGM6bb71Ld795qu2rSxFe9pPToBeuYw1gQBaGFrMFJ5UTzUheHobV3ucz8T5dXHgpkKPqNcKCH18LMXpVCx7",
  "key2": "2ABM7CUaJEhdVdwEEoC9dP3mfVK998hxqaMtEQbrwttUJz21miJnsmNoeU5iuS9KvHfa1KZaC8ZiCvwSoBubb5Mn",
  "key3": "4Frm774N3K836qZczMpbci8SbC7GnmRFEDg3gJkBJWBvTCmhmB8c4XEnyZuiyHymMchao5ezHTHGB1xrZvq9qaWG",
  "key4": "4D44wu7ikVH1aAQyXq2Sc2iLdd5ojYY2ESy2AQHFiV8Hjzng4z3M4tkCweGvrJCJ931qKvjUTvy46Pum3EFrf5F2",
  "key5": "66xQfjey2ZTasmV52mqEAYNbmydGHWNXNCYVTyE6QXKjvd6krUTUrqYCFADj9VThor6PtT93NJqRpWAyd78X96yc",
  "key6": "65qq9cwf7dB8RLcSscazcLXfTVZzMAKEYMdDgDYuYuUqEjo7PtnyAY1VqPSGttBXnrS4iHm3uEBWJoXS8kX9jwYL",
  "key7": "23YpBY8NQZmQFGFEpHrrCxEU637KJD3zVDx6xJRWeiTAPYpRFkb1NzwqU8FWbz9cmCmyd8qSqoVQrDvegm5PyCuh",
  "key8": "5DTbWzJsDr9RMJtz5mypSDjYUc6Mhy9iuwBg2U11tWVEVR9fszrfcDQdNypNfJUP99EcnYXqx7wdA22ByreGobRm",
  "key9": "2CEFJX63cVLSinyGkUCdkL39TdKnLS6nLm3bfMASm1bwPFzisbC4xjCzCFc4XnoG2z5EacnWMxn4o14rRrQnQm9K",
  "key10": "2UL2yhUwB2zfraVpyLDYvCfY513U8V2ShY7AApdYosmtFWysPWjC1foF3fY1GqDBc9UmARdDwwXSZEixH68RiRWA",
  "key11": "2HYXoNahHwu3tieyAPkSJjQf6jb7Eq8tTZFbjFYbWXGgzDMrtJXtKZCweLU6QCpSwtLfeCREsiy7MugycfCmbxHK",
  "key12": "RMLWpAJRmSGsnt23XA8NDxcqj8vgcQiBuWhkHQcfKxm29QxjpwEsLqSP3o4i5fKU1sMGgrQkPzNh6adhEdvRErY",
  "key13": "2fdiCub7TgBYFqqQUdxD6sabQQH2AAroRKwPmgxktBuBRPDYmEa9PFgDYFNN3AL3SntND3iTtyiumCHZjLcV9e4d",
  "key14": "2AHdxmz2bvmDCYGxwjfen1P697bt3pyBqKj8nEenLrC9F3L6MaxD642Nip1iaNT9oEfDGc4vJNGXxRuJAm3mQdL9",
  "key15": "QsSJ2KMEqvPiZm9fWMJUrHPeDhQAeqN2QmtxTium2QX9RnsBX6bbDmTScLsuLzix84PACyS9qe3N7RQhxAbSd47",
  "key16": "4yPbcN4SRzKBERtYPz5qUG8UzG3HXL8RMfeTmJBfy1i4Gam3B1tWiVcXagApZGGx8cKDqDadpCjSvJ9pNaKCyavu",
  "key17": "4KHCAB2u2Fve1S2gFrXuYZGArT5etEAeMXMk2ZG1weptV2B33BukNumV7cUmvqiKZAghtTQwDQBpsVgURF21nAnv",
  "key18": "4DDVTEHv7KUB5h9oAwEsMn5GMk63yfWrFqMcz6RiN3NT5yAnUshgcSK9qCssbNgmVrDDTrptMwhYSHu5R92DUinz",
  "key19": "2BpzsE6rXDXbUchCaE8EUw2NyZfUT1ArbQajKsCTvQhjpW63DwPDG8RWo8rEZnUoDFz794JueDhtBgg5jjJocNS1",
  "key20": "2TJeAbmraDzZJS6ie2UgZkhu8qxZ1VVbQej1F1gREfxVmhNj9vn5F6UwLnt8yZmVAzkBV2y1YgSCjisrEWb6Y4FC",
  "key21": "5rJnpRjNTp3NFGev3Ym67zz2yg2YJZPyf7UFpbcNkgUEUZ1gztAfD5Pf7P6mm9yUKnYdVRiWJP4iTDgLNQ4tebp4",
  "key22": "31VqMdAWW1EaBP3QYoAbKBNHEBimDTVyqBupWzv1iu8Dttdz1SbvxJsydZyDrgP6eB4NkWWuYUKsXSuS6EpmT3zf",
  "key23": "4Cwt3wdQ7eE6TSHLYbWPRRCTYsCzbyspd8u4sQ1HADFmioCdvYKaUBsEDfdnEmMGFxewdrg1dS7C8nyCWHAftMpq",
  "key24": "2RSfh9oQDY91SwBRH9a1pjpJrYY85ec838NFkUd8UU87EPHG617bFifiSssTgTdYgpZvsHunnk5AznpT4BmuhvGX",
  "key25": "2REypJ9uhay685aKkMqSWRSCAbLPakZSCTdd8APsAWiU3dypCZqFzaLWdDWnzAjLgL2GthzzTW8f1745dSfzqhm3",
  "key26": "2TRBorM4Ws2H4VigMYMvB33WVastcKhmZTadfGBNecCU8mgjY1Bp5vREVk51GFkpUmCPPecfDomBjs3s1RfjY7CN",
  "key27": "4UcBsM1bYeGF44UndAhen4PwuPQq1kkG4TYWmHPQ8LzVjQxes3c5Ethwy8XnuzeXXypAussFqEfpdEHvyJwRpsMF",
  "key28": "2C72vMuqFFtC8SsixXBzqJMAvZL85ZrgektBDHsX2DVmytg4sAtzuTTh9vWMFhQkx3ZUF2GGYCeQwydzb9r9i39Y",
  "key29": "248LNt4gRcmgmMc3indriFcmd3bWzmTN71XqJyHUpCXKyzenjnFCzf5ZopWmq2TuEpoz1dbGjnds3DrHRzNPcqvh",
  "key30": "2wUb6mpEPSov2BFt1gX3Ure2gDttCjUFjFtw8S9tTFd2qpvCzVemE1NfbaFehdGmfnge8Lds2GcxPsbyaRHHvnrX",
  "key31": "3uJcNV76GA6P8NckdgAbJyM8mNit7naRHTRcpnNZKCJrntQZwsFyrxrtQtV1FQtXfa3AnPQ4Q3HTyJeoZGMxdb9U",
  "key32": "5z2uvyWpN8oFuGvz6VbtGodFyxr8fnA5x83fFHQbsZpi96zwFv5t1Vgu3oEzH1HS11yYfjHXjD9LvPZ1yES7d2mP",
  "key33": "Nue4wHAN8DiLHUdpr1TyMGuwZXPcH8a2x4SJacHrowJTWwP4Cua4RVncLswYg6tCTeyzXYhoAP9k7Uaurt6ZFD5",
  "key34": "65X32qWPPRYMwVoEKZN3ksN7imzZFK6ytpvaJjiqJuwHu1S3xYsNmiJCvLeVWtTy5i64kxzvQ8VdNq3pKpFZ41zG",
  "key35": "neschFuGCDoFNtqPjhL9oeLgcLrCZfAJGGugBpaojTA5sM2zTHaWwBjbvUQBLFGM9wv7rhZ3B7jfVszghpYa5st",
  "key36": "25eJbDZeDE5jHcDCAqxf7q3NFENW5eiusSG2paVDghfaJYWg5yz5MCUqhxXFr8jvCydQ9SwNoLGykBTGYM6zpkHn",
  "key37": "5ZbBRr9BsWURxR1ELMzGQbPkqTLwuN4TB2FCTi8RycjpCF4BPMxTtjbPgCGjmWorK337b9vMt4PGWnTo5w8wCjs4",
  "key38": "21Z75JNTgy2Hpq6o8xGMfzcH8VHyPvQ6Za72nj42GTB5vsRvpZkiqPd6xnrZHXyR8CTa8SJpr6ntMjEohLMnhpHx",
  "key39": "3Pm3RRoT7wzjw8Bb86BLhkaLHNusqpGy3Ru2Sx8pVYQyj2EhTP9QE4G2uNV2V3SJYFGdq2RUC7N2dpGYsMVvJxnm",
  "key40": "23YMsPH2wfPCKJrPdxV7wNy2oekQahXkHP78c3826Ck7WnsfFUNVQkiypV4btSPyQU3kjv7FRrgCjY7pfcnJMfej",
  "key41": "2CqB6s9HAerqtNPUJAbhhdLNJ7L93GWpTtNFRRt3rJ18tjEjyxL1jZmmJB63hQqcitv8f7LFRFsHwGh4UaBVbxGn"
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
