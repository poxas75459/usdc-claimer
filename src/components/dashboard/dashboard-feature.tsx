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
    "2aVwrjo27PrjAtjX2Pn6zDnDXh8ss7boKziuzQ8mqVruxACExCsoaGibyh4D558VxCgnkeKfvWRbt7z8TcvEhJxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5hkorv5NZrFaD1eXLABg6G2UTAASRZ6gQFpdwwdXtYM5jbi6Uh1BUQNtrbx8bTnVNZ7rP6ZeosCnjVx7C8pKwa",
  "key1": "4FSr41N37AT2Nyz7UrCJPsv27yxg52jEAWUfxUjBfEpvsGRkVpafdik3PmSKBmywcvmcQFc2omJ29otEAVeNabze",
  "key2": "63JZQNdyfA1Bo8Z2pinHrWkTAjUJV8LtAUTfdPNHvW8ysz6i97DTYLrayA3uiKwsesboLkdc1z5LDRbaDJw7fKEo",
  "key3": "3rE4CJfBcGhSe5NydEeUoMJcSdL9xpTpLCEoaeZLeGK1Sh5g5YED2V4ENuFxP5qbzdumpKfiYtpDeWArRYifxxhG",
  "key4": "5G8kcpSggV8bNTkgYheXb8GUkTmsTvdkpFrTcx2gnHLMvXSH5JRuz5y1JU9FbPDS5X7rtHRTRPa2zQiAC4B6D9cV",
  "key5": "4FnAT7o5AX5fMBydodA2nhBy6RDkaS89J7zgfrDZMr32j3nFK4N54XveUrEF9D2vK2kE7vDFUkA3gqBvUMR6SKi3",
  "key6": "25SsKgg4P1wzWynkfMt2A2LeSMNuUh8MkPbkkDuSVcQenz8UxgjqCzqSSHTNvgbbVDYhjagfPrdcHGwSMfxHVXBv",
  "key7": "QCRCWG9cYUw9piVFWCcKz4vDyjnNTccbdmzjJi4QekvvoE4Kw6H97DZdNw9sZBSBZBTRuaZt3UJ2AnpaZzKEbRp",
  "key8": "3J64QRkgmKgdP3S4ZcfocWr2rFezxjWLVHy4nRmkAFY85YVJ4WyVcH6xpaQApxUNWwV5gxpAhmoGrKn1uRRRf2PH",
  "key9": "26Qjs35CSFTJVivoJf3J4Zet6d614BtKNBvAir656rC5YPJCGjV5jeqjVL4UaCpRxd15Fe584fox9K8ZxEMhdc6E",
  "key10": "5ZyP39eTapjHfq2Ei5rxC9yS3Gh2hZPwf1kkXtJG3H2nutXdCNMzu8yNUeBLDcBLMw6KSKauVmSzD26VGDznWeMZ",
  "key11": "3tA9eZUHj8EtF1pcC4t5gTNQN2X3WeUpUXS1BAWiGBdM4Y2jnyxjb4EikcZ16C4aB9o3pRK25SNuf3KDA6Xu7iaN",
  "key12": "4uGiADpkF13JdMFzLKjxfJEBp2JJguHkfYTSe2wCzLFeup5fUDT8KrXrZwrKa9GuubWzasFtYYHS7yphKN9wiYYf",
  "key13": "2AvbZzAwkVkEZLyg6dCn4tRcSr6HsARcZ61Lt6M9dSrsYJi6tRCBHpjrgANckxTSomPnEq4dQSvsghSJCQLKCCVu",
  "key14": "3bPa9PhSiRTNVcNnvwYWbBQ84knM13Utv7VKXzmiNFQgBWhbZD9y8p1xkZzbTJywvzduHcQCETzGFmub3PBEd3JM",
  "key15": "4kzRqoH9icS2JHk38P4ZHYbckJuBTneeic6vsauwinneq4uwAw7rUE3WbSWbndorqA3foEvjSKvAmCQrN2uJBmwC",
  "key16": "TFyfDonxenceCAYh258pufYZvaWBam9NSG92pa3VJTf8LajXTCB3D92mgmtBothwdTW5rjzxz1wijTwGJE7Twot",
  "key17": "2CFU15XZUxSHQ2EJF3cfWXpAgJw6bbXcmb12ow4YtkuNoTGNdGtdxXzNCkKYZz6RH41yMfiineGQbUyfhYZ1cbou",
  "key18": "575Mbm36eKE2z2EZGULXXeRGSFsybN3soULdHGJzcetXJK5hH8VfkK4HyUsxDKSRDSUxkGu9LGurPruWmiBKm4m3",
  "key19": "2RSqQQh1NCUFvNMSn7QCCNsY9iR5CwA2F8fpzXcKUcz1jNp46hh13zDgPmpX5cdqXH57cy8KjANT6Mub6E56ZhHi",
  "key20": "DRyLGM2dTLzUH4bP8tDk2eUDtvLL8ex4FtaXtUGmvH2eVreMjHVCbbBFW6M33fFgqPKxpbhdkbyYmgsnuz63KbH",
  "key21": "2PqKNmgPCDgNu8yG1TRG5zB6HvAm7MNmHB4SCXebYYw6XWdpo7NDQHsTQyexe8vvrYpXPT5aY6nYiwYXCduTsMy9",
  "key22": "iBuhAn5pRHFzu6kmEGYgGxeMU2VZbGEknbBR7m5wXr6Wkcj6a6cGvQQZqMsNpyvqzV5pf2VXGoLmsyqbDmeHqRP",
  "key23": "2oCy7pZhsVqBr3azuXUsMv53dDaqAYCvbDBYC5eJgqxrdfAjEdgY7WTo1oabqjwZF8FUXe2DhykN8CNPipJNgZ61",
  "key24": "4DZq7v6CSWWy6gM81ubxJewKKGhK544WXatfXdXAZEJS6kYJ4bfzutjNZnJVanAnhY7pRKJE2DUTZmYEtN4SVMF3",
  "key25": "5E3qZXuf9KkiYpDGjD8dyQ8ALR3ZsZ8dAKgPxzVzhAoT75dU7BTgTqJ6LFBhWmVhvbMCRYLTYX1mM4QEnpeY9k2B",
  "key26": "2SCfqYDmk3HQNBHe22WBg5p5NJ5zFAVRg6iEWyaxwPByiZwYTrZNiNTEsAduYe16vVQRpV6N7tuueavJGe1wbQ5P",
  "key27": "5rniPnnwduLM79SYYqubs2cwEqcTdbcsKYRtypYJoKi5sgwKtj3NFvd1JXNKohwwkLqfJ6sinoDKDMoV87eUa7Gf",
  "key28": "3CJ2X1e96SFfBqK3L1jsE1nB6tvn7UvGJ1Z4zDHF4XUvBMtA6fPG8JKvSogM6KgMzyaJy7HtfLaNLNtzMYKuZDJt",
  "key29": "21noTHeP5oPGaJGT9kEmgRr3BKxkNfKDes65YXw75PMQvt7eQhA1HDzktk4KSKMRvSHVz1YaRrS6Xh9iiCTLMAX3",
  "key30": "234XdvNWjQ74sohcHVvVA6WeDmr3R5iLWY7yyykUoLgX2ivEvRWPatr8kg8ZFytTVLWRaK8G3ftkaHVpw46nA4mw",
  "key31": "4XyUUv31yxCn4LArgjLGzYUVASzPsbsEnnsBp8gS1c5yYsHTHCitNch5WMuU6S6579QDcjf6gyTPgspneoFtZRjQ",
  "key32": "4yroV3wxQQZhcWaYyPZfouLrbTxhtgnFRe74bDuMcLpi4cHG2UgrXCtf8pLwRdjL4sk2284sLy3HzssC2yyvNBS1",
  "key33": "2WSRMz3Sms7V4kn4ry4cRbhAuwcKvxybXhgsTJCZ82teaTqkHajQ2dYCGcShWWUb17AFA4ZbmUMVe27WWHzJvC1J",
  "key34": "2sb45otDvFYhL9aESDTmRuVp2ng2r5D2ZRcyiJh1huNnvua9yK9hK2AatWrPkEdswXfrkedBSHKbRMLBp3H9VBni",
  "key35": "thibDVA63Szqt1GxjduMctgusJ3iCHSzQGRrJKTqnBG4huWiyfk8qR6unhL63rV5nZkCNUrpixYmojo9ba8bVuM",
  "key36": "5ZQFDcmNQtrx6CPMBLC3W2L4FoFrvwwkpSirGbi1mX9ymhybhwBf8MhWvEFZwtnmasEvi2N55ho23GskyiWrMGKb",
  "key37": "ZTLgrua6NRqaMWrLSEKPkzxHcEbJH9b3gFGy5uhrcSBbzfnQZjw9VWCZ8demzjteSu7x2wgW31fFXJuyNdzdbA3",
  "key38": "Drc9cspQei7XCu1Daj7G43NhD1ZcUAHxXz3zLyohEJ6H9CNMNhiUhBBQ8gCJEUncBFszwcFyLeEDAE2nYymnfR3",
  "key39": "4TCxZnNy5FSf8vc2H4BMQ8kxkafupk62P4YWSzfxpBfwBpmkzQ2DrDFadE4fB3RBU1FYFV5C9es3qsyiTDbnfSeH",
  "key40": "3LRZwtyer6dfiWbJoM5mELr3icmjrtWqRVrpU7trqzGb625xEWPRbwCb1ssV752keJTHkDUxHR77oXzWb29KCZWM",
  "key41": "2cSEq73LMrmCd7VbWpyFcgHGSxVwu333gTZR1MbvGSqNcb8RGXEuNMR2rjVnGjrLBVeqbz795UTkemfmdw3VK6xD",
  "key42": "45DnBLBrTo6c8rvNLyhTubBa8GBjDFt2PLwWb7hmSUuUgrsfapP57v3KftoSZN6U3gPCyx3QPkudJTrLLR1RrCL5",
  "key43": "bpfXa5QP5DT4tZNTRRqwJWDCqxV1RiMZ92XiQNhRnQjPktkPYdYqtYLznJovn5kZEfs8VMqASeWwuXzcDo4oAuw",
  "key44": "4Y4RtjUgyqkoSTMUxayS2YVawPWmDQA62HLvt1S42MsDBsR55gMvDvYH8nZTsPMJmpDyzWDkmCENfeyHTYCPp88M",
  "key45": "37nnbJbsPXoMo3NhnpgrNdVoe32WfanKY1ZWCtQnHNvbtnE5ot7syrayrmYhQW8uBeEgkAj9vPnWn41fGZGbNvKW",
  "key46": "42BD4jjuVbXteVnUEcKmrv4VzYxTA7st3XhoU5z716LLALvE4Re11K3m7c8R8c5PQ4rU4QBhRS9m8H4MvABTdK3q",
  "key47": "4tLLbHNCR8V8Jg8xqtnud2LupjWZaf9X4EJwqenXGqC4cyRgyqixm7DtRSM5PonpPoNr1y8ZPMevxbRwszUgQXYz",
  "key48": "LHeYT2jwMcFg2LQviBF7p5cBkLmc5jCLxNxkWXyasAqZ6w8zJY7jZQaS9oxe9DWaaUqGqibCWnZ8oPgCStAe5x8"
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
