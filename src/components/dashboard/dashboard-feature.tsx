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
    "2nLoEMstt2E5LLTpvg26tFWLxKxkwYqpSasgAeDmfobN9tne2pwcSx7ZkRSSUzzatxo6zibPkTRTFTJKdYeG8pee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJjsSxhZTfBCXiL3dP593DWj24DnVx67rrEo8EKmcEnPDjPfR3WxBPBPTQ5npGeEyWfMLw8pHxWGc26HoRnNpMC",
  "key1": "64wfwhQeh6HAjJPgF7qADhK8a4iXWDKXi3n19PovsJV4VnnSC83XVXi3AwDosp1Ryjka95ZKudR9mYqoqd2crhL1",
  "key2": "5pAqyRjp1QJtYGymx5B3jnr4m46jNpcpihQZLHVq1Eg7KkAvZvibYDicxHLeh3Nbvp7WFV5VZVP8Z4tQk6u2MfTQ",
  "key3": "2zbRrHEywrrrMuLGdgPGAHpdJLRzVMmZnuTZnvRvZ2NNZa62HjrLDKd5cqPGygsBqFTKgWQNhKaytPhgvpWb5X5q",
  "key4": "NWsjLKLYPkPN63kTtArPJDD9nSbNc1WezizJMpdBuSCqrGouKp4BURbiaFBFMHd3r1FdutH46WcomTsEEYhQScP",
  "key5": "3jvJevd2AcyUNDJKDUE4WsMPVztT3pqvLeZeeyqnvacAArRapmPY1RLETkVW3Wx6d96vCHUGYkPdLqJMS5WG7ozg",
  "key6": "5kaUJy1KAuq4Po5fYv4RnfALBWEzJM2jKu5H1jtFepbsVQz1QY8DfcsspEt1zzBBWJfQMVqkA9fJZDRTDFRCpKwr",
  "key7": "49KR1zP5e5Z74nzAxH7SJnj7vNmB6q3Sn5UncTexTd5TBVB4hxdFCCmsGtj5BWa54GRbzhq4EYXY7LMVhjMYmBDE",
  "key8": "2A1WEW1hDT8HX9TNNudUvoHuzxFgGxFGi3pxESc89UjN7qGhGHUjLRDJsvypdrEdXuTSenThsrtAMu9bx48tdn8E",
  "key9": "Lib6dutg7d7bAyxkbqeHqSDMB4ipRDSRzQ4TQniay94aZyJqMKwUCNTtZAaxkvu4PDPHQ34S1bzZSNBLoM4Bm4M",
  "key10": "4n68xQUo9zN61YWUcn5mAYApJNK1WDoMBZkEe3fkY7BmbNAfi4XUvrzCjtGY7VvWxRUwv42UCPWcAPCss4cFvw4Z",
  "key11": "HCwNQ7uL5D3ZXCvP8Lgt6RJynoM8EYynbWsjcXFewfZPz67ZTf5Z7LS3JUWA2aqBDjf99YFxPeJtthDj36wJ7FP",
  "key12": "ig1ZceCnYk9wT1UoaLhUr8zjpksd7CSF584WNehhG8wY34Mn6xjF9spKMbmu2JTSfkdPh5qgEPdNdUhx6ZBmBaW",
  "key13": "2JzfuJvFY5VcBPZsEEsqdGM2NQqAF4pxvHf4nEj6Hg7HgfjGabSpANDPX93VWvGhSNhfmW2F8sHrYuSTdTRZJPuE",
  "key14": "5qZoSSU4EKhewdGE22vi83R58aeVbj2gJbByDnhqdUx442S8XCFJ64ejjscAtrVKQxFAynAucA4DRHsVpdUW4oZ4",
  "key15": "VFgBuBJvSqWki13samwQEamHAci1vZDfz99j85oeKiiNCap7YEwmco8pDmePiuU3ndWozK5YLnDEGu37zkqgJ3j",
  "key16": "kiqqvXqHJfhFZr3JQMXnC8123ureH2bmy2xAcys5TMACPCRUdUbV8st7H58rxQ6iDe9PiLJiw1J2fyLSa1dTdmu",
  "key17": "S3x4jN4jwrb7qCURUP8Qh5StWLHSbfiHuiahpiQJtGmPGKcoCPnwffmZAMDSwvXLnSMzfj5TgrfbuHNs8vNLzxJ",
  "key18": "616TN72uzxD5FVWXHBa6ueas8YqtyFCVy5qajkyHp93Ks9Nts8ZZfTogi3Pwjnpoa1coCwURMJLsbczoQTt48Z6C",
  "key19": "5RxVjAwKZ9nwUsvTLXxx43RG16LAJrayU5bEHWypebfv87AYH4ZuPmzPh7RVWDRhwzREH6qbf26fioAGPwgEMmEc",
  "key20": "5w6isX6d6KQ3nPcH28zPb1fKPFJp6Pptypr6hYWPu9Q8uFAYwuuXXGeZFDtUiWHsWCP3Jovm1AQi1MAMcaeNyyCs",
  "key21": "62AdPH5SzQx5qnMiZ8qSAEuLzjFdHvrhGAR42bPLFcRsVf9d2QRwc7QSHXnB3Qswkn6vobYBGQGeyW2oM97FQPSF",
  "key22": "5nYpxPzJKQQhEVcZcAeimfQTnyX52mNFJU7odUgVczQLSfrARB6M3eyRV647H4zzBa4vJ6mySTiag1jBB1oKbaZb",
  "key23": "5sfbbYfpZ2gfTssgs9a2HiS7GfZfEux7JJKJgAjWCSWogGAFkJ7DxxiVs7TW3144ktvEHgF4WwKXaWcgfbQkixYM",
  "key24": "4D85DERCna2db9H7UPYV6Xc8Tg3jCqLh759E9AV7BHmkiZmAW9e25aEUU7RNYr5QfNe5sXqHXnRVDo4tC3SqGFHa",
  "key25": "2QFGTUr1aG4nLxkngMveT4XNzSWvQJsE48YyaW8oC2tUf9v6maHubXc5gmjF8Qq5SETcgWYSCbJd4pudqLYTVVNc"
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
