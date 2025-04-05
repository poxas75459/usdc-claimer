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
    "2siSGPx7npgRZ7uTo1vC7dUFqwP3gZeiwd83hVmt1h6MwudfGGRstzswW8RcqkeMqv5PFxGnsXsdhixqpPeipgzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fRdqnnkqPvhuCE4MVsuNWiDDSnp6n4dDUGZE29ncspiuggG2ZU5aihs9S6QAffgFtygGfHPEDLSuMSdBibRnHN",
  "key1": "3MXyZ1eLVsyR4wVPkWsU6sE9uePqbG4CN6KWuSfnPpRAyoUDmFmV32kdhwYMbfPrSzBjFW5hR6yWAfhQ5ditv1fG",
  "key2": "5MNU12y8V19byBmZAozZALxiSVXikceDf8PQoPjPGvywjUuLUyR1YzCEaunj6y4nhraHzKAZp2SBkQfqAFaRNTeg",
  "key3": "4jmSnsbk7LFQmxZuXEPFy6Asy1WqQHSXSADpXiVXfppJbjKQH8TazAkUiUKPsiXJc65KfA9b2RDb8ikGLeVCBUJc",
  "key4": "4U1qkehpKjhwXyRJLxpGaDyTgg7XNWikSUvP3tGcpZdHPRinLnzCznxZ5qVUoydgCxditxnaS1u2XHsih5ADPYRw",
  "key5": "4oA4wR68FGyErGNban6JScaMD1vturpqXrySBFbE6aGBonGnDQ6czr2XYL9hrrBGRfdJZ6AevkmBp5LeqJKSBv11",
  "key6": "5fuTVUrgNUDcJArJScqd4gD9rZtXiBAY2BUuNx7fvG5M29YT1oSFaVFdmGJfTrSdnBFWQ6WaDrhQSQiBhd8PrkRm",
  "key7": "2hRK5vAgxZFaoHw93TL1bq1qiZezr8B1fLnbuLvTjdAUD3oCd3Tmi1MiyTr8cR1h3FvtgpPNEEs3QjM1QgeRqxTd",
  "key8": "5NH6tJeEDbsy9Ujr9JhSfq44PthTFaz2fHWApJwrUVHtoQTMcxHbqzo4UvASERD3CewxzyHMwbQx1caoJK4nJHHD",
  "key9": "2ei5Ws9YmxFR8H3w7Z4uWNEreribFg1XsP7QiiuU6LtEYKB5hrDEeHC6Q9FGtfjdZWYpQxnohEH2cGJDJMDMHtis",
  "key10": "5sskQYgf53AaRfY3nTuztaTroqfNpvYWr8YmgzJ1QPrxWhwdDL3MEoPnN9ztHo7HTFAnKCdR23SBaAwPksJhD4t",
  "key11": "2VR7mw6uFtPbTpfqpoTiz52cBUni4D9QfP1yUahZwZjgxDVFeTRxC1QRMUjkvPUwDTShcrWCQeoevNqhKkNg1hy",
  "key12": "5ZJqukPap3th8ewWYC1eqM3Up1Af2FUmcxwo9yxUMAFYdrRdmQPt4yAwTh53S6DsdzK8eerBHVxJ2eHcbUiMTQtV",
  "key13": "Tk4Q8kz2QoUEH557s47zYyADZVhFqeLBQJReFGhBDYfxhtfFLfk2564nmQwmh4mk5BWM2uDbuHgB5sL6djgKVgF",
  "key14": "4ZkdopSKRwmEQYaRPVhRP2rQZkdcKcBPx5fP72kr4bQis68Wd8C9knM1puMuNGURJbM3hdKv2Es7xoxLs4dteTW9",
  "key15": "Urp1VzRtCHE6CY8We2kSdF962r1Tw1Vx6YoniHXEumzcFFmfCbCTc1G81tZBYWwpk9HDXziDMjP2ZQTiZfZmsc7",
  "key16": "wQVL7N8aK8h274vZrda26tLQyYq6Ei4cA9sScXxX6vydCvHk9EA2mUUR1uUm1ZdfzkN4RGGWg9weXmGvDtebWjU",
  "key17": "58o572QhyBj1BooYjDnAYqm7VXTqhN8tG9k4oEbuc9msyK8ANmmudoH5fnPn9HgLJHBEeFccb1EJCsJxbt8VG1PZ",
  "key18": "2wkPtwy8UE3L4exzQNEgRtC2Gk83nDbPhciuk45JuPvJot1NATqfhzLarhtmT9qDSEVBMG2T9ertFsVmimq5JsBX",
  "key19": "2F8ejiRwtyxovc5h413fTwMuEubfdSVspie9aEhEFWb8h4yxLjmP6wxS49biR6BghVNWxwzqWCuEErropME6oCr3",
  "key20": "RiXM9WQKrHeyybHaZPTSi2Peh24vMWEYKBBTRs8SYCZeTf1L4nhRYRgT3GzXKa4fq15mKdb8aCH5RWn5gQYkuKt",
  "key21": "3QizCtiKenuFV6JHCNo9AouwPnJPfsUA93c77qSm1mkmc5Cn9W2iSa3xFv7MtGBfRNRPV448QR8FTiyL7DgEEzBv",
  "key22": "2sCkgtDbtcS4PVxMpt2tqFjtM8CNnGVNCwjmc3wcXQb2oYpCLYmw3F6BL8LihQwRdPEddBVcpRjFq8zXTH12Q68K",
  "key23": "5Az8SXFm7dcfzuXEtbxuqUoSQfJiDE9iZNYbu2H1rgdxChJqXEMoyu7iBKNi5zdN1CKeW4wh9BgWgByvMAXENqVa",
  "key24": "3xK1EG8AtBDCMVYgN3V2qcvAr96YaQwXMSsnSSmNuEEoBSNrFcFTNsRpGsn7PBXpZLt6VTsA2eUUewvZiTxHJTEK",
  "key25": "4hY7V9NkgjVJBAEinCQ325Eh2cDvwYUTwdwcBpY2eUzGyHY48svx4Yi6y5xJfoQut1LYWPN4Bz8AzjRcYE8FURmX",
  "key26": "64B79sKwNxUkZ4Ei1egBc9BSxA4g8uxGM9UVryaDTDxT7YkXT38dqNpqmAKiL8rsArpBVoZcmJRkMSzPDsWqJKoW",
  "key27": "3taQw1vWSgdgRAaQEp9XaLDMy6vEkdxomii8uPHZNA2rbDWANUCJauL6gY74DtRdvW2R5hF5vbgW3i4rkxSqXjJ5"
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
