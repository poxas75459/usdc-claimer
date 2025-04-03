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
    "3pvpXmNJ3Qjbv9UJjWCdUvn8RuSJadkMXVypZ8cTDaHTM6giuC5NQ5nm1U1L8r5TDpYVaoagRLzyodWmfaJkTFbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YkjuGtfVvX1vPXZU3Y6AkMKSp35bmqj7QpaeLubCiVhn29CkmSpD4vZJZjNvrvwX2VH6KBG4aQJUhTBy37hRDzJ",
  "key1": "4QpCyez79JMeLZApfvBhbHbrbapnbSrk1AyjaFynrSefijG4mCbMmuaBRUPsKJEhkaRagws4CSTZEiPHc9NTwz2c",
  "key2": "3fHBRhrVgENNUDFgRvAkaS93ULvQT7fhP69o5dNcLgCxRsaiybT8htg8SbhmkRA1cESo2J5zygyWBs3bFgCKKZVe",
  "key3": "3SVUoPBJctrpYSUNR4qAQudoqdCptXH1TYZDvFg89tn8UUsfPBFZqubdk1KQia8p8ZAvYFcKVjGB4tvAuCS5GPgV",
  "key4": "4xAtJDwDypMtN6y2wq6k1LmidND4HSBStXUDw5TfZiwmPW158B8Jm8VG5YeGYdA4ZEka4JTZZLn4NHWp3WHEbc6M",
  "key5": "56PXFRRKvpKZBcSSQ5dhLzPY5GLt4NaVjvDYALAZvQgrtKTwi9okdm8mcvUnhYhyG5A7wkAL9oVmSX57xShQ8F5L",
  "key6": "4Wfvcs3gN75SPHbCSRWniURpnbkSuvcjFbPKpzDE7WHvKL5C3RWrbV362yNxPDZKsBaouEWmgKwy1hY3YdmkeVnp",
  "key7": "3bRVD3K14B1aDjtMMiDA1JYMV9ybeRu75U4WBSn9rKvii1mxnBFm1fcQVaimVcLhyAzByh8Q65XdMRH8DNyKaMg4",
  "key8": "39Lks69TxQKbsgjbAW7cg4NG37zuYmgukXpXn4uGNooZheN8JvaigDzWLHXWdizts5Hk2c8rxH9vE3hKzohxVz2A",
  "key9": "4pDj895bumTje8nSMxovZMiuRv9aZ28nrS13WjeqMMHuF381JU4hGRrJY3EBKMqfLF8zpPoQXnjF42q25ERgTfco",
  "key10": "3nW497o26XNt6pThDemnuFUrHJ8hhcaoMaRCqnuuKZ1XfgRtvRvxeSX1zL9nD4h3MhZnYhmDnquEp1xdDnxYjXSN",
  "key11": "p1VT8JAZwkqrSLS3cQuJtv5GAB67ngRST27w8zdZkN5331UsXjC3kMu2RurbDwX3uSb69M7xcUHE3EX3Fg5QZUF",
  "key12": "386eenPtVZu6sqJSDy8YecXPyMS5pin7XpiPfHP6UjoLNxTPoSegzWiekzQuBHp5WG3883wDrzQfYF39gWT25bBg",
  "key13": "2q6Xhi6QutspGAMskKwKmnvWCsFkvkRtutTAQg9bRNgUgbS8uufj8zAZHTw2G4MFweAxNLs85LsVyoX4vRq4zd6b",
  "key14": "49oEtwBXXPUiovu8VkctG7ZEgxhrqWnHrswhpvEWLGYGzTrYD8sAz4jWXZzAgNUfJm7NVSUqfJvSQzDLDBeiTpBr",
  "key15": "5X2kDLdBw8hukk9GQdWzoV6sVEUju6oYSjqgoFXnai56EsbMa1AoSEXVyLFTbS4D2vQSmujfZKBXCmnqPW91ZAbx",
  "key16": "3KGP1JA6b1dNoGT71tQz4MKQErWDFC2bWLDQYsetMyhmBjLiujKVVUbaqZvBuRc4NCG7guMRejNAtyH6R6ezXoS4",
  "key17": "BRwzAMjf1HYJtu7UejBrD85SxRPg5EtmKZEDRBecKAYtcpznpBkHmTtDb975GGRMqkdxnxTd4nkQJVtK2oT5Mwt",
  "key18": "4e2THRBFK5xt74Tb9fZRAQFqxMy3eyMHCZAJa7p7VVyXQriskZLyFM1k7ZbftDt17DT3YZCFquGaVFZy1UXPAYzP",
  "key19": "Los4oujoBWBqim2gngQfJgwyyvcCexC19e1bgnHFYXZKZsPFPt1jpQzLtxnbJJVpEYJngrxJdw5y8CN4M4krTUB",
  "key20": "3Y3ZAGjghhGHVJidQu6x9iZic3wprf115gMRZ3btDQxD1bk7nvENbRcz9YhjaVXa1qmJZMWRtqC39pUAsWeWaLcG",
  "key21": "2xShGGaHeWLCYFf9x1VLnnar2LmhH1f4UwV2eeR19WQm7Udybk6jJXBX7TrcuJq5y3AZH8Y2yUHp53DF8eh3nbiL",
  "key22": "kTCvyNDSjub1fWeutrnWkxRKmC4vo6PdrntSbmQnGJ5qfQium2HvtUYSBbSzg75Z1KdE7ZGkA5KE4kwh21siQpZ",
  "key23": "2VDJWpY9kAjFZR3H7grR8t7ZKFgXTGa3nzWDeE8eBYMqb5C19WGt9xE5RrCjuoeDM376LhkRtnBA5dxGThGxjLA2",
  "key24": "pWddT5JkoovUAnYPVX429Q6yk7BqgpHcRmqSY9cjChEhfVhwoMW5BYLefsPQKAVJ1En688v4DjAN8JBQu9X6KYm",
  "key25": "3tu728GUXYDa1yANELZE4ZUx9HhaW53u39BVaXSfksurvgYnDs4BqyqTmY882Srh7REMU1euu8yhYszXWmUb2iKr",
  "key26": "D5dgzvYbYSmHfp7MRdNAV7UvSvisiH99c2q1zvmtrG9Ru7zsGms6rffp8ZUEnRj4wHwpBhPoH3HFQLA222KrNJs"
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
