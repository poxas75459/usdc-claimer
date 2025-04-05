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
    "5wUiaSpTj55WhbLq947H7yvq22wNQ3piCcpu4Rg6X5CqKVWUFbcvcpzAqeVWn2wtq6yYjHiRNAPe8EFZHCDvSXdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbH39n2QuovhSLRrfCeKf3c37SY62DX7aBnJZzABPwvm1ftNy89zHwXmedH9NH8LkC7AiryNsg76P6pB4Uo4uKx",
  "key1": "uqLpEFR6NvPBJ36YxShzucqQoNQNyQ7GfqphDh3GXCW3nJbu8A3WGp925doRiKY7DqMXxPgknZjAccxDcneToxM",
  "key2": "3htgug8ugqKXXYqb6DE9CEGvxmj9YxwwizC8onNXDuQifXvVfPbKsPJB9tAbWgLrEibWCZE4DRyQHG2ivsxyp4g1",
  "key3": "5AU5snQyv3eZGtw985LuoZ6WUkrREFYP1xRkBZ8P175h7wEbdg6oy5cUyK5WbyqxmSrUsPLkwx6HRrERM9es76uM",
  "key4": "3qgACS49xawULYea5UuYQgaXCpZP1Epqq7Qsf6zsdCMxLrXWsDb8s2b9J76cDxqwaE43SFCKvfQwbGF6foxkJYjE",
  "key5": "3FxdTSkAsNT8kaDhcK5EuXhdYBcBVNCAuYNaUuhaCFP5EsyoqSxcYGkXY6grJXF5mHUra57nKPvkwemGKHAPBfjp",
  "key6": "5TBk33dUAxfEaNdhteDQhbXKWk8ZHwtaivqf9BBshzW4BjeG8v2UREzeeUaLqiWzTy4SzVsrmpYJaKBcDBxjqCaE",
  "key7": "65gWR98tpKVcms9LtQmY1p3TtzeQnSubSCu1T3ioxBTnPsmjMTjoxZF4Bd7LcqdZKhJNzMpL3pyp1CXTkcdzn8Np",
  "key8": "QfgeuUHFGEURGbHRTzqbF42y6bqvBYh7fgDtVDFh6Jcpf3vGcs2mterHAjsRZP6Miqj3X4hP9fnG8frbj4jhHuE",
  "key9": "27QDTMfsubbefMDUxZ3xkwLHCuFG6ZdaqEw5FXpvzpjaEg7FUt5hyvLw3ZViRGXdhVcSfJuAsJV88EQp6AoBGHDc",
  "key10": "5EUXPNDBdRxYfbzEDYmJiBGggaP5PU4xX3jBkjNfHbsXex3DHo756JM3xF5RbfQgub4ozNBWhSLeZPL8aJDyv8yp",
  "key11": "2yWcWM983eymgH76NkNG4nK7iSGPXPTpDkiPpdVrpvr8ChoAhBHeqCVa3UjrwjuKXgBtJGavX6yszywZkTvQy2ji",
  "key12": "GKrBUdVrZpZL4i8QwxkHSyiSZoygtrJrK6EkqeQJzUfWMeKqaHEFqkbSmF7cB51zSAtxsDD6rXvrkdMNHjFCbix",
  "key13": "47uPq36jwwYCQRTN21eGHwJSGeYGtcxruqdavvGJ9DNYeG33E7UuhLVZbd3dV1hhdzxSbva8Xt3gFUq6NkyzJ5k9",
  "key14": "5cj47BL4T2d4P4AZukLHR3w6ZZsdwe28NeAjNG2ykunNXqNGUCHKGVDHPcw2cNSt8wQFuNhY1tem6zhvMojskkq7",
  "key15": "26CE8ne2Fff5zK9SgkoMdL97SZgRaBZjPFUPQoc2Fq2ydUoq1rNrcUmTbVPp9SE89GEHTBJjqyvHzuNK39fBkBzF",
  "key16": "5B2P2FwqczJ9STsP6PCrNRketAv7FAgx4TKNin84sRj4r1tt7GwQuCEA7tLfRq9JFZT2DQrgRi7ocvxDg9Raz6UN",
  "key17": "YofVH42UkiE9hqJYQhiEaibuMfx9SEm8Sd4amGSnxARLZr7B3qtTH7okoRWrAmYqxp3zq46o8i4EdRVdVEcB6Zi",
  "key18": "33hNcZibKW1g5HWKyWXyfE2RUAAQu95rM3JMBXfoCwUTAL338kqxRMXrgR5rUG2c1BkKEKXbRByxegv1BJ34aoDf",
  "key19": "5gYssNsPkoNxf155Z1GzR5SiNK4gpdJAPaMRpCi3ZL42gB4XjhsPBuXdzEyFBZ9K2BHhNyiT7ih1pUyHAQgxudDK",
  "key20": "exrqMJi1gFrxLYTx1nygKDc941zUwwGcGT9yJAJienGt9eeRPHuiT8s9pCUdxTaTXUTYHCXkCACMPPac9UnKNjm",
  "key21": "bDgKGiarCRVFF5yUDZttSeVPBXf7FnLdfia9PFzfcswKXDKaAcEgocvcV4DfTN4mjtWyvLF2iCSLxbLWzE5APnN",
  "key22": "4jqkemd8Xoj4Fq8M45MRifBD9CBUU5pyANcz7FMirNFthVKaHpYdNmE611qt5bVaRbPAW1r28AugJmd34W88erkf",
  "key23": "5zK1tJTcGKUHFtoe3BkRxsqpxTo4YmsAcjQxAGFxMEq9WM2dC3nSKRF8zwi6ZjGkSZEeQV4cCRn5CzbbSbKUJTDM",
  "key24": "3H87PEwXrDKb5UduddVEKMQ43oKTRuLFhuZP8aSsFb1hiKULrBsD7BMc4jT57zSDfhspLMVBS2wPxDK2uizScYST",
  "key25": "5Sdi1CY216QW3nx7ZTYfnR24uCPybqprHnLCgCoz1bw8trziqg4Sd5GAD9stMUqetR8viWt9VrR6Lh9g3hbwGaQW",
  "key26": "2CYWjPioP16z9TGv7QL8mZBW1wcJqzJNEkRk3umRmawWSZpnjGYWDXXutd86ds3tJNcncFs3kQCTditzKEUWSHBo",
  "key27": "R91Y3JAD1xztxeVdye4P1v1fwqF38NaAAiD8fseZGwh963Dhvi5gm8w3PfTX9jceB6EK9BCajiKe1XMb3heUhPH",
  "key28": "PYmCEnVKh3ouQTuyt5zwJghdJe4HrqoTNjdkcSgcBQPKDVbuqq21XG6iwQRzRAJhaEtG7o47dykSoRcYZxp1uwH",
  "key29": "62sjzwjoZmoT2DBsBLaspgYZwyCvLToJT8khiPAwhb8AajM9ULitTw4oHKvsstshXNZhNqwy1mpq5vErYwhEjPEh",
  "key30": "4ErARQj4oaKuAcdhXRm8pADiXUKmEcu2eqE71wSLTF44sBhR2GoLc3H2SKMY3iqnZiQAt9NGwk9LA97KAgNgFkEA",
  "key31": "27vX74m3VjQQ48twmvxFBt9czWkar6Am21UzKgQG5FZS9aZVfwTE6u93nr3e4nJ7xhFqXc6vDkH6LCiZSA5XRQLj",
  "key32": "5U6Y9DLR3NFFQ2dScEaSuwh19RRDsfquQ3gcV7K6xmC5ABzuJKx7RVqSo4CF9QFK9MuNrmj557EHf1z684bjGA8G",
  "key33": "4foM9QZjbMEoXrYfTPAMrz7xe8c7PHYrxHVhhvmn2RF3z9SYRVdpVWDBiyXCsRpeN8hyesViFSFmJhVokXrC6NwJ",
  "key34": "2FaPzyLnSnyUTTVkvPbq2ePYwhiNwCBkxP1di2dnwFQEpyQ3dEFc1hL54Fh2hiuTJmKjyAKphLC1fwjCxERgAhdd",
  "key35": "uRBVP5cDb4nhXVLm6Hp4UAcaZh7yhcvXFMwepZfkGCUatqe46wPB4QDPv1KgcKN4dYMhTMQqhxKtP6H3zrX3Gnz",
  "key36": "cRtcy6oyiT35VqenQKQEixquDPWjcYjGT1HjenNtdDc9r9uuDymNRfEzN9JPEJ9XqgLBpM8b6yy76CRvC3SrC1k",
  "key37": "5q8sLCL9AR5x2TaThPkB9i7nL1jfbFiTWBsAo7BVkgkrFVkC7eMyPKHwoCW8BkVsuHjWJsS7QtRz9tP6SGTqWJuq"
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
